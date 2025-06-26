"use client";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-2">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow p-8">
        <h1 className="text-4xl font-bold mb-2 text-center">Privacy Policy</h1>
        <p className="text-lg text-gray-500 mb-8 text-center">Your privacy is important to us.</p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Introduction</h2>
          <p className="text-gray-700">This Privacy Policy explains how MediCare AI collects, uses, and protects your personal information when you use our platform. By accessing or using our services, you agree to the terms of this policy.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">What data we collect</h2>
          <p className="text-gray-700">We may collect information such as your name, email address, contact details, health records, usage data, and any other information you provide while using our services.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">How we use your data</h2>
          <p className="text-gray-700">Your data is used to provide and improve our services, personalize your experience, communicate with you, and ensure the security of our platform. We do not sell your personal information to third parties.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Data protection and security</h2>
          <p className="text-gray-700">We implement industry-standard security measures to protect your data from unauthorized access, disclosure, alteration, or destruction. Your information is encrypted and stored securely.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Third-party services</h2>
          <p className="text-gray-700">We may use third-party services to enhance our platform. These services have their own privacy policies, and we encourage you to review them. We are not responsible for the privacy practices of third-party providers.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Cookies policy</h2>
          <p className="text-gray-700">We use cookies and similar technologies to improve your experience, analyze usage, and deliver personalized content. You can manage your cookie preferences in your browser settings.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">User rights</h2>
          <p className="text-gray-700">You have the right to access, update, or delete your personal information. If you have any questions or requests regarding your data, please contact us at support@medicare.com.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Changes to policy</h2>
          <p className="text-gray-700">We may update this Privacy Policy from time to time. Any changes will be posted on this page, and your continued use of our services constitutes acceptance of the updated policy.</p>
        </section>
      </div>
    </div>
  );
} 