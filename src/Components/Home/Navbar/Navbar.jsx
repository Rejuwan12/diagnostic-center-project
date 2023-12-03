import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import useUsers from "./../../../Hooks/useUsers";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const Navbar = () => {
  const { user, logOut } = useAuth();
  const [admin, setAdmin]= useState(false);
  const [singleUser,isLoading] = useUsers();
  
  const axiosPublic = useAxiosPublic();
    
    const { data: bookingTest = [] } = useQuery({
    queryKey: ["boookTest"],
    queryFn: async () => {
      const res = await axiosPublic.get("/bookTests");
      const data = await res.data;
      return data;
    },
   
  })
 
  // if (isLoading) {
  //   return <p>Loading.....</p>;
  // }
  console.log(singleUser);
  const userObj = { ...singleUser[0] };
  console.log(userObj);
  const { status, role } = userObj;
  console.log(status, role);

  useEffect(()=>{
    if(user && role == 'admin'){
      setAdmin(true)
    }
   },[role, user])

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "log out successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error(error);

        Swal.fire({
          position: "top-center",
          icon: "question",
          title: "Logout Failed",
          showConfirmButton: true,
        });
      });
  };
  const links = (
    <>
      <NavLink to={"/"}>
        <li>
          <p>Home</p>
        </li>
      </NavLink>
      <NavLink to={"/login"}>
        <li>
          <p>Login</p>
        </li>
      </NavLink>
      <NavLink to={"/allTest"}>
        <li>
          <p>All Test</p>
        </li>
      </NavLink>
      <NavLink to={"/appointment"}>
        <li>
          <p>Appointment</p>
        </li>
      </NavLink>

       {/* {status == "block" ? (
        ""
      ) : (
        <NavLink to={"/dashboard"}>
          <div className="indicator">
            <span className="indicator-item badge badge-secondary">99+</span>
            <p className="p-2">Dashboard</p>
          </div>
        </NavLink>
      )} */}
      {
        admin ? <NavLink to={"/dashboard/addTest"}>
        <div className="indicator">
          <span className="indicator-item badge badge-secondary">{bookingTest?.length}</span>
          <p className="p-2">Dashboard</p>
        </div> 
      </NavLink>  : 
       <NavLink to={"/dashboard/userProfile"}>
       <div className="indicator">
        
         {
          status == 'block'  ? '' :  <div>
          <span className="indicator-item badge badge-secondary">{bookingTest?.length}</span>
          <p className="p-2">Dashboard</p>
          </div> 
         }
       </div>
     </NavLink>
      }
    </>
  );

  return (
    <div className="navbar z-10 fixed bg-white/10 backdrop:blur mx-auto max-w-screen-lg font-bold  text-sky-500">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link to={'/'}>
        <img
          className="btn  btn-ghost text-xl"
          src="../../../../images/logo.png"
        ></img>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="flex items-center gap-3">
              <img
                className="rounded-full w-[40px]"
                src={user.photoURL}
                alt=""
              />
              <span className="mr-2">{user.displayName}</span>
            </div>
            <button onClick={handleLogOut} className="btn btn-sm">
              LogOut
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="btn btn-ghost">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
