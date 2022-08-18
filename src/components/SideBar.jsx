import { FaLinkedin, FaGithub  } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const SideBar = () => {

    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 
                        flex flex-col justify-center
                        bg-gray-900 text-white shadow-lg">
            <SideBarIcon icon={ <FaLinkedin size='28' /> } />
            <SideBarIcon icon={ <FaGithub size='28' /> } />
            <SideBarIcon icon={ <HiOutlineMail size='28' /> } />

        </div>
    )
};

const SideBarIcon = ({icon}) => (
    <div className='sidebar-icons'>
        {icon}
    </div>
);

export default SideBar;