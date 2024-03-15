import React, { useState } from 'react'

import { IoLogoWhatsapp } from "react-icons/io5";
import { BsSend } from "react-icons/bs";
import { PiCopySimple } from "react-icons/pi";
import { FaArrowUp } from "react-icons/fa6";

import Linkedin from '../assets/linkendin.png'
import Github from '../assets/github.png'




export function Contato() {
const [texto, ] = useState('henriquedev17@gmail.com');

  const copiarParaAreaDeTransferencia = async () => {
    try {
      await navigator.clipboard.writeText(texto);
      alert('Texto copiado com sucesso para sua area de transferencia');
    } catch (erro) {
      alert('Erro ao copiar texto: ' + erro);
    }
  };
  return (
    <div id='contato'>
      <div className="px-5 lg:grid lg:justify-center ">
        <div className="flex justify-center items-center w-32 h-8 bg-roxo/10 rounded-full mb-5 lg:ml-52">
          <p className="font-bold text-roxo">📬 Contatos</p>
        </div>
        <span className="text-white font-bold text-2xl lg:text-3xl lg:text-center ">
          Entre <br className='lg:hidden'/> em contato
        </span>
        <div className="px-5 mt-5 lg:mt-16 lg:flex gap-14">
        <a
          href="https://wa.me/5511991430562"
          target="blank"
          className="border-2 border-roxo/50 w-52 h-12 rounded-lg flex items-center justify-center gap-2 -ml-4 text-roxo"
        >
          <IoLogoWhatsapp size={24} />
          <span className="font-bold text-lg">Vamos conversar!</span>
        </a>
        <div className='-ml-4 text-roxo mt-10 lg:-mt-11 lg:text-center'>
            <div className='lg:flex lg:justify-center'>
            <BsSend size={30}/>
            </div>
            <span className='font-bold text-2xl'>E-MAIL:</span>
            <div className='flex gap-3 lg:flex-col'>
            <p className='font-bold text-xl text-white/50'>henriquedev17@gmail.com</p>
            <button className='text-roxo lg:flex lg:justify-center' onClick={copiarParaAreaDeTransferencia}><PiCopySimple size={24}/></button>
            </div>
            <a href="#home" className='flex text-roxo gap-2 font-bold text-xl mt-32 mb-20 lg:-ml-20'>Voltar ao topo <FaArrowUp size={25}/></a>
        </div>
        </div>
      </div>
      <div className='w-full h-28 bg-roxo/10'>
      <div className="flex flex-col-2 gap-5 justify-center">
          <a href="https://www.linkedin.com/in/henrique-souza-lala/" className='mt-5' target='_blank'>
            <img src={Linkedin} alt="Linkendin" />
          </a>
          <a href="https://github.com/henrique5842" className='mt-5' target='blank'>
            <img src={Github} alt="Github" />
          </a>
        </div>
        <p className='text-white font-bold text-center mt-5 text-lg'>Copyright © Henrique Sousa · 2024</p>
      </div>
    </div>
  );
}
