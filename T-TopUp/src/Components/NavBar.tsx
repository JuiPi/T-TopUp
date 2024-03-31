import picture from "../assets/Misc/logo.png";
import mag from "../assets/Misc/search.png";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <nav className="nav1">
        <a href="log-in">Log in</a>
      </nav>
      <switch className="nav2">
        <a href="/">
          <img src={picture} alt="Logo" className="logosize"></img>
        </a>
        <a href="/">Home</a>
        <a href="#">Games</a>
        <a href="admin-management">User Management</a>
        <a href="product-management">Product Management</a>
        <div className="search">
          <form action="#">
            <input type="text" placeholder="Search" name="search"></input>
          </form>
          <a href="advanced-search">
            <img src={mag}></img>
          </a>
        </div>
      </switch>
    </>
  );
}

export default NavBar;
