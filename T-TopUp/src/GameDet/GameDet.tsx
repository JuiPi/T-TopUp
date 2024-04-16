import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import back from "../assets/Misc/back.png";
import val from "../assets/Game_icon/Val/val_icon.png";
import "./GameDet.css";
import credit from "../assets/Misc/credit.png";
import mobile from "../assets/Misc/mobile.png";
import pp from "../assets/Misc/pp.png";

import Axios from "axios";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { Redirect } from 'react-router';

function GameDet() {

  const gameName = useParams();
  // console.log(gameName.gameName);

  // console.log(`http://localhost:8000/game/${gameName}`)

  const [game, setGame] = useState([]);

  const [packages, setPackages] = useState([]);

  const getGame = () => {
    Axios.get(`http://localhost:8000/game/${gameName.gameName}`)
      .then((response) => {
        setGame(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching game:', error);
      });
  };

  const getPackages = () => {
    Axios.get(`http://localhost:8000/package/${gameName.gameName}`)
      .then((response) => {
        setPackages(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching packages:', error);
      });
  };

  useEffect(() => {
    getGame();
    getPackages();
  }, []); // Call getGames() once when component mounts

  // if(game.length===0){
  //   return <Redirect to="/404" />;
  // }

  return (
    <>
      <header>
        <NavBar />
      </header>

      <body>
        <img src={back} id="back-img"></img>

        <div className="layout">
          {game.map((val,key)=>{
              return(
                <div className="game-detail" key={key}>
                  <img src={val.icon} alt="" />
                  <div className="game-desc">
                    <h3>{val.gname}</h3>
                    <p>{val.gdesc}</p>

                  </div>
                  <div className="game-attr">
                    <p>Platform: {val.platform}</p>
                    <p>Genre: {val.genre}</p>
                    <p>Publisher: {val.publisher}</p>
                  </div>
                </div>
              )
            })}
          {/* <div className="game-detail">
            <img src={val}></img>

            <div className="game-desc">

              <h3>GAME NAME</h3>
              <p>
                this is a description. this is a description. this is a
                description. this is a description. this is a description. this
                is a description. this is a description. this is a description.
                this is a description. this is a description. this is a
                description. this is a description. this is a description. this
                is a description. this is a description. this is a description.
                this is a description. this is a description. this is a
                description. this is a description. this is a description. this
                is a description. this is a description. this is a description.
                this is a description. this is a description.
              </p>
            </div>

            <div className="game-attr">
              <p>Platform: #</p>
              <p>Genre: #</p>
              <p>Publisher: #</p>
            </div>
          </div> */}

          <div className="detail">
            <section className="package">
              <h6>Packages</h6>

              <div className="package-box">
                {packages.map((val,key)=>{
                return(
                      <div className="box" key={key}>
                        <input name="package" type="radio"></input>
                        <div className="box-detail">
                          <p className="coin">{val.point} {val.unit}</p>
                          <p className="thb">{val.price} THB</p>
                          <label></label>
                        </div>
                      </div>
                )
                })}

              </div>
            </section>

            <section>
              <h6>Your E-mail</h6>
              <input type="email" placeholder="Insert your email"></input>
            </section>

            <section>
              <h6>Your Game ID / Name</h6>
              <input
                type="text"
                placeholder="Insert your game ID or name"
              ></input>
            </section>

            <section>
              <h6>Discount / Coupon</h6>
              <input
                type="text"
                placeholder="Insert discount or coupon code (if any)"
              ></input>
            </section>

            <section className="payment-method">
              <h6>Payment</h6>

              <div className="method-container">
              

                {/* IMG only */}
                {/* <div className="method">
                  <img src={credit}></img>
                  <p>VISA / Mastercard</p>
                </div>

                <div className="method">
                  <img src={mobile}></img>
                  <p>Mobile Banking</p>
                </div>

                <div className="method">
                  <img src={pp}></img>
                  <p>PromptPay</p>
                </div> */}

                {/* Radio button */}
                <div className="method">
                  <input id="credit" name="payment" type="radio"></input>
                  <div className="method-icon">
                    <img src={credit}></img>
                    <label for="credit">VISA / Mastercard</label>
                  </div>
                </div>

                <div className="method">
                  <input id="mobile" name="payment" type="radio"></input>
                  <div className="method-icon">
                    <img src={mobile}></img>
                    <label for="mobile">Mobile Banking</label>
                  </div>
                </div>

                <div className="method">
                  <input id="pp" name="payment" type="radio"></input>
                  <div className="method-icon">
                    <img src={pp}></img>
                    <label for="pp">PromptPay</label>
                  </div>
                </div>

              </div>
            </section>
          </div>

          <button type="button" className="confirm">
            <a href="payment-success">Confirm</a>
          </button>
        </div>
      </body>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default GameDet;
