"use client";

import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import AuroraBackground from ".";

function AuroraBackgroundDemo({children}: { children: ReactNode }) {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 100, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 w-screen"
      >
        {children}
      </motion.div>
    </AuroraBackground>
  );
}

export default AuroraBackgroundDemo;
