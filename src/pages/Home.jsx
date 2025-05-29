export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="w-full py-16 px-8 flex flex-col items-center justify-center min-h-[70vh]">
        <h1 className="font-thick text-7xl md:text-8xl text-white mb-4 drop-shadow-lg text-center">WELCOME TO</h1>
        <h1 className="font-bubble text-9xl md:text-10xl text-white mb-4 drop-shadow-lg text-center">KRILL ART CLUB!</h1>
        <div className="flex space-x-6 mb-8">
          <span className="text-6xl">🦐</span>
          <span className="text-6xl flip-animation">✏️</span>
          <span className="text-6xl">🦐</span>
          <span className="text-6xl flip-animation">✏️</span>
          <span className="text-6xl">🦐</span>
          <span className="text-6xl flip-animation">✏️</span>
          <span className="text-6xl">🦐</span>
          <span className="text-6xl flip-animation">✏️</span>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-thick text-4xl text-blue-800 mb-6">About Krill Art Club</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-blue-700 mb-4">
                Krill Art Club is more than just an art community—we're a passionate group of ocean lovers who believe that creativity flows like the tides.
              </p>
              <p className="text-lg text-blue-700 mb-4">
                Founded by artists who share a deep connection to marine life, our club brings together people from all backgrounds to explore art through an oceanic lens.
              </p>
              <p className="text-lg text-blue-700">
                Whether you're a seasoned artist or someone who just loves the sea, you'll find your place in our welcoming community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="w-full py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-thick text-4xl text-white mb-6 text-center">Dive Deeper</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <span className="text-4xl mb-4 block">🎨</span>
              <h3 className="font-thick text-xl text-white mb-2">Join Events</h3>
              <p className="text-white/80">Participate in workshops, exhibitions, and creative gatherings.</p>
            </div>
            <div className="text-center p-6">
              <span className="text-4xl mb-4 block">📚</span>
              <h3 className="font-thick text-xl text-white mb-2">Explore Resources</h3>
              <p className="text-white/80">Access guides, tutorials, and ocean conservation materials.</p>
            </div>
            <div className="text-center p-6">
              <span className="text-4xl mb-4 block">🌊</span>
              <h3 className="font-thick text-xl text-white mb-2">Make Waves</h3>
              <p className="text-white/80">Support our mission and help us create positive impact.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
