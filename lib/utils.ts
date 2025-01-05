import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
  e.preventDefault();
  if (typeof window === 'undefined') return;
  const target = document.getElementById(targetId);
  if (!target) return;

  const navHeight = 100; // 增加一些額外空間
  const elementPosition = target.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - navHeight;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
};