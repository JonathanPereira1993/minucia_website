import { useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Button from "../components/ui/Button";

import Modal from "../components/ui/Modal";

import PortfolioCard from "../components/PortfolioCard";
import { minuciaProjects } from "../constants";

const Work = () => {
  const [openModal, setOpenModal] = useState(false);
  const modalRef = useRef();

  const openModalHandler = () => {
    modalRef.current.openModal();
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  return (
    <section id="work-section" className="bg-lightBlue py-20 max-lg:py-10">
      <div className="lg:max-w-[1600px] mx-auto relative px-10 py-20 max-lg:py-10">
        <div>
          <div className="grid lg:grid-cols-2 gap-20 h-full content-center">
            <div className="grid grid-cols-3 grid-rows-[mansory]  content-center gap-6 max-lg:hidden">
              {minuciaProjects.map((item) => (
                <img
                  className="rounded-lg"
                  key={item.id}
                  src={item.image}
                  alt={item.title}
                />
              ))}
            </div>
            <div className="flex flex-col justify-center h-full">
              <h2 className="text-6xl max-lg:text-4xl font-semibold leading-[61px] mb-10">
                Conheça os nossos projetos
              </h2>
              <p className="text-xl font-light leading-9 mb-10 ">
                Veja alguns dos nossos projetos e descubra como ajudámos
                empresas a criar websites personalizados e eficazes.
              </p>
              <Button
                onClick={openModalHandler}
                className="group flex items-center gap-6 text-[#3B8291] text-xl min-w-[244px]"
              >
                Os nossos projetos
                <FaArrowRight className="text-accent duration-300 group-hover:translate-x-2" />
              </Button>
              <Modal
                ref={modalRef}
                open={openModal}
                onClose={closeModalHandler}
                className="p-10"
                title="Projects"
              >
                <div className="grid max-xl:grid-cols-1 place-items-center grid-rows-[mansory] grid-cols-2 gap-9 max-md:gap-12">
                  {minuciaProjects.map((project) => (
                    <PortfolioCard
                      key={project.id}
                      image={project.image}
                      title={project.title}
                      subtitle={project.subtitle}
                      year={project.year}
                      description={project.description}
                    />
                  ))}
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
