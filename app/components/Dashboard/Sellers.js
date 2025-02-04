import React from 'react'

const Sellers = () => {
  return (
    <div className=" text-center">
        <div className="font-extrabold text-green-600 text-3xl">
            Top Buyers based on Sectors
        </div>
        <div className="mt-4 text-md">
            <ul className='text-left'>
                <li><b>Microsoft</b> (Technology)</li>
                <li><b>Delta Airline</b> (Aviation)</li>
                <li><b>Shell</b> (Energy)</li>
                <li><b>Nestle</b> (Food and Agriculture)</li>
                <li><b>Tesla</b> (Automotive)</li>
            </ul>
        </div>
    </div>
  )
}

export default Sellers