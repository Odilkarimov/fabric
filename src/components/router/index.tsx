import { createBrowserRouter } from "react-router-dom";
import Layout from "../../layout";
import Home from "../pages/home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            }
        ]

    }
])

export default router;