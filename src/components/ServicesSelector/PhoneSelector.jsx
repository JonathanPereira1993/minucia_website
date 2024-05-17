import { useContext } from "react";
import Phone from "../../assets/Phone/Phone.svg";
import { ServiceSelectorContext } from "../ServicesSelector/ServideSelectorContext";

const PhoneSelector = () => {
  const { selected, handleSelected } = useContext(ServiceSelectorContext);

  return (
    <div className="flex items-center justify-center">
      <div className="border-[#3B8291] border-8 rounded-full w-[416px] h-[416px] absolute z-10" />
      <div className="border-[#3B8291] border rounded-full w-[550px] h-[550px] absolute z-10" />
      <div className="z-20 relative">
        <img src={Phone} alt="Phone" draggable="false" />
        <div className="absolute grid grid-cols-2 gap-2 z-50 top-[80px] bottom-[50px] left-[40px] ">
          <div>
            <div
              onClick={() => handleSelected(0)}
              className={`${
                selected === 0
                  ? "scale-105 -translate-x-1 -translate-y-1 shadow-lg border-dashed border-2 border-accent"
                  : "border-dashed border-2 border-white hover:scale-[1.04]"
              } h-[155px] w-[143px] p-[2px] cursor-pointer transition-all duration-300 mb-3 shadow-sm bg-white rounded-lg `}
            >
              <div className="bg-slate-300 w-full h-full rounded-md"></div>
            </div>
            <div
              onClick={() => handleSelected(2)}
              className={`${
                selected === 2
                  ? "scale-105 -translate-x-1 shadow-lg border-dashed border-2 border-accent"
                  : "border-dashed border-2 border-white hover:scale-[1.04]"
              } h-[190px] w-[143px] p-[2px] cursor-pointer transition-all duration-300 mb-3 shadow-sm bg-white rounded-lg`}
            >
              <div className="bg-slate-300 w-full h-full rounded-md"></div>
            </div>
            <div
              onClick={() => handleSelected(4)}
              className={`${
                selected === 4
                  ? "scale-105 -translate-x-1 translate-y-1 shadow-lg border-dashed border-2 border-accent"
                  : "border-dashed border-2 border-white hover:scale-[1.04]"
              } h-[227px] w-[143px] p-[2px] cursor-pointer transition-all duration-300 shadow-sm bg-white rounded-lg`}
            >
              <div className="bg-slate-300 w-full h-full rounded-md"></div>
            </div>
          </div>
          <div>
            <div
              onClick={() => handleSelected(1)}
              className={`${
                selected === 1
                  ? "scale-105 translate-x-1 -translate-y-1 shadow-lg border-dashed border-2 border-accent"
                  : "border-dashed border-2 border-white hover:scale-[1.04]"
              } h-[171px] w-[143px] p-[2px] cursor-pointer transition-all duration-300 mb-3 shadow-sm bg-white rounded-lg`}
            >
              <div className="bg-slate-300 w-full h-full rounded-md"></div>
            </div>
            <div
              onClick={() => handleSelected(3)}
              className={`${
                selected === 3
                  ? "scale-105 translate-x-1 shadow-lg border-dashed border-2 border-accent"
                  : "border-dashed border-2 border-white hover:scale-[1.04]"
              } h-[156px] w-[219px] p-[2px] cursor-pointer transition-all duration-300 mb-3 shadow-sm bg-white rounded-lg`}
            >
              <div className="bg-slate-300 w-full h-full rounded-md"></div>
            </div>
            <div
              onClick={() => handleSelected(5)}
              className={`${
                selected === 5
                  ? "scale-105 translate-x-1 translate-y-1 shadow-lg border-dashed border-2 border-accent"
                  : "border-dashed border-2 border-white hover:scale-[1.04]"
              } h-[183px] w-[143px] p-[2px] cursor-pointer transition-all duration-300 shadow-sm bg-white rounded-lg`}
            >
              <div className="bg-slate-300 w-full h-full rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneSelector;
