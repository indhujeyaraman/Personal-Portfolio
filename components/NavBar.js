"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter, usePathname } from "next/navigation";

import {
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import Link from "next/link";
const CustomLink = ({ href, title, className = "", mode }) => {
  const pathname = usePathname();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`absolute left-0 bottom-[-2px] h-[2px] bg-dark transition-all duration-300 
        ${pathname === href ? "w-full" : "w-0 group-hover:w-full"}`}
      />
    </Link>
  );
};


const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);  
  };

  return (
    <button
      className={`${className} relative group text-light my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`absolute left-0 bottom-[-2px] h-[2px] bg-light transition-all duration-300 
        ${router.pathname === href ? "w-full" : "w-0 group-hover:w-full"}`}
      />
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 max-lg:px-16 max-md:px-12 max-sm:px-8">
      <button
        className="flex flex-col justify-center items-center lg:hidden cursor-pointer"
        onClick={handleClick}
      >
        <span
          className={`bg-dark block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark block transition-all duration-300 ease-in-out  h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark block transition-all duration-300 ease-in-out  h-0.5 w-6 rounded-sm  ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <div className="w-full hidden justify-between items-center lg:flex ">
        <nav>
          <CustomLink
            href="/"
            title="Home"
            className="mr-4 cursor-pointer"
            mode={mode}
          />
          <CustomLink
            href="/about"
            title="About"
            className="mx-4"
            mode={mode}
          />
          <CustomLink
            href="/projects"
            title="Projects"
            className="mx-4"
            mode={mode}
          />
          <CustomLink
            href="/creds"
            title="Creds"
            className="ml-4"
            mode={mode}
          />
        </nav>

        <nav className="flex items-center justify-center flex-wrap ">
          <motion.a
            href="https://www.linkedin.com/in/indhu-jeyaraman/"
            target={"_blank"}
            whileHover={{ y: 2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://github.com/indhujeyaraman"
            target={"_blank"}
            whileHover={{ y: 2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <GithubIcon />
          </motion.a>
          

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-6 flex items-center justify-center rounded-full p-1 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-light"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile nav */}
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-black/85 dark:bg-white/75  backdrop-blur-md py-32 rounded-lg  "
        >
          <nav className="flex items-center justify-center flex-col ">
            <CustomMobileLink
              href="/"
              title="Home"
              className="cursor-pointer"
              mode={mode}
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=" cursor-pointer"
              mode={mode}
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className="cursor-pointer"
              mode={mode}
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/creds"
              title="Creds"
              className="cursor-pointer"
              mode={mode}
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              href="https://www.linkedin.com/in/indhu-jeyaraman/"
              target={"_blank"}
              whileHover={{ y: 2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 max-sm:mx-1"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://github.com/indhujeyaraman"
              target={"_blank"}
              whileHover={{ y: 2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 bg-light rounded-full max-sm:mx-1"
            >
              <GithubIcon />
            </motion.a>
           

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-2 flex items-center justify-center rounded-full p-1 cursor-pointer ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
            >
              {mode === "dark" ? (
                <MoonIcon className="fill-dark" /> 
              ) : (
                <SunIcon className="fill-light" /> 
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
