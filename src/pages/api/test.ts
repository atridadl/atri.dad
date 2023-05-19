import type { APIRoute } from "astro";

export const get: APIRoute = ({ params, request }) => {
  return new Response(JSON.stringify({ message: "This was a GET!" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const post: APIRoute = async ({ params, request }) => {
  if (request.headers.get("Content-Type") === "application/json") {
    try {
      const body = await request.json();

      return new Response(
        JSON.stringify({
          ...body,
        }),
        {
          status: 200,
        }
      );
    } catch {
      return new Response(null, {
        status: 403,
        statusText: "Invalid JSON passed to this endpoint.",
      });
    }
  }
  return new Response(null, {
    status: 403,
    statusText: "Invalid JSON passed to this endpoint.",
  });
};
