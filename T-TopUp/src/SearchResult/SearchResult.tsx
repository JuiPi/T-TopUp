import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import "./SearchResult.css";
import X from "../assets/Misc/closeX.png";
import ff from "../assets/Game_icon/Fifa/ff_icon.png";
import lol from "../assets/Game_icon/LOL/lol_icon.png";
import ow from "../assets/Game_icon/OW/ow_icon.png";
import "../ProdMng/ProdMng.css";
import rov from "../assets/Game_icon/ROV/rov_icon.png";
import tf2 from "../assets/Game_icon/TF2/tf2_icon.png";
import tft from "../assets/Game_icon/TFT/tft_icon.png";
import val from "../assets/Game_icon/Val/val_icon.png";
import rb from "../assets/Game_icon/Roblox/rob_icon.png";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { useEffect, useState } from "react";

function SearchResult() {

  const search_query = useParams().squery;

  console.log(search_query)
  const [search,setSearch] = useState([]);

  const getSearch = () => {
    Axios.get(`http://localhost:8119/search/${search_query}`)
      .then((response:any) => {
        setSearch(response.data);
        console.log(response.data);
      })
      .catch((error:any) => {
        console.error('Error fetching search query:', error);
      });
  };

  useEffect(() => {
    getSearch();
  }, []);

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
              <p>Platform: #</p>
            </div>

            <div className="Genre">
              <img src={X}></img>
              <p>Genre: #</p>
            </div>

            <div className="Publisher">
              <img src={X}></img>
              <p>Publisher: #</p>
            </div>

            <div className="Promotion">
              <img src={X}></img>
              <p>Promotion Only</p>
            </div>
          </div>

          <p className="found"># Games Found:</p>
        </div>
        

        <div className="game-found">
          <div className="game-container">
            {search.map((val)=>{
              return(
                <div className="game">
                  <div className="iconArea">
                    <img className="g-icon" src={val.icon}></img>
                  </div>
                  <p>{val.gname}</p>
                </div>
              )
            })}
            {/* <div className="game">
              <div className="iconArea">
                <img className="g-icon" src={ff}></img>
              </div>
              <p>FIFA 2019</p>
            </div>

            <div className="game">
              <div className="iconArea">
                <img className="g-icon" src={lol}></img>
              </div>
              <p>League of Legends</p>
            </div>

            <div className="game">
              <div className="iconArea">
                <img className="g-icon" src={ow}></img>
              </div>
              <p>Overwatch</p>
            </div>

            <div className="game">
              <div className="iconArea">
                <img className="g-icon" src={rov}></img>
              </div>
              <p>ROV</p>
            </div>

            <div className="game">
              <div className="iconArea">
                <img className="g-icon" src={tf2}></img>
              </div>
              <p>Team Fortress 2</p>
            </div>

            <div className="game">
              <div className="iconArea">
                <img className="g-icon" src={tft}></img>
              </div>
              <p>Teamfight Tactics</p>
            </div>

            <div className="game">
              <div className="iconArea">
                <img className="g-icon" src={val}></img>
              </div>
              <p>Valorant</p>
            </div>

            <div className="game">
              <div className="iconArea">
                <img className="g-icon" src={rb}></img>
              </div>
              <p>Roblox</p>
            </div> */}
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
