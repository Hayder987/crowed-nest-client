import { Outlet } from "react-router";
import NavBar from "../components/header/NavBar";
import Footer from "../components/footer/Footer";
import { useContext } from "react";
import { UtilitiContext } from "../Context/UtilitiesProvider";


const MainLayout = () => {
    const {theme} = useContext(UtilitiContext)
    return (
        <div className={`${theme?"light-theme":"dark-theme"}`}>
            <NavBar></NavBar>
            <div className="min-h-[calc(100vh-100px)]">
               <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;