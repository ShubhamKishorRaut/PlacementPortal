import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate =useNavigate();
    const[sign,setSign]=useState(' ')
    
      const scrollToTop = () => {
         window.scrollTo({
            top:0,
            behavior:'smooth'
         })
         
      }
    
      const login = () =>
      {
         navigate('/login')
      }

     const signUp = () =>
{
       navigate('/signup')
}
  return (
    <div className='max-h-screen relative'>
        <nav className='flex flex-row bg-gray-900 h-24 text-white fixed'>
       <p className='py-8 px-28 text-3xl ml-20 mr-14 font-semibold '>Shubham</p>
       <ul className='flex flex-row justify-between py-9 px-28  '>
        <li className='size-5 mx-10 ml-96 text-xl hover:opacity-100 cursor-pointer'><button onClick={scrollToTop}>Home</button></li>
        <li className='size-5 mx-10 text-xl opacity-60 hover:opacity-100 cursor-pointer'>Features</li>
        <li className='size-5 mx-10 text-xl opacity-60 hover:opacity-100 cursor-pointer'>Pricing</li>
        <li className='size-5 mx-10 text-xl opacity-60 hover:opacity-100 cursor-pointer'>Contact</li>
        <li className='size-5 mx-10 text-xl opacity-60 hover:opacity-100 cursor-pointer'><button onClick={login}>Login</button></li>
        <li className='size-5 mx-10 text-xl opacity-60 hover:opacity-100 cursor-pointer'><button onClick={signUp}>SignUp</button></li>
       </ul>
       </nav>
       <div className='flex flex-row '>
         <div className='flex flex-col min-h-svh'>
            <p className='text-2xl text-blue-600 font-bold px-28 ml-20 mt-48'>PLACEMENT PORTAL</p>
            <h1 className='text-5xl px-28 ml-20 mt-8 font-semibold opacity-80'>Comprehensive and effective <br/>Placement Portal</h1>
            <p className='text-2xl px-28 ml-20 mt-6 font-medium opacity-60 '>Where the appropriate set of opportunities<br/>meet the best collection of skills.</p>
            <button className='py-3 px-6 bg-blue-500 text-white text-xl w-60 ml-48 mt-8 rounded-3xl'>Contact Us For More</button>
         </div>
         <div className='ml-40 w-4/12 border-2 border-black bg-landing bg-cover'>
         </div>
       </div>
       <div className=' mt-16 h-64 bg-gray-900 flex flex-col items-center '>
           <p className='text-white text-2xl font-semibold mt-10'>
           Drapcode has changed the way colleges recruit for...
           </p>
           <div className='mt-10'>
              <ul className='flex flex-row items-center justify-between'>
                <li className='text-black h-24 w-72 bg-white mr-32 text-4xl font-semibold py-2 text-center'>45000+<br/><span className='text-2xl' >Student</span></li>
                <li className='text-black h-24 w-60 bg-white mr-32 text-4xl font-semibold py-2 text-center'>312+<br/> <span className='text-2xl' >College</span></li>
                <li className='text-black h-24 w-60 bg-white mr-32 text-4xl font-semibold py-2 text-center'>11280+<br/><span className='text-2xl' >Employers</span></li>
              </ul>
           </div>
       </div>
       <div className='bg-gray-200 flex flex-col items-center justify-center'>
          <div className='bg-white h-60 w-2/3 mt-14 flex flex-row items-center rounded-xl'>
             <p className='text-2xl font-semibold px-20'>
                UNIVERSITIES
             </p>
             <div>
                <p className='text-4xl font-semibold'>Digitize and automate online placements.</p>
                <p className='text-xl mt-5 opacity-65'>Streamline the process, track data, reach out to additional employers, and go online with your 
                    placement cell.
                </p>
                <button className='h-10 w-44 mt-7 rounded-3xl font-medium text-xl text-white bg-blue-500 hover:bg-blue-700'>For Universities</button>
             </div>
          </div>
          <div className='bg-white h-60 w-2/3 mt-14 flex flex-row items-center rounded-xl'>
             <p className='text-2xl font-semibold px-20'>
                STUDENTS
             </p>
             <div>
                <p className='text-3xl font-semibold'>Learn about jobs, prepare for them, and apply for them.</p>
                <p className='text-xl mt-5 opacity-65'>Find new possibilities, study and practise on the road, and the improve your interview
                 preparation.</p>
                <button className='h-10 w-44 mt-7 rounded-3xl font-medium text-xl text-white bg-blue-500 hover:bg-blue-700'>For Students</button>
             </div>
          </div>
          <div className='bg-white h-60 w-2/3 mt-14 flex flex-row items-center mb-12 rounded-xl'>
             <p className='text-2xl font-semibold px-20'>
                EMPLOYERS
             </p>
             <div>
                <p className='text-4xl font-semibold'>A one-stop site for employment on campus.</p>
                <p className='text-xl mt-5 opacity-65'>Connect with additional universities online, and our matching algorithms can 
                help you locate your ideal candidate quickly
                </p>
                <button className='h-10 w-44 mt-7 rounded-3xl font-medium text-xl text-white bg-blue-500 hover:bg-blue-700'>For Employers</button>
             </div>
          </div>
       </div>
       <div className='flex flex-col'>
           <p className='text-3xl font-semibold mx-72 mt-24'>Team</p>
           <p className='mx-72 mt-2 opacity-75'>Our Hardworking Team</p>
           <div className='flex flex-row mb-10'>
               <div className='relative w-64 h-96 ml-72 mr-10 mt-16 shadow-2xl rounded-xl opacity-90 hover:scale-110 transition duration-500 cursor-pointer hover:opacity-100'>
                   <div className=' h-4/6 bg-Shubham bg-cover'></div>
                   <p className='text-xl font-semibold opacity-80 pl-5 pt-5'>Shubham Raut</p>
                   <p className='pl-5 opacity-60'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, officiis!</p>
                   <p className='absolute rounded-sm top-56 right-0 w-44 h-8 p-1 text-center bg-blue-200'>Chief Executive Officer</p>
               </div>
               <div className='w-64 h-96 mr-10 mt-16 shadow-2xl rounded-xl opacity-90 hover:scale-110 transition duration-500 cursor-pointer hover:opacity-100'>
                   <div className='h-4/6 bg-landing bg-cover'></div>
                   <p className='text-xl font-semibold opacity-80 pl-5 pt-5'>Shubham Raut</p>
                   <p className='pl-5 opacity-60'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, officiis!</p>
               </div>
               <div className='w-64 h-96 mr-10 mt-16 shadow-2xl rounded-xl opacity-90 hover:scale-110 transition duration-500 cursor-pointer hover:opacity-100'>
                   <div className='h-4/6 bg-landing bg-cover'></div>
                   <p className='text-xl font-semibold opacity-80 pl-5 pt-5'>Shubham Raut</p>
                   <p className='pl-5 opacity-60'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, officiis!</p>
               </div>
               <div className='w-64 h-96 mr-10 mt-16 shadow-2xl rounded-xl opacity-90 hover:scale-110 transition duration-500 cursor-pointer hover:opacity-100'>
                   <div className='h-4/6 bg-landing bg-cover'></div>
                   <p className='text-xl font-semibold opacity-80 pl-5 pt-5'>Shubham Raut</p>
                   <p className='pl-5 opacity-60'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, officiis!</p>
               </div>
               
           </div>
       </div>
       <div className='bg-gray-200  flex flex-col items-center '>
          <p className='text-4xl font-semibold mt-20 '>Trusted and loved by</p>
          <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ea mollitia blanditiis nihil quod eligendi</p>
          <p>dignissimos cupiditate repellat magni provident.</p>
          <div className='w-3/5 h-96 bg-white mt-10 mb-20'>
            <div className='flex flex-row mb-20'>
            <div className='bg-abof w-36 h-16 mt-11 ml-14 mr-14'></div>
            <div className='bg-lub w-36 h-16 mt-11 ml-14 mr-14 '></div>
            <div className='bg-rest w-36 h-16 mt-11 ml-14 mr-14'></div>
            <div className='bg-lilly w-36 h-16 mt-11 ml-14 bg-cover'></div>
          </div>
          <div className='flex flex-row'>
          <div className='bg-cit w-44 h-16 mt-11 ml-14 mr-8 bg-cover'></div>
            <div className='bg-trust w-52 h-16 mt-11 ml-11 mr-6 bg-cover '></div>
            <div className='bg-old w-28 h-6 mt-16 ml-14 mr-10 bg-contain'></div>
            <div className='bg-bootstrap w-36 h-16 mt-11 ml-14 bg-cover'></div>
          </div>
        </div>
       </div>
       <div className='mt-20 bg-white flex flex-row items-center justify-center'>
         <div className='w-72 mr-20'>
            <p className='text-5xl font-medium '>Shubham</p>
            <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p> 
         </div>
         <div className=' w-72 mr-10'>
            <p className='font-semibold text-xl text-blue-800 mr-40'>Useful Link</p>
            <ul className='mt-5'>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Term of Service</li>
                <li>Privacy Policy</li>
            </ul>
         </div>
         <div className='w-72'>
         <p className='font-semibold text-xl text-blue-800 '>Our Services</p>
            <ul className='mt-5'>
                <li>Web Design</li>
                <li>Web Development</li>
                <li>Product Management</li>
                <li>Marketing</li>
                <li>Graphics Design</li>
            </ul>
         </div>
         <div className='w-72'>
         <p className='font-semibold text-xl text-blue-800 '>Get in touch with us</p>
           <ul className='mt-5'>
            <li>Jawahar Nagar,Akola</li>
            <li className='mb-5'>Pin-444001</li>
            <li><span className='font-semibold'>Phone:</span> 7758937762</li>
            <li><span className='font-semibold'>Email:</span> shubhraut163@gmail.com</li>
           </ul>
         </div>
      </div>
      <div className='bg-gray-900 h-28 mt-20 flex items-center justify-center text-white'>
          <p>© Copyright Example Software. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Navbar