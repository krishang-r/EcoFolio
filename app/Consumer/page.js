"use client"
import Link from "next/link"
import Header from "../components/Header"
import CryptoChart from "../components/CryptoChart"
import Wallet from "../components/Cons/Wallet"
import Available from "../components/Cons/Available"
const page = () => {
  return (
    <div>
        <Header/>
        <div className='container w-screen mx-auto my-7 text-green-600 font-bold text-5xl text-center font-[Century Gothic]'>
            Welcome Consumer
        </div>
        <div className="flex w-full items-center justify-space">
          <div className="w-[60%]"><CryptoChart /></div>
        
        <div>
          <div className="flex w-full items-center justify-between">
            <div>Wallet</div>
            <div>Available</div>
          </div>
        </div>
        </div>
    
    </div>
  )
}

export default page