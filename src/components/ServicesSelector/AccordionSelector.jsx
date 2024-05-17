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
        content="Construímos lojas online de excelência, potenciando vendas e sucesso. Sendo especialistas em desenvolvimento web, oferecemos soluções eficazes, desde design intuitivo até segurança robusta, para impulsionar o seu negócio online."
      />
      <AccordionSelectorItem
        onClick={() => handleSelected(2)}
        isSelected={selected === 2 && true}
        headerTitle="Sites Corporativos"
        content="Construímos lojas online de excelência, potenciando vendas e sucesso. Sendo especialistas em desenvolvimento web, oferecemos soluções eficazes, desde design intuitivo até segurança robusta, para impulsionar o seu negócio online."
      />
      <AccordionSelectorItem
        onClick={() => handleSelected(3)}
        isSelected={selected === 3 && true}
        headerTitle="Alojamentos e Dominios"
        content="Construímos lojas online de excelência, potenciando vendas e sucesso. Sendo especialistas em desenvolvimento web, oferecemos soluções eficazes, desde design intuitivo até segurança robusta, para impulsionar o seu negócio online."
      />
      <AccordionSelectorItem
        onClick={() => handleSelected(4)}
        isSelected={selected === 4 && true}
        headerTitle="UX/UI Design"
        content="Construímos lojas online de excelência, potenciando vendas e sucesso. Sendo especialistas em desenvolvimento web, oferecemos soluções eficazes, desde design intuitivo até segurança robusta, para impulsionar o seu negócio online."
      />
      <AccordionSelectorItem
        onClick={() => handleSelected(5)}
        isSelected={selected === 5 && true}
        headerTitle="Design Grafico"
        content="Construímos lojas online de excelência, potenciando vendas e sucesso. Sendo especialistas em desenvolvimento web, oferecemos soluções eficazes, desde design intuitivo até segurança robusta, para impulsionar o seu negócio online."
      />
    </div>
  );
};

export default AccordionSelector;
