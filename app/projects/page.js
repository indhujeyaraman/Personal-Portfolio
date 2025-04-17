"use client";
import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import Project1 from "../../public/images/projects/YouTube-clone-page.png";
import Project2 from "../../public/images/projects/To-do-list app.png";
import Project3 from "../../public/images/projects/Rock-paper-scissor-game.png";
import Project4 from "../../public/images/projects/Calculator.png";

import { motion } from "framer-motion";
import TransitionProvider from "@/components/TransitionEffect";
const FramerImage = motion(Image);
const Project = ({ type, title, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light shadow-2xl p-6 relative group rounded-br-2xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl max-md:-right-2 max-md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer  rounded-lg"
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className="w-full h-auto rounded-lg"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl max-lg:text-lg max-md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold max-lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className=" underline  font-semibold  text-lg max-md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 max-md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <div>
      <Head>
        <title>Indhu | Projects Page</title>
        <meta name="description" content="About Indhu's work and projects" />
      </Head>
      <TransitionProvider>
        <main className="flex w-full flex-col items-center mb-16 justify-center">
          <Layout className="pt-16">
            <AnimatedText
              text="Imagination Trumps Knowledge!"
              className="mb-16 max-lg:!text-7xl max-sm:mb-8 max-sm:!text-6xl xs:!text:4xl"
            />
            <div className="grid grid-cols-12 gap-24 gap-y-32 max-xl:gap-x-16 max-lg:gap-x-8 max-md:gap-y-24 max-sm:gap-x-0">
              <div className="col-span-6 max-md:col-span-12">
                <Project
                  title="YouTube Homepage Clone"
                  img={Project1}
                  link="https://indhujeyaraman.github.io/youtube-clone/"
                  github="https://github.com/indhujeyaraman/youtube-clone"
                  type="HTML & CSS Project"
                />
              </div>

              <div className="col-span-6 max-md:col-span-12">
                {" "}
                <Project
                  title="Rock-Paper-Scissors Game"
                  img={Project3}
                  link="https://indhujeyaraman.github.io/Rock-Paper-Scissor/"
                  github="https://github.com/indhujeyaraman/Rock-Paper-Scissor"
                  type="JavaScript Game Project"
                />
              </div>
              <div className="col-span-6 max-md:col-span-12">
                <Project
                  title="To-Do List App"
                  img={Project2}
                  link="https://indhujeyaraman.github.io/To-do-List/"
                  github="https://github.com/indhujeyaraman/To-do-List"
                  type="JavaScript Project"
                />
              </div>
              <div className="col-span-6 max-md:col-span-12">
                {" "}
                <Project
                  title="Simple Calculator App"
                  img={Project4}
                  link="https://indhujeyaraman.github.io/Calculator/"
                  github="https://github.com/indhujeyaraman/Calculator"
                  type="JavaScript Project"
                />
              </div>
              <div className="col-span-6 max-md:col-span-12">
                {" "}
                {/* <Project
                  title="Project 1"
                  img={Project5}
                  summary="Crypto Screener Application
A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                  link="/"
                  github="/"
                  type="project-1"
                /> */}
              </div>
            </div>
          </Layout>
        </main>
      </TransitionProvider>
    </div>
  );
};

export default projects;
