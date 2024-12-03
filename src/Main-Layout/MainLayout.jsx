import { Outlet } from "react-router";
import NavBar from "../components/header/NavBar";
import Footer from "../components/footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;