import type { LinkList } from "./types";

export const stringifyLinkList = (linkList: Array<Partial<LinkList>>) => {
  let returnString = "";

  linkList.forEach((link, index) => {
    if (index === linkList.length - 1) {
      returnString +=
        link.name && link.href ? `${link.name}: ${link.href}` : "";
    } else {
      returnString +=
        link.name && link.href ? `${link.name}: ${link.href} | \n` : "";
    }
  });

  return returnString;
};

export const filterLinkList = (linkList: Array<LinkList>) => {
  return linkList
    .filter((link) => !link.excludeFromApi)
    .map((link) => {
      return {
        name: link.name,
        href: link.href,
      };
    });
};
