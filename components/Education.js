import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";
const Details = ({ type, time, place, info }) => {
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
          {type}
        </h3>
        <span className="font-medium text-75 capitalize xs:text-sm">
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
      <h2 className="font-bold text-8xl mb-32 w-full text-center origin-top max-md:text-6xl xs-text-4xl max-md:mb-16">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top xs:left-[20px] max-md:left-7 "
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Bachelor of Arts In English"
            time="2018-2021"
            place="Sri Parasakthi College for Women, Courtallam"
            info="Focused on analyzing literature through critical thinking and interpretation. Developed a strong eye for detail, independent thought, and the ability to observe patterns and meaning in complex texts and ideas."
          />
          <Details
            type="UX/UI Design Professional Certificate"
            time="2024"
            place="Coursera – Offered by Google"
            info=" Completed an in-depth program covering the foundations of user experience design, including user research, wireframing, prototyping, and usability testing. Gained hands-on experience with design tools and the UX design process from start to finish."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
