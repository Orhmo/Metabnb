import React from 'react';
import {FaInstagram, FaFacebookF, FaTwitter} from  "react-icons/fa"

const Footer = () => {
  const community = ['NFT', 'Tokens', 'Landlords', 'Discord'];
  const places = ['Castle', 'Farms', 'Beach', ' ', ' ', 'Learn more'];
  const about_us = ['Road map', 'Creators', 'Career', 'Contact us'];

  return (
    <div className="flex bg-black text-white justify-between p-2 py-10">
    <div className="mt-10 mx-8 align-center justify-center text-lg grid sm:grid-cols-2 md:grid-cols-4 md:mx-28 sm:mx-5 sm:p-5 ">
      <div className="mb-2 ">
      <img src="../Images/Footer/Logo.svg" alt="Metabnb Logo" className="my-4 w-32"/>

        <div className="flex mt-16 justify-between w-[100px] ">
            <span className="mr-4"><FaFacebookF/></span>
            <span className="mr-4"><FaInstagram/></span>
            <span className=""><FaTwitter/></span>
          </div>

          <div>
          <p className="test-sm text-white m-4"> &#169; 2022 Metabnb</p>
          </div>

      </div>


      <div className="mb-4 mx-40">
        <p>Community</p>
        {community.map((e) => (
          <div className="text-[12px] mb-2">
            <span>{e}</span>
          </div>
        ))}
      </div>

      <div className="mb-4 mx-40">
        <p>Places</p>
        {places.map((e) => (
          <div className="text-[12px] mb-2">
            <span>{e}</span>
          </div>
        ))}
      </div>

      <div className="mb-4 mx-35">
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
