'use client';

import { useRouter } from "next/navigation";
import Link from "next/link";
import { HiOutlineSun, HiOutlineMoon, HiX } from "react-icons/hi";

import { useState } from 'react';
import type { ButtonHTMLAttributes } from 'react';
// import { useEffect } from 'react';
// import { signIn, signOut } from '../../../auth';
import clsx from 'clsx';
import { updateActivityStatus, updateOpportunityStatus } from "../lib/actions";
import { Status } from '@/app/lib/definitions'


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
      className="p-2 rounded "
    >
      {darkMode ? (
        <HiOutlineSun />
      ) : (
        <HiOutlineMoon />
      )}
    </button>
  );
};

export function PrimaryButton({
  children,
  ...rest
} : {
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button 
            {...rest}
            className="rounded bg-blue-900 px-5 py-2 text-white cursor-pointer"
        >
            {children}
        </button>
    )
}

export function SecondaryButton({
  children,
  className,
  ...rest
} : {
  children: React.ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button 
      {...rest}
      className={clsx(
        "rounded bg-gray-50 px-2 py-2 cursor-pointer",
        className
      )}
    >
      {children}
    </button>
  )
}

export function CloseModalButton({ route } : { route? : string })  {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  }

  if (route) {
    return (
      <Link href={route}>x</Link>
    );
  }

  return (
    <button className="cursor-pointer" onClick={handleClose}>
      <HiX />
    </button>
  );
}

const statusColors: Record<Status, string> = {
  Pending: "bg-yellow-50 text-gray-800",
  Approved: "bg-gray-50 text-gray-800",
  Denied: "bg-red-500 text-white",
  Archived: "bg-gray-200 text-gray-400",
  Planned: "bg-green-400 text-white",
};

export function StatusButton({ type, id, initialStatus }: { type: string, id:number, initialStatus: Status }) {
  const [status, setStatus] = useState<Status>(initialStatus);
  const [open, setOpen] = useState(false);

  const handleSelect = (newStatus: Status) => {
    setStatus(newStatus);
    setOpen(false);
    if (type === "activity") {
      updateActivityStatus(id, newStatus);
    } else {
      updateOpportunityStatus(id, newStatus);
    }
    
  };

  return (
    <div className="relative inline-block text-left">
      <SecondaryButton
        className={clsx(statusColors[status])}
        onClick={(e) => {
          setOpen(!open);
          e.stopPropagation();
        }}
      >
        {status}
      </SecondaryButton>

      {open && (
        <div className="absolute mt-2 w-30 bg-white border border-gray-300 rounded-xl shadow-lg z-10">
          {(["Pending", "Approved", "Denied", "Planned", "Archived"] as Status[])
            .filter((s) => s !== status)
            .map((s) => (
              <div
                key={s}
                className={clsx("px-4 py-2 cursor-pointer hover:bg-gray-100", statusColors[s])}
                onClick={(e) => {
                  handleSelect(s);
                  e.stopPropagation();
                }}
              >
                {s}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}