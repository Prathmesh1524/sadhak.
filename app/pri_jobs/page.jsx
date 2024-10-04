import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
  return (
  <>
  
  <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>

   <div className=' p-7'> 
      <h1 className='text-3xl font-bold justify-center content-center items-center flex flex-col'>Explore Jobs</h1>
      </div>
    
    <div className='justify-center content-center items-center flex flex-col h-screen '>
        <h1 className='text-3xl font-bold'>Welcome to Private Jobs</h1>
        <div className='text-lg border-2 flex flex-col justify-center content-center items-center p-10  rounded-full'>
            If you don't have account then SignUP
            <div className='flex gap-3 justify-center items-center content-center p-4 '> 
         <Link href={"/signup"}><button className='bg-gray-500 rounded-xl  hover:bg-gray-800 text-white px-1 py-2'>SignUp</button></Link> 
        <div className=''> 
         <Link href={"/login"}><button className='bg-gray-500 rounded-xl  hover:bg-gray-800 text-white px-3 py-2 gap-6'>Login</button></Link> 
         </div>
         </div>
        </div>
    </div>
  </>
  )
}

export default page
