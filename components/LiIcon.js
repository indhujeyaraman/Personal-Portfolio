import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const LiIcon = ({ reference }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (reference?.current) {
      setIsMounted(true); 
    }
  }, [reference]);

 
  const { scrollYProgress } = useScroll({
    target: isMounted ? reference : undefined,
    offset: ["start end", "center center"], 
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0.01, 1]);

  return (
    <figure className="absolute left-0 stroke-dark">
      <svg className="-rotate-90 max-md:w-[60px] max-md:h-[60px]  xs:w-[40px] xs:h-[40px]" width="75" height="75" viewBox="0 0 100 100">
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
