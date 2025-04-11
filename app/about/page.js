"use client";
import Brain from "@/components/Brain";
import Head from "next/head";

import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import AnimatedText from "@/components/AnimatedText";

const About = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });
  const profilePic = "/images/profile/developer-pic-2.jpg";
  return (
    <>
      <Head>
        <title>Indhu | About Page</title>
        <meta name="description" content="About Indhu's work and projects" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center min-h-screen bg-light text-dark">
        <AnimatedText text="Passion Fuels Purpose!" className="mb-14 mt-10 lg:hidden max-lg:!7xl max-sm:!text-6xl max-sm:mb-8 xs:!text-4xl" />
        {/* MAIN CONTAINER */}
        <div className="relative h-full flex  ">
          {/* TEXT CONTAINER (SCROLLABLE) */}
          <motion.div className="p-6 sm:p-12 md:p-24 lg:p-32 xl:p-40 flex flex-col gap-12 md:gap-16 lg:gap-20 xl:gap-24 w-full lg:w-2/3 lg:pr-0 xl:w-1/2 overflow-auto">
            {/* BIOGRAPHY SECTION */}
            <div className="flex flex-col gap-8 justify-center relative">
              {/* 1️⃣ PROFILE IMAGE (First) */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                viewport={{ once: true }}
              >
                <Image
                  src={profilePic}
                  alt="Indhu"
                  width={500}
                  height={500}
                  className="w-100 h-110 max-lg:w-full max-lg:h-auto rounded-2xl"
                />
              </motion.div>

              {/* 2️⃣ BIOGRAPHY TITLE (Second) */}
              <motion.h1
                className="font-bold text-3xl uppercase text-dark"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                Biography
              </motion.h1>

              {/* 3️⃣ FIRST PARAGRAPH (Third) */}
              <motion.p
                className="text-lg font-medium"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                  delay: 0.4, // Ensures it appears after "BIOGRAPHY"
                }}
                viewport={{ once: true }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
                aliquid magnam expedita, libero dolor iste cumque? Quae possimus
                magni necessitatibus aperiam, natus quibusdam, fugiat,
                reprehenderit odio fugit laboriosam minus nam?
              </motion.p>

              {/* 4️⃣ SECOND & THIRD PARAGRAPHS (Appear When Scrolled Into View) */}
              {[
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod veniam quibusdam sapiente similique iste ducimus vel. Beatae corporis adipisci ab. Temporibus possimus officiis quasi corporis, ducimus minus quidem aliquam.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod veniam quibusdam sapiente similique iste ducimus vel. Beatae corporis adipisci ab. Temporibus possimus officiis quasi corporis, ducimus minus quidem aliquam.",
              ].map((text, index) => (
                <motion.p
                  key={index}
                  className="text-lg font-medium"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                  viewport={{ once: true }}
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* STICKY SVG CONTAINER */}
          <div className="hidden md:block lg:block lg:w-1/3 xl:w-1/2  relative pt-5">
            <div className="sticky top-0 z-30 flex justify-center items-center h-screen overflow-visible pt-14">
              <Brain
                scrollYProgress={scrollYProgress}
                className="max-w-full  h-full"
              />
            </div>
          </div>
        </div>
        <Skills />

        <Experience />
        <Education />
      </main>
    </>
  );
};

export default About;
