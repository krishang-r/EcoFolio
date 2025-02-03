import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="container flex flex-col md:flex-row items-center text-center md:text-left mb-4 md:mb-0">
            <img src="/Ecofolio-header.png" className="w-[7%] absolute left-4" ></img>
        <div>
          <h2 className="text-lg font-semibold">Ecofolio</h2>
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div></div>
        
        {/* Navigation Links */}
        <div className="flex space-x-6 text-sm">
          <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
          <Link href="/services" className="text-gray-300 hover:text-white">Services</Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
        </div>
        
      </div>
    </footer>
  );
}
