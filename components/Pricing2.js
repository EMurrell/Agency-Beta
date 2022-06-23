import FadeIn from "../animations/FadeIn";
import FadeUp from "../animations/FadeUp";
import { CheckIcon } from "@heroicons/react/outline";
import Arrow from "./Arrow";

const basicFeatures = [
  "One single-page, multi-section website (up to 5 sections)",
  "Custom domain*",
  "Free non-premium stock photos and illustrations",
  "Google Search Console setup and indexing",

  "Client provides digital assets (logo, photography, etc.)",
  "2 revisions included",
];
const eliteFeatures = [
  "One multi-page, multi-section website (6 sections for homepage, unlimited pages***)",
  "Everything in Dynamic, plus:",
  "Custom Logo Design",
  "CMS integration (allows you to edit without code)",
  "100 business cards",
  "Up to 5 premium stock images",
  "6 revisions included",
];
const dynamicFeatures = [
  "One multi-page, multi-section website (6 sections for homepage, up to 4 pages)",
  "Everything in Basic, plus:",
  "Assist with 'Google My Business' setup",
  "Setup custom email hosting/Google Workspace**",
  "Scroll animations and micro-interactions",
  "Custom social media preview images",
  "4 revisions included",
];

export default function Pricing2() {
  return (
    <div className="font-sans">
      <div className="px-4 pt-16 sm:px-6 lg:px-8 lg:pt-20">
        <div className="text-center">
          <h2 className="pt-2 text-4xl font-semibold text-neutral-900 lg:text-6xl">
            Pay Once.
          </h2>
          <p className="pt-1 pb-2 text-2xl font-medium lg:pt-3 lg:text-4xl text-neutral-900">
            No monthly hosting fees.
          </p>
        </div>
      </div>

      <div className="pb-12 mt-16 bg-white lg:mt-20 lg:pb-20">
        <div className="relative z-0">
          <div className="absolute inset-0 h-5/6 lg:h-2/3" />
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative lg:grid lg:grid-cols-7">
              <div className="max-w-md mx-auto lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">
                <div className="flex flex-col h-full overflow-hidden border-2 rounded-lg shadow-lg border-highlight2 lg:border-r-0 lg:rounded-l-lg">
                  <div className="flex flex-col flex-1">
                    <div className="px-6 py-8 bg-white">
                      <div>
                        <h3
                          className="text-2xl font-medium text-center text-neutral-900"
                          id="tier-basic"
                        >
                          Basic
                        </h3>
                        <div className="flex items-center justify-center mt-4">
                          <span className="flex items-start px-3 text-6xl tracking-tight text-neutral-900">
                            <span className="mt-2 mr-2 text-4xl font-medium">
                              $
                            </span>
                            <span className="font-extrabold">949</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between flex-1 p-6 border-t-2 border-neutral-100 bg-neutral-50 sm:p-10 lg:p-6 xl:p-10">
                      <ul role="list" className="space-y-4">
                        {basicFeatures.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon
                                className="flex-shrink-0 w-6 h-6 text-highlight2"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="ml-3 text-base font-medium text-neutral-800">
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-lg mx-auto mt-10 lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
                <div className="relative z-10 rounded-lg shadow-xl">
                  <div
                    className="absolute inset-0 border-2 rounded-lg pointer-events-none border-highlight2"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-0 top-0 transform translate-y-px">
                    <div className="flex justify-center transform -translate-y-1/2">
                      <span className="inline-flex px-5 py-3 text-sm font-semibold tracking-wider text-white uppercase rounded-full bg-highlight2">
                        Most popular
                      </span>
                    </div>
                  </div>
                  <div className="px-6 pt-12 pb-10 bg-white rounded-t-lg">
                    <div>
                      <h3
                        className="text-3xl font-semibold text-center text-neutral-900 sm:-mx-6"
                        id="tier-dynamic"
                      >
                        Dynamic
                      </h3>
                      <div className="flex items-center justify-center mt-4">
                        <span className="flex items-start px-3 text-6xl tracking-tight text-neutral-900 sm:text-6xl">
                          <span className="mt-2 mr-2 text-4xl font-medium">
                            $
                          </span>
                          <span className="font-extrabold">1849</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 pt-10 pb-8 border-t-2 rounded-b-lg border-neutral-100 bg-neutral-50 sm:px-10 sm:py-16">
                    <ul role="list" className="space-y-4">
                      {dynamicFeatures.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon
                              className="flex-shrink-0 w-6 h-6 text-highlight2"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="ml-3 text-base font-medium text-neutral-800">
                            {feature}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="max-w-md mx-auto mt-10 lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3">
                <div className="flex flex-col h-full overflow-hidden border-2 rounded-lg shadow-lg border-highlight2 lg:border-l-0 lg:rounded-r-lg">
                  <div className="flex flex-col flex-1">
                    <div className="px-6 py-8 bg-white">
                      <div>
                        <h3
                          className="text-2xl font-medium text-center text-neutral-900"
                          id="tier-elite"
                        >
                          Brand
                        </h3>
                        <div className="flex items-center justify-center mt-4">
                          <span className="flex items-start px-3 text-6xl tracking-tight text-neutral-900">
                            <span className="mt-2 mr-2 text-4xl font-medium">
                              $
                            </span>
                            <span className="font-extrabold">3499</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between flex-1 p-6 border-t-2 bg-neutral-50 sm:p-10 lg:p-6 xl:p-10 border-neutral-100">
                      <ul role="list" className="space-y-4">
                        {eliteFeatures.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon
                                className="flex-shrink-0 w-6 h-6 text-highlight2"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="ml-3 text-base font-medium text-neutral-800">
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-6 mx-auto mb-16 text-xs max-w-prose text-neutral-800">
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
          setup is optional, monthly charges apply and are payable to Google. We
          do not receive any portion of these payments.
        </p>
        <p>
          ***With CMS integrations, you have the ability to add as many pages to
          your website as you wish. We setup up to 3 different types of page
          templates for you.
        </p>
      </div>
    </div>
  );
}
