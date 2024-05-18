import PropTypes from "prop-types";

const AccordionSelectorItem = ({
  onClick,
  headerTitle,
  content,
  isSelected,
}) => {
  return (
    <div className="relative pl-12">
      <div
        className={`absolute left-0 top-0 bottom-0 w-[4px] transition-all duration-300 
    ${isSelected ? "bg-[#53B6CB] h-full" : "bg-[#D9DBDB] h-[45px]"}`}
      ></div>
      <div onClick={onClick} className="text-xl pt-1 pb-4 cursor-pointer">
        {headerTitle}
      </div>
      <div
        className={`overflow-hidden transition-height flex duration-300 font-light ${
          isSelected ? "h-full" : "h-0"
        }`}
      >
        {content}
      </div>
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
