import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";
const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between max-md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="font-bold capitalize text-2xl max-sm:text-xl xs-text-lg">
          {position} &nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="font-medium text-75 capitalize xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};
const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className=" my-64 ">
      <h2 className="font-bold text-8xl mb-32 w-full text-center origin-top max-md:text-6xl xs-text-4xl max-md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative ">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top xs:left-[20px] max-md:left-7 "
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2 ">
          <Details
            position="Software Engineer Intern"
            company="Hash8.io"
            companyLink="https://www.hash8.io/"
            time="August 2023 - March 2024"
            address="Hosur, India"
            work="Worked on a team developing a web-based IoT billing platform, contributing to the design and implementation of a clean, responsive user interface and assisting with frontend components and middleware development using Next.js."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
