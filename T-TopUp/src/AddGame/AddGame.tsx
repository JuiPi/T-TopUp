import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import "../GameDet/GameDet.css";

import back from "../assets/Misc/back.png";
// import val from "./assets/Game_icon/Val/val_icon.png";

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
                            {/* <div className="w-64 h-64 bg-gray-300 rounded-2xl"></div> */}
                            {/* <input type="file"></input> */}
                            <div className="frame"/>

                            <div className="game-desc">
                                <input
                                    className="w-11/12 text-4xl font-bold ml-3 mb-2 border-0"
                                    maxLength={20}
                                    placeholder="Game Name"
                                >
                                </input>
                                    <p>
                                        <textarea
                                            rows={7}
                                            className="w-full bg-transparent"
                                            placeholder="Description"
                                        >
                                        </textarea>
                                    </p>
                            </div>

                            <div className="game-attr -mt-1.5">
                                <p>Platform: 
                                    <input className="w-44 bg-transparent border-0"
                                        placeholder="Input"
                                    >
                                    </input>
                                </p>
                                <p>Genre:
                                    <input className="w-48 bg-transparent border-0"
                                        placeholder="Input"
                                    >
                                    </input>
                                </p>
                                <p>Publisher: 
                                    <input className="w-40 bg-transparent border-0"
                                        placeholder="Input"
                                    >
                                    </input>
                                </p>
                            </div>

                        </div>

                    </section>
                    
                    <div className="detail">

                        <section className="detail">
                            <div className="package">
                            <h6>Packages</h6>
                                <div className="package-box">
                                    
                                    <div className="box">
                                        <button className="w-full h-full rounded-2xl font-medium text-6xl text-center">
                                            <p style={{transform: 'translate(0px, -5px)'}}>+</p>
                                        </button>
                                    </div> 
                                              
                                </div>
                            </div>    
                        </section>
                    
                        <section className="detail">
                            <div className="package">
                            <h6>Discount Code</h6>
                                <div className="package-box">

                                    <div className="box">
                                        <button className="w-full h-full rounded-2xl font-medium text-6xl text-center">
                                            <p style={{transform: 'translate(0px, -5px)'}}>+</p>
                                        </button>
                                    </div>     

                                </div>
                            </div>    
                        </section>

                        <div className="flex justify-end">
                            <button
                                type="button"
                                className="w-32 h-11 bg-green-500 text-lg text-white text-center font-semibold rounded-md"
                            >
                            Save
                            </button>
                            <button
                                type="button"
                                className="w-32 h-11 bg-gray-300 text-lg text-black text-center font-semibold rounded-md ml-7"
                            >
                            Cancel
                            </button>
                        </div>

                    </div>

                </main>

                <footer><Footer/></footer>
            </body>
        </>
    );
}

export default AddGame;