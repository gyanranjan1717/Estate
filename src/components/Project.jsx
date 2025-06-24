import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'
import {motion } from 'framer-motion'
const Project = () => {
    const [currentIndex,setcurrentIndex] = useState(0);
    const[cardsToShow,setcardsToShow] = useState(1);

    useEffect (()=>{
        const updateCardsToShow =()=>{
            if(window.innerWidth >=1024){
                setcardsToShow(projectsData.length);
            }else{
                setcardsToShow(1);
            }
        };
            updateCardsToShow();
            //whenever the screen size will change call this function so we add one evenlistener
            window.addEventListener('resize',updateCardsToShow);
            //code to remove the event listener
            return () =>{
                window.addEventListener('resize',updateCardsToShow);
            }

        
        
    },[])
    // this is for next button 
    const nextProject = () => {
        setcurrentIndex((prevIndex) => (prevIndex +1) % projectsData.length);
         
    }
    // this is for previous button 
    const prevProject = () => {
        setcurrentIndex((prevIndex) => (prevIndex === 0) ? projectsData.length -1 : prevIndex-1);
        }

  return (
    <motion.div
    initial = {{opacity:0,x:-200}} 
    transition={{duration:2}}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}}
    className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden'
    id='Project'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects 
            <span 
            className='underline underline-offset-4 decoration-1 under font-light'
            >Completed</span>
        </h1>
        <p 
        className=' text-center text-gray-500 mb-8 max-w-80 mx-auto
        '
        >Crafting Spaces, Building Legacies-Explore our Portfolio 
        </p>
        {/* we will add slider button  */}


        <div className='flex justify-end items-center mb-8'>
            <button onClick={prevProject}
            className='p-3 bg-gray-200 rounded mr-2 cursor-pointer ' aria-label='Previous Project'>
                <img src={assets.left_arrow} alt="Previous" />
            </button>
              <button onClick={nextProject}
              className='p-3 bg-gray-200 rounded mr-2  cursor-pointer' aria-label='Next Project'>
                <img src={assets.right_arrow} alt="Next" />
                
            </button>
        </div>
        {/* Project slider container  */}

        <div className='overflow-hidden'>
            <div className='flex gap-8 transition-transform duration-500 ease-in-outw'
            style={{transform:`translateX(-${(currentIndex*100)/cardsToShow}%)`}}
            // if the current index is 0 then we get 0% means it will not slide the slider 
            //  if ci = 1 and cts = 4 then 25% it will translatex-25% so the slider will move left by 25%

            >
                {projectsData.map((project,index)=>(
                    <div key={index}
                    className='relative flex-shrink-0 w-full sm:w-1/4'> 
                    <img src={project.image} alt={Project.title} 
                    className='w-full h-auto mb-14'/>
                    <div
                    className='absolute left-0 right-0 bottom-5 flex justify-center'
                    >
                        <div className=' inline-block bg-white 3-3/4 px-4 py-2 shadow-md'>
                            <h2 className='text-xl font-semibold text-gray-800'
                            >{project.title}</h2>
                            <p className='text-gray-500 text-sm'>
                                {project.price} <span className='px-1'>|</span> {project.location}

                            </p>
                        </div>

                    </div>
                    </div>
                ))}
            </div>
        </div>
    </motion.div>
  )
}

export default Project