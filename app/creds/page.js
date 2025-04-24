"use client";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";

const cred1 = "/images/Creds/public-UXD-Certificate.jpg";
const cred2 = "/images/Creds/Guvi-generative-AI.jpg";
const cred3 = "/images/Creds/be10x-AI-tool-Workshop.jpg";
const FramerImage = motion(Image);
const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }
  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-bold hover:underline">{title}</h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        width={224}
        height={150}
        className="w-56 z-10 h-auto hidden absolute rounded-lg max-md:!hidden"
      />
    </Link>
  );
};
const Cred = ({ img, title, date, link, description }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 max-sm:flex-col"
    >
      <div className="w-full max-w-[80%]">
        <MovingImg title={title} img={img} link={link} />
        {description && (
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 max-sm:mt-4 max-sm:text-left">
            {description}
          </p>
        )}
      </div>
      <span className="text-primary font-semibold pl-4 max-sm:self-start max-sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const Creds = () => {
  const [showCreds, setShowCreds] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCreds(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <Head>
        <title>Indhu | Articles Page</title>
        <meta name="description" content="About Indhu's work and projects" />
      </Head>

      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText
            text="Knowledge is the key to unlocking potential"
            className="mb-16 max-lg:!text-7xl max-sm:mb-8 max-sm:!text-6xl xs:!text:4xl"
          />

          <h2 className="font-bold text-4xl my-16 w-full text-center">
            All Credentials
          </h2>

          {showCreds && (
            <ul>
              <Cred
                title="Google UX Design Professional Certificate"
                date="17-05-2024"
                link="https://www.coursera.org/account/accomplishments/professional-cert/2XYBDSWVH3A7"
                img={cred1}
                description="Completed a 7-course certificate from Google covering UX research, wireframing, prototyping, and design thinking using Figma and Adobe XD."
              />

              <Cred
                title="GUVI SAWIT Learnathon – Fundamentals of Generative AI"
                date="02-10-2024"
                link="https://www.guvi.in/verify-certificate?id=451n7iZG718b2P6yv3"
                img={cred2}
                description="Participated in GUVI’s SAWIT Learnathon and completed the Fundamentals of Generative AI course, focusing on AI basics, applications, and emerging tools."
              />
              <Cred
                title="Be10x AI Tools and ChatGPT Workshop"
                date="30-03-202"
                link="https://certx.in/certificate/9318e7f9-0234-4ea4-9390-efad88624b8b278104"
                img={cred3}
                description="Completed a workshop on AI tools and ChatGPT, learning how to use AI technologies and apply them in real-world situations."
              />
            </ul>
          )}
        </Layout>
      </main>
    </motion.div>
  );
};

export default Creds;
