import WhiteLogo from "../assets/Logos/WhiteMinucia_logo.svg";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] max-lg:pt-10 max-lg:pb-4 lg:min-h-[245px] w-full ">
      <div className="flex justify-center lg:py-16 pb-6 px-6 lg:px-20">
        <img className="max-w-44" src={WhiteLogo} alt="Minucia logo" />
      </div>
      <div className="flex max-lg:flex-col text-center justify-between items-center lg:px-20 px-6 border-t-2 border-[#334155] text-zinc-400 py-2">
        <div>
          <p>
            Copyright © <span className="text-primary">Minúcia</span> | Todos os
            Direitos Reservados
          </p>
        </div>
        <div>
          <p>Teste</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
