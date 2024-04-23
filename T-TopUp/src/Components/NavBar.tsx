import picture from "../assets/Misc/logo.png";
import mag from "../assets/Misc/search.png";
import "./NavBar.css";
import { useState } from "react";

function NavBar() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLoggedIn = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  
  return (
    <>
      <nav className="nav1">
        <a href="log-in">Log in</a>
      </nav>
      <switch className="nav2">
        <a href="/">
          <img src={picture} alt="Logo" className="logosize"></img>
        </a>
        <div className="nav-button">
          <a href="/">Home</a>
          <a href="/#game-zone">Games</a>
          {isLoggedIn && <a href="/admin-management">User Management</a>}
          {isLoggedIn && <a href="/product-management">Product Management</a>}
        </div>
        <div className="search">
          <a href="/advanced-search">
            <div>
              <p className="search-text">Search...</p>
              <img src={mag}></img>
              </div>
          </a>
        </div>
      </switch>
    </>
  );
}

export default NavBar;
