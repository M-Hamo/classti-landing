import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { ToggleLang } from "./ToggleLang";

import tickIcon from "../../assets/icons/fi_1742953.svg";
import loginBg from "../../assets/images/login.png";

export const AuthBody = ({ children, backLink = "/", hideBackButton = false }) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const benefits = [
    t("benefit_1"),
    t("benefit_2"),
    t("benefit_3"),
    t("benefit_4"),
    t("benefit_5"),
    t("benefit_6"),
  ];

  const stats = [
    { value: "+ " + t("million"), label: t("stat_students") },
    { value: "+50k", label: t("stat_users") },
    { value: "+329", label: t("stat_schools") },
  ];

  return (
    <section className="grid min-h-screen w-full grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col items-stretch justify-start gap-6 bg-[#F6F8F9] px-8 py-6 md:gap-10 md:px-12 md:py-8">
        <div className="flex w-full items-center justify-between">
          <ToggleLang className="px-2" />

          {!hideBackButton && (
            <Link
              to={backLink}
              className="font-ibm-medium flex items-center gap-1.5 text-[#565656] transition-colors hover:text-black"
            >
              <span>{t("back")}</span>
              <svg
                className={`h-5 w-5 ${isRTL ? "" : "rotate-180"}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </Link>
          )}
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="col mx-auto flex w-full flex-col items-stretch justify-start gap-2 rounded-3xl bg-white p-4 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] md:w-10/12 md:p-6">
            {children}
          </div>
        </div>
      </div>

      <div
        className="flex flex-col items-stretch justify-start gap-6 px-8 py-6 md:gap-10 md:px-16 md:py-8"
        style={{
          backgroundImage: `url(${loginBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-center justify-center gap-1 md:gap-2">
          <Link to="/" className="font-ibm-bold text-[49px] leading-[65px] text-white">
            Class<span className="text-[#009957]">ti</span>
          </Link>

          <p className="font-ibm-medium text-center text-base leading-[29px] text-[#E5E5E5] md:w-10/12">
            {t("footer_desc")}
          </p>
        </div>

        <div className="flex flex-col items-stretch justify-start gap-2">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="flex h-12 items-center justify-start gap-2 rounded-2xl border border-[#E6E6E6]/20 bg-white/4 p-3"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#F4F4D1] bg-[#F9F9E9]">
                <img src={tickIcon} alt="tick icon" className="h-5 w-5" />
              </div>

              <span className="font-ibm-medium text-base text-[#EBEBEB]">{benefit}</span>
            </div>
          ))}

          <div className="mt-4 grid grid-cols-3 gap-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex h-[90px] flex-col items-center justify-center gap-1 rounded-2xl border border-[#E6E6E6]/20 bg-white/4 p-3 text-center md:gap-2"
              >
                <div className="md:font-ibm-bold font-ibm-medium text-2xl text-[#A8A803] md:text-3xl">
                  {stat.value}
                </div>
                <div className="md:font-ibm-medium font-ibm-regular text-sm text-[#EBEBEB] md:text-[20px] md:leading-[28px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
