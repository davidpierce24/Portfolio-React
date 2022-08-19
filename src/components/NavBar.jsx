import { BsDot } from 'react-icons/bs';

const Navbar = () => {

    return (
        <div className='fixed left-1/2 -translate-x-1/2 mt-5 z-30'>
            <ul className='flex justify-center items-center gap-2 
                        text-blue-500 font-bold text-xl sm:text-2xl bg-black bg-opacity-40 p-4 rounded-xl backdrop-blur-sm'>
                <li className='hover:text-white  transition-all duration-200 ease-linear cursor-pointer drop-shadow-xl'>Home</li>
                <BsDot size='28' />
                <li className='hover:text-white  transition-all duration-200 ease-linear cursor-pointer '>Projects</li>
                <BsDot size='28' />
                <li className='hover:text-white  transition-all duration-200 ease-linear cursor-pointer '>Skills</li>
            </ul>
        </div>
    )
}

export default Navbar;