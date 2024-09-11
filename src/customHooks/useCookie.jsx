import { useEffect, useState } from "react";

export const useCookie = (cookieName) => {
    const [cookieValue, setCookieValue] = useState(null);

    useEffect(() => {
        let cookies = document.cookie;
        cookies = cookies.split("; ");
        let value = cookies.find((row) => row.startsWith(cookieName));
        value = value ? value.split('=') : null;
        setCookieValue(value[1]);
    }, [cookieName]);

    return cookieValue;
};
