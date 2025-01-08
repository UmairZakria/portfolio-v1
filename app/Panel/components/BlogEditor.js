'use client'
import React, { useState, useRef, useMemo } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';


import { useTheme } from 'next-themes';

const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });

import LoadingSkeleton from '@/components/LoadingSkeleton';

const BlogEditor = () => {
  const [context, setContext] = useState(false)
  const editor = useRef(null);
  const { theme } = useTheme()
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('')
  const [discription, setDiscription] = useState('')
  const [image, setImage] = useState('')
  const [error, setError] = useState('')
  const [keyword, setKeyword] = useState('')
  const editorConfig = useMemo(() => {
    return {
      theme: theme === 'dark' ? 'dark' : 'default',
      readonly: false,
      height: 400,

    };
  }, [theme]);


  const handelsubmit = (e) => {
    e.preventDefault();
    setContext(true)
    axios.post('/api/blogpost', { title, discription,keyword , image, content })
      .then(res => {
        console.log(res)
        setContext(false)
        setError('')
        setTimeout(() => {
          setError('')


        }, 3000);

      }
      )
      .catch(error => console.log(error));

  }

  return (
    <>
      {
        context ? <LoadingSkeleton /> :
          <>


            <div className="container mx-auto">

              <form onSubmit={handelsubmit} className='flex flex-col gap-4'>
                <label className='text-lg text-red-500 font-semibold'>{error}</label>
                <input type="submit" value={'Submit'} className='w-full text-white  h-[50px] bg-lok text-2xl ' />

                <label htmlFor="" className='text-xl'>Title</label>
                <input onChange={(e) => setTitle(e.target.value)} required type="text" placeholder='Title' className='w-full h-[40px] text-lg  border-2 dark:border-none p-2' />
                <label htmlFor="" className='text-xl'>Keyword</label>
                <input onChange={(e) => setKeyword(e.target.value)} required type="text" placeholder='Title' className='w-full h-[40px] text-lg  border-2 dark:border-none p-2' />

                <label htmlFor="" className='text-xl'>Discription</label>
                <textarea onChange={(e) => setDiscription(e.target.value)} required placeholder='Discription' className='w-full h-[80px] text-lg border-2 dark:border-none p-2' name="" id=""></textarea>

                <label htmlFor="" className='text-xl'>Front Image</label>
                <input required onChange={(e) => setImage(e.target.value)} type="url" placeholder='Image Link' className='w-full h-[40px] text-lg  border-2 dark:border-none p-2' />
                <label htmlFor="" className='text-xl'>Main Content</label>
                <div className='dark:text-black '>

                  <JoditEditor
                    key={theme}

                    ref={editor}
                    config={editorConfig}
                    value={content}
                    onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                    onChange={newContent => setContent(newContent)}
                  />
                </div>
              </form>
            </div>
          </>
      }
    </>
  );
};

export default BlogEditor