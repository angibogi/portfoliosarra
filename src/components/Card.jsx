import React from 'react'

const Card = ({imgCard, altCard, title, text}) => {
  return (
       <div className=" relative">
        <div className=" overflow-hidden bg-white-100 xl:absolute relative">
            <img className="w-full" src={imgCard} alt={altCard} />
            <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-[#8491A0] text-base mb-8">
            {text}
            </p>
            </div>
        <div className="relative">
            <span className="bg-[#659238] px-5 py-3 text-xl  text-white absolute bottom-0 right-0 ">
            ↗
            </span>
        </div>
        </div>
        </div>
  )
}

export default Card