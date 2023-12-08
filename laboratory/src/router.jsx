import { Navigate, createBrowserRouter } from "react-router-dom";
import PatientRegistration from "./Users/PatientRegistration";

import UserDashboard from "./Users/UserDashboard";
import BloodTyping from "./Users/BloodTyping";
import Chemistry from "./Users/Chemistry";
import Covid from "./Users/Covid";
import CrossMatching from "./Users/CrossMatching";
import Hematology from "./Users/Hematology";
import Microbiology from "./Users/Microbiology";
import Microscopy from "./Users/Microscopy";
import Miscellaneous from "./Users/Miscellaneous";
import Serology from "./Users/Serology";
import UserDefaultlayout from "./components/UserDefaultLayout";
import Radiology from "./Users/Radiology";


const router = createBrowserRouter([
    //Users
  {
        path: '/',
        element: <UserDefaultlayout />,
        children: [
            {
                path: '/',
                element: <Navigate to='/employee' />
            },
            {
                path: '/employee',
                element: <UserDashboard />
            },
            {
                path: '/registration',
                element: <PatientRegistration />
            },
            {
                path: '/bloodtyping',
                element: <BloodTyping />
            },
            {
                path: '/chemistry',
                element: <Chemistry />
            },
            {
                path: '/covid',
                element: <Covid />
            },
            {
                path: '/crossmatch',
                element: <CrossMatching />
            },
            {
                path: '/hematology',
                element: <Hematology />
            },
            {
                path: '/microbiology',
                element: <Microbiology />
            },
            {
                path: '/microscopy',
                element: <Microscopy />
            },
            {
                path: '/miscellaneous',
                element: <Miscellaneous />
            },
            {
                path: '/serology',
                element: <Serology />
            },
            {
                path: '/radiology',
                element: <Radiology />
            }
        ]
    }
    // {
    //     path:'/',
    //     element: <UserLayout />,
    //     children: [
    //         {
    //             path: 'login',
    //             element: <AdminLogin />
    //         }
    //     ]
    // },
    // admin
    // {
    //     path: '/',
    //     element: <Defaultlayout />,
    //     children: [
    //         {
    //             path: '/admin',
    //             element: <AdminDashboard />
    //         },
    //         {
    //             path: '/doctor',
    //             element: <DoctorsInformation />
    //         },
    //         {
    //             path: '/doctor/new',
    //             element: <DoctorNew />
    //         },
    //         {
    //             path: '/medical_technologist',
    //             element: <MTInformation />
    //         },
    //         {
    //             path: '/pathologist',
    //             element: <PathologistInformation />
    //         },
    //         {
    //             path: '/patients',
    //             element: <PatientInformation />
    //         },
    //         {
    //             path: '/user',
    //             element: <UserInformation />
    //         }
    //     ]
    // },
    // {
    //     path:'/',
    //     element: <AdminLayout />,
    //     children: [
    //         {
    //             path: 'login',
    //             element: <AdminLogin />
    //         },
    //         {
    //             path: 'signup',
    //             element: <AdminSignup />
    //         }
    //     ]
    // },




])

export default router;
