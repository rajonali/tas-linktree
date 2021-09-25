import { forwardRef } from 'react';
import Image from 'next/image';
import FlipMove from 'react-flip-move';

// eslint-disable-next-line react/display-name
const FeaturedProjects = forwardRef(({result }, ref) => {
    return (

        <div className="px-5 pt-10">
                  <h1 className="self-center text-start text-5xl py-5 font-bold tracking-tight text-black-500 mb-5 border-l-8 h-5.5 border-yellow-200 px-5">Feautured Work</h1>


<div className="sm:grid grid-cols-1 md: grid-cols-2 w-auto lg:grid-cols-3 w-auto">
        
        <div ref={ref} className=" relative group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
        <Image
        layout="responsive"
        src={require('../public/images/kennybreland.png')}
        height={1080}
        width={1920} 
        />


        <div className="absolute top-1/4 left-56 inset-0 bg-cover z-0  "
        >
            <p className="truncate max-w-md opacity-0 group-hover:opacity-100">overview</p>
            <h2 className="mt-1 text-2xl opacity-0 group-hover:opacity-100 text-white transition-all duration-100 ease-in-out group-hover:font-bold">
                TITLE
            </h2>
            <p className="opacity-0 group-hover:opacity-100">
myinfo
            </p>
        </div>
    </div>

    <div ref={ref} className="relative group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
        <Image
        layout="responsive"
        src={require('../public/images/crudimt.gif')}
        height={1080}
        width={1920} 
        />


        <div className="absolute top-1/4 left-56 inset-0 bg-cover z-0 "
        >
            <p className="truncate max-w-md opacity-0 group-hover:opacity-100">overview</p>
            <h2 className="mt-1 text-2xl opacity-0 group-hover:opacity-100 text-white transition-all duration-100 ease-in-out group-hover:font-bold">
                TITLE
            </h2>
            <p className="opacity-0 group-hover:opacity-100">
myinfo
            </p>
        </div>
    </div>


    <div ref={ref} className="relative group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
        <Image
        layout="responsive"
        src={require('../public/images/exp.png')}
        height={1080}
        width={1920} 
        />


        <div className="absolute top-1/4 left-56 inset-0 bg-cover z-0 "
        >
            <p className="truncate max-w-md opacity-0 group-hover:opacity-100">overview</p>
            <h2 className="mt-1 text-2xl opacity-0 group-hover:opacity-100 text-white transition-all duration-100 ease-in-out group-hover:font-bold">
                TITLE
            </h2>
            <p className="opacity-0 group-hover:opacity-100">
myinfo
            </p>
        </div>
    </div>



</div>


</div>
    )
});

export default FeaturedProjects
