import React$1 from 'react';
import { ClassValue } from 'clsx';

interface PrayerTimesProps$1 {
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

declare enum CalculationMethod {
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
    Custom = 99
}
declare enum School {
    Shafi = 0,
    Hanafi = 1
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
        container?: React$1.CSSProperties;
        header?: React$1.CSSProperties;
        timeBlock?: React$1.CSSProperties;
        time?: React$1.CSSProperties;
        select?: React$1.CSSProperties;
    };
    location?: LocationConfig;
    showSettings?: boolean;
}
declare const PrayerTimes: React$1.FC<PrayerTimesProps>;

declare function cn(...inputs: ClassValue[]): string;

declare function usePrayerTimes(latitude?: number, longitude?: number): {
    prayerTimes: PrayerTime[];
    isLoading: boolean;
    error: string | null;
};

export { type AladhanResponse, type PrayerTime, PrayerTimes, type PrayerTimesProps$1 as PrayerTimesProps, cn, usePrayerTimes };
