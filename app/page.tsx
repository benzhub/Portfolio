import AuroraBackgroundDemo from "@/components/background/aurora/demo";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import {Suspense} from "react";

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
          <Grid />
          <RecentProjects />
          <Footer />
        </div>
      </main>
    </Suspense>
  );
}
