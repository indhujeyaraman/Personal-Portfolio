"use client";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState, useRef } from "react";
import cred1 from "../../public/images/creds/Google-UXD-Certificate.jpg";
import cred2 from "../../public/images/creds/Guvi-generative-AI.jpg";
import { motion, useMotionValue } from "framer-motion";
import cred3 from "../../public/images/creds/be10x-AI-tool-Workshop.jpg";
import TransitionProvider from "@/components/TransitionEffect";

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
        className="w-56 z-10 h-auto hidden absolute rounded-lg max-md:!hidden"
      />
    </Link>
  );
};
const Cred = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 max-sm:flex-col"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 max-sm:self-start max-sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const creds = () => {
  return (
    <>
      <Head>
        <title>Indhu | Articles Page</title>
        <meta name="description" content="About Indhu's work and projects" />
      </Head>
      <TransitionProvider>
        <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
          <Layout className="pt-16">
            <AnimatedText
              text="Words Can Change The World!"
              className="mb-16 max-lg:!text-7xl max-sm:mb-8 max-sm:!text-6xl xs:!text:4xl"
            />

            <h2 className="font-bold text-4xl my-16 w-full text-center ">
              All Credentials
            </h2>
            <ul>
              <Cred
                title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                date="2022-01-01"
                link="https://www.coursera.org/account/accomplishments/professional-cert/2XYBDSWVH3A7"
                img={cred1}
              />
              <Cred
                title="Cred-2"
                date="2022-02-01"
                link="https://www.guvi.in/verify-certificate?id=451n7iZG718b2P6yv3"
                img={cred2}
              />
              <Cred
                title="Cred-3"
                date="2022-03-01"
                link="/../public/images/creds/Certificate.pdf"
                img={cred3}
              />
            </ul>
          </Layout>
        </main>
      </TransitionProvider>
    </>
  );
};

export default creds;
