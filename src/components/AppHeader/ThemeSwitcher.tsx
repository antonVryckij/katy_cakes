'use client';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const getIconBasedOnTheme = (theme?: string) => {
    return theme && theme === 'light' ? (
      <Moon width={24} height={24} strokeWidth={1} />
    ) : (
      <Sun width={24} height={24} strokeWidth={1} />
    );
  };

  return (
    <button
      className="flex h-[38px] w-[38px] items-center justify-center rounded-full border hover:bg-gray-100 dark:border-neutral-700 dark:hover:bg-neutral-700"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {mounted ? getIconBasedOnTheme(theme) : null}
    </button>
  );
};

export default ThemeSwitcher;
