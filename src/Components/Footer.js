import React from 'react';
import {FaInstagram, FaFacebookF, FaTwitter} from  "react-icons/fa"

const Footer = () => {
  const community = ['NFT', 'Tokens', 'Landlords', 'Discord'];
  const places = ['Castle', 'Farms', 'Beach', ' ', ' ', 'Learn more'];
  const about_us = ['Road map', 'Creators', 'Career', 'Contact us'];

  return (

<div className="bg-black text-white">

    <div className=" px-16 py-16 grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">

        <div>
		<img src="../Images/Footer/Logo.svg"
			alt="Metabnb Logo"
            	classNmae="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400"/>

              <div className="flex mt-16 justify-between w-[100px] ">
                  <span className="mr-4"><FaFacebookF/></span>
                  <span className="mr-4"><FaInstagram/></span>
                  <span className=""><FaTwitter/></span>
                </div>

                <div>
                <p className="test-sm text-white mt-4"> &#169; 2022 Metabnb</p>
                </div>

        </div>
        <div>
            <h2 class="mb-6 text-lg font-semibold text-white ">Community</h2>
            {community.map((e) => (
          <div className="text-[14px] mb-2">
            <span>{e}</span>
          </div>
        ))}
	</div>

        <div>
            <h2 class="mb-6 text-lg font-semibold text-white">Places</h2>
            {places.map((e) => (
          <div className="text-[14px] mb-2">
            <span>{e}</span>
          </div>
        ))}
        </div>

        <div>
            <h2 class="mb-6 text-lg font-semibold text-white">About Us</h2>
            {about_us.map((e) => (
          <div className="text-[14px] mb-2">
            <span>{e}</span>
          </div>
        ))}
        </div>
    </div>
    </div>
  )
}
export default Footer;
