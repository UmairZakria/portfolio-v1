'use client'
import React from 'react'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from 'framer-motion';

import { signIn } from "next-auth/react";

import Navbar from "@/components/Navbar";

import oeye from '@/public/ui/images/openeye.png'
import Link from 'next/link'
import Image from 'next/image'

import ceye from '@/public/ui/images/closedeye.png'
import loading from '@/public/ui/images/loading.gif'
import Footer from '@/components/footer';
import axios from 'axios';

const Page = () => {
    const [email, setEmail] = useState('')
    const router = useRouter();
    const [password, setPassword] = useState()
    const [error, setError] = useState(null);
    // const navi = useNavigate()
    const [passwordeye, setPasswordeye] = useState(ceye)
    const [passwordtype, setPasswordtype] = useState("password"

    )
    const [loadings, setLoadings] = useState({ display: 'none' })
    const handeleye = () => {
        if (passwordeye == ceye) {
            setPasswordtype('text')
            setPasswordeye(oeye)
        } else {
            setPasswordtype('password')
            setPasswordeye(ceye)
        }

    }
    const handellogin = async (e) => {
        setLoadings({display:'flex'})
        e.preventDefault();
    
        const result = await signIn("credentials", {
          redirect: false, 
          email,
          password,
        });
        // const result = await axios.post('/api/Login',{email,password})
        // if(result){
            // }
            
            // console.log(result)
        
        if (result.error) {
            // console.log(result.error)
        setLoadings({display:'none'})
        
          setError('Invalid Email and Password');  
          setTimeout(() => {
          setError('');  
            
          }, 4000);
        } else {
          router.push("/Panel");
        }
    
}
  return (
    <>
    <Navbar/>
    <div className='  bg-center w-full h-screen px-2 md:h-[calc(100vh-130px)]  flex flex-col justify-center  items-center'>



    <motion.div
    initial={{x:'100vw'}}
    animate={{x:0}}
    transition={{
        delay: 1,
        duration: 0.9,
        type: "spring",
        stiffness: 75,
      }}
    className='w-full  mx-4  bg-transparent border-2  dark:border  border-black dark:border-gray-500 h-auto  lg:w-1/3   md:w-1/2  2xl:w-1/3    p-1  '>



        <div className='relative' >
            <div style={loadings} className='absolute top-0 left-0   w-full h-full p-4 flex items-center justify-center z-50  bg-[#0000004d] dark:bg-[#ffffff49]'>

                <Image
                    className=" object-cover    "
                    src={loading} // Path to your image
                    sizes={50}
                    alt="Description of image"
                />
            </div>
            <form onSubmit={handellogin} className=' w-full gap-6 px-5 mt-2 py-6 flex flex-col'>
                {error && <p style={{ color: 'red' }}>{error}</p>}

                <label className='  text-center  font-medium text-2xl' >Login </label>


                <div className='flex flex-col '>

                    <label htmlFor="Email" className=' font-medium text-sm ' >Email Address</label>
                    <input type="email" required className='pt-2  focus:outline-none px-2 border-black dark:border-white  bg-transparent border-x-0 border-t-0 border-b-2'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>


                <div className='flex flex-col gap-1'>

                    <label className=' font-medium text-sm ' htmlFor="Password">Password</label>
                    <div className='w-full relative'>
                        <input required type={passwordtype} className='  pt-2 px-2 w-full border-black dark:border-white  focus:outline-none bg-transparent border-b-2 border-x-0 border-t-0'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <motion.div
                        onClick={handeleye}
                        whileTap={{opacity:0}}
                        transition={{duration:0.1}}
                        className='p-[2px]   dark:bg-[white] absolute rounded-t-md bottom-0     right-0  '>

                            <Image
                                className=" object-cover  "
                                src={passwordeye} // Path to your image
                                alt="Description of image"

                                width={30}
                                
                                height={30}
                            // layout='responsive'
                            />

                        </motion.div>
                    </div>
                </div>
                <Link href={'/Panel'} className='underline'>Already Login?</Link>
                <input type="submit" value={'Login Now'} className=' shadow-sm bg-[black] text-white border border-black hover:bg-transparent hover:text-black dark:border-none  transition-all ease-in-out duration-700 cursor-pointer dark:bg-[#ffffffe1] dark:text-black dark:hover:bg-[white] font-semibold active:bg-[rgba(0,177,200,0.94)] py-3  ' />
            </form>
        </div>

    </motion.div>
</div>
<Footer />
</>


  )
}

export default Page
