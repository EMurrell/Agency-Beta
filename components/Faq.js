import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import FadeIn from "../animations/FadeIn";

const faqs = [
  {
    question: "How long will it take to get my new website?",
    answer: "Projects typically take around 10-15 business days to complete.",
  },

  {
    question: "Do you provide on-going support?",
    answer:
      "Yes, we are happy to help anytime!  After completion of your project, support is available at a fixed hourly rate.",
  },
  {
    question: "Who will own my website?",
    answer:
      "You will always retain 100% ownership of your website and it's content.",
  },
  {
    question: "What are some examples of common 'sections' of a website",
    answer:
      "Sections include Hero Image, FAQ, Contact, About, Pricing, Footer, Features, etc. ",
  },
  {
    question: "What about SEO?",
    answer:
      "Our websites are developed following SEO best practices, and produce very high lighthouse scores.",
  },
  {
    question: "Do you write copy for websites?",
    answer:
      "Basic copywriting services are available and charged at an hourly rate.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <section id="Faq" className=" font-display">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-3xl mx-auto divide-y-2 divide-neutral-200">
            <h2 className="mt-12 text-3xl font-medium text-center text-neutral-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <dl className="mt-6 space-y-6 divide-y divide-neutral-200">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt className="text-base lg:text-lg">
                        <Disclosure.Button className="flex items-start justify-between w-full text-left text-neutral-400">
                          <span className=" text-neutral-900">
                            {faq.question}
                          </span>
                          <span className="flex items-center ml-6 h-7">
                            <ChevronDownIcon
                              className={classNames(
                                open ? "-rotate-180" : "rotate-0",
                                "h-6 w-6 transform"
                              )}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="pr-12 mt-2">
                        <em className="text-base text-neutral-600 font-body">
                          {faq.answer}
                        </em>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
