import { useAuth } from "../customHooks/useAuth"; // Ajusta la ruta según tu estructura de carpetas
import Search from "../pages/Search";
import FrontPage from "../pages/FrontPage";

export const RedirectAuth = () => {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? <Search /> : <FrontPage />;
};
