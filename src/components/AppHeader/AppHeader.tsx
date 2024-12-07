'use client';

import Logo from '@components/logo';
import { HEADER_MENU } from '@src/constants/header';
import Link from 'next/link';
import BurgerMenu from './BurgerMenu';
import ThemeSwitcher from './ThemeSwitcher';

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
          {HEADER_MENU.map(({ name, link }) => (
            <Link className="nav-link" href={link} aria-current="page" key={name}>
              {name}
            </Link>
          ))}
        </div>

        <ThemeSwitcher />
      </nav>
    </header>
  );
};

export default AppHeader;
