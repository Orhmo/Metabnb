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
import {VscSettings} from  'react-icons/vsc';

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

  const sublinks = [
    {
      id: 1,
      link:'Resturant'
    },
    {
      id: 2,
      link: 'Cottage'
    },
    {
      id: 3,
      link:'Castle'
    },
    {
      id: 4,
      link:'fantast city'
    },
    {
      id: 5,
      link:'beach'
    },
    {
      id: 6,
      link:'Carbins'
    },
    {
      id: 7,
      link:'Off-grid'
    },
    {
      id: 8,
      link:'Form'
    },
  ]
  return (
    <div className="mt-20 mx-16 my-16">
    <div className="justify-center flex flex-row">
    <div className="pt-4">
    <ul className="hidden md:flex">
      {sublinks.map(({ id, link}) => (
        <li
          key={id}
          className ="text-lg mb-6 leading-6 px-8 cursor-pointer hover:scale-105 duration 200"
            >
            {link}
            </li>
      ))}
    </ul>
    </div>

    <div className="flex flex-row mb-4">
    <select
      id="places"
      name="places"
      className="flex md:hidden border border-black rounded-md w-auto sm:ml-12 m-2 p-2"
      >
      <option value=" " hidden>Places</option>
      <option value="1">Resturant</option>
      <option value="2">Cottage</option>
      <option value="3">Castle</option>
      <option value="4">fanstast city</option>
      <option value="5">beach</option>
      <option value="6">Carbins</option>
      <option value="7">Off-grid</option>
      <option value="8">Farm</option>
    </select>

    <a href="Location"
      className="flex m-2 p-2 bg-white border border-black sm:mr-32 rounded-md w-auto">
      Location  <span className="ml-2 pt-1 mr-2"><VscSettings/></span>
    </a>
    </div>

    </div>

  <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 md:ml-[8vw] mr-auto sm:ml-[2vw]">
  {cards.map(({ id, src}) => (
    <div key={id}>
      <div className="cursor-pointer box m-2 p-4 duration-200 hover:scale-105">
        <img src={src} alt="" className=" duration-200 hover:scale-105 p-4"/>
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
</div>
  )
}
export default Place_to_stay;
