import FadeIn from "../animations/FadeIn";
import FadeUp from "../animations/FadeUp";
import { CheckIcon } from "@heroicons/react/outline";
import Arrow from "./Arrow";

const tiers = [
  {
    name: "Basic",
    href: "#",
    price: 949,
    description: "A simple way to get your business online.",
    features: [
      "One single-page, multi-section website (up to 5 sections)",
      "Custom domain*",
      "1 revision included",
      "Free non-premium stock photos and illustrations",
      "Google Search Console setup and indexing",
      "Links to your Social Media presence",
      "Client provides digital assets (logo, photography, etc.)",
    ],
  },
  {
    name: "Dynamic",
    href: "#",
    price: 1849,
    description: "A comprehensive, interactive solution.",
    features: [
      "One multi-page, multi-section website (up to 5 pages, 6 sections for homepage)",
      "Custom domain*",
      "3 revisions included",
      "Free non-premium stock photos and illustrations",
      "Google Search Console setup and indexing",
      "Links to your Social Media presence",
      "Client provides digital assets (logo, photography, etc.)",
      "Assist with 'Google My Business' setup",
      "Setup custom email hosting/Google Workspace**",
      "Custom social media preview images",
      "Scroll animations and micro-interactions",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="Price" className="flex flex-col justify-center font-display">
      <FadeIn>
        <div className="px-4 pt-24 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-1 lg:max-w-none">
            <p className="pt-2 text-4xl font-medium text-neutral-900 lg:text-6xl">
              Pay Once.
            </p>
            <p className="pt-1 pb-12 text-2xl font-medium lg:pt-3 lg:text-4xl text-neutral-900">
              No monthly hosting fees.
            </p>
          </div>
        </div>

        <div className="pb-12 mt-8 bg-white sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
          <div className="relative">
            <div className="absolute inset-0 z-10 h-3/4" />

            <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0 ">
                {tiers.map((tier) => (
                  <div
                    key={tier.name}
                    className="flex flex-col pb-6 mx-2 overflow-hidden border-2 rounded-md shadow-lg border-highlight2 shadow-neutral-800/50"
                  >
                    <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                      <div className="flex flex-row">
                        <Arrow />
                        <h3
                          className="inline-flex px-2 py-1 text-xl font-semibold tracking-wide uppercase md:text-2xl text-neutral-900 "
                          id="tier-standard"
                        >
                          {tier.name}
                        </h3>
                      </div>
                      <div className="flex items-baseline mt-4 text-6xl font-semibold text-neutral-800">
                        ${tier.price}
                      </div>
                      <p className="mt-5 text-lg font-medium text-neutral-800 font-body">
                        {tier.description}
                      </p>
                    </div>

                    <div className="flex flex-col justify-between flex-1 px-6 pt-6 pb-8 space-y-6 bg-white font-body sm:p-10 sm:pt-6">
                      <ul role="list" className="space-y-4">
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon
                                className="w-6 h-6 text-highlight2"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="ml-3 text-base text-neutral-900">
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                      {/* <div className="">
                        <a
                          href={tier.href}
                          className="flex items-center justify-center px-5 py-3 text-base font-medium border-2 rounded-md shadow-lg text-neutral-900 bg-highlight2 border-highlight2 shadow-neutral-800/50 hover:text-highlight2 hover:bg-transparent"
                          aria-describedby="tier-standard"
                        >
                          Get started
                        </a>
                      </div> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col px-6 mx-auto mt-10 text-xs max-w-prose text-neutral-800">
            <p>
              * We buy your domain for your first year. Domain renewal typically
              costs approx. $20 per YEAR. Premium domains may be purchased at an
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
        </div>
      </FadeIn>
    </section>
  );
}
