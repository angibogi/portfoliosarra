import React from 'react'
import Logo from "../../assets/logo_negativo.svg"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="bg-white-100">
      <div className="container lg:px-[150px] px-[30px] flex justify-between items-center py-10">
        <div>
        <Link to="/"> <img src={Logo} alt="Sarra" /> </Link>
       <p className="mt-20">Not Copyright 2025 • Sarra Slimane</p>
        </div>
        <div>
          <ul className="space-y-4">
            <li>Experience</li>
            <li>Skillset</li>
            <li>Projects</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
