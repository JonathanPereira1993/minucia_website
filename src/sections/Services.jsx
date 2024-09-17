import BlueUnderline from "../assets/Underlines/BlueUnderline.svg";
import AccordionSelector from "../components/ServicesSelector/AccordionSelector";

import PhoneSelector from "../components/ServicesSelector/PhoneSelector";
import ServiceSelectorProvider from "../components/ServicesSelector/ServideSelectorContext";

const Services = () => {
  return (
    <section id="service-section" className="py-20 max-lg:py-10">
      <div className="lg:max-w-[1600px] mx-auto px-10 relative">
        <h2 className="text-center z-20 flex justify-center text-6xl font-semibold relative">
          <span className="z-10">Serviços</span>
          <img
            className="absolute bottom-0 left-1/2 translate-y-[16px] -translate-x-[80px] z-0"
            src={BlueUnderline}
            alt="Small orange underline"
          />
        </h2>
        <p className="text-center relative z-20 mt-10 mb-20 max-lg:mb-10">
          Descubra as soluções que oferecemos para transformar a presença online
          do seu negócio.
        </p>

        <ServiceSelectorProvider>
          <div className="mt-[100px] max-lg:mt-10 grid lg:grid-cols-2">
            <PhoneSelector />
            <AccordionSelector />
          </div>
        </ServiceSelectorProvider>
      </div>
    </section>
  );
};

export default Services;
