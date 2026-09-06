import { createBrowserRouter } from "react-router";

import App from "../App.jsx";
import Home from "../pages/home/Home.jsx";
import About from "../pages/about/About.jsx";

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
        ],
    },
]);

export default router;