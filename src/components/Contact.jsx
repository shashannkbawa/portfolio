import contact from '../Images/contact.png'

import { SiFacebook, SiLinkedin, SiInstagram } from 'react-icons/si';
import { FaDev } from 'react-icons/fa'

import emailjs from 'emailjs-com'
import { init } from '@emailjs/browser';
init("user_5ebyVJIAhioPAlyHLXp3O");

import React, { useState } from 'react';

export const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = () => {
        console.log('hi')
        if (name && email && message) {
            const serviceId = 'service_q7spoo4';
            const templateId = 'template_juz5xqo';
            const userId = 'user_5ebyVJIAhioPAlyHLXp3O';
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }


    return <div className='h-screen bg-[#161c32]'>
        <h1 className='flex justify-center text-center text-4xl link-underline text-white'>Contact</h1>
        <div className='flex justify-evenly '>
            <div className='w-2/5 mb-5 pl-3 mr-5 mt-20'>
                <h1 className=' text-center text-white text-3xl my-14'>Want To <span className='text-[#C03869]'>Contact Me</span></h1>
                <div className='flex flex-col '  >
                    <input className='bg-transparent h-10 text-white border-2 border-white mb-5 pl-3 mr-5 font-normal' onChange={e => setName(e.target.value)} value={name} type='text' id='name' placeholder='Your Name..' />
                    <input className='bg-transparent h-10 text-white border-2 border-white mb-5 pl-3 mr-5 font-normal' onChange={e => setEmail(e.target.value)} value={email} type='email' id='email' placeholder='Your Email..' />
                    <input className='bg-transparent h-28 text-white border-2 border-white mb-5 pl-3 mr-5 font-normal' onChange={e => setMessage(e.target.value)} value={message} type='text' id='message' placeholder='Type Your Message Here !..' />
                    <button onClick={submit} className='bg-[#C03869] hover:bg-[#d32581] h-12 w-40 font-normal text-white rounded text-center ml-72 my-10'>Send</button>
                </div>

                <span className={`text-white flex justify-center ${emailSent ? 'visible' : 'invisible'}`}>Thank you for your message, I will be in touch in no time!</span>
            </div>


            <img className='w-180 h-180' src={contact} />
        </div>
        <div className=''>
            <h1 className=' text-center text-4xl font-normal text-white mt-10'>FIND ME ON</h1>
            <h1 className='text-center text-white mt-3'>Feel free to <span className='text-[#C03869]'>connect</span> with me</h1>
            <div className='flex justify-center flex-row my-10'>

                <a href='https://www.instagram.com/snow_stark._/?hl=en'><li className='bg-white  w-10 h-10 rounded-full flex items-center justify-center social glow-social'>
                    <SiInstagram fontSize={21} className=' text-[#C03869]'></SiInstagram>
                </li></a>
                <a href='https://dev.to/shashannkbawa'><li className='bg-white ml-6 w-10 h-10 rounded-full flex items-center justify-center social glow-social'>
                    <FaDev fontSize={21} className='text-[#C03869]'></FaDev>
                </li></a>
                <a href='https://www.facebook.com/profile.php?id=100050170221851'><li className='bg-white ml-6 w-10 h-10 rounded-full flex items-center justify-center social glow-social'>
                    <SiFacebook fontSize={21} className='text-[#C03869]'></SiFacebook>
                </li></a>
                <a href='https://www.linkedin.com/in/shashank-sharma-abvgiet/'><li className='bg-white ml-6 w-10 h-10 rounded-full flex items-center justify-center social glow-social'>
                    <SiLinkedin fontSize={21} className='text-[#C03869]'></SiLinkedin>
                </li></a>
            </div>

        </div>
    </div>;
}
