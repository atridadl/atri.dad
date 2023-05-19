import type { APIRoute } from "astro";
import { DISCORD_INVITE } from "../../consts";

export const get: APIRoute = ({ params, request }) => {
  return new Response(
    JSON.stringify({
      invite: DISCORD_INVITE,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
