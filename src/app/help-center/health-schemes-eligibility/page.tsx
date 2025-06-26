"use client";

export default function HealthSchemesEligibility() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-[#174AE6] py-16 px-4 text-white text-center">
        <h1 className="text-4xl font-extrabold mb-4">Health Schemes & Eligibility</h1>
        <p className="text-xl mb-8">Info on government health programs like Ayushman Bharat</p>
      </header>
      <main className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow p-8 space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Common Solutions</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-3">
            <li><span className="font-medium">Ayushman Bharat:</span> Learn about eligibility, benefits, and how to apply for the Ayushman Bharat health scheme.</li>
            <li><span className="font-medium">Other Schemes:</span> Explore additional government health programs available in your region.</li>
            <li><span className="font-medium">Checking Eligibility:</span> Use our eligibility checker tool or contact support for assistance.</li>
            <li><span className="font-medium">Required Documents:</span> Prepare necessary documents such as ID proof, address proof, and medical records for application.</li>
            <li><span className="font-medium">Support:</span> For help with applications or questions, reach out via the Help Center contact form.</li>
          </ul>
          <div>
            <h3 className="text-xl font-semibold mt-8 mb-4">Popular Questions</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>What is Ayushman Bharat?</li>
              <li>How do I check if I'm eligible for Ayushman Bharat?</li>
              <li>How to apply for government medical schemes through the app?</li>
              <li>What documents are needed for scheme registration?</li>
              <li>Can I search doctors under Ayushman Bharat?</li>
              <li>What services are covered under PM-JAY?</li>
              <li>Are lab tests included in the scheme?</li>
              <li>Can I link my scheme ID in the app?</li>
              <li>What if my scheme status is not verified?</li>
              <li>How to view government scheme benefits?</li>
              <li>How to update your scheme ID?</li>
              <li>Whom do I contact for scheme support?</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
} 