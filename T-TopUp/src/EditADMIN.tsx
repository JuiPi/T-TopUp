import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Edit_Cover from "./assets/Misc/Edit_Cover.png";
import BackButton from "./assets/Misc/Back Button.jpg"
import "./EditADMIN.css";

function EditADMIN() {
  return (
    <>
      <header>
        <NavBar />
      </header>

  <div className="flex justify-start ml-24 mt-8" >
    <a href="add-admin"><button type="button"><img src={BackButton}></img></button> </a>
  </div>

      <body>
        <div className="Body">
          <div className="UserManageFrame drop-shadow">
            <div className="UserPicAdj">
              {/* Edit ADMIN IMAGE */}
              <img className="UserPic" src={Edit_Cover}></img>
            </div>

            <div>
              <div className="inputsRow">
                <div className="inputGroup">
                  <label >Username</label>
                    <input type="text"  className="Edit" />
                </div>

              <div className="inputGroup">
                <label>First Name</label>
                  <input type="text" className="Edit" />
              </div>
            </div>

              <div>
                <div className="inputsRow">
                  <div className="inputGroup">
                    <label >Email</label>
                      <input type="text"  className="Edit" />
                  </div>
                
                  <div className="inputGroup">
                    <label>Last Name</label>
                      <input type="text" className="Edit" />
                  </div>
                </div>
              </div>

              <div>
                <div className="inputsRow">
                  <div className="inputGroup">
                    <label >Password</label>
                      <input type="text"  className="Edit" />
                  </div>
                
                  <div className="inputGroup">
                    <label>Telephone</label>
                      <input type="text"className="Edit" />
                  </div>
                </div>
              </div>

              {/* <a href="admin-management"> */}
                <button type="submit" className="SubmitbuttonA">
                  SAVE
                </button>
                <button type="reset" className="SubmitbuttonB">
                  DELETE
                </button>
              {/* </a> */}
            </div>
          </div>
        </div>
      </body>

      <Footer />
    </>
  );
}

export default EditADMIN;
