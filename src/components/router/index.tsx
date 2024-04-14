import { createBrowserRouter } from "react-router-dom";
import Layout from "../../layout";
import Home from "../pages/home";
import Shop from "../pages/shop";
import Contact from "../pages/contact-us";
import About from "../pages/about-us";
import ShopDetails from "../pages/shop-details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },       {
        path: "/shop-details/:id",
        element: <ShopDetails />,
      },  
          {
        path: "/contact",
        element: <Contact />,
      },          {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
