import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
    const [showMobileMenu,setshowMobileMenu] = useState(false);
    // whenever the mobile menu is visible then we have to prevent the website scrolling 
    useEffect(()=>{
        // whenever we see the change in mobile menu this will exceute the useeffect arrow function
        if(showMobileMenu){
            document.body.style.overflow = 'hidden' ; // this will stop the scrolling
            //when we go directly from mobile screen to desktop screen then this will prevent the scrolling so we use a return function 
            }
        else{
            document.body.style.overflow = 'auto' ; // allow scrolling
        }
        return () => {document.body.style.overflow = 'auto'};

    },
    [showMobileMenu] //this is dependency array 
    ) 
  return (
    <div className=" absolute top-0 left-0 w-full z-10 bg-transparent">
  <div className="container relative  mx-auto flex justify-between items-center py-4 px-6 md:px-10 lg:px-20 ">
    

    {/* Logo */}
    
    <a href="#Header" className='bg-gray-900 rounded-3xl fixed top-4 left-10 z-50 p-2 shadow-md  '>
    <img src={assets.logo} alt="Logo" className="w-24" />
    </a>
    

    {/* Nav Links */}
    <ul className="hidden  justify-center md:flex gap-7 text-red-950 font-medium self-center ">
      <a 
      href="#Header" 
      className="cursor-pointer hover:text-gray-300 px-4"
      >Home</a>
      <a 
      href="#About" 
      className="cursor-pointer hover:text-gray-300 px-4"
      >About</a>
      <a 
      href="#Project" 
      className="cursor-pointer hover:text-gray-300 px-4"
      >Project</a>
      <a 
      href="#Testimonials" 
      className="cursor-pointer hover:text-gray-300 px-4"
      >Testimonials</a>
    </ul>

    {/* Button */}
    <button 
    className="hidden md:block  text-white font-semibold
     px-6 py-2 rounded-full hover:bg-gray-800 transition
     cursor-pointer bg-gray-500 fixed top-4 right-10 z-50 p2 shadow-md ">
      Sign up
    </button>

    {/* menu icon for small screen */}

    <img src={assets.menu_icon} 
    onClick={() => {setshowMobileMenu(true)}}
    className='md:hidden w-7 cursor-pointer' alt="" />
  </div>

  {/* mobile menu that will be displable on mobile screen */}

  <div className={`md:hidden  ${ showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 
  overflow-hidden transition-all bg-amber-50
  `}>
    <div className='flex justify-end p-6 cursor-pointer'>
        <img src={assets.cross_icon} 
        onClick={()=>{setshowMobileMenu(false)}}
        className='w-6  ' alt="" />
    </div>
    <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg
    font-medium'>
        <a 
        onClick={()=>{setshowMobileMenu(false)}}
        href="#Header" 
        className='px-4 py-2 rounded-full inline-block'
        >Home</a>
        <a 
        onClick={()=>{setshowMobileMenu(false)}}
        href="#About" 
        className='px-4 py-2 rounded-full inline-block'
        >About</a>
        <a 
        onClick={()=>{setshowMobileMenu(false)}}
        href="#Contact" 
        className='px-4 py-2 rounded-full inline-block'
        >Contact</a>
        <a 
        onClick={()=>{setshowMobileMenu(false)}}
        href="#Testimonials" 
        className='px-4 py-2 rounded-full inline-block'
        >Testimonials</a>

    </ul>
  </div>
</div>

  )
}

export default Navbar