import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Project from './components/Project'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import { ToastContainer, toast } from 'react-toastify';
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer></ToastContainer>
   <Header></Header>
   <About></About>
    <Project></Project>
    <Testimonials></Testimonials>
    <Contact></Contact>
    <Footer></Footer>
  </div>
  )
}

export default App