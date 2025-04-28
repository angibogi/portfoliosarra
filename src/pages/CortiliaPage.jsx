import Hero from "../sections/Hero";
import Notebook from "../../assets/hero_cortilia_notebook.png"
import CortiliaMockup00 from "../../assets/cortilia_mobile_mockup_00.png"
import CortiliaMockup01 from "../../assets/cortilia_mobile_mockup_01.png"
import CortiliaMockup02 from "../../assets/cortilia_mobile_mockup_02.png"
import CortiliaMockup03 from "../../assets/cortilia_mobile_mockup_03.png"
import CortiliaMockup04 from "../../assets/cortilia_mobile_mockup_04.png"
import CortiliaMockup05 from "../../assets/cortilia_mobile_mockup_05.png"


export function CortiliaPage() {
  return (
    <>
      <Hero
        imgUrl={Notebook}
        imgAlt="foto profilo">
        <div className="md:space-y-10 space-y-4 ">
          <h1 className="text-2xl md:text-6xl font-bold">Cortilia - New  </h1>
          <h1 className="text-2xl md:text-6xl font-bold">Product Detail</h1>
          <h1 className="text-2xl md:text-6xl font-bold">Page</h1>
          <p>
            I redesigned the Product Detail Page (PDP) for both the Cortilia app and website to enhance usability and visual hierarchy.
            By refining the layout, improving call-to-action placement, and optimizing information architecture, I created a more seamless and engaging shopping experience.
            The new design ensures better readability, clearer navigation, and a more intuitive path to purchase.
          </p>
        </div>
      </Hero>



      <div className="lg:px-[130px] px-[30px]">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-[Krona One] font-light text-[16px] mb-5  text-white">01</h2>
            <div className="lg:h-[1200px] h-[500px] w-[2px] bg-white "></div>
          </div>
          <div className="p-20">
            <h3 className=" text-white font-base lg:text-[26px] text-[20px] font-[Krona One] leading-[190.5%]  "> MOBILE_FIRST STRATEGY</h3>
            <p className="text-white md:text-[14px] text-[12px] mb-2 font-[Krona One]">
              Approached the redesign starting from mobile, ensuring a seamless and optimized <br />
              experience on smaller screens before scaling up to desktop.</p>
            <img src={CortiliaMockup00} alt="cortilia" />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="p-20">
            <h3 className=" text-white font-base lg:text-[26px] text-[20px] font-[Krona One] leading-[190.5%]"> PRODUCT-CENTERED LAYOUT</h3>
            <p className="text-white md:text-[14px] text-[12px] mb-2 font-[Krona One]">
              Prioritized the product image and key information at the top of the page to immediately <br />
              capture user attention and support purchase intent.</p>
            <img src={CortiliaMockup01} alt="cortilia" />
          </div>
          <div>
            <h2 className="font-[Krona One] font-light text-[16px] mb-5  text-white">02</h2>
            <div className="lg:h-[1200px] h-[500px] w-[2px] bg-white "></div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-[Krona One] font-light text-[16px] mb-5  text-white">03</h2>
            <div className="lg:h-[1200px] h-[500px] w-[2px] bg-white "></div>
          </div>
          <div className="p-20">
            <h3 className=" text-white font-base lg:text-[26px] text-[20px] font-[Krona One] leading-[190.5%]"> STICKY ADD-TO_CART ON SCROLL:</h3>
            <p className="text-white md:text-[14px] text-[12px] mb-2 font-[Krona One]">
              Introduced a sticky “Add to Cart” button that remains visible while scrolling to increase <br />
              accessibility and reduce friction in the purchase flow.</p>
            <img src={CortiliaMockup02} alt="cortilia" />
          </div>
        </div>


        <div className="flex items-center justify-between">
          <div className="p-20">
            <h3 className=" text-white font-base lg:text-[26px] text-[20px] font-[Krona One] leading-[190.5%]"> FLEXIBLE MULTI-PLATFORM DESIGN:</h3>
            <p className="text-white md:text-[14px] text-[12px] mb-2 font-[Krona One]">
              Created a responsive layout adaptable across multiple touchpoints — app and website <br />
              — maintaining design consistency and usability.</p>
            <img src={CortiliaMockup03} alt="cortilia" />
          </div>

          <div>
            <h2 className="font-[Krona One] font-light text-[16px] mb-5  text-white">04</h2>
            <div className="lg:h-[1200px] h-[500px] w-[2px] bg-white "></div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-[Krona One] font-light text-[16px] mb-5  text-white">05</h2>
            <div className="lg:h-[1200px] h-[500px] w-[2px] bg-white "></div>
          </div>
          <div className="p-20">
            <h3 className=" text-white font-base lg:text-[26px] text-[20px] font-[Krona One] leading-[190.5%]"> STICKY ADD-TO_CART ON SCROLL:</h3>
            <p className="text-white md:text-[14px] text-[12px] mb-2 font-[Krona One]">
              Followed a full UX methodology: user research, wireframing, low- to high-fidelity <br />
              prototyping, and usability testing to ensure the new design met user needs and <br /> business goals.</p>
            <img src={CortiliaMockup04} alt="cortilia" />
          </div>
        </div>

        <img src={CortiliaMockup05} alt="cortilia" />

      </div>
    </>
  )
}