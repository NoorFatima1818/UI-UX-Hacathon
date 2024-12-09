import React from 'react';
import Image from 'next/image';
import { VscSettings } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";

export default function Navbar() {
  return (

    // logo
    <div className='w-full bg-white h-auto flex flex-col md:flex-row items-center justify-between p-4 md:p-8 border-b-2 border-b-[#e7eef6]'>
      <div className="first flex flex-col md:flex-row items-center gap-4 md:gap-16">
        <h1 className='text-[#3563e9] text-4xl font-bold'>MORENT</h1>


         {/* Search Bar */}
      <div className="w-full lg:w-[492px] h-[44px] bg-white border border-[rgba(195,212,233,0.4)] rounded-[70px] flex items-center px-4 mt-4 lg:mt-0 lg:absolute lg:top-[40px] lg:left-[272px]">
        <CiSearch className="text-gray-400 mr-3" />
        <input
          type="text"
          placeholder="Type something here"
          className="flex-1 outline-none bg-transparent text-gray-700"
        />
        <VscSettings className="text-gray-400 ml-3" />
      </div>

      </div>
      <div className="icons mt-4 md:mt-0">
        <Image src={'/assets/rightNav.png'} alt='' width={236} height={44} />
      </div>
    </div>
  );
}