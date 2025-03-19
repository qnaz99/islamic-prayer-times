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
  PrayerTimesDisplay: () => PrayerTimesDisplay,
  cn: () => cn,
  usePrayerTimes: () => usePrayerTimes
});
module.exports = __toCommonJS(index_exports);

// lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/prayer-times.tsx
var import_lucide_react = require("lucide-react");
var import_react = __toESM(require("react"));
var import_jsx_runtime = require("react/jsx-runtime");
var calculationMethods = [
  { label: "Jafari", value: 0 },
  { label: "University of Islamic Sciences, Karachi", value: 1 },
  { label: "Islamic Society of North America (ISNA)", value: 2 },
  { label: "Muslim World League", value: 3 },
  { label: "Umm Al-Qura University, Makkah", value: 4 },
  { label: "Egyptian General Authority", value: 5 },
  { label: "Institute of Geophysics, Tehran", value: 7 },
  { label: "Gulf Region", value: 8 },
  { label: "Kuwait", value: 9 },
  { label: "Qatar", value: 10 },
  { label: "Majlis Ugama Islam Singapura", value: 11 },
  { label: "Union Organization Islamic de France", value: 12 },
  { label: "Diyanet \u0130\u015Fleri Ba\u015Fkanl\u0131\u011F\u0131", value: 13 }
  // TODO: add other methods as needed
];
var schools = [
  { label: "Shafi", value: 0 },
  { label: "Hanafi", value: 1 }
];
function Skeleton(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    __spreadValues({
      className: cn("animate-pulse rounded-md bg-primary/10", className)
    }, props)
  );
}
var Card = import_react.default.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
var CardHeader = import_react.default.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    __spreadValues({
      ref,
      className: cn("flex flex-col space-y-1.5 p-6", className)
    }, props)
  );
});
CardHeader.displayName = "CardHeader";
var CardTitle = import_react.default.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "h3",
    __spreadValues({
      ref,
      className: cn("font-semibold leading-none tracking-tight", className)
    }, props)
  );
});
CardTitle.displayName = "CardTitle";
var CardDescription = import_react.default.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "p",
    __spreadValues({
      ref,
      className: cn("text-sm text-muted-foreground", className)
    }, props)
  );
});
CardDescription.displayName = "CardDescription";
var CardContent = import_react.default.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", __spreadValues({ ref, className: cn("p-6 pt-0", className) }, props));
});
CardContent.displayName = "CardContent";
var CardFooter = import_react.default.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    __spreadValues({
      ref,
      className: cn("flex items-center p-6 pt-0", className)
    }, props)
  );
});
CardFooter.displayName = "CardFooter";
var PrayerTimesSkeleton = ({ minimized = false }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "space-y-4 p-5", children: [
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-8 w-[150px]" }),
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      className: cn(
        "grid gap-4",
        minimized ? "grid-cols-1" : "grid-cols-2 md:grid-cols-3"
      ),
      children: [...Array(6)].map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-6 w-[100px] mx-auto" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-7 w-[80px] mx-auto" })
      ] }, index))
    }
  )
] });
var PrayerTimesDisplay = ({
  layout = "horizontal",
  minimized = false,
  showNextOnly = false,
  styles = {},
  location: initialLocation = {},
  showSettings = false,
  showJumuah = false,
  showSunrise = false
}) => {
  const [location, setLocation] = (0, import_react.useState)(initialLocation);
  const [coordinates, setCoordinates] = (0, import_react.useState)(null);
  const [prayerData, setPrayerData] = (0, import_react.useState)(null);
  const [loading, setLoading] = (0, import_react.useState)(true);
  const [error, setError] = (0, import_react.useState)(null);
  const [currentTime, setCurrentTime] = (0, import_react.useState)(/* @__PURE__ */ new Date());
  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error("Geolocation is not supported"));
      }
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        (error2) => reject(error2)
      );
    });
  };
  const getCoordinatesFromAddress = async (address) => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        address
      )}`
    );
    const data = await response.json();
    if (data && data[0]) {
      return {
        latitude: parseFloat(data[0].lat),
        longitude: parseFloat(data[0].lon)
      };
    }
    throw new Error("Address not found");
  };
  const getCoordinatesFromCity = async (city, country, state) => {
    const query = state ? `${city}, ${state}, ${country}` : `${city}, ${country}`;
    return getCoordinatesFromAddress(query);
  };
  (0, import_react.useEffect)(() => {
    const getCoordinates = async () => {
      try {
        let coords;
        if (location.address) {
          coords = await getCoordinatesFromAddress(location.address);
        } else if (location.city && location.country) {
          coords = await getCoordinatesFromCity(
            location.city,
            location.country,
            location.state
          );
        } else {
          coords = await getCurrentPosition();
        }
        setCoordinates(coords);
      } catch (error2) {
        setError(
          "Could not determine location. Please check your input or try again."
        );
        setLoading(false);
      }
    };
    getCoordinates();
  }, [location]);
  (0, import_react.useEffect)(() => {
    const fetchPrayerTimes = async () => {
      if (!coordinates) return;
      try {
        const date = /* @__PURE__ */ new Date();
        const dateStr = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
        const params = new URLSearchParams({
          latitude: coordinates.latitude.toString(),
          longitude: coordinates.longitude.toString(),
          method: (location.method || 2).toString(),
          // Default to ISNA method
          school: (location.school || 0).toString()
          // Default to Shafi
        });
        const response = await fetch(
          `https://api.aladhan.com/v1/timings/${dateStr}?${params}`
        );
        const data = await response.json();
        if (data.code === 200) {
          setPrayerData(data.data);
        } else {
          throw new Error("Failed to fetch prayer times");
        }
      } catch (error2) {
        setError("Failed to fetch prayer times. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchPrayerTimes();
  }, [coordinates, location.method, location.school]);
  (0, import_react.useEffect)(() => {
    const timer = setInterval(() => {
      setCurrentTime(/* @__PURE__ */ new Date());
    }, 6e4);
    return () => clearInterval(timer);
  }, []);
  const Settings = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      className: "settings-panel",
      style: {
        marginBottom: "1rem",
        padding: "1rem",
        backgroundColor: "#f8f9fa",
        borderRadius: "8px"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "setting-group", style: { marginBottom: "1rem" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { style: { display: "block", marginBottom: "0.5rem" }, children: [
          "Calculation Method:",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "select",
            {
              value: location.method || 2,
              onChange: (e) => setLocation((prev) => __spreadProps(__spreadValues({}, prev), {
                method: Number(e.target.value)
              })),
              style: __spreadValues({
                width: "100%",
                padding: "0.5rem",
                borderRadius: "4px",
                border: "1px solid #ddd"
              }, styles.select),
              children: calculationMethods.map(({ label, value }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value, children: label }, value))
            }
          )
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "setting-group", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { style: { display: "block", marginBottom: "0.5rem" }, children: [
          "School:",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "select",
            {
              value: location.school || 0,
              onChange: (e) => setLocation((prev) => __spreadProps(__spreadValues({}, prev), {
                school: Number(e.target.value)
              })),
              style: __spreadValues({
                width: "100%",
                padding: "0.5rem",
                borderRadius: "4px",
                border: "1px solid #ddd"
              }, styles.select),
              children: schools.map(({ label, value }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value, children: label }, value))
            }
          )
        ] }) })
      ]
    }
  );
  const containerStyles = __spreadValues({
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    width: minimized ? "300px" : "100%"
  }, styles.container);
  if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrayerTimesSkeleton, { minimized });
  if (error) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: error });
  if (!prayerData) return null;
  const prayerTimes = [
    { name: "Fajr", time: prayerData.timings.Fajr, icon: import_lucide_react.Moon },
    ...showSunrise ? [{ name: "Sunrise", time: prayerData.timings.Sunrise, icon: import_lucide_react.Sunrise }] : [],
    { name: "Dhuhr", time: prayerData.timings.Dhuhr, icon: import_lucide_react.Sun },
    { name: "Asr", time: prayerData.timings.Asr, icon: import_lucide_react.CloudSun },
    { name: "Maghrib", time: prayerData.timings.Maghrib, icon: import_lucide_react.Sunset },
    { name: "Isha", time: prayerData.timings.Isha, icon: import_lucide_react.MoonStar },
    { name: "Jumuah", time: prayerData.timings.Jumuah, icon: import_lucide_react.Users },
    ...prayerData.timings.Taraweeh ? [{ name: "Taraweeh", time: prayerData.timings.Taraweeh, icon: import_lucide_react.Users }] : []
  ];
  const getNextPrayer = (prayerTimes2) => {
    const now = /* @__PURE__ */ new Date();
    const currentTime2 = now.getHours() * 60 + now.getMinutes();
    for (const prayer of prayerTimes2) {
      const [hours, minutes] = prayer.time.split(":").map(Number);
      const prayerTime = hours * 60 + minutes;
      if (prayerTime > currentTime2) {
        return prayer;
      }
    }
    return prayerTimes2[0];
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { className: "w-full", style: containerStyles, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { style: styles.header, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      CardTitle,
      {
        className: "flex items-center justify-between",
        style: styles.title,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: showNextOnly ? "Next Prayer" : "Prayer Times" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center text-sm font-normal", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Clock, { className: "mr-2 h-4 w-4" }),
            currentTime.toLocaleTimeString()
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [
      showSettings && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "div",
        {
          className: cn(
            layout === "vertical" ? "space-y-4" : "grid gap-4",
            layout === "horizontal" && (minimized || showNextOnly ? "grid-cols-1" : "grid-cols-2 sm:grid-cols-3 md:grid-cols-5")
          ),
          style: styles.timeBlockContainer,
          children: showNextOnly ? (() => {
            const nextPrayer = getNextPrayer(prayerTimes);
            return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
              "div",
              {
                className: "flex flex-col items-center space-y-2 rounded-lg bg-muted p-4",
                style: styles.timeBlock,
                children: [
                  import_react.default.createElement(nextPrayer.icon, {
                    size: 24,
                    className: "mb-2"
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "font-medium", children: nextPrayer.name }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    "p",
                    {
                      className: "text-sm text-muted-foreground",
                      style: styles.time,
                      children: nextPrayer.time
                    }
                  )
                ]
              },
              nextPrayer.name
            );
          })() : prayerTimes.map(({ name, time, icon }, index) => {
            const isLastOdd = prayerTimes.length % 2 !== 0 && index === prayerTimes.length - 1;
            return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "div",
              {
                className: cn(
                  "rounded-lg bg-muted p-4",
                  layout === "vertical" ? "flex items-center justify-between" : "flex flex-col items-center space-y-2",
                  isLastOdd ? "col-span-2 justify-self-center" : ""
                  // Center last item if odd
                ),
                style: __spreadProps(__spreadValues({}, styles.timeBlock), {
                  gridColumn: isLastOdd ? "span 2" : "auto",
                  // Apply dynamic centering
                  textAlign: isLastOdd ? "center" : "inherit"
                }),
                children: layout === "vertical" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center space-x-4", children: [
                    import_react.default.createElement(icon, { size: 24 }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "font-medium", children: name })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    "p",
                    {
                      className: "text-sm text-muted-foreground",
                      style: styles.time,
                      children: time
                    }
                  )
                ] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
                  import_react.default.createElement(icon, {
                    size: 24,
                    className: "mb-2"
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "font-medium", children: name }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    "p",
                    {
                      className: "text-sm text-muted-foreground",
                      style: styles.time,
                      children: time
                    }
                  )
                ] })
              },
              name
            );
          })
        }
      )
    ] })
  ] });
};

// hooks/use-prayer-times.ts
var import_lucide_react2 = require("lucide-react");
var import_react2 = require("react");
function usePrayerTimes(latitude, longitude) {
  const [prayerTimes, setPrayerTimes] = (0, import_react2.useState)([]);
  const [isLoading, setIsLoading] = (0, import_react2.useState)(true);
  const [error, setError] = (0, import_react2.useState)(null);
  (0, import_react2.useEffect)(() => {
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
          { name: "Fajr", time: data.data.timings.Fajr, icon: import_lucide_react2.Sunrise },
          { name: "Dhuhr", time: data.data.timings.Dhuhr, icon: import_lucide_react2.Sun },
          { name: "Asr", time: data.data.timings.Asr, icon: import_lucide_react2.Sun },
          { name: "Maghrib", time: data.data.timings.Maghrib, icon: import_lucide_react2.Sunset },
          { name: "Isha", time: data.data.timings.Isha, icon: import_lucide_react2.Moon }
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PrayerTimesDisplay,
  cn,
  usePrayerTimes
});
