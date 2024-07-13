import WhiteLogo from "../assets/Logos/WhiteMinucia_logo.svg";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] min-h-[245px] w-full px-20">
      <div className="flex justify-center lg:py-16">
        <img className="max-w-44" src={WhiteLogo} alt="Minucia logo" />
      </div>
      <div className="border-t-2 border-[#334155]"></div>
    </footer>
  );
};

export default Footer;
