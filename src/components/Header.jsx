import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full backdrop-blur z-50 flex items-center justify-between px-6 py-3 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#2a8bc7]' // Translucent darker when scrolled
          : 'bg-[#42b0fd]'     // Solid when at top
      }`}
    >
      <Link to="/" className="flex items-center group">
        {/* Home icon (replace with SVG if you want) */}
        <span className="text-3xl mr-2 transition-transform group-hover:-translate-y-1">🏠</span>
        <span className="font-thick text-2xl text-white tracking-wide drop-shadow">Krill Art Club</span>
      </Link>
      <HamburgerMenu />
    </header>
  );
}
