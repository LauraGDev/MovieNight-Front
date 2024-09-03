import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/Header";

const Layout = () => {
    const location = useLocation();
    const noHeaderRoutes = ["/", "/signin", "/login"];
    const showHeader = !noHeaderRoutes.includes(location.pathname);
    const backgroundClass = noHeaderRoutes.includes(location.pathname)
        ? "bg-center bg-popcorn bg-[length:144.125rem] bg-[-75.75rem_-21.375rem] bg-no-repeat"
        : "";

    return (
        <div className={`min-h-screen ${backgroundClass}`}>
            <div className="absolute inset-0 bg-[rgba(22,8,38,0.95)]"></div>
            {showHeader && <Header />}
            <main className="px-5 relative z-10">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
