'use client';

import BurgerMenu from '@components/AppHeader/BurgerMenu';
import Logo from '@components/logo';
import { HEADER_MENU } from '@src/constants/header';
import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';

const AppHeader = () => {
  return (
    <header className="border-gray z-50 flex w-full flex-wrap border-b py-4 sm:py-5 md:flex-nowrap md:justify-start md:py-6 dark:border-neutral-700">
      <nav className="relative mx-auto flex w-full max-w-7xl basis-full flex-wrap items-center px-4 md:grid md:grid-cols-12 md:px-8">
        <div className="flex md:col-span-2">
          <Link
            className="inline-block flex-none rounded-xl text-xl font-semibold focus:opacity-80 focus:outline-none"
            href="/"
            aria-label="Katy Cakes home page"
          >
            <Logo />
          </Link>
        </div>

        <div className="ms-auto flex items-center gap-x-3 py-1 md:order-3 md:col-span-1 md:gap-x-2">
          <ThemeSwitcher />

          <BurgerMenu />
        </div>

        <div
          id="hs-navbar-hcail"
          className="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 md:order-2 md:col-span-9 md:block md:w-auto md:basis-auto"
          aria-labelledby="hs-navbar-hcail-collapse"
        >
          <div className="mt-5 flex flex-col gap-x-0 gap-y-4 md:mt-0 md:flex-row md:items-center md:justify-center md:gap-x-7 md:gap-y-0">
            {HEADER_MENU.map(({ name, link }) => (
              <div key={name}>
                <Link
                  className="relative inline-block text-primary before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:h-1 before:w-full hover:before:bg-secondary focus:outline-none focus:before:bg-secondary dark:text-white"
                  href={link}
                  aria-current="page"
                >
                  {name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
