import React from 'react'

const hero = ({ imgUrl, imgAlt, children }) => {
  return (
    <div>
      <div className=" lg:w-4/6 w-full h-[900px] absolute top-0 right-0 bg-white-100"></div>
      <div className="pt-20 flex flex-col md:flex-row justify-between lg:px-[150px] px-[30px] h-[900px]">
        <div className="z-10">
          <img src={imgUrl} alt={imgAlt} />
        </div>
        <div className="md:w-1/2 p-5 flex flex-col justify between z-10">
          {children}
        </div>

      </div>
    </div>
  )
}

export default hero