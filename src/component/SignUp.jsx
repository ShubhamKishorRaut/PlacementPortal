import React from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp=()=> {

    const navigate = useNavigate(); 

    const tpo = () =>
    {
        navigate('/tpo')
    }

    const rect = () =>
    {
        navigate('/rect')
    }

  const stud = () =>{
     
    navigate('/stud')
  }

  return (
    <div className='bg-gray-200 min-h-screen min-w-screen flex justify-center'>
        <div className='bg-white w-2/4 h-72 mt-48 flex flex-row rounded-xl'>
           <div className='flex flex-col mr-5'>
               <p className='text-xl font-light ml-5 mt-10'>Create Your Account</p>
               <button className='w-96 h-10 rounded-3xl ml-5 mt-6 bg-blue-700 text-white hover:bg-blue-900 hover:border-4 hover:border-blue-700'
               onClick={stud}>Student</button>
               <button className='w-96 h-10 rounded-3xl ml-5 mt-5 bg-gray-700 text-white hover:bg-gray-900 hover:border-4 hover:border-gray-700'
               onClick={rect}>Recruiter</button>
               <button className='w-96 h-10 rounded-3xl ml-5 mt-3 bg-purple-700 text-white hover:bg-purple-900 hover:border-4 hover:border-purple-700'
               onClick={tpo}>TPO</button>
           </div>
           <div className='bg-gray-700 rounded-r-lg'>
              <p className='text-white text-5xl font-medium m-10 mb-5'>Welcome To Shubham </p>
              <p className='text-white ml-10 mr-10 mt'>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. 
                Duis mollis, est non commodo luctus</p>
           </div>
        </div>
    </div>
  )
}

export default SignUp