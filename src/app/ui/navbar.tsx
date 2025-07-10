'use client'; // maybe move nav links into separate component to reduce client side components

import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import clsx from 'clsx';
import { DisplayToggle } from './buttons';

const className = "Class Name";

const links = [
  { 
    name: 'Home', 
    href: '/',
  },
  { 
    name: 'Activities', 
    href: '/activities',
  },
  { 
    name: 'Opportunities', 
    href: '/opportunities',
  },
  { 
    name: 'Contact', 
    href: '/contact',
  },
];

export default function SideNav() {
  return (
    <div className="flex h-full flex-col">
      {/*  dark:bg-slate-950/20 */}
      <header className="p-4 bg-cyan-100">
        <nav className="flex flex-col md:flex-row items-center">
          <a className="text-3xl min-w-fit pl-6 pr-14 align-text-bottom" href="/" title="className">
            {className}
          </a>
          <div className="flex flex-row items-center w-full justify-between">
            <div className="text-2xl flex items-center space-x-4 align-text-bottom">   
              {links.map((link) => {
                return (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    className="align-text-bottom pr-4"
                  >
                    <p>{link.name}</p>
                  </Link>
                )
              })}
            </div> 
            <DisplayToggle />
          </div>
        </nav>
      </header>
    </div>
  );
}
