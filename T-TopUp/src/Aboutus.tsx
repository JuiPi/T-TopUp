import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import picture from "./logo.png";

function Aboutus(){
  return(
    <>
    <header>
        <NavBar/>
    </header>
{/*  */}
  <body>
      <div>
          <p className="TeamMem">
            Our Team Members
          </p>
      </div>

      <div className="container">
            <div className="grid-container">
{/*  */}
        <div className="column">
          <div className="Picadjust">
            <div className="PicFrame">
              {/* img Term */}
            </div>
          </div>
            <p className="NameTeamM">Term</p>
              <div className="PersonName">
                <p className="GapName">Phusit</p>
                  <p className="GapName">Mongkhonwatcharaphun</p>
              </div>

            <div>
                <p  className="GapEmail">phusit.mon@student.mahidol.ac.th</p>
              <p className="GapNum">6588059</p>
            </div>
        </div>
{/*  */}
            <div className="column">
              <div className="Picadjust">
                <div className="PicFrame">
                    {/* img Thame */}
                </div>
              </div>

                <p className="NameTeamM">Thame</p>
                  <div className="PersonName">
                            <p className="GapName">Vichayuth</p>
                          <p className="GapName">Ngamsitthipong</p>
                        </div>

                    <div>
                          <p  className="GapEmail">vichayuth.nga@student.mahidol.ac.th</p>
                        <p className="GapNum">6588061</p>
                      </div>
            </div>
{/*  */}
            <div className="column">
              <div className="Picadjust">
                <div className="PicFrame">
                  {/* img Mac */}
                </div>
              </div>

                    <p className="NameTeamM">Mac</p>
                      <div className="PersonName">
                            <p className="GapName">Wasuntha</p>
                          <p className="GapName">Phanpanich</p>
                        </div>

                    <div>
                          <p  className="GapEmail">wasuntha.pha@student.mahidol.ac.th</p>
                        <p className="GapNum">6588068</p>
                      </div>
            </div>
{/*  */}
            <div className="column">
              <div className="Picadjust">
                <div className="PicFrame">
                  {/* img Jui */}
                </div>
              </div>

                  <p className="NameTeamM">Jui</p>
                    <div className="PersonName">
                        <p className="GapName">Sorawit</p>
                        <p className="GapName">Piriyapanyaporn </p>
                  </div>

                    <div>
                          <p  className="GapEmail">sorawit.pir@student.mahidol.ac.th</p>
                        <p className="GapNum">6588075</p>
                      </div>
                </div>
{/*  */}
            <div className="column">
              <div className="Picadjust">
                <div className="PicFrame">
                  {/* img Pran */}
                </div>
              </div>

                  <div>
                    <p className="NameTeamM">Pran</p>
                      <div className="PersonName">
                            <p className="GapName">Punnathorn</p>
                          <p className="GapName">Laohachote</p>
                        </div>

                    <div>
                          <p  className="GapEmail">punnathorn.lao@student.mahidol.ac.th</p>
                        <p className="GapNum">6588179</p>
                      </div>
                  
                  </div>
                    

            </div>


          </div>
      </div>
      

  </body>

    <Footer/>
      
    </>
  )
}

export default Aboutus;