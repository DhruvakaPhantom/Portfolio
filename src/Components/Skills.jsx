import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

const Skills = () => {

    const [swiperInitialized, setSwiperInitialized] = useState(false)
    const delayInSeconds = 14.8;

    useEffect(() => {
        const timer = setTimeout(() => {
            setSwiperInitialized(true);
        }, delayInSeconds * 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={` skills  h-screen bg-[#0f1624]`}>
            <div className="content h-full  flex flex-col ">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 14, duration: 1.5, ease: 'easeInOut' }}
                    className='font-[poppins] text-white text-[22px]  mx-4 my-2  min-[768px]:text-[28px] min-[768px]:mx-8'>Technologies</motion.h1>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: delayInSeconds + 0.8, duration: 1.5, ease: 'easeInOut' }}
                    className='flex  flex-col justify-center items-center  h-[50rem]'>
                    {swiperInitialized && (
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            loop={true}
                            initialSlide={0}
                            slidesPerView={'auto'}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            pagination={true}
                            modules={[EffectCoverflow, Pagination, Autoplay]}
                            className="mySwiper h-[20rem] w-[20rem] min-[1440px]:h-[25rem] min-[1440px]:w-[25rem]"
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: true,
                            }}
                        >
                            <SwiperSlide className='text-white flex flex-col justify-center items-center text-center h-[20rem] w-[20rem] min-[1440px]:h-[25rem] min-[1440px]:w-[25rem]'>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className='h-[10rem] w-[10rem] ' />
                                <p className='text-white font-[poppins] text-2xl mt-5 '>HTML 5</p>
                            </SwiperSlide>
                            <SwiperSlide className='text-white flex flex-col justify-center items-center h-[20rem]  w-[20rem] min-[1440px]:h-[25rem] min-[1440px]:w-[25rem]'>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className='h-[10rem] w-[10rem] ' />
                                <p className='text-white font-[poppins] text-2xl mt-5 '>CSS 3</p>
                            </SwiperSlide>
                            <SwiperSlide className='text-white flex flex-col justify-center items-center h-[20rem] w-[20rem] min-[1440px]:h-[25rem] min-[1440px]:w-[25rem]'>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className='h-[10rem] w-[10rem] ' />
                                <p className='text-white font-[poppins] text-2xl mt-5 '>JavaScript</p>
                            </SwiperSlide>
                            <SwiperSlide className='text-white flex flex-col justify-center items-center h-[20rem]  w-[20rem] min-[1440px]:h-[25rem] min-[1440px]:w-[25rem]'>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className='h-[10rem] w-[10rem] ' />
                                <p className='text-white font-[poppins] text-2xl mt-5 '>React Js</p>
                            </SwiperSlide>
                            <SwiperSlide className='text-white flex flex-col justify-center items-center h-[20rem] w-[20rem] min-[1440px]:h-[25rem] min-[1440px]:w-[25rem]'>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className='h-[10rem] w-[10rem] ' />
                                <p className='text-white font-[poppins] text-2xl mt-5 '>Tailwind Css</p>
                            </SwiperSlide>
                            <SwiperSlide className='text-white flex flex-col justify-center items-center h-[20rem]  w-[20rem] min-[1440px]:h-[25rem] min-[1440px]:w-[25rem]'>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" className='h-[10rem] w-[10rem] ' />
                                <p className='text-white font-[poppins] text-2xl mt-5 '>Firebase</p>
                            </SwiperSlide>
                            <SwiperSlide className='text-white flex flex-col justify-center items-center h-[20rem]  w-[20rem] min-[1440px]:h-[25rem] min-[1440px]:w-[25rem]'>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className='h-[10rem] w-[10rem] ' />
                                <p className='text-white font-[poppins] text-2xl mt-5 '>Python</p>
                            </SwiperSlide>
                            <SwiperSlide className='text-white flex flex-col justify-center items-center h-[20rem]  w-[20rem] min-[1440px]:h-[25rem] min-[1440px]:w-[25rem]'>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" className='h-[10rem] w-[10rem] ' />
                                <p className='text-white font-[poppins] text-2xl mt-5 '>MySql</p>
                            </SwiperSlide>
                        </Swiper>
                    )}
                </motion.div>
            </div>
        </div>
    )
}

export default Skills
