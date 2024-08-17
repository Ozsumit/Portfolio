import Navigation from "@/components/ui/navigation";
import WordFlip from "@/components/ui/textflip";
// import { WavyBackgroundVer } from "@/components/ui/wave-ver";
import { WavyBackground } from "@/components/ui/waves";
import Image from "next/image";

export default function Home() {
  const words = ["Hello", "Namaste", "Ciao", "Konnichiwa", "Bonjour"];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <WavyBackground>
        <Navigation />

        <div className="maincon flex flex-col justify-center items-center">
          <div
            id="Hero"
            className="hero flex flex-col justify-center items-center h-screen"
          >
            <WordFlip
              cursorClassName="text-white blinking-cursor"
              className="text-7xl flex text-white font-mono font-extrabold"
              words={words}
              cursorSymbol="|"
              typingSpeed={200}
              pauseTime={1500}
              loop={true}
              startDelay={300}
            />

            <h1 className="text-7xl text-center sm:w-auto lg:w-3/4    flex text-white font-mono font-extrabold">{`I'm Sumit, a frontend web developer`}</h1>
          </div>
        </div>
      </WavyBackground>

      {/* <WavyBackgroundVer /> */}
    </main>
  );
}
