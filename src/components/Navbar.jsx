import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/../public/logo.png'
import Sidebar from './Sidebar'
  

const Navbar = () => {
  return (
    <>
    {/* <!-- Top nav bar for secondary links --> */}
    <nav
      className="w-full lg:px-12 xl:px-28 text-xs text-333 hidden md:flex border-b border-gray-light justify-end"
    >
      <div className="flex leading-8 lg:leading-10">
        <Link href="/" className="mx-8 text-center tracking-widest cursor-pointer hover:underline">ABOUT</Link>
        <Link href="/" className="mx-8 tracking-widest cursor-pointer hover:underline">PROMOTIONS</Link>
        <Link href="/register" className="mx-8 font-semibold tracking-widest cursor-pointer hover:underline">REGISTER</Link>
        <Link href="/login" className="mx-8 font-semibold tracking-widest cursor-pointer hover:underline">LOGIN</Link>
      </div>
    </nav>


    {/* <!-- Second Nav bar for logo and primary Links --> */}
    <header className="w-full py-2 md:py-0.5  px-2 md:px-6 lg:px-12 xl:px-28 text-xs lg:text-sm text-333 font-semibold shadow-sm flex items-center justify-between border-b border-gray-light">

      <div className="flex xl:gap-8 lg:gap-4 w-full  justify-between lg:justify-normal">


      {/* <!-- logo --> */}
        <div className="logo flex items-center gap-2 md:gap-4 mr-9 cursor-pointer">
          <Link href="/">
            <Image src={Logo} alt="Eventmania" className=' w-7 h-7 md:w-12 md:h-12'/>
          </Link>
          <Link href="/" className=' text-xl md:text-3xl font-semibold text-gray-800'>Farm-auction</Link>
        </div>

        {/* <!-- links primary  --> */}
        <div className="tier1 hidden md:flex leading-[80px] [&>a]:uppercase">
          <Link href="/" className="mx-4 lg:mx-8 tracking-widest cursor-pointer hover:underline">Upcoming Events</Link>
          <Link href="/" className="mx-4 lg:mx-8 tracking-widest cursor-pointer hover:underline">Results</Link>
          <Link href="/register" className="mx-4 lg:mx-8 tracking-widest cursor-pointer hover:underline">Register</Link>
        </div>

      </div>

      <div className='flex gap-4 items-center'>
        <Sidebar />
      </div>

    </header>


    </>
  )
}

export default Navbar