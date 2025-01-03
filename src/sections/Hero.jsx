import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import Button from "../components/ui/Button";

// import { useNavigate } from "react-router-dom";

import { ScrollTo } from "../components/CustomFuntions/CustomFunctions";

// Images (Shapes)
import { useEffect, useState } from "react";
import TreeDBox from "../assets/CustomIcons/3DBox.svg";
import CodeSymbol from "../assets/CustomIcons/SymbolCode.svg";
import ThunderCloud from "../assets/CustomIcons/ThunderCloud.svg";
import BlueBean from "../assets/Shapes/BlueBean.svg";
import OrangeBean from "../assets/Shapes/OrangeBean.svg";
import OrangeMiniShapes from "../assets/Shapes/OrangeMiniShapes.svg";
import OrangeMiniShapes2 from "../assets/Shapes/OrangeMiniShapes2.svg";
import BlueUnderline from "../assets/Underlines/BlueUnderline.svg";

const Hero = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate("/projects");
  // };

  const scrollTo = (sectionId) => {
    ScrollTo(sectionId);
  };

  useEffect(() => {
    setHasAnimated(true);
  }, [hasAnimated]);

  return (
    <section
      id="hero-section"
      className="py-40 max-lg:pt-20 lg:max-w-[1600px] mx-auto flex justify-between px-20 max-lg:px-10"
    >
      <div className="lg:max-w-[600px] max-lg:max-w-full h-[530px] my-auto max-lg:mx-auto">
        <h1 className="flex flex-col items-start text-7xl">
          <motion.span
            animate={!hasAnimated && { opacity: 1 }}
            transition={
              !hasAnimated && { type: "spring", delay: 0, duration: 2 }
            }
            className="uppercase opacity-0 font-base text-[#475569] text-xl mb-2"
          >
            Bem vindo à
          </motion.span>
          <motion.span
            className="opacity-0 relative font-medium"
            animate={!hasAnimated && { opacity: 1 }}
            transition={
              !hasAnimated && { type: "spring", delay: 1, duration: 2 }
            }
          >
            Minucia
            <img
              className="w-[190px] absolute -bottom-2 -z-10"
              src={BlueUnderline}
              alt="Blue underline under the minucia title"
            />
          </motion.span>
          <motion.span
            className="opacity-0 font-normal text-6xl max-lg:text-4xl mt-1"
            animate={!hasAnimated && { opacity: 1 }}
            transition={
              !hasAnimated && { type: "spring", delay: 1.5, duration: 2 }
            }
          >
            Web Development
          </motion.span>
        </h1>
        <motion.p
          className="opacity-0 mt-10 max-w-[500px] text-xl font-light"
          animate={!hasAnimated && { opacity: 1 }}
          transition={!hasAnimated && { type: "spring", delay: 2, duration: 2 }}
        >
          Transformamos visões em experiências digitais excepcionais. Descubra a
          Minúcia, onde cada detalhe faz a diferença na sua presença online.
        </motion.p>
        <motion.div
          animate={!hasAnimated && { opacity: 1 }}
          transition={!hasAnimated && { type: "spring", delay: 2, duration: 2 }}
          className="flex items-center max-lg:flex-col justify-between mt-10 gap-10 opacity-0"
        >
          <Button
            onClick={() => {
              scrollTo("contact-section");
            }}
            className="px-7 active:shadow-none py-3 min-w-[244px] max-lg:hover:text-white border-2 hover:lg:text-black hover:lg:bg-white border-primary hover:lg:border-[#000] max-lg:w-full text-center text-xl font-light rounded-lg bg-primary text-white duration-200 hover:shadow-md"
          >
            Contacte-nos
          </Button>
          <Button
            onClick={() => {
              scrollTo("work-section");
            }}
            className="group max-lg:w-full max-lg:justify-center text-center items-center flex gap-6 text-[#3B8291] text-xl min-w-[244px]"
          >
            Os nossos projetos
            <FaArrowRight className="text-accent duration-300 group-hover:translate-x-2" />
          </Button>
        </motion.div>
      </div>
      <div className="relative max-lg:hidden w-[620px] h-[530px] my-auto">
        <motion.img
          className="opacity-0 absolute left-0 bottom-0"
          animate={{ opacity: 1, y: 50, x: -10 }}
          transition={{ type: "spring", delay: 3, duration: 5 }}
          src={BlueBean}
          alt="Blue bean shape"
        />
        <motion.img
          className="opacity-0 absolute left-20 bottom-20"
          animate={{ opacity: 1, y: 40, x: 10 }}
          transition={{ type: "spring", delay: 3, duration: 5 }}
          src={OrangeMiniShapes}
          alt="Blue bean shape"
        />
        <motion.img
          className="opacity-0 absolute right-0 top-0"
          animate={{ opacity: 1, y: -50, x: -10 }}
          transition={{ type: "spring", delay: 3, duration: 5 }}
          src={OrangeBean}
          alt="Blue bean shape"
        />
        <motion.img
          className="opacity-0 absolute right-10 -top-10"
          animate={{ opacity: 1, y: -40, x: -20 }}
          transition={{ type: "spring", delay: 3, duration: 5 }}
          src={OrangeMiniShapes2}
          alt="Blue bean shape"
        />
        <motion.img
          animate={{ opacity: 1, x: 20, y: 10 }}
          transition={{ type: "spring", delay: 3, duration: 5 }}
          className="absolute opacity-0 right-60 bottom-20"
          src={TreeDBox}
          alt="3d box"
        />
        <motion.img
          animate={{ opacity: 1, x: 10, y: 20 }}
          transition={{ type: "spring", delay: 3, duration: 5 }}
          className="absolute opacity-0 right-40 bottom-40"
          src={ThunderCloud}
          alt="Thunder Cloud"
        />
        <motion.img
          animate={{ opacity: 1, x: -20, y: 5 }}
          transition={{ type: "spring", delay: 3, duration: 5 }}
          className="absolute opacity-0 right-40 bottom-10"
          src={CodeSymbol}
          alt="Thunder Cloud"
        />
      </div>
    </section>
  );
};

export default Hero;
