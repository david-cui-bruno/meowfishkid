export default function Donate() {
  return (
    <section className="p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Support Krill Art Club</h1>
      <p className="mb-6 text-blue-700 text-center max-w-lg">
        Help us keep the ocean creativity flowing! Your donation supports art supplies, events, and ocean conservation efforts.
      </p>
      <a
        href="https://www.paypal.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white rounded px-6 py-3 font-bold text-lg hover:bg-blue-600 transition"
      >
        Donate via PayPal
      </a>
      <div className="mt-6 flex space-x-4">
        <span className="text-3xl">🦐</span>
        <span className="text-3xl">🎨</span>
        <span className="text-3xl">🌊</span>
      </div>
    </section>
  );
}
