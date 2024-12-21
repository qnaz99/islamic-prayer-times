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
  PrayerTimes: () => PrayerTimes,
  cn: () => cn2,
  usePrayerTimes: () => usePrayerTimes
});
module.exports = __toCommonJS(index_exports);

// node_modules/class-variance-authority/dist/index.mjs
var import_clsx = require("clsx");
var falsyToString = (value) => typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
var cx = import_clsx.clsx;
var cva = (base, config) => (props) => {
  var _config_compoundVariants;
  if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
  const { variants, defaultVariants } = config;
  const getVariantClassNames = Object.keys(variants).map((variant) => {
    const variantProp = props === null || props === void 0 ? void 0 : props[variant];
    const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
    if (variantProp === null) return null;
    const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
    return variants[variant][variantKey];
  });
  const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param) => {
    let [key, value] = param;
    if (value === void 0) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
  const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param) => {
    let _a = param, { class: cvClass, className: cvClassName } = _a, compoundVariantOptions = __objRest(_a, ["class", "className"]);
    return Object.entries(compoundVariantOptions).every((param2) => {
      let [key, value] = param2;
      return Array.isArray(value) ? value.includes(__spreadValues(__spreadValues({}, defaultVariants), propsWithoutUndefined)[key]) : __spreadValues(__spreadValues({}, defaultVariants), propsWithoutUndefined)[key] === value;
    }) ? [
      ...acc,
      cvClass,
      cvClassName
    ] : acc;
  }, []);
  return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
};

