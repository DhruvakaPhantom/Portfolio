import React from 'react'
import Header from './Header'
import { useState } from 'react';
import dhruv from "../assets/dhruv.jpeg"

const Homepage = () => {
    // const [isActive, setIsActive] = useState(false);

    // const handleActive = () => {
    //     setIsActive((prevIsActive) => !prevIsActive);
    // };

    // const mode = isActive ? "🌑" : "☀️";
    return (
        <>
            <div className={`home w-full  h-screen  bg-[#0f1624]`}>
                {/* ${mode === "🌑" ? "bg-[#0f1624]" : "bg-white"} */}
                <Header />
                <div className="content h-full flex flex-col items-center">
                    <div className='flex flex-col justify-center  w-[17rem]  h-[20rem] z-10 '>
                        <h2 className='bg-gradient-to-l from-[#13ADC7] via-[#6978D1] to-[#945DD6] bg-clip-text w-fit text-transparent font-[poppins] text-[28px] font-bold '>Hello, I'm Dhruv,</h2>
                        <p className='font-[poppins] text-white text-[22px]  font-medium mt-1 '>Front End Developer</p>
                        <p className='text-[#929EB0] font-mono mt-5 text-lg '>Front-End Developer skilled in HTML, CSS, JavaScript, React.js, and Tailwind CSS. Passionate about creating responsive, user-friendly web applications.</p>
                    </div>
                    <div className='down-part  w-[20rem] mt-2 h-[20rem]  flex flex-col gap-5  px-2  '>
                        <div className='bg-gradient-to-r  from-[#945DD6] via-[#6978D1] to-[#13ADC7] h-[13.2rem] w-[13.2rem] rounded-full flex justify-center items-center mx-5 shadow-[0_7px_20px_5px_rgba(0,178,255,0.35)] z-10 '>
                            <img src={dhruv} alt="Dhruv" className=' h-52 w-52 rounded-full z-10 ' />
                        </div>
                        <a href="https://drive.google.com/file/d/1N6EMEAIJyVmTRcBkMKKZfkRgmvVQrQTg/view?usp=drive_link" target='_blank' className='text-white w-36 h-12 text-xl rounded-full bg-gradient-to-r from-[#945DD6] via-[#6978D1] to-[#13ADC7] font-[poppins] z-10 shadow-[0_0_20px_5px_rgba(0,178,255,0.35)] mx-7 mt-10 flex justify-center items-center'>View CV</a>
                    </div>

                </div>
                <div className="circle-big h-[27rem] w-[27rem] absolute rounded-full top-[24rem] -left-[14rem] z-0 bg-gradient-to-b from-[#945DD6] via-[#6978D1] to-[#13ADC7] flex justify-center items-center  ">
                    <div className=' h-[26.8rem] bg-[#0f1624] w-[26.8rem]  rounded-full '></div>
                </div>
                <div className='circle-small bg-gradient-to-b from-[#945DD6] via-[#6978D1] to-[#13ADC7] absolute rounded-full top-[30rem] left-[11rem] z-0 h-[10rem] w-[10rem] shadow-[0_0_20px_5px_rgba(0,178,255,0.35)]'></div>
            </div>

        </>
    )
}

export default Homepage
