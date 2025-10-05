Invoice & Payment Settlement Platform 
Users create invoices, simulate/receive payments, a settlement worker reconciles payments with invoices, receipts are stored as blobs, idempotent webhook handling, small admin dashboard. 
This demonstrates system design, background workers, idempotency, storage, caching, CI/CD and deployment.

# Invoice Settlement Demo

Small demo project: event-driven invoice & payment settlement platform.

## Overview
- FastAPI backend microservice (payments & invoices)
- Angular frontend (simple dashboard)
- Postgres + Redis (docker-compose for local)
- Storage for receipts (Supabase or S3)
- Background worker (Redis queue)
- CI: GitHub Actions
- Deploy: Vercel (frontend) + Cloud Run / App Runner / ECS (backend) OR start with free Supabase-based backend.

## Local dev
1. Copy `.env.example` to `.env`
2. `docker compose up --build`
3. Backend: http://localhost:8080
4. Frontend: serve using `ng serve` or static build

## Roadmap
- Week 0: repo + architecture diagram + skeleton
- Week 1: DB schema + core APIs + unit tests
- Week 2: Auth + storage + integration tests
- Week 3: Queue + idempotency + CI

## How to contribute
Open an issue, pick a ticket, submit a PR.