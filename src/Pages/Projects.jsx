import BlueUnderline from "../assets/Underlines/BlueUnderline.svg";

const Projects = () => {
  return (
    <section id="service-section" className="py-20">
      <div className="lg:max-w-[1600px] mx-auto relative py-20">
        <h2 className="text-center z-20 flex justify-center text-6xl font-semibold relative">
          <span className="z-10">Projetos</span>
          <img
            className="absolute bottom-0 left-1/2 translate-y-[16px] -translate-x-[80px] z-0"
            src={BlueUnderline}
            alt="Small orange underline"
          />
        </h2>
      </div>
    </section>
  );
};

export default Projects;
