
'use client'
import React, { useState } from "react";
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Cardpro from '@/components/Cardpro';
import { useEffect } from 'react';
import me from '@/public/ui/me2.jpg'
import Contact from "@/components/Contact";
import Footer from "@/components/footer";
import LoadingSkeleton from "@/components/LoadingSkeleton";

import Navbar from "@/components/Navbar";

import axios from "axios";

const Page = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [context, setContext] = useState(false)
  const getdata = () => {
    setIsLoading(true)
    axios.get('/api/project')
      .then((res) => {


        setData(res.data.data)
        setIsLoading(false)

      })
      .catch((err) => { console.log(err) })


  }
  useEffect(() => {
    getdata()

    document.title = "Web Developer Umair Zakria";
  }, []);

  const [style, setStyle] = useState({});
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;


    const xPercent = (x / rect.width - 0.5) * 2;
    const yPercent = (y / rect.height - 0.5) * 2;

    const rotateX = yPercent * 15;
    const rotateY = -xPercent * 15;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });
  };
  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(1000px) rotateX(0) rotateY(0)",
      transition: "transform 0.3s ease-out",
    });
  };
  const handelscreen = () => {
    setContext(true)


  }
  const handelclose = () => {
    setContext(false)

  }

  return (
    <>
      {isLoading ? (
        <LoadingSkeleton />
      ) : (<>
        <Navbar />

        <div className=''>
          {context && <Contact onClose={handelclose} />}
          <div className=' flex  w-full h-[calc(100vh-100px)] '>
            <div className='flex flex-col flex-wrap w-full justify-evenly items-center '>
              <motion.div
                initial={{ y: 100, scaleY: 0, opacity: 0.3 }}
                animate={{ y: 0, scaleY: 1, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8, type: 'spring', stiffness: 150 }}
                className="flex gap-3 text-4xl md:text-7xl">


                <span className=''>

                  <Typewriter
                    options={{
                      strings: ['React Js', 'Next JS', 'Mongodb', 'Tailwind CSS', 'HTML5', 'CSS', 'Express Js', 'Java Script', 'Python', 'Redux', 'Framer Motion'],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 'fast',
                      cursor: ' :|'
                    }}
                  />
                </span>


              </motion.div>
              {/* <div className=" h-auto w-full flex items-center justify-center"> */}

              <motion.div
                initial={{ scaleX: 0.8, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{
                  delay: 0.4,
                  duration: 3,
                  ease: 'easeInOut', // Custom cubic-bezier easing for vibe
                }}
                className="    text-xl    w-full ml-1 md:w-1/2   dark:text-gray-400"
              >

                <span className='font-brittany text-6xl text-left'>Hi There,</span><br /> <br />
                <p className='text-left ml-10  dark:hover:text-gray-100 cursor-grab'>
                  I am Full-Stack Web Developer. Passionate about leveraging modern technologies to build innovative solutions.

                </p>
              </motion.div>
              {/* </div> */}



            </div>

          </div>
          <div className="border-t-2 w-full dark:border-gray-500"></div>
          <h1 className='p-4 py-10 text-3xl md:text-6xl font-semibold text-center'>My Work, My Passion</h1>
          <div

            id='move'
            className='    flex flex-wrap items-center justify-around  gap-8  p-2  mx-auto w-full  h-auto'>
            {data.map((data) => (

              <Cardpro key={data._id} name={data.name} discription={data.discription} skills={data.skills} sourcelink={data.sourcelink} images={data.imgs} />

            ))}


          </div>
          <motion.div
            initial={{ y: 300, opacity: 0, scale: 0.9 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,


              transition: {
                delay: 0,
                duration: 1
              },


            }}
            viewport={{ once: true }}


            id='umair' className=" md:p-9 px-1 py-4 mx-auto  flex md:flex-row flex-col-reverse  items-center justify-around mt-40 w-full">
            <div className='w-full md:w-1/2'>
              <h1 className='text-[70px] md:text-[100px] font-brittany '>Umair Zakria</h1>
              <p className='text-lg  dark:text-[#6aecf8] italic md:text-left text-center  mb-10 px-2'>Web Developer</p>
              <p className=' font-light text-lg leading-[2] px-2 md:text-left text-center  '>
                I am Skilled Full-Stack Developer with expertise in <span className='text-xl dark:text-[#6aecf8] font-semibold '>React.js, Next.js, and Express.js,</span> delivering responsive,
                user-friendly web applications. Proficient in <span className='text-xl dark:text-[#6aecf8] font-semibold '> HTML5, CSS, Tailwind CSS, MongoDb, and JavaScript,</span>with a
                focus on clean, maintainable code and seamless user experiences. Passionate about leveraging modern
                technologies to build innovative solutions. With a strong focus on responsive design and SEO optimization, I aim to deliver high-performance websites that resonate with users and clients alike.


              </p>
              <div className="w-full  flex items-center md:justify-start justify-center">


                <button onClick={handelscreen} className='px-6 py-4 text-lg bg-black border-black   dark:bg-[#6aecf8] border dark:border-[#6aecf8] hover:bg-transparent dark:hover:bg-transparent dark:hover:text-white  hover:text-black transition-all ease-in-out duration-1000 mt-5 text-white dark:text-black'>Contact Me</button>
              </div>


            </div>
            <Image
              src={me}
              alt="Umair Zakria"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                ...style,
                transformStyle: "preserve-3d",
                transition: "transform 0.1s ease-out",
              }}

              className="w-[340px] rounded-md  h-[550px] object-cover hover:-skew-y-3 hover:scale-95 hover:shadow-gray-100 transition-all ease-in-out duration-700 shadow-2xl shadow-gray-400"
            />



          </motion.div>
        </div>
        <Footer />
      </>)}
    </>

  )
}

export default Page
