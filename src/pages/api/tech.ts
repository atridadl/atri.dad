import type { APIRoute } from "astro";
import { TECHNOLOGIES } from "../../consts";
import { filterLinkList, stringifyLinkList } from "../../helpers";

export const prerender = false;

export const get: APIRoute = ({ params, request }) => {
  return new Response(
    JSON.stringify({
      json: filterLinkList(TECHNOLOGIES),
      string: stringifyLinkList(TECHNOLOGIES),
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
