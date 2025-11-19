export function getBookCover(key: string , value: string, size: string) {
    if (!value) {
        return undefined;
    }
    
    return `https://covers.openlibrary.org/b/${key}/${value}-${size}.jpg`;
}