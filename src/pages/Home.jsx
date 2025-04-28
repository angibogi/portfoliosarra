import Hero from "../sections/Hero";
import Services from "../sections/Skillset";
import Experience from "../sections/Experience";
import Project from "../sections/Project";
import Contact from "../sections/Contact";
import Sarra from "../../assets/sarra.png"

export function Home() {
  return (
    <>
      <Hero
        imgUrl={Sarra}
        imgAlt="foto profilo">
        <div className="md:space-y-10 space-y-4 ">
          <h1 className="text-2xl md:text-6xl font-bold">I’m Sarra Slimane.</h1>
          <h1 className="text-2xl md:text-6xl font-bold">A UI UX designer</h1>
          <h1 className="text-2xl md:text-6xl font-bold opacity-50">based in Italy.</h1>
          <p> I design intuitive, user-focused digital experiences that blend functionality with visual elegance.
            My background in fashion and love for contemporary art influence my approach to design — always aiming to
            create interfaces that are not only usable, but also emotionally engaging and visually compelling.
          </p>
        </div>
      </Hero>
      <Experience />
      <Services />
      <Project />
      <Contact />
    </>
  )
}
