"use client";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export default function TransitionProvider({ children }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      {/* Layered sliding panels */}
      <motion.div
        key={`slide1-${pathname}`} // unique key
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-[100] bg-primary"
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        exit={{ x: ["0%", "100%"] }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        key={`slide2-${pathname}`} // unique key
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-[90] bg-light"
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        exit={{ x: ["0%", "100%"] }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        key={`slide3-${pathname}`} // unique key
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-[80] bg-dark"
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        exit={{ x: ["0%", "100%"] }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
      />

      {/* Actual page content transition */}
      <motion.div
        key={`content-${pathname}`} // unique key
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}