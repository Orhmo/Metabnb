import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

import Modal from './Modal/Modal.js';

const NavBar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [nav, setNav] = useState(false);
  const navigation = [
    { name: "Home", href: "place_to_stay", current: true },
    { name: "Place to stay", href: "place_to_stay", current: false },
    { name: "NFTs", href: "place_to_stay", current: false },
    { name: "Community", href: "place_to-_tay", current: false }
  ];
  
  function classNames(...classes){
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="md:px-16 md:py-12 flex justify-between items-center w-full h-20 px-4 fixed bg-white">
      <div className="p-2">
      <img
        src="./Images/Logos/Logo.svg"
        alt="Metabnb logo"
        className="w-2/3 md:1/4"/>
      </div>

      <ul className="hidden md:flex">
      {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current
                          ? "border-b-2 border-fuchsia-800 text-black"
                          : "text-black hover:border-b-2",
                        "px-3 py-2 text-md font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
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
