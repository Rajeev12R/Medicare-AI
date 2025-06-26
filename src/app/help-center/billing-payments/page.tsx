"use client";

export default function BillingPayments() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-[#174AE6] py-16 px-4 text-white text-center">
        <h1 className="text-4xl font-extrabold mb-4">Billing & Payments</h1>
        <p className="text-xl mb-8">Any paid features or service charges</p>
      </header>
      <main className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow p-8 space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Common Solutions</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-3">
            <li><span className="font-medium">Paid Features:</span> Some advanced services or consultations may require payment. All charges are clearly displayed before you confirm.</li>
            <li><span className="font-medium">Payment Methods:</span> We accept major credit/debit cards, UPI, and other secure payment options.</li>
            <li><span className="font-medium">Invoices & Receipts:</span> Download invoices and receipts from your account dashboard after payment.</li>
            <li><span className="font-medium">Refunds:</span> For eligible services, refunds are processed according to our refund policy. Contact support for assistance.</li>
            <li><span className="font-medium">Support:</span> For billing questions, reach out via the Help Center contact form.</li>
          </ul>
          <div>
            <h3 className="text-xl font-semibold mt-8 mb-4">Popular Questions</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Is Medicare-AI free to use?</li>
              <li>What services require payment?</li>
              <li>How to make a payment?</li>
              <li>What payment methods are accepted?</li>
              <li>Is my payment information secure?</li>
              <li>How do I get a receipt or invoice?</li>
              <li>How do I request a refund?</li>
              <li>Are there charges for missed appointments?</li>
              <li>Can I apply scheme benefits to paid services?</li>
              <li>How to update my billing info?</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
} 