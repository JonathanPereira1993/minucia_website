import { useContext } from "react";

import AccordionSelectorItem from "./AccordionSelectorItem";

import { ServiceSelectorContext } from "../ServicesSelector/ServideSelectorContext";

const AccordionSelector = () => {
  const { selected, handleSelected } = useContext(ServiceSelectorContext);

  return (
    <div className="flex flex-col gap-10">
      <AccordionSelectorItem
        onClick={() => handleSelected(0)}
        isSelected={selected === 0 && true}
        headerTitle="Lojas Online"
        content="Construímos lojas online de excelência, potenciando vendas e sucesso. Sendo especialistas em desenvolvimento web, oferecemos soluções eficazes, desde design intuitivo até segurança robusta, para impulsionar o seu negócio online."
      />
      <AccordionSelectorItem
        onClick={() => handleSelected(1)}
        isSelected={selected === 1 && true}
        headerTitle="Landing Pages"
        content="Desenvolvemos landing pages otimizadas para conversões. Criamos experiências cativantes desde a primeira visita, impulsionando a captação de leads e maximizando o impacto nos resultados do seu negócio."
      />
      <AccordionSelectorItem
        onClick={() => handleSelected(2)}
        isSelected={selected === 2 && true}
        headerTitle="Sites Corporativos"
        content="Criamos websites corporativos focados em destacar a sua marca e afirmar uma presença online impactante e eficaz para o seu negócio."
      />
      <AccordionSelectorItem
        onClick={() => handleSelected(3)}
        isSelected={selected === 3 && true}
        headerTitle="Alojamentos e Dominios"
        content="Com expertise em web hosting, proporcionamos soluções robustas e confiáveis para garantir a presença online eficiente e segura do seu projeto."
      />
      <AccordionSelectorItem
        onClick={() => handleSelected(4)}
        isSelected={selected === 4 && true}
        headerTitle="UX/UI Design"
        content="Priorizamos a usabilidade, e estudamos as necessidades do utilizador para desenvolver experiências positivas que elevam a satisfação e eficiência em cada interação."
      />
      <AccordionSelectorItem
        onClick={() => handleSelected(5)}
        isSelected={selected === 5 && true}
        headerTitle="Design Grafico"
        content=" Criamos identidades visuais impactantes, materiais promocionais envolventes e elementos gráficos consistentes para transmitir a mensagem da sua marca de forma eficaz e memorável."
      />
    </div>
  );
};

export default AccordionSelector;
