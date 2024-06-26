import { FaArrowRight } from "react-icons/fa6";
import Button from "../components/ui/Button";

const Work = () => {
  return (
    <section id="work-section" className="bg-lightBlue py-20">
      <div className="lg:max-w-[1600px] mx-auto relative py-20">
        <div>
          <div className="grid grid-cols-2 h-full">
            <div></div>
            <div className="flex flex-col justify-center h-full">
              <h2 className="text-6xl font-semibold leading-[61px] mb-10">
                Conheça os nossos projetos
              </h2>
              <p className="text-xl font-light leading-9 mb-10">
                Morbi sit egestas dignissim pharetra, sed amet. Tempus justo
                senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam
                facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus
                urna, faucibus aenean lorem faucibus integer.
              </p>
              <Button className="group flex items-center gap-6 text-[#3B8291] text-xl min-w-[244px]">
                Os nossos projetos
                <FaArrowRight className="text-accent duration-300 group-hover:translate-x-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
