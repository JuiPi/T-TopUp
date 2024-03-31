import React, { Component } from 'react'
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import valorant from '../assets/Game_icon/Val/val_icon.png';


type Props = {}

const valo = {
  gname:"Valorant",
  gdesc:"3D 5vs5 First Person Shooting game along with the ability that you can use",
  genre:"First-person shooter"
};

const packages = {
  
};

const GameDetail = (props: Props) => {
  return (
    <>
    <header>
        <NavBar/>
    </header>
    <body>
        <div className="container xl:mx-auto flex flex-col gap-4">
            <div className='container flex-row gap-5 mt-5'>
                
                  <img className = "rounded-3xl left-0" src={valorant} />
                
                <div className='text-5xl'>
                    Valorant
                    <p className='text-xl'>
                        {valo.gdesc}
                    </p>
                </div>
                <div className='bg-blue-300 '>
                  platform: <br />
                  genre: <br />
                  publisher: <br />

                </div>

            </div>
            <div className='container bg-slate-300'>
                  packages
                  <div>
                    
                  </div>
            </div>
            <div className='container bg-slate-300'>

            </div>
            <div className='container bg-slate-300'>

            </div>
            <div className='container bg-slate-300'>

            </div>

        </div>
        
    </body>
    <Footer />
    </> 
  );
}

export default GameDetail;