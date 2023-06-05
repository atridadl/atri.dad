---
title: "Moving to 'Serverful' Apps"
description: "Moving to 'Serverful' Apps"
pubDate: "June 05 2023"
updatedDate: "June 05 2023"
---

## What do you mean by Serverful?

What I mean here is quite literally what it sounds like. Rather than relying on short lived "serverless" environments, I am choosing to move more towards stateful code on persistent servers. Does this come at a cost? Slightly, yes. But I do have my reasons:

### Cold Starts

Now, anyone who has worked with serverless functions should be intimately familiar with this issue. For those who are not, however, it is when a server instance running your runtime of choice needs to boot up and load any packages you need before execution of your task can begin. This is because these services scale to 0 and that means when there has been a gap in requests, the next request cannot be served immediately because the server is not available yet. There are ways around this of course. One can reduce the libraries they use. Also, the edge runtime gets around this by using V8 isolates which sacrifices node compatibility for raw performance. In either case there is a tradeoff. But what if you didn't need either?

## Stateful logic

One of the biggest paradigms required to invest in serverless also tends to cause more problems than it can solve: stateless code. Because servers are short lived, state can never be maintained on the server. Instead, you need to offload this task either to a database or another server (comically, solving issues with serverless requires servers that just live somewhere else...).

## Reliance on non-standard solutions

My biggest reason for leaving the serverless world was the increasing number of proprietary services I needed to opt in to fill in gaps that never existed before serverless. For instance: Using a serverless driver for DB communication, using hosted redis provided by Upstash, and something like pusher to handle pub/sub. If you live in AWS land: you're often doing things like tying complex step functions together behind API gateway that communicate with a proprietary noSQL database. Remember the KISS principle? I think Amazon forgot.

## Sprint Padawan time!

I built [Sprint Padawan](https://github.com/atridadl/sprintpadawan) to be a tool to allow teams to plan their stories in real-time while giving the scrum master granular control over the process. The platform of choice for this? Railway. Railway uses simple docker containers to run the code, and all of the hacks I was working through to make things work in a serverless environment were immediately gone! Not only that, but it made deploying Postgres and Redis databases to use for data and caching incredibly trivial.

Here is the technology stack:

- Front-end framework: Nextjs
- Rendering method: SSR
- Hosting: Railway
- Real-time pub/sub: Ably
- ORM: Prisma
- Database: PostgreSQL
- Cache: Redis

I am working on moving away from Ably for the pub/sub as well, and then I will be fully transitioned away from third party services. Until then, the project is still most of the way there. If you have any questions about this, please feel free to reach out over email at [me@atri.dad](mailto:me@atri.dad). Thanks! 👋🏽
