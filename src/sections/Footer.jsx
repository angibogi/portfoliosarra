import React from 'react'
import Logo from "../../assets/logo_negativo.svg"

const Footer = () => {
  return (
    <div className="bg-white-100 h-[422px]">
      <div className="container lg:px-[150px] px-[30px] flex justify-between items-center py-10">
        <div>
          <img src={Logo} alt="Sarra" />
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
