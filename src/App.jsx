import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Resources from "./pages/Resources";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#42b0fd' }}>
        <Header />
        <main className="flex-1 pt-20 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
