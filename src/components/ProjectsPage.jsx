import { motion } from 'framer-motion'
import ChampView from '../videos/ChampView.mp4'
import Vital from '../videos/Vital.mp4'
// import Stocks from '../videos/StockPredictions.mp4'
import Impression from '../videos/Impression.mp4'
import PickMeUp from '../videos/PickMeUp.mp4'
import ShipIt from '../videos/ShipIt.mp4'
import Airbnb from '../videos/Airbnb.mp4'


const ProjectsPage = () => {

    return (
        
        <div className='w-full h-auto bg-pink-500 p-5 sm:px-20 sm:py-10' id='projects'>
            <p className="text-white font-semibold text-4xl sm:text-6xl p-10 pt-20 text-center font-jet-brains ">Projects</p>
            <div className='flex justify-center gap-10 flex-wrap p-5 h-auto'>
                <ProjectCard video={ChampView} title={'ChampView'} 
                text={'A React League of Legends Champ Visualizer'} tech={'React, Tailwind CSS, Riot API, Chart.js, Vercel'}/>
                    <div className='flex gap-2 sm:hidden'>
                        <SmallLinkButton name={'Go to the Site'} link={'https://lol-react-app.vercel.app/'} /><SmallLinkButton name={'Check it Out On GitHub'} link={'https://github.com/davidpierce24/Champ-View-League-of_Legends_React_App'} />
                    </div>
                <ProjectCard video={Airbnb} title={'Notbnb'} 
                text={'An Airbnb clone built React and Next.js'} tech={'React, Tailwind CSS, Mapbox API, Next.js, Vercel'}/>
                    <div className='flex gap-2 sm:hidden'>
                        <SmallLinkButton name={'Go to the Site'} link={'https://notbnb-react-nextjs.vercel.app/'} /><SmallLinkButton name={'Check it Out On GitHub'} link={'https://github.com/davidpierce24/airbnb-clone-react-nextjs'} />
                    </div>
                <ProjectCardApp video={PickMeUp} title={'PickMeUp'} 
                text={'Door Dash / Deliveroo clone built in React Native'} tech={'React Native, JavaScript, Redux, Sanity.io, Tailwind CSS'}/>
                    <div className='flex gap-2 sm:hidden'>
                        <SmallLinkButton name={'Check it Out On GitHub'} link={'https://github.com/davidpierce24/PickMeUp-delivery-app-clone-react-native'} />
                    </div>
                <ProjectCardApp video={ShipIt} title={'Ship It'} 
                text={'UPS tracker clone built in React Native'} tech={'React Native, Typescript, Firebase, GraphQL, Tailwind CSS'}/>
                    <div className='flex gap-2 sm:hidden'>
                        <SmallLinkButton name={'Check it Out On GitHub'} link={'https://github.com/davidpierce24/Ship-It-UPS-Delivery-Tracker-Clone-React-Native'} />
                    </div>
                <ProjectCard video={Vital} title={'Vital'} 
                text={'Yelp for Gyms built with C# .NET'} tech={'C#, ASP.NET Core 6, Bootstrap, MySQL, LINQ'}/>
                    <div className='flex gap-2 sm:hidden'>
                        <SmallLinkButton name={'Check it Out On GitHub'} link={'https://github.com/davidpierce24/Vital_Gym-Finder_CSharp-FullStack-Project'} />
                    </div>
                <ProjectCard video={Impression} title={'iMPReSSioN'} 
                text={'A Python/Flask app for in-depth show and movie rankings'} tech={'Python, Flask, Jinja2, MySQL, Bootstrap, CSS 3, HTML 5'}/>
                    <div className='flex gap-2 sm:hidden'>
                        <SmallLinkButton name={'Check it Out On GitHub'} link={'https://github.com/davidpierce24/iMPReSSioN-python-flask-full-stack'} />
                    </div>
            </div>
        </div>
        
    )
}

