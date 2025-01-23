"use client";

import * as React from "react";
import { Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { GiMoonBats } from "react-icons/gi";

export function ModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Ensure the component only renders after mounting
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Avoid rendering during SSR
    return null;
    console.log(theme);
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      onClick={toggleTheme}
      variant="outline"
      size="icon"
      aria-label="Toggle theme"
    >
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-transform ${
          resolvedTheme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"
        }`}
      />
      <GiMoonBats
        className={`absolute h-[1.2rem] w-[1.2rem] transition-transform ${
          resolvedTheme === "dark" ? "rotate-0 scale-100" : "-rotate-90 scale-0"
        }`}
      />
    </Button>
  );
}
