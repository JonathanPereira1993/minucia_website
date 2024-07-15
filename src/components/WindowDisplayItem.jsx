import PropTypes from "prop-types";

const WindowDisplayItem = ({ title, description, className }) => {
  return (
    <div
      className={`${
        className != undefined && className
      } items-center justify-center flex-col`}
    >
      <h2 className="text-secondary text-6xl max-lg:max-w-[90%] max-lg:mx-auto text-center max-lg:text-4xl">
        {title}
      </h2>
      <p className="text-center mx-auto max-w-[70%] max-lg:max-w-[90%] mt-16 max-lg:mt-8 text-secondary text-lg max-lg:text-base font-light">
        {description}
      </p>
    </div>
  );
};

// Props Validation
WindowDisplayItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
};

export default WindowDisplayItem;
