var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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

// src/components/prayer-times.tsx
import { AlertCircle, Clock } from "lucide-react";
import { useEffect as useEffect2, useState as useState2 } from "react";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var PrayerTimes = ({
  layout = "horizontal",
  latitude,
  longitude,
  className
}) => {
  const { prayerTimes, isLoading, error } = usePrayerTimes(latitude, longitude);
  const [currentTime, setCurrentTime] = useState2(/* @__PURE__ */ new Date());
  const baseCardStyle = {
    borderRadius: "0.5rem",
    border: "1px solid #e2e8f0",
    backgroundColor: "white",
    padding: "1rem",
    boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1)"
  };
  const timeBlockStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5rem"
  };
  const labelStyle = {
    fontSize: "0.875rem",
    fontWeight: 500,
    color: "#64748b"
  };
  const timeStyle = {
    fontSize: "1rem",
    fontWeight: 600,
    color: "#1e293b"
  };
  useEffect2(() => {
    const timer = setInterval(() => {
      setCurrentTime(/* @__PURE__ */ new Date());
    }, 6e4);
    return () => clearInterval(timer);
  }, []);
  if (error) {
    return /* @__PURE__ */ jsxs(Alert, { variant: "destructive", children: [
      /* @__PURE__ */ jsx2(AlertCircle, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsx2(AlertDescription, { children: error })
    ] });
  }
  if (layout === "horizontal") {
    return /* @__PURE__ */ jsxs("div", { style: baseCardStyle, children: [
      /* @__PURE__ */ jsxs("div", { style: timeBlockStyle, children: [
        /* @__PURE__ */ jsx2("span", { style: labelStyle, children: "Prayer Times" }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              fontSize: "0.875rem",
              fontWeight: 400
            },
            children: [
              /* @__PURE__ */ jsx2(Clock, { className: "mr-2 h-4 w-4" }),
              currentTime.toLocaleTimeString()
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx2(
        "div",
        {
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
            gap: "1rem"
          },
          children: isLoading ? Array(5).fill(0).map((_, i) => /* @__PURE__ */ jsxs("div", { style: timeBlockStyle, children: [
            /* @__PURE__ */ jsx2(
              "div",
              {
                style: {
                  height: "2rem",
                  width: "2rem",
                  borderRadius: "50%",
                  backgroundColor: "#e2e8f0"
                }
              }
            ),
            /* @__PURE__ */ jsx2(
              "div",
              {
                style: {
                  height: "1rem",
                  width: "5rem",
                  backgroundColor: "#e2e8f0"
                }
              }
            ),
            /* @__PURE__ */ jsx2(
              "div",
              {
                style: {
                  height: "1rem",
                  width: "4rem",
                  backgroundColor: "#e2e8f0"
                }
              }
            )
          ] }, i)) : prayerTimes.map((prayer) => /* @__PURE__ */ jsxs(
            "div",
            {
              style: __spreadProps(__spreadValues({}, timeBlockStyle), { backgroundColor: "#f1f5f9" }),
              children: [
                /* @__PURE__ */ jsx2(prayer.icon, { className: "h-8 w-8" }),
                /* @__PURE__ */ jsx2("span", { style: labelStyle, children: prayer.name }),
                /* @__PURE__ */ jsx2("span", { style: timeStyle, children: prayer.time })
              ]
            },
            prayer.name
          ))
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { style: baseCardStyle, children: [
    /* @__PURE__ */ jsxs("div", { style: timeBlockStyle, children: [
      /* @__PURE__ */ jsx2("span", { style: labelStyle, children: "Prayer Times" }),
      /* @__PURE__ */ jsxs(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            fontSize: "0.875rem",
            fontWeight: 400
          },
          children: [
            /* @__PURE__ */ jsx2(Clock, { className: "mr-2 h-4 w-4" }),
            currentTime.toLocaleTimeString()
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx2("div", { style: { display: "flex", flexDirection: "column", gap: "1rem" }, children: isLoading ? Array(5).fill(0).map((_, i) => /* @__PURE__ */ jsxs(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        },
        children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "1rem"
              },
              children: [
                /* @__PURE__ */ jsx2(
                  "div",
                  {
                    style: {
                      height: "2rem",
                      width: "2rem",
                      borderRadius: "50%",
                      backgroundColor: "#e2e8f0"
                    }
                  }
                ),
                /* @__PURE__ */ jsx2(
                  "div",
                  {
                    style: {
                      height: "1rem",
                      width: "5rem",
                      backgroundColor: "#e2e8f0"
                    }
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx2(
            "div",
            {
              style: {
                height: "1rem",
                width: "4rem",
                backgroundColor: "#e2e8f0"
              }
            }
          )
        ]
      },
      i
    )) : prayerTimes.map((prayer) => /* @__PURE__ */ jsxs(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#f1f5f9",
          padding: "1rem",
          borderRadius: "0.5rem"
        },
        children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              style: { display: "flex", alignItems: "center", gap: "1rem" },
              children: [
                /* @__PURE__ */ jsx2(prayer.icon, { className: "h-8 w-8" }),
                /* @__PURE__ */ jsx2("span", { style: labelStyle, children: prayer.name })
              ]
            }
          ),
          /* @__PURE__ */ jsx2("span", { style: timeStyle, children: prayer.time })
        ]
      },
      prayer.name
    )) })
  ] });
};

// src/components/ui/card.tsx
import * as React2 from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
var Card = React2.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx3(
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
  return /* @__PURE__ */ jsx3(
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
  return /* @__PURE__ */ jsx3(
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
  return /* @__PURE__ */ jsx3(
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
  return /* @__PURE__ */ jsx3("div", __spreadValues({ ref, className: cn("p-6 pt-0", className) }, props));
});
CardContent.displayName = "CardContent";
var CardFooter = React2.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx3(
    "div",
    __spreadValues({
      ref,
      className: cn("flex items-center p-6 pt-0", className)
    }, props)
  );
});
CardFooter.displayName = "CardFooter";

// src/components/ui/skeleton.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
function Skeleton(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsx4(
    "div",
    __spreadValues({
      className: cn("animate-pulse rounded-md bg-primary/10", className)
    }, props)
  );
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
