import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-200 via-blue-100 to-cyan-100/80 backdrop-blur z-50 flex items-center justify-between px-6 py-3 shadow-lg border-b-2 border-blue-300">
      <Link to="/" className="flex items-center group">
        {/* Home icon (replace with SVG if you want) */}
        <span className="text-3xl mr-2 transition-transform group-hover:-translate-y-1">🏠</span>
        <span className="font-thick text-2xl text-blue-900 tracking-wide drop-shadow">Krill Art Club</span>
      </Link>
      <HamburgerMenu />
    </header>
  );
}
