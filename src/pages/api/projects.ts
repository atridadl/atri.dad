import type { APIRoute } from "astro";
import { PROJECTS } from "../../consts";
import { filterLinkList, stringifyLinkList } from "../../helpers";

export const prerender = false;

export const get: APIRoute = ({ params, request }) => {
  return new Response(
    JSON.stringify({
      json: filterLinkList(PROJECTS),
      string: stringifyLinkList(PROJECTS),
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
