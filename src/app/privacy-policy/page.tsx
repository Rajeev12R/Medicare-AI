"use client"

import Link from "next/link";

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "data-we-collect", label: "Data We Collect" },
  { id: "how-we-use-your-data", label: "How We Use Your Data" },
  { id: "how-we-share-information", label: "How We Share Information" },
  { id: "your-choices-obligations", label: "Your Choices & Obligations" },
  { id: "other-important-info", label: "Other Important Information" },
  { id: "changes-to-policy", label: "Changes to This Policy" },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-700 py-8 px-4 text-white text-center">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-lg">
          To learn more about Privacy at Medicare-AI please visit our {" "}
          <Link href="/privacy-hub" className="underline font-semibold hover:text-blue-200">Privacy Hub</Link>.
        </p>
        <p className="italic text-sm mt-2">Effective Date: January 1, 2024</p>
      </header>

      {/* Main Layout */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 py-10 px-4">
        {/* Main Content */}
        <main className="flex-1 min-w-0">
          {/* Optional summary message section */}
          <div className="mb-8 p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
            <p className="text-blue-900 text-base">At Medicare-AI, your privacy is our top priority. We are committed to protecting your personal and health information while providing you with seamless access to healthcare services, doctor appointments, and government health schemes.</p>
          </div>

          <section id="introduction" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
            <p className="text-gray-700">Medicare-AI values your privacy and is dedicated to safeguarding your personal and health-related information. This Privacy Policy outlines how we collect, use, share, and protect your data when you use our platform to find doctors, book appointments, and access government health schemes. By using Medicare-AI, you agree to the practices described in this policy.</p>
          </section>

          <section id="data-we-collect" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-semibold mb-2">Data We Collect</h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li><span className="font-medium">Personal Information:</span> Name, date of birth, gender, contact details (email, phone), and address.</li>
              <li><span className="font-medium">Medical History:</span> Health conditions, medications, allergies, previous appointments, and uploaded medical documents.</li>
              <li><span className="font-medium">Appointment Details:</span> Booked doctor appointments, schedules, and related notes.</li>
              <li><span className="font-medium">Usage Data:</span> Log data, device information, browser type, IP address, and interactions with our platform.</li>
              <li><span className="font-medium">Cookies & Tracking:</span> We use cookies and similar technologies to enhance your experience. See our {" "}
                <Link href="/cookie-policy" className="text-blue-600 hover:underline">Cookie Policy</Link> for details.
              </li>
            </ul>
          </section>

          <section id="how-we-use-your-data" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-semibold mb-2">How We Use Your Data</h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li>To book and manage doctor appointments and healthcare services.</li>
              <li>To provide access to government health schemes and related information.</li>
              <li>To personalize your experience and recommend relevant healthcare providers or services.</li>
              <li>To communicate with you about appointments, updates, and support.</li>
              <li>To improve our platform, conduct analytics, and ensure security.</li>
            </ul>
          </section>

          <section id="how-we-share-information" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-semibold mb-2">How We Share Information</h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li>With doctors and healthcare providers for appointment management and care delivery.</li>
              <li>With government health services and partners, as required to provide you with relevant schemes and benefits.</li>
              <li>With trusted third-party service providers who assist us in operating our platform, under strict confidentiality agreements.</li>
              <li>With your consent, as required by law, or to protect the rights and safety of users and the public.</li>
              <li>We do not sell your personal information to third parties.</li>
            </ul>
          </section>

          <section id="your-choices-obligations" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-semibold mb-2">Your Choices & Obligations</h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li>You may access, update, or delete your account and personal information at any time through your profile settings.</li>
              <li>You may opt out of certain communications or data uses by adjusting your preferences or contacting us.</li>
              <li>You are responsible for maintaining the accuracy of your information and for keeping your login credentials secure.</li>
            </ul>
          </section>

          <section id="other-important-info" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-semibold mb-2">Other Important Information</h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li><span className="font-medium">Data Security:</span> We use industry-standard security measures to protect your data, including encryption and secure storage. However, no system is completely secure.</li>
              <li><span className="font-medium">Children's Privacy:</span> Medicare-AI is not intended for children under 16. We do not knowingly collect data from children. If you believe a child has provided us with information, please contact us.</li>
              <li><span className="font-medium">Data Retention:</span> We retain your data as long as your account is active or as needed to provide services and comply with legal obligations.</li>
              <li><span className="font-medium">Contact for Privacy Inquiries:</span> If you have questions or requests regarding your privacy, please contact us at <a href="mailto:privacy@medicare-ai.com" className="text-blue-600 hover:underline">privacy@medicare-ai.com</a> or +91-123-456-7890.</li>
            </ul>
          </section>

          <section id="changes-to-policy" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-semibold mb-2">Changes to This Policy</h2>
            <p className="text-gray-700">We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page. Please review this policy periodically.</p>
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