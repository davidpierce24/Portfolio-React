import { motion, useInView, useScroll} from "framer-motion";
import anime from 'animejs/lib/anime.es.js';

const SkillsPage = () => {

    return (
        <div className='w-full h-auto xl:h-screen bg-gradient-to-b from-pink-500 to-pink-700 p-10 lg:px-32 py-28 flex flex-col gap-10'  id='skills'>
            <div><p className="text-white font-semibold text-4xl sm:text-6xl text-center font-jet-brains ">Skills</p></div>
            <div className='w-full h-full  text-white flex gap-5 flex-wrap xl:flex-nowrap justify-center'>
                <div className='w-full xl:w-1/2 h-full flex flex-col gap-5 font-jet-brains'>
                    <div className='w-full flex flex-col h-1/4 bg-blue-500 bg-opacity-80 backdrop-blur-lg rounded-3xl shadow-xl shadow-pink-800 p-5 justify-around'>
                        <p className='text-2xl text-center'>Full Stack Development</p>
                        <div className='text-xl flex gap-3 justify-around'><span>MERN</span><span>C# .NET</span><span>Python / Flask</span></div>
                    </div>
                    <div className='w-full flex flex-col h-1/4 bg-blue-500 bg-opacity-80 backdrop-blur-lg rounded-3xl shadow-xl shadow-pink-800 p-5 justify-around'>
                        <p className='text-2xl text-center'>Languages</p>
                        <div className='text-xl flex flex-wrap gap-3 justify-around'><span>JavaScript</span><span>C#</span><span>Python</span><span>SQL</span><span>HTML 5</span><span>CSS 3</span></div>
                    </div>
                    <div className='w-full flex flex-col h-1/4 bg-blue-500 bg-opacity-80 backdrop-blur-lg rounded-3xl shadow-xl shadow-pink-800 p-5 justify-around'>
                        <p className='text-2xl text-center'>Frameworks / Libraries / Databases</p>
                        <div className='text-xl flex gap-3 justify-around flex-wrap'><span>React</span><span>NodeJS</span><span>Express</span><span>ASP.NET Core</span><span>Flask</span><span>MongoDB</span><span>MySQL</span><span>Anaconda</span><span>Tailwind CSS</span><span>Bootstrap</span></div>
                    </div>
                    <div className='w-full flex flex-col h-1/4 bg-blue-500 bg-opacity-80 backdrop-blur-lg rounded-3xl shadow-xl shadow-pink-800 p-5 justify-around'>
                        <p className='text-2xl text-center'>Other Tools</p>
                        <div className='text-xl flex flex-wrap gap-3 justify-around'><span>Figma</span><span>Rest API</span><span>AWS EC2</span><span>Postman</span><span>Heroku</span><span>FL Studio</span><span>Google Cloud</span><span>VS Code</span><span>GitHub</span></div>
                    </div>
                </div>
                <div className='w-full xl:w-1/2 h-screen xl:h-full grid grid-cols-4 place-items-center gap-4 p-2' id='grid'>
                    <div className=' text-3xl font-jet-brains col-span-full' >
                        Drag These
                    </div>
                    <motion.img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="..." className='w-12 h-12 ' id='icon'
                    drag
                    dragConstraints={{
                        left: 0,
                        right:0, 
                        top: 0,
                        bottom: 0
                    }}
                    dragElastic={3}
                    />
                    <motion.img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="..." className='w-12 h-12 ' id='icon'
                    drag
                    dragConstraints={{
                        left: 0,
                        right:0, 
                        top: 0,
                        bottom: 0
                    }}
                    dragElastic={3}/>
                    <motion.img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="..." className='w-12 h-12 ' id='icon'
                    drag
                    dragConstraints={{
                        left: 0,
                        right:0, 
                        top: 0,
                        bottom: 0
                    }}
                    dragElastic={3}/>
                    <motion.img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="..." className='w-12 h-12' id='icon'
                    drag
                    dragConstraints={{
                        left: 0,
                        right:0, 
                        top: 0,
                        bottom: 0
                    }}
                    dragElastic={3}
                    />
                    <motion.img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="..." className='w-12 h-12 ' id='icon'
                    drag
                    dragConstraints={{
                        left: 0,
                        right:0, 
                        top: 0,
                        bottom: 0
                    }}
                    dragElastic={3}
                    />
                    <motion.img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="..." className='w-12 h-12 ' id='icon'
                    drag
                    dragConstraints={{
                        left: 0,
                        right:0, 
                        top: 0,
                        bottom: 0
                    }}
                    dragElastic={3}
                    />
                    <motion.img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="..." className='w-12 h-12' id='icon'
                    drag
                    dragConstraints={{
                        left: 0,
                        right:0, 
                        top: 0,
                        bottom: 0
                    }}
                    dragElastic={3}
                    />
                    <motion.img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="..." className='w-12 h-12 ' id='icon'
                    drag
                    dragConstraints={{
                        left: 0,
                        right:0, 
                        top: 0,
                        bottom: 0
                    }}
                    dragElastic={3}
                    />
                    <motion.img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="..." className='w-12 h-12' id='icon'
                    drag
                    dragConstraints={{
                        left: 0,
                        right:0, 
                        top: 0,
                        bottom: 0
                    }}
                    dragElastic={3}
                    />
                    <motion.img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="..." className='w-12 h-12 ' id='icon'
                    drag
                    dragConstraints={{
                        left: 0,
                        right:0, 
                        top: 0,
                        bottom: 0
                    }}
                    dragElastic={3}
                    />
                    <motion.img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="..." className='w-12 h-12 ' id='icon'
                    drag
                    dragConstraints={{
                        left: 0,
                        right:0, 
                        top: 0,
                        bottom: 0
                    }}
                    dragElastic={3}
                    />
                    <motion.img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="..." className='w-12 h-12' id='icon'
                    drag
                    dragConstraints={{
                        left: 0,
                        right:0, 
                        top: 0,
                        bottom: 0
                    }}
                    dragElastic={3}
                    />
                    <motion.img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="..." className='w-12 h-12' id='icon'
                    drag
                    dragConstraints={{
                        left: 0,
                        right:0, 
                        top: 0,
                        bottom: 0
                    }}
                    dragElastic={3}
                    />
                    <motion.img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg" alt="..." className='w-12 h-12 ' id='icon'
                    drag
                    dragConstraints={{
                        left: 0,
                        right:0, 
                        top: 0,
                        bottom: 0
                    }}
                    dragElastic={3}
                    />
                    <motion.img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" alt="..." className='w-12 h-12 ' id='icon'
                    drag
                    dragConstraints={{
                        left: 0,
                        right:0, 
                        top: 0,
                        bottom: 0
                    }}
                    dragElastic={3}
                    />
                    <motion.img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="..." className='w-12 h-12 ' id='icon'
                    drag
                    dragConstraints={{
                        left: 0,
                        right:0, 
                        top: 0,
                        bottom: 0
                    }}
                    dragElastic={3}
                    />
                    <motion.img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="..." className='w-12 h-12 ' id='icon'
                    drag
                    dragConstraints={{
                        left: 0,
                        right:0, 
                        top: 0,
                        bottom: 0
                    }}
                    dragElastic={3}
                    />
                    <motion.img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="..." className='w-12 h-12' id='icon'
                    drag
                    dragConstraints={{
                        left: 0,
                        right:0, 
                        top: 0,
                        bottom: 0
                    }}
                    dragElastic={3}
                    />
                    <motion.img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="..." className='w-12 h-12 ' id='icon'
                    drag
                    dragConstraints={{
                        left: 0,
                        right:0, 
                        top: 0,
                        bottom: 0
                    }}
                    dragElastic={3}
                    />
                    <motion.img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg" alt="..." className='w-12 h-12 ' id='icon'
                    drag
                    dragConstraints={{
                        left: 0,
                        right:0, 
                        top: 0,
                        bottom: 0
                    }}
                    dragElastic={3}
                    />
                </div>

            </div>
        </div>
    )
}

window.onload = function(){
    anime({
        targets: '#icon',
        translateY: -20,
        scale: [
            {value: 0, easing: 'easeOutSine', duration: 500},
            {value: 1, easing: 'easeInOutQuad', duration: 1200}
        ],
        delay: anime.stagger(400, {direction: 'center'}, {grid: [4, 5], from: 'center'}),
        loop: true
    });
}

export default SkillsPage;