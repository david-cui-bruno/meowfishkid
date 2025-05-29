import { Link } from "react-router-dom";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-cyan-100 via-blue-100 to-blue-200/80 backdrop-blur shadow-inner py-3 px-6 flex flex-col md:flex-row items-center justify-between border-t-2 border-blue-300 z-40">
      <nav className="flex space-x-4 mb-2 md:mb-0">
        <Link to="/events" className="font-thick text-blue-800 hover:text-blue-600 transition">Events</Link>
        <Link to="/resources" className="font-thick text-blue-800 hover:text-blue-600 transition">Resources</Link>
        <Link to="/faq" className="font-thick text-blue-800 hover:text-blue-600 transition">FAQ</Link>
        <Link to="/contact" className="font-thick text-blue-800 hover:text-blue-600 transition">Contact</Link>
        <Link to="/donate" className="font-thick text-blue-800 hover:text-blue-600 transition">Donate</Link>
      </nav>
      <SocialIcons />
    </footer>
  );
}
