import Footer from "./components/Footer";
import Header from "./components/Header";
import Minucia from "./Pages/Minucia";
import Projects from "./Pages/Projects";

// Chakra UI
import { ChakraProvider } from "@chakra-ui/react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Header />
        <main className="mt-[100px] overflow-hidden">
          <Routes>
            <Route path="/" element={<Minucia />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
