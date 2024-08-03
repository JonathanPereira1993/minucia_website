import PropTypes from "prop-types";

const CustomLink = ({ className, children, ...props }) => {
  return (
    <button className={className} {...props}>
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
