import picture from "./logo.png";

function Aboutus(){
  return(
    <>
    <header>
        <nav className="nav1">
            <a href="#">Log in</a>
        </nav>
        <nav className="nav2">
            <a href="Homepage.tsx">
                <img src={picture} alt="Logo" className="logosize"></img>
            </a>
            <a href="Homepage.tsx">Home</a>
            <a href="#">Games</a>
            <a href="#">User Management</a>
            <a href="#">Product Management</a>
        </nav>
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

    <footer className="footerbar">

      <div className="circle-container">
        <div className="circle">img</div>
        <div className="circle">img</div>
        <div className="circle">img</div>
      </div>
      
      <p className="footercon">2024 Copyrights YuthPong co.</p>
      <p className="footercon">About us</p>
    
    </footer>
      
    </>
  )
}

export default Aboutus;