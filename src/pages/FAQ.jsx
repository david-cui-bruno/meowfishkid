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
    <section className="p-8 max-w-3xl mx-auto mt-8 bg-white/80 rounded-3xl shadow-xl">
      <h1 className="font-thick text-4xl text-blue-900 mb-6">FAQ</h1>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-blue-100 rounded-xl p-6 shadow cursor-pointer transition-all"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          >
            <h2 className="font-thick text-xl flex items-center text-blue-900">
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
