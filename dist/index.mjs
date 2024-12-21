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

// src/components/prayer-times.tsx
import { useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var calculationMethods = [
  { label: "Jafari", value: 0 },
  { label: "University of Islamic Sciences, Karachi", value: 1 },
  { label: "Islamic Society of North America (ISNA)", value: 2 },
  { label: "Muslim World League", value: 3 },
  { label: "Umm Al-Qura University, Makkah", value: 4 },
  { label: "Egyptian General Authority", value: 5 },
  { label: "Institute of Geophysics, Tehran", value: 7 }
  // TODO: add other methods as needed
];
var schools = [
  { label: "Shafi", value: 0 },
  { label: "Hanafi", value: 1 }
];
var PrayerTimes = ({
  minimized = false,
  styles = {},
  location: initialLocation = {},
  showSettings = false
}) => {
  const [location, setLocation] = useState(initialLocation);
  const [coordinates, setCoordinates] = useState(null);
  const [prayerData, setPrayerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
  useEffect(() => {
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
  useEffect(() => {
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
  const Settings = () => /* @__PURE__ */ jsxs(
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
        /* @__PURE__ */ jsx("div", { className: "setting-group", style: { marginBottom: "1rem" }, children: /* @__PURE__ */ jsxs("label", { style: { display: "block", marginBottom: "0.5rem" }, children: [
          "Calculation Method:",
          /* @__PURE__ */ jsx(
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
              children: calculationMethods.map(({ label, value }) => /* @__PURE__ */ jsx("option", { value, children: label }, value))
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "setting-group", children: /* @__PURE__ */ jsxs("label", { style: { display: "block", marginBottom: "0.5rem" }, children: [
          "School:",
          /* @__PURE__ */ jsx(
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
              children: schools.map(({ label, value }) => /* @__PURE__ */ jsx("option", { value, children: label }, value))
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
  if (loading) return /* @__PURE__ */ jsx("div", { children: "Loading prayer times..." });
  if (error) return /* @__PURE__ */ jsx("div", { children: error });
  if (!prayerData) return null;
  const prayerTimes = [
    { name: "Fajr", time: prayerData.timings.Fajr },
    { name: "Sunrise", time: prayerData.timings.Sunrise },
    { name: "Dhuhr", time: prayerData.timings.Dhuhr },
    { name: "Asr", time: prayerData.timings.Asr },
    { name: "Maghrib", time: prayerData.timings.Maghrib },
    { name: "Isha", time: prayerData.timings.Isha }
  ];
  return /* @__PURE__ */ jsxs("div", { style: containerStyles, children: [
    /* @__PURE__ */ jsx("h2", { style: styles.header, children: "Prayer Times" }),
    showSettings && /* @__PURE__ */ jsx(Settings, {}),
    /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          display: "grid",
          gridTemplateColumns: minimized ? "1fr" : "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem"
        },
        children: prayerTimes.map(({ name, time }) => /* @__PURE__ */ jsxs(
          "div",
          {
            style: __spreadValues({
              padding: "1rem",
              backgroundColor: "#f5f5f5",
              borderRadius: "4px",
              textAlign: "center"
            }, styles.timeBlock),
            children: [
              /* @__PURE__ */ jsx("h3", { style: { margin: "0 0 0.5rem 0" }, children: name }),
              /* @__PURE__ */ jsx("p", { style: __spreadValues({ margin: 0, fontSize: "1.2rem" }, styles.time), children: time })
            ]
          },
          name
        ))
      }
    )
  ] });
};
var prayer_times_default = PrayerTimes;

// lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// node_modules/lucide-react/dist/esm/createLucideIcon.js
import { forwardRef as forwardRef2, createElement as createElement2 } from "react";

// node_modules/lucide-react/dist/esm/shared/src/utils.js
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();

// node_modules/lucide-react/dist/esm/Icon.js
import { forwardRef, createElement } from "react";

// node_modules/lucide-react/dist/esm/defaultAttributes.js
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

// node_modules/lucide-react/dist/esm/Icon.js
var Icon = forwardRef(
  (_a, ref) => {
    var _b = _a, {
      color = "currentColor",
      size = 24,
      strokeWidth = 2,
      absoluteStrokeWidth,
      className = "",
      children,
      iconNode
    } = _b, rest = __objRest(_b, [
      "color",
      "size",
      "strokeWidth",
      "absoluteStrokeWidth",
      "className",
      "children",
      "iconNode"
    ]);
    return createElement(
      "svg",
      __spreadValues(__spreadProps(__spreadValues({
        ref
      }, defaultAttributes), {
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: mergeClasses("lucide", className)
      }), rest),
      [
        ...iconNode.map(([tag, attrs]) => createElement(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    );
  }
);

// node_modules/lucide-react/dist/esm/createLucideIcon.js
var createLucideIcon = (iconName, iconNode) => {
  const Component = forwardRef2(
    (_a, ref) => {
      var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
      return createElement2(Icon, __spreadValues({
        ref,
        iconNode,
        className: mergeClasses(`lucide-${toKebabCase(iconName)}`, className)
      }, props));
    }
  );
  Component.displayName = `${iconName}`;
  return Component;
};

// node_modules/lucide-react/dist/esm/icons/moon.js
var Moon = createLucideIcon("Moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);

// node_modules/lucide-react/dist/esm/icons/sun.js
var Sun = createLucideIcon("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
]);

// node_modules/lucide-react/dist/esm/icons/sunrise.js
var Sunrise = createLucideIcon("Sunrise", [
  ["path", { d: "M12 2v8", key: "1q4o3n" }],
  ["path", { d: "m4.93 10.93 1.41 1.41", key: "2a7f42" }],
  ["path", { d: "M2 18h2", key: "j10viu" }],
  ["path", { d: "M20 18h2", key: "wocana" }],
  ["path", { d: "m19.07 10.93-1.41 1.41", key: "15zs5n" }],
  ["path", { d: "M22 22H2", key: "19qnx5" }],
  ["path", { d: "m8 6 4-4 4 4", key: "ybng9g" }],
  ["path", { d: "M16 18a4 4 0 0 0-8 0", key: "1lzouq" }]
]);

// node_modules/lucide-react/dist/esm/icons/sunset.js
var Sunset = createLucideIcon("Sunset", [
  ["path", { d: "M12 10V2", key: "16sf7g" }],
  ["path", { d: "m4.93 10.93 1.41 1.41", key: "2a7f42" }],
  ["path", { d: "M2 18h2", key: "j10viu" }],
  ["path", { d: "M20 18h2", key: "wocana" }],
  ["path", { d: "m19.07 10.93-1.41 1.41", key: "15zs5n" }],
  ["path", { d: "M22 22H2", key: "19qnx5" }],
  ["path", { d: "m16 6-4 4-4-4", key: "6wukr" }],
  ["path", { d: "M16 18a4 4 0 0 0-8 0", key: "1lzouq" }]
]);

// hooks/use-prayer-times.ts
import { useEffect as useEffect2, useState as useState2 } from "react";
function usePrayerTimes(latitude, longitude) {
  const [prayerTimes, setPrayerTimes] = useState2([]);
  const [isLoading, setIsLoading] = useState2(true);
  const [error, setError] = useState2(null);
  useEffect2(() => {
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

// src/index.ts
var index_default = prayer_times_default;
export {
  cn,
  index_default as default,
  usePrayerTimes
};
/*! Bundled license information:

lucide-react/dist/esm/shared/src/utils.js:
  (**
   * @license lucide-react v0.469.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/defaultAttributes.js:
  (**
   * @license lucide-react v0.469.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/Icon.js:
  (**
   * @license lucide-react v0.469.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/createLucideIcon.js:
  (**
   * @license lucide-react v0.469.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/moon.js:
  (**
   * @license lucide-react v0.469.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/sun.js:
  (**
   * @license lucide-react v0.469.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/sunrise.js:
  (**
   * @license lucide-react v0.469.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/sunset.js:
  (**
   * @license lucide-react v0.469.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.469.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
