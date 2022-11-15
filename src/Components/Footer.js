import React from 'react';
import {FaInstagram, FaFacebookF, FaTwitter} from  "react-icons/fa"

const Footer = () => {
  const community = ['NFT', 'Tokens', 'Landlords', 'Discord'];
  const places = ['Castle', 'Farms', 'Beach', ' ', ' ', 'Learn more'];
  const about_us = ['Road map', 'Creators', 'Career', 'Contact us'];

  return (
    <div className="bg-black text-white grid sm:grid-cols-2 md:grid-cols-4 ">
    <div className="mt-10 mx-8">
      <div className="">
      <img src="../Images/Footer/Logo.svg" alt="Metabnb Logo"/>

        <div className="flex mt-16 ">
            <span className="mr-4"><FaFacebookF/></span>
            <span className="mr-4"><FaInstagram/></span>
            <span className=""><FaTwitter/></span>
          </div>
      </div>


      <div className="mb-2">
        <p>Community</p>
        {community.map((e) => (
          <div className="text-[10px] mb-2">
            <span>{e}</span>
          </div>
        ))}
      </div>

      <div className="mb-2">
        <p>Places</p>
        {places.map((e) => (
          <div className="text-[10px] mb-2">
            <span>{e}</span>
          </div>
        ))}
      </div>

      <div className="mb-2">
        <p>About Us</p>
        {about_us.map((e) => (
          <div className="text-[10px] mb-2">
            <span>{e}</span>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}
export default Footer;
