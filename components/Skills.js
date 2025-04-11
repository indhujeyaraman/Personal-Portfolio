import React from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
    className="flex items-center justify-center rounded-full font-semibold text-light bg-dark px-6 py-3 shadow-Dark cursor-pointer absolute max-lg:py-2 max-lg:px-4 max-md:text-sm max-md:py-1.5 max-md:px-3 xs:bg-transparent dark:xs:bg-transparent xs:text-dark xs:font-bold"

      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <Layout>
      <h2 className="font-bold text-8xl mt-20 w-full text-center max-md:text-6xl max-md:mt-32">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circular  max-lg:h-[80vh] max-sm:h-[60vh] xs:h-[50vh] ">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-Dark max-lg:p-6 max-md:p-4 xs:text-xs xs:p-2 "
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-18vw" y="2vw" />
        <Skill name="CSS" x="2vw" y="11vw" />
        <Skill name="JavaScript" x="23vw" y="7vw" />
        <Skill name="ReactJS" x="-16vw" y="16vw" />
        <Skill name="NextJS" x="-26vw" y="-12vw" />
        <Skill name="Tailwind CSS" x="0vw" y="-19vw" />
        <Skill name="Java" x="11vw" y="21vw" />
        <Skill name="Figma" x="-36vw" y="6vw" />
        <Skill name="Framer Motion" x="31vw" y="-5vw" />
        <Skill name="SQL" x="15vw" y="-12vw" />
        <Skill name="Git" x="-3vw" y="-11vw" />
      </div>
    </Layout>
  );
};

export default Skills;
