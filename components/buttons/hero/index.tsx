"use client";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
import ShadowButton from "../shadow";
import useHandleScroll from "@/hooks/useHandleScroll";

function HeroButton() {
  const { handleScroll } = useHandleScroll();
  return (
    <Link
      href="#about"
      className="pt-10"
      onClick={(e) => handleScroll(e, "#about".replace("#", ""))}
    >
      <ShadowButton>
        <div className="flex items-center gap-2">
          <span className="block">View My Showcase</span>
          <FaLocationArrow />
        </div>
      </ShadowButton>
    </Link>
  );
}

export default HeroButton;
