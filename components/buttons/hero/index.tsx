"use client";
import { handleScroll } from "@/lib/utils";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
import ShadowButton from "../shadow";

function HeroButton() {
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
