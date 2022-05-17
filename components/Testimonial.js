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
    <section className="px-8 py-16 overflow-hidden text-white bg-center bg-cover md:py-24 font-display bg-testimonial ">
      <div className="flex flex-col justify-center ">
        <FadeUp>
          <h1 className="py-6 text-2xl font-medium text-center md:text-3xl ">
            What Our Clients Say:
          </h1>
        </FadeUp>
        <div className="flex self-center w-24 border-t-2 border-highlight2"></div>
        <blockquote className="mt-6">
          <FadeUp>
            <div className="max-w-3xl mx-auto text-lg leading-7 text-center text-white md:text-2xl">
              <em>
                &ldquo;Very professional... I would recommend Trailbridge Web to
                anyone looking for a new website&rdquo;
              </em>
            </div>

            <footer className="">
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center mt-3 text-center">
                  <p className="text-base font-medium font-body text-neutral-300">
                    Phillip L.
                  </p>

                  <p className="text-base font-medium font-body text-neutral-300">
                    Owner, Mason&apos;s Touch Construction
                  </p>
                  {/* <a href="https://masonstouch.com">
                    <p className="flex flex-row px-6 py-3 mt-8 text-xl text-black border-2 rounded-full shadow-lg font-body hover:bg-neutral-700 shadow-black/80 hover:text-highlight2 border-highlight2 bg-highlight2">
                      View Website &nbsp;{" "}
                      <ArrowNarrowRightIcon className="w-6 h-6 text-black hover:text-highlight2" />
                    </p>
                  </a> */}
                </div>
              </div>
            </footer>
          </FadeUp>
        </blockquote>
        <blockquote className="mt-12">
          <FadeUp>
            <div className="max-w-3xl mx-auto text-lg leading-7 text-center text-white md:text-2xl">
              <em>
                &ldquo;Working with Eric (owner) on my website was so easy... I
                have gotten so much more business from this one site than I did
                advertising anywhere else...&rdquo;
              </em>
            </div>

            <footer className="">
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center mt-3 text-center">
                  <p className="text-base font-medium font-body text-neutral-300">
                    Kaarina D.
                  </p>

                  <p className="text-base font-medium font-body text-neutral-300">
                    Owner, Pup To Pal
                  </p>
                </div>
              </div>
            </footer>
          </FadeUp>
        </blockquote>
        <blockquote className="mt-12">
          <FadeUp>
            <div className="max-w-3xl mx-auto text-lg leading-7 text-center text-white md:text-2xl">
              <em>
                &ldquo;Trailbridge has been great. Eric understood our vision
                and made it a reality. Definitely recommend.&rdquo;
              </em>
            </div>

            <footer className="">
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center mt-3 text-center">
                  <p className="text-base font-medium font-body text-neutral-300">
                    Lynn W.
                  </p>

                  <p className="text-base font-medium font-body text-neutral-300">
                    Client
                  </p>
                </div>
              </div>
            </footer>
          </FadeUp>
        </blockquote>
        <blockquote className="mt-12">
          <FadeUp>
            <div className="max-w-3xl mx-auto text-lg leading-7 text-center text-white md:text-2xl">
              <em>
                &ldquo;Highly recommend to anybody looking to up their web
                game.&rdquo;
              </em>
            </div>

            <footer className="">
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center mt-3 text-center">
                  <p className="text-base font-medium font-body text-neutral-300">
                    Van T.
                  </p>

                  <p className="text-base font-medium font-body text-neutral-300">
                    Client
                  </p>
                </div>
              </div>
            </footer>
          </FadeUp>
        </blockquote>
      </div>
    </section>
  );
}
