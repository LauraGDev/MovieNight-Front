import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import FrontPage from "../pages/FrontPage";
import Login from "../pages/Login";
import SignIn from "../pages/SignIn";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
              path: '/',
              element: <FrontPage />,
            },
            {
              path: '/inicio-sesion',
              element: <Login />,
            },
            {
              path: '/registro',
              element: <SignIn />,
            },
            {
                path: '/que-vemos',
                element: <SignIn />,
              },
              {
                path: '/watchlist',
                element: <SignIn />,
              },
        ]
    }
])