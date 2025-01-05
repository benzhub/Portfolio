"use client";
import { MouseEvent } from "react";

function useHandleScroll() {
  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (typeof window === "undefined") return;
    if(!document) return;
    const target = document.getElementById(targetId);
    if (!target) return;

    const navHeight = 100; // 增加一些額外空間
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - navHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return { handleScroll };
}

export default useHandleScroll;
