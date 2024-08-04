import BlueUnderline from "../assets/Underlines/BlueUnderline.svg";

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";

const FAQ = () => {
  return (
    <section id="faq-section" className="py-4">
      <div className="lg:max-w-[1600px] mx-auto relative px-10 py-20">
        <h2 className="text-center z-20 flex justify-center text-6xl font-semibold relative">
          <span className="z-10">Perguntas Frequentes</span>
          <img
            className="absolute bottom-0 left-1/2 translate-y-[16px] -translate-x-[80px] z-0"
            src={BlueUnderline}
            alt="Small orange underline"
          />
        </h2>
        <div className="mt-20  mx-auto">
          <Accordion>
            <AccordionItem>
              <h2>
                <AccordionButton h={16}>
                  <span className="flex-1 text-left font-semibold">Test</span>
                  <AccordionIcon color={"var(--color-primary)"} fontSize={30} />
                </AccordionButton>
              </h2>
              <AccordionPanel py={6}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton h={16}>
                  <span className="flex-1 text-left font-semibold">Test</span>
                  <AccordionIcon color={"var(--color-primary)"} fontSize={30} />
                </AccordionButton>
              </h2>
              <AccordionPanel py={6}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton h={16}>
                  <span className="flex-1 text-left font-semibold">Test</span>
                  <AccordionIcon color={"var(--color-primary)"} fontSize={30} />
                </AccordionButton>
              </h2>
              <AccordionPanel py={6}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton h={16}>
                  <span className="flex-1 text-left font-semibold">Test</span>
                  <AccordionIcon color={"var(--color-primary)"} fontSize={30} />
                </AccordionButton>
              </h2>
              <AccordionPanel py={6}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
