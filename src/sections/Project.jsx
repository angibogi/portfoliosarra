import React from 'react'
import cortilia from "../../assets/cortilia.png"
import makai from "../../assets/makai.png"
import notebook from "../../assets/notebook.png"
import valentino from "../../assets/valentino.png"
import { Link } from "react-router-dom"

export const Project = () => {
    return (
        <div id="project" className=" pt-20 lg:px-[150px] px-[30px] grid lg:grid-cols-2 grid-cols-1  gap-4 bg-black z-10">
            <div className=" w-full flex flex-col items-start gap-6">
                <p className="text-[#8491A0] text-[16px]">MY PROJECTS</p>
                <h1 className="text-white font-semibold xl:text-[55px] text-[28px]">Work that I’ve done </h1>
            </div>

            <div className=" relative">
            <Link to="/cortilia">
                <div className=" overflow-hidden bg-white-100 xl:absolute relative z-10">
                    <img className="w-full" src={cortilia} alt="Sarra" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Cortilia - New App</div>
                        <p className="text-[#8491A0] text-base mb-8">
                            I  led the end-to-end redesign of the Cortilia app, following a complete UX process.
                        </p>
                    </div>
                    <div className="relative">
                        <span className="bg-[#659238] px-5 py-3 text-xl  text-white absolute bottom-0 right-0 ">
                        ⬈
                        </span>
                    </div>
                </div>
                </Link>
            </div>
            <div className="relative">
                  <Link to="/valentino">
                <div className="overflow-hidden bg-white-100 ">
                    <img className="w-full" src={valentino} alt="Sarra" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Valentino – Website Checkout Redesign</div>
                        <p className="text-[#8491A0] text-base mb-8">
                            I redesigned the website checkout flow to improve usability and align with Valentino’s luxury brand identity.
                        </p>
                    </div>
                    <div className="relative">
                        <span className="bg-[#659238] px-5 py-3 text-xl  text-white absolute bottom-0 right-0 ">
                        ⬈
                        </span>
                    </div>
                </div>
                </Link>
            </div>
            <div className=" relative">
            <Link to="/makai">
                <div className="overflow-hidden bg-white-100 xl:mt-20 mt-0 xl:absolute relative xl:top-140">
                    <img className="w-full" src={makai} alt="Sarra" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Macai - ETA traking</div>
                        <p className="text-[#8491A0] text-base mb-8">
                            I redesigned the ETA tracking feature in the Makai app to improve clarity and usability.
                        </p>
                    </div>
                    <div className="relative">
                        <span className="bg-[#659238] px-5 py-3 text-xl  text-white absolute bottom-0 right-0 ">
                        ⬈
                        </span>
                    </div>
                </div>
                </Link> 
            </div>
            <div>
            <Link to="/page">
                <div className="overflow-hidden  bg-white-100 xl:mt-10 mt-0">
                    <img className="w-full" src={notebook} alt="Sarra" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Cortilia - New Product Detail Page</div>
                        <p className="text-[#8491A0] text-base mb-8">
                            I redesigned the Product Detail Page (PDP) for both the Cortilia app and website to enhance usability and visual hierarchy
                        </p>
                    </div>
                    <div className="relative">
                        <span className="bg-[#659238] px-5 py-3 text-xl  text-white absolute bottom-0 right-0 ">
                        ⬈
                        </span>
                    </div>
                </div>
                </Link> 
            </div>
        </div>
    )
}

export default Project