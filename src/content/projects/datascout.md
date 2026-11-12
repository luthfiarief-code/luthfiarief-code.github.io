---
title: DataScout
impact: An internal tool that turns a shopping request into a clean, comparable product catalog across many online stores, and survives restarts mid-search.
kind: Internship
year: '2026'
role: Developer intern
period: Jul — Oct 2026
status: In use internally at KNS Group
stack: [React, TypeScript, FastAPI, PostgreSQL, Docker]
cover: ../../assets/projects/datascout-cover.png
coverAlt: Sketch of the service topology — browser, frontend, API, a worker and a PostgreSQL database — with the worker-to-database lease highlighted.
links: []
order: 2
---

## Summary

DataScout helps a team answer "what does this product actually cost across the market?" A user describes what they’re looking for, searches one store or every supported store at once, or identifies a product from a photo. DataScout collects the listings, normalizes them into one comparable catalog, reports exactly which sources were covered, and lets the user export the dataset or ask questions grounded only in what was collected.

## Role & Context

Built during my internship at KNS Group as an internal tool. I worked across the stack, from the React frontend to the FastAPI backend, the PostgreSQL schema, and the Docker Compose deployment, with a senior developer reviewing my work.

## Problem

Searches across many stores take minutes, not milliseconds. The first version ran them inside the web request, so a browser refresh, a timeout, or a deploy simply lost the work, and users had no way to tell a partial result from a complete one.

## Approach & Technical Decisions

- **Durable jobs in PostgreSQL instead of a separate queue.** A search becomes a row with a state machine (`queued → running → complete | partial | failed | cancelled`). A dedicated worker claims jobs with a lease and row-level locking, and renews the lease while it works. One fewer moving part than adding Redis or a message broker.
- **Reattachable searches.** Every search has a URL (`/search/:id`), so a refresh reconnects to the same job instead of starting over.
- **Truthful coverage.** Each source reports its own status. The UI says "8 of 11 stores answered" rather than presenting partial data as complete.
- **Architecture enforced by tests.** The backend has strict layers (API, DTOs, services, models, integrations), and a test fails the build if an import goes the wrong direction.

## Results

- Searches survive browser refreshes, API restarts, and worker crashes. Expired jobs are retried automatically.
- CI runs against a real PostgreSQL instance, checks every migration, and boots the whole Compose stack to test restart recovery.
- Exports to CSV, JSON, Markdown and XLSX without re-crawling.

## Media & Links

DataScout is an internal KNS Group tool, so the code and live app aren’t public. Screenshots available on request.
