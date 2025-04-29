import { Montserrat } from "next/font/google";
import "./globals.css";

import TransitionProvider from "@/components/TransitionProvider";

const montserrat = Montserrat({
  variable: "--font-mont",
  subsets: ["latin"],
});

export const metadata = {
  title: "Indhu Jeyaraman",
  description: "Animated portfolio website",
  icons: {
    icon: "/favicon.ico",
  },
};

// function setInitialTheme() {
//   const theme = localStorage.getItem("theme");
//   const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

//   if (theme === "dark" || (!theme && prefersDark)) {
//     document.documentElement.classList.add("dark");
//   } else {
//     document.documentElement.classList.remove("dark");
//   }
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`font-mont bg-light dark:bg-dark w-full min-h-screen ${montserrat.variable}`}
       
      >
        <TransitionProvider>{children} </TransitionProvider>
      </body>
    </html>
  );
}
