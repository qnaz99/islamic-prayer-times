<div align="center">
  <h1>React Prayer Times</h1>
  
  <p align="center">
    A flexible and beautiful React component for displaying Islamic prayer times
    <br />
    <a href="https://islamic-prayer-times-demo-bqg3d56k7-rbytes-projects.vercel.app/"><strong>View Demo »</strong></a>
    <br />
    <br />
    <a href="https://github.com/yourusername/react-prayer-times/issues">Report Bug</a>
    ·
    <a href="https://github.com/yourusername/react-prayer-times/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#props">Props</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![React Prayer Times Screen Shot][product-screenshot]](/public/screenshot.png)

React Prayer Times is a modern, flexible React component that displays Islamic prayer times with multiple layout options. It uses the Aladhan API to fetch accurate prayer times based on location and provides both horizontal and vertical layout options.

Key Features:

- Multiple layout options (horizontal/vertical)
- Real-time updates
- Customizable styling
- Automatic timezone detection
- Loading states and error handling
- Accessibility support

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React][React.js]]["https://www.letsreact.org"]
- [![NextJS][Next.js]]["https://nextjs.org"]
- [![TypeScript][TypeScript]][https://www.typescriptlang.org]
- [![TailwindCSS][TailwindCSS]][https://tailwindcss.com]
- [Aladhan API](https://aladhan.com/prayer-times-api)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- npm
  ```sh
  yarn install
  ```

### Installation

```bash
npm install react-islamic-prayer-times
```

Add the following to your tailwind.config.js:

```js
module.exports = {
  content: [
    // ... your other content paths
    "node_modules/react-islamic-prayer-times/**/*.{js,ts,jsx,tsx}",
  ],
};
```
