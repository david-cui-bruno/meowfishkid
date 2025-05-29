export default function Events() {
  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Events</h1>
      <p className="mb-4 text-blue-700">Check out our upcoming and past art events, workshops, and exhibitions!</p>
      <ul className="space-y-4">
        <li className="bg-white/80 rounded-lg p-4 shadow flex items-center">
          <span className="text-2xl mr-3">🎨</span>
          <div>
            <h2 className="font-semibold">Underwater Painting Workshop</h2>
            <p className="text-sm text-blue-600">July 15, 2024</p>
          </div>
        </li>
        <li className="bg-white/80 rounded-lg p-4 shadow flex items-center">
          <span className="text-2xl mr-3">🦑</span>
          <div>
            <h2 className="font-semibold">Krill Collage Night</h2>
            <p className="text-sm text-blue-600">August 2, 2024</p>
          </div>
        </li>
      </ul>
    </section>
  );
}
