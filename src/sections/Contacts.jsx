import Input from "../components/ui/Input";
import RadioButton from "../components/ui/RadioButton";
import RadioGroup from "../components/ui/RadioGroup";

import EmailSVG from "../assets/CustomIcons/EmailIcon.svg";
import LocalSVG from "../assets/CustomIcons/Local.svg";
import Button from "../components/ui/Button";

import { FiSend } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";

import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact-section" className="py-20 bg-lightBlue">
      <div className="flex max-lg:flex-col gap-10 max-w-[500px] items-center lg:max-w-[1600px] mx-auto px-10 relative">
        <div className="px-4 w-full max-w-[700px]">
          <h2 className="font-semibold max-lg:text-4xl  text-5xl leading-[72px] max-lg:mb-10 mb-20">
            Vamos tratar do seu <span className="text-accent">negócio</span>{" "}
            juntos?
          </h2>

          <span className="flex text-xl gap-4  mb-10 items-center">
            <img src={EmailSVG} alt="Email geral da minucia" />
            <a className="hover:underline" href="mailto:geral@minucia.pt">
              geral@minucia.pt
            </a>
          </span>

          <span className="flex text-xl  gap-4 max-lg:mb-10 mb-20 items-center">
            <img src={LocalSVG} alt="Localidade" />
            <a>Leiria, Portugal</a>
          </span>

          <div className="flex items-center max-lg:hidden gap-10">
            <a
              className="size-14 shadow-md flex justify-center rounded-[5px] items-center border-2 duration-150 border-primary hover:bg-primary text-primary hover:text-white"
              href="https://www.instagram.com/minucia.pt/"
            >
              <IoLogoInstagram className="size-6" />
            </a>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white max-w-[700px] flex gap-10 flex-col rounded-xl shadow-xl max-lg:p-6 p-12"
          action="submit"
        >
          <label className="text-xl">Tenho interesse em serviços de...</label>
          <RadioGroup checkedValue="other">
            <RadioButton label="Loja Online" value="online-shop" />
            <RadioButton label="Landing Page" value="landing-page" />
            <RadioButton label="Site Corporativo" value="corporative-site" />
            <RadioButton label="Alojamento & Domínio" value="domain" />
            <RadioButton label="UX/UI Design" value="UX-UI-design" />
            <RadioButton label="Design Gráfico" value="graphic-design" />
            <RadioButton label="Outro" value="other" />
          </RadioGroup>

          <Input id="name" name="user_name" placeholder="O seu nome" />
          <Input id="email" name="user_email" placeholder="O seu e-mail" />
          <Input
            isTextArea
            cols="50"
            rows="50"
            id="message"
            name="message"
            placeholder="A sua mensagem"
          />
          <Button
            type="submit"
            className="px-8 mt-4 gap-4 py-4 w-fit max-lg:w-full flex justify-center items-center text-center h-16 text-xl font-light rounded-lg bg-primary text-white duration-200 hover:shadow-md"
          >
            <FiSend />
            Enviar Mensagem
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
