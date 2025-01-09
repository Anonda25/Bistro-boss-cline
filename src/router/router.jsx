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
import AddItems from "../pages/Dashbord/AddItems/AddItems";
import AdimnRoutes from "../AuthProvider/AdimnRoutes";
import ManageItems from "../pages/Dashbord/manageItems/ManageItems";
import Updateitems from "../pages/Dashbord/Updateitems/Updateitems";
import Payment from "../pages/Dashbord/Payment/Payment";
import PaymentsHistory from "../pages/Dashbord/PaymentsHistory/PaymentsHistory";

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
            //normal user
            {
                path: 'cart',
                element:<Card></Card>
            },
            {
                path: 'Payment',
                element:<Payment></Payment>
            },
            {
                path: 'PaymentHistory',
                element:<PaymentsHistory></PaymentsHistory>
            },

            //admin only manage 
            {
                path:'addItems',
                element: <AdimnRoutes><AddItems></AddItems></AdimnRoutes>
            },
            {
                path:'manageItems',
                element: <AdimnRoutes><ManageItems></ManageItems></AdimnRoutes>
            },
            {
                path:'updateItems/:id',
                element: <AdimnRoutes><Updateitems></Updateitems></AdimnRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)
            },
            {
                path:'allUser',
                element: <AdimnRoutes><AllUser></AllUser></AdimnRoutes>
            }
        ]
    }
]);

export default router