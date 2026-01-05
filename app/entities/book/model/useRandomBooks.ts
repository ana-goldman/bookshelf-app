import { useEffect, useState } from "react";
import { getRandomBooks } from "../api/getRandomBooks";
import type { Book } from "./types";

export function useRandomBooks(): { data: Book[] | null; loading: boolean; error: any } {
    const [data, setData] = useState<Book[] | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        let cancelled = false;

        setLoading(true);
        getRandomBooks()
            .then((res) => !cancelled && setData(res))
            .catch((e) => !cancelled && setError(e))
            .finally(() => !cancelled && setLoading(false));

        return () => {
            cancelled = true;
        };
    }, []);

    return { data, loading, error };
}