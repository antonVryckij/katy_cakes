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
      <Moon width={18} height={18} />
    ) : (
      <Sun width={18} height={18} />
    );
  };

  return (
    <button
      className="flex h-[32px] w-[32px] items-center justify-center rounded-full border bg-gray-50 hover:bg-gray-100 dark:bg-neutral-700 dark:hover:bg-neutral-600"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {mounted ? getIconBasedOnTheme(theme) : null}
    </button>
  );
};

export default ThemeSwitcher;
