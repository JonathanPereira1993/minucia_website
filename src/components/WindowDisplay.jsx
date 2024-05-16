import { AnimatePresence, motion } from "framer-motion";
import { aboutItems } from "../constants";
import WindowDisplayItem from "./WindowDisplayItem";

// Icons
import AboutUs from "../assets/CustomIcons/AboutUs.svg";
import MissionValues from "../assets/CustomIcons/MissionValues.svg";
import Tools from "../assets/CustomIcons/Tools.svg";
import Values from "../assets/CustomIcons/Values.svg";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import { useState } from "react";

const WindowDisplay = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  let slideAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
        type: "spring",
      },
    },
    exit: {
      opacity: 0,
    },
  };

  const leftClickHandler = () => {
    if (selectedItem > 0) {
      setSelectedItem((prev) => prev - 1);
    }
  };

  const rightClickHandler = () => {
    if (selectedItem < aboutItems.length - 1) {
      setSelectedItem((prev) => prev + 1);
    }
  };

  console.log(selectedItem);

  return (
    <div>
      <div className="z-10 relative max-w-[1200px] overflow-hidden rounded-xl shadow-lg mx-auto">
        <div className="h-[40px] rounded-t-xl bg-white flex justify-between items-center px-4">
          <div className="flex items-center gap-2">
            <div className="w-[10px] h-[10px] bg-red-500 rounded-full cursor-pointer hover:brightness-110" />
            <div className="w-[10px] h-[10px] bg-yellow-500 rounded-full cursor-pointer hover:brightness-110" />
            <div className="w-[10px] h-[10px] bg-green-500 rounded-full cursor-pointer hover:brightness-110" />
          </div>
          <div className="bg-lightBlue text-[#94A3B8] font-light w-[40%] text-center rounded-md">
            minucia.pt
          </div>
          <div className="flex gap-2">
            <button
              className={`${
                selectedItem <= 0
                  ? "pointer-events-none opacity-30"
                  : "opacity-100 pointer-events-auto"
              } hover:scale-125 duration-200 active:scale-105`}
              onClick={() => leftClickHandler()}
            >
              <MdKeyboardArrowLeft className="text-2xl" />
            </button>
            <button
              className={`${
                selectedItem >= aboutItems.length - 1
                  ? "pointer-events-none opacity-30"
                  : "opacity-100 pointer-events-auto"
              } hover:scale-125 duration-200 active:scale-105`}
              onClick={() => rightClickHandler()}
            >
              <MdKeyboardArrowRight className="text-2xl" />
            </button>
          </div>
        </div>
        <div className="h-[600px] relative flex items-center justify-center bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] opacity-90 backdrop-blur-[19px]">
          <AnimatePresence node="wait">
            {aboutItems.map((item, index) =>
              index === selectedItem ? (
                <motion.div
                  key={item.title}
                  variants={slideAnimation}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute w-full text-center flex justify-center flex-1"
                >
                  <WindowDisplayItem
                    title={item.title}
                    description={item.description}
                  />
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 w-[50%] flex items-center justify-between -bottom-10">
        <button
          onClick={() => setSelectedItem(0)}
          className={`${
            selectedItem === 0
              ? "border-2 border-accent shadow-md"
              : "border shadow-sm"
          } rounded-2xl duration-50 hover:border-2 border-primary hover:border-accent flex items-center justify-center bg-white w-[64px] h-[64px]`}
        >
          <img src={AboutUs} alt="About us button" />
        </button>
        <button
          onClick={() => setSelectedItem(1)}
          className={`${
            selectedItem === 1
              ? "border-2 border-accent shadow-md"
              : "border shadow-sm"
          } rounded-2xl duration-50 hover:border-2 border-primary hover:border-accent flex items-center justify-center bg-white w-[64px] h-[64px]`}
        >
          <img src={MissionValues} alt="About us button" />
        </button>
        <button
          onClick={() => setSelectedItem(2)}
          className={`${
            selectedItem === 2
              ? "border-2 border-accent shadow-md"
              : "border shadow-sm"
          } rounded-2xl duration-50 hover:border-2 border-primary hover:border-accent flex items-center justify-center bg-white w-[64px] h-[64px]`}
        >
          <img src={Values} alt="About us button" />
        </button>
        <button
          onClick={() => setSelectedItem(3)}
          className={`${
            selectedItem === 3
              ? "border-2 border-accent shadow-md"
              : "border shadow-sm"
          } rounded-2xl duration-50 hover:border-2 border-primary hover:border-accent flex items-center justify-center bg-white w-[64px] h-[64px]`}
        >
          <img src={Tools} alt="About us button" />
        </button>
      </div>
    </div>
  );
};

export default WindowDisplay;
