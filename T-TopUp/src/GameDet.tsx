import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import back from "./assets/Misc/back.png";
import val from "./assets/Game_icon/Val/val_icon.png";
import "./GameDet.css";
import credit from "./assets/Misc/credit.png";
import mobile from "./assets/Misc/mobile.png";
import pp from "./assets/Misc/pp.png";

function GameDet() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <body>
        <img src={back} id="back-img"></img>
        <div className="layout">
          <div className="game-detail">
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
          </div>

          <div className="detail">
            <section className="package">
              <h6>Packages</h6>

              <div className="package-box">
                <div className="box">
                  <p className="coin"># Coins</p>
                  <p className="thb"># THB</p>
                </div>

                <div className="box">
                  <p className="coin"># Coins</p>
                  <p className="thb"># THB</p>
                </div>

                <div className="box">
                  <p className="coin"># Coins</p>
                  <p className="thb"># THB</p>
                </div>

                <div className="box">
                  <p className="coin"># Coins</p>
                  <p className="thb"># THB</p>
                </div>

                <div className="box">
                  <p className="coin"># Coins</p>
                  <p className="thb"># THB</p>
                </div>

                <div className="box">
                  <p className="coin"># Coins</p>
                  <p className="thb"># THB</p>
                </div>

                <div className="box">
                  <p className="coin"># Coins</p>
                  <p className="thb"># THB</p>
                </div>

                <div className="box">
                  <p className="coin"># Coins</p>
                  <p className="thb"># THB</p>
                </div>

                <div className="box">
                  <p className="coin"># Coins</p>
                  <p className="thb"># THB</p>
                </div>
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
                <div className="method">
                  {/* <div className="method-img"> */}
                  {/* <img src={visa}></img> */}
                  <img src={credit}></img>
                  {/* </div> */}
                  <p>VISA / Mastercard</p>
                </div>

                <div className="method">
                  {/* <div className="method-img"> */}
                  {/* <img src={visa}></img> */}
                  <img src={mobile}></img>
                  {/* </div> */}
                  <p>Mobile Banking</p>
                </div>

                <div className="method">
                  {/* <div className="method-img"> */}
                  {/* <img src={visa}></img> */}
                  <img src={pp}></img>
                  {/* </div> */}
                  <p>PromptPay</p>
                </div>
              </div>
            </section>
          </div>

          <button type="button" className="confirm">
            Confirm
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
