import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import back from "../assets/Misc/back.png";
import "./AdvSearch.css";

function AdvSearch() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <body>
        <div className="search-container">
          <h1>Advanced Search</h1>
          <img src={back}></img>

          <form className="search-input" action="" method="">
            <div className="search-content">
              
              <div className="platform">
                <p>Platform</p>
                  {/* <input type="text"></input> */}
                  <select className="platform-select">
                    <option value="" disabled selected>Choose Your Platform</option>
                    <option value="pc">PC</option>
                    <option value="console">Console</option>
                    <option value="mobile">Mobile</option>
                  </select>
              </div>
              

              <div className="genre">
                  <p>Genre</p>
                  {/* <input type="text"></input> */}
                  <select className="genre-select">
                    <option value="" disabled selected>Choose Your Genre</option>
                    <option value="fps">FPS</option>
                    <option value="moba">MOBA</option>
                    <option value="rpg">RPG</option>
                    <option value="rts">RTS</option>
                    <option value="other-gen">Other</option>
                  </select>
              </div>

              <div className="publish">
                  <p>Publisher</p>
                  {/* <input type="text"></input> */}
                  <select className="genre-select">
                    <option value="" disabled selected>Choose Your Publisher</option>
                    <option value="rtg">Riot Games</option>
                    <option value="stm">Steam</option>
                    <option value="blz">Blizzard</option>
                    <option value="nmb">Netmarble</option>
                    <option value="other-pub">Other</option>
                  </select>
              </div>

              <div className="promotion">
                  <p>Promotion</p>
                  <input type="checkbox"></input>
                  <label>Promotion ONLY</label>
              </div>
            

            {/* <div className="resultperpage">
                <p>Result per page</p>
                <input type="text"></input>
            </div> */}
              <br></br>
              <br></br>
              <div className="button-container">
                  <button type="submit" className="searchbutton">SEARCH</button>
                  <button className="clearbutton">CLEAR</button>
              </div>
            </div>
          </form>

          
        </div>
      </body>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default AdvSearch;
