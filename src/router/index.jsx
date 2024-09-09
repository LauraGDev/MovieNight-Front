import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Login from "../pages/Login";
import SignIn from "../pages/SignIn";
import { RedirectAuth } from "./RedirectAuth";
import Profiles from "../pages/Profiles";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
              path: '',
              element: <RedirectAuth />,
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
              {
                path: '/perfiles',
                element: <Profiles />,
              },
        ]
    }
])