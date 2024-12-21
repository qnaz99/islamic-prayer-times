"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Alert: () => Alert,
  AlertDescription: () => AlertDescription,
  Card: () => Card,
  CardContent: () => CardContent,
  CardHeader: () => CardHeader,
  CardTitle: () => CardTitle,
  PrayerTimes: () => PrayerTimes,
  Skeleton: () => Skeleton,
  cn: () => cn,
  usePrayerTimes: () => usePrayerTimes
});
module.exports = __toCommonJS(index_exports);

// hooks/use-prayer-times.ts
var import_lucide_react = require("lucide-react");
var import_react = require("react");
function usePrayerTimes(latitude, longitude) {
  const [prayerTimes, setPrayerTimes] = (0, import_react.useState)([]);
  const [isLoading, setIsLoading] = (0, import_react.useState)(true);
  const [error, setError] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
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
          { name: "Fajr", time: data.data.timings.Fajr, icon: import_lucide_react.Sunrise },
          { name: "Dhuhr", time: data.data.timings.Dhuhr, icon: import_lucide_react.Sun },
          { name: "Asr", time: data.data.timings.Asr, icon: import_lucide_react.Sun },
          { name: "Maghrib", time: data.data.timings.Maghrib, icon: import_lucide_react.Sunset },
          { name: "Isha", time: data.data.timings.Isha, icon: import_lucide_react.Moon }
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
var React = __toESM(require("react"));
var import_class_variance_authority = require("class-variance-authority");

// lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/ui/alert.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var alertVariants = (0, import_class_variance_authority.cva)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    __spreadValues({
      ref,
      className: cn("text-sm [&_p]:leading-relaxed", className)
    }, props)
  );
});
AlertDescription.displayName = "AlertDescription";

// src/components/prayer-times.tsx
var import_lucide_react2 = require("lucide-react");
var import_react2 = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
var PrayerTimes = ({
  layout = "horizontal",
  latitude,
  longitude,
  className
}) => {
  const { prayerTimes, isLoading, error } = usePrayerTimes(latitude, longitude);
  const [currentTime, setCurrentTime] = (0, import_react2.useState)(/* @__PURE__ */ new Date());
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
  (0, import_react2.useEffect)(() => {
    const timer = setInterval(() => {
      setCurrentTime(/* @__PURE__ */ new Date());
    }, 6e4);
    return () => clearInterval(timer);
  }, []);
  if (error) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Alert, { variant: "destructive", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react2.AlertCircle, { className: "h-4 w-4" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(AlertDescription, { children: error })
    ] });
  }
  if (layout === "horizontal") {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: baseCardStyle, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: timeBlockStyle, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { style: labelStyle, children: "Prayer Times" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              fontSize: "0.875rem",
              fontWeight: 400
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react2.Clock, { className: "mr-2 h-4 w-4" }),
              currentTime.toLocaleTimeString()
            ]
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "div",
        {
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
            gap: "1rem"
          },
          children: isLoading ? Array(5).fill(0).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: timeBlockStyle, children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "div",
              {
                style: {
                  height: "1rem",
                  width: "5rem",
                  backgroundColor: "#e2e8f0"
                }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "div",
              {
                style: {
                  height: "1rem",
                  width: "4rem",
                  backgroundColor: "#e2e8f0"
                }
              }
            )
          ] }, i)) : prayerTimes.map((prayer) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
            "div",
            {
              style: __spreadProps(__spreadValues({}, timeBlockStyle), { backgroundColor: "#f1f5f9" }),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(prayer.icon, { className: "h-8 w-8" }),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { style: labelStyle, children: prayer.name }),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { style: timeStyle, children: prayer.time })
              ]
            },
            prayer.name
          ))
        }
      )
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: baseCardStyle, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: timeBlockStyle, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { style: labelStyle, children: "Prayer Times" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            fontSize: "0.875rem",
            fontWeight: 400
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react2.Clock, { className: "mr-2 h-4 w-4" }),
            currentTime.toLocaleTimeString()
          ]
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { display: "flex", flexDirection: "column", gap: "1rem" }, children: isLoading ? Array(5).fill(0).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "1rem"
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
    )) : prayerTimes.map((prayer) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
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
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
            "div",
            {
              style: { display: "flex", alignItems: "center", gap: "1rem" },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(prayer.icon, { className: "h-8 w-8" }),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { style: labelStyle, children: prayer.name })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { style: timeStyle, children: prayer.time })
        ]
      },
      prayer.name
    )) })
  ] });
};

// src/components/ui/card.tsx
var React2 = __toESM(require("react"));
var import_jsx_runtime3 = require("react/jsx-runtime");
var Card = React2.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", __spreadValues({ ref, className: cn("p-6 pt-0", className) }, props));
});
CardContent.displayName = "CardContent";
var CardFooter = React2.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "div",
    __spreadValues({
      ref,
      className: cn("flex items-center p-6 pt-0", className)
    }, props)
  );
});
CardFooter.displayName = "CardFooter";

// src/components/ui/skeleton.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function Skeleton(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "div",
    __spreadValues({
      className: cn("animate-pulse rounded-md bg-primary/10", className)
    }, props)
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
});
