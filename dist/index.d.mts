import * as react_jsx_runtime from 'react/jsx-runtime';
import React$1 from 'react';
import { ClassValue } from 'clsx';

interface LocationConfig {
    address?: string;
    city?: string;
    country?: string;
    state?: string;
    school?: number;
    method?: number;
}
interface PrayerTimesProps$1 {
    layout?: "horizontal" | "vertical";
    latitude?: number;
    longitude?: number;
    minimized?: boolean;
    styles?: {
        container?: React$1.CSSProperties;
        header?: React$1.CSSProperties;
        timeBlock?: React$1.CSSProperties;
        time?: React$1.CSSProperties;
        select?: React$1.CSSProperties;
    };
    location?: LocationConfig;
    showSettings?: boolean;
}
declare const PrayerTimesDisplay: ({ layout, latitude, longitude, minimized, styles, location: initialLocation, showSettings, }: PrayerTimesProps$1) => react_jsx_runtime.JSX.Element | null;

interface PrayerTimesProps {
    layout?: "horizontal" | "vertical";
    latitude: number;
    longitude: number;
    className?: string;
    minimized?: boolean;
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

declare function cn(...inputs: ClassValue[]): string;

declare function usePrayerTimes(latitude?: number, longitude?: number): {
    prayerTimes: PrayerTime[];
    isLoading: boolean;
    error: string | null;
};

export { type AladhanResponse, type PrayerTime, PrayerTimesDisplay, type PrayerTimesProps, cn, usePrayerTimes };
