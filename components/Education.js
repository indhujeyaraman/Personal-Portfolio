import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";
const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between "
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="font-bold capitalize text-2xl">{type}</h3>
        <span className="font-medium text-75 capitalize ">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};
const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className=" my-64 ">
      <h2 className="font-bold text-8xl mb-32 w-full text-center origin-top">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top "
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Bachelor of Arts In English"
            time="2018-2021"
            place="Sri Parasakthi College for Women, Courtallam"
            info=" I completed my Bachelor's degree in English from Sri Parasakthi College for Women, Courtallam."
          />
          <Details
            type="Bachelor of Arts In English"
            time="2018-2021"
            place="Sri Parasakthi College for Women, Courtallam"
            info=" I completed my Bachelor's degree in English from Sri Parasakthi College for Women, Courtallam."
          />
          <Details
            type="Bachelor of Arts In English"
            time="2018-2021"
            place="Sri Parasakthi College for Women, Courtallam"
            info=" I completed my Bachelor's degree in English from Sri Parasakthi College for Women, Courtallam."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
