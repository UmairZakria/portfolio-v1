
'use client'

import Navbar from "./components/Navbar";
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from "react";
import Loading from "@/public/ui/loading.gif"
import Image from "next/image";


import { SessionProvider } from "next-auth/react";
function AdminLayoutWrapper({ children }) {
    const { data: session, status } = useSession()
    const router = useRouter()
    // useEffect(() => {
    //     if (status === 'unauthenticated') {
    //         router.push('/Login'); 
    //     }
    // }, [status]);

    if (status === 'loading') {
        return (
            <div className="w-full h-screen flex items-center justify-center">

                <Image
                    className=" object-cover    "
                    src={Loading} // Path to your image
                    sizes={50}
                    alt="Loading..."
                />
            </div>
        );
    }

    if (status === 'unauthenticated') {
        return (
            <div  className="flex   items-center text-2xl md:text-5xl justify-center w-full h-screen ">
                😵 Something Went Wrong

            </div>
        ) // Avoid rendering while redirecting
    }
    return (
        <div  >

            {children}
        </div>

    )

}

export default function RootLayout({ children }) {
    return (
        <SessionProvider>
            <AdminLayoutWrapper>
                <Navbar />
                {children}

            </AdminLayoutWrapper>
        </SessionProvider>
    );
}
