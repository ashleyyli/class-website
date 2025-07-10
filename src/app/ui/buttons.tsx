'use client';

import { SunIcon, MoonIcon } from './icons';
import { useState } from 'react';
// import { useEffect } from 'react';

export function DisplayToggle() {
    const [darkMode, setDarkMode] = useState(false);

    // TODO: https://nextjs.org/docs/messages/react-hydration-error
    // https://flowbite.com/docs/customize/dark-mode/

//   const [darkMode, setDarkMode] = useState(() => {
//   if (typeof window !== 'undefined') {
//     return localStorage.getItem('theme') === 'dark' ||
//       (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
//   }
//   return false; // Default to light mode during SSR
// });

//   useEffect(() => {
//   if (typeof window !== 'undefined') {
//     const root = document.documentElement;
//     if (darkMode) {
//       root.classList.add('dark');
//       localStorage.setItem('theme', 'dark');
//     } else {
//       root.classList.remove('dark');
//       localStorage.setItem('theme', 'light');
//     }
//   }
// }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
    //   text-yellow-500 dark:text-gray-200
      className="p-2 rounded "
    >
      {darkMode ? (
        <SunIcon />
      ) : (
        <MoonIcon />
      )}
    </button>
  );
};


// : {
//     title: string,
//     onClick: MouseEventHandler<HTMLButtonElement>,  // ??
// }
// choppy solution
export function PrimaryButton({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <div className="rounded bg-cyan-700 px-5 py-2 text-lg text-white">
            {children}
        </div>
    )
}

export function SecondaryButton({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <div className="rounded bg-gray-50 px-2 py-1">
            {children}
        </div>
    )
}