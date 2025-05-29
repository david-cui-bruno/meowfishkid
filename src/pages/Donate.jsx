export default function Donate() {
  return (
    <section className="p-8 flex flex-col items-center max-w-2xl mx-auto mt-8 bg-white/80 rounded-3xl shadow-xl">
      <h1 className="font-thick text-4xl text-blue-900 mb-6">Support Krill Art Club</h1>
      <p className="text-lg text-blue-800 mb-8 text-center max-w-lg">
        Help us keep the ocean creativity flowing! Your donation supports art supplies, events, and ocean conservation efforts.
      </p>
      <a
        href="https://www.paypal.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white rounded px-8 py-4 font-thick text-xl hover:bg-blue-600 transition mb-6"
      >
        Donate via PayPal
      </a>
      <div className="flex space-x-6">
        <span className="text-4xl">🦐</span>
        <span className="text-4xl">🎨</span>
        <span className="text-4xl">🌊</span>
      </div>
    </section>
  );
}
