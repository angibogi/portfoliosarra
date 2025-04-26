import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Makai } from "./pages/Makai";
import { Valentino } from "./pages/Valentino";
import { Cortilia } from "./pages/Cortilia";
import { CortiliaPage } from "./pages/CortiliaPage";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <div className="container m-auto relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="makai" element={<Makai />} />
          <Route path="cortilia" element={<Cortilia />} />
          <Route path="valentino" element={<Valentino />} />
          <Route path="page" element={<CortiliaPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App