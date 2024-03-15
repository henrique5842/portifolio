import Avatar from "../assets/Avatar.png";

export function SobreMin() {
  return (
    <div className="grid justify-center mt-40 lg:-ml-24 lg:grid-cols-2 lg:mt-80" id="sobremin">
      <div className="flex items-center mt-40">
        <img src={Avatar} alt="meu avatar" className="w-[90%] h-[90%] lg:w-[65%] lg:h-[75%] lg:ml-16" />
      </div>
      <div>
        <div className=" w-28 h-6 bg-roxo/15 rounded-full mb-5 mt-5 lg:mt-56 lg:-ml-52 ml-7">
          <p className="text-roxo text-center font-bold text-sm lg:mt-16">🧐 Sobre mim</p>
        </div>
        <div className="hidden lg:grid text-white/50 lg:-ml-52">
        <p className="font-extrabold text-2xl mb-5">Henrique de <br /> Souza Lala</p>
        <p className="font-regular text-xl mb-5">👋 Me chamo Henrique de Souza Lala, mas pode me chamar apenas de Henrique. Prazer! <br />
           👨‍💻 Há mais de 3 anos desenvolvendo e programando interfaces com JavaScript, React JS e Typescript. <br />
           💡 Interesses em desenvolvimento Front-end com React, React Native, VueJS. <br /> </p>
           <p className="font-regular text-xl">
           🚀 Tentando ser um pouquinho melhor do que ontem todos dias.
           </p>
           </div>
      </div>
      <div className="ml-7 lg:justify-center lg:hidden">
        <span className="font-extrabold text-2xl text-white">Henrique <br/>Lala</span>
        <p className="text-white/50 font-regular text-sm mt-5">Mas pode me chamar apenas de Henrique. Prazer! <br /> Há mais de 3 anos desenvolvendo e programando <br /> interfaces com JavaScript, React JS, Typescript e Interesses em desenvolvimento Front-end e <br />Back-end com React, React Native.
          <p className="mt-4">🚀 Tentando ser um pouquinho melhor do que <br /> ontem todos os dias. </p></p>
      </div>
    </div>
  );
}
