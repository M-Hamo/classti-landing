import { useLanguage } from "../../hooks/useLanguage";
import { useTranslation } from "react-i18next";
import langIcon from "../../assets/icons/lang.svg";

export const ToggleLang = ({ className, text = "toggle_lang", onToggle = () => {} }) => {
  const { t } = useTranslation();
  const { toggleLang } = useLanguage();

  const changeLangHandler = () => {
    onToggle();
    setTimeout(() => toggleLang());
  };

  return (
    <button
      onClick={changeLangHandler}
      className={`flex h-10 cursor-pointer items-center justify-start gap-1 rounded-lg border border-[#00512E] px-1 text-sm text-[#00512E] transition-colors hover:bg-[#00512E]/5 ${className}`}
    >
      <img src={langIcon} alt="lang" className="h-5 w-5" />
      <span className="font-ibm-medium">{t(text)}</span>
    </button>
  );
};
