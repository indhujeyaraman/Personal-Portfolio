"use client";
import React from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "./Icons";
import { motion } from "framer-motion";
const CustomLink = ({ href, title, className = "" }) => {
  const pathname = usePathname();

  return (
    <a href={href} className={`${className} relative group text-dark`}>
      {title}
      <span
        className={`absolute left-0 bottom-[-2px] h-[2px] bg-dark transition-all duration-300 
        ${pathname === href ? "w-full" : "w-0 group-hover:w-full"}`}
      />
    </a>
  );
};


const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/Articles" title="Articles" className="ml-4" />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a href="https://www.linkedin.com/in/indhu-jeyaraman/" target={"_blank"} whileHover={{y:2}} whileTap={{scale:0.9}} className="w-6 mx-3">
          <LinkedInIcon />
        </motion.a>
        <motion.a href="https://github.com/indhujeyaraman" target={"_blank"} whileHover={{y:2}} whileTap={{scale:0.9}}  className="w-6 mx-3">
          <GithubIcon />
        </motion.a>
        <motion.a href="/" target={"_blank"} whileHover={{y:2}} whileTap={{scale:0.9}}  className="w-6 mx-3">
          <TwitterIcon />
        </motion.a>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
