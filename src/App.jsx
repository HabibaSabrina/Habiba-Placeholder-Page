import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Countdown from 'react-countdown'
import { FaBeer, FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';

function App() {
  const renderer = ({ total, days, hours, minutes, seconds }) => {
    if (total) {
      return (
        <span className=' text-white grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-36 text-center mx-10 md:mx-64'>
          <h1 className='border-2 p-10 rounded-full hover:bg-green-500 '><span className='text-4xl'>{days}</span> <br></br> Days</h1>
          <h1 className='border-2 p-10 rounded-full hover:bg-green-500'><span className='text-4xl'>{hours}</span> <br></br> Hours</h1>
          <h1 className='border-2 p-10 rounded-full hover:bg-green-500'><span className='text-4xl'>{minutes}</span><br></br> Minutes</h1>
          <h1 className='border-2 p-10 rounded-full hover:bg-green-500'><span className='text-4xl'>{seconds}</span><br></br> Seconds</h1>
        </span>
      );
    } else {
      return <h1 className='text-white text-3xl'>Finished</h1>;
    }
  };


  return (
    <div className='bg-pagelanding py-10'>
      <div className='flex justify-between px-10'>
        <p className='text-white font-serif text-2xl'>TechAsync.</p>
        <div className=' flex gap-5'>
          <FaFacebook className='border-2 rounded-full text-3xl bg-white border-white'></FaFacebook>
          <FaTwitter className='border-2 rounded-full text-3xl bg-white border-white'></FaTwitter>
          <FaGithub className='border-2 rounded-full text-3xl bg-white border-white'></FaGithub>
        </div>
      </div>
      <div className='py-10'>
        <h1 className='animate-text bg-gradient-to-r from-teal-300 via-green-400 to-white bg-clip-text text-transparent text-5xl font-semibold py-5 text-center'>Coming Soon</h1>
        <div>
          <p className='text-center text-white'>Our website is under construction. Follow us for more update now!</p>
          <form className='text-center my-10 mb-20' action="">
            <input className='w-96 p-3 border-2 focus:text-white rounded-xl bg-transparent' placeholder='Your Email' type="text" />
            <button className='bg-green-500 hover:bg-green-600 p-3 px-8 font-semibold text-white rounded-xl mx-5 max-sm:mt-10'>Submit</button>
          </form>
        </div>
        <Countdown className='text-white text-center' date={Date.now() + 5000000000} renderer={renderer}>
        </Countdown>
      </div>
      <div className='text-center text-white mt-10'>
        <p className='text-xl font-semibold'>Contact</p>
        <p>codestation2023@gmail.com</p>
      </div>
    </div>
  )
}

export default App
