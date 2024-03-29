import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import React from "react";

// import Aboutus from "./Aboutus";
// import Homepage from "./Homepage";
// import ProdMng from "./ProdMng";
// import AddADMIN from "./AddADMIN";
// import UserManagement from "./UserManagement";
// import EditADMIN from "./EditADMIN";
import { Outlet } from 'react-router-dom';




function App(){
  
  return(<>
  <Outlet/>
  </>
  );
}

export default App;
