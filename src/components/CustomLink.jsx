import { useNavigate } from "react-router-dom";

import PropTypes from "prop-types";

const CustomLink = ({ to, sectionId, className, children }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to, { state: { sectionId } });
  };

  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
};

// Props Validation
CustomLink.propTypes = {
  to: PropTypes.string,
  sectionId: PropTypes.string,
  className: PropTypes.string,
  handleClick: () => {},
  children: () => {},
};

export default CustomLink;
