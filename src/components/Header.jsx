import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur z-50 flex items-center justify-between px-4 py-2 shadow">
      <Link to="/" className="flex items-center">
        {/* Home icon (replace with SVG or image if you want) */}
        <span className="text-2xl mr-2" aria-label="Home">🏠</span>
        <span className="font-bold text-lg">Krill Art Club</span>
      </Link>
      <HamburgerMenu />
    </header>
  );
}
