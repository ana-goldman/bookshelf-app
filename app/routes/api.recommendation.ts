import type { Route } from "./+types/api.recommendation";
import type {
  AiRecommendation,
  RecommendationBook,
} from "~/features/recommendation/model/types";

const GEMINI_MODEL = "gemini-3.1-flash-lite";
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

function json(data: unknown, init?: ResponseInit) {
  return new Response(JSON.stringify(data), {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });
}

function isRecommendationBook(value: unknown): value is RecommendationBook {
  if (!value || typeof value !== "object") return false;

  const book = value as Partial<RecommendationBook>;
  return (
    typeof book.title === "string" &&
    typeof book.author === "string" &&
    (book.shelf === "want" || book.shelf === "reading" || book.shelf === "read")
  );
}

function parseRecommendation(text: string): AiRecommendation {
  const parsed = JSON.parse(text) as Partial<AiRecommendation>;

  if (
    typeof parsed.title !== "string" ||
    typeof parsed.author !== "string" ||
    typeof parsed.reason !== "string"
  ) {
    throw new Error("Gemini returned an invalid recommendation");
  }

  return {
    title: parsed.title,
    author: parsed.author,
    reason: parsed.reason,
  };
}

export async function action({ request }: Route.ActionArgs) {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, { status: 405 });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return json({ error: "Missing GEMINI_API_KEY" }, { status: 500 });
  }

  const body = await request.json().catch(() => null);
  const books = Array.isArray(body?.books) ? body.books : [];

  if (!books.every(isRecommendationBook)) {
    return json({ error: "Invalid books payload" }, { status: 400 });
  }

  const finishedBooks = books.filter(
    (book: RecommendationBook) => book.shelf === "read",
  );

  if (finishedBooks.length === 0) {
    return json(
      { error: "Add at least one book to Finished first" },
      { status: 400 },
    );
  }

  const prompt = [
    "Recommend exactly one book for this reader based on their finished books.",
    "Do not recommend any book already listed in any shelf.",
    "Return only valid JSON with these string fields: title, author, reason.",
    "Keep reason to two short sentences.",
    "",
    `All shelf books: ${JSON.stringify(books)}`,
    `Finished books: ${JSON.stringify(finishedBooks)}`,
  ].join("\n");

  const geminiRes = await fetch(GEMINI_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": apiKey,
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [{ text: prompt }],
        },
      ],
      generationConfig: {
        responseMimeType: "application/json",
      },
    }),
  });

  const geminiData = await geminiRes.json().catch(() => null);

  if (!geminiRes.ok) {
    return json(
      {
        error:
          geminiData?.error?.message ??
          "Gemini could not generate a recommendation",
      },
      { status: 502 },
    );
  }

  const text = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text;

  if (typeof text !== "string") {
    return json(
      { error: "Gemini returned an empty response" },
      { status: 502 },
    );
  }

  try {
    return json({ recommendation: parseRecommendation(text) });
  } catch {
    return json(
      { error: "Gemini returned an invalid recommendation" },
      { status: 502 },
    );
  }
}
