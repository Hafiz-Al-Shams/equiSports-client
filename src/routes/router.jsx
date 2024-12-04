import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import AllEquipts from "../components/AllEquipts";
import AddEquipts from "../components/AddEquipts";
import UpdateEquipts from "../components/UpdateEquipts";
import MyEquipts from "../components/MyEquipts";
import ViewDetails from "../components/ViewDetails";
import ErrorPage from "../components/ErrorPage";
import Layout from "../layouts/Layout";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                // loader: () => fetch('https://coffee-store-server-six-pink.vercel.app/coffee')
            },
            {
                path: '/allEquipments',
                element: <AllEquipts></AllEquipts>,
                // loader: () => fetch('https://coffee-store-server-six-pink.vercel.app/coffee')
            },
            {
                path: '/addEquipments',
                element: <PrivateRoute><AddEquipts></AddEquipts></PrivateRoute>,
            },
            {
                path: '/updateEquipments',
                element: <PrivateRoute><UpdateEquipts></UpdateEquipts></PrivateRoute>,
                // loader: ({ params }) => fetch(`https://coffee-store-server-six-pink.vercel.app/coffee/${params.id}`)
            },
            {
                path: '/login',
                element: <SignIn></SignIn>,
            },
            {
                path: '/register',
                element: <SignUp></SignUp>,
            },
            {
                path: '/myEquipmentsList',
                element: <PrivateRoute><MyEquipts></MyEquipts></PrivateRoute>,
                // loader: () => fetch('https://coffee-store-server-six-pink.vercel.app/users')
            },
            {
                path: '/viewDetails',
                element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
                // loader: () => fetch('https://coffee-store-server-six-pink.vercel.app/users')
            },
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>,
    },
]);

export default router;