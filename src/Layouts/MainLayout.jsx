import { Outlet } from "react-router-dom";
import Navbar from './../Components/Home/Navbar/Navbar';


const MainLayout = () => {
    return (
        <div className="max-w-screen-lg mx-auto">
          <Navbar/>
          <Outlet/>
        </div>
    );
};

export default MainLayout;