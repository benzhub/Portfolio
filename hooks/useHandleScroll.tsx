"use client";

import { useEffect, useState } from "react";

const useHandleScroll = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (!isClient) return;
    
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (!target) return;

    const navHeight = 100;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - navHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  };

  return { handleScroll };
};

export default useHandleScroll;
