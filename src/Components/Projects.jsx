import React from 'react'
import chatApp from "../assets/chatApp.png"
import contactForm from "../assets/contactForm.png"
import pizzaJoint from "../assets/pizzaJoint.png"
import todoList from "../assets/todoList.png"


const Projects = () => {
  return (
    <div className='w-full h-max  projects flex flex-col justify-center bg-[#0f1624]'>
      <div className="content h-full  mb-5  flex flex-col">
        <h1 className='font-[poppins] text-white text-3xl font-medium mx-5 my-5  '>Projects</h1>
        <div className=" flex flex-col justify-center items-center gap-8 mt-4 " >
          <div className="boxes h-[24rem] w-[20rem]  rounded-xl bg-gradient-to-b from-[#945DD6] via-[#6978D1] to-[#13ADC7] flex justify-center items-center ">
            <div className="bg-[#0f1624]  h-[23.8rem] w-[19.8rem] rounded-xl flex flex-col justify-center space-y-5 ">
              <img src={pizzaJoint} alt="proj 1" className='h-[9rem] w-[17rem]  mx-auto' />
              <div className="texts">
                <h1 className='text-white font-[poppins] text-[1.4rem] mx-5 '>Pizza Joint</h1>
                <p className=' mx-5 text-[#929EB0] font-mono text-[18px] '>Pizza ordering with React, Tailwind, and Framer Motion.</p>
              </div>
              <div className="btns  flex  justify-around  items-center h-[4rem]">
                <a href="https://pizza-joint-lime.vercel.app/" target='_blank' className='text-white w-32 h-12 text-lg rounded-full bg-gradient-to-r from-[#945DD6] via-[#6978D1] to-[#13ADC7] font-[poppins] z-10 shadow-[0_0_20px_5px_rgba(0,178,255,0.35)]  flex justify-center items-center '>Live Preview</a>
                <a href="https://github.com/DhruvakaPhantom/pizzaJoint" className='text-white w-32 h-12 text-lg rounded-full font-[poppins]  border-2  flex justify-center items-center ' target='_blank'>GitHub</a>
              </div>
            </div>
          </div>

          <div className="boxes   h-[24rem] w-[20rem] rounded-xl bg-gradient-to-b from-[#945DD6] via-[#6978D1] to-[#13ADC7] flex justify-center items-center">
            <div className="bg-[#0f1624] h-[23.8rem] w-[19.8rem] rounded-xl flex flex-col justify-center space-y-5 ">
              <img src={chatApp} alt="proj 2" className='h-[9rem] w-[17rem] mx-auto ' />
              <div className="texts">
                <h1 className='text-white font-[poppins] text-[1.4rem] mx-5 '>Chat App</h1>
                <p className=' ml-5 text-[#929EB0] font-mono text-[18px] '>Chat app with React.js, Firebase, and Tailwind CSS.</p>
              </div>
              <div className="btns  flex  justify-around  items-center h-[4rem]">
                <a href="https://realtimechatapp-6ff5a.web.app/" target='_blank' className='text-white w-32 h-12 text-lg rounded-full bg-gradient-to-r from-[#945DD6] via-[#6978D1] to-[#13ADC7] font-[poppins] z-10 shadow-[0_0_20px_5px_rgba(0,178,255,0.35)]  flex justify-center items-center '>Live Preview</a>
                <a href="https://github.com/DhruvakaPhantom/realtimeChatApp" className='text-white w-32 h-12 text-lg rounded-full font-[poppins]  border-2  flex justify-center items-center' target='_blank'>GitHub</a>
              </div>
            </div>
          </div>

          <div className="boxes   h-[24rem] w-[20rem] rounded-xl bg-gradient-to-b from-[#945DD6] via-[#6978D1] to-[#13ADC7] flex justify-center items-center ">
            <div className="bg-[#0f1624] h-[23.8rem] w-[19.8rem] rounded-xl flex flex-col justify-center space-y-5 ">
              <img src={todoList} alt="proj 3" className='h-[9rem] w-[17rem] mx-auto ' />
              <div className="texts">
                <h1 className='text-white font-[poppins] text-[1.4rem] mx-5 '>Todo List</h1>
                <p className=' ml-5 text-[#929EB0] font-mono text-[18px]  '>Todo List with React.js,and Tailwind CSS.</p>
              </div>
              <div className="btns  flex  justify-around  items-center h-[4rem]">
                <a href="https://todo-list-six-kappa-77.vercel.app/" target='_blank' className='text-white w-32 h-12 text-lg rounded-full bg-gradient-to-r from-[#945DD6] via-[#6978D1] to-[#13ADC7] font-[poppins] z-10 shadow-[0_0_20px_5px_rgba(0,178,255,0.35)]  flex justify-center items-center '>Live Preview</a>
                <a href="https://github.com/DhruvakaPhantom/todoList" className='text-white w-32 h-12 text-lg rounded-full font-[poppins]  border-2  flex justify-center items-center ' target='_blank'>GitHub</a>
              </div>
            </div>
          </div>

          <div className="boxes   h-[24rem] w-[20rem] rounded-xl bg-gradient-to-b from-[#945DD6] via-[#6978D1] to-[#13ADC7] flex justify-center items-center ">
            <div className="bg-[#0f1624] h-[23.8rem] w-[19.8rem] rounded-xl flex flex-col justify-center space-y-5 ">
              <img src={contactForm} alt="proj 4" className='h-[9rem] w-[17rem] mx-auto ' />
              <div className="texts">
                <h1 className='text-white font-[poppins] text-[1.4rem] mx-5 '>Contact Form</h1>
                <p className=' ml-5 text-[#929EB0] font-mono text-[18px]'>Contact Form with React.js, Firebase, and Tailwind CSS.</p>
              </div>
              <div className="btns  flex  justify-around  items-center h-[4rem]">
                <a href="https://12grids-assignment-dhruv.netlify.app/" target='_blank' className='text-white w-32 h-12 text-lg rounded-full bg-gradient-to-r from-[#945DD6] via-[#6978D1] to-[#13ADC7] font-[poppins] z-10 shadow-[0_0_20px_5px_rgba(0,178,255,0.35)]  flex justify-center items-center'>Live Preview</a>
                <a href="https://github.com/DhruvakaPhantom/12gridsAssignment" className='text-white w-32 h-12 text-lg rounded-full font-[poppins]  border-2  flex justify-center items-center ' target='_blank'>GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
