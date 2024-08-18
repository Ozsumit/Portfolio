import Navigation from "@/components/ui/navigation";
import { SparklesCore } from "@/components/ui/sparkles";
import WordFlip from "@/components/ui/textflip";
// import { WavyBackgroundVer } from "@/components/ui/wave-ver";
import { WavyBackground } from "@/components/ui/waves";
import Image from "next/image";
import { TextGenerateEffect } from "../components/ui/text";
import { Meteors } from "@/components/ui/meteorcard";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function Home() {
  const words = ["Hello", "Namaste", "Ciao", "Konnichiwa", "Bonjour"];
  const wordss = `I haven't done much yet but, here are some of the projects i've done`;
  const items = [
    {
      title: "Repo-Nox",
      description:
        "Your friend for elite academic comeback that you dreamed of. Made with NextJS and Tailwind",
      link: "https://ozsumit.github.io/nox",
    },
    {
      title: "Jyoti EBS ",
      description:
        "This is a static website i made for Jyoti English Boarding School. It is made with plain HTML, CSS, & Javascript. ",
      link: "https://jyotiebs.edu.np/",
    },
    {
      title: "IEMIS",
      description:
        "I'm a government certified IEMIS contractor. Not much to say about it.",
      link: "https://emis.cehrd.gov.np/",
    },
  ];
  return (
    <main className="flex min-h-screen w-[97vw] flex-col items-center justify-between ">
      <WavyBackground className="z-50">
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={50}
            className="w-full h-full  -z-50"
            particleColor="#FFFFFF"
          />
        </div>
        <Navigation />

        <div className="maincon flex flex-col justify-center items-center">
          <div
            id="Hero"
            className="hero flex z-50 flex-col justify-start mt-[20vh] items-center h-screen"
          >
            <WordFlip
              cursorClassName="text-white blinking-cursor"
              className="text-6xl flex text-white font-mono font-extrabold"
              words={words}
              cursorSymbol="|"
              typingSpeed={200}
              pauseTime={1500}
              loop={true}
              startDelay={300}
            />

            <h1 className="text-6xl text-center sm:w-auto lg:w-3/4    flex text-white font-mono font-extrabold">{`I'm Sumit, a frontend web developer`}</h1>
          </div>
        </div>

        {/* </SparklesCore> */}
        <div className="Work flex flex-col justify-center w-full">
          <div className="Work flex flex-row justify-between w-full">
            <div></div>
            <TextGenerateEffect
              words={wordss}
              className="lg:w-5/12  w-auto text-3xl font-mono"
            />
          </div>
          <div className="cards flex justify-center items-center flex-row ">
            <HoverEffect className="w-10/12" items={items} />
          </div>
        </div>
      </WavyBackground>

      {/* <WavyBackgroundVer /> */}
    </main>
  );
}
