import Input from "../components/ui/Input";

const Contacts = () => {
  return (
    <section id="contact-section" className="py-20 bg-lightBlue">
      <div className="flex gap-10 max-w-[500px] items-center lg:max-w-[1600px] mx-auto relative">
        <div className="px-4 flex-1 max-w-[700px]">
          <h2 className="font-semibold text-5xl leading-[72px]">
            Vamos tratar do seu <span className="text-accent">negócio</span>{" "}
            juntos?
          </h2>
        </div>

        <form
          className="bg-white flex gap-10 flex-col flex-1 rounded-xl shadow-xl p-12"
          action="submit"
        >
          <label htmlFor="">Tenho interesse em serviços de...</label>

          <Input id="name" placeholder="O seu nome" />
          <Input id="email" placeholder="O seu e-mail" />
          <Input id="message" placeholder="A sua mensagem" />
        </form>
      </div>
    </section>
  );
};

export default Contacts;
