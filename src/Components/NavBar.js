import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

import Modal from './Modal/Modal.js';

const NavBar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [nav, setNav] = useState(false);


  return (
    <div className="md:px-16 md:py-12 flex justify-between items-center w-full h-20 px-4 m-2 bg-white">
      <div className="p-2">
      <img
        src="./Images/Logos/Logo.svg"
        alt="Metabnb logo"
        className="w-2/3 md:1/4"/>
      </div>

      <ul className="hidden md:flex">
        <li className="m-2"><NavLink to="/">Home</NavLink></li>
        <li  className="m-2"><NavLink to="/place_to_stay">Place to Stay</NavLink></li>
        <li  className="m-2">NFTs</li>
        <li  className="m-2">Community</li>
      </ul>

      <div>
      <button
        onClick={() => setOpenModal(true)}
        className="text-white text-sm w-fit px-4 py-1 my-1 rounded-lg">
      Connect Wallet
      </button>
      <Modal open={openModal} onClose={() =>setOpenModal(false)}/>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-black md:hidden"
        >
        {nav ? <FaTimes size={20} /> : <FaBars size={20}/>}
    </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white text-black">
         <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/place_to_stay">Place to Stay</NavLink></li>
          <li>NFTs</li>
          <li>Community</li>
        </ul>
      )}

    </div>
  )
}

export default NavBar;
