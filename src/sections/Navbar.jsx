import React, { useState } from 'react'
import Logo from "../../assets/logo.svg"
import { Link } from "react-router-dom"
import Negativo from "../../assets/logo_negativo.svg"
import Dropdown from "../Dropdown";

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div>
      <div className="flex justify-between items-center py-4 lg:px-[150px]">
        <div className="hidden lg:block">
          <Link to="/"><img src={Logo} alt="Sarra" /></Link>
        </div>
        <div className="lg:hidden block px-10 z-10 w-25">
          <Link to="/"><img src={Negativo} alt="Sarra" /></Link>
        </div>

        <div className=" items-center space-x-5 z-10  ">
          <div className=" items-center space-x-8 hidden lg:flex">
            <Link to="/#experience">
              Experience</Link>
            <Link to="/#skillset">Skillset</Link>
            <button><Dropdown/></button>
          </div>
          <button onClick={() => (setIsMenuOpen(!isMenuOpen))} type="button" className="flex lg:hidden p-5 z-10 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

      </div>
      <Link to="/#contact">  <div className=" group hidden lg:block bg-[#659238] hover:bg-black z-10  absolute top-0 right-8">
        <button className="px-5 py-2 bg-[#659238] group-hover:bg-black mt-6 group-hover:text-white cursor-pointer"> Contact</button>
      </div>
        <div className="relative hidden md:flex items-center justify-center gap-3"></div>
      </Link>

      <div className=" lg:hidden flex z-10 border border-amber-400 float-right">

      </div>
      {
        isMenuOpen && (
          <div className=" absolute top-0 w-full h-full z-50 bg-black">

            <button onClick={() => (setIsMenuOpen(!isMenuOpen))} type="button" className=" text-white p-5 pt-10 z-10 float-right ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
            <div className=" flex flex-col text-white text-2xl text-center mt-50 space-y-5">
              <button onClick={() => (setIsMenuOpen(!isMenuOpen))}><Link to="/#experience">Experience</Link></button>
              <button onClick={() => (setIsMenuOpen(!isMenuOpen))}> <Link to="/#skillset">Skillset</Link></button>
              <button onClick={() => setIsOpen((prev) => !prev)} className=" duration-200 cursor-pointer items-center justify-center w-full">
                Project
              </button>
              {isOpen && (
                <div className=" text-white text-xl text-center flex flex-col space-y-5  ">
                  <button onClick={() => (setIsMenuOpen(!isMenuOpen))} className="block px-4 py-2 hover:text-white">
                    <Link onClick={() => setIsOpen((prev) => !prev)} to="/valentino">VLTN - Checkout</Link></button>
                  <button onClick={() => (setIsMenuOpen(!isMenuOpen))} className=" text-white">
                    <Link onClick={() => setIsOpen((prev) => !prev)} to="/page">Cortilia - PDP</Link></button>
                  <button onClick={() => (setIsMenuOpen(!isMenuOpen))} className="block px-4 py-2 text-white">
                    <Link onClick={() => setIsOpen((prev) => !prev)} to="/cortilia">Cortilia - New app</Link></button>
                  <button onClick={() => (setIsMenuOpen(!isMenuOpen))} className="block px-4 py-2 text-white">
                    <Link onClick={() => setIsOpen((prev) => !prev)} to="/makai">Macai - ETA</Link></button>
                </div>

              )}
              <button onClick={() => (setIsMenuOpen(!isMenuOpen))}><Link to="/#contact">Contact</Link></button>
            </div>

          </div>
        )
      }



    </div>

  )
}

export default Navbar
