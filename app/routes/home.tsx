import { Bookshelf } from "~/widgets/bookshelf";
import type { Route } from "./+types/home";
import { SearchPanel } from "~/widgets/search-panel";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-20">
      <SearchPanel />
      <Bookshelf />
    </div>
  );
}
