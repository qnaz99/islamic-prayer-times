## Build Command:

npm run build:package




<div align="center">
  <h1>React Prayer Times</h1>
  
  <p align="center">
    A flexible and beautiful React component for displaying Islamic prayer times
    <br />
    <a href="https://islamic-prayer-times-demo.vercel.app/"><strong>View Demo »</strong></a>
  </p>
</div>

## About The Project

A modern React component for displaying Islamic prayer times with support for both horizontal and vertical layouts.

### Horizontal Layout

![Horizontal Layout](screenshot.png)

### Vertical Layout

![Vertical Layout](screenshot.png)

## Features

- 🎨 Multiple display options: Horizontal, Vertical, and Minimized
- 🎯 Next prayer time focus mode
- 🌍 Automatic location detection
- ⚡ Real-time updates
- 🎯 Precise prayer times using Aladhan API
- 🔄 Automatic timezone handling
- 📱 Responsive design
- ♿ Accessibility support
- 💅 Customizable styling
- 🕌 Optional Jumu'ah prayer display
- ☀️ Optional Sunrise time display
- ⚙️ Configurable calculation methods
- 🎭 Multiple madhab options

## Installation

```bash
npm install react-prayer-times
# or
yarn add react-prayer-times
```

## Usage

### Basic Usage

```jsx
import PrayerTimesDisplay from "react-prayer-times";

// Horizontal Layout (default)
function App() {
  return <PrayerTimesDisplay />;
}

// Vertical Layout
function App() {
  return <PrayerTimesDisplay layout="vertical" />;
}

// Minimized View (only next prayer)
function App() {
  return <PrayerTimesDisplay showNextOnly={true} />;
}
```

### With Custom Location

```jsx
<PrayerTimesDisplay
  location={{
    city: "London",
    country: "UK",
    method: 2, // ISNA method
    school: 0, // Shafi school
  }}
/>
```

### Display Options

```jsx
// Minimized view with only the next prayer
<PrayerTimesDisplay
  minimized={true}
  showNextOnly={true}
/>

// Full view with only the next prayer
<PrayerTimesDisplay showNextOnly={true} />

// Minimized view with all prayers
<PrayerTimesDisplay minimized={true} />
```

### With Custom Styles

```jsx
<PrayerTimesDisplay
  styles={{
    container: {
      backgroundColor: "#f8f9fa",
      borderRadius: "12px",
      padding: "20px",
    },
    timeBlock: {
      backgroundColor: "#e9ecef",
      borderRadius: "8px",
    },
    time: {
      color: "#2c3e50",
      fontWeight: "bold",
    },
  }}
/>
```

### With All Options

```jsx
<PrayerTimesDisplay
  minimized={false}
  showNextOnly={false}
  showSettings={true}
  showJumuah={true}
  showSunrise={true}
  styles={{
    container: { backgroundColor: "#f8f9fa" },
    header: { backgroundColor: "#f0f0f0" },
    timeBlockContainer: { padding: "20px", gap: "2rem" },
    timeBlock: { backgroundColor: "#fff" },
    time: { color: "#333", fontWeight: "bold" },
    title: { color: "#000" }
  }}
  location={{
    city: "London",
    country: "UK",
    method: 2, // ISNA
    school: 0  // Shafi
  }}
/>
```

## Props

| Prop           | Type                           | Default        | Description               |
| -------------- | ------------------------------ | -------------- | ------------------------- |
| `minimized`    | `boolean`                      | `false`        | Enable minimized view     |
| `showNextOnly` | `boolean`                      | `false`        | Show only the next prayer |
| `styles`       | `object`                       | `{}`           | Custom styles             |
| `location`     | `object`                       | `{}`           | Location config           |
| `showSettings` | `boolean`                      | `false`        | Show settings panel       |
| `showJumuah`   | `boolean`                      | `false`        | Show Jumu'ah prayer on Fridays |
| `showSunrise`  | `boolean`                      | `false`        | Show Sunrise time |
| `styles.timeBlockContainer` | `object` | `{}` | Styles for the prayer times grid container |

### Location Configuration

```typescript
interface LocationConfig {
  address?: string;
  city?: string;
  country?: string;
  state?: string;
  school?: number; // 0: Shafi, 1: Hanafi
  method?: number; // Calculation method (0-23)
}
```

## Compatibility

Supports React versions 16.8.0 through 19.x.x

## Built With

- React
- TypeScript
- [Aladhan API](https://aladhan.com/prayer-times-api)

## License

MIT © [Your Name]

## Acknowledgments

- [Aladhan API](https://aladhan.com/prayer-times-api) for providing prayer times data
- [Lucide Icons](https://lucide.dev/) for the prayer time icons
