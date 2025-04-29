import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed left-0 bottom-0 flex items-center justify-center overflow-hidden max-md:right-0 max-md:left-auto max-md:top-0 max-md:bottom-auto max-md:absolute max-sm:right-0">
      <div className="w-48 h-auto flex items-center justify-center relative max-md:w-25">
      <CircularText className={"fill-dark animate-spin"} />
      <Link href="mailto:indhujayk@gmail.com" className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark max-md:w-11 max-md:h-11 max-md:text-[9px] bg-red-500">
      Hire Me</Link>
      </div>
      
    </div>
  );
};

export default HireMe;
