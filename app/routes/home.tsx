import { Bookshelf } from "~/widgets/bookshelf";
import type { Route } from "./+types/home";
import { SidePanel } from "~/widgets/side-panel";
import { Toaster } from "react-hot-toast";
import { text } from "stream/consumers";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Bookshelf App" },
    { name: "description", content: "Welcome to your Bookshelf App!" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-20">
      <SidePanel />
      <Bookshelf />
      <Toaster position="top-right" />
    </div>
  );
}
