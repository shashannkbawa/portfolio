import React from 'react';
import p1 from '../Images/p1.png'


export const About = () => {
    return (<><h1 className='flex justify-center text-4xl link-underline text-white bg-[#161c32]'>About</h1>
        <div className='text-white bg-[#161c32] flex justify-evenly py-10 h-screen items-center '>
            <div className=' rounded-full'>
                <img src={p1} />

            </div>
            <div className='mt-18 w-2/5 text-left border-2 pl-10 py-10 '>
                <h1 className='text-3xl '>Let me <span className='text-[#C03869]'>Introduce </span>you</h1>
                <p className='mt-14'> So, my relationship with programming is just like a normal relationship, we fight(bugs and errors) , we care (deployment) <br />
                    And we love each other. It helped me various field.</p>
                <p className='my-5'>I'm fluent in <span className='text-[#C03869] italic'> Web Design, Web Develpoment.</span></p>
                <p className='my-5'>My field of interest is <span className='text-[#C03869] italic'>Web Technologies and Products. </span> <br />
                    And usually I work with <span className='text-[#C03869] italic'>Mordern Javascript Frameworks</span> like <span className='text-[#C03869] italic'>React.js </span>for developing new products.</p>


            </div>
        </div>
    </>
    )
};
