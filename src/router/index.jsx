import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Login from "../pages/Login";
import SignIn from "../pages/SignIn";
import Profiles from "../pages/Profiles";
import FrontPage from "../pages/FrontPage";
import Search from "../pages/Search";
import Watchlist from "../pages/Watchlist";
import RandomSelection from "../pages/RandomSelection";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <FrontPage />,
            },
            {
                path: "/inicio-sesion",
                element: <Login />,
            },
            {
                path: "/registro",
                element: <SignIn />,
            },
            {
                path: "/que-vemos",
                element: <RandomSelection />,
            },
            {
                path: "/watchlist",
                element: <Watchlist />,
            },
            {
                path: "/perfiles",
                element: <Profiles />,
            },
            {
                path: "/buscador",
                element: <Search />,
            },
        ],
    },
]);
