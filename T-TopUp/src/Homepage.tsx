import picture from "./logo.png";
import ad1 from "./Game icon/Valorant/Val_banner.png"
import ad2 from "./Game icon/TF2/tf2_banner.png"
import ad3 from "./Game icon/OW/OW_banner.png"

function Homepage() {
  return (
    <>
      <body>
        <header>
          <nav className="nav1">
            <a href="#">Log in</a>
          </nav>
          <nav className="nav2">
            <a href="Homepage.tsx">
              <img src={picture} alt="Logo" className="logosize"></img>
            </a>
            <a href="Homepage.tsx">Home</a>
            <a href="#">Games</a>
            <a href="#">User Management</a>
            <a href="#">Product Management</a>
          </nav>
          <section>
            <div className="slider">
                <div className="slides">
                    <img id="slide-1" src={ad1} alt="ad1"></img>
                    <img id="slide-2" src={ad2} alt="ad2"></img>
                    <img id="slide-3" src={ad3} alt="ad3"></img>
                    <a className="prev">&#10094</a>
                    <a className="next">&#10095</a>
                </div>
            </div>
          </section>
        </header>
      </body>
    </>
  );
}
export default Homepage;
