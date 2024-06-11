
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import Link from 'next/link'
  

const Sidebar = () => {


  return (
    <Sheet>
    <SheetTrigger className='bg-light p-1 rounded hover:bg-gray-300 md:hidden'>
        <Menu />
    </SheetTrigger>
    <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-left mb-4">Menu</SheetTitle>
        </SheetHeader>
            <div className='flex flex-col [&>a]:py-4 uppercase text-black'>
              <Link href="/">Upcoming events</Link>
              <Link href="/">Register</Link>
              <Link href="/">Result</Link>
            </div>
            <hr />
            <div className='flex flex-col [&>a]:py-4 [&>a]:uppercase [&>a]:text-sm [&>a]:text-gray-700'>
              <h3 className='font-semibold mt-4 mb-4 text-lg '>More Links</h3>
              <Link href="/">About</Link>
              <Link href="/">Promotion</Link>
              <Link href="/">FAQs</Link>
              <Link href="/">Contact</Link>
            </div>
    </SheetContent>
    </Sheet>
  )
}

export default Sidebar