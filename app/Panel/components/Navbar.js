import React, {useState} from 'react'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { ModeToggle } from '@/components/ModeToggle'
const Navbar = () => {
    const handleLogout = () => {
        signOut({ callbackUrl: "/Login" }); 
      }
    return (
        <div className='w-full h-auto px-10  flex  items-center justify-between'>
            <Link href={'/Panel'} className='text-[80px] font-brittany '>
                Umair zakria
            </Link>
            <div

                // className=" bg-black dark:bg-[#ffffff3b]  absolute md:fixed -translate-x-1/2 left-1/2 z-[100] w-[100%]  md:w-auto top-[100%] md:top-7 md:rounded-3xl px-4 text-[15px] py-1 flex items-center justify-center gap-4 backdrop-blur-lg bg-opacity-10 "
                className='flex  items-center justify-center gap-5'

            >

                <Link
                className='text-xl'
                    href={"/Panel/Projects"}
                >
                    Project
                </Link>
                <Link
                className='text-xl'
                    href={"/Panel/Message"}
                >
                    Messages
                </Link>
                <Link 
                className='text-xl'
                
                href={"/Panel/Addblog"}>
                    Article
                </Link>

                <div className='flex items-center  relative justify-center'>

                    <ModeToggle />
                </div>
                <button className='bg-black px-3 py-3 border border-black dark:border-white transition-all duration-500 ease-in-out hover:bg-yellow-50 text-white  hover:text-black font-semibold  h-full' onClick={handleLogout}>Logout</button>

            </div>

        </div>
    )
}

export default Navbar
