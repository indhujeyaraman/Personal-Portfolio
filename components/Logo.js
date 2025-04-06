"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const MotionLink = motion(Link);

const Logo = () => {
  const [mode] = useThemeSwitcher();

  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className={`w-16 h-16 flex items-center justify-center rounded-full text-2xl font-bold border border-solid border-transparent
          ${mode === "dark" ? "bg-light text-dark" : "bg-dark text-light"}`}
        whileHover={{
          backgroundColor: [
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
        onHoverEnd={(e) => {
          // Reset background and text color on hover end
          e.target.style.backgroundColor = mode === "dark" ? "white" : "#121212";
          e.target.style.color = mode === "dark" ? "black" : "white";
        }}
        whileTap={{ scale: 0.9 }}
      >
        IJ
      </MotionLink>
    </div>
  );
};

export default Logo;
