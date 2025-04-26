import Hero from "../sections/Hero";
import Phone from "../../assets/hero_cortilia.png"
import Benchmark from "../../assets/benchmark.png"
import highFidelity from "../../assets/high_fidelity.png"
import clock from "../../assets/clock.png"
import User00 from "../../assets/user_test_00.png"
import User01 from "../../assets/user_test_01.png"




export function Cortilia() {
  return (
    <>
      <Hero
        imgUrl={Phone}
        imgAlt="foto profilo">
        <div className="md:space-y-10 space-y-4 ">
          <h1 className="text-2xl md:text-6xl font-bold">Cortilia - New App </h1>
          <p>
            I led the end-to-end redesign of the Cortilia app, following a complete UX process.
            This included user research, competitive analysis, and usability testing to identify pain points and opportunities.
            I then created low-fidelity wireframes, high-fidelity mockups, and an interactive prototype to validate the new design direction.
            The result was a more intuitive and engaging experience aligned with user needs and brand identity.
          </p>
        </div>
      </Hero>

      <div className=" pt-20 lg:px-[150px] px-[30px]">
    <p className="text-[#E6FFF7] font-bold text-[22px] font-[Poppins]">Our Process</p>
    <h1 className="text-white font-semibold lg:text-[40px] text-[26px] font-[Poppins] ">Per il redesign dell’app <br /> abbiamo seguito degli <br /> step predefiniti</h1>
    
    
    <div className="pt-20 lg:px-[50px] px-[30px]  grid lg:grid-cols-4 grid-cols-1 justify-center items-start lg:gap-20 gap-12">
    <div className="flex flex-col justify-center items-start gap-6">
        <div>
        <div className="flex flex-col justify-center items-start gap-3">
            <h3 className="text-white font-semibold text-[22px] font-[Poppins]"> <span className="text-[#E6FFF7] font-bold text-[30px] font-[Poppins]">01</span> User Research</h3>
            <p className="text-white text-[16px]">
            La ricerca utente ci ha permesso di comprendere le necessità del nostro target di riferimento.
            </p>
        </div>
        </div>
       

    </div>
    <div className="flex flex-col justify-center items-start gap-6">
        <div>
        <div className="flex flex-col justify-center items-start gap-3">
            <h3 className="text-white font-semibold text-[22px] font-[Poppins]"> <span className="text-[#E6FFF7] font-bold text-[30px] font-[Poppins]">02</span> Design</h3>
            <p className="text-white text-[16px]">
            Ho realizzato in un primo momento i low fidelity per concentrarmi appieno sulle funzionalità dell’interfaccia.
            </p>
        </div>
        </div>
    </div>
    <div className="flex flex-col justify-center items-start gap-6">
        <div>
        <div className="flex flex-col justify-center items-start gap-3">
            <h3 className="text-white font-semibold text-[22px] font-[Poppins]"> <span className="text-[#E6FFF7] font-bold text-[30px] font-[Poppins]">03</span> Test</h3>
            <p className="text-white text-[16px]">
            Ho svolto i test utente moderati per comprendere se il design rispecchiasse le criticità del new design.
            </p>
        </div>
        </div>
    </div>
    <div className="flex flex-col justify-center items-start gap-6">
        <div>
        <div className="flex flex-col justify-center items-start gap-3">
            <h3 className="text-white font-semibold text-[22px] font-[Poppins]"> <span className="text-[#E6FFF7] font-bold text-[30px] font-[Poppins]">04</span> Implementation</h3>
            <p className="text-white text-[16px]">
            Implementazione e redesign dell’app in base ai risultati dei test svolti.
            </p>
        </div>
        </div>
    </div>


    </div>

    <div className="pt-20">
            <h3 className="text-white font-semibold text-[34px] font-[Poppins]"> <span className="text-[#E6FFF7] font-bold text-[22px] font-[Poppins]">01</span> User Research</h3>
            <ul  className="text-white list-decimal px-10">
              <li>Benchmark</li>
              <li>Cortilia - as is </li>
            </ul>
            <div className="py-20">
            <img src={Benchmark} alt="benchmark" />
          </div>  
    </div>

    <div className="pt-20">
            <h3 className="text-white font-semibold text-[34px] font-[Poppins]"> <span className="text-[#E6FFF7] font-bold text-[22px] font-[Poppins]">02</span> Design</h3>
            <ul  className="text-white list-decimal px-10">
              <li>Low fidelity</li>
              <li>High fidelity </li>
            </ul>
            <div className="pt-20">
            <img src={highFidelity} alt="benchmark" />
          </div>  
    </div>

    <div>
            <h3 className="text-white font-semibold text-[34px] font-[Poppins]"> <span className="text-[#E6FFF7] font-bold text-[22px] font-[Poppins]">03</span> User test</h3> 
    </div>

    <button className="flex px-5 py-4 my-20 text-white bg-[#006747] border-2 border-white font-[Poppins]"> <img className="mr-2" src={clock} alt="" />7 days</button>

<div className=" w-full grid lg:grid-cols-2 grid-cols-1 justify-center items-start lg:gap-20 gap-12">
                <div className="flex flex-col justify-center items-start gap-6">
                    <div>
                        <div className="flex flex-col justify-center items-start gap-3">
                            <h1 className="text-white font-extrabold text-[22px] font-[Poppins]">Tipologia:</h1>
                            <ul className="text-[#E6FFF7] text-[16px] font-[Poppins] list-disc ">
                              <li> Test utente moderato.</li>
                              <li> N facilitatori a sessione → 2 (uno esegue il test l’altro segna tutto)</li>
                              <li> Registrazione sessione per raccolta dei dati</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-start gap-6">
                    <div>
                        <div className="flex flex-col justify-center items-start gap-3">
                            <h1 className="text-white font-extrabold text-[22px] font-[Poppins]">Task 1:</h1>
                            <p className="text-[#E6FFF7] text-[16px] font-[Poppins]" >Tipologia 1: 11 partecipanti</p>
                            <ul className="text-[#E6FFF7] text-[16px] font-[Poppins] list-disc ">
                              <li> 7 task da svolgere </li>
                              <li> Esplora - mock “telecomando”</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-start gap-6">
                    <div>
                        <div className="flex flex-col justify-center items-start gap-3">
                            <h1 className="text-white font-extrabold text-[22px] font-[Poppins]">Tool:</h1>
                            <p className="text-[#E6FFF7] text-[16px] font-[Poppins]">
                            Maze: Data e ora del test / Mappa del calore / Svolgimento attività secondo indicazioni o flusso random / Abbandono test / Durata sessione / Miss click: errore comprensione task
                            </p>
                        </div>
                    </div>
                </div>
             <div className="flex flex-col justify-center items-start gap-6">
                    <div>
                        <div className="flex flex-col justify-center items-start gap-3">
                            <h1 className="text-white font-extrabold text-[22px] font-[Poppins]">Task 2:</h1>
                            <p className="text-[#E6FFF7] text-[16px] font-[Poppins]" >Tipologia 2: 10 partecipanti</p>
                            <ul className="text-[#E6FFF7] text-[16px] font-[Poppins] list-disc ">
                              <li> 7 task da svolgere </li>
                              <li> Esplora - mock “elenco”</li>
                              <li>Coachmark per elemento calendar e navbar (mostrati nel task 1 e nel task 3)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <h3 className="text-[#E6FFF7] font-semibold text-[22px] font-[Poppins] mt-20"> User test: Risultati</h3>
            <div className=" grid lg:grid-cols-2 gap-12">
            <div className="bg-white border rounded p-10 h-[216px] mt-5 ">
              <h4 className="font-extrabold">Coachmark:</h4>
              <p>In generale i coachmark hanno aiutato l’utente a comprendere le modifiche e orientarsi all’interno dell’app riducendo i missclick.</p>
            </div>
            <img src={User00} alt="" />
            </div>

            <h3 className="text-[#E6FFF7] font-semibold text-[22px] font-[Poppins] mt-20 text-end "> User test: Risultati</h3>
            <div className=" grid lg:grid-cols-2 gap-12">
            <img src={User01} alt="" />
            <div className="bg-white border rounded p-10 h-[269px] mt-5 ">
              <h4 className="font-extrabold">Esplora:</h4>
              <p>l’a/b test sulle 2 versioni di Esplora vede vincitrice la versione “telecomando” che ha riscontrato maggior successo rispetto alla versione in “lista”: gli utenti hanno individuato con maggior facilità e velocità la categoria richiesta nel task.</p>
            </div>
            </div>

            <h3 className="text-[#E6FFF7] font-semibold text-[22px] font-[Poppins] mt-20"> User test: Risultati</h3>
            <div>
            <div className="bg-white border rounded p-10 h-[177px] mt-5 w-1/2 ">
              <h4 className="font-extrabold">Carrello:</h4>
              <p>SVUOTA risulta essere poco visibile e logicamente scollegato allo scontrino → redesign ✔️</p>
            </div>
            <img className="mt-10"  src={User00} alt="" />
            </div>
</div>
    </>
  )
}