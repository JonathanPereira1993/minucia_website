import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

const AccordionSelectorItem = ({
  onClick,
  headerTitle,
  content,
  isSelected,
}) => {
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (isSelected) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [isSelected]);

  return (
    <div className="relative pl-12">
      <div
        className={`absolute left-0 top-0 bottom-0 w-[4px] transition-all duration-300
    ${isSelected ? "bg-[#53B6CB] h-full" : "bg-[#D9DBDB]"}`}
      ></div>
      <div onClick={onClick} className="text-xl pt-1 pb-4 cursor-pointer">
        {headerTitle}
      </div>
      <div
        ref={contentRef}
        style={{ maxHeight }}
        className={`overflow-hidden transition-max-height duration-300 ease-in-out font-light`}
      >
        {content}
      </div>
    </div>
  );
};

// Props Validation
AccordionSelectorItem.propTypes = {
  onClick: PropTypes.func,
  headerTitle: PropTypes.string,
  content: PropTypes.string,
  isSelected: PropTypes.bool,
};

export default AccordionSelectorItem;
