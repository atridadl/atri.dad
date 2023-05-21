import type { IconType } from "react-icons";

export interface LinkList {
  name: string;
  href: string;
  description?: string;
  icon?: IconType;
  external?: boolean;
  excludeFromApi?: boolean;
}
