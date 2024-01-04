'use client'
import { useState } from "react";
import { Button } from "./ui/button";

const links = [
  {
    name: 'ABOUT CADDIE'
  },
  {
    name: 'PRICING'
  },
  {
    name: 'SUPPORT'
  },
]

export const NavBar = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (

    <nav className="bg-white border border-gray-200 w-screen fixed top-0 right-0 rounded-bl-3xl rounded-br-3xl z-50">
      <div className="max-w-[1440px] w-11/12 flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/card-icon.svg" className="h-8" alt="Caddie Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Caddie
          </span>
        </div>

        <button onClick={toggleNav} className="md:hidden">
        <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </button>

        <ul className={`font-medium flex md:flex-row items-center md:space-x-8 rtl:space-x-reverse ${isNavOpen ? 'flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 absolute top-20 right-0 w-screen' : 'hidden md:flex md:p-0 md:mt-0 md:border-0 md:bg-white'}`}>
          {links.map(link => (
            <li key={link.name}>
              <a href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-emerald-400 md:p-0"
              >
                {link.name}
              </a>
            </li>
          ))}
          <Button>Login</Button>
        </ul>
        
      </div>
    </nav>

  );
};


  

