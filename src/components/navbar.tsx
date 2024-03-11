import Logo from '../assets/Logo.png'

export function Navbar() {
  return (
    <div>
    <div className='fixed' >
      <nav className="hidden lg:flex space-x-5">
        <img src={Logo} alt="" className='flex size-7 mt-10 ml-20'/>
        <div className="space-x-5 flex justify-end w-screen px-52 mt-10 text-slate-50/50  font-bold  text-sm">
          <a href="#home" className='focus:text-roxo'>Home</a>
          <a href="#sobremin" className='focus:text-roxo'>Sobre Min</a>
          <a href="#portifolio" className='focus:text-roxo'>Portfólio</a>
          <a href="#skills" className='focus:text-roxo'>Skills</a>
          <a href="#recomendacoes" className='focus:text-roxo'>Recomendações</a>
          <a href="#contato" className='focus:text-roxo'>Contatos</a>
        </div>
      </nav>
    </div>
    </div>
  );
}
