export type CoverKey = "id" | "isbn" | "olid";
export type CoverSize = "S" | "M" | "L";

export function getCoverUrl(
  key: CoverKey,
  value?: string | number | null,
  size: CoverSize = "M"
) {
  if (!value) {
    return undefined;
  }

  return `https://covers.openlibrary.org/b/${key}/${value}-${size}.jpg`;
}
