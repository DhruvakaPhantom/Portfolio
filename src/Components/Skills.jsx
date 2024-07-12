import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';


const Skills = () => {
    return (
        <div className={`w-full skills  h-screen bg-[#0f1624]`}>
            <div className="content h-full  flex flex-col ">
                <h1 className='font-[poppins] text-white text-3xl font-medium mx-5 my-5 '>Technologies</h1>
                <div className='flex  flex-col justify-center items-center  h-[50rem]'>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
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
                        className="mySwiper"
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                    >
                        <SwiperSlide className='text-white flex flex-col justify-center items-center text-center '>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className='h-[10rem] w-[10rem] ' />
                            <p className='text-white font-[poppins] text-2xl mt-5 '>HTML 5</p>
                        </SwiperSlide>
                        <SwiperSlide className='text-white flex flex-col justify-center items-center h-[20rem]  w-[30rem]'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className='h-[10rem] w-[10rem] ' />
                            <p className='text-white font-[poppins] text-2xl mt-5 '>CSS 3</p>
                        </SwiperSlide>
                        <SwiperSlide className='text-white flex flex-col justify-center items-center h-[20rem] w-[30rem]'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className='h-[10rem] w-[10rem] ' />
                            <p className='text-white font-[poppins] text-2xl mt-5 '>JavaScript</p>
                        </SwiperSlide>
                        <SwiperSlide className='text-white flex flex-col justify-center items-center h-[20rem]  w-[30rem]'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className='h-[10rem] w-[10rem] ' />
                            <p className='text-white font-[poppins] text-2xl mt-5 '>React Js</p>
                        </SwiperSlide>
                        <SwiperSlide className='text-white flex flex-col justify-center items-center h-[20rem] w-[30rem]'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className='h-[10rem] w-[10rem] ' />
                            <p className='text-white font-[poppins] text-2xl mt-5 '>Tailwind Css</p>
                        </SwiperSlide>
                        <SwiperSlide className='text-white flex flex-col justify-center items-center h-[20rem]  w-[30rem]'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" className='h-[10rem] w-[10rem] ' />
                            <p className='text-white font-[poppins] text-2xl mt-5 '>Firebase</p>
                        </SwiperSlide>
                        <SwiperSlide className='text-white flex flex-col justify-center items-center h-[20rem]  w-[30rem]'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className='h-[10rem] w-[10rem] ' />
                            <p className='text-white font-[poppins] text-2xl mt-5 '>Python</p>
                        </SwiperSlide>
                        <SwiperSlide className='text-white flex flex-col justify-center items-center h-[20rem]  w-[30rem]'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" className='h-[10rem] w-[10rem] ' />
                            <p className='text-white font-[poppins] text-2xl mt-5 '>MySql</p>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Skills
