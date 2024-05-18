import { motion } from "framer-motion";
import PropTypes from "prop-types";

const AccordionSelectorItem = ({
  onClick,
  headerTitle,
  content,
  isSelected,
}) => {
  const accordionAnimation = {
    hidden: {
      height: "0",
    },
    visible: {
      height: "100%",
      transition: {
        duration: 0.5,
        type: "spring",
      },
    },
    exit: {
      height: "0",
    },
  };

  return (
    <div className="relative pl-12">
      <div
        className={`absolute left-0 top-0 bottom-0 w-[4px] transition-all duration-300 
    ${isSelected ? "bg-[#53B6CB] h-full" : "bg-[#D9DBDB] h-[45px]"}`}
      ></div>
      <div onClick={onClick} className="text-xl pt-1 pb-4 cursor-pointer">
        {headerTitle}
      </div>
      <motion.div
        variants={accordionAnimation}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 2, type: "spring" }}
        className={`overflow-hidden transition-all duration-300 font-light ${
          isSelected ? "" : "h-0"
        }`}
      >
        {content}
      </motion.div>
    </div>
  );
};

// Props Validation
AccordionSelectorItem.propTypes = {
  onClick: () => {},
  headerTitle: PropTypes.string,
  content: PropTypes.string,
  isSelected: PropTypes.bool,
};

export default AccordionSelectorItem;
