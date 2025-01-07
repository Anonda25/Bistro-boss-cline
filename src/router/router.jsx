import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home";
import Menu from "../Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login&Register/Login";
import Register from "../pages/Login&Register/Register";
import Secreat from "../pages/Sharde/Secreat/Secreat";
import PriveateRoutes from "./PriveateRoutes";
import DeshBord from "../MainLayout/DashBord/DeshBord";
import Card from "../pages/Dashbord/Card";
import AllUser from "../pages/Dashbord/AllUser/AllUser";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path: '/',
                element:<Home ></Home>
            },
            {
                path:'menu',
                element:<Menu></Menu>
            },
            {
                path:'order/:category',
                element:<Order></Order>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:"register",
                element:<Register></Register>
            },{
                path: 'secreat',
                element: <PriveateRoutes><Secreat></Secreat> </PriveateRoutes>
            }
        ]
    },
    {
        path:'dashbord',
        element: <PriveateRoutes><DeshBord></DeshBord></PriveateRoutes>,
        children:[
            {
                path: 'cart',
                element:<Card></Card>
            },

            //admin manage 
            {
                path:'allUser',
                element: <AllUser></AllUser>
            }
        ]
    }
]);

export default router