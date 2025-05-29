import { useState } from "react";
import { Link } from "react-router-dom";

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="text-3xl focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-label="Open navigation menu"
      >
        ☰
      </button>
      {open && (
        <div className="absolute right-0 mt-2 bg-white rounded shadow-lg flex flex-col min-w-[150px] z-50">
          <Link to="/events" className="px-4 py-2 hover:bg-blue-100" onClick={() => setOpen(false)}>Events</Link>
          <Link to="/resources" className="px-4 py-2 hover:bg-blue-100" onClick={() => setOpen(false)}>Resources</Link>
          <Link to="/faq" className="px-4 py-2 hover:bg-blue-100" onClick={() => setOpen(false)}>FAQ</Link>
          <Link to="/contact" className="px-4 py-2 hover:bg-blue-100" onClick={() => setOpen(false)}>Contact</Link>
          <Link to="/donate" className="px-4 py-2 hover:bg-blue-100" onClick={() => setOpen(false)}>Donate</Link>
        </div>
      )}
    </div>
  );
}
