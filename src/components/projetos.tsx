export function Projetos() {
    return(
        <div>
           <div className=" w-28 h-6 bg-roxo/15 rounded-full ml-7 mt-20 mb-10">
          <p className="text-roxo text-center font-bold text-sm lg:mt-16">🔗 Portfólio</p>
        </div>
        <div className="mb-10">
            <span className="text-white ml-7 font-extrabold text-3xl">Projetos</span>
        </div>
        <div className="flex text-roxo/70 gap-5 font-bold text-lg justify-center">
            <div className="w-28 h-9 rounded-lg text-center border-2 border-roxo/50">
            <a href="#web">Web</a>
            </div>
            <div className="w-28 h-9 rounded-lg text-center border-2 border-roxo/50">
            <a href="#mobile">Mobile</a>
            </div>
            <div className="mt-10">
                <h1></h1>

            </div>
        </div>
        </div>
    )
}