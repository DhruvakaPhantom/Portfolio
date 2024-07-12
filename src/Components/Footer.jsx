import React from 'react'


const Footer = () => {
    return (
        <div className='w-full  h-[12rem]  bg-[#0f1624]'>
            <div className='flex  h-[6rem] justify-around items-center'>
                <h1 className='bg-gradient-to-l from-[#13ADC7] via-[#6978D1] to-[#945DD6] bg-clip-text w-fit text-transparent font-[poppins] text-[20px] font-bold '>Feel free to contact me</h1>
                <div className='flex  p-2 gap-5 justify-center items-center'>
                    <a href="https://www.linkedin.com/in/dhruv-vayakul/" target='_blank'><i className="devicon-linkedin-plain text-white text-[2rem] cursor-pointer" ></i></a>
                    <a href="https://github.com/DhruvakaPhantom" target='_blank'><i className="devicon-github-original text-white text-[2rem] cursor-pointer "></i></a>
                </div>
            </div>
            <div className=' h-[6rem]  flex justify-center items-center'>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=vayakuldhruv78@gmail.com" target='_blank' className='font-[poppins] text-white text-[18px]  '>vayakuldhruv78@gmail.com</a>
            </div>
        </div>
    )
}

export default Footer
