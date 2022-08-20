import { FaLinkedin, FaGithub  } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const SideBar = () => {

    return (
        <div className="fixed top-1/2 -translate-y-1/2 h-auto w-16 ml-4 
                        flex flex-col justify-center z-20
                        bg-gray-300 bg-opacity-20 text-white 
                        shadow-lg rounded-xl pt-2 pb-2 backdrop-blur-sm font-jet-brains">
            <div>
                <a href="https://www.linkedin.com/in/david-pierce-dev24/" target='_blank' rel="noreferrer noopener">
                    <SideBarIcon icon={ <FaLinkedin size='28' /> } text={ 'LinkedIn' } />
                </a>
                <a href="https://github.com/davidpierce24" target='_blank' rel="noreferrer noopener">
                    <SideBarIcon icon={ <FaGithub size='28' /> } text={ 'GitHub' } />
                </a>
                <a href="mailto:pie2ce@gmail.com" target='_blank' rel="noreferrer noopener">
                    <SideBarIcon icon={ <HiOutlineMail size='28' /> } text={ 'Contact Me' } />
                </a>
            </div>
            
        </div>
    )
};


const SideBarIcon = ({icon, text = 'tooltip'}) => (
    <div className='sidebar-icons group'>
        {icon}

        <span className='sidebar-tooltip group-hover:scale-100'>
            {text}
        </span>
    </div>
);

export default SideBar;