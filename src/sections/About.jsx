import BlueBean_Big from "../assets/Shapes/BigBlueBean.svg";
import BigGreyBean from "../assets/Shapes/BigGreyBean.svg";
import BlueBean from "../assets/Shapes/BlueBean.svg";
import GreyMiniShapesBig from "../assets/Shapes/GreyMiniShapesBig.svg";
import OrangeMiniShapesBig from "../assets/Shapes/OrangeMiniShapesBig.svg";
import smallOrangeUnderline from "../assets/Underlines/OrangeUnerline.svg";

import WindowDisplay from "../components/WindowDisplay";

const About = () => {
  return (
    <section id="about-section" className="bg-lightBlue h-screen">
      <div className="lg:max-w-[1600px] mx-auto relative py-20">
        <div className="z-0 translate-y-[160px]">
          <img
            className="absolute z-0 translate-y-1/2 top-1/2 left-0"
            src={BlueBean_Big}
            alt="Big blue bean"
          />
          <img
            className="absolute  top-1/2 -right-[80px]"
            src={BigGreyBean}
            alt="Blue bean"
          />
          <img
            className="absolute translate-y-[400px] top-1/2 -right-10"
            src={BlueBean}
            alt="Blue bean"
          />
          <img
            className="absolute z-0 translate-y-[100px] top-1/2 left-0"
            src={OrangeMiniShapesBig}
            alt="Blue bean"
          />
          <img
            className="absolute z-0 top-1/2 right-0"
            src={GreyMiniShapesBig}
            alt="Blue bean"
          />
        </div>
        <h2 className="text-center z-20 flex justify-center text-6xl font-semibold relative">
          <span className="z-10">A Minucia</span>
          <img
            className="absolute bottom-0 left-1/2 translate-y-[4px] -translate-x-[170px] z-0"
            src={smallOrangeUnderline}
            alt="Small orange underline"
          />
        </h2>
        <p className="text-center relative z-20 mt-10 mb-20">
          Lorem ipsum dolor sit amet consectetur. Et quis rutrum hac diam
          sagittis viverra. Aliquet aliquam ipsum metus arcu amet purus. Tortor
          turpis morbi leo porttitor odio sed urna felis cras. Nec ornare
          feugiat in ornare diam in.
        </p>
        <WindowDisplay />
      </div>
    </section>
  );
};

export default About;
