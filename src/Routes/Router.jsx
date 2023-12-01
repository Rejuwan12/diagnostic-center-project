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
import TestDetails from "../Pages/AllTest/TestDetails/TestDetails";
import AddTest from "../Pages/Dashboard/AddTest/AddTest";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddService from "../Pages/Dashboard/AddService/AddService";
import AllTests from "../Pages/Dashboard/AllTests/AllTests";
import UpdateTests from "../Pages/Dashboard/UpdateTests/UpdateTests";
import PrivateRoute from './../Providers/PrivateRoute';



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
                    path:'/allTests/:id',
                    element:<PrivateRoute> <TestDetails/></PrivateRoute>,
                    loader: ({params}) => fetch(`http://localhost:5000/allTests/${params.id}`)
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
                    path:'addService',
                    element:<AddService/>
                },
                {
                    path:'userProfile',
                    element:<UserProfile/>
                },
                {
                    path:'addTest',
                    element:<AddTest/>
                },
                {
                    path:'allUsers',
                    element:<AllUsers/>
                },
                {
                    path:'updateTest/:id',
                    element:<UpdateTests/>,
                    loader:({params}) => fetch(`http://localhost:5000/allTests/${params.id}`)
                },
                {
                    path:'allTests',
                    element:<AllTests/>
                },
            ]
            
        }

     ]
    
)

