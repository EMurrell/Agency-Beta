import FadeUp from "../animations/FadeUp";
import FadeIn from "../animations/FadeIn";

export default function About() {
  return (
    <section
      id="About"
      className="flex flex-col justify-center px-8 py-10 text-center md:py-12 font-display lg:px-16"
    >
      <FadeUp>
        <h1 className="pt-4 pb-6 mt-10 text-3xl font-medium text-center md:text-4xl text-neutral-800">
          We Make Websites for Small Businesses.
        </h1>
      </FadeUp>
      <div className="flex self-center w-24 border-t-2 border-highlight2"></div>
      <FadeIn>
        <div className="max-w-3xl mx-auto mt-6 mb-12 text-lg leading-7 text-center md:mb-28 lg:text-2xl text-neutral-900 md:text-xl">
          <p>
            Let us craft an eye-catching website for you, so you can focus on
            running your business.
          </p>
          <br />
          <p>
            Our modern, affordable websites are designed specifically to help
            you convert online visitors into paying customers.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
