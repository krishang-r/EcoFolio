"use client"
import { useState } from 'react';
import Link from 'next/link'
import Header from "../components/Header"
import Footer from '../components/Footer'

const page = () => {
  return (
    <div className='h-screen'>
        <Header />
        <div className='container w-screen mx-auto my-7 text-green-400 font-bold text-5xl text-center'>
            Welcome Harvester!!!
        </div>

        <div class="flex space-x-4 p-4 w-[90%] mx-auto text-xl">
          <div class="w-1/2 p-6 text-green-800 rounded-lg">
          Carbon emission points represent the amount of CO₂ or other greenhouse gases released due to activities 
          like burning fossil fuels. These points are tracked in carbon markets, where companies buy and sell carbon 
          credits to meet emission limits. Higher CO₂ emissions result in more carbon emission points, which must be 
          managed to reduce environmental impact.
          <br></br>
          <br></br>
          Renewable energy sources like solar, wind, hydropower, and geothermal produce little to no CO₂, making them 
          essential for reducing emissions. 
          </div>

          <div class="w-1/2 p-6 text-green-800 rounded-lg">
          By increasing renewable energy use, we lower the demand for carbon emission points, which helps reduce the 
          global carbon footprint and achieve climate goals.
          <br></br>
          Through carbon offset programs, renewable energy projects generate carbon credits, allowing businesses to offset their emissions. This incentivizes investment in clean energy and helps reduce reliance on fossil fuels, contributing to a more sustainable energy future.
          </div>
        </div>

        <Footer />
    </div>
  )
}

export default page