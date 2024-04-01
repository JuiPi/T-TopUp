import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import "./SearchResult.css";
import X from "./assets/Misc/closeX.png";

function SearchResult() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <body>
        <div className="filter-content">
          <h1>Search Result(s)</h1>
          <hr></hr>
          <div className="search-filter">
            <div className="platform">
                <img src={X}></img>
                <p>Platform: PC</p>
            </div>
            <div className="Genre">
                <img src={X}></img>
                <p>Genre: FPS</p>
            </div>
            <div className="Publisher">
                <img src={X}></img>
                <p>Publisher: Any</p>
            </div>
            <div className="Promotion">
                <img src={X}></img>
                <p>Promotion Only</p>
            </div>
          </div>
        </div>
      </body>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default SearchResult;
