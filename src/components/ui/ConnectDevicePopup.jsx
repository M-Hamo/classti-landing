import { useTranslation } from "react-i18next";

import qrCode from "../../assets/images/qr-code 1.png";

export const ConnectDevicePopup = ({ show, onClose }) => {
  const { t } = useTranslation();

  if (!show) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-70 flex items-center justify-center bg-black/40 transition-all duration-300"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="animate-in fade-in zoom-in min:w-[533px] relative flex h-[350px] flex-col items-center justify-center gap-3 rounded-3xl bg-white p-6 shadow-2xl duration-300"
      >
        <h3 className="font-ibm-medium text-center text-xl leading-7.5 text-[#0E1F1F]">
          {t("link_the_app_to_the_device")}
        </h3>

        <p className="font-ibm-regular text-sm leading-7.5 text-[#5B6161]">
          {t("scan_qr_code")}
        </p>

        <img src={qrCode} alt="Qr code" className="h-[218px] w-[218px]" />
      </div>
    </div>
  );
};
