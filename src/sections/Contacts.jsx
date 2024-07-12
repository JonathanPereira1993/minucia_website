import Input from "../components/ui/Input";
import RadioButton from "../components/ui/RadioButton";
import RadioGroup from "../components/ui/RadioGroup";

import EmailSVG from "../assets/CustomIcons/EmailIcon.svg";
import LocalSVG from "../assets/CustomIcons/Local.svg";
import Button from "../components/ui/Button";

import { FiSend } from "react-icons/fi";

const Contacts = () => {
  return (
    <section id="contact-section" className="py-20 bg-lightBlue">
      <div className="flex gap-10 max-w-[500px] items-center lg:max-w-[1600px] mx-auto relative">
        <div className="px-4 w-full max-w-[700px]">
          <h2 className="font-semibold text-5xl leading-[72px] mb-20">
            Vamos tratar do seu <span className="text-accent">negócio</span>{" "}
            juntos?
          </h2>

          <span className="flex text-xl gap-4 mb-16 items-center">
            <img src={EmailSVG} alt="" />
            <a className="hover:underline" href="mailto:geral@minucia.pt">
              geral@minucia.pt
            </a>
          </span>

          <span className="flex text-xl gap-4 mb-10 items-center">
            <img src={LocalSVG} alt="" />
            <a className="hover:underline" href="">
              Leiria, Portugal
            </a>
          </span>
        </div>

        <form
          className="bg-white max-w-[700px] flex gap-10 flex-col rounded-xl shadow-xl p-12"
          action="submit"
        >
          <label className="text-xl">Tenho interesse em serviços de...</label>
          <RadioGroup checkedValue="online-shop">
            <RadioButton label="Loja Online" value="online-shop" />
            <RadioButton label="Landing Page" value="landing-page" />
            <RadioButton label="Site Corporativo" value="corporative-site" />
            <RadioButton label="Alojamento & Domínio" value="domain" />
            <RadioButton label="UX/UI Design" value="UX-UI-design" />
            <RadioButton label="Design Gráfico" value="graphic-design" />
            <RadioButton label="Outro" value="other" />
          </RadioGroup>

          <Input id="name" placeholder="O seu nome" />
          <Input id="email" placeholder="O seu e-mail" />
          <Input
            isTextArea
            cols="50"
            rows="50"
            id="message"
            placeholder="A sua mensagem"
          />
          <Button className="px-8 mt-4 gap-4 py-4 w-fit flex justify-center items-center text-center h-16 text-xl font-light rounded-lg bg-primary text-white duration-200 hover:shadow-md">
            <FiSend />
            Enviar Mensagem
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
