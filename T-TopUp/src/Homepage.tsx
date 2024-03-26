import ad1 from "./assets/Game_icon/Val/val_banner.png";
import ad2 from "./assets/Game_icon/TF2/tf2_banner.png";
import ad3 from "./assets/Game_icon/OW/ow_banner.png";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import "./Homepage.css";

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
      <h1>All Games</h1>
      <article className="container">
        <article className="gamecolumn">
          <section className="imggame">
            <img src="logogame.png"></img>
          </section>
          <section className="gamename">Valorant</section>
        </article>
        <article className="gamecolumn">
          <section className="imggame">
            <img src="logogame.png"></img>
          </section>
          <section className="gamename">Valorant</section>
        </article>
        <article className="gamecolumn">
          <section className="imggame">
            <img src="logogame.png"></img>
          </section>
          <section className="gamename">Valorant</section>
        </article>
        <article className="gamecolumn">
          <section className="imggame">
            <img src="logogame.png"></img>
          </section>
          <section className="gamename">Valorant</section>
        </article>
        <article className="gamecolumn">
          <section className="imggame">
            <img src="logogame.png"></img>
          </section>
          <section className="gamename">Valorant</section>
        </article>
        <article className="gamecolumn">
          <section className="imggame">
            <img src="logogame.png"></img>
          </section>
          <section className="gamename">Valorant</section>
        </article>
        <article className="gamecolumn">
          <section className="imggame">
            <img src="logogame.png"></img>
          </section>
          <section className="gamename">Valorant</section>
        </article>
        <article className="gamecolumn">
          <section className="imggame">
            <img src="logogame.png"></img>
          </section>
          <section className="gamename">Valorant</section>
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
