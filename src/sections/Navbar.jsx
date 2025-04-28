import React, { useState } from 'react'
import Logo from "../../assets/logo.svg"
import { Link } from "react-router-dom"
import Negativo from "../../assets/logo_negativo.svg"
import 'boxicons'

const Navbar = () => {

const [isMenuOpen, setIsMenuOpen] = useState (false)

  return (
    <div>
      <div className="flex justify-between items-center py-4 lg:px-[150px]">
      <div className="hidden lg:block">
        <Link to="/"><img src={Logo} alt="Sarra" /></Link>
        </div>
        <div className="lg:hidden block px-10 z-10">
        <Link to="/"><img src={Negativo} alt="Sarra" /></Link>
        </div>

        <div className="xl:flex hidden items-center space-x-5 z-10 ">
          <ul className="flex items-center space-x-8">
            <Link to="/#experience">
                Experience</Link>
            <Link to="/#skillset">Skillset</Link>
            <Link to="/#project">Projects</Link>
          </ul>
        </div>
      </div>
      <Link to="/#contact">  <div className=" group hidden lg:block bg-[#659238] hover:bg-black z-10  absolute top-0 right-10">
     <button className="px-5 py-2 bg-[#659238] group-hover:bg-black mt-6 group-hover:text-white cursor-pointer"> Contact</button> 
      </div>
      <div className="relative hidden md:flex items-center justify-center gap-3"></div>
       </Link>
    
    <i className="bx bx-menu xl:hidden block text-5xl cursor pointer z-10" onClick={() => setIsMenuOpen (!isMenuOpen)}></i>
<div className={'absolute xl:hidden top-24 left-0 w-full bg-black flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"} '}
style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}
>

  
</div>
    </div>
  )
}

export default Navbar
