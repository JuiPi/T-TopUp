import { createBrowserRouter } from "react-router-dom";
import Aboutus from "../Aboutus/Aboutus";
import Homepage from "../Homepage/Homepage";
import ProdMng from "../ProdMng/ProdMng";
import AddADMIN from "../AddAdmin/AddADMIN";
import UserManagement from "../UserManagement/UserManagement";
import EditADMIN from "../EditAdmin/EditADMIN";
// import GameDetail from "../game_detail/game_detail";
import PaymentSuccessful from "../PaymentSuccess/PaymentSuccessful";
import LogIn from "../Login/LogIn";
import App from "../App";
import AdvSearch from "../AdvSearch/AdvSearch";
import SearchResult from "../SearchResult/SearchResult";
import DELETEADMIN from "../DeleteAdmin/DELETEADMIN";
import GameDet from "../GameDet/GameDet";
import AddGame from "../AddGame/AddGame";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Homepage /> },
      { path: "about-us", element: <Aboutus /> },
      { path: "product-management", element: <ProdMng /> },
      { path: "add-admin", element: <AddADMIN /> },
      { path: "admin-management", element: <UserManagement /> },
      { path: "edit-admin/:username", element: <EditADMIN /> },
      { path: "game-detail/:gameName", element: <GameDet/> },
      { path: "payment-success", element: <PaymentSuccessful /> },
      { path: "log-in", element: <LogIn /> },
      { path: "advanced-search", element: <AdvSearch /> },
      { path: "search-result/:squery", element: <SearchResult /> },
      { path: "delete-admin", element: <DELETEADMIN /> },
      { path: "add-game", element: <AddGame /> },

    ],
  },
]);
