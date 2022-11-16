import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";

import Modal from './Modal/Modal.js';

const NavBar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link:'Home',
      href:'/'
    },
    {
      id: 2,
      link: 'Place to stay',
      href: 'place_to_stay'
    },
    {
      id: 3,
      link:'NFTs',
      href:'/'
    },
    {
      id: 4,
      link:'Community',
      href:'/'
    },

  ]
  return (
    <div className="md:px-16 md:py-12 flex justify-between items-center w-full h-20 px-4 fixed bg-white">
      <div className="p-2">
      <img
        src="./Images/Logos/Logo.svg"
        alt="Metabnb logo"
        className="w-2/3 md:1/4"/>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, href}) => (
          <li
            key={id}
            className ="text-lg leading-6 px-4 cursor-pointer hover:scale-105 duration 200"
              >
              {link}
              </li>
        ))}
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
          {links.map(({ id, link}) => (
            <li
              key={id}
              className =" px-4 py-6 text-4xl cursor-pointer hover:scale-105 duration 200"
                >
                {link}
                </li>
              ))}
            </ul>
      )}

    </div>
  )
}

export default NavBar;
