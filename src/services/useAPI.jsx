import { useEffect, useState } from "react";

const useAPI = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(url != null) {
            setLoading(true);
            const apiKey = import.meta.env.VITE_TMDB_TOKEN;
            const options = {
                method: "GET",
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${apiKey}`,
                },
            };
            fetch(url, options)
                .then((response) => response.json())
                .then((response) => setData(response))
                .catch((err) => setError(err))
                .finally(() => setLoading(false));
        }
    }, [url]);
    return { data, loading, error };
};

export default useAPI;
