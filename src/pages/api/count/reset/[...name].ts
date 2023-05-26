import type { APIRoute } from "astro";
import Redis from "ioredis";

export const prerender = false;

const redis = new Redis(import.meta.env.REDIS_URL);

export const get: APIRoute = async ({ params }) => {
  if (!params.name) {
    return new Response(
      JSON.stringify({
        error:
          "Please provide the name of the item you would like to count in the URL!",
      }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  const redisValue = await redis.set(params.name, 0);

  return new Response(
    JSON.stringify({
      status: "success",
      value: redisValue,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
