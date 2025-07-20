import React from 'react'
import Icona0 from "../../assets/skillset_00.svg"
import Icona1 from "../../assets/skillset_01.svg"
import Icona2 from "../../assets/skillset_02.svg"
import Icona3 from "../../assets/skillset_03.svg"
import { motion } from "motion/react"



  const animate ={
    scale: 1, 
    opacity:100,
}

const initial ={
    scale: 0.5,
    opacity:0
}

const Skillset = () => {
    return (
        <div id="skillset" className="w-full lg:px-[150px] px-[30px] pt-20 h-full flex lg:flex-row flex-col justify-between items-start gap-[100px] my-20">
            <div className="lg:w-[40%] w-full flex flex-col justify-center items-start gap-6">
                <h3 className="text-[38px] font-bold  text-white mb-2">Skillset</h3>
                <p className="text-[#8491A0] text-[18px]">With skills in over 4 different fields of design,
                    I am the perfect person to hire when it comes to a full fledged project.
                    Whatever your needs are, I can pretty much take on any challenge.
                </p>
            </div>

            <div className="lg:w-[80%] w-full grid lg:grid-cols-2 grid-cols-1 justify-center items-start lg:gap-20 gap-12">
                <motion.div initial={initial}  whileInView={animate} viewport={{once: true,}}   transition={{duration: 1, delay: 0.3, ease: [0, 0.71, 0.2, 1.01]}}  className="flex flex-col justify-center items-start gap-6">
                    <div>
                        <img className="size-9 mb-2 " src={Icona0} alt="Sarra" />
                        <div className="flex flex-col justify-center items-start gap-3">
                            <h1 className="text-white font-semibold text-[22px]">User-Centered Design</h1>
                            <p className="text-[#8491A0] text-[16px] ">
                                Skilled in creating intuitive interfaces by deeply understanding user needs, behaviors, and pain points to ensure meaningful and engaging experiences.
                            </p>
                        </div>
                    </div>


                </motion.div>
                <motion.div initial={initial}  whileInView={animate} viewport={{once: true,}}   transition={{duration: 1, delay: 0.5, ease: [0, 0.71, 0.2, 1.01]}} className="flex flex-col justify-center items-start gap-6">
                    <div>
                        <img className="size-9 mb-2" src={Icona1} alt="Sarra" />
                        <div className="flex flex-col justify-center items-start gap-3">
                            <h1 className="text-white font-semibold text-[22px]">Wireframing & Prototyping</h1>
                            <p className="text-[#8491A0] text-[16px]"> Experienced in translating ideas into clear wireframes and interactive prototypes using tools like Figma and Sketch to validate design concepts early in the process.</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={initial}  whileInView={animate} viewport={{once: true,}}   transition={{duration: 1, delay: 0.7, ease: [0, 0.71, 0.2, 1.01]}} className="flex flex-col justify-center items-start gap-6">
                    <div>
                        <img className="size-9 mb-2" src={Icona2} alt="Sarra" />
                        <div className="flex flex-col justify-center items-start gap-3">
                            <h1 className="text-white font-semibold text-[22px]">Visual Design & UI Systems</h1>
                            <p className="text-[#8491A0] text-[16px]">Strong eye for visual composition and consistency,
                                with the ability to develop and maintain scalable design systems that align with brand identity and enhance usability.</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={initial}  whileInView={animate} viewport={{once: true,}}  transition={{duration: 1, delay: 0.9, ease: [0, 0.71, 0.2, 1.01]}} className="flex flex-col justify-center items-start gap-6">
                    <div>
                        <img className="size-9 mb-2" src={Icona3} alt="Sarra" />
                        <div className="flex flex-col justify-center items-start gap-3">
                            <h1 className="text-white font-semibold text-[22px]">Collaboration Communication</h1>
                            <p className="text-[#8491A0] text-[16px]">Effective communicator with experience working closely with product managers,
                                developers, and content teams to ensure a smooth and agile design process.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Skillset