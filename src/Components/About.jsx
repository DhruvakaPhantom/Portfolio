import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <div className={`about h-full  bg-[#0f1624]`}>
            <div className="content h-full  flex flex-col">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 13, duration: 1.5, ease: 'easeInOut' }}
                    className='font-[poppins] text-white text-[22px] mx-4 my-2 min-[768px]:text-[28px] min-[768px]:mx-8'>About Me</motion.h1>
                <div className=' h-full mt-5 flex min-[768px]:justify-center'>
                    <div className='dates  w-28 flex flex-col items-center  min-[768px]:w-[10rem]  min-[1440px]:w-[12rem]'>
                        <motion.p
                            initial={{ x: "-100vw" }}
                            animate={{ x: 0 }}
                            transition={{ delay: 20.5, duration: 1.5, ease: 'easeInOut' }}
                            className='text-white font-[poppins] text-[20px] min-[320px]:relative min-[320px]:top-[0.1rem] min-[768px]:text-[22px] min-[1440px]:text-[26px]'>2024</motion.p>
                        <motion.p
                            initial={{ x: "-100vw" }}
                            animate={{ x: 0 }}
                            transition={{ delay: 19, duration: 1.5, ease: 'easeInOut' }}
                            className='text-white font-[poppins] text-[20px] min-[320px]:relative min-[320px]:top-[12.8rem] min-[375px]:relative min-[375px]:top-[9.2rem] min-[425px]:relative min-[425px]:top-[7.5rem] min-[768px]:relative min-[768px]:top-[7.2rem] min-[768px]:text-[22px] min-[1440px]:text-[26px] min-[1440px]:relative min-[1440px]:top-[7.8rem]'>2023</motion.p>
                        <motion.p
                            initial={{ x: "-100vw" }}
                            animate={{ x: 0 }}
                            transition={{ delay: 17.5, duration: 1.5, ease: 'easeInOut' }}
                            className='text-white font-[poppins] text-[20px] min-[320px]:relative min-[320px]:top-[34.5rem] min-[375px]:relative min-[375px]:top-[23.8rem] min-[425px]:relative min-[425px]:top-[20rem] min-[768px]:text-[22px] min-[768px]:relative min-[768px]:top-[16.5rem] min-[1440px]:text-[26px] min-[1440px]:relative min-[1440px]:top-[17.5rem]'>2022</motion.p>
                        <motion.p
                            initial={{ x: "-100vw" }}
                            animate={{ x: 0 }}
                            transition={{ delay: 16, duration: 1.5, ease: 'easeInOut' }}
                            className='text-white font-[poppins] text-[20px] min-[320px]:relative min-[320px]:top-[57.8rem] min-[375px]:relative min-[375px]:top-[40rem] min-[425px]:relative min-[425px]:top-[34.5rem] min-[768px]:text-[22px] min-[768px]:relative min-[768px]:top-[27.5rem] min-[1440px]:text-[26px] min-[1440px]:relative min-[1440px]:top-[29.5rem]'>2021</motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 13.5, duration: 1.5, ease: 'easeInOut' }}
                        className='stick h-[64.2rem] mt-2 w-0 rounded-full border-2 border-white min-[375px]:h-[46.2rem] min-[425px]:h-[40.5rem] min-[768px]:h-[34.6rem] min-[1440px]:h-[37.5rem]'>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 15.5, duration: 1, ease: 'easeInOut' }}
                            className='circle-small bg-gradient-to-b from-[#945DD6] via-[#6978D1] to-[#13ADC7]  rounded-full z-50 shadow-[0_0_18px_2px_rgba(0,178,255,0.35)] h-[1rem] w-[1rem] relative right-[0.5rem] bottom-[0.2rem]'></motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 15, duration: 1, ease: 'easeInOut' }}
                            className='circle-small bg-gradient-to-b from-[#945DD6] via-[#6978D1] to-[#13ADC7]  rounded-full  z-50 shadow-[0_0_18px_2px_rgba(0,178,255,0.35)] h-[1rem] w-[1rem] relative right-[0.5rem] top-[13.5rem] min-[375px]:relative min-[375px]:top-[9.8rem] min-[425px]:relative min-[425px]:top-[8rem] min-[768px]:relative min-[768px]:top-[8.2rem] min-[1440px]:relative min-[1440px]:top-[9.2rem]'></motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 14.5, duration: 1, ease: 'easeInOut' }}
                            className='circle-small bg-gradient-to-b from-[#945DD6] via-[#6978D1] to-[#13ADC7]  rounded-full  z-50 shadow-[0_0_18px_2px_rgba(0,178,255,0.35)] h-[1rem] w-[1rem] relative right-[0.5rem] top-[36rem] min-[375px]:relative min-[375px]:top-[25.2rem] min-[425px]:relative min-[425px]:top-[21.6rem] min-[768px]:relative min-[768px]:top-[18.5rem] min-[1440px]:relative min-[1440px]:top-[20.5rem]'></motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 14, duration: 1, ease: 'easeInOut' }}
                            className='circle-small bg-gradient-to-b from-[#945DD6] via-[#6978D1] to-[#13ADC7]  rounded-full  z-50 shadow-[0_0_18px_2px_rgba(0,178,255,0.35)] h-[1rem] w-[1rem] relative right-[0.5rem] top-[60.2rem] min-[375px]:top-[42.4rem] min-[425px]:relative min-[425px]:top-[37rem] min-[768px]:relative min-[768px]:top-[30.5rem] min-[1440px]:relative min-[1440px]:top-[33.8rem]'></motion.div>
                    </motion.div>
                    <div className='desc  w-56 min-[375px]:w-[22rem] space-y-8 flex flex-col items-center px-6  min-[768px]:w-[32rem] min-[768px]:space-y-16 min-[1440px]:w-[35rem]'>
                        <motion.p
                            initial={{ x: "100vw" }}
                            animate={{ x: 0 }}
                            transition={{ delay: 21.5, duration: 1.5, ease: 'easeInOut' }}
                            className='text-[#929EB0] font-mono text-[1.2rem] min-[1440px]:text-[22px]'>Graduated from B.K. Birla College with a BSc in Computer Science, achieving a CGPA of 9.08.</motion.p>
                        <motion.p
                            initial={{ x: "100vw" }}
                            animate={{ x: 0 }}
                            transition={{ delay: 20, duration: 1.5, ease: 'easeInOut' }}
                            className='text-[#929EB0] font-mono text-[1.2rem]  min-[1440px]:text-[22px]'>Learned React.js, Tailwind CSS, Google Firebase, and Framer Motion. Completed a web development course from AcmeGrade from February to March 2023.</motion.p>
                        <motion.p
                            initial={{ x: "100vw" }}
                            animate={{ x: 0 }}
                            transition={{ delay: 18.5, duration: 1.5, ease: 'easeInOut' }}
                            className='text-[#929EB0] font-mono text-[1.2rem]   min-[1440px]:text-[22px]'>Learned Python and MySQL via YouTube. Later, I was introduced to web development and started learning HTML, CSS, and JavaScript, building basic projects for practice.</motion.p>
                        <motion.p
                            initial={{ x: "100vw" }}
                            animate={{ x: 0 }}
                            transition={{ delay: 17, duration: 1.5, ease: 'easeInOut' }}
                            className='text-[#929EB0] font-mono text-[1.2rem]  min-[1440px]:text-[22px]'>Took admission in B.K. Birla College, Kalyan, for a Bachelor's degree in Computer Science to enhance my skills and knowledge.</motion.p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About