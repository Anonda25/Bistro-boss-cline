import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home";
import Menu from "../Menu/Menu/Menu";

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
            }
        ]
    },
]);

export default router