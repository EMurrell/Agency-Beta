import { motion } from "framer-motion";
import Nav from "./Nav";
import Meta from "./Meta";
import FadeUp from "../animations/FadeUp";
import FadeIn from "../animations/FadeIn";
import FadeRight from "../animations/FadeRight";
import FadeLeft from "../animations/FadeLeft";
import { ArrowRightIcon } from "@heroicons/react/outline";
import DelayedFadeIn from "../animations/DelayedFadeIn";
import Link from "next/link";
import Head from "next/head";

export default function Header() {
  return (
    <section
      id="Home"
      className="flex flex-col w-full px-2 pt-20 text-white bg-center bg-cover bg-hero font-display md:px-10 lg:px-20 xl:px-28 "
    >
      <main className="flex flex-col justify-center h-screen pt-8 pl-2 font-semibold tracking-tight lg:font-medium pb-28 md:tracking-normal md:pb-16">
        <FadeUp>
          <h1 className="flex flex-col text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl">
            Modern Web Solutions
          </h1>
        </FadeUp>

        <motion.h1
          className="flex flex-row text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl "
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 1,
              opacity: 0,
              x: -50,
            },
            visible: {
              scale: 1,
              opacity: 1,
              x: 0,

              transition: {
                delay: 0.8,
                duration: 0.5,
                type: "tween",
              },
            },
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-highlight2 md:h-16 md:w-16 lg:h-20 lg:w-20 2xl:h-24 2xl:w-24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap=""
              strokeLinejoin=""
              strokeWidth={2}
              d="M13 5l7 7m0 -1l-7 7m5-6.5H3"
            />
          </svg>
          Made Easy.
        </motion.h1>

        <DelayedFadeIn>
          <Link href={"/#Pricing"} passHref>
            <button className="px-6 py-2 mt-2 mb-20 ml-1 text-lg font-medium text-black border-2 rounded-lg shadow-lg cursor-pointer bg-highlight2 hover:text-highlight2 border-highlight2 lg:px-10 lg:py-4 2xl:ml-2 lg:mt-4 lg:text-xl shadow-neutral-600/30 hover:bg-transparent">
              Learn More
            </button>
          </Link>
        </DelayedFadeIn>
      </main>
    </section>
  );
}
