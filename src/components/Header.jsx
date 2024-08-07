import Color_MinuciaLogo from "../assets/Logos/MinuciaLogo_Color.svg";

import CustomLink from "./CustomLink";

import { AnimatePresence } from "framer-motion";
import { navLinks } from "../constants";
import MobileDropdown from "./ui/MobileDropdown";

import { useContext, useEffect, useRef, useState } from "react";
import { DropdownContext } from "../App";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const { dropdownOpened, setDropdownOpened } = useContext(DropdownContext);

  const [activeSection, setActiveSection] = useState("hero-section");
  const navigate = useNavigate();
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find(
          (entry) => entry.isIntersecting
        )?.target;

        if (visibleSection) {
          setActiveSection(visibleSection.id);
        }
      },
      {
        root: null,
        rootMargin: "0% 0% -50% 0%",
      }
    );

    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      observer.current.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.current.unobserve(section);
      });
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpened((open) => !open);
  };

  const LinkOnClick = (to, sectionId) => {
    navigate(to, { state: { sectionId } });
  };

  const ScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <header className="h-[100px] z-50 fixed top-0 left-0 right-0 bg-[#FFF] w-full px-20 max-lg:px-10 flex items-center justify-between shadow-md">
      <nav className="flex justify-between w-full h-full items-center max-w-[1600px] mx-auto">
        <CustomLink
          onClick={() => {
            LinkOnClick("/", "hero-section");
            dropdownOpened && toggleDropdown();
          }}
        >
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
                  className={`h-full flex items-center ${
                    activeSection === link.href ? "active" : ""
                  }`}
                  onClick={() => {
                    LinkOnClick(link.page, link.href);
                    if (link.page === "/projects") {
                      ScrollToTop();
                    }
                  }}
                >
                  {link.label}
                </CustomLink>
              }

              <div
                className={`${
                  activeSection === link.href ? "opacity-100" : ""
                } group-hover:opacity-100 rounded-t-sm duration-300 opacity-0 h-1 absolute bottom-0 left-0 right-0 bg-primary`}
              />
            </li>
          ))}
        </ul>
        <CustomLink
          onClick={() => LinkOnClick("/", "contact-section")}
          className="px-7 active:shadow-none max-lg:hidden py-3 rounded-lg border-2 border-[#2B2D2E] duration-200 hover:shadow-md hover:border-primary hover:text-white hover:bg-primary"
        >
          Contacte-nos
        </CustomLink>
        <button
          onClick={() => toggleDropdown()}
          className={`lg:hidden hamburger-menu ${
            dropdownOpened && " dropdown--opened"
          }`}
        >
          <input type="checkbox" />
        </button>
        <AnimatePresence>
          {dropdownOpened && <MobileDropdown />}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
