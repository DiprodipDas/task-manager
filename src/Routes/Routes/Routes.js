import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import AddTask from "../../Pages/AddTask/AddTask";
import CompleteTask from "../../Pages/CompleteTask/CompleteTask";
import Faq from "../../Pages/Faq/Faq";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyTask from "../../Pages/MyTask/MyTask";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router= createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/faq',
                element:<Faq></Faq>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            
        ]
    },
    {
        path:'/addtask',
        element:<PrivateRoute><AddTask></AddTask></PrivateRoute>
    },
    {
        path:'/mytask',
        element:<PrivateRoute><MyTask></MyTask></PrivateRoute>
    },
    {
        path:'/completedtask',
        element: <PrivateRoute><CompleteTask></CompleteTask></PrivateRoute>
    }
])

export default router;