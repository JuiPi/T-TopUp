import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import back from "./assets/Misc/back.png";
import val from "./assets/Game_icon/Val/val_icon.png";
import "./GameDet.css";

function GameDet() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <body>
        <img src={back} id="back-img"></img>
        {/* <div className="layout"> */}

        <div className="game-detail">
          <img src={val}></img>

          <div className="game-desc">
            <h3>GAME NAME</h3>
            <p>
              this is a description. this is a description. this is a
              description. this is a description. this is a description. this is
              a description. this is a description. this is a description. this
              is a description. this is a description. this is a description.
              this is a description. this is a description. this is a
              description. this is a description. this is a description. this is
              a description. this is a description. this is a description. this
              is a description. this is a description. this is a description.
              this is a description. this is a description. this is a
              description. this is a description.
            </p>
          </div>

          <div className="game-attr">
            <p>Platform: #</p>
            <p>Genre: #</p>
            <p>Publisher: #</p>
          </div>

          {/* <div className="detail">
            <div className="package">
              <h6>Packages</h6>
              <div className="package-box"></div>
            </div>
          </div> */}
        </div>
        {/* </div> */}
      </body>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default GameDet;
