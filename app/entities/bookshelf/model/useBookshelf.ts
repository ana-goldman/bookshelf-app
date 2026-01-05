import { useEffect, useState } from "react";
// import { fetchBookshelf, addBook, removeBook } from "../api/bookshelfApi";
import { fetchBookshelf } from "../api/bookshelfApi";

export function useBookshelf() {
  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookshelf().then((data) => {
      setBooks(data);
      setLoading(false);
    });
  }, []);

  // const addBookToShelf = async (book: any) => {
  //   const created = await addBook(book);
  //   setBooks((prev) => [...prev, created]);
  // };

  // const removeBookFromShelf = async (id: number) => {
  //   await removeBook(id);
  //   setBooks((prev) => prev.filter((b) => b.id !== id));
  // };

  return {
    books,
    loading,
    // addBookToShelf,
    // removeBookFromShelf,
  };
}
