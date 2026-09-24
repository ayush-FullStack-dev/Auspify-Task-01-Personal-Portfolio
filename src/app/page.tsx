"use client";

import CustomCursor from "@/components/shared/CustomCursor";
import Home from "@/sections/Home";
import Navbar from "@/sections/Navbar";
import { useEffect, useState } from "react";

export default function Page() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");

    const update = () => {
      setIsDesktop(media.matches);
    };

    update();

    media.addEventListener("change", update);

    return () => {
      media.removeEventListener("change", update);
    };
  }, []);

  return (
    <main className="relative bg-background">
      {isDesktop && <CustomCursor />}

      <Navbar />

      <Home isDesktop={isDesktop} />
    </main>
  );
}