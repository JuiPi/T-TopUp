import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import "./LogIn.css"
import icon from "./assets/Misc/admin.png"

function LogIn() {
    return (<>
    <header>
        <NavBar/>
    </header>

    <body>
        <div className="log-container">
            <div className="icon">
                <img src={icon}></img>
            </div>

            <div className="title">
                <p>Log In</p>
            </div>

            <div className="info">
                <div className="inputGroup"> 
                    <p className="underline">Username / E-mail</p>
                    <input type="text" required/>
                </div>

                <div className="inputGroup">
                    <p className="underline">Password</p>
                    <input type="text" required/>
                </div>
            
                <div className="remember">
                    <div className="check">
                        <input type="checkbox"/>
                    </div>
                    <p>Remember Me</p>
                </div>
            </div>

            <div className="submit">
                <button className="submit-button">Log In</button>
            </div>
        </div>
    </body>

    <footer>
        <Footer/>
    </footer>
    </>)
}

export default LogIn;