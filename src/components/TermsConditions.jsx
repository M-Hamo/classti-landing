import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { MainLayout } from "./ui/MainLayout";

import starIcon from "../assets/icons/star.svg";
import checkRoundedIcon from "../assets/icons/check_rounded.svg";
import walletIcon from "../assets/icons/wallet.svg";
import child2Icon from "../assets/icons/child_green.svg";
import check2Icon from "../assets/icons/check_2.svg";

export const TermsConditions = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <main
        id="main"
        className="relative z-10 flex flex-1 flex-col items-center gap-4 px-4 pt-11 md:pt-10"
      >
        <section className="flex w-full flex-col items-stretch justify-start gap-6 md:w-[95%] md:gap-10">
          <div className="flex flex-col items-center justify-start gap-2 md:items-start md:gap-3">
            <div className="flex h-7.5 items-center justify-center gap-2 rounded-2xl border border-[#CCCCCC] bg-[#E5FFF4] px-3 py-1">
              <img src={starIcon} alt="terms" className="h-4 w-4" />
              <span className="font-ibm-semiBold text-sm text-[#00512E]">
                {t("terms_conditions")}
              </span>
            </div>

            <h1 className="font-ibm-bold text-2xl text-[#0E1F1F] md:text-3xl">
              <Trans
                i18nKey="terms_conditions_page_title"
                components={[
                  <Link
                    key="0"
                    to="/"
                    className="font-ibm-bold text-2xl text-[#0E1F1F] md:text-3xl"
                  >
                    Class<span className="text-[#2CB669]">ti</span>
                  </Link>,
                ]}
              />
            </h1>

            <p className="font-ibm-medium text-center text-sm text-[#5B6161] md:text-start">
              {t("terms_conditions_page_intro")}
            </p>
          </div>

          <div className="flex flex-col items-start justify-start gap-4 rounded-3xl bg-white p-4 shadow-sm md:p-6">
            <div className="flex w-full items-center justify-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#9CF6BA]">
                <img src={checkRoundedIcon} alt="check" className="h-5 w-5" />
              </div>

              <h3 className="font-ibm-semiBold text-base leading-7.5 text-[#0E1F1F]">
                {t("terms_conditions_s1_title")}
              </h3>
            </div>

            <p className="font-ibm-regular text-center text-sm leading-7.5 text-[#5B6161]">
              {t("terms_conditions_s1_body")}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:-mt-4 md:grid-cols-2 md:gap-6">
            <div className="flex flex-col items-start justify-start gap-3 rounded-3xl bg-[#EDEEEF] p-4 shadow-xs md:p-6">
              <img src={walletIcon} alt="child" className="h-6 w-6" />

              <h2 className="font-ibm-semiBold text-base leading-7.5 text-[#0E1F1F]">
                {t("terms_conditions_s2b_title")}
              </h2>

              <p className="font-ibm-regular text-sm leading-7.5 text-[#5B6161]">
                {t("terms_conditions_s2b_body")}
              </p>
            </div>

            <div className="flex flex-col items-start justify-start gap-3 rounded-3xl bg-[#EDEEEF] p-4 shadow-xs md:p-6">
              <img src={child2Icon} alt="child" className="h-6 w-6" />

              <h2 className="font-ibm-semiBold text-base leading-7.5 text-[#0E1F1F]">
                {t("terms_conditions_s2a_title")}
              </h2>

              <p className="font-ibm-regular text-sm leading-7.5 text-[#5B6161]">
                {t("terms_conditions_s2a_body")}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 rounded-3xl bg-linear-to-bl from-[#054E2E] to-[#001D11] p-3 md:-mt-4 md:items-start md:gap-3 md:p-6">
            <h3 className="font-ibm-medium text-xl text-white">
              {t("terms_conditions_s3_title")}
            </h3>

            <p className="font-ibm-regular text-sm leading-7.5 text-white">
              {t("terms_conditions_s3_body1")}
            </p>

            <p className="font-ibm-regular -mt-1 text-sm leading-7.5 text-white">
              {t("terms_conditions_s3_body2")}
            </p>
          </div>

          <div className="flex flex-col items-start justify-start gap-4 rounded-3xl bg-[#F3F4F5] p-3 shadow-sm md:-mt-4 md:p-6">
            <h3 className="font-ibm-semiBold text-base leading-7.5 text-[#0E1F1F]">
              {t("terms_conditions_s4_title")}
            </h3>

            <div className="flex flex-col items-stretch justify-start gap-2">
              <div className="flex items-center justify-start gap-3">
                <img src={check2Icon} alt="check" className="h-4 w-4 shrink-0" />
                <p className="font-ibm-regular text-sm leading-7.5 text-[#5B6161]">
                  {t("terms_conditions_s4_li1")}
                </p>
              </div>
              <div className="flex items-center justify-start gap-3">
                <img src={check2Icon} alt="check" className="h-4 w-4 shrink-0" />
                <p className="font-ibm-regular text-sm leading-7.5 text-[#5B6161]">
                  {t("terms_conditions_s4_li2")}
                </p>
              </div>
              <div className="flex items-center justify-start gap-3">
                <img src={check2Icon} alt="check" className="h-4 w-4 shrink-0" />
                <p className="font-ibm-regular text-sm leading-7.5 text-[#5B6161]">
                  {t("terms_conditions_s4_li3")}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
};
