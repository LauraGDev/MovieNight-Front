import { useState, useEffect } from "react";
import { useCookie } from "./useCookie";

export const useAuth = () => {
    const token = useCookie("authToken");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        if (token) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, [token]);

    return { isAuthenticated };
};
