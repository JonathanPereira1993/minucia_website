import Image1 from "../assets/ProjectsImages/IrmaosFerreira.jpg";

const PortfolioCard = () => {
  return (
    <div className="bg-white shadow-lg border p-10 rounded-lg">
      <h2 className="text-4xl font-medium">Projeto 1</h2>
      <div className="flex items-start gap-10 mt-8">
        <div className="space-y-4">
          <p>
            <strong>Cliente: </strong> Irmãos Ferreira
          </p>
          <p>
            <strong>Tipo: </strong> Html & CSS
          </p>
        </div>
        <div className="grid">
          <img
            className="max-w-[500px] rounded-lg shadow-md"
            src={Image1}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
