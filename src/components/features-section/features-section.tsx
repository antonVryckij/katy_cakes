const FeaturesSection = () => {
  return (
    <div className="mx-auto max-w-[85rem] px-4 py-24 sm:px-6 lg:px-8 lg:py-14">
      <div className="relative p-6 md:p-16">
        {/*Grid*/}
        <div className="relative z-10 lg:grid lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="mb-10 lg:order-2 lg:col-span-6 lg:col-start-8 lg:mb-0">
            <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl dark:text-neutral-200">
              Fully customizable rules to match your unique needs
            </h2>

            {/*Tab Navs*/}
            <nav
              className="mt-5 grid gap-4 md:mt-10"
              aria-label="Tabs"
              role="tablist"
              aria-orientation="vertical"
            >
              <button
                type="button"
                className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent dark:hs-tab-active:bg-neutral-700 active rounded-xl p-4 text-start hover:bg-gray-200 focus:bg-gray-200 focus:outline-none md:p-5 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                id="tabs-with-card-item-1"
                aria-selected="true"
                data-hs-tab="#tabs-with-card-1"
                aria-controls="tabs-with-card-1"
                role="tab"
              >
                <span className="flex gap-x-6">
                  <svg
                    className="hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-500 mt-2 size-6 shrink-0 text-gray-800 md:size-7 dark:text-neutral-200"
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
                    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                    <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
                  </svg>
                  <span className="grow">
                    <span className="hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-500 block text-lg font-semibold text-gray-800 dark:text-neutral-200">
                      Advanced tools
                    </span>
                    <span className="dark:hs-tab-active:text-gray-200 mt-1 block text-gray-800 dark:text-neutral-200">
                      Use Preline thoroughly thought and automated libraries to manage your
                      businesses.
                    </span>
                  </span>
                </span>
              </button>

              <button
                type="button"
                className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent dark:hs-tab-active:bg-neutral-700 rounded-xl p-4 text-start hover:bg-gray-200 focus:bg-gray-200 focus:outline-none md:p-5 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                id="tabs-with-card-item-2"
                aria-selected="false"
                data-hs-tab="#tabs-with-card-2"
                aria-controls="tabs-with-card-2"
                role="tab"
              >
                <span className="flex gap-x-6">
                  <svg
                    className="hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-500 mt-2 size-6 shrink-0 text-gray-800 md:size-7 dark:text-neutral-200"
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
                    <path d="m12 14 4-4" />
                    <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                  </svg>
                  <span className="grow">
                    <span className="hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-500 block text-lg font-semibold text-gray-800 dark:text-neutral-200">
                      Smart dashboards
                    </span>
                    <span className="dark:hs-tab-active:text-gray-200 mt-1 block text-gray-800 dark:text-neutral-200">
                      Quickly Preline sample components, copy-paste codes, and start right off.
                    </span>
                  </span>
                </span>
              </button>

              <button
                type="button"
                className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent dark:hs-tab-active:bg-neutral-700 rounded-xl p-4 text-start hover:bg-gray-200 focus:bg-gray-200 focus:outline-none md:p-5 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                id="tabs-with-card-item-3"
                aria-selected="false"
                data-hs-tab="#tabs-with-card-3"
                aria-controls="tabs-with-card-3"
                role="tab"
              >
                <span className="flex gap-x-6">
                  <svg
                    className="hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-500 mt-2 size-6 shrink-0 text-gray-800 md:size-7 dark:text-neutral-200"
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
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                    <path d="M5 3v4" />
                    <path d="M19 17v4" />
                    <path d="M3 5h4" />
                    <path d="M17 19h4" />
                  </svg>
                  <span className="grow">
                    <span className="hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-500 block text-lg font-semibold text-gray-800 dark:text-neutral-200">
                      Powerful features
                    </span>
                    <span className="dark:hs-tab-active:text-gray-200 mt-1 block text-gray-800 dark:text-neutral-200">
                      Reduce time and effort on building modern look design with Preline only.
                    </span>
                  </span>
                </span>
              </button>
            </nav>
            {/*End Tab Navs*/}
          </div>
          {/*End Col*/}

          <div className="lg:col-span-6">
            <div className="relative">
              {/*Tab Content*/}
              <div>
                <div id="tabs-with-card-1" role="tabpanel" aria-labelledby="tabs-with-card-item-1">
                  <img
                    className="rounded-xl shadow-xl shadow-gray-200 dark:shadow-gray-900/20"
                    src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80"
                    alt="Features Image"
                  />
                </div>

                <div
                  id="tabs-with-card-2"
                  className="hidden"
                  role="tabpanel"
                  aria-labelledby="tabs-with-card-item-2"
                >
                  <img
                    className="rounded-xl shadow-xl shadow-gray-200 dark:shadow-gray-900/20"
                    src="https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80"
                    alt="Features Image"
                  />
                </div>

                <div
                  id="tabs-with-card-3"
                  className="hidden"
                  role="tabpanel"
                  aria-labelledby="tabs-with-card-item-3"
                >
                  <img
                    className="rounded-xl shadow-xl shadow-gray-200 dark:shadow-gray-900/20"
                    src="https://images.unsplash.com/photo-1598929213452-52d72f63e307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80"
                    alt="Features Image"
                  />
                </div>
              </div>
              {/*End Tab Content*/}

              {/*SVG Element*/}
              <div className="absolute end-0 top-0 hidden translate-x-20 md:block lg:translate-x-20">
                <svg
                  className="h-auto w-16 text-orange-500"
                  width="121"
                  height="135"
                  viewBox="0 0 121 135"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              {/*End SVG Element*/}
            </div>
          </div>
          {/*End Col*/}
        </div>
        {/*End Grid*/}

        {/*Background Color*/}
        <div className="absolute inset-0 grid size-full grid-cols-12">
          <div className="col-span-full h-5/6 w-full rounded-xl bg-gray-100 sm:h-3/4 lg:col-span-7 lg:col-start-6 lg:h-full dark:bg-neutral-800"></div>
        </div>
        {/*End Background Color*/}
      </div>
    </div>
  );
};

export default FeaturesSection;
