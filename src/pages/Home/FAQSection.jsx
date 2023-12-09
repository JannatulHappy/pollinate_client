import React from "react";
import { Disclosure } from "@headlessui/react";
import { BiSolidToTop } from "react-icons/bi";
const FAQSection = () => {
  const faqs = [
    {
      question: "How do I create a survey?",
      answer:
        'To create a survey, log in to your account and navigate to the Survey Creation page. Click on the "Create Survey" button and follow the on-screen instructions to set up your survey questions and options.',
    },
    {
      question: "Can I edit a survey after it has been published?",
      answer:
        "No, once a survey has been published, you cannot edit it. Make sure to review your survey carefully before publishing to avoid any errors.",
    },
    {
      question: "How can I become a Pro User?",
      answer:
        'To become a Pro User, go to the Pricing page and click on the "Become a Pro User" link in the navigation bar. Follow the payment instructions to upgrade your account.',
    },
    {
      question: "What happens if I report a survey?",
      answer:
        "If you report a survey for inappropriate content, our admin team will review the report and take appropriate action. You will be notified of the outcome.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
    },
    {
      question: "Do you offer technical support?",
      answer: "No, we currently do not offer technical support.",
    },
    
    {
      question: "Is my data secure?",
      answer:
        "Yes, we prioritize the security of your data and use industry-standard encryption methods.",
    },
    
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit cards and online payment methods such as Visa Card.",
    },
  ];

  return (
    <div className="w-full px-4 pt-16">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-5 shadow-md bg-green-50 p-9 rounded-2xl">
          {faqs.map((faq, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-lg font-medium text-left bg-green-100 rounded-lg text-900 hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                    <span>{faq.question}</span>
                    <BiSolidToTop
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-gray-400`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500">
                    {faq.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
