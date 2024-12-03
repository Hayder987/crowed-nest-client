import { Outlet } from "react-router";
import NavBar from "../components/header/NavBar";
import Footer from "../components/footer/Footer";
import { useContext } from "react";
import { UtilitiContext } from "../Context/UtilitiesProvider";


const MainLayout = () => {
    const {theme} = useContext(UtilitiContext)
    console.log(theme)
    return (
        <div className={`${theme?"light-theme":"dark-theme"}`}>
            <NavBar></NavBar>
            <div className="min-h-[70vh]">
               <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;