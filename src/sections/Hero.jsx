import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import Button from "../components/ui/Button";

// Images (Shapes)
import TreeDBox from "../assets/CustomIcons/3DBox.svg";
import CodeSymbol from "../assets/CustomIcons/SymbolCode.svg";
import ThunderCloud from "../assets/CustomIcons/ThunderCloud.svg";
import BlueBean from "../assets/Shapes/BlueBean.svg";
import OrangeBean from "../assets/Shapes/OrangeBean.svg";
import OrangeMiniShapes from "../assets/Shapes/OrangeMiniShapes.svg";
import OrangeMiniShapes2 from "../assets/Shapes/OrangeMiniShapes2.svg";
import BlueUnderline from "../assets/Underlines/BlueUnderline.svg";

const Hero = () => {
  return (
    <section
      id="hero-section"
      className="h-screen lg:max-w-[1600px] mx-auto flex justify-between px-20"
    >
      <div className="max-w-[600px] h-[530px] my-auto">
        <h1 className="flex flex-col items-start text-7xl">
          <motion.span
            animate={{ opacity: 1 }}
            transition={{ type: "spring", delay: 0, duration: 2 }}
            className="uppercase opacity-0 font-base text-[#475569] text-xl mb-2"
          >
            Bem vindo à
          </motion.span>
          <motion.span
            className="opacity-0 relative font-medium"
            animate={{ opacity: 1 }}
            transition={{ type: "spring", delay: 1, duration: 2 }}
          >
            Minucia
            <img
              className="w-[190px] absolute -bottom-2 -z-10"
              src={BlueUnderline}
              alt="Blue underline under the minucia title"
            />
          </motion.span>
          <motion.span
            className="opacity-0 font-normal text-6xl mt-1"
            animate={{ opacity: 1 }}
            transition={{ type: "spring", delay: 1.5, duration: 2 }}
          >
            Web Development
          </motion.span>
        </h1>
        <motion.p
          className="opacity-0 mt-10 max-w-[500px] text-xl font-light"
          animate={{ opacity: 1 }}
          transition={{ type: "spring", delay: 2, duration: 2 }}
        >
          Transformamos visões em experiências digitais excepcionais. Descubra a
          Minúcia, onde cada detalhe faz a diferença na sua presença online.
        </motion.p>
        <motion.div
          animate={{ opacity: 1 }}
          transition={{ type: "spring", delay: 2, duration: 2 }}
          className="flex items-center justify-between mt-10 opacity-0"
        >
          <Button
            href="#contact-section"
            className="px-7 py-3 min-w-[244px] text-center text-xl font-light rounded-lg bg-primary text-white duration-200 hover:shadow-md"
          >
            Contacte-nos
          </Button>
          <Button className="group flex items-center gap-6 text-[#3B8291] text-xl min-w-[244px]">
            Os nossos projetos
            <FaArrowRight className="text-accent duration-300 group-hover:translate-x-2" />
          </Button>
        </motion.div>
      </div>
      <div className="relative w-[620px] h-[530px] my-auto">
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
