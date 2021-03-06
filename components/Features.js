import Image from "next/image";
import FadeUp from "../animations/FadeUp";
import FadeIn from "../animations/FadeIn";

const features = [
  {
    name: "Fully Responsive",
    image: "/resp-dev.png",
    description:
      "Pixel-perfect design that looks and works great on all devices and browsers.",
  },
  {
    name: "Ultra-Fast",
    image: "/speedometer.png",
    description:
      "Built on modern web technologies and optimized for incredibly fast load times.",
  },
  {
    name: "Intuitive Design",
    image: "/bulb.png",
    description:
      "Clear navigation and calls to action help guide the user toward your goal.",
  },
];

export default function Features() {
  return (
    <div id="" className="relative pb-4 bg-white font-display">
      <div className="h-40 "></div>
      <div className="max-w-md px-4 mx-auto text-center -mt-52 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="py-6">
                <div className="flow-root px-6 pb-8 mx-6 bg-white border-2 rounded-lg shadow-lg shadow-neutral-800/50 lg:mx-0 md:mx-32 h-72 border-highlight2 ">
                  <div className="-mt-12">
                    <div>
                      <span className="inline-flex items-center justify-center p-4 py-6 bg-white border-2 rounded-full shadow-lg shadow-neutral-800/50 border-highlight2">
                        <Image
                          src={feature.image}
                          alt="icon"
                          // className="w-16 h-12"
                          width={68}
                          height={50}
                        />
                      </span>
                    </div>
                    <FadeUp>
                      <h3 className="mt-6 text-xl font-medium tracking-tight md:text-2xl text-neutral-900">
                        {feature.name}
                      </h3>
                    </FadeUp>
                    <FadeIn>
                      <p className="mt-4 text-base md:text-lg text-neutral-900 font-body">
                        {feature.description}
                      </p>
                    </FadeIn>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
