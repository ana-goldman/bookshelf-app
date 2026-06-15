import type { BookshelfItem } from "~/entities/bookshelf/model/types";

export type RecommendationBook = Pick<
  BookshelfItem,
  "title" | "author" | "shelf"
>;

export type AiRecommendation = {
  title: string;
  author: string;
  reason: string;
};
