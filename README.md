# 🌌 Stellar Pathfinder

[![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4+-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Open in GitHub](https://img.shields.io/badge/GitHub-View%20Project-181717?logo=github)](https://github.com/yourusername/stellar-pathfinder)

> **Visualize, plan, and explore your own space missions** with real astronomical data, stunning 3D graphics, and modern glassmorphism design.

---

## ✨ Features

| Feature                        | Details                                                                                   |
| ------------------------------ | ----------------------------------------------------------------------------------------- |
| 🌌 **3D Solar System**         | Realistic planets with 4K textures, starfield, emissive lighting & orbit rings             |
| 🚀 **Mission Dashboard**       | Calculates Mars mission (Hohmann transfer), journey time, next launch window & real SpaceX launches |
| 🛰 **Live ISS Tracker**        | Shows live ISS position, speed, altitude, and visibility data                             |
| 📚 **Educational Mode**        | Learn about Hohmann transfers, launch windows, and historical missions                     |
| 📊 **Planet Data Table**       | Live x/z coordinates for all major planets including Neptune                               |
| 🎨 **Glassmorphism Design**    | Modern UI with blur, transparency, gradients, and dark mode                                |
| ⚛ **Built with**              | React + TypeScript, React Three Fiber, MUI, Axios                                          |

---

## 📦 Tech Stack

- ⚛ **React + TypeScript**
- 🧪 **@react-three/fiber** & **@react-three/drei** (3D visualization)
- 🎨 **Material UI (MUI)** with custom glassmorphism theme
- 📡 **Axios** for real-time data fetching
- 🛰 **NASA, SpaceX, and N2YO APIs**

---

## 🛠 Installation

```bash
git clone https://github.com/yourusername/stellar-pathfinder.git
cd stellar-pathfinder
npm install
Create a .env file with your keys:

env
Copy
Edit
VITE_NASA_API_KEY=YOUR_NASA_KEY
VITE_N2YO_API_KEY=YOUR_N2YO_KEY
Run locally:

bash
Copy
Edit
npm run dev
🧩 Project Structure
plaintext
Copy
Edit
src/
├─ components/
│  ├─ Visualizer3D.tsx          # 3D visualization
│  ├─ MissionDashboard.tsx      # Mission planner + real launches
│  ├─ LiveMissionTracker.tsx    # ISS tracker
│  ├─ EducationalMode.tsx       # Educational content
│  ├─ PlanetDataTable.tsx       # Live planet coordinates
│  └─ LandingPage.tsx           # Hero landing screen
├─ services/
│  ├─ nasaApi.ts                # NASA & satellite data
│  └─ spacexApi.ts              # SpaceX upcoming launches
├─ theme.ts                     # Glassmorphism theme
├─ App.tsx                      # Routes & entry point
└─ index.css                    # Global styles
📊 APIs Used
API	Purpose
NASA APOD	Astronomy Picture of the Day
SpaceX API	Upcoming launch data
N2YO Satellite API	ISS position, altitude, speed


🚀 Future Plans
Auto-refresh for ISS data

Add moons & more celestial bodies

Dynamic day/night textures

Custom mission planning with date selector

📝 License
MIT

❤️ Contribute
Star ⭐ this repo

Fork & PR improvements

Share feedback or new ideas!

Stellar Pathfinder — “Explore the cosmos through code.” 🚀🌌

