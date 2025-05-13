import Hero from "../sections/Hero";
import ValentinoText from "../components/ValentinoText";
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
        <h1 className="text-2xl xl:text-6xl font-bold leading-10 xl:leading-20"> Valentino Website Checkout Redesign</h1>
          <p>
            I redesigned the website checkout flow to improve usability and align with Valentino's luxury brand identity.
            Through UX research, I simplified the user journey, reduced friction points, and enhanced clarity.
            On the UI side, I refined the visual hierarchy, optimized input fields, and created a clean, elegant interface for a smoother, more premium checkout experience.
          </p>
        </div>
      </Hero>

      <img className="w-full" src={Section} alt="valentino" />

      <ValentinoText
        titleLeft="HEURISTIC REVIEW & USER BEHAVIOR ANALYSIS"
        numberLeft="01"
        textLeft="I started by analyzing the existing flow to identify friction points through heuristic evaluation and user behavior data. "
        titleRight="MAPPING OF HAPPY PATHS"
        numberRight="02"
        textRight="I mapped out all ideal user flows, identifying the
       most common behaviors and optimizing the
       structure accordingly for a smoother experience.">
      </ValentinoText>

      <img className="w-full" src={Mobile} alt="valentino" />

      <ValentinoText
        titleLeft="REDESIGN WITH EDGE & MASTER CASES"
        numberLeft="03"
        textLeft="All flows were redesigned taking into account edge cases and master cases to ensure a robust,complete experience across all user scenarios. ">
      </ValentinoText>

      <div className="bg-[#323232] grid lg:grid-cols-4 grid-cols-1 px-20 lg:p-0 gap-5">
        <div className="lg:col-start-1 ">
          <img className="lg:pt-20 pt-0" src={Design00} alt="redesign" />
        </div>
        <div className="lg:col-start-2 col-start-1">
          <img src={Design01} alt="redesign" />
        </div>
        <div className="lg:col-start-3 col-start-1">
          <img className="lg:pt-20 pt-0" src={Design04} alt="redesign" />
        </div>
        <div className="lg:col-start-4 col-start-1">
          <img src={Design05} alt="redesign" />
        </div>
        <div className="lg:col-start-2 col-start-1">
          <img src={Design03} alt="redesign" />
        </div>
        <div className="lg:col-start-4 col-start-1">
          <img src={Design06} alt="redesign" />
        </div>
      </div>


      <ValentinoText
        titleLeft="WIREFRAMING & USER FLOW OPTIMIZATION"
        numberLeft="04"
        textLeft="I restructured the checkout process and created low-fidelity wireframes to test and validate the new architecture early on. "
        titleRight="MOCKUPS FOR MOBILE AND DESKTOP"
        numberRight="05"
        textRight="I designed high-fidelity mockups for both mobile and desktop using a mobile-first approach to ensure responsiveness and development efficiency.">
      </ValentinoText>



      <div className="bg-[#03140F] grid lg:grid-cols-4 grid-cols-1 items-center gap-4  pt-10 lg:px-[150px] px-[30px] py-10">
        <div class="col-start-1">
          <img src={Mobile00} alt="Mockups" />
        </div>
        <div class="lg:col-start-4 col-start-1">
          <img src={Mobile01} alt="Mockups" />
        </div>
      </div>

      <ValentinoText
        titleLeft="INTERACTIVE PROTOTYPING & TESTING"
        numberLeft="06"
        textLeft="I built an interactive prototype and conducted usability testing to collect feedback and iterate on key elements. "
        titleRight="UI REDESIGN IMPLEMENTATION"
        numberRight="07"
        textRight="After finalizing the redesign, the new checkout UI was implemented across all devices, improving both aesthetics and usability. ">
      </ValentinoText>

      <img className="w-full" src={Notebook} alt="valentino" />
    </>
  )
}