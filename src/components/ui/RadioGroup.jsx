import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

const RadioGroup = ({ id, name, children, label = "", checkedValue = "" }) => {
  // value to store the checked value
  const [value, setValue] = useState(checkedValue);
  // ref value will persist across re-renders
  const buttonGroupRef = useRef();
  const prevCheckedButtonRef = useRef();

  useEffect(() => {
    // value is the dependency for this useEffect, whenever it changes, set the attribute for checked button and remove attribute from the previousCheckedButton
    const checkedButton = buttonGroupRef.current.querySelector(
      `button[role="radio"][data-value="${value}"]`
    );
    if (checkedButton) {
      if (prevCheckedButtonRef.current) {
        prevCheckedButtonRef.current.setAttribute("aria-checked", "false");
      }
      checkedButton.setAttribute("aria-checked", "true");
      prevCheckedButtonRef.current = checkedButton;
    }
  }, [value]);

  const clickHandler = (event) => {
    const clickedButton = event.target.closest("button[role='radio']");
    if (clickedButton) {
      setValue(clickedButton.dataset.value);
    }
  };

  return (
    <div
      id={id}
      name={name}
      className="mt-2"
      role="radiogroup"
      aria-label={label}
    >
      <p className="radio-group__label">{label}</p>
      <div
        className="flex gap-3 flex-wrap"
        ref={buttonGroupRef}
        onClick={clickHandler}
      >
        {children}
      </div>
      <input type="hidden" name={name} value={value} />
    </div>
  );
};

// Props Validation
RadioGroup.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  label: PropTypes.string,
  checkedValue: PropTypes.string,
};

export default RadioGroup;
