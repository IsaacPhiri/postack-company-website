import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='navbar bg-neutral text-neutral-content'>
      <div className="navbar-start">
      <div className="w-10 rounded-full">
      <Link href="https://www.f6s.com/postack-solutions" target='_blank'>
        <Image src="/Postack_logo.jpeg" alt="Postack Solutions" width={40} height={40}/>
      </Link>
    </div>
      <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-32 p-2 shadow text-base-content">
        <li><a href='#'>Services</a></li>
        <li><a href='#'>Hosting</a></li>
        <li><a href='#'>Contact</a></li>
        <li><a href='#'>About Us</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl" href='https://www.f6s.com/postack-solutions' target='_blank'>Postack Solutions</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a href='#'>Services</a></li>
      <li><a href='#'>Hosting</a></li>
      <li><a href='#'>Contact</a></li>
      <li><a href='#'>About Us</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-primary">Learn more</a>
  </div>
    </div>
  )
}

export default Navbar;