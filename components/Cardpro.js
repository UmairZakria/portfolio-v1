'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Screen from './Screen';
const Cardpro = (Props) => {
  const [context, setContext] = useState(false)
  const [listimage, setListimage] = useState([])
  const [indeximage, setIndeximage] = useState(Props.images[0])

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  const handelscreen = (list) => {
    setContext(true)
    setListimage(list)
    const element = document.getElementById('move');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // document.body.style.overflow = 'hidden'

  }
  const handelclose = () => {
    setContext(false)
    setListimage([])
    // document.body.style.overflow = 'auto'

  }


  return (
    <>
      <div className=' h-full'>


        {context && <Screen images={listimage} onClose={handelclose} />}

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

          className=' flex flex-col  h-auto w-full md:w-[450px]'>
          <div className='h-full relative '>

            <img onClick={() => handelscreen(Props.images)} className=' h-[300px] w-full rounded-xl      object-cover ' src={indeximage} alt="image" />
            
            {/* <motion.div

              whileHover={{ scale: 1.2, cursor: 'pointer' }}
              className='absolute bottom-3 group shadow-lg shadow-gray-700 rounded-md  right-3 size-[90px] border border-gray-400'>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                onClick={() => handelscreen(Props.images)}

                className="absolute hidden text-white  group-hover:block text-center bg-gray-800 bottom-[100%] px-2 py-1 rounded-2xl left-0  before:content-['']  before:absolute  before:top-[55%]  before:-translate-x-1/2 before:left-1/2 before:size-[20px] before:rotate-45 before:bg-gray-800 before:-z-10  mb-3 w-[80px] text-sm  z-50">View All
              </motion.div>
              {
                Props.images.map((image, index) => (
                  <motion.img
                    onClick={() => setIndeximage(image)}
                    whileHover={{ scale: index === 0 || index === 1 ? 1 : 1.3, cursor: 'pointer', zIndex: 100 }}
                    onHoverStart={(e) => (e.target.style.zIndex = 100)}
                    onHoverEnd={(e) => (e.target.style.zIndex = 0)}

                    style={{
                      scrollbarColor: 'red',
                      width: `calc(88px - ${index * 10}px)`,
                      height: ` calc(88px - ${index * 10}px)`,
                      position: 'absolute',
                      bottom: 0,
                      left: `${index * 30}`,
                      objectFit: 'cover',
                      zIndex: `{index}`
                    }}
                    key={index} src={image} alt={index} className={` rounded-md object-fill`} />
                ))
              }

            </motion.div> */}
          </div>

          <div

            className=' flex flex-col    py-6  border-gray-400 gap-4 '>
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
                <img src="https://img.icons8.com/material-outlined/24/ffd401/external-link.png" alt="" />
                Preview</Link>
 



          </div>
        </motion.div>
      </div>

    </>

  )
}

export default Cardpro
