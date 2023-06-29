---
title: "Building Sprint Padawan"
description: "Building Sprint Padawan"
pubDate: "June 14 2023"
updatedDate: "June 29 2023"
---

## What is Sprint Padawan?

[Sprint Padawan](https://github.com/atridadl/sprintpadawan) is an application I built which allows teams participating in SCRUM to have real-time voting for their Story estimation. This was born out of a need for a product like this at work, with no suitable solutions being found. It is free to use, with no plans on that changing unless maintaining it becomes too cumbersome or expensive.

## How does it work?

Sprint Padawan started using the T3 Stack, which has a few key components:

- Next.js SSR (Server-side Rendering)
- Prisma ORM
- Postgres/mySQL DB
- tRPC for front-end and back-end communication
- NextAuth for authentication
- TailwindCSS for styling

I added a few additional bits:

- Redis for caching & rate limiting
- Preact for the DOM replacement

Why did I do it this way? For one, this stack allows me to have end-to-end type-safety. This means I get types all the way from my SQL schema to my back-end procedures, and again down to my front-end that calls those procedures.

The caching exists to both improve performance for read operations, but to also ease the load on the DB. I use write-through caching, where I update both the DB and the Cache at the same time, maintaining consistency of data, while making subsequent writes faster so long as new data is not written to invalidate the cache. I have a rough diagram of what I do here:

What happens on a Cache Hit:
![Cache Hit for Sprint Padawan](https://srv.atri.dad/sp_diagram_cache_hit.svg)

... And on a Cache Miss:
![Cache Miss for Sprint Padawan](https://srv.atri.dad/sp_diagram_cache_miss.svg)

The pub/sub is something that I struggled with, until I found Ably. With Ably, I am able to join arbitrarily named "channels" instead of solutions such as SNS where pre-defined topics are needed. This way, I can append the Room ID or User ID to the beginning of the channel, to enable localized real-time experiences. This also allows Sprint Padawan to be truly event driven, where the application responds to events to trigger specific updates.

This project has been an absolute blast so far, and I have so much more I would like to do with it. As usual, if you have any questions about it, please reach out over [email](mailto:me@atri.dad).
