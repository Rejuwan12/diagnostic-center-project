import { NavLink, Outlet } from "react-router-dom";
import { FaCalendarCheck, FaEnvelope, FaHome, FaLandmark, FaLine, FaReadme, FaRoute, FaServicestack, FaShoppingCart,  FaUserFriends } from 'react-icons/fa';
import { useEffect, useState } from "react";
import useUsers from "../Hooks/useUsers";
import useAuth from "../Hooks/useAuth";

const Dashboard = () => {
  const {user} = useAuth();
  const [admin, setAdmin]= useState(false);
  const [singleUser] = useUsers();
 
  // if (isLoading) {
  //   return <p>Loading.....</p>;
  // }
  // console.log(singleUser);
  const userObj = { ...singleUser[0] };
  // console.log(userObj);
  const { status, role } = userObj;
  console.log(status, role);
  useEffect(()=>{
    if(user && role == 'admin'){
      setAdmin(true)
    }
   },[role, user])
    return (
        <section>
            
            <div className='flex'>
            
            <div className="w-64 min-h-screen bg-orange-400">
        
           <ul className="menu">

         { admin ? <>
                  <li><NavLink to="/dashboard/addTest">
                 <FaHome/>
                  Add Test</NavLink>
                  </li>
                  <li><NavLink to="/dashboard/addService">
                 <FaServicestack/>
                  Add Service</NavLink>
                  </li>
                  <li><NavLink to="/dashboard/allUsers">
                 <FaUserFriends/>
                  All Users</NavLink>
                  </li>
                  <li><NavLink to="/dashboard/allTests">
                 <FaRoute/>
                  All Tests</NavLink>
                  </li>
                  <li><NavLink to="/dashboard/reservation">
                 <FaCalendarCheck/>
                  Reservation</NavLink>
                  </li>
                  <li><NavLink to="/dashboard/addBanner">
                 <FaCalendarCheck/>
                  Add Banner</NavLink>
                  </li>
                  <li><NavLink to="/dashboard/allBanner">
                 <FaLandmark/>
                  All Banner</NavLink>
                  </li>
                
                  </>  :
                <>
                <li><NavLink to="/dashboard/userProfile">
                 <FaHome/>
                  My Profile</NavLink>
                  </li>
            
            <li><NavLink to="/dashboard/testResult">
                 <FaLine/>
                 My Test Result</NavLink>
                  </li>
         <li><NavLink to="/dashboard/upComingAppointment">
                 <FaReadme/>
                 My Upcomming Appointment</NavLink>
                  </li>
                  <div className="divider"></div>
                
                </>
}
               <div className="divider"></div>
               <li><NavLink to="/">
                 <FaHome/>
                  Go To Home Page</NavLink>
                  </li>
               <li><NavLink to="/appointment">
                 <FaShoppingCart/>
                 Go To Appointment Page</NavLink>
                  </li>
               <li><NavLink to="/dashboard/contact">
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