# PHAKAMA

PHAKAMA is a mobile-first pothole reporting and public accountability platform for South Africa. The initial build in this repo is a functional Next.js + Tailwind prototype that demonstrates the product experience, map interactions, report tracking, and admin workflow using realistic demo data.

## Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- React Leaflet for map interactions
- Lucide icons

## Core product flows represented

- Home and discovery map
- Pothole reporting journey
- Report detail and verification workflow
- Community dashboard and municipal tracking
- Admin dashboard and access roles
- Mobile-first experience

## Getting started

1. Install dependencies:
   npm install
2. Run the app:
   npm run dev
3. Open http://localhost:3000

## Production notes

The current version uses local demo data and a real map layer powered by OpenStreetMap so it works without API keys. To connect the app to Supabase and municipality workflows later, add your values in `.env.local` based on `.env.example`.

## Planned integration points

- Supabase Auth for citizen and admin accounts
- Supabase Storage for image uploads
- PostgreSQL with RLS and report schemas
- Mapbox or OSM routing for geocoding and map display
- Municipal assignment and official report updates
