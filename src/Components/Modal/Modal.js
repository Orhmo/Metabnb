import React from 'react';
import './Modal.css'

import Fox from './Wallet/fox.png';
import Connect from './Wallet/connect.png';

import {MdOutlineArrowForwardIos} from "react-icons/md";

const Modal = ({open, onClose}) => {
  if (!open) return null
  return (
    <div className="overlay">
      <div className="modalContainer bg-white px-4 pt-5 pb-4 sm:p-4 sm:pb-4">
        <div className="content">
        <p
          onClick={onClose}
          className="closeBtn ">X</p>
        <div className="m-2 mb-4 text-center">
          <h3 className="text-lg font-medium leading-6 text-black">Connect Wallet</h3>
          <p className="text-sm text-grey-500">Choose your prefarred wallet:</p>
          <div>
            <a href="Button" className="mt-3 border rounded-md bg-white inline-flex border-gray-200 w-full justify-between font-mediun text-black px-4 py-2 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 sm:mt-4 sm:text-sm">
              <img src={Fox} alt="Metamask logo"/>
              <span className="mx-2 my-2">Metamask</span>
              <MdOutlineArrowForwardIos className="mx-2 my-2"/>
            </a>
          </div>
          <div>
            <a href="Button" className="modalBtn mt-3 border rounded-md bg-white inline-flex border-gray-200 w-full justify-between font-mediun text-black px-4 py-2 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 sm:mt-4 sm:text-sm">
              <img src={Connect} alt="Wallet logo"/>
              <span className="mx-2 my-2">Wallet connect</span>
              <MdOutlineArrowForwardIos className="mx-2 my-2"/>
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Modal;
