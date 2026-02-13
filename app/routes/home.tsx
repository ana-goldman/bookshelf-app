import { Bookshelf } from "~/widgets/bookshelf";
import type { Route } from "./+types/home";
import { SidePanel } from "~/widgets/side-panel";
import { BookshelfProvider } from "~/entities/bookshelf/model/BookshelfProvider";
import { Toaster } from "react-hot-toast";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-20">
      <BookshelfProvider>
        <SidePanel />
        <Bookshelf />
      </BookshelfProvider>
      <Toaster position="top-right" />
    </div>
  );
}
