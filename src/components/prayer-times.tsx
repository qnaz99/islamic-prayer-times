"use client";

import { Alert, AlertDescription } from "@/src/components/ui/alert";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Skeleton } from "@/src/components/ui/skeleton";
import { usePrayerTimes } from "@/hooks/use-prayer-times";
import { cn } from "@/lib/utils";
import { PrayerTimesProps } from "@/types/prayer-times";
import { AlertCircle, Clock } from "lucide-react";
import { useEffect, useState } from "react";

export function PrayerTimes({
  layout = "horizontal",
  latitude,
  longitude,
  className,
}: PrayerTimesProps) {
  const { prayerTimes, isLoading, error } = usePrayerTimes(latitude, longitude);
  const [currentTime, setCurrentTime] = useState(new Date());

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
      <Card className={cn("w-full", className)}>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Prayer Times</span>
            <div className="flex items-center text-sm font-normal">
              <Clock className="mr-2 h-4 w-4" />
              {currentTime.toLocaleTimeString()}
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {isLoading
              ? Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center space-y-2"
                    >
                      <Skeleton className="h-8 w-8 rounded-full" />
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-4 w-16" />
                    </div>
                  ))
              : prayerTimes.map((prayer) => (
                  <div
                    key={prayer.name}
                    className="flex flex-col items-center space-y-2 rounded-lg bg-muted p-4"
                  >
                    <prayer.icon className="h-8 w-8" />
                    <span className="font-medium">{prayer.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {prayer.time}
                    </span>
                  </div>
                ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Prayer Times</span>
          <div className="flex items-center text-sm font-normal">
            <Clock className="mr-2 h-4 w-4" />
            {currentTime.toLocaleTimeString()}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {isLoading
            ? Array(5)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Skeleton className="h-8 w-8 rounded-full" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                    <Skeleton className="h-4 w-16" />
                  </div>
                ))
            : prayerTimes.map((prayer) => (
                <div
                  key={prayer.name}
                  className="flex items-center justify-between rounded-lg bg-muted p-4"
                >
                  <div className="flex items-center space-x-4">
                    <prayer.icon className="h-8 w-8" />
                    <span className="font-medium">{prayer.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {prayer.time}
                  </span>
                </div>
              ))}
        </div>
      </CardContent>
    </Card>
  );
}
