import PropTypes from "prop-types";

const Button = ({ children, className, ...props }) => {
  return (
    <a type="button" className={`${className} cursor-pointer`} {...props}>
      {children}
    </a>
  );
};

// Props Validation
Button.propTypes = {
  children: () => {},
  className: PropTypes.string,
};

export default Button;
