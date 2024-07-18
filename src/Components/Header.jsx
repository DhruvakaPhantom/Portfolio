import React from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const Header = () => {

    return (
        <>
            <div className='  h-[4rem] flex  items-center justify-between px-3 min-[768px]:px-8  min-[1024px]:px-16 min-[1024px]:h-[6rem]'>
                <motion.a href=''
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    drag
                    dragConstraints={{
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }}
                    dragElastic={0.2}
                    className={`text-white font-bebas text-[25px] min-[768px]:text-[30px] min-[1024px]:text-[34px] cursor-pointer`}>Dhruv.</motion.a>
                <motion.a
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    href="https://github.com/DhruvakaPhantom" target='_blank'
                ><i className="devicon-github-original text-white text-[25px] cursor-pointer min-[768px]:text-[30px] min-[1024px]:text-[34px] hover:text-[#929EB0] duration-500"></i></motion.a>
                {/* <Switch handleActive={handleActive} isActive={isActive} /> */}
            </div>
            <div className='flex justify-around items-center font-mono text-white text-[16px] min-[768px]:text-[20px] min-[1024px]:text-[22px]'>
                <Link to="projects"
                    smooth={true}
                    offset={0}
                    duration={500}>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1, ease: 'easeInOut' }}
                        className='cursor-pointer hover:text-[#929EB0] duration-500'>Projects</motion.p>
                </Link>
                <Link
                    to="skills"
                    smooth={true}
                    offset={0}
                    duration={500}>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.4, ease: 'easeInOut' }}
                        className='cursor-pointer hover:text-[#929EB0] duration-500'>Technologies</motion.p>
                </Link>
                <Link
                    to="about"
                    smooth={true}
                    offset={0}
                    duration={500}>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.8, ease: 'easeInOut' }}
                        className='cursor-pointer hover:text-[#929EB0] duration-500'>About</motion.p>
                </Link>
            </div>
        </>
    )
}

export default Header
