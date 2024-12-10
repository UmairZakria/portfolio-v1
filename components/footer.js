import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (

    <div className=' w-full h-[200px] dark:border-t-[1px]  bg-[#313131] dark:bg-none  px-4  py-1 flex items-center flex-wrap justify-evenly gap-4 backdrop-blur-lg bg-opacity-10 '>
        <div className='font-brittany text-[70px] '>
            Umair zakria
        </div>
        <div className='flex flex-wrap items-center justify-between gap-20'>

        <div className=' flex flex-col flex-wrap gap-3 text-lg '>
            <Link className='text-blue-800 hover:underline dark:text-blue-600' href="/">Home</Link>
            <Link className='text-blue-800 hover:underline dark:text-blue-600' href="/resume.pdf">Resume</Link>


        </div>
        <div className=' flex flex-col flex-wrap gap-3 text-lg '>
             <Link className='text-blue-800 hover:underline dark:text-blue-600' href="/Article">Articles</Link>
       
            <Link className='text-blue-800 hover:underline dark:text-blue-600' href="/Login">Login</Link>

        </div>
        </div>

        
      
    </div>
  )
}

export default Footer
