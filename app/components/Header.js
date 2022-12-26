import Link from "next/link";
import Image from "next/image";
import Login from "./Login";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Header() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <svg
          class="w-6 h-6"
          fill="none"
          role="button"
          onClick={() => setTheme("light")}
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          ></path>
        </svg>
      );
    } else {
      return (
        <svg
          class="w-6 h-6"
          fill="none"
          role="button"
          onClick={() => setTheme("dark")}
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          ></path>
        </svg>
      );
    }
  };

  return (
    <header className="flex bg-slate-200 px-10 py-2 dark:bg-black">
      <Link href={`/`} className="flex-grow flex items-center">
        <Image
          src="/adaltas.svg"
          className="cursor-pointer h-6 mr-5"
          alt="Adaltas Logo"
          width={25}
          height={25}
        />
        <span className="rounded py-1 px-2 hover:bg-slate-600 hover:text-slate-100">
          Web technologies
        </span>
      </Link>
      <ul className="flex gap-5">
        <li className="rounded py-1 px-2 hover:bg-slate-600 hover:text-slate-100">
          <Link href="/articles">Articles</Link>
        </li>
        <li className="rounded py-1 px-2 hover:bg-slate-600 hover:text-slate-100">
          <Link href="/about">About us</Link>
        </li>
        <li className="rounded py-1 px-2 hover:bg-slate-600 hover:text-slate-100">
          <Link href="/contact">Contact us</Link>
        </li>
        <li className="rounded py-1 px-2 text-slate-600 border border-cyan-700 hover:bg-cyan-500 hover:text-slate-50">
          <Login />
        </li>
        <li>{renderThemeChanger()}</li>
      </ul>
    </header>
  );
}
