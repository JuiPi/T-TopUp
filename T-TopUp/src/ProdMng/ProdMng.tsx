import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import ff from "../assets/Game_icon/Fifa/ff_icon.png";
import lol from "../assets/Game_icon/LOL/lol_icon.png";
import ow from "../assets/Game_icon/OW/ow_icon.png";
import rov from "../assets/Game_icon/ROV/rov_icon.png";
import tf2 from "../assets/Game_icon/TF2/tf2_icon.png";
import tft from "../assets/Game_icon/TFT/tft_icon.png";
import val from "../assets/Game_icon/Val/val_icon.png";
import rb from "../assets/Game_icon/Roblox/rob_icon.png";
import addg from "../assets/Misc/add_game.png";
import edit from "../assets/Misc/Edit_Cover.png";
import "./ProdMng.css";

import Axios from "axios";
import { useEffect, useState } from "react";

function ProdMng() {

  const [gameList, setGameList] = useState([]);

  const getGames = () => {
    Axios.get('http://localhost:8119/gamedatabase')
      .then((response) => {
        setGameList(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching games:', error);
      });
  };

  const handleCancleAll = async (gamename:string)=>{
    try {
        await Axios.delete(`http://localhost:8119/remove-game/${gamename}`);
        alert(`Cancle creating new game`);
        getGames();
        
    } catch (error) {

        console.error("Error:", error); 
    }
  }

  useEffect(() => {
    getGames();
  }, []); // Call getGames() once when component mounts

  return (
    <>
      <header>
        <NavBar />
      </header>

      <body>
        <p id="title">Product Management</p>
        <p className="allG">All Games</p>
        {/* <div className="display"> */}

        <div className="game-container">
          <div className="game">
            <div className="iconArea">
              <a href="/add-game">
                <img className="g-icon" src={addg}></img>
              </a>
            </div>
            <p>Add Game</p>
          </div>

          {gameList.map((val,key)=>{
            return(
              <div className="game" key={key}>
                <div className="iconArea">
                  <a href={`/edit-game/${val.gname}`}>
                    <img className="g-icon" src={val.icon}></img>
                  <img className="editIcon" src={edit}></img></a>
                  
                </div>
                <div className="close" onClick={() =>{handleCancleAll(val.gname)}}>X</div>
                <p>{val.gname}</p>
              </div>
            )
          })}

          {/* <div className="game">
            <div className="iconArea">
              <img className="g-icon" src={ff}></img>
              <img className="editIcon" src={edit}></img>
            </div>
            <div className="close">X</div>
            <p>FIFA 2019</p>
          </div>

          <div className="game">
            <div className="iconArea">
              <img className="g-icon" src={lol}></img>
              <img className="editIcon" src={edit}></img>
            </div>
            <div className="close">X</div>
            <p>League of Legends</p>
          </div>

          <div className="game">
            <div className="iconArea">
              <img className="g-icon" src={ow}></img>
              <img className="editIcon" src={edit}></img>
            </div>
            <div className="close">X</div>
            <p>Overwatch</p>
          </div>

          <div className="game">
            <div className="iconArea">
              <img className="g-icon" src={rov}></img>
              <img className="editIcon" src={edit}></img>
            </div>
            <div className="close">X</div>
            <p>ROV</p>
          </div>

          <div className="game">
            <div className="iconArea">
              <img className="g-icon" src={tf2}></img>
              <img className="editIcon" src={edit}></img>
            </div>
            <div className="close">X</div>
            <p>Team Fortress 2</p>
          </div>

          <div className="game">
            <div className="iconArea">
              <img className="g-icon" src={tft}></img>
              <img className="editIcon" src={edit}></img>
            </div>
            <div className="close">X</div>
            <p>Teamfight Tactics</p>
          </div>

          <div className="game">
            <div className="iconArea">
              <img className="g-icon" src={val}></img>
              <img className="editIcon" src={edit}></img>
            </div>
            <div className="close">X</div>
            <p>Valorant</p>
          </div>

          <div className="game">
            <div className="iconArea">
              <img className="g-icon" src={rb}></img>
              <img className="editIcon" src={edit}></img>
            </div>
            <div className="close">X</div>
            <p>Roblox</p>
          </div> */}
        </div>
        {/* </div> */}
      </body>

      <footer className="footerbar">
        <Footer />
      </footer>
    </>
  );
}

export default ProdMng;
