import Footer from "./components/Footer";
import Header from "./components/Header";
// import Projects from "./Pages/Projects";
import About from "./sections/About";
import Contacts from "./sections/Contacts";
import FAQ from "./sections/FAQ";
import Feedback from "./sections/Feedback";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Work from "./sections/Work";

// Chakra UI
import { ChakraProvider } from "@chakra-ui/react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Header />
        <main className="mt-[100px] overflow-hidden">
          <Hero />
          <About />
          <Services />
          {/* <Routes>
            <Route path="/projects" element={<Projects />} />
          </Routes> */}
          <Work />
          <Feedback />
          <Contacts />
          <FAQ />
        </main>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
