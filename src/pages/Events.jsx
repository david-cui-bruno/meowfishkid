export default function Events() {
  return (
    <section className="p-8 max-w-3xl mx-auto mt-8 bg-white/80 rounded-3xl shadow-xl">
      <h1 className="font-thick text-4xl text-blue-900 mb-6">Events</h1>
      <p className="text-lg text-blue-800 mb-8">Check out our upcoming and past art events, workshops, and exhibitions!</p>
      <ul className="space-y-6">
        <li className="bg-blue-100 rounded-xl p-6 shadow flex items-center hover:scale-105 transition-transform">
          <span className="text-3xl mr-4">🎨</span>
          <div>
            <h2 className="font-thick text-xl text-blue-900">Underwater Painting Workshop</h2>
            <p className="text-blue-700">July 15, 2024</p>
          </div>
        </li>
        <li className="bg-blue-50 rounded-xl p-6 shadow flex items-center hover:scale-105 transition-transform">
          <span className="text-3xl mr-4">🦑</span>
          <div>
            <h2 className="font-thick text-xl text-blue-900">Krill Collage Night</h2>
            <p className="text-blue-700">August 2, 2024</p>
          </div>
        </li>
      </ul>
    </section>
  );
}
