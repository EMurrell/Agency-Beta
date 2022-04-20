import {
  Nextdotjs,
  ReactJs,
  Netlify,
  Tailwindcss,
  Html5,
  CssThree,
  Javascript,
  Framer,
  Vercel,
} from "@icons-pack/react-simple-icons";
import FadeUp from "../animations/FadeUp";
import FadeIn from "../animations/FadeIn";

export default function Tech() {
  return (
    <section className="flex flex-col justify-center p-6 pb-0 font-body">
      <FadeUp>
        <h1 className="pb-6 text-2xl font-medium text-center text-neutral-900 lg:text-4xl">
          Proudly Built on Jamstack Technologies
        </h1>
      </FadeUp>
      <div className="flex self-center w-24 pb-4 border-t-2 border-highlight2"></div>
      <FadeIn>
        <div className="flex flex-row justify-center">
          <Nextdotjs className="w-12 h-12 m-4 md:h-20 md:w-20 text-neutral-800/50 md:m-10 " />
          <Netlify className="w-12 h-12 m-4 md:h-20 md:w-20 text-neutral-800/50 md:m-10" />
          <ReactJs className="w-12 h-12 m-4 md:h-20 md:w-20 text-neutral-800/50 md:m-10" />
        </div>
        <div className="flex flex-row justify-center">
          <Tailwindcss className="w-12 h-12 m-4 md:h-20 md:w-20 text-neutral-800/50 md:m-10" />
          <Framer className="w-12 h-12 m-4 md:h-20 md:w-20 text-neutral-800/50 md:m-10" />
          <Vercel className="w-12 h-12 m-4 md:h-20 md:w-20 text-neutral-800/50 md:m-10" />
        </div>
      </FadeIn>
    </section>
  );
}
