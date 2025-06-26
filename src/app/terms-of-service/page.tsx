"use client"

import Link from "next/link";

const sections = [
  { id: "acceptance", label: "Acceptance of Terms" },
  { id: "description", label: "Description of Services" },
  { id: "user-responsibilities", label: "User Responsibilities" },
  { id: "account-registration", label: "Account Registration" },
  { id: "privacy-policy", label: "Privacy Policy Reference" },
  { id: "intellectual-property", label: "Intellectual Property" },
  { id: "disclaimers", label: "Disclaimers & Limitation of Liability" },
  { id: "termination", label: "Termination of Use" },
  { id: "changes", label: "Changes to Terms" },
  { id: "governing-law", label: "Governing Law" },
  { id: "contact", label: "Contact Information" },
];

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-700 py-8 px-4 text-white text-center">
        <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-lg">
          Please read our terms carefully before using Medicare-AI. For more information, visit our {" "}
          <Link href="/help-center" className="underline font-semibold hover:text-blue-200">Help Center</Link>.
        </p>
        <p className="italic text-sm mt-2">Effective Date: January 1, 2024</p>
      </header>

      {/* Main Layout */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 py-10 px-4">
        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <section id="acceptance" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-semibold mb-2">Acceptance of Terms</h2>
            <p className="text-gray-700">By accessing or using the Medicare-AI platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
          </section>

          <section id="description" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-semibold mb-2">Description of Services</h2>
            <p className="text-gray-700">Medicare-AI provides users with the ability to find doctors, book appointments, store and manage health documents, and register health concerns and symptoms through a secure online platform.</p>
          </section>

          <section id="user-responsibilities" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-semibold mb-2">User Responsibilities</h2>
            <p className="text-gray-700">You agree to provide accurate and complete information when using our services. You must not misuse the platform, attempt unauthorized access, or engage in any activity that could harm the platform or its users.</p>
          </section>

          <section id="account-registration" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-semibold mb-2">Account Registration</h2>
            <p className="text-gray-700">Users must be at least 18 years old or have parental consent to register. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
          </section>

          <section id="privacy-policy" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-semibold mb-2">Privacy Policy Reference</h2>
            <p className="text-gray-700">Your use of Medicare-AI is also governed by our {" "}
              <Link href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>. Please review it to understand how we collect, use, and protect your information.
            </p>
          </section>

          <section id="intellectual-property" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-semibold mb-2">Intellectual Property</h2>
            <p className="text-gray-700">All content, trademarks, and code on Medicare-AI are the property of the platform or its licensors. You may not copy, modify, or distribute any part of the platform without written permission.</p>
          </section>

          <section id="disclaimers" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-semibold mb-2">Disclaimers & Limitation of Liability</h2>
            <p className="text-gray-700">Medicare-AI is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider. We are not responsible for third-party services or content accessed through our platform. To the fullest extent permitted by law, we disclaim all liability for damages arising from your use of the platform.</p>
          </section>

          <section id="termination" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-semibold mb-2">Termination of Use</h2>
            <p className="text-gray-700">We reserve the right to suspend or terminate your account at our discretion, including for violations of these terms or suspected fraudulent activity.</p>
          </section>

          <section id="changes" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-semibold mb-2">Changes to Terms</h2>
            <p className="text-gray-700">We may update these Terms of Service at any time. Changes will be posted on this page, and your continued use of the platform constitutes acceptance of the updated terms.</p>
          </section>

          <section id="governing-law" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-semibold mb-2">Governing Law</h2>
            <p className="text-gray-700">These terms are governed by the laws of India. Any disputes will be subject to the jurisdiction of the courts in Mumbai, India.</p>
          </section>

          <section id="contact" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
            <p className="text-gray-700">If you have any questions about these Terms of Service, please contact us at:</p>
            <ul className="list-none pl-0 text-gray-700 mt-2">
              <li>Email: <a href="mailto:tos@medicare-ai.com" className="text-blue-600 hover:underline">tos@medicare-ai.com</a></li>
              <li>Phone: +91-123-456-7890</li>
              <li>Address: 123 Health Lane, Mumbai, India</li>
            </ul>
          </section>
        </main>

        {/* Table of Contents */}
        <aside className="hidden md:block w-72 flex-shrink-0">
          <div className="bg-white rounded-xl shadow p-6 sticky top-24">
            <h3 className="text-lg font-semibold mb-4">Table of Contents:</h3>
            <ul className="space-y-2 text-blue-700">
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="hover:underline focus:underline">
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
} 