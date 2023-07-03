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
    <select value={theme} onChange={(e) => setTheme(e.target.value)} className="block theme-item cursor-pointer px-2 py-2 md:py-2.5 text-base text-center  bg-transparentappearance-none focus:outline-none focus:ring-0 peer">
      <option value="system" selected>
        System
      </option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  );
}
