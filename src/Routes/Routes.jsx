import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignU/SignUp";

import BookServices from "../Pages/BookServices/BookServices";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";
import { serverLink } from "../serverlink/serverlink";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: 'login',
                element:<Login></Login>
            },
            {
                path: 'signup',
                element:<SignUp></SignUp>

            },
            {
                path: 'book/:id',
                element: <PrivateRoute><BookServices></BookServices></PrivateRoute>,
                loader: ({ params }) => fetch(`${serverLink}/services/${params.id}`)

            },
            {
                path: 'bookings',
                element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
            }
               
        ]
    },
]);
export default router;