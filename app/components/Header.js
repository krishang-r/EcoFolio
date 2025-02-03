import React from 'react';
import Link from "next/link";

const Header = () => {
  return (
    <div>
    <div className="h-[10vh] px-1 flex shadow-md shadow-gray-500 rounded-lg sticky">
            <Link href="/" className=' flex items-start justify-start w-[80%] pt-2 px-2'><img src="/Ecofolio-header.png" alt="Ecofolio logo" className="object-contain  max-h-[80%]" /></Link>

            <div className="flex items-center p-2 justify-end w-[20%] ">
            <Link href="Login" className="flex items-center justify-center p-2 m-1 px-4 rounded-xl bg-clrbtn max-w-[50%] hover:bg-green-400 text-white hover:shadow-md hover:shadow-green-200 ">Login</Link>
            <Link href="Login" className="flex items-center justify-center p-2 m-1 px-4 rounded-xl bg-clrbtn max-w-[50%] hover:bg-green-400 text-white hover:shadow-md hover:shadow-green-200 ">sign up</Link>
            </div>
        </div>
    </div>
  )
}

export default Header