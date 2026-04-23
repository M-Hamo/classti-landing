import { Trans, useTranslation } from "react-i18next";

import { AtomAnimation } from "./AtomAnimation";

import aboutImg from "../../assets/icons/fi_1534337.svg";
import yellowStart from "../../assets/icons/yellow-start.svg";

export const AboutUs = () => {
  const { t } = useTranslation();

  const aboutCards = [
    {
      title: t("about_feature_admin_title"),
      description: t("about_feature_admin_desc"),
    },
    {
      title: t("about_feature_teachers_title"),
      description: t("about_feature_teachers_desc"),
    },
    {
      title: t("about_feature_parents_title"),
      description: t("about_feature_parents_desc"),
    },
    {
      title: t("about_feature_students_title"),
      description: t("about_feature_students_desc"),
    },
  ];

  return (
    <section
      id="about"
      className="relative grid w-full grid-cols-1 gap-4 md:gap-8 lg:grid-cols-2"
    >
      <div className="flex flex-col items-start justify-start gap-6 rounded-3xl bg-white p-4 shadow-sm shadow-[#E6E6E6] md:gap-8 md:p-6">
        <div className="flex h-7.5 items-center justify-center gap-2 rounded-2xl border border-[#CCCCCC] bg-[#E5FFF4] px-3 py-1">
          <img src={aboutImg} alt="about" className="h-4 w-4" />
          <span className="font-ibm-semiBold text-sm text-[#00512E]">
            {t("about_badge")}
          </span>
        </div>

        <div className="flex flex-col items-start justify-start gap-2 md:gap-3">
          <h2 className="font-ibm-bold text-2xl leading-snug whitespace-pre-line text-gray-900 md:text-[32px] md:leading-relaxed">
            <Trans
              components={[
                <span
                  key="0"
                  className="bg-linear-to-l from-[#026A3D] to-[#07C951] bg-clip-text text-transparent"
                />,
              ]}
              i18nKey="about_title"
            />
          </h2>

          <p className="md:font-ibm-medium font-ibm-regular text-xs text-[#5B6161] md:text-base">
            {t("about_description")}
          </p>
        </div>

        <div className="flex flex-col items-start justify-start gap-4">
          {aboutCards.map((card, index) => (
            <div key={index} className="flex flex-row items-start justify-start gap-4">
              <div className="flex h-12 min-h-12 w-12 min-w-12 items-center justify-center rounded-lg border border-[#F4F4D1] bg-[#F9F9E9]">
                <img src={yellowStart} alt="yellow-start" className="h-6 w-6" />
              </div>
              <div className="gap-.5 flex flex-col items-start justify-start">
                <h3 className="font-ibm-semiBold text-base leading-7.5 text-[#0E1F1F]">
                  {card.title}
                </h3>
                <p className="md:font-ibm-medium font-ibm-regular text-sm leading-7.5 text-[#5B6161] md:text-base">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex w-full items-center justify-start md:w-auto">
          <button className="font-ibm-semiBold h-12 w-full cursor-pointer rounded-xl bg-[#00512E] px-8 text-base text-white transition-transform hover:bg-[#00512E]/90 active:scale-[0.98] md:w-auto">
            {t("about_cta")}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center overflow-hidden">
        <AtomAnimation />
      </div>
    </section>
  );
};
