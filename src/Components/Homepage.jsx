import React from 'react'
import Header from './Header'
import { useState } from 'react';
import dhruv from "../assets/dhruv.jpeg"
import { motion } from 'framer-motion';

const Homepage = () => {
    // const [isActive, setIsActive] = useState(false);

    // const handleActive = () => {
    //     setIsActive((prevIsActive) => !prevIsActive);
    // };

    // const mode = isActive ? "🌑" : "☀️";
    return (
        <>
            <div className={`home   h-full min-[768px]:h-screen  bg-[#0f1624] `}>
                {/* ${mode === "🌑" ? "bg-[#0f1624]" : "bg-white"} */}
                <Header />
                <div className="content h-full flex flex-col items-center min-[768px]:flex-row min-[768px]:justify-center min-[768px]:items-start min-[768px]:mt-24  min-[768px]:px-8  min-[1024px]:mt-24 min-[1440px]:mt-32">
                    <div className='flex flex-col justify-center  w-[17rem]  h-[20rem] z-10  min-[425px]:w-[20rem] min-[768px]:w-[24rem]  min-[1024px]:w-[34rem] min-[1440px]:w-[40rem]'>
                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 3.5, duration: 1.5, ease: 'easeInOut' }}
                            className=' bg-gradient-to-l from-[#13ADC7] via-[#6978D1] to-[#945DD6] bg-clip-text w-fit text-transparent font-[poppins] text-[28px] font-bold min-[768px]:text-[32px] min-[1024px]:text-[34px]'>Hello, I'm Dhruv,</motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 4.2, duration: 1.5, ease: 'easeInOut' }}
                            className='font-[poppins] text-white text-[24px]  font-medium mt-1 min-[768px]:text-[28px] min-[1024px]:text-[32px]'>Front End Developer</motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 4.8, duration: 1.5, ease: 'easeInOut' }}
                            className='text-[#929EB0] font-mono mt-2 text-[16px] min-[768px]:text-[18px] min-[1024px]:text-[22px]'>Front-End Developer skilled in HTML, CSS, JavaScript, React.js, and Tailwind CSS. Passionate about creating responsive, user-friendly web applications.</motion.p>
                        <motion.a
                            initial={{ x: "-100vw" }}
                            animate={{ x: 0 }}
                            transition={{ delay: 7.2, duration: 2.5, ease: 'easeInOut' }}
                            href="https://drive.google.com/file/d/1N6EMEAIJyVmTRcBkMKKZfkRgmvVQrQTg/view?usp=drive_link" target='_blank' className='text-white w-[8rem] h-[2rem] text-[18px] p-5 rounded-full bg-gradient-to-r from-[#945DD6] via-[#6978D1] to-[#13ADC7] font-[poppins] z-10 shadow-[0_0_20px_5px_rgba(0,178,255,0.35)] mx-7  flex justify-center items-center min-[320px]:hidden min-[375px]:hidden min-[425px]:hidden min-[768px]:flex min-[768px]:mx-0 min-[768px]:mt-5 min-[1024px]:text-[20px] min-[1024px]:h-[3rem] min-[1024px]:cursor-pointer'>View CV</motion.a>
                    </div>
                    <div className='down-part  w-[17rem] mt-2 h-[20rem]  flex flex-col  justify-around px-2  min-[425px]:w-[20rem] min-[768px]:mt-0  min-[768px]:justify-center min-[768px]:items-center '>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 7, duration: 1.5, ease: 'easeInOut' }}
                            className='bg-gradient-to-r  from-[#945DD6] via-[#6978D1] to-[#13ADC7] h-[12.4rem] w-[12.4rem] rounded-full flex justify-center items-center mx-5 shadow-[0_7px_20px_5px_rgba(0,178,255,0.35)] z-10 min-[1024px]:h-[14.4rem] min-[1024px]:w-[14.4rem]'>
                            <img src={dhruv} alt="Dhruv" className=' h-[12rem] w-[12rem] rounded-full z-10 min-[1024px]:h-[14rem] min-[1024px]:w-[14rem]' />
                        </motion.div>
                        <motion.a
                            initial={{ x: "-100vw" }}
                            animate={{ x: 0 }}
                            transition={{ delay: 7.2, duration: 2.5, ease: 'easeInOut' }}
                            href="https://drive.google.com/file/d/1N6EMEAIJyVmTRcBkMKKZfkRgmvVQrQTg/view?usp=drive_link" target='_blank' className='text-white w-[8rem] h-[2rem] text-[18px] p-5 rounded-full bg-gradient-to-r from-[#945DD6] via-[#6978D1] to-[#13ADC7] font-[poppins] z-10 shadow-[0_0_20px_5px_rgba(0,178,255,0.35)] mx-7  flex justify-center items-center min-[768px]:hidden'>View CV</motion.a>
                    </div>

                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 5.5, duration: 2, ease: 'easeInOut' }}
                    className="circle-big h-[20rem] w-[20rem] absolute rounded-full top-[25rem] -left-[10rem] z-0 bg-gradient-to-b from-[#945DD6] via-[#6978D1] to-[#13ADC7] flex justify-center items-center min-[425px]:absolute  min-[425px]:-left-[8rem] min-[768px]:absolute min-[768px]:left-[20rem] min-[768px]:top-[16rem] min-[1024px]:h-[24rem] min-[1024px]:w-[24rem] min-[1024px]:absolute min-[1024px]:left-[30rem] min-[1024px]:top-[13rem] min-[1440px]:absolute min-[1440px]:left-[46rem] min-[1440px]:top-[15rem]">
                    <div className=' h-[19.8rem] bg-[#0f1624] w-[19.8rem]  rounded-full min-[1024px]:h-[23.7rem] min-[1024px]:w-[23.7rem]'></div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 6.2, duration: 2, ease: 'easeInOut' }}
                    className='circle-small bg-gradient-to-b from-[#945DD6] via-[#6978D1] to-[#13ADC7] absolute rounded-full top-[32rem] left-[11rem] z-0 h-[8rem] w-[8rem] shadow-[0_0_20px_5px_rgba(0,178,255,0.35)] min-[375px]:absolute min-[375px]:left-[12rem] min-[425px]:absolute  min-[425px]:left-[14rem] min-[768px]:absolute min-[768px]:left-[38rem] min-[768px]:top-[21rem] min-[1024px]:h-[10rem] min-[1024px]:w-[10rem] min-[1024px]:absolute min-[1024px]:left-[51rem] min-[1024px]:top-[22rem] min-[1440px]:absolute min-[1440px]:left-[67rem] min-[1440px]:top-[25rem]'></motion.div>
            </div>

        </>
    )
}

export default Homepage
