import React from 'react'
import Logo from "../../assets/logo.svg"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center py-4 lg:px-[150px]">
        <div>
          <img src={Logo} alt="Sarra" />
        </div>
        <div className="flex items-center space-x-5 z-10 ">
          <ul className="flex items-center space-x-8">
            <Link to="/">Experience</Link>
            <Link to="/makai">Skillset</Link>
            <Link to="/valentino">Projects</Link>
            <Link to="/cortilia">Projects</Link>
            <Link to="/page">Projects</Link>
          </ul>
        </div>
        <button className=" md:hidden block  px-5 py-2 bg-[#659238] "> Contact</button>
      </div>
      <div className=" hidden md:block bg-[#659238] z-10  absolute top-0 right-25">
        <button className="px-5 py-2 bg-[#659238] mt-6"> Contact</button>
      </div>
    </div>
  )
}

export default Navbar
