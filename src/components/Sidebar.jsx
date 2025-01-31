import React from 'react';
import { FaHome, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import SidebarLink from './SidebarLink';
import { useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';
import { MdOutlinePostAdd } from 'react-icons/md';

const Sidebar = ({ theme }) => {

    const isDark = theme === 'dark';
    const bgClass = isDark ? 'bg-black' : `bg-white`;
    const textClass = isDark ? 'text-gray-200' : 'text-gray-800';
    const hoverClass = 'hover:bg-purple-300';

    const dispatch = useDispatch();

    return (
        <div className={`h-screen w-64 ${bgClass} border-r ${textClass} fixed flex flex-col`}>
            <div>
                <div className="p-4 text-lg font-bold text-center border-b border-gray-300">
                    Pixflow
                </div>
                <nav>
                    <ul>
                        <li>
                            <SidebarLink
                                label={"Home"}
                                pathname={"/home"}
                                icon={<FaHome className='mr-3' />} />
                        </li>

                        <li>
                            <SidebarLink
                                label={"Create"}
                                pathname={"/create"}
                                icon={<MdOutlinePostAdd size={20} className='mr-2' />} />
                        </li>

                        <li>
                            <SidebarLink
                                label={"Profile"}
                                pathname={"/profile"}
                                icon={<FaUser className='mr-3' />} />
                        </li>

                        <li>
                            <SidebarLink
                                label={"Settings"}
                                pathname={"/settings"}
                                icon={<FaCog className='mr-3' />} />
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="mt-auto mb-4">
                <button
                    className={`flex items-center w-full p-3 rounded-lg ${hoverClass} focus:outline-none`}
                    onClick={() => dispatch(logout())}
                >
                    <FaSignOutAlt className="mr-3" />
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;