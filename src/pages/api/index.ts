import type { APIRoute } from "astro";
import { ENDPOINTS } from "../../consts";

export const prerender = false;

export const get: APIRoute = ({ params, request }) => {
  return new Response(
    JSON.stringify({
      endpoints: ENDPOINTS,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
