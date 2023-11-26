import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Components/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AllTest from "../Pages/AllTest/AllTest";
import Appointment from "../Pages/Appointment/Appointment";



export const Router = createBrowserRouter(
     [
        {
            path:'/',
            element:<MainLayout/>,
            children:[
                {
                    path:'/',
                    element:<Home/>
                },
                {
                    path:'/login',
                    element:<Login/>
                },
                {
                    path:'/signUp',
                    element:<SignUp/>
                },
                {
                    path:'/allTest',
                    element:<AllTest/>
                },
                {
                    path:'/appointment',
                    element:<Appointment/>
                }
            ]
        }

     ]
    
)

