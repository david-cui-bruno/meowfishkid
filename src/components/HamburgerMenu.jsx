import { useState } from "react";
import { Link } from "react-router-dom";

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="w-10 h-10 flex flex-col justify-center items-center bg-blue-200 rounded-lg shadow hover:bg-blue-300 transition"
        onClick={() => setOpen(!open)}
        aria-label="Open navigation menu"
      >
        <span className="block w-6 h-1 bg-blue-700 rounded my-0.5"></span>
        <span className="block w-6 h-1 bg-blue-700 rounded my-0.5"></span>
        <span className="block w-6 h-1 bg-blue-700 rounded my-0.5"></span>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 bg-white rounded-xl shadow-lg flex flex-col items-start py-2 px-4 z-50 space-y-2 min-w-[140px] border border-blue-200">
          <Link to="/events" className="font-thick text-blue-800 hover:text-blue-600 transition" onClick={() => setOpen(false)}>Events</Link>
          <Link to="/resources" className="font-thick text-blue-800 hover:text-blue-600 transition" onClick={() => setOpen(false)}>Resources</Link>
          <Link to="/faq" className="font-thick text-blue-800 hover:text-blue-600 transition" onClick={() => setOpen(false)}>FAQ</Link>
          <Link to="/contact" className="font-thick text-blue-800 hover:text-blue-600 transition" onClick={() => setOpen(false)}>Contact</Link>
          <Link to="/donate" className="font-thick text-blue-800 hover:text-blue-600 transition" onClick={() => setOpen(false)}>Donate</Link>
        </div>
      )}
    </div>
  );
}
