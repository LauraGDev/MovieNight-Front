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
              path: '/login',
              element: <Login />,
            },
            {
              path: '/sign-in',
              element: <SignIn />,
            },
        ]
    }
])