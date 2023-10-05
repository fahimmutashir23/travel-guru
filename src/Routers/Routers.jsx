import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Booking from "../Pages/Booking/Booking";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivetRoute from "../PrivetRout/PrivetRoute";
import ContactUs from "../Pages/ContactUs/ContactUs";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('/data.json')
      },
      {
        path: "/booking/:id",
        element: <PrivetRoute><Booking></Booking></PrivetRoute>,
        loader: ()=>fetch('/data.json')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      },
      {
        path: "/contact",
        element: <PrivetRoute><ContactUs></ContactUs></PrivetRoute>
      }
    ],
  },
]);

export default Routers;
