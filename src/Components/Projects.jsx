import React from 'react'
import chatApp from "../assets/chatApp.png"
import contactForm from "../assets/contactForm.png"
import pizzaJoint from "../assets/pizzaJoint.png"
import todoList from "../assets/todoList.png"
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <div className=' h-max  projects flex flex-col justify-center bg-[#0f1624]'>
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className='font-[poppins] text-white text-[22px]  mx-4 my-2  min-[768px]:text-[28px] min-[768px]:mx-8'>Projects</motion.h1>
      <div className=" flex flex-col justify-center items-center gap-8 mt-4 min-[768px]:grid min-[768px]:grid-cols-2 min-[768px]:self-center min-[768px]:p-12 min-[768px]:gap-x-16 min-[1024px]:self-center min-[1024px]:p-12 min-[1024px]:gap-x-24  min-[1440px]:self-center min-[1440px]:p-16 min-[1440px]:gap-x-28" >

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
          className="boxes h-[24rem] w-[18rem]  rounded-xl bg-gradient-to-b from-[#945DD6] via-[#6978D1] to-[#13ADC7] flex justify-center items-center ">
          <div className="bg-[#0f1624]  h-[23.8rem] w-[17.8rem] rounded-xl flex flex-col justify-center space-y-5 ">
            <img src={pizzaJoint} alt="proj 1" className='h-[8rem] w-[16rem]  mx-auto' />
            <div className="texts">
              <h1 className='text-white font-[poppins] text-[20px] mx-4 '>Pizza Joint</h1>
              <p className='  text-[#929EB0] font-mono text-[17px] mx-4'>Pizza ordering with React, Tailwind, and Framer Motion.</p>
            </div>
            <div className="btns  flex  justify-around  items-center h-[4rem]">
              <a href="https://pizza-joint-lime.vercel.app/" target='_blank' className='text-white w-[8rem] h-[3rem] text-[16px]  rounded-full bg-gradient-to-r from-[#945DD6] via-[#6978D1] to-[#13ADC7] font-[poppins] z-10 shadow-[0_0_20px_5px_rgba(0,178,255,0.35)]  flex justify-center items-center  '>Live Preview</a>
              <a href="https://github.com/DhruvakaPhantom/pizzaJoint" className='text-white w-[8rem] h-[3rem] text-[16px] rounded-full font-[poppins]  border-2  flex justify-center items-center ' target='_blank'>GitHub</a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
          className="boxes h-[24rem] w-[18rem] rounded-xl bg-gradient-to-b from-[#945DD6] via-[#6978D1] to-[#13ADC7] flex justify-center items-center">
          <div className="bg-[#0f1624] h-[23.8rem] w-[17.8rem] rounded-xl flex flex-col justify-center space-y-5 ">
            <img src={chatApp} alt="proj 2" className='h-[8rem] w-[16rem] mx-auto ' />
            <div className="texts">
              <h1 className='text-white font-[poppins] text-[20px] mx-4 '>Chat App</h1>
              <p className='  text-[#929EB0] font-mono text-[17px] mx-4'>Chat app with React.js, Firebase, and Tailwind CSS. Chat easily</p>
            </div>
            <div className="btns  flex  justify-around  items-center h-[4rem]">
              <a href="https://realtimechatapp-6ff5a.web.app/" target='_blank' className='text-white  rounded-full bg-gradient-to-r from-[#945DD6] via-[#6978D1] to-[#13ADC7] font-[poppins] z-10 shadow-[0_0_20px_5px_rgba(0,178,255,0.35)]  flex justify-center items-center w-[8rem] h-[3rem] text-[16px]'>Live Preview</a>
              <a href="https://github.com/DhruvakaPhantom/realtimeChatApp" className='text-white  rounded-full font-[poppins]  border-2  flex justify-center items-center w-[8rem] h-[3rem] text-[16px]' target='_blank'>GitHub</a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
          className="boxes h-[24rem] w-[18rem]  rounded-xl bg-gradient-to-b from-[#945DD6] via-[#6978D1] to-[#13ADC7] flex justify-center items-center ">
          <div className="bg-[#0f1624] h-[23.8rem] w-[17.8rem] rounded-xl flex flex-col justify-center space-y-5 ">
            <img src={todoList} alt="proj 3" className='h-[8rem] w-[16rem] mx-auto ' />
            <div className="texts">
              <h1 className='text-white font-[poppins] text-[20px] mx-4'>Todo List</h1>
              <p className='  text-[#929EB0] font-mono   text-[17px] mx-4'>Todo List with React.js,and Tailwind CSS. Add your tasks.</p>
            </div>
            <div className="btns  flex  justify-around  items-center h-[4rem]">
              <a href="https://todo-list-six-kappa-77.vercel.app/" target='_blank' className='text-white  rounded-full bg-gradient-to-r from-[#945DD6] via-[#6978D1] to-[#13ADC7] font-[poppins] z-10 shadow-[0_0_20px_5px_rgba(0,178,255,0.35)]  flex justify-center items-center  w-[8rem] h-[3rem] text-[16px]'>Live Preview</a>
              <a href="https://github.com/DhruvakaPhantom/todoList" className='text-white  rounded-full font-[poppins]  border-2  flex justify-center items-center  w-[8rem] h-[3rem] text-[16px]' target='_blank'>GitHub</a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
          className="boxes   h-[24rem] w-[18rem]   rounded-xl bg-gradient-to-b from-[#945DD6] via-[#6978D1] to-[#13ADC7] flex justify-center items-center ">
          <div className="bg-[#0f1624] h-[23.8rem] w-[17.8rem] rounded-xl flex flex-col justify-center space-y-5 ">
            <img src={contactForm} alt="proj 4" className='h-[8rem] w-[16rem] mx-auto ' />
            <div className="texts">
              <h1 className='text-white font-[poppins]  text-[20px] mx-4'>Contact Form</h1>
              <p className='  text-[#929EB0] font-mono text-[17px] mx-4'>Contact Form with React.js, Firebase, and Tailwind CSS.</p>
            </div>
            <div className="btns  flex  justify-around  items-center h-[4rem]">
              <a href="https://12grids-assignment-dhruv.netlify.app/" target='_blank' className='text-white  rounded-full bg-gradient-to-r from-[#945DD6] via-[#6978D1] to-[#13ADC7] font-[poppins] z-10 shadow-[0_0_20px_5px_rgba(0,178,255,0.35)]  flex justify-center items-center  w-[8rem] h-[3rem] text-[16px]'>Live Preview</a>
              <a href="https://github.com/DhruvakaPhantom/12gridsAssignment" className='text-white  rounded-full font-[poppins]  border-2  flex justify-center items-center  w-[8rem] h-[3rem] text-[16px]' target='_blank'>GitHub</a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>

  )
}

export default Projects
