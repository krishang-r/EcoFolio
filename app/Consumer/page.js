"use client"
import Link from "next/link"
import Header from "../components/Header"
import CryptoChart from "../components/CryptoChart"
import Wallet from "../components/Cons/Wallet"
import Available from "../components/Cons/Available"
import TransactionHistory from "../components/Cons/TransactionHistory"
import Footer from "../components/Footer"
const page = () => {
  return (
    <div>
        <Header/>
        <div className='container w-screen mx-auto my-7 text-green-600 font-bold text-5xl text-center font-[Century Gothic]'>
            Welcome Consumer
        </div>
        <div className="flex w-full items-center justify-space mx-8">
          <div className="w-[60%]"><CryptoChart /></div>
        
        <div className="w-[30%] h-full ml-8">
          <div className="flex items-center justify-between w-full">
            <div className="w-[50%] h-[100px] mx-1"><Wallet /></div>
            <div className="w-[50%] h-[100px] mx-1"><Available /></div>
          </div>
            <div className="mt-4">
            <input 
              type="text" 
              placeholder="Enter Value to Buy" 
              className="w-full p-2 border bg-gray-100 border-gray-300 rounded"
            />
            </div>
            <div className="mt-4 bg-green-500  text-center h-[50px] rounded-md m-auto pt-[10px] text-xl font-extrabold hover:bg-green-700 hover:text-white">
              Buy
            </div>
            <div className="w-full">
              <TransactionHistory />
            </div>
        </div>
        </div>
        <Footer />
    
    </div>
  )
}

export default page