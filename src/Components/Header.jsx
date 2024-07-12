import React from 'react'
import { Link } from 'react-scroll'

const Header = () => {

    return (
        <>
            <div className='  h-[4rem] flex  items-center justify-between px-2 '>
                <h1 className={`text-white font-bebas text-3xl `}>Dhruv.</h1>
                <a href="https://github.com/DhruvakaPhantom" target='_blank'><i className="devicon-github-original text-white text-[2rem] cursor-pointer "></i></a>
                {/* <Switch handleActive={handleActive} isActive={isActive} /> */}
            </div>
            <div className='flex justify-around items-center font-mono text-white text-[18px] '>
                <Link to="projects"
                    smooth={true}
                    offset={0}
                    duration={500}>
                    <p className='cursor-pointer hover:text-[#929EB0] '>Projects</p>
                </Link>
                <Link
                    to="skills"
                    smooth={true}
                    offset={0}
                    duration={500}>
                    <p className='cursor-pointer hover:text-[#929EB0] '>Technologies</p>
                </Link>
                <Link
                    to="about"
                    smooth={true}
                    offset={0}
                    duration={500}>
                    <p className='cursor-pointer hover:text-[#929EB0] '>About</p>
                </Link>
            </div>
        </>
    )
}

export default Header
