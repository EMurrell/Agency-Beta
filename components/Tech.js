import {
  Nextdotjs,
  ReactJs,
  Netlify,
  Tailwindcss,
  Html5,
  CssThree,
  Javascript,
  Framer,
} from "@icons-pack/react-simple-icons";

export default function Tech() {
  return (
    <section className="flex flex-col justify-center p-6 pb-0 font-body">
      <h1 className="pb-8 text-2xl font-medium text-center text-neutral-900 lg:text-4xl">
        Proudly Built on Jamstack Technologies
      </h1>
      <div className="flex flex-row justify-center">
        <Nextdotjs className="w-12 h-12 m-4 md:h-20 md:w-20 text-neutral-800/50 md:m-10 " />
        <Netlify className="w-12 h-12 m-4 md:h-20 md:w-20 text-neutral-800/50 md:m-10" />
        <ReactJs className="w-12 h-12 m-4 md:h-20 md:w-20 text-neutral-800/50 md:m-10" />
      </div>
      <div className="flex flex-row justify-center">
        <Tailwindcss className="w-12 h-12 m-4 md:h-20 md:w-20 text-neutral-800/50 md:m-10" />
        <Framer className="w-12 h-12 m-4 md:h-20 md:w-20 text-neutral-800/50 md:m-10" />
      </div>
    </section>
  );
}
