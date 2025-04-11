"use client";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState, useRef } from "react";
import article1 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
import article2 from "../../public/images/articles/todo list app built using react redux and framer motion.png";
import { motion, useMotionValue } from "framer-motion";
import article3 from "../../public/images/articles/What is higher order component in React.jpg";

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
const Article = ({ img, title, date, link }) => {
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
const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl ">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className="w-full h-auto transition-transform duration-300 group-hover:scale-105 rounded-lg"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold mt-4 my-2 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className=" text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold">{time}</span>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Indhu | Articles Page</title>
        <meta name="description" content="About Indhu's work and projects" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText
            text="Words Can Change The World!"
            className="mb-16 max-lg:!text-7xl max-sm:mb-8 max-sm:!text-6xl xs:!text:4xl"
          />
          <ul className="grid grid-cols-2 gap-16 max-md:grid-cols-1 max-lg:gap-8 max-md:gap-y-16">
            <FeaturedArticle
              title="Article-1"
              summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
              time="1 min read"
              link="/"
              img={article1}
            />
            <FeaturedArticle
              title="Article-1"
              summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
              time="1 min read"
              link="/"
              img={article2}
            />
          </ul>
          <h2 className="font-bold text-4xl my-16 w-full text-center mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="2022-01-01"
              link="/"
              img={article3}
            />
            <Article
              title="Article-2"
              date="2022-02-01"
              link="/"
              img={article3}
            />
            <Article
              title="Article-3"
              date="2022-03-01"
              link="/"
              img={article3}
            />
            <Article
              title="Article-4"
              date="2022-04-01"
              link="/"
              img={article3}
            />
            <Article
              title="Article-5"
              date="2022-05-01"
              link="/"
              img={article3}
            />
            <Article
              title="Article-6"
              date="2022-06-01"
              link="/"
              img={article3}
            />
            <Article
              title="Article-7"
              date="2022-07-01"
              link="/"
              img={article3}
            />
            <Article
              title="Article-8"
              date="2022-08-01"
              link="/"
              img={article3}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
