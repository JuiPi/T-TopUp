import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import Edit_Cover from "../assets/Misc/Edit_Cover.png";
import BackButton from "../assets/Misc/back.png"
import "./EditADMIN.css";
import Axios from "axios";
import { useEffect,useState } from "react";


function EditADMIN() {

  const [newAdmin,setNewAdmin] = useState({
    username:"",
    password:"",
    email:"",
    fname:"",
    lname:"",
    phone_num:"",
  });

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      // Send POST request to backend API endpoint
      const response = await Axios.post("http://localhost:8000/admin", newAdmin);
      console.log(response.data); // Log response from the server
      // Handle success, maybe show a success message to the user
    } catch (error) {
      console.error("Error:", error); // Log any errors
      // Handle error, maybe show an error message to the user
    }
  };

  const handleChange = (e:any)=>{
    setNewAdmin((prev)=>({...prev, [e.target.name] : e.target.value}))
    console.log(newAdmin.username)
  }
  

  return (
    <>
      <header>
        <NavBar />
      </header>

  <div className="flex justify-start ml-20 mt-8" >
    <a href="admin-management"><button type="button"><img src={BackButton} className="h-8 w-auto"></img></button> </a>
  </div>

      <body>
        <form className="Body" onSubmit={handleSubmit}>
          <div className="UserManageFrame drop-shadow">
            <div className="UserPicAdj">
              {/* Edit ADMIN IMAGE */}
              <img className="UserPic" src={Edit_Cover}></img>
            </div>

            <div>
              <div className="inputsRow">
                <div className="inputGroup">
                  <label >Username</label>
                  <input
                    type="text"
                    name="username"
                    className="Edit"
                    onChange={handleChange}
                  />
                </div>

              <div className="inputGroup">
                <label>First Name</label>
                  <input type="text" className="Edit" name="fname" onChange={handleChange}/>
              </div>
            </div>

              <div>
                <div className="inputsRow">
                  <div className="inputGroup">
                    <label >Email</label>
                      <input type="text"  className="Edit" name="email" onChange={handleChange}/>
                  </div>
                
                  <div className="inputGroup">
                    <label>Last Name</label>
                      <input type="text" className="Edit" name="lname"onChange={handleChange}/>
                  </div>
                </div>
              </div>

              <div>
                <div className="inputsRow">
                  <div className="inputGroup">
                    <label >Password</label>
                      <input type="text"  className="Edit" name="password" onChange={handleChange}/>
                  </div>
                
                  <div className="inputGroup">
                    <label>Telephone</label>
                      <input type="text"className="Edit" name="phone_num" onChange={handleChange}/>
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
        </form>
      </body>

      <Footer />
    </>
  );
}

export default EditADMIN;
