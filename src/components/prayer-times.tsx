"use client";

import { cva } from "class-variance-authority";
import React, { useState } from "react";

// Utility function to combine class names
const cn = (...classes: (string | undefined)[]) =>
  classes.filter(Boolean).join(" ");

// Alert Component
const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-white text-gray-900 border-gray-200",
        destructive: "border-red-500/50 text-red-600 dark:border-red-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { variant?: "default" | "destructive" }
>(({ className, variant = "default", ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
));

// Card Components
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border border-gray-200 bg-white text-gray-900 shadow",
      className
    )}
    {...props}
  />
));

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
// Skeleton Component
const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("animate-pulse rounded-md bg-gray-200", className)}
    {...props}
  />
);

// Add enums for better readability
enum CalculationMethod {
  Jafari = 0,
  Karachi = 1,
  ISNA = 2,
  MWL = 3,
  Makkah = 4,
  Egypt = 5,
  Tehran = 7,
  Gulf = 8,
  Kuwait = 9,
  Qatar = 10,
  Singapore = 11,
  France = 12,
  Turkey = 13,
  Russia = 14,
  Moonsighting = 15,
  Dubai = 16,
  Malaysia = 17,
  Tunisia = 18,
  Algeria = 19,
  Indonesia = 20,
  Morocco = 21,
  Portugal = 22,
  Jordan = 23,
  Custom = 99,
}

enum School {
  Shafi = 0,
  Hanafi = 1,
}

interface LocationConfig {
  address?: string;
  city?: string;
  country?: string;
  state?: string;
  school?: School;
  method?: CalculationMethod;
  adjustments?: {
    fajr?: number;
    sunrise?: number;
    dhuhr?: number;
    asr?: number;
    maghrib?: number;
    isha?: number;
  };
}

interface PrayerTimesProps {
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

// Main PrayerTimes Component
export const PrayerTimes: React.FC<PrayerTimesProps> = ({
  minimized = false,
  styles = {},
  location: initialLocation,
  showSettings = false,
}) => {
  const [location, setLocation] = useState<LocationConfig>(
    initialLocation || {}
  );
  const [prayerData, setPrayerData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Create arrays of calculation methods and schools for the select dropdowns
  const calculationMethods = Object.entries(CalculationMethod)
    .filter(([key]) => isNaN(Number(key)))
    .map(([key, value]) => ({
      label: key.replace(/([A-Z])/g, " $1").trim(), // Add spaces before capital letters
      value: value,
    }));

  const schools = Object.entries(School)
    .filter(([key]) => isNaN(Number(key)))
    .map(([key, value]) => ({
      label: key,
      value: value,
    }));

  // Settings component
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
            value={location.method}
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
            <option value="">Select Method</option>
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
            value={location.school}
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

  return (
    <div style={styles.container}>
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
        {/* ... prayer times display ... */}
      </div>
    </div>
  );
};
