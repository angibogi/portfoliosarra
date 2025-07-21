import React, {useRef} from 'react';
import emailjs from "@emailjs/browser";


const contact = () => {
    const form = useRef();
const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_z6vcv9k', 'template_n1qzfhq', form.current, {
        publicKey: 'OjOAopR2pwrEw3n97',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div id="contact" className="w-full md:my-10 my-20 h-[731px] pt-20 lg:px-[150px] px-[30px] grid lg:grid-cols-2 grid-cols-1 gap-0  lg:gap-4">
      <div>
        <h1 className="text-white font-semibold md:text-[55px] text-[28px]">Let’s talk business</h1>
        <p className="text-white" >Now that you know a lot about me, <br /> let me know if you are interested to work with me.</p>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2">
            Nome
          </label>
          <input className="bg-white-100 py-2 px-4 w-full" name="name" />
        </div>
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2">
            E-mail
          </label>
          <input className="bg-white-100 py-2 px-4 w-full" name="email" />
        </div>
        <div className="mb-10">
          <label className="block text-white text-sm font-bold mb-2">
           Message
          </label>
          <textarea  className="bg-white-100 py-2 px-4 w-full resize-none h-50" name="message" />
        </div>
        <div >
          <input className=" bg-[#659238] text-white font-bold py-2 px-4 w-full" type="submit" value=" LET'S GET STARTED"/>
      
        </div>
      </form>
    </div>
  )
}

export default contact