import { motion } from 'framer-motion'
import ChampView from '../videos/ChampView.mp4'
import Vital from '../videos/Vital.mp4'

const ProjectsPage = () => {

    return (
        <div className='w-full h-auto bg-pink-500 p-5 sm:px-20 sm:py-10' id='projects'>
            <p className="text-white font-semibold text-4xl sm:text-6xl p-10 pt-20 text-center font-jet-brains">Projects</p>
            <div className='flex justify-center gap-10 flex-wrap p-5 h-auto'>
                
                <ProjectCard video={ChampView} title={'ChampView'} text={''} tech={''}/>
                <ProjectCard video={Vital} title={'Vital'} text={''} tech={''}/>
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    )
}

const ProjectCard = ({video, title, text, tech}) => (
    <motion.div 
        className='bg-blue-500 w-full sm:w-xl 2xl:w-2xl max-w-4xl h-64 sm:h-96 rounded-3xl bg-opacity-80 backdrop-blur-sm shadow-xl shadow-pink-800 hover:scale-105 duration-200 flex justify-between overflow-hidden'
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{delay:0.05}}
        >
            <video controls autoPlay loop muted className='relative w-full sm:w-1/2 h-full object-cover'>
                <source src={video}/>
            </video>
            <div  className='invisible sm:visible w-1/2 h-full flex flex-col justify-start items-center p-5 font-jet-brains'>
                <p className='text-white text-2xl xl:text-4xl'>{title}</p>
            </div>
    </motion.div>
)

export default ProjectsPage;