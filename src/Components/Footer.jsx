import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
    return (
        <div className=' h-[12rem] min-[1024px]:h-[13rem] bg-[#0f1624] '>
            <div className='flex  h-[6rem] justify-around items-center  min-[1024px]:h-[8rem] min-[1024px]:space-x-36 min-[1440px]:space-x-48'>
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 22, duration: 1.5, ease: "easeInOut" }}
                    className='bg-gradient-to-l from-[#13ADC7] via-[#6978D1] to-[#945DD6] bg-clip-text w-fit text-transparent font-[poppins] text-[19px] font-bold min-[768px]:text-[22px] min-[1440px]:text-[26px]'>Feel free to contact me</motion.h1>
                <div className='flex  p-2 gap-3 justify-center items-center min-[768px]:gap-6 min-[1440px]:gap-10' >
                    <motion.a
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 22.5, duration: 1.5, ease: "easeInOut" }}
                        href="https://www.linkedin.com/in/dhruv-vayakul/" target='_blank'><i className="devicon-linkedin-plain text-white text-[25px] min-[768px]:text-[27px] cursor-pointer hover:text-[#929EB0] min-[1440px]:text-[29px] hover:duration-500 duration-500" ></i></motion.a>
                    <motion.a
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 23, duration: 1.5, ease: "easeInOut" }}
                        href="https://github.com/DhruvakaPhantom" target='_blank'><i className="devicon-github-original text-white text-[25px] min-[768px]:text-[27px] cursor-pointer hover:text-[#929EB0] min-[1440px]:text-[29px] hover:duration-500 duration-500"></i></motion.a>
                </div>
            </div>
            <div className=' h-[5rem]  flex justify-center items-center'>
                <motion.a
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 23.5, duration: 1.5, ease: "easeInOut" }}
                    href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=vayakuldhruv78@gmail.com" target='_blank' className='font-[poppins] text-white text-[18px]  hover:text-[#929EB0] min-[1440px]:text-[20px] duration-500'>vayakuldhruv78@gmail.com</motion.a>
            </div>
        </div>
    )
}

export default Footer
