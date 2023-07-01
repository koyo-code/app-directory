"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <select value={theme} onChange={(e) => setTheme(e.target.value)} className="block cursor-pointer py-2.5 px-0 w-20 text-base text-center text-gray-500 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
      <option value="system" selected>
        System
      </option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  );
}
