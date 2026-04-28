import { useTranslation } from "react-i18next";

import footer from "../../assets/images/footer.jpg";
import logo2 from "../../assets/icons/logo2.svg";
import snapchatIcon from "../../assets/icons/fi_21752878.svg";
import tiktokIcon from "../../assets/icons/fi_3938055.svg";
import youtubeIcon from "../../assets/icons/fi_3669688.svg";
import whatsappIcon from "../../assets/icons/fi_1419661.svg";
import facebookIcon from "../../assets/icons/fi_1384005.svg";

export const Footer = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const socialIcons = [
    {
      href: "#",
      icon: snapchatIcon,
    },
    {
      href: "#",
      icon: tiktokIcon,
    },
    {
      href: "#",
      icon: youtubeIcon,
    },
    {
      href: "#",
      icon: whatsappIcon,
    },
    {
      href: "#",
      icon: facebookIcon,
    },
  ];

  return (
    <footer
      className="mx-auto mt-8 flex w-[95%] flex-col items-stretch justify-start gap-12 rounded-3xl p-6 md:mt-12 md:p-11.5"
      style={{
        backgroundImage: `url(${footer})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-4">
        <div className="flex flex-col items-start justify-start gap-2 md:col-span-2">
          <img src={logo2} alt="logo2" className="block h-8 w-20" />

          <p className="font-ibm-regular max-w-sm text-xs leading-6 text-[#EEEEEE]">
            {t("footer_desc")}
          </p>
        </div>

        <div className="flex flex-col items-start justify-start gap-4">
          <h4
            className={`font-ibm-bold relative flex items-center gap-2 text-base text-white ${
              isRTL
                ? "border-r-2 border-[#00512E] pr-1"
                : "border-l-2 border-[#00512E] pl-1"
            }`}
          >
            {t("quick_links")}
          </h4>
          <ul className="flex flex-col items-start justify-start gap-3">
            <li>
              <a
                href="#"
                className="font-ibm-regular text-sm text-[#EBEBEB] transition-colors hover:text-white hover:underline"
              >
                {t("terms_conditions")}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-ibm-regular text-sm text-[#EBEBEB] transition-colors hover:text-white hover:underline"
              >
                {t("privacy_policy")}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-ibm-regular text-sm text-[#EBEBEB] transition-colors hover:text-white hover:underline"
              >
                {t("usage_policy")}
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start justify-start gap-4">
          <h4
            className={`font-ibm-bold relative flex items-center gap-2 text-base text-white ${
              isRTL
                ? "border-r-2 border-[#00512E] pr-1"
                : "border-l-2 border-[#00512E] pl-1"
            }`}
          >
            {t("follow_us")}
          </h4>
          <div className="flex items-center gap-2">
            {socialIcons.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="flex h-7.5 w-7.5 items-center justify-center rounded-xl border border-white/20 bg-white/7 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] ring-1 ring-white/7 backdrop-blur-lg transition-all duration-300 hover:scale-115"
              >
                <img src={social.icon} alt="social" className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center border-t border-white/10 pt-6 text-center">
        <p className="font-ibm-regular text-xs text-[#EEEEEE]">
          {t("all_rights_reserved")}
        </p>
      </div>
    </footer>
  );
};
