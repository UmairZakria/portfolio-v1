import Image from "next/image"
import Loadimg from '@/public/ui/loading.gif'


export default function LoadingSkeleton() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="w-full h-screen flex items-center justify-center">

            <Image
                className=" object-cover    "
                src={Loadimg} // Path to your image
                sizes={50}
                alt="Loading..."
            />
        </div>
    );
  }