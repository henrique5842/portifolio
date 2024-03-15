import Capa from '../assets/video/capa/capa.png'

import { CiPlay1 } from "react-icons/ci";

export function VideoProject() {
    return(
        <div>
            <div className='mt-60 px-8'>
            <span className='font-bold text-3xl text-white'>Projetos em video</span>
            </div>
            <div className='w-[300px] h-[450px] border-2 border-roxo/50 rounded-2xl mt-10 ml-8'>
            <div className='flex justify-center mt-5'>
                <img src={Capa} alt="capa do video" className='w-64 h-40 flex justify-center'/>
            </div>
            <div className='mt-3 px-10'>
                <span className='text-white font-bold text-2xl'>move.it</span>
                <p className='text-white  font-regular text-sm mt-3'>Sistema web ETL no qual dados georreferenciados serão extraídos de shapefiles</p>
                <div className='grid grid-cols-2 gap-5'>
                    <div className='border-2 border-roxo/10 bg-roxo/10 w-24 h-8 text-center rounded-lg mt-5'>
                    <p className='font-bold text-roxo'>React js</p>
                    </div>
                    <div className='border-2 border-roxo/10 bg-roxo/10 w-24 h-8 text-center rounded-lg mt-5'>
                        <p className='text-roxo font-bold'>typescript</p>
                    </div>
                </div>
                <a href="https://www.youtube.com/watch?v=UVlFt05vND4&ab_channel=Rocketseat" className='mt-3 flex justify-end' target='_blank'><CiPlay1 className='text-roxo size-8'/></a>
        
            </div>
        </div>
        </div>
    )
}