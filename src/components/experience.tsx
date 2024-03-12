import { FaCode } from "react-icons/fa6";
import { PiMonitorDuotone } from "react-icons/pi";
import { IoPhonePortraitOutline } from "react-icons/io5";

export function Experience() {
  return (
    <div >
      <div className="grid gap-20 mt-64 justify-center lg:flex">
        <div className="border-2 border-roxo/20 w-60 h-52 rounded-2xl mb-8">
          <div className="flex justify-center mt-12 text-roxo/50 ml-24 size-12 mb-5">
            <FaCode size={48} />
          </div>
          <h1 className="grid text-white/50 font-regular text-base text-center ">
            2 anos como
            <span className="text-white font-bold text-2xl">Programador</span>
          </h1>
        </div>
        <div className="border-2 border-roxo/10 bg-roxo/10 w-60 h-52 rounded-2xl ">
          <div className="flex justify-center mt-12 text-roxo/50 ml-24 size-12 mb-5">
            <PiMonitorDuotone size={48} />
          </div>
          <h1 className="grid text-white/50 font-regular text-base text-center">
            3 anos de
            <span className="text-white font-bold text-2xl">Trabalhos</span>
          </h1>
        </div>

        <div className="border-2 border-roxo/20 w-60 h-52 rounded-2xl ">
          <div className="flex justify-center mt-12 text-roxo/50 ml-24 size-12 mb-5">
            <IoPhonePortraitOutline size={48} />
          </div>
          <h1 className="grid text-white/50 font-regular text-base text-center">
            8 meses como
            <span className="text-white font-bold text-2xl">Mobile</span>
          </h1>
        </div>
      </div>
      <div className="hidden lg:flex justify-center">
        <div className="flex bg-roxo/10 w-[890px] h-[110px] text-center justify-center gap-20 rounded-2xl">
          <div className="flex  gap-20 items-center">
            <p className=" text-roxo/50 font-regular text-base">
              Desenvolvedor
              <span className="grid font-bold text-4xl">Front-end</span>
            </p>
            <p className=" text-roxo/50 font-regular text-base">
              Desenvolvedor
              <span className="grid font-bold text-4xl">Back-end</span>
            </p>
            <p className=" text-roxo/50 font-regular text-base">
              Desenvolvedor
              <span className="grid font-bold text-4xl">Mobile</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