const ProjectCard = ({video, title, text, tech}) => (
    <motion.div 
        className='bg-blue-500 w-full sm:w-xl 2xl:w-2xl max-w-4xl h-64 sm:h-96 rounded-3xl bg-opacity-80 backdrop-blur-sm shadow-xl shadow-pink-800 flex justify-between overflow-hidden' style={{backfaceVisibility: 'hidden'}}
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{delay:0.05}}
        >
            <video controls autoPlay loop muted className='relative w-full sm:w-1/2 h-full object-cover'>
                <source src={video}/>
            </video>
            <div  className='hidden sm:flex w-1/2 h-full flex-col justify-around items-center p-5 font-jet-brains'>
                <p className='text-white text-2xl xl:text-4xl'>{title}</p>
                <p className='text-white text-md md:text-2xl text-center mt-4'>{text}</p>
                <p className='text-white text-md md:text-2xl text-center mt-4 '>{tech}</p>
                {video == ChampView &&  
                    <div className='flex gap-2'>
                        <LinkButton name={'Go to the Site'} link={'https://lol-react-app.vercel.app/'} /><LinkButton name={'Check it Out On GitHub'} link={'https://github.com/davidpierce24/Champ-View-League-of_Legends_React_App'} />
                    </div>  }
                {video == Vital && <LinkButton name={'Check it Out On GitHub'} link={'https://github.com/davidpierce24/Vital_Gym-Finder_CSharp-FullStack-Project'} />}
                {video == Impression && <LinkButton name={'Check it Out On GitHub'} link={'https://github.com/davidpierce24/iMPReSSioN-python-flask-full-stack'} />}
                {video == Airbnb &&  
                    <div className='flex gap-2'>
                        <LinkButton name={'Go to the Site'} link={'https://notbnb-react-nextjs.vercel.app/'} /><LinkButton name={'Check it Out On GitHub'} link={'https://github.com/davidpierce24/airbnb-clone-react-nextjs'} />
                    </div>  }
                {video == PickMeUp && <LinkButton name={'Check it Out On GitHub'} link={'https://github.com/davidpierce24/PickMeUp-delivery-app-clone-react-native'} />}
                {video == ShipIt && <LinkButton name={'Check it Out On GitHub'} link={'https://github.com/davidpierce24/Ship-It-UPS-Delivery-Tracker-Clone-React-Native'} />}
            </div>
    </motion.div>
    
)

const ProjectCardApp = ({video, title, text, tech}) => (
    <motion.div 
        className='bg-blue-500 w-full sm:w-xl 2xl:w-2xl max-w-4xl h-64 sm:h-96 rounded-3xl bg-opacity-80 backdrop-blur-sm shadow-xl shadow-pink-800 flex justify-between overflow-hidden' style={{backfaceVisibility: 'hidden'}}
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{delay:0.05}}
        >
            <video controls autoPlay loop muted className='relative w-full sm:w-1/2 h-full object-fit bg-black bg-opacity-80'>
                <source src={video}/>
            </video>
            <div  className='hidden sm:flex w-1/2 h-full flex-col justify-around items-center p-5 font-jet-brains'>
                <p className='text-white text-2xl xl:text-4xl'>{title}</p>
                <p className='text-white text-md md:text-2xl text-center mt-4'>{text}</p>
                <p className='text-white text-md md:text-2xl text-center mt-4 '>{tech}</p>
                {video == ChampView &&  
                    <div className='flex gap-2'>
                        <LinkButton name={'Go to the Site'} link={'https://lol-react-app.vercel.app/'} /><LinkButton name={'Check it Out On GitHub'} link={'https://github.com/davidpierce24/Champ-View-League-of_Legends_React_App'} />
                    </div>  }
                {video == Vital && <LinkButton name={'Check it Out On GitHub'} link={'https://github.com/davidpierce24/Vital_Gym-Finder_CSharp-FullStack-Project'} />}
                {video == Impression && <LinkButton name={'Check it Out On GitHub'} link={'https://github.com/davidpierce24/iMPReSSioN-python-flask-full-stack'} />}
                {video == Airbnb &&  
                    <div className='flex gap-2'>
                        <LinkButton name={'Go to the Site'} link={'https://notbnb-react-nextjs.vercel.app/'} /><LinkButton name={'Check it Out On GitHub'} link={'https://github.com/davidpierce24/airbnb-clone-react-nextjs'} />
                    </div>  }
                {video == PickMeUp && <LinkButton name={'Check it Out On GitHub'} link={'https://github.com/davidpierce24/PickMeUp-delivery-app-clone-react-native'} />}
                {video == ShipIt && <LinkButton name={'Check it Out On GitHub'} link={'https://github.com/davidpierce24/Ship-It-UPS-Delivery-Tracker-Clone-React-Native'} />}
            </div>
    </motion.div>
    
)



const LinkButton = ({name, link}) => (
    <a href={link} target='_blank' rel="noreferrer noopener"
    ><button
    type="button"
    data-mdb-ripple="true"
    data-mdb-ripple-color="light"
    class="inline-block px-6 py-2.5 bg-pink-500 text-white font-semibold text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition  ease-in-out hover:scale-105 duration-150"
  >{name}</button></a>
)

const SmallLinkButton = ({name, link}) => (
    <a href={link} target='_blank' rel="noreferrer noopener"
    ><button
    type="button"
    data-mdb-ripple="true"
    data-mdb-ripple-color="light"
    class="inline-block px-6 py-2.5 bg-blue-500 text-white font-semibold text-xs leading-tight uppercase rounded shadow-md hover:bg-pink-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition  ease-in-out hover:scale-105 duration-150"
  >{name}</button></a>
)

export default ProjectsPage;