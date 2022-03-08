import { CheckIcon } from "@heroicons/react/outline";
import FadeUp from "../animations/FadeUp";
import FadeIn from "../animations/FadeIn";

export default function Price() {
  const feature = [
    "One multi-page, multi-section website (up to 5 pages)",
    "Custom domain*",
    "3 revisions included",
    "Free non-premium stock photos and illustrations",
    "Client provides logo, photography, etc.",
    "Assist with 'Google My Business' setup",
    "Setup custom email hosting/Google Workspace**",
    "Website is hosted on a global, multi-cloud Edge network",
  ];
  return (
    <section id="Price" className="flex flex-col justify-center font-display">
      <div className="px-4 mx-auto mt-20 text-center max-w-7xl sm:px-6 lg:px-8">
        <FadeUp>
          <p className="text-4xl font-medium text-neutral-900 lg:text-6xl">
            Pay Once.
          </p>
        </FadeUp>
        <FadeIn>
          <p className="pt-1 text-2xl font-medium lg:pt-3 lg:text-4xl text-neutral-900">
            No monthly hosting fees.
          </p>
        </FadeIn>
      </div>
      <div className="flex flex-col justify-center mx-8 my-12">
        <FadeIn>
          <div className="flex flex-col justify-between flex-1 px-6 pt-8 pb-16 m-auto space-y-6 border shadow-lg md:px-12 rounded-3xl shadow-neutral-700/50 font-body border-highlight2 max-w-max">
            <h1 className="py-4 text-5xl font-semibold text-neutral-700">
              $ 1849
            </h1>

            <ul role="list" className="space-y-4">
              {feature.map((feature) => (
                <li key={feature} className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckIcon
                      className="w-6 h-6 text-highlight2"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="ml-3 text-base text-neutral-900">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="flex flex-col px-2 mx-auto mt-10 text-xs max-w-prose text-neutral-800">
            <p>
              * We buy your domain for your first year. Domain renewal typically
              costs approx. $15 per YEAR. Premium domains may be purchased at an
              extra cost. We do not receive any portion of these payments.
            </p>{" "}
            <p>
              ** Custom email hosting/
              <a
                href="https://workspace.google.com/pricing.html?gclid=CjwKCAiA55mPBhBOEiwANmzoQmEuufRueGbdWlalzcLKSN_WebvB_43Mrwr9IBaGv5gXlLcFq29VgBoCFnMQAvD_BwE&gclsrc=aw.ds"
                className="italic text-highlight2"
              >
                Google Workspace
              </a>{" "}
              setup is optional, monthly charges apply and are payable to
              Google. We do not receive any portion of these payments.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
