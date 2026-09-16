import { createBrowserRouter } from "react-router";

// layout
import GuestLayout from "../layout/guest/Layout.jsx";
import UserLayout from "../layout/user/Layout.jsx";
import AdminLayout from "../layout/admin/Layout.jsx";

// guest



// auth
import Signup from "../pages/auth/signup/Signup.jsx";
import Login from "../pages/auth/login/Login.jsx";

// user
import UserDashboard from "../pages/user/dashboard/UserDashboard.jsx";
import MyOrder from "../pages/user/my-order/MyOrder.jsx";
import OrderTracking from "../pages/user/order-tracking/OrderTracking.jsx";
import Profile from "../pages/user/profile/Profile.jsx";
import Usettings from "../pages/user/setting/Usettings.jsx";



// admin







const router = createBrowserRouter([
    // guest-route
    {
        path: "/",
        Component: GuestLayout,

        children: [

        ],
    },


    // auth-route
    {
        path: "auth/signup",
        Component: Signup
    },
    {
        path: "/auth/login",
        Component: Login
    },


    // user
    {
        path: "/user",
        Component: UserLayout,

        children: [
            {
                index: true,
                Component: UserDashboard
            },
            {
                path: "my-order",
                Component: MyOrder
            },
            {
                path: "order-tracking",
                Component: OrderTracking
            },
            {
                path: "profile",
                Component: Profile
            },
            {
                path: "settings",
                Component: Usettings
            }
        ]
    },


    // admin
    {
        path: "/admin",
        Component: AdminLayout,

        children: [

        ]
    }
]);

export default router;