import { Outlet } from "react-router";
import NavBar from "../components/header/NavBar";
import Footer from "../components/footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="min-h-[70vh]">
               <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;