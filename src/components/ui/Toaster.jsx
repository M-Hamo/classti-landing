import closeIcon from "../../assets/icons/X.svg";
import successIcon from "../../assets/icons/right.svg";

export const Toaster = ({ show, onClose, message }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 backdrop-blur-xs transition-all duration-300">
      <div className="animate-in fade-in zoom-in relative flex h-[363px] w-[533px] flex-col items-center justify-center gap-8 rounded-[32px] bg-white p-10 shadow-2xl duration-300">
        <button
          onClick={onClose}
          className="absolute top-6 left-6 h-5 w-5 cursor-pointer border-none outline-none"
        >
          <img src={closeIcon} alt="close" className="h-4 w-4" />
        </button>

        <div className="mt-6 flex flex-col items-center justify-center gap-6">
          <img src={successIcon} alt="success" className="h-[150px] w-[150px]" />

          <h3 className="font-ibm-semiBold text-center text-2xl text-[#0E1F1F]">
            {message}
          </h3>
        </div>
      </div>
    </div>
  );
};
