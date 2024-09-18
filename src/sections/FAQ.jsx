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
        <h2 className="text-center z-20 flex justify-center text-6xl max-lg:text-4xl font-semibold relative">
          <span className="z-10">Perguntas Frequentes</span>
          <img
            className="absolute max-lg:hidden bottom-0 left-1/2 translate-y-[16px] -translate-x-[80px] z-0"
            src={BlueUnderline}
            alt="Small orange underline"
          />
        </h2>
        <div className="mt-20 max-lg:mt-6 mx-auto">
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton py={6}>
                  <span className="flex-1 text-left font-semibold">
                    Que serviços oferecem para o desenvolvimento de websites?
                  </span>
                  <AccordionIcon color={"var(--color-primary)"} fontSize={30} />
                </AccordionButton>
              </h2>
              <AccordionPanel py={6}>
                Oferecemos uma gama completa de serviços de desenvolvimento de
                websites, incluindo design personalizado, desenvolvimento,
                soluções de e-commerce, websites responsivos e amigáveis para
                dispositivos móveis, e manutenção contínua. Adaptamos os nossos
                serviços às necessidades específicas do seu negócio.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton py={6}>
                  <span className="flex-1 text-left font-semibold">
                    Quanto tempo demora a criar um website?
                  </span>
                  <AccordionIcon color={"var(--color-primary)"} fontSize={30} />
                </AccordionButton>
              </h2>
              <AccordionPanel py={6}>
                O tempo necessário para criar um website depende da complexidade
                do projeto e das funcionalidades desejadas. Em média, um website
                standard demora entre 4 a 6 semanas para ser desenhado e
                desenvolvido. No entanto, websites maiores ou mais
                personalizados podem demorar mais tempo.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton py={6}>
                  <span className="flex-1 text-left font-semibold">
                    Podem ajudar com atualizações e manutenção do website depois
                    de estar online?
                  </span>
                  <AccordionIcon color={"var(--color-primary)"} fontSize={30} />
                </AccordionButton>
              </h2>
              <AccordionPanel py={6}>
                Claro! Oferecemos serviços contínuos de manutenção de websites
                para garantir que o seu site esteja sempre seguro, atualizado e
                a funcionar sem problemas. Quer necessite de atualizações de
                conteúdo, suporte técnico ou atualizações de software, estamos
                aqui para ajudar.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton py={6}>
                  <span className="flex-1 text-left font-semibold">
                    O meu website será otimizado para dispositivos móveis?
                  </span>
                  <AccordionIcon color={"var(--color-primary)"} fontSize={30} />
                </AccordionButton>
              </h2>
              <AccordionPanel py={6}>
                Sim, todos os websites que criamos são totalmente responsivos e
                otimizados para dispositivos móveis. Garantimos que o seu site
                terá uma aparência excelente e funcionará perfeitamente em
                computadores, tablets e smartphones, proporcionando a melhor
                experiência aos seus visitantes.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
