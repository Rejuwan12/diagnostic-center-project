import { Outlet, useLocation } from "react-router-dom";
import Navbar from './../Components/Home/Navbar/Navbar';
import Footer from "../Components/Home/Footer/Footer";


const MainLayout = () => {
  const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') ||  location.pathname.includes('signUp')
    return (
        <div className="max-w-screen-lg mx-auto">
          { noHeaderFooter || <Navbar/>}
                    <Outlet/>
          { noHeaderFooter || <Footer/>}
        </div>
    );
};

export default MainLayout;