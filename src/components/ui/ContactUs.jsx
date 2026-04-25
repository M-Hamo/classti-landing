import { useTranslation, Trans } from "react-i18next";

import contact from "../../assets/images/contact_us.png";
import phoneIcon from "../../assets/icons/fi_5291831.svg";
import phoneIcon2 from "../../assets/icons/phone_icon.svg";
import mailIcon from "../../assets/icons/fi_646135.svg";
import whatsappIcon from "../../assets/icons/fi_1419661.svg";

export const ContactUs = () => {
  const { t } = useTranslation();

  return (
    <section
      id="contactUs"
      className="grid min-h-[488px] grid-cols-1 gap-4 rounded-3xl p-4 md:-mt-10 md:grid-cols-2 md:p-11.5"
      style={{
        backgroundImage: `url(${contact})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-start justify-start gap-4">
        <div className="flex h-7.5 items-center justify-center gap-2 rounded-2xl border border-[#CCCCCC] bg-[#E5FFF4] px-3 py-1">
          <img src={phoneIcon} alt="about" className="h-4 w-4" />
          <span className="font-ibm-semiBold text-sm text-[#00512E]">
            {t("contact_us")}
          </span>
        </div>

        <h2 className="font-ibm-bold text-[24px] text-white md:text-[32px]">
          <Trans
            i18nKey="contact_us_title"
            components={[<span key="0" className="text-[#07C951]" />]}
          />
        </h2>

        <p className="font-ibm-medium text-start text-xs whitespace-pre-line text-[#EBEBEB] md:w-11/12 md:text-base">
          {t("contact_us_desc")}
        </p>

        <div className="flex flex-col items-stretch justify-start gap-4">
          <a
            href="tel:0541558852"
            className="group flex items-center justify-start gap-2"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5">
              <img src={phoneIcon2} alt="phone" />
            </div>

            <span className="font-ibm-regular text-sm text-white group-hover:underline">
              0541558852
            </span>
          </a>
          <a
            href="mailto:info@classti.sa"
            className="group flex items-center justify-start gap-2"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5">
              <img src={mailIcon} alt="email" />
            </div>

            <span className="font-ibm-regular text-sm text-white group-hover:underline">
              info@classti.sa
            </span>
          </a>
          <a
            href="https://wa.me/966541558852"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-start gap-2"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5">
              <img src={whatsappIcon} alt="whatsapp" />
            </div>

            <span className="font-ibm-regular text-sm text-white group-hover:underline">
              0541558852
            </span>
          </a>
        </div>
      </div>

      <form className="flex flex-col items-stretch justify-start gap-6">
        <div className="flex flex-col items-start justify-start gap-2">
          <label htmlFor="fullName" className="font-ibm-medium text-base text-white">
            {t("full_name")}
          </label>
          <input
            id="fullName"
            type="text"
            required
            placeholder={t("full_name_placeholder")}
            className="font-ibm-regular h-12 w-full rounded-xl border border-white/43 bg-[#00512E]/10 px-4 py-2 text-sm text-white placeholder-[#B8B8B8] transition-all outline-none focus:border-[#07C951]"
          />
        </div>

        <div className="flex flex-col items-start justify-start gap-2">
          <label htmlFor="email" className="font-ibm-medium text-base text-white">
            {t("email")}
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder={t("email_placeholder")}
            className="font-ibm-regular h-12 w-full rounded-xl border border-white/43 bg-[#00512E]/10 px-4 py-2 text-sm text-white placeholder-[#B8B8B8] transition-all outline-none focus:border-[#07C951]"
          />
        </div>

        <div className="flex flex-col items-start justify-start gap-2">
          <label htmlFor="message" className="font-ibm-medium text-base text-white">
            {t("message")}
          </label>
          <textarea
            id="message"
            placeholder={t("message_placeholder")}
            rows={3}
            required
            className="font-ibm-regular w-full rounded-xl border border-white/43 bg-[#00512E]/10 px-4 py-2 text-sm text-white placeholder-[#B8B8B8] transition-all outline-none focus:border-[#07C951]"
          />
        </div>

        <div className="mt-2 flex items-center justify-start">
          <button className="font-ibm-semiBold h-12 w-full cursor-pointer rounded-xl bg-[#00512E] px-8 text-base text-white transition-transform hover:bg-[#00512E]/90 active:scale-[0.98] md:w-auto">
            {t("send_now")}
          </button>
        </div>
      </form>
    </section>
  );
};
