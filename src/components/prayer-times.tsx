"use client";

import { usePrayerTimes } from "@/hooks/use-prayer-times";
import { Alert, AlertDescription } from "@/src/components/ui/alert";
import { PrayerTimesProps } from "@/types/prayer-times";
import { AlertCircle, Clock } from "lucide-react";
import { useEffect, useState } from "react";

export const PrayerTimes = ({
  layout = "horizontal",
  latitude,
  longitude,
  className,
}: PrayerTimesProps) => {
  const { prayerTimes, isLoading, error } = usePrayerTimes(latitude, longitude);
  const [currentTime, setCurrentTime] = useState(new Date());

  const baseCardStyle = {
    borderRadius: "0.5rem",
    border: "1px solid #e2e8f0",
    backgroundColor: "white",
    padding: "1rem",
    boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1)",
  };

  const timeBlockStyle = {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "0.5rem",
  };

  const labelStyle = {
    fontSize: "0.875rem",
    fontWeight: 500,
    color: "#64748b",
  };

  const timeStyle = {
    fontSize: "1rem",
    fontWeight: 600,
    color: "#1e293b",
  };

  // Update current time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  if (layout === "horizontal") {
    return (
      <div style={baseCardStyle}>
        <div style={timeBlockStyle}>
          <span style={labelStyle}>Prayer Times</span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "0.875rem",
              fontWeight: 400,
            }}
          >
            <Clock className="mr-2 h-4 w-4" />
            {currentTime.toLocaleTimeString()}
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
            gap: "1rem",
          }}
        >
          {isLoading
            ? Array(5)
                .fill(0)
                .map((_, i) => (
                  <div key={i} style={timeBlockStyle}>
                    <div
                      style={{
                        height: "2rem",
                        width: "2rem",
                        borderRadius: "50%",
                        backgroundColor: "#e2e8f0",
                      }}
                    />
                    <div
                      style={{
                        height: "1rem",
                        width: "5rem",
                        backgroundColor: "#e2e8f0",
                      }}
                    />
                    <div
                      style={{
                        height: "1rem",
                        width: "4rem",
                        backgroundColor: "#e2e8f0",
                      }}
                    />
                  </div>
                ))
            : prayerTimes.map((prayer) => (
                <div
                  key={prayer.name}
                  style={{ ...timeBlockStyle, backgroundColor: "#f1f5f9" }}
                >
                  <prayer.icon className="h-8 w-8" />
                  <span style={labelStyle}>{prayer.name}</span>
                  <span style={timeStyle}>{prayer.time}</span>
                </div>
              ))}
        </div>
      </div>
    );
  }

  return (
    <div style={baseCardStyle}>
      <div style={timeBlockStyle}>
        <span style={labelStyle}>Prayer Times</span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "0.875rem",
            fontWeight: 400,
          }}
        >
          <Clock className="mr-2 h-4 w-4" />
          {currentTime.toLocaleTimeString()}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {isLoading
          ? Array(5)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <div
                      style={{
                        height: "2rem",
                        width: "2rem",
                        borderRadius: "50%",
                        backgroundColor: "#e2e8f0",
                      }}
                    />
                    <div
                      style={{
                        height: "1rem",
                        width: "5rem",
                        backgroundColor: "#e2e8f0",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      height: "1rem",
                      width: "4rem",
                      backgroundColor: "#e2e8f0",
                    }}
                  />
                </div>
              ))
          : prayerTimes.map((prayer) => (
              <div
                key={prayer.name}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "#f1f5f9",
                  padding: "1rem",
                  borderRadius: "0.5rem",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <prayer.icon className="h-8 w-8" />
                  <span style={labelStyle}>{prayer.name}</span>
                </div>
                <span style={timeStyle}>{prayer.time}</span>
              </div>
            ))}
      </div>
    </div>
  );
};
