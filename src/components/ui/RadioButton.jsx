import PropTypes from "prop-types";

const RadioButton = ({ label, value }) => {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={"false"}
      tabIndex="-1"
      className="border text-xl hover:shadow-md duration-300 border-[#EAEAEA] text-[#8B9293] font-light rounded-lg whitespace-nowrap py-3 px-6 aria-checked:border-primary aria-checked:bg-primary aria-checked:text-white"
      data-label={label}
      data-value={value}
    >
      {label}
    </button>
  );
};

// Props Validation
RadioButton.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};

export default RadioButton;
