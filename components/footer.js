import React from 'react'
import Link from 'next/link'
import me3 from '@/public/ui/me3.jpeg'
import Image from 'next/image'
const Footer = () => {
  return (

    <div className='container mx-auto mt-20  w-full h-auto   px-4  py-1 flex items-center justify-center gap-2 md:justify-between flex-wrap '>
      <div className='flex items-center gap-4 flex-wrap justify-center  md:flex-row'>

        <div className='font-brittany text-[40px] gap-4  flex-wrap flex  items-center '>
          <Link href={'/Login'} >Umair zakria</Link>
          <Image className='w-[60px] h-[60px] rounded-full object-cover' src={me3} alt="Umair" />
        </div>
        <div className='md:border-l-2   pl-6 border-gray-300 text-gray-400'>
          © 2024 Umair Zakria. All rights reserved
        </div>
      </div>
        <div className="flex gap-4   ">
          <Link href={'https://linkedin.com/in/umair-zakria-67477b33a'}
            target="_blank"

          >
            <img width="36" height="36" src="https://img.icons8.com/color/36/linkedin-circled--v1.png" alt="linkedin-circled--v1" />
          </Link>
          <Link
            href={'https://www.facebook.com/profile.php?id=61565396470099'}
            target="_blank"
          >
            <img width="36" height="36" src="https://img.icons8.com/fluency/36/facebook-new.png" alt="facebook-new" />

          </Link>
      </div>
      {/* <div className='flex flex-wrap items-center justify-between gap-20'>

        <div className=' flex flex-col flex-wrap gap-3 text-lg '>
            <Link className='text-lok hover:underline dark:text-lok' href="/">Home</Link>
            <Link className='text-lok hover:underline dark:text-lok' href="/resume.pdf">Resume</Link>


        </div>
        <div className=' flex flex-col flex-wrap gap-3 text-lg '>
             <Link className='text-lok hover:underline dark:text-lok' href="/Article">Articles</Link>
       
            <Link className='text-lok hover:underline dark:text-lok' href="/Login">Login</Link>

        </div>
        </div> */}



    </div>
  )
}

export default Footer
