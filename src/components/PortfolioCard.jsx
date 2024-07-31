import Image1 from "../assets/ProjectsImages/IrmaosFerreira.jpg";

const PortfolioCard = () => {
  return (
    <div className="bg-white shadow-lg border min-h-[450px] max-lg:min-h-[380px] max-lg:p-6 p-10 rounded-lg relative overflow-hidden">
      <h2 className="text-4xl max-lg:text-2xl font-medium">Projeto 1</h2>
      <div className="flex items-start gap-10 mt-8 max-lg:mt-6 h-full">
        <div className="flex flex-col h-[calc(100% - 40px)]">
          <div className="space-y-4 max-lg:space-y-2 flex-1">
            <p>
              <strong>Cliente: </strong> Irmãos Ferreira
            </p>
            <p>
              <strong>Tipo: </strong> Html & CSS
            </p>
            <p>
              <strong>Link: </strong>
              <a href="www.irmaosferreira.pt">www.irmaosferreira.pt</a>
            </p>
            <p>
              <strong>Ano: </strong>
              2018
            </p>
          </div>
          <div className="space-y-2 absolute max-lg:text-xl max-lg:right-6 max-lg:top-6 lg:left-10 lg:bottom-10">
            <p>
              <button className="underline hover:text-primary">Ver mais</button>
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="absolute shadow-xl top-0 bottom-0 right-0 left-[45%] max-lg:left-0 max-lg:top-[60%] max-lg:right-0 w-full">
            <img
              className="object-cover h-full w-full"
              src={Image1}
              alt="Irmaos Ferreira Website Print"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
