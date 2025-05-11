import React from 'react'

const ValentinoText = ({titleLeft, textLeft, numberLeft, titleRight, numberRight ,textRight}) => {
  return (
    <div className="lg:px-[150px] px-[30px] md:h-[760px] h-[600px] bg-[#323232]  content-center">
    <div className="lg:px-20 px-5 space-y-10 " >
      <div>
        <p className=" text-white md:text-[16px] text-[12px] mb-2 font-[Actor]">{titleLeft} <span className="text-[#F52020] text-[18px]">{numberLeft}</span></p>
        <h3 className="text-white font-base lg:text-[40px] text-[20px] font-[Actor] "> {textLeft}</h3>
      </div>
      <div>
        <p className=" text-white md:text-[16px] text-[12px] mb-2 text-end font-[Actor]">{titleRight} <span className="text-[#F52020] text-[18px]">{numberRight}</span></p>
        <h3 className="text-white font-base lg:text-[40px] text-end  text-[20px] font-[Actor]"> {textRight}</h3>
      </div>
    </div>
  </div>
  )
}

export default ValentinoText