"use client";

import CustomCursor from "@/components/shared/CustomCursor";
import { NavItem } from "@/constants/constants";
import Home from "@/sections/Home";
import Navbar from "@/sections/Navbar";
import { useEffect, useState } from "react";

export default function Page() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [activeSection, setActiveSection] = useState<NavItem>("home")


  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          )[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        threshold: [0.2, 0.5, 0.8],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);


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

      <Navbar isDesktop={isDesktop} activeSection={activeSection} />

      <section id="home">
        <Home isDesktop={isDesktop} />
      </section>

    </main>
  );
}