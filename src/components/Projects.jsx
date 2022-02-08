import relax from '../Images/relax.png'
import shortn from '../Images/shortn.png'
import shanks from '../Images/shanks.png'

import { SiReact, SiSolidity, SiTailwindcss, SiStyledcomponents } from 'react-icons/si'
import { AiFillApi } from 'react-icons/ai'

import React from 'react';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


export const Projects = () => {


    return (
        <div className='h-screen px-32 bg-[#161c32]'>
            <h1 className='flex justify-center text-4xl link-underline text-white'>Projects</h1>
            <div className=' mt-20 mx-0'>

                <Carousel showArrows={true} showIndicators={true} infiniteLoop={true} useKeyboardArrows={true} autoPlay={true} swipeable={true} showThumbs={false}>

                    <div
                        className=' flex justify-center items-center'>
                        <div className='flex flex-col pt-10 ml-28 -mr-20 mix-blend-screen text-left'>
                            <p className='flex flex-row flex-start text-sm  text-[#C03869]'>Blockchain, Cryptocurrency, Solidity</p>
                            <h1 className='right-0 ml-0 text-2xl my-10 text-white '>Shanks, for sending <br />Crypto around the world</h1>

                            <a href='https://shashannkbawa.github.io/Shanks-Web3.0/'><p className='font-normal text-left link-underline mt-10 text-white'>V I E W  P R O J E C T</p></a>
                            <div className='flex flex-start mx-0 mt-12'>
                                <div className='flex flex-col justify-center items-center mx-3 text-white'>
                                    <SiReact fontSize={28} className='text-white hover:text-[#C03869]'></SiReact>
                                    <p className='text-sm font-normal pt-2 text-white'>React</p>
                                </div>
                                <div className='flex flex-col justify-center items-center mx-2 text-white'>
                                    <SiSolidity fontSize={28} className='text-white hover:text-[#C03869]'></SiSolidity>
                                    <p className='text-sm font-normal pt-2'>Solidity</p>
                                </div>
                                <div className='flex flex-col justify-center mx-3 items-center text-white'>
                                    <SiTailwindcss fontSize={28} className='text-white hover:text-[#C03869]'></SiTailwindcss>
                                    <p className='text-sm font-normal pt-2'>TailwindCSS</p>
                                </div>
                            </div>

                        </div>
                        <div className='w-1/2 h-1/2 bg-[#5c00cd] right-0 mr-20 pr-10 flex justify-center'>
                            <img className='w-2/5 h-2/5 my-10 flex justify-center items-center rounded' src={shanks} />
                        </div>
                    </div>
                    <div className=' flex justify-center items-center' >
                        <div className='w-3/5 h-3/5 max-h-140 max-w-128 bg-[#3600d4] right-0 mr-20 pr-10 flex justify-center overflow-hidden '>
                            <img className='w-3/5 h-2/5 mt-10 overflow-hidden flex skew-x-3 justify-center items-center rounded-xl' src={shortn} />
                        </div>
                        <div className='flex flex-col pt-10 mr-32 -ml-32 mix-blend-screen text-left'>
                            <p className='flex flex-row flex-start text-sm text-[#C03869]'>API, Styled Components, Link Shortener</p>
                            <h1 className='right-0 ml-0 text-2xl my-10 text-white '>Shortly, for shortening <br />long links, in one click.</h1>

                            <a href='https://shorten101.netlify.app/'><p className='font-normal link-underline mt-10 text-white'>V I E W  P R O J E C T</p></a>
                            <div className='flex flex-start mx-0 mt-12'>
                                <div className='flex flex-col justify-center items-center mx-3 text-white'>
                                    <SiReact fontSize={28} className='text-white hover:text-[#C03869]'></SiReact>
                                    <p className='text-sm font-normal pt-2 text-white'>React</p>
                                </div>
                                <div className='flex flex-col justify-center items-center mx-2 text-white'>
                                    <SiStyledcomponents fontSize={28} className='text-white hover:text-[#C03869]'></SiStyledcomponents>
                                    <p className='text-sm font-normal pt-2'>Styled Components</p>
                                </div>
                                <div className='flex flex-col justify-center mx-3 items-center text-white'>
                                    <AiFillApi fontSize={28} className='text-white hover:text-[#C03869]'></AiFillApi>
                                    <p className='text-sm font-normal pt-2'>API</p>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className=' flex justify-center items-center'>
                        <div className='flex flex-col pt-10 ml-28 -mr-64 mix-blend-screen text-left '>
                            <p className='flex flex-row flex-start text-sm text-[#C03869]'>Chill, 3D Builder</p>
                            <h1 className='right-0 ml-0 text-2xl my-10 text-white '>Relax, for relaxing and <br />to enter into a different environment.</h1>

                            <a href='https://shashannkbawa.github.io/relax/'><p className='left-0 font-normal link-underline mt-10 text-white'>V I E W  P R O J E C T</p></a>
                            <div className='flex flex-start mx-0 mt-12'>
                                <div className='flex flex-col justify-center items-center mx-3 text-white '>
                                    <SiReact fontSize={28} className='text-white hover:text-[#C03869]'></SiReact>
                                    <p className='text-sm font-normal pt-2 text-white '>React</p>
                                </div>
                                <div className='flex flex-col justify-center items-center mx-2 text-white'>
                                    <SiStyledcomponents fontSize={28} className='text-white hover:text-[#C03869]'></SiStyledcomponents>
                                    <p className='text-sm font-normal pt-2'>Styled Components</p>
                                </div>

                            </div>

                        </div>
                        <div className='w-4/5 h-4/5 bg-[#5c00cd] right-0 mr-20 pr-10 flex justify-center overflow-hidden'>
                            <img className='w-4/5 h-5/5 my-10 -mr-96 flex justify-center items-center rounded' src={relax} />
                        </div>
                    </div>

                </Carousel>
            </div >
        </div>

    )
}

