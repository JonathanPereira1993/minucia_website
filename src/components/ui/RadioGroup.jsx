import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

const RadioGroup = ({ children, label = "", checkedValue = "" }) => {
  // value to store the checked value
  const [value, setValue] = useState(checkedValue);
  // ref value will persist across re-renders
  let buttonGroupRef = useRef();
  let prevCheckedButtonRef = useRef();

  useEffect(() => {
    // value is the dependancy for this useEffect, whenever it changes, I am setting the attribute for checked button and removing attribute from the previousCheckedButton
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
    <div className="mt-4" role="radiogroup" aria-label={label}>
      <p className="radio-group__label">{label}</p>
      <div
        className="flex gap-3 flex-wrap"
        ref={buttonGroupRef}
        onClick={clickHandler}
      >
        {children}
      </div>
    </div>
  );
};

// Props Validation
RadioGroup.propTypes = {
  children: () => {},
  label: PropTypes.string,
  checkedValue: PropTypes.string,
};

export default RadioGroup;
