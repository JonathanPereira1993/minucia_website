import Footer from "./components/Footer";
import Header from "./components/Header";
// import FAQ from "./Pages/FAQ";
// import Projects from "./Pages/Projects";
import About from "./sections/About";
import Contacts from "./sections/Contacts";
import Feedback from "./sections/Feedback";
import Hero from "./sections/Hero";
import Services from "./sections/Services";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <main className="mt-[100px] overflow-hidden">
        <Hero />
        <About />
        <Services />
        <Routes>
          {/* <Route path="/projects" element={<Projects />} /> */}
          {/* <Route path="/faq" element={<FAQ />} /> */}
        </Routes>
        <Feedback />
        <Contacts />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
