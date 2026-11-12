---
title: Luthfi Habit
impact: A gamified habit tracker that installs on a phone like an app, works offline, and needs no build step or server.
kind: Side project
year: '2026'
role: Solo — design & development
period: Nov 2026
status: Live, used daily
stack: [JavaScript, HTML, CSS, PWA, Service Worker]
cover: ../../assets/projects/habit-pwa-cover.png
coverAlt: Sketch of a phone screen showing a progress bar and a habit heatmap grid, with the latest streak highlighted.
links:
  - label: Live app
    href: https://luthfiarief-code.github.io/luthfi-habit/
  - label: Source on GitHub
    href: https://github.com/luthfiarief-code/luthfi-habit
order: 4
---

## Summary

A personal habit tracker built like a small game: a morning "daily quest", experience points, levels, ranks, streaks, and a heatmap of the past months. I built it because every habit app I tried wanted an account and a subscription for what is basically a checklist.

## Role & Context

A solo side project, designed and built for my own daily use. It runs as a Progressive Web App, added to the iPhone home screen from Safari.

## Problem

It had to feel like a native app (instant to open, works on the train with no signal) without an app store, a backend, or any data leaving the phone.

## Approach & Technical Decisions

- **No build step.** Plain HTML, CSS and JavaScript, served as static files from GitHub Pages. Nothing to upgrade, nothing to break.
- **Service worker caching** so the app opens instantly and works fully offline.
- **localStorage as the database**, with export/import to a JSON file as the backup story instead of an account system.
- **Game loop over checklists.** XP, levels and streaks turn "did I do it?" into something worth opening every morning.

## Results

- Used every day since launch. <!-- PLACEHOLDER: add a real stat, e.g. longest streak -->
- Loads in well under a second on a phone, online or off.

## Media & Links

Try the live app or read the source on GitHub.
