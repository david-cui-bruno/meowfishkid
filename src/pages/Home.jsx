export default function Home() {
  return (
    <section className="relative p-8 flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-b from-blue-100 to-blue-300 rounded-3xl shadow-2xl mt-8 overflow-hidden">
      <h1 className="font-thick text-5xl md:text-6xl text-blue-900 mb-4 drop-shadow-lg">Welcome to Krill Art Club!</h1>
      <p className="text-xl md:text-2xl text-blue-800 mb-8 text-center max-w-2xl">
        Dive into a vibrant, ocean-inspired art community. Explore events, resources, and creative inspiration—all with a splash of marine magic!
      </p>
      <div className="flex space-x-6 mb-8">
        <span className="text-4xl">🐟</span>
        <span className="text-4xl">🦐</span>
        <span className="text-4xl">🌊</span>
      </div>
      {/* Decorative SVG wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1200 120" className="w-full h-16">
          <path d="M0,0V46.29c47.56,22,103.78,29.05,158,17.39C230.22,51.63,284.44,19.5,339,13.22c54.56-6.28,108.78,16.85,163,29.13C556.22,54.63,610.44,46.29,665,32.91c54.56-13.38,108.78-35.51,163-29.13,54.56,6.28,108.78,38.41,163,50.67,54.56,12.26,108.78,4.92,163-17.39V0Z" fill="#b2ebf2" />
        </svg>
      </div>
    </section>
  );
}
