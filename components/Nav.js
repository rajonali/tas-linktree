
import Link from 'next/link';
import { useState } from 'react';


export const Nav = () => {

    const [active, setActive] = useState(false);

    const handleClick = () => {
      setActive(!active);
    };
    
    return (
        <nav className='flex items-center flex-wrap bg-purple-700 p-3'>
         <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
           
            <span className='text-xl text-white font-bold uppercase tracking-wide'>
              Tasnim Ali
            </span>
          </a>
        </Link>


        <button 
        onClick={handleClick}
        className=' inline-flex p-3 bg-white hover:bg-white rounded lg:hidden text-white ml-auto hover:text-white outline-none'>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='#7C3AED'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>


        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`} 
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto h-screen justify-evenly'>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center  hover:bg-white hover:text-purple-600'>
                Home
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-white hover:text-purple-600'>
                Education
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-white hover:text-purple-600'>
                Work Experience
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-white hover:text-purple-600'>
                Open Source
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-white hover:text-purple-600'>
                Achievements
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-white hover:text-purple-600'>
                Blog
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center  hover:bg-white hover:text-purple-600'>
                Contact
              </a>
            </Link>
          </div>
        </div>
        </nav>
    )
}

export default Nav
