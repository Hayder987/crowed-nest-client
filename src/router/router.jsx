import { createBrowserRouter } from "react-router";
import MainLayout from "../Main-Layout/MainLayout";
import Errorpage from "../pages/error-page/Errorpage";
import Home from "../pages/Home";
import AllCampaign from "../pages/AllCampaign";
import AddNewCampaign from "../pages/AddNewCampaign";
import MyCampaign from "../pages/MyCampaign";
import MyDonations from "../pages/MyDonations";
import LoginPage from "../pages/LoginPage";
import Register from "../pages/Register";
import PrivateRoute from "../private/PrivateRoute";
import DetailsPage from "../pages/DetailsPage";
import UpdatePage from "../pages/UpdatePage";
import AboutUsPage from "../pages/AboutUsPage";
import ContactUsPage from "../pages/ContactUsPage";


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
                path:'/about',
                element:<AboutUsPage></AboutUsPage>
            },
            {
                path:'/contact',
                element:<ContactUsPage></ContactUsPage>
            },

            {
                path:'/newcampaign',
                element:<PrivateRoute><AddNewCampaign></AddNewCampaign></PrivateRoute>
            },
            {
                path:'/mycampaign',
                element:<PrivateRoute><MyCampaign></MyCampaign></PrivateRoute>
            },
            {
                path:'/mydonation',
                element:<PrivateRoute><MyDonations></MyDonations></PrivateRoute>
            },
            {
                path:'/details/:id',
                element:<DetailsPage></DetailsPage>
            },
            {
             path:'/update/:id',
             element:<UpdatePage></UpdatePage>
            },
            {
                path:'/login',
                element:<LoginPage></LoginPage>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])