import React from 'react';

import { FiGithub } from 'react-icons/fi'
import { GiWolfHowl } from 'react-icons/gi'

import { Link } from "react-scroll";

export const Navbar = () => {

    return (<div  >

        <div className='flex justify-between h-10  '>
            <GiWolfHowl size={32} className='ml-8 my-3 cursor-pointer text-white' />
            <ul className=' text-white list-none flex flex-row justify-center items-center my-3'>

                <Link
                    activeClass="active"
                    to="About"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    <li className='mx-8  cursor-pointer link-underline hover:text-[#C03869]'>
                        About
                    </li>
                </Link>
                <Link
                    activeClass="active"
                    to="Projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    <li className='mx-8  cursor-pointer link-underline hover:text-[#C03869]'>
                        Projects
                    </li>
                </Link>
                <Link
                    activeClass="active"
                    to="Contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    <li className='mx-8  cursor-pointer link-underline hover:text-[#C03869]'>
                        Contact
                    </li>
                </Link>

            </ul>
            <div className='mr-8 my-3 cursor-pointer'>
                <a href='https://github.com/shashannkbawa'><FiGithub size={25} className='text-white' /></a>

            </div>
        </div>

    </div>
    )
};
