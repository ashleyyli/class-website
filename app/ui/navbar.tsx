import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import clsx from 'clsx';
import { AuthButton } from './auth-button';

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
      <header className="p-3 border-b-1 border-b-gray-100 bg-blue-950 text-white">
        <nav className="flex flex-col md:flex-row items-center">
          <Link className="text-3xl min-w-fit pl-6 pr-14 align-text-bottom font-bold" href="/" title="className">
            {className}
          </Link>
          <div className="flex flex-row items-center w-full justify-between">
            <div className="flex flex-row text-xl items-center space-x-4 pr-4">
              {links.map((link) => {
                return (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    className="align-text-bottom pr-4 text-white"
                  >
                    <p>{link.name}</p>
                  </Link>
                )
              })}
            </div>
            <AuthButton />
            {/* <DisplayToggle /> */}
          </div>
        </nav>
      </header>
    </div>
  );
}
