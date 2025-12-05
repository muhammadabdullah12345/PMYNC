import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQItem = ({ question, answer, isOpen, onToggle }) => (
  <div className="border-b border-gray-200 py-5">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between text-left focus:outline-none group"
    >
      <span className="text-base font-normal text-gray-900 pr-8">
        {question}
      </span>
      <span className="flex-shrink-0 ml-4">
        {isOpen ? (
          <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center">
            <Minus className="w-4 h-4 text-white" strokeWidth={2.5} />
          </div>
        ) : (
          <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center">
            <Plus className="w-4 h-4 text-white" strokeWidth={2.5} />
          </div>
        )}
      </span>
    </button>

    {isOpen && (
      <div className="mt-4 pr-12">
        <p className="text-sm text-gray-600 leading-relaxed">{answer}</p>
      </div>
    )}
  </div>
);

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Who can join the Youth Council?",
      answer:
        "The council is open to young people aged 18–30 from across the country who are passionate about leadership, community service, and driving positive change.",
    },
    {
      question: "Do I need prior experience to apply?",
      answer:
        "No prior experience is required. We welcome individuals from all backgrounds who are eager to learn, contribute, and make a difference in their communities.",
    },
    {
      question: "Is there any fee to become a member?",
      answer:
        "No, membership in the Youth Council is completely free. We believe in making leadership opportunities accessible to everyone.",
    },
    {
      question: "What kind of activities does the council organize?",
      answer:
        "The council organizes workshops, community service projects, policy discussions, networking events, and leadership training programs to empower young people.",
    },
    {
      question: "Will I get a certificate or recognition for participating?",
      answer:
        "Yes, active members receive certificates of participation and recognition for their contributions to council activities and community initiatives.",
    },
    {
      question: "How can I stay updated about upcoming events?",
      answer:
        "You can stay updated by following our social media channels, subscribing to our newsletter, and regularly checking our website for event announcements.",
    },
    {
      question: "Can I volunteer without becoming a full member?",
      answer:
        "Yes, we welcome volunteers for specific events and projects. You can participate in individual activities without committing to full membership.",
    },
    {
      question: "How do I apply to join the Youth Council?",
      answer:
        "You can apply through our online application form available on our website. Simply fill out the form with your details and submit it for review.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" py-16 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions (FAQs)
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm leading-relaxed">
            Our council is built on the passion and dedication of young people.
            Here's what they have to say about their journey with us.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="bg-white rounded-lg shadow-sm px-6 sm:px-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
