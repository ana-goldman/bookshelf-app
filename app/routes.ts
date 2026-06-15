import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("api/recommendation", "./routes/api.recommendation.ts"),
  route("shelf/:shelf", "./routes/shelf/ShelfPage.tsx"),
] satisfies RouteConfig;
