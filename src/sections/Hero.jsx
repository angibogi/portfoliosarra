import React from 'react'
import { motion } from "motion/react"

const transition = {
  duration: 0.8,
  delay: 0.5,
  ease: [0, 0.71, 0.2, 1.01],
}

const hero = ({ imgUrl, imgAlt, children }) => {
  return (
    <div>
      <div className=" lg:w-4/6 w-full h-[1000px] lg:h-[900px]  absolute top-0 right-0 bg-white-100"></div>
      <div className="lg:pt-20 pt-5 flex flex-col lg:flex-row lg:justify-between lg:px-[150px] px-[30px] h-[1000px] lg:h-[900px] ">
        <div className="z-10">
          <motion.img initial={{ y: 300, opacity:0 }}  animate={{ y: 0, opacity:100 }} transition={transition}  src={imgUrl} alt={imgAlt} />
        </div>
        <div className="md:w-1/2 p-5 flex flex-col justify between z-5">
          {children}
        </div>

      </div>
    </div>
  )
}

export default hero