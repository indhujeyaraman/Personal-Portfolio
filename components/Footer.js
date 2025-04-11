import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg max-sm:text-base">
      <Layout className="py-8">
        <div className="max-w-screen-xl w-full mx-auto flex items-center justify-between max-lg:flex-col max-lg:gap-4">
          <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
          
          <div className="flex items-center">
            Build With <span className="text-primary text-2xl px-1">&#9825;</span>{" "}
            by&nbsp;
            <Link href="/" className="underline underline-offset-2">
              Indhu
            </Link>
          </div>

          <Link href="/" className="underline underline-offset-2">
            Say hello
          </Link>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
