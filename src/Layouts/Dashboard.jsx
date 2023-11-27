import { NavLink, Outlet } from "react-router-dom";
import { FaCalendarCheck, FaEnvelope, FaHome, FaLine, FaReadme, FaShoppingCart } from 'react-icons/fa';

const Dashboard = () => {
    return (
        <section>
            
            <div className='flex'>
            
            <div className="w-64 min-h-screen bg-orange-400">
        
           <ul className="menu">
           
                <>
                <li><NavLink to="/dashboard/userProfile">
                 <FaHome/>
                  My Profile</NavLink>
                  </li>
            <li><NavLink to="/dashboard/reservation">
                 <FaCalendarCheck/>
                  Reservation</NavLink>
                  </li>
            <li><NavLink to="/dashboard/testResult">
                 <FaLine/>
                 My Test Result</NavLink>
                  </li>
         <li><NavLink to="/dashboard/upComingAppointment">
                 <FaReadme/>
                 My Upcomming Appointment</NavLink>
                  </li>
           
            
                </>
              
               <div className="divider"></div>
               <li><NavLink to="/">
                 <FaHome/>
                  Go To Home Page</NavLink>
                  </li>
               <li><NavLink to="/appointment">
                 <FaShoppingCart/>
                 Go To Appointment Page</NavLink>
                  </li>
               <li><NavLink to="/order/contact">
                 <FaEnvelope/>
                   Contact </NavLink>
                  </li>
           </ul>
           
            </div>
            <div className="flex-1 p-10">
            
              <Outlet/>
            </div>
        </div>
        </section>
    );
};

export default Dashboard;