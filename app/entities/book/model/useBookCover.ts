import { getBookCover } from "../api/getBookCover";

export function useBookCover(value: string, size: string) {
    return getBookCover('id', value, size);
}