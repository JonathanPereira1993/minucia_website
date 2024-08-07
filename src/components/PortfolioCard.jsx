import PropTypes from "prop-types";

const PortfolioCard = ({ image, title, subtitle, year, description }) => {
  return (
    <div className="group md:hover:scale-[102%] duration-300 flex border items-center w-full max-w-[650px] py-8 pl-8 pr-5 bg-white rounded-2xl shadow-md max-md:mx-[40px] max-md:pl-[50px] max-md:pr-[50px] pb-[60px] max-md:text-center max-md:flex-col">
      <img
        className="max-w-[280px] md:group-hover:scale-105 w-[32vw] h-[300px] shadow-md object-cover -ml-[60px] mr-[30px] rounded-2xl duration-300 max-md:-mt-[60px] max-md:mb-[30px] max-md:ml-0 max-md:mr-0 max-md:w-full max-md:max-w-[1000px] max-md:h-[250px]"
        src={image}
        alt={title}
      />
      <div>
        <h2 className="text-2xl font-normal mt-0 mr-[30px] mb-[6px] max-md:mr-0">
          {title}
        </h2>
        <h3 className="mt-0 mr-0 mb-[12px] opacity-[0.66]">{subtitle}</h3>
        <p className="mb-[30px] opacity-[0.42] max-md:max-w-[250px]">
          Ano: {year}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

// Props Validation
PortfolioCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  year: PropTypes.string,
  description: PropTypes.string,
  image: () => {},
};

export default PortfolioCard;
