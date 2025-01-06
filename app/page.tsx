import AuroraBackgroundDemo from "@/components/background/aurora/demo";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import dynamic from "next/dynamic";
import { navItems } from "@/data";
import {Suspense} from "react";
import About from "@/components/about";
const FloatingNav = dynamic(() => import("@/components/ui/FloatingNavbar"), {
  ssr: false,
});

export default function Home() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
        </div>
        <AuroraBackgroundDemo>
          <Hero />
        </AuroraBackgroundDemo>
        <div className="max-w-7xl w-full">
          <About />
          <Grid />
          <RecentProjects />
          <Footer />
        </div>
      </main>
    </Suspense>
  );
}
