function Aboutus(){
  return(
    <>
    <header>
        <nav className="nav1">
            <a href="#">Log in</a>
        </nav>
        <nav className="nav2">
            <a href="Homepage.tsx">
                <img src="image.png" alt="Logo" className="logosize"></img>
            </a>
            <a href="Homepage.tsx">Home</a>
            <a href="#">Games</a>
            <a href="#">User Management</a>
            <a href="#">Product Management</a>
        </nav>
    </header>
    
    <body>
      <div>
          <p className="TeamMem">
            Our Team Members
          </p>
      </div>

      <div className="container">
            <div className="grid-container">

                <div className="column">
                    <p className="NameTeamM">Column 1</p>
                  </div>
                <div className="column">
                    <p className="NameTeamM">Column 1</p>
                  </div>
                <div className="column">
                    <p className="NameTeamM">Column 1</p>
                  </div>
                <div className="column">
                    <p className="NameTeamM">Column 1</p>
                  </div>
                <div className="column">
                    <p className="NameTeamM">Column 1</p>
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