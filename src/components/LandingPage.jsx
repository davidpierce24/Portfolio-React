

const LandingPage = () => {

    return (
        <div className='w-full h-screen bg-gradient-to-b from-black to-pink-500 '>
            <div className="text-white font-bold text-4xl flex items-center h-screen p-32 sm:p-48">
                <p className="z-20">Hey, I'm David and I love software development</p> 
            </div>
            <div className='absolute top-0 right-0 w-full  h-screen z-10 m-0 p-0'>
                <iframe src='https://my.spline.design/untitled-d224aa3719f05c0a1a0def1aac425b6e/' frameborder='0' className=" w-full h-100 m-0 p-0" width="100%" height="100%" allowfullscreen="allowfullscreen"></iframe>
            </div>
        </div>
    )
}

export default LandingPage;