import React from 'react'

const hero = ({ imgUrl, imgAlt, children }) => {
  return (
    <div>
      <div className=" lg:w-4/6 w-full lg:h-[900px] h-[1100px] absolute top-0 right-0 bg-white-100"></div>
      <div className="lg:pt-20 pt-5 flex flex-col md:flex-row lg:justify-between lg:px-[150px] px-[30px] lg:h-[900px] h-[1100px]">
        <div className="z-10">
          <img  src={imgUrl} alt={imgAlt} />
        </div>
        <div className="md:w-1/2 p-5 flex flex-col justify between z-10">
          {children}
        </div>

      </div>
    </div>
  )
}

export default hero