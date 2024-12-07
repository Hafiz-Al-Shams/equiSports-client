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
                loader: () => fetch('https://equi-sports-server.vercel.app/fixedEquipments')
            },
            {
                path: '/allEquipments',
                element: <AllEquipts></AllEquipts>,
                loader: () => fetch('https://equi-sports-server.vercel.app/equipments')
            },
            {
                path: '/addEquipments',
                element: <PrivateRoute><AddEquipts></AddEquipts></PrivateRoute>,
            },
            {
                path: '/updateEquipments/:id',
                element: <PrivateRoute><UpdateEquipts></UpdateEquipts></PrivateRoute>,
                loader: ({ params }) => fetch(`https://equi-sports-server.vercel.app/equipments/${params.id}`)
            },
            {
                path: '/login',
                element: <SignIn></SignIn>,
            },
            {
                path: '/register',
                element: <SignUp></SignUp>,
            },
            // {
            //     path: '/myEquipmentsList',
            //     element: <PrivateRoute><MyEquipts></MyEquipts></PrivateRoute>,
            //     loader: () => fetch('https://equi-sports-server.vercel.app/equipments')
            // },


            // testing area starts

            {
                path: '/myEquipmentsList/:emailId',
                element: <PrivateRoute><MyEquipts></MyEquipts></PrivateRoute>,
                loader: ({ params }) => fetch(`https://equi-sports-server.vercel.app/equipments/email/${params.emailId}`)
            },

            // testing area ends


            {
                path: '/equipments/:equipmentId',
                element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://equi-sports-server.vercel.app/equipments/${params.equipmentId}`)
            },
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>,
    },
]);

export default router;