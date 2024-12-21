var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/components/ui/alert.tsx
import * as React from "react";
import { cva } from "class-variance-authority";

// lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/ui/alert.tsx
import { jsx } from "react/jsx-runtime";
var alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Alert = React.forwardRef((_a, ref) => {
  var _b = _a, { className, variant } = _b, props = __objRest(_b, ["className", "variant"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      ref,
      role: "alert",
      className: cn(alertVariants({ variant }), className)
    }, props)
  );
});
Alert.displayName = "Alert";
var AlertTitle = React.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "h5",
    __spreadValues({
      ref,
      className: cn("mb-1 font-medium leading-none tracking-tight", className)
    }, props)
  );
});
AlertTitle.displayName = "AlertTitle";
var AlertDescription = React.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      ref,
      className: cn("text-sm [&_p]:leading-relaxed", className)
    }, props)
  );
});
AlertDescription.displayName = "AlertDescription";

// src/components/ui/card.tsx
import * as React2 from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var Card = React2.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx2(
    "div",
    __spreadValues({
      ref,
      className: cn(
        "rounded-xl border bg-card text-card-foreground shadow",
        className
      )
    }, props)
  );
});
Card.displayName = "Card";
var CardHeader = React2.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx2(
    "div",
    __spreadValues({
      ref,
      className: cn("flex flex-col space-y-1.5 p-6", className)
    }, props)
  );
});
CardHeader.displayName = "CardHeader";
var CardTitle = React2.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx2(
    "div",
    __spreadValues({
      ref,
      className: cn("font-semibold leading-none tracking-tight", className)
    }, props)
  );
});
CardTitle.displayName = "CardTitle";
var CardDescription = React2.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx2(
    "div",
    __spreadValues({
      ref,
      className: cn("text-sm text-muted-foreground", className)
    }, props)
  );
});
CardDescription.displayName = "CardDescription";
var CardContent = React2.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx2("div", __spreadValues({ ref, className: cn("p-6 pt-0", className) }, props));
});
CardContent.displayName = "CardContent";
var CardFooter = React2.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx2(
    "div",
    __spreadValues({
      ref,
      className: cn("flex items-center p-6 pt-0", className)
    }, props)
  );
});
CardFooter.displayName = "CardFooter";

// src/components/ui/skeleton.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
function Skeleton(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsx3(
    "div",
    __spreadValues({
      className: cn("animate-pulse rounded-md bg-primary/10", className)
    }, props)
  );
}

// hooks/use-prayer-times.ts
import { Moon, Sun, Sunrise, Sunset } from "lucide-react";
import { useEffect, useState } from "react";
function usePrayerTimes(latitude, longitude) {
  const [prayerTimes, setPrayerTimes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchPrayerTimes() {
      try {
        const date = /* @__PURE__ */ new Date();
        const timestamp = Math.floor(date.getTime() / 1e3);
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const lat = latitude != null ? latitude : 21.4225;
        const lng = longitude != null ? longitude : 39.8262;
        const response = await fetch(
          `https://api.aladhan.com/v1/timings/${timestamp}?latitude=${lat}&longitude=${lng}&method=3&school=1&timezone=${timeZone}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch prayer times");
        }
        const data = await response.json();
        const formattedTimes = [
          { name: "Fajr", time: data.data.timings.Fajr, icon: Sunrise },
          { name: "Dhuhr", time: data.data.timings.Dhuhr, icon: Sun },
          { name: "Asr", time: data.data.timings.Asr, icon: Sun },
          { name: "Maghrib", time: data.data.timings.Maghrib, icon: Sunset },
          { name: "Isha", time: data.data.timings.Isha, icon: Moon }
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

// src/components/prayer-times.tsx
import { AlertCircle, Clock } from "lucide-react";
import { useEffect as useEffect2, useState as useState2 } from "react";
import { jsx as jsx4, jsxs } from "react/jsx-runtime";
function PrayerTimes({
  layout = "horizontal",
  latitude,
  longitude,
  className
}) {
  const { prayerTimes, isLoading, error } = usePrayerTimes(latitude, longitude);
  const [currentTime, setCurrentTime] = useState2(/* @__PURE__ */ new Date());
  useEffect2(() => {
    const timer = setInterval(() => {
      setCurrentTime(/* @__PURE__ */ new Date());
    }, 6e4);
    return () => clearInterval(timer);
  }, []);
  if (error) {
    return /* @__PURE__ */ jsxs(Alert, { variant: "destructive", children: [
      /* @__PURE__ */ jsx4(AlertCircle, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsx4(AlertDescription, { children: error })
    ] });
  }
  if (layout === "horizontal") {
    return /* @__PURE__ */ jsxs(Card, { className: cn("w-full", className), children: [
      /* @__PURE__ */ jsx4(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx4("span", { children: "Prayer Times" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center text-sm font-normal", children: [
          /* @__PURE__ */ jsx4(Clock, { className: "mr-2 h-4 w-4" }),
          currentTime.toLocaleTimeString()
        ] })
      ] }) }),
      /* @__PURE__ */ jsx4(CardContent, { children: /* @__PURE__ */ jsx4("div", { className: "grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5", children: isLoading ? Array(5).fill(0).map((_, i) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex flex-col items-center space-y-2",
          children: [
            /* @__PURE__ */ jsx4(Skeleton, { className: "h-8 w-8 rounded-full" }),
            /* @__PURE__ */ jsx4(Skeleton, { className: "h-4 w-20" }),
            /* @__PURE__ */ jsx4(Skeleton, { className: "h-4 w-16" })
          ]
        },
        i
      )) : prayerTimes.map((prayer) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex flex-col items-center space-y-2 rounded-lg bg-muted p-4",
          children: [
            /* @__PURE__ */ jsx4(prayer.icon, { className: "h-8 w-8" }),
            /* @__PURE__ */ jsx4("span", { className: "font-medium", children: prayer.name }),
            /* @__PURE__ */ jsx4("span", { className: "text-sm text-muted-foreground", children: prayer.time })
          ]
        },
        prayer.name
      )) }) })
    ] });
  }
  return /* @__PURE__ */ jsxs(Card, { className: cn("w-full", className), children: [
    /* @__PURE__ */ jsx4(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsx4("span", { children: "Prayer Times" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center text-sm font-normal", children: [
        /* @__PURE__ */ jsx4(Clock, { className: "mr-2 h-4 w-4" }),
        currentTime.toLocaleTimeString()
      ] })
    ] }) }),
    /* @__PURE__ */ jsx4(CardContent, { children: /* @__PURE__ */ jsx4("div", { className: "space-y-4", children: isLoading ? Array(5).fill(0).map((_, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ jsx4(Skeleton, { className: "h-8 w-8 rounded-full" }),
        /* @__PURE__ */ jsx4(Skeleton, { className: "h-4 w-20" })
      ] }),
      /* @__PURE__ */ jsx4(Skeleton, { className: "h-4 w-16" })
    ] }, i)) : prayerTimes.map((prayer) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "flex items-center justify-between rounded-lg bg-muted p-4",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
            /* @__PURE__ */ jsx4(prayer.icon, { className: "h-8 w-8" }),
            /* @__PURE__ */ jsx4("span", { className: "font-medium", children: prayer.name })
          ] }),
          /* @__PURE__ */ jsx4("span", { className: "text-sm text-muted-foreground", children: prayer.time })
        ]
      },
      prayer.name
    )) }) })
  ] });
}
export {
  Alert,
  AlertDescription,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  PrayerTimes,
  Skeleton,
  cn,
  usePrayerTimes
};
