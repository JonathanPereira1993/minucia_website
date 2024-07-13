import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const sliderRef = useRef(null);

  let visibleSlides = 5;

  let slidesPercentage = 100 / (slides.length - 1);

  const previousSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartPos(event.clientX);
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const currentPosition = event.clientX - startPos;
      setCurrentTranslate(prevTranslate + currentPosition);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -100) nextSlide();
    else if (movedBy > 100) previousSlide();

    setCurrentTranslate(0);
    setPrevTranslate(0);
  };

  const handleTouchStart = (event) => {
    setIsDragging(true);
    setStartPos(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    if (isDragging) {
      const currentPosition = event.touches[0].clientX - startPos;
      setCurrentTranslate(prevTranslate + currentPosition);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -100) nextSlide();
    else if (movedBy > 100) previousSlide();

    setCurrentTranslate(0);
    setPrevTranslate(0);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("mousedown", handleMouseDown);
      slider.addEventListener("mousemove", handleMouseMove);
      slider.addEventListener("mouseup", handleMouseUp);
      slider.addEventListener("mouseleave", handleMouseUp);

      slider.addEventListener("touchstart", handleTouchStart);
      slider.addEventListener("touchmove", handleTouchMove);
      slider.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (slider) {
        slider.removeEventListener("mousedown", handleMouseDown);
        slider.removeEventListener("mousemove", handleMouseMove);
        slider.removeEventListener("mouseup", handleMouseUp);
        slider.removeEventListener("mouseleave", handleMouseUp);

        slider.removeEventListener("touchstart", handleTouchStart);
        slider.removeEventListener("touchmove", handleTouchMove);
        slider.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [isDragging, currentTranslate, prevTranslate]);

  return (
    <div className="overflow-hidden py-6 relative">
      <div className="flex justify-between lg:max-w-[1600px] px-10 mx-auto">
        <h2 className="font-semibold text-5xl leading-[72px] mb-10">
          O que os nossos clientes dizem
        </h2>
        <div className="flex gap-10">
          <button
            className="border-2 border-primary text-primary hover:bg-primary duration-150 hover:text-white rounded-full w-12 h-12 flex items-center justify-center"
            onClick={previousSlide}
          >
            <FaArrowLeft />
          </button>
          <button
            className="border-2 border-primary text-primary hover:bg-primary duration-150 hover:text-white rounded-full w-12 h-12 flex items-center justify-center"
            onClick={nextSlide}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div
        ref={sliderRef}
        className="flex transition-transform ease-out duration-300"
        style={{
          transform: `translateX(-${current * slidesPercentage}%)`,
        }}
      >
        {slides.map((slide) => {
          return (
            <div
              className="rounded-lg bg-white ml-6 p-8 shadow-lg min-w-[400px]"
              key={slide.id}
              style={{ minWidth: `calc(100% / ${visibleSlides})` }}
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
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      feedback: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      area: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Carousel;
