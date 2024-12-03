import { createBrowserRouter } from "react-router";
import MainLayout from "../Main-Layout/MainLayout";
import Errorpage from "../pages/error-page/Errorpage";
import Home from "../pages/Home";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<Errorpage></Errorpage>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            }
        ]
    }
])