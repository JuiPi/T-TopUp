import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

function ProdMng() {
    return (
      <>
        <header>
          <NavBar />
        </header>
  
        <body>
          <p className="title">Product Management</p>
          <p className="allG">All Games</p>
          {/* <div className="display"> */}
  
              <div className="game-container">
  
                  <div className="game">
                      <div id="addgame" className="gameIcon"></div>
                      <p>game name</p>
                  </div>
  
                  <div className="game">
                      <div className="gameIcon"></div>
                      <div className="close">X</div>
                  <p>game name</p>
                  </div>
  
                  <div className="game">
                      <div className="gameIcon"></div>
                      <div className="close">X</div>
                  <p>game name</p>
                  </div>
  
                  <div className="game">
                      <div className="gameIcon"></div>
                      <div className="close">X</div>
                  <p>game name</p>
                  </div>
  
                  <div className="game">
                      <div className="gameIcon"></div>
                      <div className="close">X</div>
                  <p>game name</p>
                  </div>
  
                  <div className="game">
                      <div className="gameIcon"></div>
                      <div className="close">X</div>
                  <p>game name</p>
                  </div>
  
                  <div className="game">
                      <div className="gameIcon"></div>
                      <div className="close">X</div>
                  <p>game name</p>
                  </div>
  
                  <div className="game">
                      <div className="gameIcon"></div>
                      <div className="close">X</div>
                  <p>game name</p>
                  </div>
  
                  <div className="game">
                      <div className="gameIcon"></div>
                      <div className="close">X</div>
                  <p>game name</p>
                  </div>
  
            </div>
          {/* </div> */}
        </body>
  
        <footer className="footerbar">
          <Footer />
        </footer>
      </>
    );
  }
  
  export default ProdMng;
  