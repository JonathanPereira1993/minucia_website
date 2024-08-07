import { Feedbacks } from "../constants";

import Slider from "react-slick";

import { useRef } from "react";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Feedback = () => {
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };

  const previous = () => {
    sliderRef.slickPrev();
  };

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1340,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <section id="feedback-section" className="py-20">
      <div className="flex justify-between items-start lg:max-w-[1600px] px-10 mx-auto">
        <h2 className="mb-20 max-lg:mb-10 z-20 flex w-full lg:justify-between max-lg:text-4xl max-lg:justify-center text-6xl font-semibold relative">
          <span className="z-10">O que os nossos clientes dizem</span>
        </h2>
        <div className="flex max-lg:hidden items-center gap-6 mt-4">
          <button
            onClick={previous}
            className="size-12 active:opacity-85 flex rounded-full items-center justify-center border-2 border-primary text-primary hover:text-white hover:bg-primary"
          >
            <GoArrowLeft className="size-6" />
          </button>
          <button
            onClick={next}
            className="size-12 active:opacity-85 flex rounded-full items-center justify-center border-2 border-primary text-primary hover:text-white hover:bg-primary"
          >
            <GoArrowRight className="size-6" />
          </button>
        </div>
      </div>

      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {Feedbacks.map((slide) => (
          <div
            className="rounded-2xl bg-[#fdfdfd] p-8 border-2 border-slate-100"
            key={slide.id}
          >
            <p className="text-lg">{slide.feedback}</p>
            <div className="flex items-center gap-6 mt-6">
              <div className="rounded-full overflow-hidden h-18 w-18 flex items-center justify-center shadow-md">
                <img src={slide.photo} alt={slide.author} />
              </div>

              <div>
                <h3 className="text-lg">{slide.name}</h3>
                <p className="text-[#475569]">{slide.area}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Feedback;
