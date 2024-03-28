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
                  <label >Username</label>
                    <input type="text"  className="Add" />
                </div>

              <div className="inputGroup">
                <label>FirstName</label>
                  <input type="text" className="Add" />
              </div>
            </div>

              <div>
                <div className="inputsRow">
                  <div className="inputGroup">
                    <label >Email</label>
                      <input type="text"  className="Add" />
                  </div>
                
                  <div className="inputGroup">
                    <label>LastName</label>
                      <input type="text" className="Add" />
                  </div>
                </div>
              </div>

              <div>
                <div className="inputsRow">
                  <div className="inputGroup">
                    <label >Password</label>
                      <input type="text"  className="Add" />
                  </div>
                
                  <div className="inputGroup">
                    <label>Telephone</label>
                      <input type="text"className="Add" />
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
