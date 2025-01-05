"use client";

const useHandleScroll = () => {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      const target = window.document.getElementById(targetId);
      if (!target) return;

      const navHeight = 100;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return { handleScroll };
};

export default useHandleScroll;
