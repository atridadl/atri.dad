import type { APIContext, MiddlewareNext, MiddlewareNextResponse } from "astro";
import { PROTECTED_ROUTES } from "./consts";

export const prerender = false;

import { Redis } from "ioredis";

const youShallPass = async (url: string) => {
  const requestUrlObject = new URL(url);
  const requestUrlPath = requestUrlObject.pathname;
  const urlParamsObject = new URLSearchParams(requestUrlObject.searchParams);
  const key = urlParamsObject.get("key");

  const redis = new Redis(import.meta.env.REDIS_URL);
  const validKeys = await redis.lrange("keys", 0, -1);

  if (
    (PROTECTED_ROUTES.indexOf(requestUrlPath) > -1 &&
      !!key &&
      validKeys.indexOf(key) > -1) ||
    PROTECTED_ROUTES.indexOf(requestUrlPath) <= -1
  ) {
    return true;
  } else {
    return false;
  }
};

export const onRequest = async (
  context: APIContext,
  next: MiddlewareNextResponse
) => {
  const response = await next();
  if (await youShallPass(context.request.url as string)) {
    return new Response(response.body, {
      status: 200,
      headers: response.headers,
    });
  } else {
    return new Response(
      JSON.stringify({
        error: "You do not have permission to access this endpoint! :(",
      }),
      {
        status: 403,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};
