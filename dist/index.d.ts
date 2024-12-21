import React$1 from 'react';
import { ClassValue } from 'clsx';

interface PrayerTimesProps {
    layout: "vertical" | "horizontal";
    className?: string;
    latitude?: number;
    longitude?: number;
}
interface PrayerTime {
    name: string;
    time: string;
    icon: React.ComponentType<{
        className?: string;
    }>;
}
interface AladhanResponse {
    code: number;
    status: string;
    data: {
        timings: {
            Fajr: string;
            Sunrise: string;
            Dhuhr: string;
            Asr: string;
            Sunset: string;
            Maghrib: string;
            Isha: string;
            Imsak: string;
            Midnight: string;
            Firstthird: string;
            Lastthird: string;
        };
        date: {
            readable: string;
            timestamp: string;
            gregorian: {
                date: string;
                format: string;
                day: string;
                weekday: {
                    en: string;
                };
                month: {
                    number: number;
                    en: string;
                };
                year: string;
                designation: {
                    abbreviated: string;
                    expanded: string;
                };
            };
            hijri: {
                date: string;
                format: string;
                day: string;
                weekday: {
                    en: string;
                    ar: string;
                };
                month: {
                    number: number;
                    en: string;
                    ar: string;
                };
                year: string;
                designation: {
                    abbreviated: string;
                    expanded: string;
                };
                holidays: string[];
            };
        };
        meta: {
            latitude: number;
            longitude: number;
            timezone: string;
            method: {
                id: number;
                name: string;
                params: {
                    Fajr: number;
                    Isha: number;
                };
                location: {
                    latitude: number;
                    longitude: number;
                };
            };
            latitudeAdjustmentMethod: string;
            midnightMode: string;
            school: string;
            offset: {
                Imsak: number;
                Fajr: number;
                Sunrise: number;
                Dhuhr: number;
                Asr: number;
                Maghrib: number;
                Sunset: number;
                Isha: number;
                Midnight: number;
            };
        };
    };
}

declare const PrayerTimes: React$1.FC<PrayerTimesProps>;

declare function cn(...inputs: ClassValue[]): string;

declare function usePrayerTimes(latitude?: number, longitude?: number): {
    prayerTimes: PrayerTime[];
    isLoading: boolean;
    error: string | null;
};

export { type AladhanResponse, type PrayerTime, PrayerTimes, type PrayerTimesProps, cn, usePrayerTimes };
