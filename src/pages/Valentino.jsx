import Hero from "../sections/Hero";
import Phone from "../../assets/hero_valentino.png"
import Section from "../../assets/section.png"
import Mobile from "../../assets/valentino_mobile.png"
import Notebook from "../../assets/valentino_notebook.png"
import Mobile00 from "../../assets/mobile_valentino_00.png"
import Mobile01 from "../../assets/mobile_valentino_01.png"
import Design00 from "../../assets/design_00.png"
import Design01 from "../../assets/design_02.png"
import Design03 from "../../assets/design_03.png"
import Design04 from "../../assets/design_04.png"
import Design05 from "../../assets/design_05.png"
import Design06 from "../../assets/design_06.png"


export function Valentino() {
  return (
    <>
      <Hero
        imgUrl={Phone}
        imgAlt="foto profilo">
        <div className="md:space-y-10 space-y-4 ">
          <h1 className="text-2xl md:text-6xl font-bold"> Valentino – </h1>
          <h1 className="text-2xl md:text-6xl font-bold ">Website Checkout </h1>
          <h1 className="text-2xl md:text-6xl font-bold">Redesign </h1>
          <p>
            I redesigned the website checkout flow to improve usability and align with Valentino’s luxury brand identity.
            Through UX research, I simplified the user journey, reduced friction points, and enhanced clarity.
            On the UI side, I refined the visual hierarchy, optimized input fields, and created a clean, elegant interface for a smoother, more premium checkout experience.
          </p>
        </div>
      </Hero>
      <img className="w-full" src={Section} alt="valentino" />
      <div className="lg:px-[150px] px-[30px] md:h-[760px] h-[600px] bg-[#323232]  content-center">
        <div className="lg:px-20 px-5 space-y-10 " >
          <div>
            <p className="text-white md:text-[16px] text-[12px] font-[Actor] mb-2">HEURISTIC REVIEW & USER BEHAVIOR ANALYSIS <span className="text-[#F52020] text-[18px]">01</span></p>
            <h3 className="text-white font-base lg:text-[42px] text-[20px] ">I started by analyzing the existing flow to identify <br />  friction points through heuristic evaluation and user <br /> behavior data. </h3>
          </div>
          <div>
            <p className=" text-white md:text-[16px] text-[12px]font-[Actor] mb-2 text-end">MAPPING OF HAPPY PATHS <span className="text-[#F52020] text-[18px]">02</span></p>
            <h3 className="text-white font-base lg:text-[42px] text-[20px] text-end  "> I mapped out all ideal user flows, identifying the <br />  most common behaviors and optimizing the <br /> structure accordingly for a smoother experience. </h3>
          </div>
        </div>
      </div>
      <img className="w-full" src={Mobile} alt="valentino" />

      <div className="lg:px-[150px] px-[30px] md:h-[760px] h-[400px]  bg-[#323232]  content-center">
        <div className="lg:px-20 px-5space-y-10 " >
          <div>
            <p className=" text-white md:text-[16px] text-[12px] font-[Actor] mb-2">REDESIGN WITH EDGE & MASTER CASES <span className="text-[#F52020] text-[18px]">03</span></p>
            <h3 className="text-white font-base lg:text-[42px] text-[20px] font-[Actor] "> All flows were redesigned taking into account edge <br /> cases and master cases to ensure a robust,<br />complete experience across all user scenarios.</h3>
          </div>
        </div>
      </div>

      <div className="bg-[#323232] grid lg:grid-cols-4 grid-cols-1 gap-4 px-20 lg:p-0">
        <div className="lg:col-start-1 ">
          <img className="lg:pt-20 pt-0" src={Design00} alt="" />
        </div>
        <div className="lg:col-start-2 col-start-1">
          <img src={Design01} alt="" />
        </div>
        <div className="lg:col-start-3 col-start-1">
          <img className="lg:pt-20 pt-0" src={Design04} alt="" />
        </div>
        <div className="lg:col-start-4 col-start-1">
          <img src={Design05} alt="" />
        </div>
        <div className="lg:col-start-2 col-start-1">
          <img src={Design03} alt="" />
        </div>
        <div className="lg:col-start-4 col-start-1">
          <img src={Design06} alt="" />
        </div>
      </div>


      <div className="lg:px-[150px] px-[30px] md:h-[760px] h-[600px] bg-[#323232]  content-center">
        <div className="lg:px-20 px-5 space-y-10 " >
          <div>
            <p className=" text-white md:text-[16px] text-[12px] mb-2 font-[Actor]">WIREFRAMING & USER FLOW OPTIMIZATION <span className="text-[#F52020] text-[18px]">04</span></p>
            <h3 className="text-white font-base lg:text-[42px] text-[20px] font-[Actor] "> I restructured the checkout process and created<br /> low-fidelity wireframes to test and validate the new <br />architecture early on.</h3>
          </div>
          <div>
            <p className=" text-white md:text-[16px] text-[12px] mb-2 text-end font-[Actor]">MOCKUPS FOR MOBILE AND DESKTOP <span className="text-[#F52020] text-[18px]">05</span></p>
            <h3 className="text-white font-base lg:text-[42px] text-end  text-[20px] font-[Actor]"> I designed high-fidelity mockups for both mobile<br /> and desktop using a mobile-first approach to<br /> ensure responsiveness and development efficiency. </h3>
          </div>
        </div>
      </div>

      <div className="bg-[#03140F] grid lg:grid-cols-4 grid-cols-1 items-center gap-4  pt-10 lg:px-[150px] px-[30px] py-10">
        <div class="col-start-1">
          <img src={Mobile00} alt="" />
        </div>
        <div class="lg:col-start-4 col-start-1">
          <img src={Mobile01} alt="" />
        </div>
      </div>

      <div className="lg:px-[150px] px-[30px] md:h-[760px] h-[600px] bg-[#323232]  content-center">
        <div className="lg:px-20 px-5 space-y-10 " >
          <div>
            <p className=" text-white md:text-[16px] text-[12px] mb-2 font-[Actor]">INTERACTIVE PROTOTYPING & TESTING <span className="text-[#F52020] text-[18px]">06</span></p>
            <h3 className="text-white font-base lg:text-[42px] text-[20px] font-[Actor] "> I built an interactive prototype and conducted <br /> usability testing to collect feedback and iterate on<br />key elements.</h3>
          </div>
          <div>
            <p className=" text-white md:text-[16px] text-[12px] mb-2 text-end">UI REDESIGN IMPLEMENTATION <span className="text-[#F52020] text-[18px]">07</span></p>
            <h3 className="text-white font-base lg:text-[42px] text-[20px] text-end  font-[Actor] "> After finalizing the redesign, the new checkout UI <br /> was implemented across all devices, improving both <br /> aesthetics and usability. </h3>
          </div>
        </div>
      </div>
      <img className="w-full" src={Notebook} alt="valentino" />
    </>
  )
}