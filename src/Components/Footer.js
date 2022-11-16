import React from 'react';
import {FaInstagram, FaFacebookF, FaTwitter} from  "react-icons/fa"

const Footer = () => {
  const community = ['NFT', 'Tokens', 'Landlords', 'Discord'];
  const places = ['Castle', 'Farms', 'Beach', ' ', ' ', 'Learn more'];
  const about_us = ['Road map', 'Creators', 'Career', 'Contact us'];

  return (
    <div className="bg-black text-white grid sm:grid-cols-2 md:grid-cols-4">
    <div className="mt-10 mx-8 align-center text-lg flex justify-between md:mx-28">
      <div className="mb-2">
      <img src="../Images/Footer/Logo.svg" alt="Metabnb Logo" className="my-4 w-32"/>

        <div className="flex mt-16 justify-between w-[100px] ">
            <span className="mr-4"><FaFacebookF/></span>
            <span className="mr-4"><FaInstagram/></span>
            <span className=""><FaTwitter/></span>
          </div>

        <div>
        <p className="test-sm text-white m-2">&copy 2022 Metabnb</p>
      </div>


      <div className="mb-2">
        <p>Community</p>
        {community.map((e) => (
          <div className="text-[12px] mb-2">
            <span>{e}</span>
          </div>
        ))}
      </div>

      <div className="mb-2">
        <p>Places</p>
        {places.map((e) => (
          <div className="text-[12px] mb-2">
            <span>{e}</span>
          </div>
        ))}
      </div>

      <div className="mb-2">
        <p>About Us</p>
        {about_us.map((e) => (
          <div className="text-[12px] mb-2">
            <span>{e}</span>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}
export default Footer;
