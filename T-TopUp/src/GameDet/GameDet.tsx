import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import back from "../assets/Misc/back.png";
import val from "../assets/Game_icon/Val/val_icon.png";
import "./GameDet.css";
import credit from "../assets/Misc/credit.png";
import mobile from "../assets/Misc/mobile.png";
import pp from "../assets/Misc/pp.png";

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
                  <input name="package" type="radio"></input>
                  <div className="box-detail">
                    <p className="coin"># Coins</p>
                    <p className="thb"># THB</p>
                    <label></label>
                  </div>
                </div>

                <div className="box">
                  <input name="package" type="radio"></input>
                  <div className="box-detail">
                    <p className="coin"># Coins</p>
                    <p className="thb"># THB</p>
                  </div>
                </div>

                <div className="box">
                  <input name="package" type="radio"></input>
                  <div className="box-detail">
                    <p className="coin"># Coins</p>
                    <p className="thb"># THB</p>
                  </div>  
                </div>

                <div className="box">
                  <input name="package" type="radio"></input>
                  <div className="box-detail">
                    <p className="coin"># Coins</p>
                    <p className="thb"># THB</p>
                  </div>
                </div>

                <div className="box">
                  <input name="package" type="radio"></input>
                  <div className="box-detail">
                    <p className="coin"># Coins</p>
                    <p className="thb"># THB</p>
                  </div>
                </div>

                <div className="box">
                  <input name="package" type="radio"></input>
                  <div className="box-detail">
                    <p className="coin"># Coins</p>
                    <p className="thb"># THB</p>
                  </div>
                </div>

                <div className="box">
                  <input name="package" type="radio"></input>
                  <div className="box-detail">
                    <p className="coin"># Coins</p>
                    <p className="thb"># THB</p>
                  </div>
                </div>

                <div className="box">
                  <input name="package" type="radio"></input>
                  <div className="box-detail">
                    <p className="coin"># Coins</p>
                    <p className="thb"># THB</p>
                  </div>
                </div>

                <div className="box">
                  <input name="package" type="radio"></input>  
                  <div className="box-detail">
                    <p className="coin"># Coins</p>
                    <p className="thb"># THB</p>
                  </div>
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
