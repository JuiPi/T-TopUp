import fb from "../assets/Misc/facebook.png";
import ig from "../assets/Misc/instagram.png";
import twt from "../assets/Misc/x.jpg";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="footerbar">
        <div className="circle-container">
          <div className="circle">
            {/* <img src={fb}></img> */}
          </div>
          <div className="circle">
            {/* <img src={ig}></img> */}
          </div>
          <div className="circle">
            {/* <img src={twt}></img> */}
          </div>
        </div>

        <p className="footercon">2024 Copyrights YuthPong co.</p>
        <p className="footercon">About us</p>
      </footer>
    </>
  );
}

export default Footer;
