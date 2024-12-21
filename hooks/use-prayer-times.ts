import type { AladhanResponse, PrayerTime } from "@/types/prayer-times";
import { Moon, Sun, Sunrise, Sunset } from "lucide-react";
import { useEffect, useState } from "react";

export function usePrayerTimes(latitude?: number, longitude?: number) {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTime[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPrayerTimes() {
      try {
        // Get current date
        const date = new Date();
        const timestamp = Math.floor(date.getTime() / 1000);

        // Get timezone using Intl
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        // Use provided coordinates or default to Mecca
        const lat = latitude ?? 21.4225;
        const lng = longitude ?? 39.8262;

        // Fetch prayer times from Aladhan API
        const response = await fetch(
          `https://api.aladhan.com/v1/timings/${timestamp}?latitude=${lat}&longitude=${lng}&method=3&school=1&timezone=${timeZone}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch prayer times");
        }

        const data: AladhanResponse = await response.json();

        // Format the prayer times
        const formattedTimes: PrayerTime[] = [
          { name: "Fajr", time: data.data.timings.Fajr, icon: Sunrise },
          { name: "Dhuhr", time: data.data.timings.Dhuhr, icon: Sun },
          { name: "Asr", time: data.data.timings.Asr, icon: Sun },
          { name: "Maghrib", time: data.data.timings.Maghrib, icon: Sunset },
          { name: "Isha", time: data.data.timings.Isha, icon: Moon },
        ];

        setPrayerTimes(formattedTimes);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    }

    fetchPrayerTimes();
  }, [latitude, longitude]);

  return { prayerTimes, isLoading, error };
}
