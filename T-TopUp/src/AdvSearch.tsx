import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer"
import './AdvSearch.css'

function AdvSearch() {
    return (
        <>
        <header>
            <NavBar />
        </header>
        <body>
            <div className="background"></div>
            <h1>Advanced Search</h1>
        </body>
        <footer>
            <Footer />
        </footer>
        </>
    )
}

export default AdvSearch