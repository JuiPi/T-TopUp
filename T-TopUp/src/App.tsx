import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Aboutus from "./Aboutus";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Aboutus/>
    </>
  );
}

export default App;
