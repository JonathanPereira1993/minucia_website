import Footer from "./components/Footer";
import Header from "./components/Header";
import Minucia from "./Pages/Minucia";
import Projects from "./Pages/Projects";

import { createContext, useState } from "react";

export const DropdownContext = createContext();

// Chakra UI
import { ChakraProvider } from "@chakra-ui/react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  const [dropdownOpened, setDropdownOpened] = useState(false);

  return (
    <DropdownContext.Provider value={{ dropdownOpened, setDropdownOpened }}>
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
    </DropdownContext.Provider>
  );
}

export default App;
