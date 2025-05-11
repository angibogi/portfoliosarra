import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Makai } from "./pages/Makai";
import { Valentino } from "./pages/Valentino";
import { CortiliaNewApp } from "./pages/CortiliaNewApp";
import { CortiliaPdp } from "./pages/CortiliaPdp";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import ScrollToTop from "./ScrollToTop"; 
import ScrollToAnchor from "./ScrollToAnchor";

const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <ScrollToAnchor/>
      <div className="container m-auto relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="makai" element={<Makai />} />
          <Route path="cortilia" element={<CortiliaNewApp />} />
          <Route path="valentino" element={<Valentino />} />
          <Route path="page" element={<CortiliaPdp />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App