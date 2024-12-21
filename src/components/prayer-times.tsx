"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// Constants and types
const calculationMethods = [
  { label: "Jafari", value: 0 },
  { label: "University of Islamic Sciences, Karachi", value: 1 },
  { label: "Islamic Society of North America (ISNA)", value: 2 },
  { label: "Muslim World League", value: 3 },
  { label: "Umm Al-Qura University, Makkah", value: 4 },
  { label: "Egyptian General Authority", value: 5 },
  { label: "Institute of Geophysics, Tehran", value: 7 },
  { label: "Gulf Region", value: 8 },
  { label: "Kuwait", value: 9 },
  { label: "Qatar", value: 10 },
  { label: "Majlis Ugama Islam Singapura", value: 11 },
  { label: "Union Organization Islamic de France", value: 12 },
  { label: "Diyanet İşleri Başkanlığı", value: 13 },
  // TODO: add other methods as needed
];

const schools = [
  { label: "Shafi", value: 0 },
  { label: "Hanafi", value: 1 },
];

interface Coordinates {
  latitude: number;
  longitude: number;
}

interface LocationConfig {
  address?: string;
  city?: string;
  country?: string;
  state?: string;
  school?: number;
  method?: number;
}

interface PrayerTimesProps {
  layout?: "horizontal" | "vertical";
  latitude?: number;
  longitude?: number;
  minimized?: boolean;
  styles?: {
    container?: React.CSSProperties;
    header?: React.CSSProperties;
    timeBlock?: React.CSSProperties;
    time?: React.CSSProperties;
    select?: React.CSSProperties;
  };
  location?: LocationConfig;
  showSettings?: boolean;
}

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-primary/10", className)}
      {...props}
    />
  )
}

const PrayerTimesSkeleton = ({ minimized = false }) => (
  <div className="space-y-4 p-5">
    <Skeleton className="h-8 w-[150px]" />
    
    <div className={cn(
      "grid gap-4",
      minimized ? "grid-cols-1" : "grid-cols-2 md:grid-cols-3"
    )}>
      {[...Array(6)].map((_, index) => (
        <div key={index} className="space-y-2">
          <Skeleton className="h-6 w-[100px] mx-auto" />
          <Skeleton className="h-7 w-[80px] mx-auto" />
        </div>
      ))}
    </div>
  </div>
);

export const PrayerTimesDisplay = ({
  layout = "horizontal",
  latitude,
  longitude,
  minimized = false,
  styles = {},
  location: initialLocation = {},
  showSettings = false,
}: PrayerTimesProps) => {
  const [location, setLocation] = useState(initialLocation);
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [prayerData, setPrayerData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Get coordinates from browser geolocation
  const getCurrentPosition = (): Promise<Coordinates> => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error("Geolocation is not supported"));
      }
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => reject(error)
      );
    });
  };

  // Get coordinates from address using Nominatim API
  const getCoordinatesFromAddress = async (
    address: string
  ): Promise<Coordinates> => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        address
      )}`
    );
    const data = await response.json();
    if (data && data[0]) {
      return {
        latitude: parseFloat(data[0].lat),
        longitude: parseFloat(data[0].lon),
      };
    }
    throw new Error("Address not found");
  };

  // Get coordinates from city/country using Nominatim API
  const getCoordinatesFromCity = async (
    city: string,
    country: string,
    state?: string
  ): Promise<Coordinates> => {
    const query = state
      ? `${city}, ${state}, ${country}`
      : `${city}, ${country}`;
    return getCoordinatesFromAddress(query);
  };

  useEffect(() => {
    const getCoordinates = async () => {
      try {
        let coords: Coordinates;

        if (location.address) {
          coords = await getCoordinatesFromAddress(location.address);
        } else if (location.city && location.country) {
          coords = await getCoordinatesFromCity(
            location.city,
            location.country,
            location.state
          );
        } else {
          coords = await getCurrentPosition();
        }

        setCoordinates(coords);
      } catch (error) {
        setError(
          "Could not determine location. Please check your input or try again."
        );
        setLoading(false);
      }
    };

    getCoordinates();
  }, [location]);

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      if (!coordinates) return;

      try {
        const date = new Date();
        const dateStr = `${date.getDate()}-${
          date.getMonth() + 1
        }-${date.getFullYear()}`;

        const params = new URLSearchParams({
          latitude: coordinates.latitude.toString(),
          longitude: coordinates.longitude.toString(),
          method: (location.method || 2).toString(), // Default to ISNA method
          school: (location.school || 0).toString(), // Default to Shafi
        });

        const response = await fetch(
          `https://api.aladhan.com/v1/timings/${dateStr}?${params}`
        );
        const data = await response.json();

        if (data.code === 200) {
          setPrayerData(data.data);
        } else {
          throw new Error("Failed to fetch prayer times");
        }
      } catch (error) {
        setError("Failed to fetch prayer times. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPrayerTimes();
  }, [coordinates, location.method, location.school]);

  const Settings = () => (
    <div
      className="settings-panel"
      style={{
        marginBottom: "1rem",
        padding: "1rem",
        backgroundColor: "#f8f9fa",
        borderRadius: "8px",
      }}
    >
      <div className="setting-group" style={{ marginBottom: "1rem" }}>
        <label style={{ display: "block", marginBottom: "0.5rem" }}>
          Calculation Method:
          <select
            value={location.method || 2}
            onChange={(e) =>
              setLocation((prev) => ({
                ...prev,
                method: Number(e.target.value),
              }))
            }
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "4px",
              border: "1px solid #ddd",
              ...styles.select,
            }}
          >
            {calculationMethods.map(({ label, value }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="setting-group">
        <label style={{ display: "block", marginBottom: "0.5rem" }}>
          School:
          <select
            value={location.school || 0}
            onChange={(e) =>
              setLocation((prev) => ({
                ...prev,
                school: Number(e.target.value),
              }))
            }
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "4px",
              border: "1px solid #ddd",
              ...styles.select,
            }}
          >
            {schools.map(({ label, value }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );

  const containerStyles: React.CSSProperties = {
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    width: minimized ? "300px" : "100%",
    ...styles.container,
  };

  if (loading) return <PrayerTimesSkeleton minimized={minimized} />;
  if (error) return <div>{error}</div>;
  if (!prayerData) return null;

  const prayerTimes = [
    { name: "Fajr", time: prayerData.timings.Fajr },
    { name: "Sunrise", time: prayerData.timings.Sunrise },
    { name: "Dhuhr", time: prayerData.timings.Dhuhr },
    { name: "Asr", time: prayerData.timings.Asr },
    { name: "Maghrib", time: prayerData.timings.Maghrib },
    { name: "Isha", time: prayerData.timings.Isha },
  ];

  return (
    <div style={containerStyles}>
      <h2 style={styles.header}>Prayer Times</h2>

      {showSettings && <Settings />}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: minimized
            ? "1fr"
            : "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
        }}
      >
        {prayerTimes.map(({ name, time }) => (
          <div
            key={name}
            style={{
              padding: "1rem",
              backgroundColor: "#f5f5f5",
              borderRadius: "4px",
              textAlign: "center",
              ...styles.timeBlock,
            }}
          >
            <h3 style={{ margin: "0 0 0.5rem 0" }}>{name}</h3>
            <p style={{ margin: 0, fontSize: "1.2rem", ...styles.time }}>
              {time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
