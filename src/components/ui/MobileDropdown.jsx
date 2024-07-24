import CustomLink from "../CustomLink";

import { motion } from "framer-motion";
import { navLinks } from "../../constants";

const MobileDropdown = () => {
  const dropdownVars = {
    initial: {
      height: "0%",
      opacity: "0%",
    },
    animate: {
      height: "100%",
      opacity: "100%",
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      height: "0%",
      opacity: "0%",
    },
  };

  return (
    <motion.div
      variants={dropdownVars}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-white overflow-hidden fixed flex flex-col items-center justify-center z-50 inset-0 top-[100px] p-10"
    >
      <div className="flex text-2xl flex-col gap-8">
        {navLinks.map((link, id) => (
          <CustomLink key={id} to={link.page} sectionId={link.href}>
            {link.label}
          </CustomLink>
        ))}
      </div>
    </motion.div>
  );
};

export default MobileDropdown;
