export default function Resources() {
  return (
    <div>
      <section className="w-full py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-thick text-4xl text-blue-900 mb-6">Resources</h1>
          <p className="text-lg text-blue-800 mb-8">Download art guides, find ocean conservation info, and get inspired!</p>
          <ul className="space-y-6">
            <li className="bg-blue-100 p-6 shadow flex items-center">
              <span className="text-3xl mr-4">📄</span>
              <a href="#" className="font-thick text-blue-700 hover:underline text-lg">Beginner's Guide to Ocean Art</a>
            </li>
            <li className="bg-blue-50 p-6 shadow flex items-center">
              <span className="text-3xl mr-4">🌱</span>
              <a href="#" className="font-thick text-blue-700 hover:underline text-lg">Sustainable Art Materials</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
