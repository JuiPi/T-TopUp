import { createBrowserRouter } from "react-router-dom";
import Aboutus from "../Aboutus";
import Homepage from "../Homepage";
import ProdMng from "../ProdMng";
import AddADMIN from "../AddADMIN";
import UserManagement from "../UserManagement";
import EditADMIN from "../EditADMIN";
import App from "../App";


export const router = createBrowserRouter([
    {
        path: "/",
        element:<App/>,
        children:[
            {path: "", element:<Homepage/>},
            {path: "aboutus", element:<Aboutus/>},
            {path: "Productmanagement", element:<ProdMng/>},
            {path: "addadmin", element:<AddADMIN/>},
            {path: "adminmanagement", element:<UserManagement/>},
            {path: "editadmin", element:<EditADMIN/>},
            
        ]
    }
])