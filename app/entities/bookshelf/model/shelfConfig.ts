import type { Shelf } from "./types";

export const SHELF_LABEL: Record<Shelf, string> = {
  want: "Wishlist",
  reading: "Currently reading",
  read: "Finished",
};

export const SHELF_TRANSITIONS: Record<Shelf, Shelf[]> = {
  want: ["reading", "read"],
  reading: ["want", "read"],
  read: ["want", "reading"],
};
