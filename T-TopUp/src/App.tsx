import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import Aboutus from "./Aboutus";
import Homepage from "./Homepage";
import ProdMng from "./ProdMng";
import AddADMIN from "./AddADMIN";
import UserManagement from "./UserManagement";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Aboutus />
    </>
  );
}

export default App;
