import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./sections/About";
import Contacts from "./sections/Contacts";
import Feedback from "./sections/Feedback";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Work from "./sections/Work";

function App() {
  return (
    <>
      <Header />
      <main className="mt-[100px] overflow-hidden">
        <Hero />
        <About />
        <Services />
        <Work />
        <Feedback />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}

export default App;
