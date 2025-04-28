import React from 'react'

const experience = () => {
  return (
    <div id="experience" className="w-full lg:pt-20 pt-5 lg:px-[150px] px-[30px] ">
<div>
    <p className="text-[#8491A0] text-[16px]">WORK EXPERIENCE</p>
    <h1 className="text-white font-semibold lg:text-[55px] text-[26px] ">Companies I have worked <br /> for ...</h1>
</div>

    <div className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-start lg:gap-20 gap-12">
    <div className="flex flex-col justify-center items-start gap-6">
        <div>
        <div className="flex flex-col justify-center items-start gap-3">
            <p className="text-[#8491A0] lg:text-[117px] text-[50px]">01</p>
            <h3 className="text-white font-semibold text-[22px]">Valentino, UI UX Designer Specialist</h3>
            <p className="text-white text-[16px]">
            I currently am the Ui UX designer on the service design team for Valentino S.p.a.
            </p>
        </div>
        </div>
       

    </div>
    <div className="flex flex-col justify-center items-start gap-6">
        <div>
        <div className="flex flex-col justify-center items-start gap-3">
        <p className="text-[#8491A0] lg:text-[117px] text-[50px]">02</p>
            <h3 className="text-white font-semibold text-[22px]"> <span  className="text-[#5D6753]">Cortilia</span >, Junior Product Designer</h3>
            <p className="text-white text-[16px]"> I worked as a Junior Product Designer at Cortilia, contributing to both the app and the website.</p>
        </div>
        </div>
    </div>
    <div className="flex flex-col justify-center items-start gap-6">
        <div>
        <div className="flex flex-col justify-center items-start gap-3">
        <p className="text-[#8491A0]  lg:text-[117px] text-[50px]">03</p>
            <h3 className="text-white font-semibold text-[22px]"><span  className="text-[#F7931E]">Makai</span >, Junior Ui Ux Designer</h3>
            <p className="text-white text-[16px]">I worked as a Junior Product Designer at Macai, a small startup where I embraced their modern and youthful design approach.</p>
        </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default experience
