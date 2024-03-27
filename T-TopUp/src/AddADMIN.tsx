import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Edit_Cover from "./assets/Misc/Edit_Cover.png";
import "./AddADMIN.css";

function AddADMIN() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <body>
        <div className="Body">
          <div className="UserManageFrame">
            <div className="UserPicAdj">
              {/* ADD ADMIN IMAGE */}
              <img className="UserPic" src={Edit_Cover}></img>
            </div>

            <div>
              <div className="inputsRow">
                <div className="inputGroup">
                  <label htmlFor="username">Username</label>
                    <input type="text" id="username" className="Add" />
                </div>

              <div className="inputGroup">
                <label htmlFor="firstName">FirstName</label>
                  <input type="text" id="firstName" className="Add" />
              </div>
            </div>

              <div>
                <div className="inputsRow">
                  <div className="inputGroup">
                    <label htmlFor="username">Email</label>
                      <input type="text" id="username" className="Add" />
                  </div>
                
                  <div className="inputGroup">
                    <label htmlFor="firstName">LastName</label>
                      <input type="text" id="firstName" className="Add" />
                  </div>
                </div>
              </div>

              <div>
                <div className="inputsRow">
                  <div className="inputGroup">
                    <label htmlFor="username">Password</label>
                      <input type="text" id="username" className="Add" />
                  </div>
                
                  <div className="inputGroup">
                    <label htmlFor="firstName">Telephone</label>
                      <input type="text" id="firstName" className="Add" />
                  </div>
                </div>
              </div>

              <button type="submit" className="Submitbutton">
                ADD
              </button>
            </div>
          </div>
        </div>
      </body>

      <Footer />
    </>
  );
}

export default AddADMIN;
