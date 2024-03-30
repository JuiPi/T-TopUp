import { createBrowserRouter } from "react-router-dom";
import Aboutus from "../Aboutus";
import Homepage from "../Homepage";
import ProdMng from "../ProdMng";
import AddADMIN from "../AddADMIN";
import UserManagement from "../UserManagement";
import EditADMIN from "../EditADMIN";
import GameDetail from "../game_detail/game_detail"
import PaymentSuccessful from "../PaymentSuccessful";
import LogIn from "../LogIn";
import App from "../App";
import AdvSearch from "../AdvSearch";


export const router = createBrowserRouter([
    {
        path: "/",
        element:<App/>,
        children:[
            {path: "", element:<Homepage/>},
            {path: "about-us", element:<Aboutus/>},
            {path: "product-management", element:<ProdMng/>},
            {path: "add-admin", element:<AddADMIN/>},
            {path: "admin-management", element:<UserManagement/>},
            {path: "edit-admin", element:<EditADMIN/>},
            {path: "game-detail", element:<GameDetail/>},
            {path: "payment-success", element: <PaymentSuccessful/>},
            {path: "log-in", element: <LogIn/>},
            {path: "advanced-search", element: <AdvSearch/>}
        ]
    }
])