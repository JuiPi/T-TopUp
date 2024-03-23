import picture from "./logo.png";
import ad1 from "./Game icon/Valorant/Val_banner.png"
import ad2 from "./Game icon/TF2/tf2_banner.png"
import ad3 from "./Game icon/OW/OW_banner.png"
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

function Homepage() {
  return (
    <>
      <body>
        <header>
          <NavBar/>
          <section>
            <div className="slider">
              <div className="slides">
                <img id="slide-1" src={ad1} alt="ad1"></img>
                <img id="slide-2" src={ad1} alt="ad2"></img>
                <img id="slide-3" src={ad1} alt="ad3"></img>
                
                <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
                <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
              </div>
              <div className="slider-nav">
                <a href="#slide-1"></a>
                <a href="#slide-2"></a>
                <a href="#slide-3"></a>
              </div>
            </div>
          </section>
        </header>
      </body>
    <Footer/>
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