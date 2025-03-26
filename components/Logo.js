"use client"; 
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold"
        initial={{ backgroundColor: "#121212" }} // Start with black
        whileHover={{ 
          backgroundColor: [
            "rgba(131,58,180,1)", 
            "rgba(253,29,29,1)", 
            "rgba(252,176,69,1)", 
            "rgba(131,58,180,1)"
          ],
          transition: { duration: 1, repeat: Infinity } // Keep looping while hovering
        }}
        onHoverEnd={(e) => e.target.style.backgroundColor = "#121212"} // Reset to black on hover end
        whileTap={{ scale: 0.9 }}
      >
        IJ
      </MotionLink>
    </div>
  );
};

export default Logo;
