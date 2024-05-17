import { createContext, useState } from "react";

export const ServiceSelectorContext = createContext(null);

const ServiceSelectorProvider = ({ children }) => {
  const [selected, setSelected] = useState(0);

  const handleSelected = (id) => {
    setSelected(id);
  };

  return (
    <ServiceSelectorContext.Provider
      value={{ selected, setSelected, handleSelected }}
    >
      {children}
    </ServiceSelectorContext.Provider>
  );
};

export default ServiceSelectorProvider;
