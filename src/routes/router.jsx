import { createBrowserRouter } from "react-router";

import App from "../App.jsx";
import Home from "../pages/home/Home.jsx";
import About from "../pages/about/About.jsx";
import Cart from "../pages/cart/Cart.jsx";
import Contact from "../pages/contact/Contact.jsx";
import Profile from "../pages/profile/Profile.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,

        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "about",
                Component: About,
            },
            {
                path: "cart",
                Component: Cart
            },
            {
                path: "contact",
                Component: Contact
            },
            {
                path: "profile",
                Component: Profile
            }
        ],
    },
]);

export default router;