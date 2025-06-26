"use client"

import React, { useState } from "react";
import Link from "next/link";
import { CalendarCheck, Lock, User, FileText, HeartPulse, CreditCard, ShieldCheck } from "lucide-react";

const categories = [
  {
    icon: <CalendarCheck className="w-7 h-7 text-blue-600" />,
    title: "Appointments & Scheduling",
    description: "How to book, reschedule, or cancel appointments.",
    articles: 25,
    href: "/help-center/appointments-scheduling",
  },
  {
    icon: <Lock className="w-7 h-7 text-purple-600" />,
    title: "Privacy & Data Policies",
    description: "How your data is used and protected.",
    articles: 15,
    href: "/help-center/privacy-data-policies",
  },
  {
    icon: <User className="w-7 h-7 text-orange-600" />,
    title: "Account & Login Help",
    description: "Signing in, resetting passwords, and account settings.",
    articles: 20,
    href: "/help-center/account-login-help",
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-teal-600" />,
    title: "Health Schemes & Eligibility",
    description: "Info on government health programs like Ayushman Bharat.",
    articles: 12,
    href: "/help-center/health-schemes-eligibility",
  },
  {
    icon: <HeartPulse className="w-7 h-7 text-pink-600" />,
    title: "Using Medicare-AI Features",
    description: "How to use the app's features like health charts, doctor finder, and file upload.",
    articles: 18,
    href: "/help-center/using-features",
  },
  {
    icon: <CreditCard className="w-7 h-7 text-green-600" />,
    title: "Billing & Payments",
    description: "Any paid features or service charges.",
    articles: 10,
    href: "/help-center/billing-payments",
  },
];

export default function HelpCenter() {
  const [search, setSearch] = useState("");

  // For now, search does not filter cards, but you can implement it if you want

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Blue Header */}
      <header className="bg-[#174AE6] py-16 px-4 text-white text-center">
        <h1 className="text-5xl font-extrabold mb-4">Help Center</h1>
        <p className="text-2xl mb-8">Advice and answers from the Medicare-AI Team</p>
        <div className="max-w-xl mx-auto">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search for articles..."
            className="w-full px-5 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </header>
      {/* Card Grid */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              href={cat.href}
              className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-2 shadow-sm hover:shadow-md transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 group"
              tabIndex={0}
            >
              <div className="mb-2">{cat.icon}</div>
              <h2 className="font-semibold text-lg mb-1 group-hover:text-blue-700">{cat.title}</h2>
              <p className="text-gray-600 text-sm mb-2">{cat.description}</p>
              <span className="text-xs text-gray-400">{cat.articles} articles</span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
} 