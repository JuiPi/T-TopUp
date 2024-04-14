import ad1 from "./assets/Game_icon/Val/val_banner.png";
import ad2 from "./assets/Game_icon/TF2/tf2_banner.png";
import ad3 from "./assets/Game_icon/OW/ow_banner.png";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import "./Homepage.css"
import ff from "./assets/Game_icon/Fifa/ff_icon.png";
import lol from "./assets/Game_icon/LOL/lol_icon.png";
import ow from "./assets/Game_icon/OW/ow_icon.png";
import rov from "./assets/Game_icon/ROV/rov_icon.png";
import tf2 from "./assets/Game_icon/TF2/tf2_icon.png";
import tft from "./assets/Game_icon/TFT/tft_icon.png";
import val from "./assets/Game_icon/Val/val_icon.png";
import rb from "./assets/Game_icon/Roblox/rob_icon.png";

function Homepage() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <body>
        <article>
          <div className="slider">
            <div className="slides">
              <img id="slide-1" src={ad1} alt="ad1"></img>
              <img id="slide-2" src={ad2} alt="ad2"></img>
              <img id="slide-3" src={ad3} alt="ad3"></img>
              <a className="prev">&#10094;</a>
              <a className="next">&#10095;</a>
            </div>
            <div className="slider-nav">
              <a href="#slide-1"></a>
              <a href="#slide-2"></a>
              <a href="#slide-3"></a>
            </div>
          </div>
        </article>
      </body>
      <br></br>
      <p className="text">All Games</p>
      <article className="gamecontainer">
        <article className="gamecolumn">
          <section className="imggame">
            <img src={ff} className="gameicon"></img>
          </section>
          <section className="gamename">FIFA 2019</section>
        </article>
        <article className="gamecolumn">
          <section className="imggame">
            <img src={ow} className="gameicon"></img>
          </section>
          <section className="gamename">Overwatch</section>
        </article>
        <article className="gamecolumn">
          <section className="imggame">
            <img src={lol} className="gameicon"></img>
          </section>
          <section className="gamename">Leagues of Legend</section>
        </article>
        <article className="gamecolumn">
          <section className="imggame">
            <img src={rov} className="gameicon"></img>
          </section>
          <section className="gamename">Arena of Valor</section>
        </article>
        <article className="gamecolumn">
          <section className="imggame">
            <img src={tf2} className="gameicon"></img>
          </section>
          <section className="gamename">Team Fortress 2</section>
        </article>
        <article className="gamecolumn">
          <section className="imggame">
            <img src={tft} className="gameicon"></img>
          </section>
          <section className="gamename">Teamfight Tactics</section>
        </article>
        <article className="gamecolumn">
          <section className="imggame">
            <img src={val} className="gameicon"></img>
          </section>
          <section className="gamename">Valorant</section>
        </article>
        <article className="gamecolumn">
          <section className="imggame">
            <img src={rb} className="gameicon"></img>
          </section>
          <section className="gamename">Roblox</section>
        </article>
      </article>
      <Footer />
    </>
  );
}

// const [slideIndex, setSlideIndex] = useState<number>(1);

// const plusSlides = (n: number) => {
//   showSlides(slideIndex +n);
// };

// const currentSlide = (n: number) => {
//   showSlides(n);
// };

// const showSlides = (n: number) => {
//   let i: number;
//   const slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>
//   const dots = document.getElementsByClassName("dot");

//   if(n > slides.length) {
//     setSlideIndex(1);
//   }
//   if(n < 1) {
//     setSlideIndex(slides.length);
//   }

//   for (i=0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }

//   for (i=0; i < dots.length; i++){
//     dots[i].className = dots[i].className.replace(" active", "");
//   }

//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
// };

export default Homepage;
