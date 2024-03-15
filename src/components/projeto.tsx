import { AiFillGithub, AiOutlineGlobal } from "react-icons/ai";
import { CiPlay1 } from "react-icons/ci";

import { Projects } from "../storage/projects";


export function Projeto() {
    const isMobile = window.innerWidth <= 768;

    const redirecionar = () => {
      window.location.href = '/projetos';
    };
    
    
  return (
    <div id="portifolio" className="mt-52">
      <div className=" sm:grid-cols-2 w-28 h-6 bg-roxo/15 rounded-full ml-10 lg:ml-40  mb-5">
        <p className="text-roxo text-center font-bold text-sm lg:mt-32">
          🔗 Portfólio
        </p>
      </div>
      <div className="mb-5">
        <span className="text-white ml-10 font-extrabold text-3xl lg:ml-40">
          PROJETOS
        </span>
      </div>
      <div className="lg:grid sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:px-20 ">
      {Projects.slice(0, 4).map((project, index) => (
        <div key={index} className={`mt-5 px-6 mb-5 ${isMobile && index > 0 ? 'hidden' : ''}`}>
          <div className="border-2 border-roxo/50 w-[330px] h-[470px] rounded-2xl ">
        <div className="mt-5 px-6 mb-5">
          <span className="text-white font-bold text-base">{project.name}</span>
          <p className="text-white/50 font-regular text-base mt-5 mb-5">{project.description}</p>
          <div className="flex mb-5 gap-5 px-6">
            {project.technologies.map((tech, techIndex) => (
              <div key={techIndex} className="w-28 h-8 bg-roxo/10 rounded-lg text-center items-center">
                <p className="text-roxo mt-1 font-extrabold">{tech}</p>
              </div>
            ))}
          </div>
          <img src={project.imageSrc} className="px-2 mb-5 mt-6 w-80 h-36 rounded-2xl"/>
          <div className="flex gap-10 justify-center">
          <div className="w-28 h-8 rounded-lg border-2 border-roxo ">
          <a href={project.github} className="text-white font-bold text-base flex justify-center gap-1 mt-0.5" target="_blank"><AiFillGithub size={25}/>GITHUB</a>
          </div>
          <div className="w-28 h-8 rounded-lg border-2 border-roxo ">
          <a href={project.projectLink} className="text-white font-bold text-base flex justify-center gap-1 mt-0.5" target="blank"><AiOutlineGlobal  size={25}/>SITE</a>
        </div>
        </div>
        <div>
          <a href={project.video} className="flex justify-end text-roxo mt-5 font-bold text-lg" target="_blank"><CiPlay1 size={24}/>ASSISTIR PROJETO</a>
        </div>
        </div>
        </div>
        </div>
        ))}
        
        </div>
        <button onClick={redirecionar}>oi</button>
        </div>
  )}