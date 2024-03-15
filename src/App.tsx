import { Navbar } from "./components/navbar";

import Github from "./assets/github.png";
import Linkendin from "./assets/linkendin.png";
import Avatar from "./assets/Avatar.png";

import Curriculo from "./download/Henrique de Souza Lala.pdf";

import { RiArrowDownLine } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io5";
import { Experience } from "./components/experience";
import { SobreMin } from "./components/sobremin";
import { Projeto } from "./components/projeto";
import { Skills } from "./components/skills";
import { Contato } from "./components/contato";

function App() {
  return (
    <div>
      <Navbar />
      <div className="mt-5 flex justify-center mb-12" id="home">
        <div className="flex flex-col-2 gap-2 lg:hidden">
          <a href="https://www.linkedin.com/in/henrique-souza-lala/">
            <img src={Linkendin} alt="Linkendin" />
          </a>
          <a href="https://github.com/henrique5842">
            <img src={Github} alt="Github" />
          </a>
        </div>
      </div>
      <div >
        <div className="flex justify-center items-center  w-[90%] h-[60%]  lg:h-screen">
          <img
            src={Avatar}
            alt="Avatar de Min"
            className="object-center w-[90%] h-[100%] lg:w-96 lg:h-72 mb-12"
          />
        </div>
      </div>
      <div className="sm:flex sm:justify-center lg:flex lg:justify-start lg:items-center lg:-mt-[37%]">
        <div className="ml-10 w-32 h-7 bg-roxo/15 rounded-full mb-12 sm:mb-12 lg:">
          <p className="text-roxo text-center">👋 Saudações!</p>
        </div>
      </div>
      <div className="sm:w-screen sm:justify-center sm:grid px-10 lg:justify-start">
        <h1 className="font-bold text-5xl text-white mb-5">
          Henrique
          <br />
          Lala
        </h1>
        <p className="font-regular text-base text-white/50 w-80 sm:text-xl mb-12">
          Front-end · Mobile developer
        </p>
        <div className="hidden lg:flex flex-col-2 gap-5 ">
          <a href="https://www.linkedin.com/in/henrique-souza-lala/" target="_blank">
            <img src={Linkendin} alt="Linkendin" />
          </a>
          <a href="https://github.com/henrique5842" target="blank">
            <img src={Github} alt="Github" />
          </a>
        </div>
      </div>
      <div className="flex">
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 text-roxo/50 font-semibold text-lg sm:flex sm: w-screen sm:justify-center sm:gap-10 lg:justify-end lg:px-12 lg:-mt-48 ">
          <a href={Curriculo} download className="ml-10 mb-1 mt-1.5 ">
            Baixar CV
            <RiArrowDownLine size={22} className="flex ml-[82px] -mt-6" />
          </a>
          <a
            href="https://wa.me/5511991430562"
            target="blank"
            className="border-2 border-roxo/50 w-48 h-10 rounded-lg flex items-center justify-center gap-2 -ml-4"
          >
            <IoLogoWhatsapp size={24} />
            <span>Vamos conversar</span>
          </a>
        </div>
      </div>
      <div>
        <Experience/>
        <SobreMin />
        <Projeto/>
        <Skills/>
        <Contato/>
      </div>
    </div>
  );
}

export default App;
