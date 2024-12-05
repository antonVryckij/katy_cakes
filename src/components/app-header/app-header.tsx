'use client';

import Logo from '@components/logo';
import Link from 'next/link';
import BurgerMenu from './burger-menu';

const AppHeader = () => {
  return (
    <header className="z-50 flex h-[100px] w-full flex-wrap border-b border-gray-200 dark:border-neutral-700 md:flex-nowrap md:justify-start">
      <nav className="relative mx-auto w-full max-w-[85rem] px-4 py-2 sm:px-6 md:flex md:items-center md:justify-between md:gap-3 lg:px-8">
        <div className="flex items-center justify-between gap-x-1">
          <Link
            className="flex-none text-xl font-semibold text-black focus:opacity-80 focus:outline-none dark:text-white"
            href="/"
            aria-label="Brand"
          >
            <Logo />
          </Link>

          <BurgerMenu />
        </div>

        <div className="flex flex-row gap-5">
          <Link
            className="flex items-center rounded-lg bg-gray-100 p-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            href="#"
            aria-current="page"
          >
            Landing
          </Link>

          <Link
            className="flex items-center rounded-lg p-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            href="#"
          >
            Account
          </Link>

          <Link
            className="flex items-center rounded-lg p-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            href="#"
          >
            Work
          </Link>

          <Link
            className="flex items-center rounded-lg p-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            href="#"
          >
            Blog
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-x-1.5">
          <button
            type="button"
            className="hs-dark-mode inline-flex items-center gap-x-2 rounded-full bg-white/10 px-3 py-2 text-sm hover:bg-black/5 focus:bg-white/20 focus:outline-none hs-dark-mode-active:hidden"
            data-hs-theme-click-value="dark"
          >
            <svg
              className="size-4 shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </svg>
            Dark
          </button>
          <button
            type="button"
            className="hs-dark-mode hidden items-center gap-x-2 rounded-full bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20 focus:bg-white/20 focus:outline-none hs-dark-mode-active:inline-flex"
            data-hs-theme-click-value="light"
          >
            <svg
              className="size-4 shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </svg>
            Light
          </button>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
