import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Main from "./Layout/Main";
import CarSite from "./components/CarSite";
import DoctorSite from "./components/DoctorSite";
import Lawyer from "./components/Lawyer";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/car',
                element:<CarSite/>
            },
            {
                path:'/doctor',
                element:<DoctorSite/>
            },
            {
                path:'/lawyer',
                element:<Lawyer/>
            },
            {
                path:'/blog',
                element:<Blogs/>
            },
            {
                path:'/contact',
                element:<Contact/>
            }
        ]
    }
])