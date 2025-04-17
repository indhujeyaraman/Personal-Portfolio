'use client';

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import TransitionEffect from "./TransitionEffect";

const TransitionLayout = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="relative">
        {/* This effect overlays without unmounting content */}
        <TransitionEffect />
        <div className="relative z-10">{children}</div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TransitionLayout;
