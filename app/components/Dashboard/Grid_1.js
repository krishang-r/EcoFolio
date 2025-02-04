"use client";
import Link from "next/link";
import Wallet from "./Wallet"
import Available from "./Available"

const Grid_1 = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-[70%_30%] gap-4 p-6 h-[300px]">
      {/* Block 1 */}
      <div className="bg-green-700 text-white p-6 rounded-lg flex items-center justify-center text-xl font-bold">
        <Wallet />
      </div>

      {/* Block 2 */}
      <div className="bg-green-700 text-white p-6 rounded-lg flex items-center justify-center text-xl font-bold">
        <Available />
      </div>

      {/* Block 3 */}
      <div className="bg-green-900 text-white p-6 rounded-lg shadow-xl flex items-center justify-center text-xl font-bold hover:bg-green-950">
        Produce
      </div>

      {/* Block 4 */}
      <div className="bg-red-700 text-white p-6 rounded-lg shadow-xl flex items-center justify-center text-xl font-bold hover:bg-red-800">
        Sell
      </div>
    </div>
  );
};

export default Grid_1;
