import { motion } from "framer-motion";



const LandingPage = () => {

    return (
        <motion.div 
        className='snap-start w-full h-screen bg-gradient-to-b from-black to-pink-500' id="home"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
            <motion.div 
            className="text-white font-semibold text-4xl sm:text-6xl flex flex-col items-start justify-center h-screen pl-32 pr-5 sm:pl-64 gap-10 font-jet-brains"
            >
                <motion.p 
                    className="z-20"
                    initial={{ y: 800 }}
                    animate={{ y: 0 }}
                    transition={{
                        ease:[0.6, 0.01, -0.05, 0.95],
                        duration: 1.5,
                        delay: 0.1
                    }}
                >Hey, I'm David</motion.p>

                <motion.p 
                    className="z-20"
                    initial={{ y: 800 }}
                    animate={{ y: 0 }}
                    transition={{
                        ease:[0.6, 0.01, -0.05, 0.95],
                        duration: 1.5,
                        delay: 0.2
                    }}
                >I love making software</motion.p> 
            </motion.div>
            <motion.div 
            className='absolute top-0 right-0 w-full  h-screen z-10 m-0 p-0'
            initial={{ opacity:0, x: 180 }}
            animate={{ opacity:1, x: 0 }}
            transition={{
                ease: 'easeInOut',
                duration: 1,
                delay: 0.4,
            }}
            >
                <iframe src='https://my.spline.design/untitled-d224aa3719f05c0a1a0def1aac425b6e/' frameborder='0' className=" w-full h-100 m-0 p-0" width="100%" height="100%" allowfullscreen="allowfullscreen"></iframe>
            </motion.div>
        </motion.div>
    )
}



export default LandingPage;