import React, { useState } from "react";

const faqs = [
  {
    question: "How do I join Krill Art Club?",
    answer: "Just show up to an event or contact us through the form!",
  },
  {
    question: "Do I need to be an artist?",
    answer: "Nope! All ocean lovers are welcome, regardless of experience.",
  },
  // Add more FAQs as needed
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">FAQ</h1>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-white/80 rounded-lg p-4 shadow cursor-pointer"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          >
            <h2 className="font-semibold flex items-center">
              <span className="mr-2">{openIndex === idx ? "🦑" : "🦐"}</span>
              {faq.question}
            </h2>
            {openIndex === idx && (
              <p className="text-blue-700 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
