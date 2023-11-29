import { Navigate, createBrowserRouter } from "react-router-dom";
import AdminDashboard from "./Admin/AdminDashboard";
import AdminLogin from "./Admin/Login";
import AdminSignup from "./Admin/Signup";
import DoctorsInformation from "./Admin/DoctorsInformation";
import MTInformation from "./Admin/MTInformation";
import PathologistInformation from "./Admin/PathologistInformation";
import PatientInformation from "./Admin/PatientsInformation";
import UserInformation from "./Admin/UsersInformation";
import AdminLayout from "./components/AdminLayout";
import Defaultlayout from "./components/DefaultLayout";
import PatientRegistration from "./Users/PatientRegistration";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Defaultlayout />,
        children: [
            {
                path: '/dashboard',
                element: <Navigate to='/' />
            },
            {
                path: '/',
                element: <AdminDashboard />
            },
            {
                path: '/doctor',
                element: <DoctorsInformation />
            },
            {
                path: '/medical_technologist',
                element: <MTInformation />
            },
            {
                path: '/pathologist',
                element: <PathologistInformation />
            },
            {
                path: '/patients',
                element: <PatientInformation />
            },
            {
                path: '/user',
                element: <UserInformation />
            }
        ]
    },
    {
        path:'/',
        element: <AdminLayout />,
        children: [
            {
                path: 'login',
                element: <AdminLogin />
            },
            {
                path: 'signup',
                element: <AdminSignup />
            }
        ]
    },
    {
        path:'/registration',
        element: <PatientRegistration />
    }




])

export default router;
