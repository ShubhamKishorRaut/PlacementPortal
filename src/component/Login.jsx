import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [email,setEmail]=useState("")
    const[oldpass,setOldpass]=useState("")
    const[password,setPassword]=useState("")
    const[conpass,setConpass]=useState("")
    const[dis,setDis]=useState("")
    const[dis1,setDis1]=useState("hidden")
    const[dis2,setDis2]=useState("hidden")
    const[dis3,setDis3]=useState("")
    const[user,setuser]=useState()
    const[dis4,setDis4]=useState("hidden")
    const sign = () =>
    {
        navigate("/signup")
    }

    const onSubmit = async (e) =>
    {
        e.preventDefault();
        if(oldpass=="ABC@123")
        {
            // navigate("/setpass")
            setDis("blur-lg")
            setDis1("visible")
        }else{
           console.log(email)
           const data =  await axios.get(`http://localhost:7777/registered/${email}`)
           console.log(data.data)
           if(oldpass==data.data.password)
           {
            if(data.data.collegeId!=null&&user=='Student')
              {
                navigate("/studdashboard",{state:{user:data.data}} )
              }
             else if(data.data.company!=null&&user=='Recruiter')
             {
                navigate("/signup")
             }
             else if(data.data.college!=null&&user=='TPO')
             {
                navigate("/tpo")
             }
             
            // console.log("Shubham Raut")
           }else{
            setDis4("visible")
           }
           
        }
    }
 
    const set = async (e) =>
    {
        e.preventDefault();
        if(password!==conpass)
        {
        setDis2("visible")
        setDis3("Confirm password no match")
        setPassword("")
        setConpass("")
        return 
        }
        else{
            setDis3("Confirm password is same")

           await axios.post(`http://localhost:7777/Registered/${email}`,password)
            setDis1("hidden")
            setDis("")
            setEmail("")
            setOldpass("")
        }
    }

    const handleChange = (e) =>
    {
        setuser(e.target.value)
    
    }

  return (
    <>
    <div className={`relative bg-gray-200 min-w-screen min-h-screen flex justify-center z-0 ${dis}`}>
        <div className='bg-white w-3/5 mt-20 flex flex-row mb-16 rounded-lg'>
           <div className='mr-10'>
               <p className='text-5xl m-8'>Shubham</p>
               <p className='text-2xl ml-10 font-semibold mb-5'>Sign in</p>
               <p className='ml-10'>Don't have an account?<button className='ml-3 text-blue-700' onClick={sign}>Sign Up</button></p>
               <form className='mt-5' onSubmit={(e)=>onSubmit(e)}>
                <span className={`text-red-600 ml-10 mb-5 ${dis4}`}>Username or password is not correct</span><br/>
                <label className='ml-10 text-xl font-light ' ><span className='text-red-600'>*</span>Username :</label><br/>
                <input className='mt-5 ml-10 h-16 w-96 text-left pl-2 border-2 border-gray-300 mb-5' value={email} required
                onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Your Username'/><br/>
                <label className='ml-10 text-xl font-light ' ><span className='text-red-600'>*</span>Password :</label><br/>
                <input className='mt-5 ml-10 h-16 w-96 text-left pl-2 border-2 border-gray-300' required value={oldpass} onChange={(e)=>{setOldpass(e.target.value)}} placeholder='Enter Your Password'/><br/>
                <button className='mt-10 ml-72 text-gray-500 hover:text-gray-800'>Forget password ?</button><br/>
                <button className='mt-5 ml-10 w-96 h-16 bg-blue-700 text-white rounded-full text-xl' type='submit'>Sign In</button>
               </form>
           </div>
           <div className='bg-gray-900 w-full h-full rounded-r-lg'>
              <p className='mt-20 ml-20 font-medium text-5xl text-white'>Welcome To Shubham</p>
              <p className='text-white ml-20 mt-10 mr-20'>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</p>
              <p className='text-white text-3xl text-center mt-10'>Sign in as a </p>  
              <p className='text-white ml-20 mt-5'>Please Select one of the below</p>
              <input type='checkbox' id='stud' name='user' value="Student" onChange={(e)=>handleChange(e)} className='text-yellow-900 mr-5 ml-20 mt-10' /><label htmlFor='stud' className='text-white text-4xl'>Student</label><br/>      
              <input type='checkbox' name='user' value="Recruiter" onChange={(e)=>handleChange(e)} className='text-white mr-5 ml-20 mt-10'/><span className='text-white text-4xl'>Recruiter</span><br/>      
              <input type='checkbox' name='user' value="TPO" onChange={(e)=>handleChange(e)} className='text-white mr-5 ml-20 mt-10'/><span className='text-white text-4xl'>TPO</span>      
           </div>
        </div>  
            
    </div>
    <div className={`absolute top-20  bg-gray-700  w-3/6 z-10 left-1/4 rounded-2xl ${dis1} text-center`}>
        <p className='text-white m-10  mb-5 text-3xl'>Set New Password</p>
        <form onSubmit={(e)=>set(e)}>
        <label className='text-white  '>Old Password :</label><br/>
        <input type='password' value={oldpass} onChange={(e)=>setOldpass(e.target.value)} className='border-2 w-60 mt-3 bg-gray-700 h-10 p-2 mb-5 text-white ' placeholder='Enter your old password'/><br/>
        <label className='text-white  '>New Password :</label><br/>
        <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} className='border-2 w-60 mt-3 bg-gray-700  h-10 p-2 mb-5 text-white' placeholder='Enter your new password'/><br/>
        <label className='text-white '>Confirm Password :</label><br/>
        <input type='password' value={conpass} onChange={(e)=>setConpass(e.target.value)} className='border-2 w-60 mt-3 bg-gray-700  h-10 p-2 mb-5 text-white' placeholder='Enter confirm password'/><br/>
        <p className={`text-red-500 font-bold ${dis2}`}>${dis3}</p>
        <button className='mt-5 mb-20 w-60 h-12 bg-orange-500 rounded-full text-white  font-semibold text-xl
        hover:bg-orange-600' type='submit'>Set new password</button>
        </form>
    </div> 
    </>
  )
}

export default Login