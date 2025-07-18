import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <div>
      <nav className=" bg-white text-black flex items-center justify-between ">
      <div className=" items-start  justify-start flex  ">
                    <img className="h-14 w-43 p-2" src="/one.png" />
                    </div>
                    <div>
                    <Link href="/HOME" className="px-6">HOME</Link>
                    <Link href="/NEW ARRIVALS" className="px-6">NEW ARRIVALS</Link>
                    <Link href="/SHOP" className="px-6">SHOP</Link>
                    <Link href="/SUPPORT" className="px-6">SUPPORT</Link>
                    </div>
            </nav>
    </div>
    </>
  )
}

export default Navbar
