import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import AboutUs from "../assets/CustomIcons/AboutUs.svg";
import MissionValues from "../assets/CustomIcons/MissionValues.svg";
import Tools from "../assets/CustomIcons/Tools.svg";
import Values from "../assets/CustomIcons/Values.svg";
import { aboutItems } from "../constants";
import WindowDisplayItem from "./WindowDisplayItem";

const WindowDisplay = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const [isSwipeLeft, setIsSwipeLeft] = useState();

  const slideAnimationLeft = {
    hidden: {
      opacity: 0,
      x: -100, // Add an initial position offset to make the sliding effect more obvious
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5, // Speed up the entrance animation
        type: "spring",
        damping: 25, // Control spring oscillation to feel more snappy
        stiffness: 300, // Adjust stiffness to make it quicker
      },
    },
    exit: {
      opacity: 0,
      x: -100, // Add an exit position offset for sliding out
      transition: {
        duration: 0.3, // Speed up the exit animation
      },
    },
  };

  const slideAnimationRight = {
    hidden: {
      opacity: 0,
      x: 100, // Add an initial position offset to make the sliding effect more obvious
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5, // Speed up the entrance animation
        type: "spring",
        damping: 25, // Control spring oscillation to feel more snappy
        stiffness: 300, // Adjust stiffness to make it quicker
      },
    },
    exit: {
      opacity: 0,
      x: -100, // Add an exit position offset for sliding out
      transition: {
        duration: 0.3, // Speed up the exit animation
      },
    },
  };

  const handleSwipe = (direction) => {
    if (direction === "left" && selectedItem < aboutItems.length - 1) {
      setSelectedItem((prev) => prev + 1);
      setIsSwipeLeft(true);
    } else if (direction === "right" && selectedItem > 0) {
      setSelectedItem((prev) => prev - 1);
      setIsSwipeLeft(false);
    }
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

  return (
    <div>
      <div className="z-10 relative max-w-[1200px] overflow-hidden rounded-xl shadow-lg mx-auto">
        <div className="h-[40px] rounded-t-xl max-lg:hidden bg-white flex justify-between items-center px-4">
          <div className="flex max-lg:hidden items-center gap-2">
            <div className="w-[12px] h-[12px] bg-red-500 rounded-full cursor-pointer hover:brightness-110" />
            <div className="w-[12px] h-[12px] bg-yellow-500 rounded-full cursor-pointer hover:brightness-110" />
            <div className="w-[12px] h-[12px] bg-green-500 rounded-full cursor-pointer hover:brightness-110" />
          </div>
          <div className="bg-lightBlue max-lg:w-1/2 text-[#94A3B8] font-light w-[40%] text-center rounded-md">
            minucia.pt
          </div>
          <div className="flex gap-2 max-lg:hidden">
            <button
              className={`${
                selectedItem <= 0
                  ? "pointer-events-none opacity-30"
                  : "opacity-100 pointer-events-auto"
              } hover:scale-125 duration-200 active:scale-105`}
              onClick={leftClickHandler}
            >
              <MdKeyboardArrowLeft className="text-2xl" />
            </button>
            <button
              className={`${
                selectedItem >= aboutItems.length - 1
                  ? "pointer-events-none opacity-30"
                  : "opacity-100 pointer-events-auto"
              } hover:scale-125 duration-200 active:scale-105`}
              onClick={rightClickHandler}
            >
              <MdKeyboardArrowRight className="text-2xl" />
            </button>
          </div>
        </div>
        <div className="min-h-[600px] max-lg:min-h-[500px] max-lg:h-auto relative flex items-center justify-center bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] opacity-90 backdrop-blur-[19px]">
          <AnimatePresence mode="wait">
            {aboutItems.map((item, index) =>
              index === selectedItem ? (
                <motion.div
                  key={item.title}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(event, info) => {
                    if (info.offset.x < -100) {
                      handleSwipe("left");
                    } else if (info.offset.x > 100) {
                      handleSwipe("right");
                    }
                  }}
                  variants={
                    isSwipeLeft ? slideAnimationRight : slideAnimationLeft
                  }
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
      <div className="absolute max-lg:px-10 left-1/2 -translate-x-1/2 w-[50%] max-lg:w-full flex items-center justify-between max-lg:-bottom-20 -bottom-10">
        <button
          onClick={() => setSelectedItem(0)}
          className={`${
            selectedItem === 0
              ? "border-2 border-accent shadow-md"
              : "border border-primary shadow-sm"
          } rounded-2xl duration-50 hover:border-2 hover:border-accent flex items-center justify-center bg-white w-[64px] h-[64px]`}
        >
          <img src={AboutUs} alt="About us button" />
        </button>
        <button
          onClick={() => setSelectedItem(1)}
          className={`${
            selectedItem === 1
              ? "border-2 border-accent shadow-md"
              : "border border-primary shadow-sm"
          } rounded-2xl duration-50 hover:border-2 hover:border-accent flex items-center justify-center bg-white w-[64px] h-[64px]`}
        >
          <img src={MissionValues} alt="About us button" />
        </button>
        <button
          onClick={() => setSelectedItem(2)}
          className={`${
            selectedItem === 2
              ? "border-2 border-accent shadow-md"
              : "border border-primary shadow-sm"
          } rounded-2xl duration-50 hover:border-2 hover:border-accent flex items-center justify-center bg-white w-[64px] h-[64px]`}
        >
          <img src={Values} alt="About us button" />
        </button>
        <button
          onClick={() => setSelectedItem(3)}
          className={`${
            selectedItem === 3
              ? "border-2 border-accent shadow-md"
              : "border border-primary shadow-sm"
          } rounded-2xl duration-50 hover:border-2 hover:border-accent flex items-center justify-center bg-white w-[64px] h-[64px]`}
        >
          <img src={Tools} alt="About us button" />
        </button>
      </div>
    </div>
  );
};

export default WindowDisplay;
