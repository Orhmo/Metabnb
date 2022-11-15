import React from 'react';

import One from '../../Images/Nft_Places/1.svg';
import Two from '../../Images/Nft_Places/2.svg';
import Three from '../../Images/Nft_Places/3.svg';
import Four from '../../Images/Nft_Places/4.svg';
import Five from '../../Images/Nft_Places/5.svg';
import Six from '../../Images/Nft_Places/6.svg';
import Seven from '../../Images/Nft_Places/7.svg';
import Eight from '../../Images/Nft_Places/8.svg';
import Nine from '../../Images/Nft_Places/9.svg';
import Ten from '../../Images/Nft_Places/10.svg';
import Eleven from '../../Images/Nft_Places/11.svg';
import Twelve from '../../Images/Nft_Places/12.svg';
import Thirteen from '../../Images/Nft_Places/13.svg';
import Fourteen from '../../Images/Nft_Places/14.svg';
import Fifteen from '../../Images/Nft_Places/15.svg';
import Sixteen from '../../Images/Nft_Places/16.svg';

import { FaStar } from 'react-icons/fa';

const Place_to_stay = () => {
  const cards = [
    {
      id:1,
      src:One
    },
    {
      id:2,
      src:Two
    },
    {
      id:3,
      src:Three
    },
    {
      id:4,
      src:Four
    },
    {
      id:5,
      src:Five
    },
    {
      id:6,
      src:Six
    },
    {
      id:7,
      src:Seven
    },
    {
      id:8,
      src:Eight
    },
      {
        id:9,
        src:Nine
      },
      {
        id:10,
        src:Ten
      },
      {
        id:11,
        src:Eleven
      },
      {
        id:12,
        src:Twelve
      },
      {
        id:13,
        src:Thirteen
      },
      {
        id:14,
        src:Fourteen
      },
      {
        id:15,
        src:Fifteen
      },
      {
        id:16,
        src:Sixteen
      },
  ]
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:px-36 md:px-12 lg:px-4 duration-200 hover:scale=105">
  {cards.map(({ id, src}) => (
    <div key={id}>
      <div className="cursor-pointer box m-2 p-4">
        <img src={src} alt="" className=" duration-200 hover:scale=105 p-4"/>
        <div className="flex justify-between mt-2">
          <span className="text-[10px]">Desert King</span>
          <p className="text-[10px] font-bold"> 1MBT per night</p>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-[10px]">2345km away</span>
          <p className="text-[10px]"> available for 2weeks stay</p>
        </div>
        <div className="flex my-2 purple">
          <FaStar className="mr-1"/>
          <FaStar className="mx-1"/>
          <FaStar className="mx-1"/>
          <FaStar className="mx-1"/>
          <FaStar className="mx-1"/>
        </div>
      </div>
      </div>
    ))}
</div>
  )
}
export default Place_to_stay;
