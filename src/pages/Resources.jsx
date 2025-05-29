export default function Resources() {
  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Resources</h1>
      <p className="mb-4 text-blue-700">Download art guides, find ocean conservation info, and get inspired!</p>
      <ul className="space-y-4">
        <li className="bg-white/80 rounded-lg p-4 shadow flex items-center">
          <span className="text-2xl mr-3">📄</span>
          <a href="#" className="font-semibold text-blue-700 hover:underline">Beginner's Guide to Ocean Art</a>
        </li>
        <li className="bg-white/80 rounded-lg p-4 shadow flex items-center">
          <span className="text-2xl mr-3">🌱</span>
          <a href="#" className="font-semibold text-blue-700 hover:underline">Sustainable Art Materials</a>
        </li>
      </ul>
    </section>
  );
}
