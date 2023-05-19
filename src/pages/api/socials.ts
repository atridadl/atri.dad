import type { APIRoute } from "astro";
import { SOCIALS } from "../../consts";
import { filterLinkList, stringifyLinkList } from "../../helpers";

export const get: APIRoute = ({ params, request }) => {
  return new Response(
    JSON.stringify({
      json: filterLinkList(SOCIALS),
      string: stringifyLinkList(SOCIALS),
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
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
