import React, {useEffect, useState, useRef} from 'react'
import { Link } from "react-router-dom"

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() =>{
        const handleClickOutside = (e) => {
          if (!dropdownRef.current?.contains(e.target))  {
            setIsOpen(false);
          }
        };

        if (isOpen){
            document.addEventListener("mousedown", handleClickOutside)
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);
  return (
    <div ref={dropdownRef} className="max-w-[400px] mx-auto py-4">
        <button 
        onClick={() => setIsOpen((prev) => !prev)}
        className=" duration-200 cursor-pointer w-full flex">
              Project
               </button>
          
            { isOpen && (
                <div className="mt-2 bg-white py-2 z-50 rounded-lg absolute">
      <button className="block px-4 py-2 ">
        <Link to="/makai">VLTN - Checkout</Link></button>
      <button className="block px-4 py-2 ">
        <Link to="/cortilia">Cortilia - New app</Link></button>
      <button className="block px-4 py-2 ">
        <Link to="/valentino">Cortilia - PDP</Link></button>
        <button className="block px-4 py-2">
        <Link to="/page">Macai - ETA</Link></button>
      </div>

            )}
     
    </div>
  )
}

export default Dropdown