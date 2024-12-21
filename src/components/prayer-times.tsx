"use client";

import { cva } from "class-variance-authority";
import { AlertCircle, Clock } from "lucide-react";
import React, { useEffect, useState } from "react";

// Utility function to combine class names
import { usePrayerTimes } from "@/hooks/use-prayer-times";
import { PrayerTimesProps } from "@/types/prayer-times";
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
// Main PrayerTimes Component
export const PrayerTimes: React.FC<PrayerTimesProps & { minimized?: boolean }> = ({
  layout = "horizontal",
  latitude,
  longitude,
  className,
  minimized = false,
}) => {
  const { prayerTimes, isLoading, error } = usePrayerTimes(latitude, longitude);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const getNextPrayer = () => {
    if (!prayerTimes?.length) return null;
    
    const now = currentTime;
    const currentTimeStr = now.toLocaleTimeString('en-US', { hour12: false });
    
    return prayerTimes.find(prayer => prayer.time > currentTimeStr) 
      || prayerTimes[0]; // If no next prayer today, return first prayer of next day
  };

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <div>{error}</div>
      </Alert>
    );
  }

  if (minimized) {
    const nextPrayer = getNextPrayer();
    
    return (
      <Card className={cn("w-full", className)}>
        <CardContent className="p-4">
          {isLoading ? (
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-4 w-20" />
              </div>
              <Skeleton className="h-4 w-16" />
            </div>
          ) : nextPrayer && (
            <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
              <div className="flex items-center space-x-4">
                <nextPrayer.icon className="h-8 w-8" />
                <span className="font-medium">{nextPrayer.name}</span>
              </div>
              <span className="text-sm text-gray-500">{nextPrayer.time}</span>
            </div>
          )}
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
        <div
          className={
            layout === "horizontal"
              ? "grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5"
              : "space-y-4"
          }
        >
          {isLoading
            ? Array(5)
                .fill(0)
                .map((_, i) =>
                  layout === "horizontal" ? (
                    <div
                      key={i}
                      className="flex flex-col items-center space-y-2"
                    >
                      <Skeleton className="h-8 w-8 rounded-full" />
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-4 w-16" />
                    </div>
                  ) : (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Skeleton className="h-8 w-8 rounded-full" />
                        <Skeleton className="h-4 w-20" />
                      </div>
                      <Skeleton className="h-4 w-16" />
                    </div>
                  )
                )
            : prayerTimes.map((prayer) =>
                layout === "horizontal" ? (
                  <div
                    key={prayer.name}
                    className="flex flex-col items-center space-y-2 rounded-lg bg-gray-50 p-4"
                  >
                    <prayer.icon className="h-8 w-8" />
                    <span className="font-medium">{prayer.name}</span>
                    <span className="text-sm text-gray-500">{prayer.time}</span>
                  </div>
                ) : (
                  <div
                    key={prayer.name}
                    className="flex items-center justify-between rounded-lg bg-gray-50 p-4"
                  >
                    <div className="flex items-center space-x-4">
                      <prayer.icon className="h-8 w-8" />
                      <span className="font-medium">{prayer.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">{prayer.time}</span>
                  </div>
                )
              )}
        </div>
      </CardContent>
    </Card>
  );
};
