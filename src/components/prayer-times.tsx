"use client";

import { usePrayerTimes } from "@/hooks/use-prayer-times";
import { PrayerTimesProps } from "@/types/prayer-times";
import React from "react";
import { styles } from "../styles/base";
import { Alert, AlertDescription } from "./ui/alert";
import { Skeleton } from "./ui/skeleton";

export const PrayerTimes: React.FC<PrayerTimesProps> = ({
  layout = "horizontal",
  latitude,
  longitude,
}) => {
  const { prayerTimes, isLoading, error } = usePrayerTimes(latitude, longitude);
  const containerStyle = styles.prayerTimes.container[layout];

  if (isLoading) {
    return (
      <div className={containerStyle}>
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="h-20 w-full" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <Alert>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  return (
    <div className={containerStyle}>
      {prayerTimes.map((prayer) => (
        <div key={prayer.name} className={styles.prayerTimes.timeBlock}>
          <div className="flex items-center gap-2">
            <prayer.icon className="h-4 w-4" />
            <span className={styles.prayerTimes.label}>{prayer.name}</span>
          </div>
          <span className={styles.prayerTimes.time}>{prayer.time}</span>
        </div>
      ))}
    </div>
  );
};
