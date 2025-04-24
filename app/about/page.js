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
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    container: containerRef,
    layoutEffect: false,
  });

  const profilePic = "/images/profile/developer-pic-2.png";

  return (
    <motion.div
      className="h-full min-h-screen"
      initial={{ y: "-130vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <Head>
        <title>Indhu | About Page</title>
        <meta name="description" content="About Indhu's work and projects" />
      </Head>

      <main className="flex w-full flex-col items-center justify-center min-h-screen bg-light text-dark">
        <AnimatedText
          text="Passion Fuels Purpose!"
          className="mb-14 mt-10 lg:hidden max-lg:!7xl max-sm:!text-6xl max-sm:mb-8 xs:!text-4xl"
        />

        <div className="relative h-full flex">
          <motion.div
            ref={containerRef}
            className="p-6 sm:p-12 md:p-24 lg:p-32 xl:p-40 flex flex-col gap-12 md:gap-16 lg:gap-20 xl:gap-24 w-full lg:w-2/3 lg:pr-0 xl:w-1/2 overflow-auto"
          >
            <div className="flex flex-col gap-8 justify-center relative">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                viewport={{ once: true }}
              >
                <Image
                  src={profilePic}
                  alt="Indhu Profile Image"
                  width={500}
                  height={500}
                  priority
                  className="w-full h-auto rounded-2xl "
                />
              </motion.div>

              <motion.h1
                className="font-bold text-3xl uppercase text-dark"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                Biography
              </motion.h1>

              <motion.p
                className="text-lg font-medium"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
                viewport={{ once: true }}
              >
                I&apos;m Indhu, a frontend developer with a strong foundation in
                HTML, CSS, and JavaScript, and a passion for building
                responsive, user-friendly websites. As a fresher, I’ve been
                honing my skills through self-learning and personal projects,
                focusing on writing clean, well-structured code and constantly
                looking for ways to improve.
              </motion.p>

              {[
                "What sets me apart is my curiosity and drive to keep learning. Whether it's exploring new design patterns, understanding user experience, or debugging a tricky layout, I enjoy every part of the process that brings a website to life across devices.",

                "Right now, I'm focused on building a solid foundation with hands-on experience and real-world projects. I may be at the beginning of my journey, but I bring a strong commitment to quality, clarity, and continuous growth to everything I build.",
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

          <div className="hidden md:block lg:block lg:w-1/3 xl:w-1/2 relative pt-5">
            <div className="sticky top-0 z-10 flex justify-center items-center h-screen overflow-visible pt-14">
              <Brain
                scrollYProgress={scrollYProgress}
                className="max-w-full h-full"
              />
            </div>
          </div>
        </div>
        <Skills />
        <Experience />
        <Education />
      </main>
    </motion.div>
  );
};

export default About;
