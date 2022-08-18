

const Navbar = () => {

    return (
        <div className='fixed left-1/2 -translate-x-1/2 mt-12'>
            <ul className='flex justify-center gap-4 
                        text-blue-500 font-bold text-2xl'>
                <li className='hover:text-white  transition-all duration-300 ease-linear cursor-pointer '>Home</li>
                <li className='cursor-default'>|</li>
                <li className='hover:text-white  transition-all duration-300 ease-linear cursor-pointer '>Projects</li>
                <li className='cursor-default'>|</li>
                <li className='hover:text-white  transition-all duration-300 ease-linear cursor-pointer '>Skills</li>
            </ul>
        </div>
    )
}

export default Navbar;