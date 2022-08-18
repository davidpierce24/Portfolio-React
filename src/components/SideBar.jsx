import { FaLinkedin, FaGithub  } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const SideBar = () => {

    return (
        <div className="fixed top-0 left-0 h-screen w-16 ml-4 
                        flex flex-col justify-center
                        bg-gray-900 bg-opacity-0  text-white shadow-lg">
            <div className='height-auto bg-gray-300 bg-opacity-20 rounded-xl pt-2 pb-2 backdrop-blur-sm'>
                <SideBarIcon icon={ <FaLinkedin size='28' /> } text={ 'LinkedIn' } />
                <SideBarIcon icon={ <FaGithub size='28' /> } text={ 'GitHub' } />
                <SideBarIcon icon={ <HiOutlineMail size='28' /> } text={ 'Contact Me' } />
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