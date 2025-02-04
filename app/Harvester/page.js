"use client"
import { useState } from 'react';
import Link from 'next/link'
import Header from "../components/Header"
import Footer from '../components/Footer'
import PieChartCustom from "../components/PieChartCustom"
import Wallet from "../components/Dashboard/Wallet"
import Available from "../components/Dashboard/Available"
import Sellers from "../components/Dashboard/Sellers"
import WorldMap from "../components/Dashboard/WorldMap"
import CustomCreditsChart from "../components/Dashboard/CustomCreditsChart"

const page = () => {
  const blocks = [
    { id: 1, bg: "bg-white", col: "col-span-1", row: "row-span-1", content: <Wallet/> },
    { id: 2, bg: "bg-white", col: "col-span-1", row: "row-span-2", content: <Sellers /> },
    { id: 3, bg: "bg-white", col: "col-span-1", row: "row-span-2", content: <div className='w-full h-full'><PieChartCustom completed={70} total={100}/></div>},
    { id: 4, bg: "bg-white", col: "col-span-1", row: "row-span-2", content: "📅 Calendar" },
    { id: 5, bg: "bg-white", col: "col-span-1", row: "row-span-1", content: <Available /> },
    { id: 6, bg: "bg-white", col: "col-span-2", row: "row-span-1", content: <p className="text-sm">This block spans 2 rows & cols</p> },
    { id: 7, bg: "bg-white", col: "col-span-2", row: "row-span-1", content: <WorldMap /> },
  ];
  return (
    <div className='h-screen'>
        <Header />
        <div className='container w-screen mx-auto my-7 text-green-600 font-bold text-5xl text-center font-[Century Gothic]'>
            Welcome Harvester
        </div>

        <div className='flex items-center justify-center w-full'>
          <div></div>
          <div className='w-[40%]'><WorldMap /></div>
        </div>

        <div className='flex items-center justify-evenly w-full'>
          <div className='w-[40%]'><CustomCreditsChart/></div>
          <div className='w-[40%]'><WorldMap /></div>
        </div>
        <div className="grid grid-cols-4 grid-rows-[20%_20%_55%] gap-4 p-3 m-auto bg-gray-100 h-screen">
      {blocks.map(({ id, bg, col, row, content }) => (
        <div key={id} className={`flex items-center justify-center text-secondary font-bold ${bg} ${col} ${row} p-5 rounded-md shadow-md`}>
          {content}
        </div>
      ))}
    </div>

        <Footer />
    </div>
  )
}

export default page