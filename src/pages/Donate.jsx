export default function Donate() {
  return (
    <div>
      <section className="w-full py-16 px-8 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="font-thick text-4xl text-blue-900 mb-6">Support Krill Art Club</h1>
          <p className="text-lg text-blue-800 mb-8">
            Help us keep the ocean creativity flowing! Your donation supports art supplies, events, and ocean conservation efforts.
          </p>
          <a
            href="https://www.paypal.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-8 py-4 font-thick text-xl hover:bg-blue-600 transition mb-6 inline-block"
          >
            Donate via PayPal
          </a>
          <div className="flex justify-center space-x-6 mt-8">
            <span className="text-4xl">🦐</span>
            <span className="text-4xl">🎨</span>
            <span className="text-4xl">🌊</span>
          </div>
        </div>
      </section>
    </div>
  );
}