// src/components/prayer-times.tsx
var import_react = __toESM(require("react"));
var import_jsx_runtime = require("react/jsx-runtime");
var cn = (...classes) => classes.filter(Boolean).join(" ");
var alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-white text-gray-900 border-gray-200",
        destructive: "border-red-500/50 text-red-600 dark:border-red-500"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Alert = import_react.default.forwardRef((_a, ref) => {
  var _b = _a, { className, variant = "default" } = _b, props = __objRest(_b, ["className", "variant"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    __spreadValues({
      ref,
      role: "alert",
      className: cn(alertVariants({ variant }), className)
    }, props)
  );
});
var Card = import_react.default.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    __spreadValues({
      ref,
      className: cn(
        "rounded-xl border border-gray-200 bg-white text-gray-900 shadow",
        className
      )
    }, props)
  );
});
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
var CardTitle = import_react.default.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    __spreadValues({
      ref,
      className: cn("font-semibold leading-none tracking-tight", className)
    }, props)
  );
});
var CardContent = import_react.default.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", __spreadValues({ ref, className: cn("p-6 pt-0", className) }, props));
});
var CalculationMethod = /* @__PURE__ */ ((CalculationMethod2) => {
  CalculationMethod2[CalculationMethod2["Jafari"] = 0] = "Jafari";
  CalculationMethod2[CalculationMethod2["Karachi"] = 1] = "Karachi";
  CalculationMethod2[CalculationMethod2["ISNA"] = 2] = "ISNA";
  CalculationMethod2[CalculationMethod2["MWL"] = 3] = "MWL";
  CalculationMethod2[CalculationMethod2["Makkah"] = 4] = "Makkah";
  CalculationMethod2[CalculationMethod2["Egypt"] = 5] = "Egypt";
  CalculationMethod2[CalculationMethod2["Tehran"] = 7] = "Tehran";
  CalculationMethod2[CalculationMethod2["Gulf"] = 8] = "Gulf";
  CalculationMethod2[CalculationMethod2["Kuwait"] = 9] = "Kuwait";
  CalculationMethod2[CalculationMethod2["Qatar"] = 10] = "Qatar";
  CalculationMethod2[CalculationMethod2["Singapore"] = 11] = "Singapore";
  CalculationMethod2[CalculationMethod2["France"] = 12] = "France";
  CalculationMethod2[CalculationMethod2["Turkey"] = 13] = "Turkey";
  CalculationMethod2[CalculationMethod2["Russia"] = 14] = "Russia";
  CalculationMethod2[CalculationMethod2["Moonsighting"] = 15] = "Moonsighting";
  CalculationMethod2[CalculationMethod2["Dubai"] = 16] = "Dubai";
  CalculationMethod2[CalculationMethod2["Malaysia"] = 17] = "Malaysia";
  CalculationMethod2[CalculationMethod2["Tunisia"] = 18] = "Tunisia";
  CalculationMethod2[CalculationMethod2["Algeria"] = 19] = "Algeria";
  CalculationMethod2[CalculationMethod2["Indonesia"] = 20] = "Indonesia";
  CalculationMethod2[CalculationMethod2["Morocco"] = 21] = "Morocco";
  CalculationMethod2[CalculationMethod2["Portugal"] = 22] = "Portugal";
  CalculationMethod2[CalculationMethod2["Jordan"] = 23] = "Jordan";
  CalculationMethod2[CalculationMethod2["Custom"] = 99] = "Custom";
  return CalculationMethod2;
})(CalculationMethod || {});
var School = /* @__PURE__ */ ((School2) => {
  School2[School2["Shafi"] = 0] = "Shafi";
  School2[School2["Hanafi"] = 1] = "Hanafi";
  return School2;
})(School || {});
var PrayerTimes = ({
  minimized = false,
  styles = {},
  location: initialLocation,
  showSettings = false
}) => {
  const [location, setLocation] = (0, import_react.useState)(
    initialLocation || {}
  );
  const [prayerData, setPrayerData] = (0, import_react.useState)(null);
  const [loading, setLoading] = (0, import_react.useState)(true);
  const [error, setError] = (0, import_react.useState)(null);
  const calculationMethods = Object.entries(CalculationMethod).filter(([key]) => isNaN(Number(key))).map(([key, value]) => ({
    label: key.replace(/([A-Z])/g, " $1").trim(),
    // Add spaces before capital letters
    value
  }));
  const schools = Object.entries(School).filter(([key]) => isNaN(Number(key))).map(([key, value]) => ({
    label: key,
    value
  }));
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
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "select",
            {
              value: location.method,
              onChange: (e) => setLocation((prev) => __spreadProps(__spreadValues({}, prev), {
                method: Number(e.target.value)
              })),
              style: __spreadValues({
                width: "100%",
                padding: "0.5rem",
                borderRadius: "4px",
                border: "1px solid #ddd"
              }, styles.select),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: "", children: "Select Method" }),
                calculationMethods.map(({ label, value }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value, children: label }, value))
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "setting-group", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { style: { display: "block", marginBottom: "0.5rem" }, children: [
          "School:",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "select",
            {
              value: location.school,
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: styles.container, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { style: styles.header, children: "Prayer Times" }),
    showSettings && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, {}),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        style: {
          display: "grid",
          gridTemplateColumns: minimized ? "1fr" : "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem"
        }
      }
    )
  ] });
};

// lib/utils.ts
var import_clsx2 = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn2(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx2.clsx)(inputs));
}

// node_modules/lucide-react/dist/esm/createLucideIcon.js
var import_react3 = require("react");

// node_modules/lucide-react/dist/esm/shared/src/utils.js
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();

// node_modules/lucide-react/dist/esm/Icon.js
var import_react2 = require("react");

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
var Icon = (0, import_react2.forwardRef)(
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
    return (0, import_react2.createElement)(
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
        ...iconNode.map(([tag, attrs]) => (0, import_react2.createElement)(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    );
  }
);

// node_modules/lucide-react/dist/esm/createLucideIcon.js
var createLucideIcon = (iconName, iconNode) => {
  const Component = (0, import_react3.forwardRef)(
    (_a, ref) => {
      var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
      return (0, import_react3.createElement)(Icon, __spreadValues({
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
var import_react4 = require("react");
function usePrayerTimes(latitude, longitude) {
  const [prayerTimes, setPrayerTimes] = (0, import_react4.useState)([]);
  const [isLoading, setIsLoading] = (0, import_react4.useState)(true);
  const [error, setError] = (0, import_react4.useState)(null);
  (0, import_react4.useEffect)(() => {
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PrayerTimes,
  cn,
  usePrayerTimes
});
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
