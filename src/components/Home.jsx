import React from 'react';
import { Typewriter } from 'react-simple-typewriter'


export const Home = () => {
    return (
        <div className='p-0 m-0 h-screen ' >
            <div className='text-white text-left ml-40 my-20 text-5xl'>
                <h1>Hello World,</h1>
                <br />
                <h1>I'm <span className=' text-[#C03869]'>Shashank Sharma</span></h1>
                <div className='text-2xl'>
                    (<Typewriter

                        words={['Frontend Dev', 'Backend Dev', 'UI/UX Designer', 'More to gain']}
                        loop={0}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={100}
                        delaySpeed={1500}


                    />)
                </div>
            </div>

        </div > // max-w bg-[#161c32]
    )
};
