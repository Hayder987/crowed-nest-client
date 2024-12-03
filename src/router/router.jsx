import { createBrowserRouter } from "react-router";
import MainLayout from "../Main-Layout/MainLayout";
import Errorpage from "../pages/error-page/Errorpage";
import Home from "../pages/Home";
import AllCampaign from "../pages/AllCampaign";
import AddNewCampaign from "../pages/AddNewCampaign";
import MyCampaign from "../pages/MyCampaign";
import MyDonations from "../pages/MyDonations";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<Errorpage></Errorpage>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:'/allcampaign',
                element:<AllCampaign></AllCampaign>
            },
            {
                path:'/newcampaign',
                element:<AddNewCampaign></AddNewCampaign>
            },
            {
                path:'/mycampaign',
                element:<MyCampaign></MyCampaign>
            },
            {
                path:'/mydonation',
                element:<MyDonations></MyDonations>
            }
        ]
    }
])