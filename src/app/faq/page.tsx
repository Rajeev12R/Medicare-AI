"use client";

import React, { useState } from "react";

const FAQS = [
  {
    question: "How accurate is the AI medical diagnosis?",
    answer:
      "Our AI provides preliminary analysis based on your symptoms and medical reports using advanced models. However, it is not a substitute for professional medical advice. Always consult a qualified healthcare provider for a definitive diagnosis and treatment.",
  },
  {
    question: "Is my data secure and private?",
    answer:
      "Yes, your data is encrypted and stored securely. We follow strict privacy protocols and do not share your information with third parties without your consent.",
  },
  {
    question: "Can I use the platform in my local language?",
    answer:
      "Absolutely! Our platform supports multiple Indian languages for both voice and text input, making healthcare accessible to everyone.",
  },
  {
    question: "How do I find nearby doctors or hospitals?",
    answer:
      'Use the "Find Nearby Care" feature to locate hospitals and doctors in your area, complete with ratings, reviews, and contact options.',
  },
  {
    question: "Can I store and manage my medical records?",
    answer:
      "Yes, you can securely upload, store, and manage your medical documents and history for easy access anytime.",
  },
  {
    question: "Is this service free?",
    answer:
      "Most features are free to use. Some advanced services or consultations may have minimal charges, which will be clearly communicated.",
  },
];

export default function FAQPage() {
  const [search, setSearch] = useState("");

  const filteredFaqs = FAQS.filter(faq =>
    faq.question.toLowerCase().includes(search.toLowerCase()) ||
    faq.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Blue Header */}
      <header className="bg-[#174AE6] py-16 px-4 text-white text-center">
        <h1 className="text-5xl font-extrabold mb-4">FAQs</h1>
        <p className="text-2xl mb-8">Frequently Asked Questions about Medicare-AI</p>
        <div className="max-w-xl mx-auto">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search FAQs..."
            className="w-full px-5 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </header>
      {/* FAQ Cards */}
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFaqs.length === 0 ? (
            <div className="text-center text-gray-400 col-span-full">No FAQs found.</div>
          ) : (
            filteredFaqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-2 shadow-sm hover:shadow-md transition">
                <h3 className="font-semibold text-lg text-blue-700 mb-2">{faq.question}</h3>
                <p className="text-gray-700 text-sm">{faq.answer}</p>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
} 