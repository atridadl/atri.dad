import type { LinkList } from "./types";

export const stringifyLinkList = (linkList: Array<LinkList>) => {
  let returnString = "";

  linkList.forEach((link) => {
    returnString += `${link.name}: ${link.link} | \n`;
  });

  return returnString;
};

export const filterLinkList = (linkList: Array<LinkList>) => {
  return linkList.map((link) => {
    return {
      name: link.name,
      link: link.link,
    };
  });
};
