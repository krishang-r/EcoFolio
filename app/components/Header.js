import React from "react";
import Link from "next/link";

const Header = ({ links }) => {
  return (
    <div className="sticky top-0 bg-white z-50 w-[99%] m-auto mt-3 rounded-xl">
      <div className="h-[10vh] px-1 flex shadow-gray-500 rounded-xl sticky">
        <Link href="/" className="flex items-start justify-start w-[80%] pt-2 px-2">
          <img src="/Ecofolio-header.png" alt="Ecofolio logo" className="object-contain max-h-[80%]" />
        </Link>
        
        {/* Navigation Links */}
        <div className="flex justify-end items-center  text-white w-[20%]">
          {links?.map((link, index) => (
            <Link key={index} href={link.href} className="p-1 px-2 rounded-md bg-clrbtn m-2 hover:shadow-md hover:shadow-green-300">
              {link.text}
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Header;
