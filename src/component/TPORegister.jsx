import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const TPORegister = () => {

    const navigate = useNavigate();
    const[dis,setDis]=useState('hidden')
    const[dis1,setDis1]=useState('')
    const[dis2,setDis2]=useState('hidden')
    const[tpo,setTpo]=useState({
      name:"",
      email:"",
      college:"",
      mobile:""
    })

    const{name,email,college,mobile} = tpo

    const onInputChange = (e) =>
    {
      setTpo({...tpo,[e.target.name]:e.target.value})
    }

    const onSubmit = async(e) =>
    {
      e.preventDefault();
      await axios.post("http://localhost:7777/addRegister",tpo)
      setDis1("blur-lg")
      setDis2("visible")
    }

    const login = () =>
    {
      navigate("/login")
    } 

    const disp = () =>
    {
       setDis('visible')
    }
  return (
    <>
    <div className={`bg-gray-200 min-h-screen min-w-screen flex flex-row justify-center ${dis1} `}>
    <div className='bg-white w-2/6 mb-20 mt-20'>
        <p className='text-5xl m-10 mb-3'>Shubham</p>
        <p className='text-2xl ml-10'>Sign up</p>
        <p className='text-xl font-light mt-2 ml-10 mb-5'>Already have an account?<button onClick={login} className='text-blue-700 ml-5 font-normal'>Sign In</button></p>
        <form onSubmit={(e)=>onSubmit(e)}>
        <label className='ml-10'>Name <span className='text-red-600'>*</span></label><br/>
        <input type='text'placeholder='Enter Your Name' name='name' value={name} onChange={(e)=>onInputChange(e)} className='border-2 ml-10 mt-3 w-96 h-12 pl-4 mb-5' required /><br/>
        <label className='ml-10'>Email <span className='text-red-600'>*</span></label><br/>
        <input type='email'placeholder='Enter Your Email' name='email' value={email} onChange={(e)=>onInputChange(e)} className='border-2 ml-10 mt-3 w-96 h-12 pl-4 mb-5' required /><br/>
        <label className='ml-10'>College Name <span className='text-red-600'>*</span></label><br/>
        <input type='text'placeholder='Enter Your College Name' name="college" value={college} onChange={(e)=>onInputChange(e)} className='border-2 ml-10 mt-3 w-96 h-12 pl-4 mb-5' required/><br/>
        <label className='ml-10'>Mobile No. <span className='text-red-600'>*</span></label><br/>
        <input type='number'placeholder='Enter Your Mobile No.' name='mobile' value={mobile} onChange={(e)=>onInputChange(e)} className='border-2 ml-10 mt-3 w-96 h-12 pl-4'required /><br/>
        <button className='w-60 h-10 bg-blue-700 mt-5 ml-10 rounded-full text-white test-2xl hover:bg-blue-900' onClick={disp}>Verify Your Mobile Number</button><br/>
        <input type='number' placeholder='Enter OTP' className={`order-2 ml-10 mt-3 w-56 h-12 pl-4 ${dis} border-2`}/>
        <button className={`w-28 h-10 bg-blue-700 rounded-full text-white test-2xl hover:bg-blue-900 ml-5 ${dis}`}>Verify</button><br/>
        <button className='mt-10 bg-blue-700 w-72 h-14 ml-10 text-white rounded-full text-2xl mb-10' type='submit'>Register</button>
        </form>
    </div>
    <div className='relative bg-Register w-2/6 mt-20 mb-20 bg-cover'>
       <p className='text-5xl text-white opacity-1 font-bold ml-20 mt-36'>Welcome to our <br/>community</p>
       <p className='text-white mt-5 ml-20 mr-20 '>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
         Duis mollis, est non commodo luctus.</p>
    </div>
  </div>
  <div className={`absolute top-1/3 h-96 w-2/3 left-72 rounded-2xl text-center bg-gray-700 z-10 ${dis2}`}>
            <p className='text-white text-5xl mt-10'>Thank You...!!</p>
            <p className='text-white text-xl mt-5'>Welcome to Shubham Community</p>
            <p className='text-white text-xl mt-5'>Your userName is your registered email address </p>
            <p className='text-white text-xl mt-5'>Your password is ABC@123</p><br/>
            <button className='w-48 h-10 bg-orange-500 rounded-full font-medium text-xl hover:bg-orange-600 text-white'
            onClick={login}>Login</button>
    </div>
  </>
  )
}

export default TPORegister