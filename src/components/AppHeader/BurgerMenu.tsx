const BurgerMenu = () => {
  return (
    <div className="md:hidden">
      <button
        type="button"
        className="hs-collapse-toggle flex size-[38px] items-center justify-center rounded-xl border border-gray-200 text-sm font-semibold text-black hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
        id="hs-navbar-hcail-collapse"
        aria-expanded="false"
        aria-controls="hs-navbar-hcail"
        aria-label="Toggle navigation"
        data-hs-collapse="#hs-navbar-hcail"
      >
        <svg
          className="size-4 shrink-0 hs-collapse-open:hidden"
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
          <line x1="3" x2="21" y1="6" y2="6" />
          <line x1="3" x2="21" y1="12" y2="12" />
          <line x1="3" x2="21" y1="18" y2="18" />
        </svg>
        <svg
          className="hidden size-4 shrink-0 hs-collapse-open:block"
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
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
    </div>
  );
};

export default BurgerMenu;
