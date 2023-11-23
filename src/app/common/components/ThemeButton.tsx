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
    <div className="w-24 lg:w-28 h-7 lg:h-8">
      <select
        className="block w-full h-full p-0 px-1 lg:p-1 text-sm lg:text-base text-box rounded"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        <option value="system">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
    </div>
  );
}
