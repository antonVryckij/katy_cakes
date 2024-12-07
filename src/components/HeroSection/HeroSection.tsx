import macaronsImage from '@public/images/macarons.png';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="mx-auto flex h-[calc(100vh-100px)] max-w-[85rem] px-4 font-normal sm:px-6 lg:px-8">
      <div className="grid gap-4 md:grid-cols-2 md:items-center md:gap-6 xl:gap-10">
        <div>
          <h1 className="block text-4xl font-extrabold text-primary sm:text-4xl lg:text-[3.5rem] lg:leading-tight dark:text-white">
            Ми не просто готуємо, ми створюємо ваші емоції!
            {/*We do not cook, we create your emotions!*/}
          </h1>
          <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">
            Свіжі кондитерські вироби, створені з любов&#39;ю та найкращих інгредієнтів, щоб додати
            солодощів у кожну мить.
          </p>

          <div className="mt-7 grid w-full gap-3 sm:inline-flex">
            <Link
              className="inline-flex items-center justify-center gap-x-2 rounded-lg border border-transparent bg-secondary px-4 py-3 text-sm font-medium text-primary hover:cursor-pointer hover:bg-secondary hover:opacity-75 disabled:pointer-events-none disabled:opacity-50"
              href="#"
            >
              Переглянути меню
            </Link>
            <Link
              className="inline-flex items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 focus:bg-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              href="#"
            >
              Про нас
            </Link>
          </div>
        </div>

        <div className="relative ms-4">
          <Image src={macaronsImage} alt={'Plate of macarons'} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
