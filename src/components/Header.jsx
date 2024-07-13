import Color_MinuciaLogo from "../assets/Logos/MinuciaLogo_Color.svg";

import CustomLink from "./CustomLink";

import { navLinks } from "../constants";

const Header = () => {
  return (
    <header className="h-[100px] z-50 fixed top-0 left-0 right-0 bg-[#FFF] w-full px-20 flex items-center justify-between shadow-md">
      <nav className="flex justify-between w-full h-full items-center max-w-[1600px] mx-auto">
        <CustomLink to={"/"}>
          <img
            src={Color_MinuciaLogo}
            alt="Colored Minucia Logo"
            className="w-[80px]"
          />
        </CustomLink>
        <ul className="flex items-center flex-1 gap-6 justify-center h-full max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label} className="h-full px-6 group relative">
              {
                <CustomLink
                  className="h-full flex items-center"
                  to={link.page}
                  sectionId={link.href}
                >
                  {link.label}
                </CustomLink>
              }

              <div className="group-hover:opacity-100 rounded-t-sm duration-300 opacity-0 h-1 absolute bottom-0 left-0 right-0 bg-primary" />
            </li>
          ))}
        </ul>
        <CustomLink
          to="/"
          sectionId={"contact-section"}
          className="px-7 py-3 rounded-lg border-2 border-[#2B2D2E] duration-200 hover:shadow-md hover:border-primary hover:text-white hover:bg-primary"
        >
          Contacte-nos
        </CustomLink>
      </nav>
    </header>
  );
};

export default Header;
