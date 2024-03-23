import Footer from "./Components/Footer"
import NavBar from "./Components/NavBar"
function AddADMIN(){
return(
    <>

    <header>
        <NavBar/>   
    </header>
    

    <body>
        <div className="Body">
            <div className="UserManageFrame">
                <div className="UserPicAdj">
                    {/* ADD ADMIN IMAGE */}
                    <img alt="Logo" className="UserPic"></img>    
                    </div>


            <div>
                    <div className="inputsRow">
                            <p>Username</p>
                            <input type="text" className="Add"/>
                            <p>First Name</p>
                            <input type="text" className="Add"/>
                        </div>

                        <div className="inputsRow">
                            <p>Email</p>
                            <input type="text" className="Add"/>
                            <p>Lastname</p>
                            <input type="text" className="Add"/>
                        </div>
                        
                        <div className="inputsRow">
                            <p>Password</p>
                            <input type="text" className="Add"/>
                            <p>Telephone</p>
                            <input type="text" className="Add"/>
                        </div>

                    <button type="submit" className="Submitbutton">Submit</button>
                </div>


            </div>  
        </div>
    </body>  
    
    <Footer/>
    </>
)
}

export default AddADMIN