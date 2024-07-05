import Carousel from "../components/Carousel";
import { Feedbacks } from "../constants";

const Feedback = () => {
  return (
    <section id="feedback-section" className="py-20">
      <Carousel slides={Feedbacks} />
    </section>
  );
};

export default Feedback;
