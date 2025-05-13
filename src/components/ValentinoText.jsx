import React from 'react'

const ValentinoText = ({titleLeft, textLeft, numberLeft, titleRight, numberRight ,textRight}) => {
  return (
    <div className="lg:px-[150px] px-[30px] md:h-[760px] h-[600px] bg-[#323232]  content-center">
    <div className="lg:px-20 px-5 space-y-10 " >
      <div>
        <h3 className=" text-white text-[clamp(14px,3vw,16px)] mb-2 font-[Actor]">{titleLeft} <span className="text-[#F52020] text-[18px]">{numberLeft}</span></h3>
        <p className="text-white font-base text-[clamp(1rem,4vw,2.5rem)] font-[Actor] "> {textLeft}</p>
      </div>
      <div>
        <h3 className=" text-white  text-[clamp(14px,4vw,16px)] mb-2 text-end font-[Actor]">{titleRight} <span className="text-[#F52020] text-[18px]">{numberRight}</span></h3>
        <p className="text-white font-base text-end font-[Actor] text-[clamp(1rem,4vw,2.5rem)]"> {textRight}</p>
      </div>
    </div>
  </div>
  )
}

export default ValentinoText