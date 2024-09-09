import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Layout = () => {
    const location = useLocation();
    const noHeaderRoutes = ["/", "/registro", "/inicio-sesion"];
    const showHeader = !noHeaderRoutes.includes(location.pathname);
    const backgroundClass = noHeaderRoutes.includes(location.pathname)
        ? "bg-center bg-popcorn bg-[length:144.125rem] bg-[-75.75rem_-21.375rem] bg-no-repeat"
        : "bg-bgPurple";

    return (
        <div className={`min-h-screen ${backgroundClass} leading-5 flex flex-col justify-between`}>
            {!showHeader &&
            <div className="fixed inset-0 bg-bgPurple opacity-95"></div>}
            {showHeader && <Header />}
            <main className="px-5 relative z-10">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;