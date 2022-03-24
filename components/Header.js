import { motion } from "framer-motion";
import Nav from "./Nav";
import Meta from "./Meta";
import FadeUp from "../animations/FadeUp";
import FadeIn from "../animations/FadeIn";
import FadeRight from "../animations/FadeRight";
import FadeLeft from "../animations/FadeLeft";
import { ArrowRightIcon, ChevronDownIcon } from "@heroicons/react/outline";
import DelayedFadeIn from "../animations/DelayedFadeIn";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

export default function Header() {
  return (
    <section
      id="Home"
      className="flex flex-col w-full px-2 pt-12 text-black bg-center bg-cover bg-hero font-display md:px-10 lg:px-20 xl:px-28 "
    >
      <main className="flex flex-col h-screen pl-4 font-semibold tracking-tight 2xl:pl-12 md:flex-row lg:font-medium md:tracking-normal md:pb-32">
        <div className="flex flex-col justify-center ">
          <FadeUp>
            <h1 className="flex flex-col text-4xl pt-36 md:pt-0 md:text-5xl lg:text-6xl 2xl:text-7xl">
              Modern Web Solutions
            </h1>
          </FadeUp>

          <motion.h1
            className="flex flex-row text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl "
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
              className="w-10 h-10 text-highlight2 md:h-12 md:w-12 lg:h-16 lg:w-16"
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
            <Link href={"/#Contact"} passHref>
              <button className="px-6 py-3 mt-4 ml-1 text-lg font-medium text-black border-2 rounded-full shadow-lg cursor-pointer hover:bg-white hover:text-highlight2 border-highlight2 lg:px-10 lg:py-4 2xl:ml-2 lg:mt-4 lg:text-xl shadow-neutral-600/30 bg-highlight2">
                Contact Us
              </button>
            </Link>
          </DelayedFadeIn>
        </div>

        <DelayedFadeIn>
          <div className="absolute mb-4 bottom-4 inset-x-1/2">
            <ChevronDownIcon className="w-8 h-8 -ml-4 text-white ease-in delay-75 animate-bounce" />
          </div>
        </DelayedFadeIn>
      </main>
    </section>
  );
}
