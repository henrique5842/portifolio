import {tecnologiesImage,tecnologiesImage2} from '../storage/skills'

export function Skills(){
    return(
        <div id='skills' className='mt-96'>
        <div className="px-5 lg:grid lg:justify-center ">
            <div className="bg-roxo/10 w-28 h-8 text-roxo rounded-full text-center mb-5">
            <p className="font-bold text-lg">🧑‍💻 Skills</p>
            </div>
            <div>
                <span className="text-white font-bold text-2xl">Tecnologias <br className='lg:hidden'/> e habilidades</span>
                <p className='text-white/50 mt-5 font-bold text-sm lg:text-2xl'>Techs que uso no dia a dia</p>
                <div className=' flex justify-center'>
                <div className='grid grid-cols-6 lg:grid-cols-8 size-64 lg:size-[500px] gap-5 mt-10 justify-center'>
                {
                    tecnologiesImage.map(({src,alt})=>(
                        <img src={src} alt={alt}/>
                    ))
                }
                </div>
                </div>
                <div className='-mt-52 lg:-mt-96'>
                <p className='text-white/50 mb-10 font-bold text-sm lg:text-2xl'>Outras techs com que já realizei projetos</p>
                <div className='flex justify-center -mt-10'>
                <div className='grid grid-cols-6 lg:grid-cols-8 size-64 lg:size-[500px] gap-5 mt-10 justify-center'>
                
                {
                    tecnologiesImage2.map(({src,alt})=>(
                        <img src={src} alt={alt}/>
                    ))
                }
                </div>
                </div>
                </div>
                

            </div>
        </div>
        </div>
    )
}