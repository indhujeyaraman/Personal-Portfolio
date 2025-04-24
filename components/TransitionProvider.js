"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { usePathname } from "next/navigation";
const TransitionProvider = ({ children }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathName}>
        <motion.div
          className="fixed w-screen h-screen z-50 rounded-b-[100px] bg-dark"
          style={{ pointerEvents: "none" }}
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />

        <motion.div
          className="fixed m-auto top-0 bottom-0 right-0 left-0 text-light text-8xl cursor-default z-60 w-fit h-fit "
          style={{ pointerEvents: "none" }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {pathName.substring(1)}
        </motion.div>

        <motion.div
          className="fixed w-screen h-screen z-50 rounded-t-[100px] bottom-0 bg-dark"
          style={{ pointerEvents: "none" }}
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <NavBar />

        {children}

        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
