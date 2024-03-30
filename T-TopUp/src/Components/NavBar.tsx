import picture from "../assets/Misc/logo.png";
import "./NavBar.css"

function NavBar() {
  return (
    <>
      <nav className="nav1">
        <a href="#">Log in</a>
      </nav>
      <switch className="nav2">
        <a href="Homepage">
          <img src={picture} alt="Logo" className="logosize"></img>
        </a>
        <a href="Homepage">Home</a>
        <a href="Games">Games</a>
        <a href="UserManagement">User Management</a>
        <a href="ProductManagement">Product Management</a>
        <div className="search">
            <form action="#">
                <input type="text" placeholder="Search" name="search"></input>
                {/* <button type="submit">Search</button> */}
            </form>
        </div>
      </switch>
    </>
  );
}

export default NavBar;
