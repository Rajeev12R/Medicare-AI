"use client";

export default function PrivacyDataPolicies() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-[#174AE6] py-16 px-4 text-white text-center">
        <h1 className="text-4xl font-extrabold mb-4">Privacy & Data Policies</h1>
        <p className="text-xl mb-8">How your data is used and protected</p>
      </header>
      <main className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow p-8 space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Common Solutions</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-3">
            <li><span className="font-medium">Data Usage:</span> Your data is used to provide and improve healthcare services, personalize your experience, and ensure platform security.</li>
            <li><span className="font-medium">Data Protection:</span> We use encryption, secure storage, and strict access controls to protect your information.</li>
            <li><span className="font-medium">User Control:</span> You can access, update, or delete your data anytime from your profile settings.</li>
            <li><span className="font-medium">Third-Party Sharing:</span> Data is only shared with healthcare providers or partners as needed, and never sold to third parties.</li>
            <li><span className="font-medium">Privacy Policy:</span> For full details, see our <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>.</li>
          </ul>
          <div>
            <h3 className="text-xl font-semibold mt-8 mb-4">Popular Questions</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>What personal data does Medicare-AI collect?</li>
              <li>How is my medical data protected?</li>
              <li>Do you share my data with third parties?</li>
              <li>Can I delete my account and data?</li>
              <li>How is my payment information secured?</li>
              <li>Does the app comply with HIPAA or Indian healthcare privacy laws?</li>
              <li>What is your cookie policy?</li>
              <li>How do you use analytics data?</li>
              <li>Is my appointment history stored?</li>
              <li>Can I access or download my personal data?</li>
              <li>How long do you retain user information?</li>
              <li>What happens to my data if I stop using the app?</li>
              <li>What data do doctors see?</li>
              <li>How can I update my privacy preferences?</li>
              <li>Where can I read the full Privacy Policy?</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
} 