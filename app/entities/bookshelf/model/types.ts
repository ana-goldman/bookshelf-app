export type Shelf = "want" | "reading" | "read";

export interface BookshelfItem {
  id: string; // JSON Server id
  key: string; // OpenLibrary key
  title: string;
  author: string;
  coverId?: number;
  shelf: Shelf;
}
