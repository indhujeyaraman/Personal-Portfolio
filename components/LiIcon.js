import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const LiIcon = ({ reference }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (reference?.current) {
      setIsMounted(true); // Ensure the reference is mounted
    }
  }, [reference]);

  // Only initialize scroll when the reference is ready
  const { scrollYProgress } = useScroll({
    target: isMounted ? reference : undefined,
    offset: ["start end", "center center"], // Changed offset for better visibility
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0.01, 1]);

  return (
    <figure className="absolute left-0 stroke-dark">
      <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-primary stroke-1 fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-[5] fill-light"
          strokeLinecap="round"
          style={{ pathLength }}
        />
        <circle cx="75" cy="50" r="10" className="animate-pulse stroke-1 fill-primary" />
      </svg>
    </figure>
  );
};

export default LiIcon;
