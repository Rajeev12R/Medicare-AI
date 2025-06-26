"use client";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-2">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow p-8">
        <h1 className="text-4xl font-bold mb-2 text-center">Terms of Service</h1>
        <p className="text-lg text-gray-500 mb-8 text-center">Please read our terms carefully before using our services.</p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Introduction</h2>
          <p className="text-gray-700">These Terms of Service govern your use of the MediCare AI platform. By accessing or using our services, you agree to comply with these terms.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">User Responsibilities</h2>
          <p className="text-gray-700">You agree to use our platform responsibly and not to misuse any features. You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Account Creation & Access</h2>
          <p className="text-gray-700">To access certain features, you may need to create an account. You must provide accurate information and keep your credentials secure. We reserve the right to suspend or terminate accounts for violations.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Appointment Terms</h2>
          <p className="text-gray-700">Appointments booked through our platform are subject to availability and the policies of the healthcare providers. Please review cancellation and rescheduling terms before booking.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Payment Terms (if applicable)</h2>
          <p className="text-gray-700">Some services may require payment. All fees are clearly communicated before you confirm a transaction. Payments are processed securely, and refunds are subject to our refund policy.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Limitations of Liability</h2>
          <p className="text-gray-700">MediCare AI is not a substitute for professional medical advice. We are not liable for any damages resulting from the use or inability to use our services. Always consult a qualified healthcare provider.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Modifications</h2>
          <p className="text-gray-700">We may update these terms at any time. Changes will be posted on this page, and your continued use of our services constitutes acceptance of the updated terms.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Governing Law</h2>
          <p className="text-gray-700">These terms are governed by the laws of India. Any disputes arising from these terms will be subject to the jurisdiction of the courts in Mumbai, India.</p>
        </section>
      </div>
    </div>
  );
} 