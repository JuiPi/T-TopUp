import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import "./GameDet.css";

import back from "./assets/Misc/back.png";
import val from "./assets/Game_icon/Val/val_icon.png";

function AddGame() {
    return (
        <>
            <body>
                <header><NavBar/></header>
                    
                    <div className="mt-24">
                        <img src={back} id="back-img"></img>
                    </div>
                    
                <main className="layout">

                    <section>
                        <div className="game-detail">
                            {/* {<img src={val}></img>} */}
                            <div className="w-64 h-64 bg-gray-300 rounded-2xl"></div>
                            <div className="game-desc">
                                <h3>GAME NAME</h3>
                                    <p>
                                    <input className="overflow-y-auto w-11/12 appearance-none bg-transparent border-green-400 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Description">
                                    </input></p>
                            </div>
                            <div className="game-attr">
                                <p>Platform: #</p>
                                <p>Genre: #</p>
                                <p>Publisher: #</p>
                            </div>
                        </div>
                    </section>
                    
                    
                    <div className="detail">
                        <section className="detail">
                            <div className="package">
                            <h6>Packages</h6>
                                <div className="package-box">
                                    <div className="box">
                                        <p className="font-medium text-6xl -mt-4">+</p>
                                    </div>           
                                </div>
                            </div>    
                        </section>
                    </div>
                    

                </main>

                <footer><Footer/></footer>
            </body>
        </>
    );
}

export default AddGame;