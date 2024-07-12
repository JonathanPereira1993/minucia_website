import PropTypes from "prop-types";

const Input = ({ isTextArea = false, label, id, error, ...props }) => {
  return (
    <div className="w-full">
      {label !== undefined && <label htmlFor={id}>{label}</label>}
      {!isTextArea ? (
        <input
          className="border-b-2 w-full focus-visible:outline-none focus:border-primary placeholder:text-[#B4BCBD] h-9"
          id={id}
          {...props}
        />
      ) : (
        <textarea
          className="border-b-2 w-full focus-visible:outline-none focus:border-primary placeholder:text-[#B4BCBD] h-9"
          id={id}
          {...props}
        />
      )}

      <div className="text-red-500">{error && <p>{error}</p>}</div>
    </div>
  );
};

// Props Validation
Input.propTypes = {
  isTextArea: PropTypes.bool,
  label: PropTypes.string,
  id: PropTypes.any,
  error: PropTypes.string,
};

export default Input;
