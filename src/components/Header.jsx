import React from 'react'
import Navbar from './navbar'
import { motion } from 'framer-motion'
import headerImg from '../assets/header_img.png';

const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center
    flex items-center w-full overflow-hidden '
    style = { { backgroundImage: `url(${headerImg})` } }
    id='Header'
    > 
    {/* id help us when we click on home button then at that time this will bring to header section */}
    
   

    <motion.div 
    initial = {{opacity:0,y:100}} 
    transition={{duration:2}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    className='container text-center mx-auto py-4 px-6
    md:px-20 lg:px-32 text-white'>
        <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block
        max-w-3xl font-semibold pt-20'>Explore Homes that fit your dreams!</h2>
        <div className='space-x-6 mt-16 '>
            <a 
            href="#Project"
            className='border border-white px-8 py-3 rounded bg-gradient-to-r from-purple-500 to-pink-500'
            >Projects</a>
            <a href="#Contact"
            className='border border-white px-8 py-3 rounded bg-gradient-to-r from-purple-500 to-pink-500'
            
            >Contact Us</a>
        </div>
    </motion.div>
    </div>
  )
}

export default Header