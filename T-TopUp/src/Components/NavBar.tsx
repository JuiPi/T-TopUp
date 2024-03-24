import picture from "../assets/Misc/logo.png";

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
      </switch>
    </>
  );
}

export default NavBar;
