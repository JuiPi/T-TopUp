import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import './SearchResult.css'

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
                        <p>x</p>
                        <p>Platform: PC</p>
                    </div>
                    <div className="Genre">
                        <p>x</p>
                        <p>Genre: FPS</p>
                    </div>
                    <div className="Publisher">
                        <p>x</p>
                        <p>Publisher: Any</p>
                    </div>
                    <div className="Promotion">
                        <p>x</p>
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