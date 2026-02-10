export type Shelf = "want" | "reading" | "read";

export interface BookshelfItem {
  id: string; // JSON Server id
  key: string; // OpenLibrary key
  title: string;
  author: string;
  coverId?: number;
  shelf: Shelf;
}

export type BookshelfContextValue = {
  books: BookshelfItem[];
  loading: boolean;
  addBook: (book: any, shelf: Shelf) => Promise<void>;
  moveBook: (id: string, shelf: Shelf) => Promise<void>;
};
