import React from 'react'

const NavBar = () => {
  const links = [
    {
      id: 1,
      link:'Home'
    },
    {
      id: 2,
      link: 'Place to stay'
    },
    {
      id: 3,
      link:'NFTs'
    },
    {
      id: 4,
      link:'Community'
    },

  ]
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 fixed">
      <img src="./Images/Logos/Logo.svg" alt="Metabnb logo"/>

      <ul className="flex">
        {links.map(({ id, link}) => (
          <li
            key={id}
            className ="px-4 cursor-pointer hover:scale-105 duration 200"
              >
              {link}
              </li>
        ))}
      </ul>

      <button>Connect Wallet</button>
    </div>
  )
}

export default NavBar;
