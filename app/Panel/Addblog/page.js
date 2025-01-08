"use client"
import LoadingSkeleton from '@/components/LoadingSkeleton'


import axios from 'axios'
import { useState, useEffect } from 'react'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


const Page = () => {

    const [searchQuery, setSearchQuery] = useState('')
    const [searchdata, setSearchdata] = useState([])
    const rout = useRouter()

    const [data, setData] = useState([])
    const [context, setContext] = useState(false)
    const [profile, setProfile] = useState('')

    const getdata = async () => {
        window.scroll(0, 0)
        setContext(true)

        try {
            const res = await axios.get('/api/blogpost');
            console.log(res)
            setData(res.data.blogs)
            setContext(false)

        } catch (error) {
            console.error('Error fetching post:', error);
        }
    };

    useEffect(() => {
        getdata();
    }, [profile]);

    useEffect(() => {

        const searchdata = data.filter(item =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
            // ||
            // item.category.toLowerCase().includes(searchQuery.toLowerCase())
        )

        setData(searchdata)



    }, [searchQuery])

    function createSlug(title) {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9\s]/g, '') // Remove special characters
            .replace(/\s+/g, '-')        // Replace spaces with hyphens
            .trim();                     // Remove trailing hyphens
    }

    const handelredrict2 = (title) => {
        rout.push(`/Panel/Blogedit/${encodeURIComponent(title)}`)


    }

    const handelredrict = (title) => {
        // const slug = createSlug(title);
        rout.push(`/Article/${title}`);


    }


    const handeldelete = (id) => {
        axios.delete(`/api/blogpost?id=${id}`)
            .then((res) => {
                console.log(res)
                if (res.data.status === 'success') {
                    setProfile('Blog Deleted Successfully!')
                    setTimeout(() => {
                        setProfile('')
                    }, 2000);
                } else {
                    setProfile('Blog not found')
                }


            })
            .catch((err) => { console.log(err) })
    }
    

    return (
        <>
            {
                context ? <LoadingSkeleton /> :
                    <>
                        <div className="my-3 space-y-4">
                            <div className="w-full h-full container mx-auto flex gap-2">
                                <input
                                    type="text"
                                    id="search"
                                    placeholder="Search Blog by Name and Catogory"
                                    className="search w-full box-border dark:border-none border-2 p-3 pr-[50px] text-lg placeholder:text-[16px]  rounded-lg h-full"
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <button onClick={() => {
                                    setProfile('Refreshing')
                                    setTimeout(() => {
                                        setProfile('')
                                    }, 3000);
                                }} className='p-3 border rounded-lg'>@</button>

                            </div>
                            <div className="container mx-auto">

                                <Link href={'/Panel/Addblog/Add'} className='flex items-center justify-between border  w-full p-8 '>
                                    <span>Add Blog</span>
                                    <span className='text-2xl'> +</span>
                                </Link>
                                {profile && <span className='text-lg my-5 text-red-500 '>{profile}</span>}
                            </div>

                            <div className=' container mx-auto grid md:grid-cols-2  grid-cols-1  gap-y-8 gap-x-2 my-3 lg:grid-cols-3  w-full'>

                                {

                                    data.map((data) => (

                                        <div key={data._id} className='border-gray-400 shadow-2xl dark:border-gray-700   rounded-lg border md:mx-0 mx-5 cursor-pointer space-y-1 pb-3 flex flex-col '>

                                            <img src={data.image} onClick={() => handelredrict(data.slug)} className='object-cover  rounded-t-lg  h-[200px]' alt={data.title} />

                                            <div onClick={() => handelredrict(data.slug)} className='mx-4 space-y-2'>
                                                <h1 className='dark:text-[#ffffffe0] md:text-3xl text-xl  lg:text-2xl line-clamp-2 font-semibold'>{data.title} </h1>
                                                <div className='flex w-full items-center justify-between  text-gray-600 font-normal dark:text-[#ffffffe0]' >
                                                    <span>{data.category}</span>
                                                    <span>{data.time}</span>
                                                </div>
                                            </div>



                                            <div className='flex items-center justify-around z-50'>

                                                <button onClick={() => handelredrict2(data.title)} className='bg-green-500 font-medium p-2 px-4 flex items-center gap-1 justify-around'>Edit
                                                    <img width="30" height="30" src="https://img.icons8.com/dotty/80/FFFFFF/pencil-tip.png" alt="pencil-tip" /> </button>
                                                <button onClick={() => handeldelete(data._id)} className='bg-red-500 font-medium p-2 px-4  flex items-center justify-around'> Delete
                                                    <img width="30" height="30" src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/FFFFFF/external-dustbin-ux-and-ui-flatart-icons-solid-flatarticons.png" alt="external-dustbin-ux-and-ui-flatart-icons-solid-flatarticons" />
                                                </button>
                                            </div>
                                        </div>

                                    ))


                                }









                            </div>


                        </div>
                    </>
            }
        </>
    )
}

export default Page
