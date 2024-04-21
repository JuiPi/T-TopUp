import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import back from "../assets/Misc/back.png";
import "./AdvSearch.css";
// import { Link } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import Axios from "axios";


function AdvSearch() {

  const [search,SetSearch] = useState("");

  const navigate = useNavigate();

  const handleChange = (value:string)=>{
    SetSearch(value) 
    console.log(search)
  }

  const handleSearch = ()=>{
    navigate(`/search-result/${search}`)
  }

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

              <div className="search-choice">
                <select>
                  <option value="#">Game Name</option>
                  <option value="#">Genre</option>
                  <option value="#">Platform</option>
                  <option value="#">Publisher</option>
                </select>
                <input type="text" onChange={(e)=> handleChange(e.target.value)} required/>
              </div>

              <br></br>
              <br></br>
              <div className="button-container">
                  <button type="submit" className="searchbutton" onClick={handleSearch}>SEARCH</button>
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
