import PropTypes from "prop-types";
import { useState } from "react";

const Carousel = ({ slides }) => {
  let [current, setCurrent] = useState(0);
  let slidesPercentage = 100 / (slides.length - 1);
  console.log(slides.length - 1);

  const previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current++);
  };

  return (
    <div className="overflow-hidden py-6 relative">
      <div className="flex justify-between">
        <h2 className="font-semibold text-5xl leading-[72px] mb-10">
          O que os nossos clientes dizem
        </h2>
        <div className="flex gap-10">
          <button onClick={previousSlide}>Left</button>
          <button onClick={nextSlide}>right</button>
        </div>
      </div>
      <div
        className="flex gap-6 transition ease-out duration-300"
        style={{
          transform: `translateX(-${current * slidesPercentage}%)`,
        }}
      >
        {slides.map((slide) => {
          return (
            <div
              className="rounded-lg bg-white p-8 shadow-lg min-w-[400px]"
              key={slide.id}
            >
              <p className="text-lg">{slide.feedback}</p>
              <div className="flex items-center gap-6 mt-6">
                <img
                  className="rounded-full w-16 h-16"
                  src={slide.photo}
                  alt={slide.author}
                />
                <div>
                  <h3 className="text-lg">{slide.name}</h3>
                  <p className="text-[#475569]">{slide.area}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Props Validation
Carousel.propTypes = {
  slides: PropTypes.object,
};

export default Carousel;
