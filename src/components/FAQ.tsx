"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown, MessageCircleQuestion } from "lucide-react";

const faqs = [
  {
    question: "Are you licensed and insured?",
    answer:
      "Absolutely. PowerFlow Electric holds a Washington State Electrical Contractor License (#POWERE*835B1). We carry full general liability insurance and workers' compensation coverage. All our electricians are licensed journeymen or master electricians.",
  },
  {
    question: "Do you offer emergency electrical services?",
    answer:
      "Yes! We provide 24/7 emergency electrical service across the greater Seattle area. Our average response time is under 60 minutes. Whether it's a power outage, sparking outlet, or burning smell — call us immediately at (206) 555-0187.",
  },
  {
    question: "How much does an electrician cost in Seattle?",
    answer:
      "Our standard service call starts at $89, which includes diagnostic and troubleshooting. Most common repairs range from $150-$500. Larger projects like panel upgrades ($1,200-$3,000) or whole-home rewiring ($8,000-$15,000) are quoted individually. We always provide free written estimates before starting work.",
  },
  {
    question: "Do you pull permits for electrical work?",
    answer:
      "Yes, we pull all required permits from the City of Seattle or your local jurisdiction. All permitted work is inspected by a city inspector to ensure code compliance. This protects you, your home's value, and your insurance coverage.",
  },
  {
    question: "How long does an EV charger installation take?",
    answer:
      "Most residential Level 2 EV charger installations are completed in 4-8 hours. This includes running a dedicated 240V circuit, installing the charger, and testing. We handle the permit application as part of our service. If your panel needs an upgrade, that may add a day.",
  },
  {
    question: "Do you offer financing options?",
    answer:
      "Yes, we offer flexible financing options for larger projects through our lending partners. Qualified customers can access 0% APR for 12 months or low monthly payment plans. Ask our team for details when you receive your estimate.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve the entire greater Seattle metropolitan area, including Bellevue, Kirkland, Redmond, Renton, Kent, Shoreline, Lynnwood, Edmonds, and everywhere in between. If you're within 30 miles of Seattle, we can help!",
  },
  {
    question: "How do I schedule an appointment?",
    answer:
      "You can schedule by calling us at (206) 555-0187, or fill out the contact form on this page. We typically offer same-day or next-day appointments. For non-emergencies, you can also email us and we'll respond within 2 hours during business hours.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-surface-light transition-colors"
      >
        <span className="font-semibold pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-muted shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-muted leading-relaxed text-sm">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-surface relative">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-electric-blue/10 border border-electric-blue/20 rounded-full px-4 py-2 mb-6">
            <MessageCircleQuestion className="w-4 h-4 text-electric-blue" />
            <span className="text-sm text-electric-blue-light font-medium">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Frequently Asked{" "}
            <span className="text-gradient-electric">Questions</span>
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            Got questions? We&apos;ve got answers. If you don&apos;t see what you need,
            don&apos;t hesitate to call us.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-surface-light border border-border rounded-2xl p-6 sm:p-8">
            <HelpCircle className="w-6 h-6 text-electric-blue shrink-0" />
            <p className="text-muted text-sm">
              Still have questions?{" "}
              <a
                href="tel:+12065550187"
                className="text-electric-blue-light font-semibold hover:underline"
              >
                Call (206) 555-0187
              </a>{" "}
              or{" "}
              <a
                href="#contact"
                className="text-electric-blue-light font-semibold hover:underline"
              >
                send us a message
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
