'use client'
import React, { useState } from 'react'
import axios from 'axios'

const Contactui = () => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [budget, setBudget] = useState('')
    const [discription, setDiscription] = useState('')
    const [error, setError] = useState('')

    const handelsubmit = (e) => {
        e.preventDefault();
        setError('Sending...')

        axios.post('api/contact', { fname, lname, email, budget, discription })
            .then((res) => {
                console.log(res

                )
                if (res.data.status == 'success') {
                    setError("Message Send Successfully ! You will get Response very soon.")
                    setTimeout(() => {
                        setError('')
                    }, 7000);
                }
            })
            .catch((err) => {
                console.log(err)

                setError('Server Error! , Try reloading the page.')
            })





    }
    return (
        <div className=" ">

            <h1 className=" text-3xl md:text-5xl text-center py-10 z-20 font-semibold "> <span className="bg-lok dark:bg-transparent text-white p-2 dark:text-lok rounded-xl dark:underline" >Let&apos;s Talk</span></h1>
            <div className="container mx-auto w-full flex md:flex-row flex-col-reverse shadow-lg bg-[#ffffff] dark:bg-[#1b2024]  ">
                <div className='py-16 px-4'>
                    <div className="space-y-4">
                        {/* WhatsApp Section */}
                        <div className="flex  items-center justify-between  p-4 rounded-lg">
                            <div className="flex items-center gap-3">
                                <img
                                    width="50"
                                    height="50"
                                    src="https://img.icons8.com/water-color/50/whatsapp.png"
                                    alt="WhatsApp"
                                />
                                <div>
                                    <p className="text-lg font-medium">WhatsApp</p>
                                    <p className="text-blue-400 underline">+92 318 4394363</p>
                                </div>
                            </div>

                        </div>

                        {/* Email Section */}
                        <div className="flex items-center justify-between  p-4 rounded-lg">
                            <div className="flex items-center gap-3">
                                <img
                                    width="50"
                                    height="50"
                                    src="https://img.icons8.com/papercut/60/new-post.png"
                                    alt="Email"
                                />
                                <div>
                                    <p className="text-lg font-medium">Email</p>
                                    <p className="text-blue-400 underline">umairzakria6@gmail.com</p>
                                </div>
                            </div>
 
                        </div>

                        {/* LinkedIn Section */}
                        <div className="flex items-center justify-between  p-4 rounded-lg">
                            <div className="flex items-center gap-3">
                                <img
                                    width="50"
                                    height="50"
                                    src="https://img.icons8.com/color/48/linkedin.png"
                                    alt="LinkedIn"
                                />
                                <div>
                                    <p className="text-lg font-medium">LinkedIn</p>
                                    <p className="text-blue-400 underline">Umair Zakria</p>
                                </div>
                            </div>
 
                        </div>
                    </div>
                </div>
                <form onSubmit={handelsubmit} action="" className="w-full flex-grow flex flex-col  px-4 md:p-16 gap-6  ">
                    {error && <span className='text-red-500 text-lg'>{error}</span>}
                    <div className="w-full flex md:flex-row flex-col gap-4">

                        <input type="text" required onChange={(e) => setFname(e.target.value)} className="w-full md:w-1/2  p-4 dark:bg-gray-800 dark:placeholder-gray-100  border rounded-md placeholder:text-lg  " placeholder="First Name" />
                        <input type="text" required onChange={(e) => setLname(e.target.value)} className="md:w-1/2 w-full p-4 dark:bg-gray-800 dark:placeholder-gray-100  border rounded-md placeholder:text-lg  " placeholder="Last Name" />
                    </div>
                    <div className="w-full flex  md:flex-row flex-col  gap-4">

                        <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Company/Email*" className="w-full md:w-1/2 p-4 placeholder:text-lg  dark:bg-gray-800 dark:placeholder-gray-100  border rounded-md " />
                        <input type="text" onChange={(e) => setBudget(e.target.value)} placeholder="Budget*" className="w-full md:w-1/2 p-4 placeholder:text-lg  dark:bg-gray-800 dark:placeholder-gray-100  border rounded-md " />
                    </div>
                    <textarea name="" required onChange={(e) => setDiscription(e.target.value)} className="h-[130px] p-4 dark:bg-gray-800 placeholder:text-lg  dark:placeholder-gray-100  border rounded-md " placeholder=" Tell me about your project. What problem I can help you solve?" id=""></textarea>
                    {/* <div> */}

                    <input type="submit" value={'Send Message'} className="bg-lok border border-lok hover:text-lok dark:hover:text-lok transition-all duration-700 ease-in-out hover:bg-transparent cursor-pointer text-xl rounded-md p-4 w-full  lg:w-1/4 self-end text-[white] dark:text-[#1b2024] font-medium justify-end items-end" />
                    {/* </div> */}
                </form>


            </div>
        </div>
    )
}

export default Contactui
