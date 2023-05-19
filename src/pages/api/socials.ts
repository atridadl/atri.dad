import type { APIRoute } from "astro";
import { SOCIALS } from "../../consts";
import { filterLinkList, stringifyLinkList } from "../../helpers";

export const prerender = false;

export const get: APIRoute = ({ params, request }) => {
  const filteredLinkList = filterLinkList(SOCIALS);
  return new Response(
    JSON.stringify({
      json: filteredLinkList,
      string: stringifyLinkList(filteredLinkList),
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
