import React from 'react'

const contact = () => {
  return (
    <div id="contact" className="w-full md:my-10 mt-20 h-[731px] pt-20 lg:px-[150px] px-[30px] grid lg:grid-cols-2 grid-cols-1  gap-4">
      <div>
        <h1 className="text-white font-semibold md:text-[55px] text-[28px]">Let’s talk business</h1>
        <p className="text-white" >Now that you know a lot about me, <br /> let me know if you are interested to work with me.</p>
      </div>
      <form>
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2">
            Nome
          </label>
          <input className="bg-white-100 py-2 px-4 w-full" name="myInput" />
          <p className=" text-xs italic">Please choose a password.</p>
        </div>
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2">
            E-mail
          </label>
          <input className="bg-white-100 py-2 px-4 w-full" name="myInput" />
          <p className=" text-xs italic">Please choose a password.</p>
        </div>
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2">
            E-mail
          </label>
          <input className="bg-white-100 py-2 px-4 w-full" name="myInput" />
          <p className=" text-xs italic">Please choose a password.</p>
        </div>
        <div >
          <button className=" bg-[#659238] text-white font-bold py-2 px-4 w-full" type="button">
            LET’S GET STARTED
          </button>
        </div>
      </form>
    </div>
  )
}

export default contact