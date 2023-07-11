---
title: "Technology Recommendations to go from Hobby -> Scale"
description: "Technology Recommendations to go from Hobby -> Scale"
pubDate: "July 10 2023"
updatedDate: "July 10 2023"
---

## Disclaimer

Please note that not all of these suggestions will be suitable for every use case. The target audience for these recommendations is hobby developers building side-projects and startups with small to medium user bases. The intention is not to discuss the absolute most optimized solution in any given category but to provide a good balance of developer experience, velocity, and scalability. **This is absolutely intended to be opinionated, and therefore you may have a different opinion... this is OKAY!**

With that being said, let's dive into our first category...

## Frontend + Backend Frameworks

When it comes to frontend and backend frameworks, I primarily consider two options:

- The T3 Stack: **Next.js** + tRPC + Prisma + TypeScript
- **Sveltekit** + tRPC + Prisma + TypeScript

Having worked with both, I can say that they have distinct differences but solve similar tasks effectively. Both stacks offer end-to-end type-safety and provide excellent developer experiences. Next.js and Sveltekit are also well-supported and considered full-stack frameworks.

The main difference lies in their ecosystems. Next.js benefits from React's ecosystem, and this is evident in its extensive library support. When making a decision, consider the following factors:

- If you prioritize performance above all else, Sveltekit is a good choice.
- If you value a large library ecosystem above all else, Next.js would be a better fit.

In both cases, tRPC and Prisma give you types on your back end endpoints and your database respectively, and make writing safer code a brease!

## Database

When it comes to selecting a database, I prioritize factors such as performance, scalability, query language, and portability. Unfortunately, many NoSQL databases fall short in several of these areas. While they may offer good performance and scalability, they often require working with proprietary query languages that have unique limitations. Additionally, migrating data away from these databases can be challenging, as they often have schema-less designs and often stray from standards.

In my experience, I prefer using MySQL or Postgres databases. However, opting for a managed service ensures data integrity and protects users' data, especially when working with limited database management experience. My recommended providers for these databases are as follows:

- MySQL: **Planetscale**
- Postgres: **Neon.tech**

Both options are excellent for starting with SQL databases and can scale with your needs.

## Caching

Caching is often overlooked by beginners but can play a crucial role in reducing costs and improving user experience, especially when using a managed database that incurs usage-based billing. There are various caching solutions available, including memcached and dragonflydb, the latter being a newer option that shows promise. However, my current preference is **Redis**. Redis is a flexible in-memory store that has been around for a while and supports key-value pairs. Using something like **Upstash**, which provides serverless Redis, is the easiest way to integrate Redis into your application. It offers excellent performance, and the cost is negligible at 0.2 cents per 10,000 requests.

## Authentication

Authenticating users is an area where reinventing the wheel is rarely advisable, as it can introduce significant security flaws. This is where authentication libraries and platforms come in. Two options that I highly recommend are:

- **Auth.js** (NextAuth): A self-hosted and serverless solution.
- **Clerk**: A SaaS platform that provides flexible authentication at a reasonable price, including a generous free tier.

Both options are excellent and should meet your authentication needs effectively.

## Pub/Sub

The final section covers real-time applications, which can be easily implemented by spinning up a socket.io server on platforms like Railway or Heroku. However, reliability and scalability are crucial factors, and that's where **Ably** shines. Ably is a pub/sub provider that operates on the edge, ensuring that users always receive messages from the data center closest to them. This allows for real-time message broadcasting and features like presence detection.

## Wrap-up

Thank you for reaching the end of the article! If you have any thoughts on any of these recommendations, please let me know as I'm always interested in exploring new technologies. Feel free to reach out to me at [me@atri.dad](mailto:me@atri.dad) or through any of the links on my [homepage](https://atri.dad/).
