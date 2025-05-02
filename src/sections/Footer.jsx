import React from 'react'
import Logo from "../../assets/logo_negativo.svg"
import { Link } from "react-router-dom"
import CV from "../../assets/CvSarraSlimane.pdf"

const Footer = () => {
  return (
    <div className="bg-white-100">
      <div className="container grid lg:grid-cols-2 grid-cols-1 lg:px-[150px] px-[30px] justify-end py-10 ">
      <div className="z-10 md:w-100 w-25 ">
        <Link to="/"> <img src={Logo} alt="Sarra" /> </Link>
        </div>
        <div>
          <ul className="space-y-4 md:mt-0 mt-10 md:text-end text-start">
            <li><Link to="/#experience">Experience</Link></li>
            <li><Link to="/#skillset">Skillset</Link></li>
            <li><Link to="/#contact">Contact</Link></li>
            <li><a href={CV} target="_blank">Curriculum Vitae</a></li>
          </ul>
        </div>
        <p className="mt-20">Not Copyright 2025 • Sarra Slimane</p>
      </div>
    </div>
  )
}

export default Footer
