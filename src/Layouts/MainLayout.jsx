import { Outlet } from "react-router-dom";
import Navbar from './../Components/Home/Navbar/Navbar';
import Footer from "../Components/Home/Footer/Footer";


const MainLayout = () => {
    return (
        <div className="max-w-screen-lg mx-auto">
          <Navbar/>
          <Outlet/>
          <Footer/>
        </div>
    );
};

export default MainLayout;