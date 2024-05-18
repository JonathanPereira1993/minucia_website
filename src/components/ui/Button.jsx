import PropTypes from "prop-types";

const Button = ({ children, className, ...props }) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

// Props Validation
Button.propTypes = {
  children: () => {},
  className: PropTypes.string,
};

export default Button;
