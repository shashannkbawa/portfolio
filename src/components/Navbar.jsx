import React from 'react';
import { FiGithub } from 'react-icons/fi'

export const Navbar = () => {
    const NavbarItem = ({ title }) => {
        return (
            <li className='mx-8 cursor-pointer link-underline hover:text-[#C03869]'>
                {title}
            </li>
        );

    }

    const NavbarItems = ['About', 'Projects', 'Contact'];
    return (<div className=''>

        <div className='flex justify-between h-10'>
            <h1 className='ml-8 my-3 cursor-pointer'>logo</h1>
            <ul className='text-white list-none flex flex-row justify-center items-center my-3'>
                {NavbarItems.map((items) => (
                    <NavbarItem key={items} title={items} />
                ))}
            </ul>
            <div className='mr-8 my-3 cursor-pointer'>
                <a href='https://github.com/shashannkbawa'><FiGithub size={25} className='text-white' /></a>

            </div>
        </div>

    </div>
    )
};
