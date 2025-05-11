import Hero from "../sections/Hero";
import Phone from "../../assets/hero_makai.png"
import Mockup00 from "../../assets/makai_mockup_00.png"
import Mockup01 from "../../assets/makai_mockup_01.png"


export function Makai() {
  return (
    <>
      <Hero
        imgUrl={Phone}
        imgAlt="foto profilo">
        <div className="md:space-y-10 space-y-4 ">
          <h1 className="text-2xl md:text-6xl font-bold">Macai - ETA </h1>
          <h1 className="text-2xl md:text-6xl font-bold">traking</h1>
          <p>
            I redesigned the ETA tracking feature in the Makai app to improve clarity and usability.
            By simplifying the layout, refining the information hierarchy,
            and improving visual cues, I made the user experience more intuitive and easier to follow in real time.
          </p>
        </div>
      </Hero>
      <div className="lg:px-[50px] px-[30px]">
        <div className="bg-[#DFE1E6] " >
          <div className="md:space-y-30 space-y-10 md:px-0 px-5">
            <div className="flex md:items-center space-x-4 pt-10 items-start">
              <div className="w-[100px] h-[2px] bg-black md:block hidden "></div>
              <h2 className="font-[Roboto] font-light md:text-[70px] text-[20px]">01.</h2>
              <div>
                <h3 className="font-[Epilogue] text-[36px]">Goal</h3>
                <p className="font-[Epilogue]"> Aggiornamento dell'interfaccia di tracciamento della <br /> sezione account dell'<strong>app Macai</strong> attraverso l'inclusione <br /> della  possibilità di notifica in caso di ritardo nella <br /> delivery.</p>
              </div>
            </div>

            <div className="flex md:items-center space-x-4 pt-10 items-start">
              <div className="w-[100px] h-[2px] bg-black md:block hidden "></div>
              <h2 className="font-[Roboto] font-light md:text-[70px] text-[20px]">02.</h2>
              <div>
                <h3 className="font-[Epilogue] text-[36px]">Ui</h3>
                <p className="font-[Epilogue]"> Realizzazione di un'interfaccia chiara tenendo in <br /> considerazione tutte le possibili casistiche.</p>
              </div>
            </div>

            <div className="flex md:items-center space-x-4 pt-10 items-start">
              <div className="w-[100px] h-[2px] bg-black md:block hidden "></div>
              <h2 className="font-[Roboto] font-light md:text-[70px] text-[20px]">03.</h2>
              <div>
                <h3 className="font-[Epilogue] text-[36px]">User flow</h3>
                <p className="font-[Epilogue]"> Per offrire una user experience sempre migliore ho <br /> realizzato un’user flow indagando l’interazione che <br /> l’utente potrebbe avere con questa specifica feature. <br />
                  In questo schema viene rappresentata ogni singola <br /> azione compiuta dall’utente, dal momento in cui <br /> completa l’acquisto alla consegna della spesa.</p>
              </div>
            </div>
            <img className="lg:px-[130px] px-[0] pt-10" src={Mockup00} alt="makai" />
            <img className="lg:px-[130px] px-[0]  pb-10" src={Mockup01} alt="makai" />
            <div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}