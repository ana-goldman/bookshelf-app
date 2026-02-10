// import type { Book } from "~/entities/book/model/types";
import type { BookshelfItem, Shelf } from "../model/types";

const BASE_URL = "http://localhost:3001/bookshelf";

export async function fetchBookshelf() {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Failed to fetch bookshelf");
  return res.json();
}

// export async function removeBook(id: number) {
//   const res = await fetch(`${BASE_URL}/${id}`, {
//     method: "DELETE",
//   });

//   if (!res.ok) throw new Error("Failed to remove book");
// }

export async function addToShelf(item: BookshelfItem) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
  if (!res.ok) throw new Error("Failed to add book");
  return res.json();
}

export async function updateShelf(id: string, shelf: Shelf) {
  return fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ shelf }),
  });
}
