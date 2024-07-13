import About from "../sections/About";
import Contacts from "../sections/Contacts";
import FAQ from "../sections/FAQ";
import Feedback from "../sections/Feedback";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Work from "../sections/Work";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Minucia = () => {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.state?.sectionId;
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Work />
      <Feedback />
      <Contacts />
      <FAQ />
    </>
  );
};

export default Minucia;
