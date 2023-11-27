import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Components/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AllTest from "../Pages/AllTest/AllTest";
import Appointment from "../Pages/Appointment/Appointment";
import Dashboard from "../Layouts/Dashboard";
import AppoinComming from "../Pages/Dashboard/AppointmentPages/AppoinComming";
import TestResult from "../Pages/Dashboard/Test/TestResult";
import Reservation from "../Pages/Dashboard/Reservation/Reservation";
import UserProfile from "../Pages/Dashboard/UserProfile/UserProfile";



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
        },
        {
            path:'/dashboard',
            element: <Dashboard/>,
            children:[
                {
                    path:'upComingAppointment',
                    element:<AppoinComming/>
                },
                {
                    path:'testResult',
                    element:<TestResult/>
                },
                {
                    path:'reservation',
                    element:<Reservation/>
                },
                {
                    path:'userProfile',
                    element:<UserProfile/>
                }
            ]
            
        }

     ]
    
)

