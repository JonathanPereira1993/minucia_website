const WindowDisplay = () => {
  return (
    <div className="z-10 relative max-w-[1200px] overflow-hidden rounded-xl shadow-lg mx-auto">
      <div className="h-[40px] rounded-t-xl bg-white flex justify-between items-center px-4">
        <div className="flex items-center gap-2">
          <div className="w-[10px] h-[10px] bg-red-500 rounded-full cursor-pointer hover:brightness-110" />
          <div className="w-[10px] h-[10px] bg-yellow-500 rounded-full cursor-pointer hover:brightness-110" />
          <div className="w-[10px] h-[10px] bg-green-500 rounded-full cursor-pointer hover:brightness-110" />
        </div>
        <div className="bg-lightBlue text-[#94A3B8] font-light w-[40%] text-center rounded-md">
          minucia.pt
        </div>
        <div>Actions</div>
      </div>
      <div className="h-[600px] flex items-center justify-center flex-col bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] opacity-90 backdrop-blur-[19px]">
        <h2 className="text-secondary text-6xl">Quem somos nos?</h2>
        <p className="text-center max-w-[70%] mt-16 text-secondary text-lg font-light">
          Lorem ipsum dolor sit amet consectetur. Et quis rutrum hac diam
          sagittis viverra. Aliquet aliquam ipsum metus arcu amet purus. Tortor
          turpis morbi leo porttitor odio sed urna felis cras. Nec ornare
          feugiat in ornare diam in.
        </p>
      </div>
    </div>
  );
};

export default WindowDisplay;
