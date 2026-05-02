import { useTranslation } from "react-i18next";
import { MainLayout } from "./ui/MainLayout";

import starIcon from "../assets/icons/star.svg";
import childIcon from "../assets/icons/child.svg";
import child2Icon from "../assets/icons/child_green.svg";
import shareIcon from "../assets/icons/share.svg";
import infoIcon from "../assets/icons/info.svg";

export const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <main
        id="main"
        className="relative z-10 flex flex-1 flex-col items-center gap-4 px-4 pt-11 md:pt-10"
      >
        <section className="flex w-full flex-col items-stretch justify-start gap-6 md:w-[95%] md:gap-15">
          <div className="flex flex-col items-center justify-start gap-2 md:items-start md:gap-3">
            <div className="flex h-7.5 items-center justify-center gap-2 rounded-2xl border border-[#CCCCCC] bg-[#E5FFF4] px-3 py-1">
              <img src={starIcon} alt="privacy" className="h-4 w-4" />
              <span className="font-ibm-semiBold text-sm text-[#00512E]">
                {t("privacy_policy")}
              </span>
            </div>

            <h1 className="font-ibm-bold text-2xl text-[#0E1F1F] md:text-3xl">
              {t("privacy_policy_page_title")}
            </h1>

            <p className="font-ibm-medium text-center text-sm text-[#5B6161] md:text-start">
              {t("privacy_policy_page_intro")}
            </p>
          </div>

          <div className="flex flex-col items-stretch justify-start gap-3 rounded-3xl bg-white p-4 shadow-sm md:gap-6 md:p-8">
            <div className="flex flex-col items-start justify-start gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E5FFF4]">
                  <img src={childIcon} alt="child" className="h-5 w-5" />
                </div>
                <h3 className="font-ibm-medium text-base leading-7.5 text-[#0E1F1F]">
                  {t("privacy_policy_s1_title")}
                </h3>
              </div>
              <div className="flex flex-col gap-2 md:ps-15">
                <p className="font-ibm-regular text-sm leading-7.5 text-[#5B6161]">
                  {t("privacy_policy_s1_body1")}
                </p>
                <p className="font-ibm-regular text-sm leading-7.5 text-[#5B6161]">
                  {t("privacy_policy_s1_body2")}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start justify-start gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E5FFF4]">
                  <img src={child2Icon} alt="child" className="h-5 w-5" />
                </div>
                <h3 className="font-ibm-medium text-base leading-7.5 text-[#0E1F1F]">
                  {t("privacy_policy_s2_title")}
                </h3>
              </div>

              <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 md:ps-15">
                <div className="flex flex-col items-start justify-start gap-3 rounded-2xl bg-[#C6E5EC]/30 p-6 shadow-xs">
                  <h4 className="font-ibm-medium text-base leading-7.5 text-[#00512E]">
                    {t("privacy_policy_s2_sub1_title")}
                  </h4>
                  <p className="font-ibm-regular text-sm leading-7.5 text-[#5B6161] md:w-[70%]">
                    {t("privacy_policy_s2_sub1_body")}
                  </p>
                </div>

                <div className="flex flex-col items-start justify-start gap-3 rounded-2xl bg-[#C6E5EC]/30 p-6 shadow-xs">
                  <h4 className="font-ibm-medium text-base leading-7.5 text-[#00512E]">
                    {t("privacy_policy_s2_sub2_title")}
                  </h4>
                  <p className="font-ibm-regular text-sm leading-7.5 text-[#5B6161] md:w-[70%]">
                    {t("privacy_policy_s2_sub2_body")}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start justify-start gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E5FFF4]">
                  <img src={shareIcon} alt="share" className="h-5 w-5" />
                </div>
                <h3 className="font-ibm-medium text-base leading-7.5 text-[#0E1F1F]">
                  {t("privacy_policy_s3_title")}
                </h3>
              </div>
              <div className="md:ps-15">
                <p className="font-ibm-regular text-sm leading-7.5 text-[#5B6161]">
                  {t("privacy_policy_s3_body")}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start justify-start gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E5FFF4]">
                  <img src={infoIcon} alt="info" className="h-5 w-5" />
                </div>
                <h3 className="font-ibm-medium text-base leading-7.5 text-[#0E1F1F]">
                  {t("privacy_policy_s4_title")}
                </h3>
              </div>
              <div className="md:ps-15">
                <p className="font-ibm-regular text-sm leading-7.5 text-[#5B6161]">
                  {t("privacy_policy_s4_body")}
                </p>
              </div>

              <button className="font-ibm-semiBold h-14 w-full cursor-pointer rounded-2xl bg-[#00512E] px-8 text-lg text-white shadow-lg transition-all hover:bg-[#003D22] active:scale-[0.98] md:mt-4 md:w-auto">
                {t("usage_policy_cta_button")}
              </button>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
};
