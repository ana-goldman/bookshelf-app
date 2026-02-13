import { useEffect, useState } from "react";
import { addToShelf, fetchBookshelf, updateShelf } from "../api/bookshelfApi";
import type { BookshelfItem, Shelf } from "./types";
import { nanoid } from "nanoid";
import type { Book } from "~/entities/book/model/types";
import toast from "react-hot-toast";

export function useBookshelf() {
  const [books, setBooks] = useState<BookshelfItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookshelf()
      .then(setBooks)
      .finally(() => setLoading(false));
  }, []);

  const addBook = async (book: Book, shelf: Shelf) => {
    const newItem: BookshelfItem = {
      id: nanoid(6),
      key: book.key,
      title: book.title,
      author: book.authors?.[0]?.name ?? "Unknown",
      coverId: Number(book.cover_id) || undefined,
      shelf,
    };

    setBooks((prev) => [...prev, newItem]);

    try {
      await addToShelf(newItem);
      toast.success("Book added successfully!");
    } catch (error) {
      console.error("Failed to add book:", error);
      toast.error("Failed to add book. Please try again.");
      setBooks((prev) => prev.filter((item) => item.id !== newItem.id));
    }
  };

  const moveBook = async (id: string, shelf: Shelf) => {
    const previousBooks = books; // snapshot for rollback

    setBooks((prev) => prev.map((b) => (b.id === id ? { ...b, shelf } : b)));

    try {
      await updateShelf(id, shelf);
      toast.success("Book moved successfully!");
    } catch (error) {
      setBooks(previousBooks);
      toast.error("Failed to move book. Please try again.");
      throw error;
    }
  };

  return {
    books,
    loading,
    addBook,
    moveBook,
  };
}
