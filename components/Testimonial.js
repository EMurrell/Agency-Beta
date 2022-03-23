import Image from "next/image";
import Arrow from "./Arrow";
import {
  ArrowNarrowRightIcon,
  ExternalLinkIcon,
} from "@heroicons/react/outline";
import FadeUp from "../animations/FadeUp";
import FadeIn from "../animations/FadeIn";

export default function Testimonials() {
  return (
    <section className="px-8 py-16 overflow-hidden bg-center bg-cover md:py-12 font-display bg-testimonial ">
      <div className="flex flex-col justify-center ">
        <FadeUp>
          <h1 className="py-4 text-2xl font-medium text-center md:text-3xl text-neutral-800">
            What Our Clients Say:
          </h1>
        </FadeUp>
        <div className="flex self-center w-24 border-t-2 border-highlight2"></div>
        <blockquote className="mt-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-lg leading-7 text-center text-neutral-900 md:text-2xl">
              <em>
                &ldquo;I needed to modernize my old website, and I&apos;m happy
                I found Trailbridge Web.&nbsp; Eric did a great job designing my
                new site, and was really easy to work with...they guided me
                through the whole process.&nbsp; I would easily recommend
                them.&rdquo;
              </em>
            </div>
          </FadeIn>
          <footer className="mt-2">
            <div className="flex flex-col items-center justify-center">
              <FadeIn>
                <div className="flex flex-col items-center mt-3 text-center">
                  <div className="pl-4 opacity-90">
                    <Image
                      src="/mtc-red.png"
                      alt="mtc logo"
                      width={100}
                      height={55}
                    />
                  </div>
                  <p className="text-base font-medium font-body text-neutral-900">
                    Phillip Lavergne
                  </p>

                  <p className="text-base font-medium font-body text-neutral-600">
                    Owner, Mason&apos;s Touch Construction
                  </p>
                  <a href="https://masonstouch.com">
                    <p className="flex flex-row pl-2 text-base underline font-body text-highlight2">
                      View Website &nbsp;{" "}
                      <ExternalLinkIcon className="w-4 h-6 text-highlight2" />
                    </p>
                  </a>
                </div>
              </FadeIn>
            </div>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
