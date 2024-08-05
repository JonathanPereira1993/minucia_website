import Image1 from "../assets/ProjectsImages/IrmaosFerreira.jpg";
import BlueUnderline from "../assets/Underlines/BlueUnderline.svg";

import PortfolioCard from "../components/PortfolioCard";

const Projects = () => {
  return (
    <section id="work-section" className="py-20">
      <div className="lg:max-w-[1600px] mx-auto relative px-10">
        <h2 className="text-center mb-20 z-20 flex justify-center text-6xl font-semibold relative">
          <span className="z-10">Projetos</span>
          <img
            className="absolute bottom-0 left-1/2 translate-y-[16px] -translate-x-[80px] z-0"
            src={BlueUnderline}
            alt="Small orange underline"
          />
        </h2>
        <div className="grid max-xl:grid-cols-1 place-items-center grid-cols-2 gap-9 max-md:gap-12">
          <PortfolioCard
            image={Image1}
            title="Irmãos Ferreira"
            subtitle="Website Corporativo"
            year="2018"
            description="Teste teste Irmãos Ferreira Teste teste"
          />
          <PortfolioCard
            image={Image1}
            title="Irmãos Ferreira"
            subtitle="Website Corporativo"
            year="2018"
            description="Teste teste Irmãos Ferreira Teste teste"
          />
          <PortfolioCard
            image={Image1}
            title="Irmãos Ferreira"
            subtitle="Website Corporativo"
            year="2018"
            description="Teste teste Irmãos Ferreira Teste teste"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
