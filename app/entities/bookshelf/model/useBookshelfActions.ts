import { nanoid } from "nanoid";
import { addToShelf, updateShelf } from "../api/bookshelfApi";
import type { Book } from "~/entities/book/model/types";
import type { Shelf } from "./types";

export function useBookshelfActions() {
  const addBook = async (book: Book, shelf: Shelf) => {
    return addToShelf({
      id: nanoid(6),
      key: book.key,
      title: book.title,
      author: book.authors?.[0]?.name ?? "Unknown",
      coverId: Number(book.cover_id) || undefined,
      shelf,
    });
  };

  const moveBook = async (id: number, shelf: Shelf) => {
    return updateShelf(id, shelf);
  };

  return { addBook, moveBook };
}
