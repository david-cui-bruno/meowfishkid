export default function Home() {
  return (
    <section className="p-8 flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-b from-blue-100 to-blue-300 rounded-lg shadow-lg mt-8">
      <h1 className="text-4xl font-extrabold text-blue-800 mb-4">Welcome to Krill Art Club!</h1>
      <p className="text-lg text-blue-700 mb-6 text-center max-w-xl">
        Dive into a vibrant, ocean-inspired art community. Explore events, resources, and creative inspiration—all with a splash of marine magic!
      </p>
      <div className="flex space-x-4">
        <span className="text-3xl">🐟</span>
        <span className="text-3xl">🦐</span>
        <span className="text-3xl">🌊</span>
      </div>
    </section>
  );
}
