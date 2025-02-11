'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
const Cardpro = (Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <div className=' h-full'>
        <motion.div
          key={Props.id}
          initial={{
            opacity: 0,
            scaleX: 0.9,
            y: 200

          }}
          whileHover={{ scale: 1.01, cursor: 'pointer' }}
          whileTap={{ scale: 0.99 }}
          whileInView={{
            opacity: 1,
            y: 0,
            scaleX: 1,

            transition: {
              delay: 0.1,
              duration: 1.5,
            },


          }}
          viewport={{ once: true }}

          className=' flex flex-col  shadow-2xl rounded-xl  h-auto w-full md:w-[460px]'>
          <div className='h-full relative '>

            <img className=' h-[300px] w-full rounded-t-lg     object-cover ' src={Props.images[0]} alt="image" />
          </div>

          <div

            className=' flex flex-col   px-3 py-6  border-gray-400 gap-4 '>
            <div className='flex items-center  flex-wrap justify-between w-full'>


              <h1 className='text-2xl font-semibold '>{Props.name}</h1>
  
            </div>
            <div
              onClick={toggleText}

              className={`text-[16px]   text-gray-700
           ${isExpanded ? "" : "line-clamp-2"
                }
          dark:text-gray-400`}>
            {Props.discription}
              {!isExpanded && <span onClick={toggleText}  className="text-blue-500"> Read More</span>}
              {isExpanded && <span onClick={toggleText} className="text-blue-500"> Show Less</span>}
            </div>
            <Link target='_blank' href={Props.sourcelink}
                className='text-lok flex items-center  gap-3 underline'
              >
                <img src="https://img.icons8.com/material-outlined/24/ffd401/external-link.png" alt="Umair Zakria" />
                Preview</Link>
          </div>
        </motion.div>
      </div>

    </>

  )
}

export default Cardpro
