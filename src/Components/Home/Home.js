import './Home.css';
import React from 'react';

import One from '../../Images/Nft_Places/5.svg';
import Two from '../../Images/Nft_Places/6.svg';
import Three from '../../Images/Nft_Places/7.svg';
import Four from '../../Images/Nft_Places/8.svg';
import Five from '../../Images/Nft_Places/1.svg';
import Six from '../../Images/Nft_Places/2.svg';
import Seven from '../../Images/Nft_Places/3.svg';
import Eight from '../../Images/Nft_Places/4.svg';

import { FaStar } from 'react-icons/fa';

const Home = () => {
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
    ]
  return (
    <div name="home" className=" w-full">

      <div className="m-16 max-w-screen-xl flex flex-col items-center justify-between h-full  md:flex-row">
        <div className="flex flex-col justify-center h-full m-6 mx-auto">

          <h2 className=" text-4xl sm-text-xl font-bold text-black"> Rent a <span className="purple">Place</span> away from <br/>
              <span className="purple">Home</span> in the <span className="purple">Metaverse</span></h2>

              <p className="text-lg text-black py-4 mt-4 ">we provide you access to luxury and affordable houses <br/>
              in the metaverse get a chance to turn your<br/>
              imagination to reality at your comfort zone</p>

              <div>
              <form className="flex">
                <input
                  type="text"
                  name="text"
                  placeholder="Search for location"
                  className="text-sm text-white w-fit px-6 py-3 my-2"
                />
              <button
                className="text-white w-fit px-6 py-3 my-2">
                Search
              </button>
              </form>
              </div>
          </div>
          <div className="mt-8 py-4 w-full md:px-12  md:w-1/2">
            <img
              src="../../Images/Home/hero-image_1.svg"
              alt="home"
              />
          </div>
      </div>

      <div className="flex banner  my-4 w-full h-12">
        <img
          src="../../Images/Home/MBToken.svg"
          alt="MBToken"
          className="w-1/3 my-3 md:my-2"/>

        <img
          src="../../Images/Home/Metamask.svg"
          alt="Metamask"
          className="w-1/3 my-3 md:my-2"/>

        <img
          src="../../Images/Home/opensea.svg"
          alt="Opensea"
          className="w-1/3 my-3 md:my-2"/>
      </div>


      <div className="px-16 py-6 justify-center w-full h-full">
        <div className="pb-4">
        <h3 className="font-bold text-3xl md:text-5xl m-8"> Inspiration for your next adventure</h3>
        </div>

          <div className="cards grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-12  md:ml-[8vw] mr-auto sm:ml-[2vw]">
        {cards.map(({ id, src}) => (
          <div key={id}>
            <div className="cursor-pointer box m-2 p-4 duration-200 hover:scale-105 p-4">
              <img src={src} alt="" className="duration-200 hover:scale-105 p-4"/>
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

      <div className="p-bg p-8 md:justify-between md:flex-row">
        <div className="flex flex-cols mb-10 md:mx-20 md:my-24 ">
          <div>
          <h2 className=" text-4xl sm-text-xl font-bold text-white m-2">
            Metabnb NFTs </h2>
            <p className="my-2 p-2 md:mb-4 text-white text-sm">Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are
            traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>

          <a href="Learn"
          className=" m-4 purple bg-white text-lg rounded-lg px-4 py-2 w-1/3">Learn more</a>
          </div>

          <div className="py-4 w-full">
            <img
              src="../../Images/Home/hero-image_2.svg"
              alt="home"
              />
          </div>
        </div>
        </div>
    </div>
  )
}
export default Home;
