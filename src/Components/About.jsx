import React from 'react'

const About = () => {
    return (
        <div className={`about h-full  w-full bg-[#0f1624]`}>

            <div className="content h-full  flex flex-col">
                <h1 className='font-[poppins] text-white text-3xl font-medium mx-5 my-5'>About Me</h1>
                <div className=' h-full mt-5 gap-[2rem] flex '>
                    <div className='dates  ml-5 w-[10rem] flex flex-col items-center'>
                        <p className='text-white font-[poppins] text-[1.4rem]  '>2024</p>
                        <p className='text-white font-[poppins] text-[1.4rem]  relative top-[9.2rem] '>2023</p>
                        <p className='text-white font-[poppins] text-[1.4rem] relative top-[23.4rem] '>2022</p>
                        <p className='text-white font-[poppins] text-[1.4rem]  relative top-[41.4rem] '>2021</p>
                    </div>
                    <div className='stick h-[48rem] mt-2 w-0 rounded-full border-2 border-white '>
                        <div className='circle-small bg-gradient-to-b from-[#945DD6] via-[#6978D1] to-[#13ADC7]  rounded-full  relative -left-2 bottom-1 z-50 h-[1rem] w-[1rem] shadow-[0_0_18px_2px_rgba(0,178,255,0.35)]'></div>
                        <div className='circle-small bg-gradient-to-b from-[#945DD6] via-[#6978D1] to-[#13ADC7]  rounded-full  relative -left-2 top-[10rem] z-50 h-[1rem] w-[1rem] shadow-[0_0_18px_2px_rgba(0,178,255,0.35)]  '></div>
                        <div className='circle-small bg-gradient-to-b from-[#945DD6] via-[#6978D1] to-[#13ADC7]  rounded-full  relative -left-2 top-[25.5rem] z-50 h-[1rem] w-[1rem] shadow-[0_0_18px_2px_rgba(0,178,255,0.35)]'></div>
                        <div className='circle-small bg-gradient-to-b from-[#945DD6] via-[#6978D1] to-[#13ADC7]  rounded-full  relative -left-2 top-[44.5rem] z-50 h-[1rem] w-[1rem] shadow-[0_0_18px_2px_rgba(0,178,255,0.35)] '></div>
                    </div>
                    <div className='desc space-y-[2.1rem]  mr-4 w-[35rem]  '>
                        <p className='text-[#929EB0] font-mono text-[1.2rem]'>Graduated from B.K. Birla College with a BSc in Computer Science, achieving a CGPA of 9.08.</p>
                        <p className='text-[#929EB0] font-mono text-[1.2rem] '>Learned React.js, Tailwind CSS, Google Firebase, and Framer Motion. Completed a web development course from AcmeGrade from February to March 2023.</p>
                        <p className='text-[#929EB0] font-mono text-[1.2rem]  '>Learned Python and MySQL via YouTube. Later, I was introduced to web development and started learning HTML, CSS, and JavaScript, building basic projects for practice.</p>
                        <p className='text-[#929EB0] font-mono text-[1.2rem] '>Took admission in B.K. Birla College, Kalyan, for a Bachelor's degree in Computer Science to enhance my skills and knowledge.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
