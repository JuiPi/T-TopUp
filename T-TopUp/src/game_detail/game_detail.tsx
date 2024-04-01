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
    
    <body className='overflow-y-auto'>
        <header>
            <NavBar/>
        </header>
        <main className='mt-20 flex items-center justify-center'>
            <div className="flex flex-col gap-12 place-content-center">
                <div className='flex flex-row mt-1 place-content-center'> 
                    <div className='flex'>
                        <img className = "rounded-3xl mr-5 " src={valorant} />
                        <div className='flex flex-col w-full ml-8'>
                                <span className='text-5xl mb-8 font-bold'>Valorant</span>
                                <div className='flex flex-row'>
                                    <p className='text-xl text-wrap bg-slate-300 h-full flex justify-center items-center pl-5 rounded-lg'>
                                        {valo.gdesc}
                                    </p>
                                    <div className='flex flex-col bg-blue-300 w-1/2 pl-14 py-5 rounded-lg'>
                                        <span className='text-xl font-bold text-white'>platform:</span><br />
                                        <span className='text-xl font-bold text-white'>genre:</span><br />
                                        <span className='text-xl font-bold text-white'>publisher:</span><br />
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>

                <div className='pb-3 section flex flex-row w-full h-15 gap-4 justify-between bg-slate-300 rounded-lg'>
                    <h5 className='pl-12 pt-4 font-bold text-2xl '>Packages</h5>
     
                </div>
                <div className='pb-3 section flex flex-col w-full h-15 gap-4 justify-between bg-slate-300 rounded-lg'>
                    
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 pl-12 pt-4 font-bold text-2xl">
                        Your Email
                    </span>
                
                    <input type="email" name="email" className="mt-1 mx-10 mb-5 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-25 h- rounded-md sm:text-sm focus:ring-1" placeholder="Insert your email" />
                    
                    {/* <h5 className='pl-12 pt-4 font-bold text-2xl'>Your Email</h5> */}
                </div>  
                <div className='pb-3 section flex flex-row w-full h-15 gap-4 justify-between bg-slate-300 rounded-lg'>
                    <h5 className='pl-12 pt-4 font-bold text-2xl'>Your Game ID / Name</h5>
                </div>
                <div className='pb-3 section flex flex-row w-full h-15 gap-4 justify-between bg-slate-300 rounded-lg'>
                    <h5 className='pl-12 pt-4 font-bold text-2xl'>Discount and Coupon</h5>
                </div>
                <div className='pb-3 section flex flex-row w-full h-15 gap-4 justify-between bg-slate-300 rounded-lg'>
                    <h5 className='pl-12 pt-4 font-bold text-2xl'>Payment</h5>
                </div>

            </div>
        </main>
        <footer>
            <Footer/>
        </footer>
    </body>
    </> 
  );
}

export default GameDetail;