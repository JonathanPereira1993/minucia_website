const WindowDisplayItem = ({ title, description, className }) => {
  return (
    <div
      className={`${
        className != undefined && className
      } items-center justify-center flex-col`}
    >
      <h2 className="text-secondary text-6xl">{title}</h2>
      <p className="text-center mx-auto max-w-[70%] mt-16 text-secondary text-lg font-light">
        {description}
      </p>
    </div>
  );
};

export default WindowDisplayItem;
