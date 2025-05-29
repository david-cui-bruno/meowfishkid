import { Link } from "react-router-dom";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur shadow-inner py-4 px-4 flex flex-col md:flex-row items-center justify-between fixed bottom-0 w-full z-40">
      <nav className="flex space-x-4 mb-2 md:mb-0">
        <Link to="/events" className="hover:underline">Events</Link>
        <Link to="/resources" className="hover:underline">Resources</Link>
        <Link to="/faq" className="hover:underline">FAQ</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/donate" className="hover:underline">Donate</Link>
      </nav>
      <SocialIcons />
    </footer>
  );
}
