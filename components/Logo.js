"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const MotionLink = motion(Link);

const Logo = () => {
  const [mode] = useThemeSwitcher();

  // Define base styles
  const backgroundColor = "#121212"; // bg-dark
  const textColor = "#ffffff"; // text-light
  const borderColor = mode === "dark" ? "#f5f5f5" : "transparent";

  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className={`w-16 h-16 flex items-center justify-center rounded-full text-2xl font-bold`}
        animate={{
          backgroundColor,
          color: textColor,
          border: `1px solid ${borderColor}`,
        }}
        whileHover={{
          backgroundColor: [
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
        whileTap={{ scale: 0.9 }}
      >
        IJ
      </MotionLink>
    </div>
  );
};

export default Logo;
