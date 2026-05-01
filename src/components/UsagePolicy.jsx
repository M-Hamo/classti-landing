import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { MainLayout } from "./ui/MainLayout";

import starIcon from "../assets/icons/star.svg";
import childIcon from "../assets/icons/child.svg";
import child2Icon from "../assets/icons/child_2.svg";
import check2Icon from "../assets/icons/check_2.svg";
import footerIcon from "../assets/images/support.png";

export const UsagePolicy = () => {
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
              <img src={starIcon} alt="about" className="h-4 w-4" />
              <span className="font-ibm-semiBold text-sm text-[#00512E]">
                {t("usage_policy_page_badge")}
              </span>
            </div>

            <h1 className="font-ibm-bold text-2xl text-[#0E1F1F] md:text-3xl">
              <Trans
                i18nKey="usage_policy_page_title"
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
              {t("usage_policy_page_intro")}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
            <div className="order-2 flex flex-row items-start justify-start gap-3 rounded-3xl bg-white p-4 shadow-md md:order-1 md:col-span-2 md:gap-6 md:p-8">
              <div className="flex h-16 w-16 min-w-16 items-center justify-center rounded-2xl bg-[#E5FFF4]">
                <img src={childIcon} alt="child" className="h-6 w-6" />
              </div>

              <div className="flex flex-col items-start justify-start gap-3">
                <h3 className="font-ibm-medium text-base leading-7.5 text-[#0E1F1F]">
                  {t("usage_policy_principle_conduct_title")}
                </h3>
                <p className="font-ibm-regular text-sm leading-7.5 text-[#5B6161]">
                  {t("usage_policy_principle_conduct_body")}
                </p>
              </div>
            </div>

            <div className="order-1 flex flex-col items-center justify-start gap-2 rounded-3xl bg-[#00512E] p-4 shadow-md md:order-2 md:col-span-1 md:p-8">
              <img src={child2Icon} alt="child" className="h-6 w-6 self-end" />

              <div className="flex flex-col items-start justify-start gap-2">
                <h3 className="font-ibm-medium text-base leading-7.5 text-white">
                  {t("usage_policy_principle_data_title")}
                </h3>
                <p className="font-ibm-medium text-xs leading-7.5 text-[#CCFFE9]">
                  {t("usage_policy_principle_data_body")}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-stretch justify-center gap-4 md:gap-6">
            <div className="flex items-center justify-center">
              <div className="flex h-7.5 items-center justify-center gap-2 rounded-2xl border border-[#CCCCCC] bg-[#E5FFF4] px-3 py-1">
                <span className="font-ibm-bold text-base text-[#00512E]">
                  {t("usage_policy_section1_label")}
                </span>
              </div>
            </div>

            <div className="flex flex-col items-start justify-start gap-2 rounded-2xl border-s-4 border-[#00512E] bg-white p-6 shadow">
              <h3 className="font-ibm-bold text-xl leading-8 text-[#0E1F1F]">
                {t("usage_policy_s1c1_title")}
              </h3>

              <p className="font-ibm-regular text-sm leading-7.5 text-[#5B6161]">
                {t("usage_policy_s1c1_body")}
              </p>
            </div>

            <div className="flex flex-col items-start justify-start gap-2 rounded-2xl border-s-4 border-[#00512E] bg-white p-6 shadow">
              <h3 className="font-ibm-bold text-xl leading-8 text-[#0E1F1F]">
                {t("usage_policy_s1c2_title")}
              </h3>

              <p className="font-ibm-regular text-sm leading-7.5 text-[#5B6161]">
                {t("usage_policy_s1c2_body")}
              </p>
            </div>

            <div className="flex flex-col items-start justify-start gap-2 rounded-2xl border-s-4 border-[#00512E] bg-white p-6 shadow">
              <h3 className="font-ibm-bold text-xl leading-8 text-[#0E1F1F]">
                {t("usage_policy_s1c3_title")}
              </h3>

              <p className="font-ibm-regular text-sm leading-7.5 text-[#5B6161]">
                {t("usage_policy_s1c3_body")}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start justify-start gap-4 rounded-4xl bg-[#C6E5EC]/30 p-4 shadow-xs md:gap-4 md:p-10">
            <div className="flex h-7.5 items-center justify-center gap-2 self-center rounded-2xl border border-[#CCCCCC] bg-[#E5FFF4] px-3 py-1">
              <span className="font-ibm-bold text-base text-[#00512E]">
                {t("usage_policy_section1_label")}
              </span>
            </div>

            <h4 className="font-ibm-medium text-base leading-7.5 text-[#0E1F1F]">
              {t("usage_policy_section2_intro")}
            </h4>

            <div className="flex flex-col items-stretch justify-start gap-4">
              <div className="flex items-center justify-start gap-3">
                <img src={check2Icon} alt="check" className="h-4 w-4" />

                <p className="font-ibm-regular text-sm leading-7.5 text-[#5B6161]">
                  {t("usage_policy_section2_li1")}
                </p>
              </div>
              <div className="flex items-center justify-start gap-3">
                <img src={check2Icon} alt="check" className="h-4 w-4" />

                <p className="font-ibm-regular text-sm leading-7.5 text-[#5B6161]">
                  {t("usage_policy_section2_li2")}
                </p>
              </div>
              <div className="flex items-center justify-start gap-3">
                <img src={check2Icon} alt="check" className="h-4 w-4" />

                <p className="font-ibm-regular text-sm leading-7.5 text-[#5B6161]">
                  {t("usage_policy_section2_li3")}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
            <div className="col-span-full flex items-center justify-center">
              <div className="flex h-7.5 items-center justify-center gap-2 self-center rounded-2xl border border-[#CCCCCC] bg-[#E5FFF4] px-3 py-1">
                <span className="font-ibm-bold text-base text-[#00512E]">
                  {t("usage_policy_section3_label")}
                </span>
              </div>
            </div>

            <div className="flex flex-col items-start justify-start gap-4 rounded-3xl bg-[#EDEEEF] p-4 shadow-xs md:p-8">
              <h3 className="font-ibm-medium text-base leading-7.5 text-[#0E1F1F]">
                {t("usage_policy_section3_monitor_title")}
              </h3>
              <p className="font-ibm-regular text-sm leading-7.5 text-[#5B6161]">
                {t("usage_policy_section3_monitor_body")}
              </p>
            </div>

            <div className="flex flex-col items-start justify-start gap-4 rounded-3xl border border-[#BA1A1A]/10 bg-[#FFDAD6]/20 p-4 shadow-xs md:p-8">
              <h3 className="font-ibm-medium text-base leading-7.5 text-[#DD0417]">
                {t("usage_policy_section3_consequences_title")}
              </h3>
              <p className="font-ibm-regular text-sm leading-7.5 text-[#5B6161]">
                {t("usage_policy_section3_consequences_body")}
              </p>
            </div>
          </div>

          <div
            className="flex flex-col items-center justify-center gap-2 rounded-3xl bg-size-[800%] bg-center bg-no-repeat p-4 md:gap-3 md:bg-size-[200%] md:p-12 md:pb-6!"
            style={{
              backgroundImage: `url(${footerIcon})`,
            }}
          >
            <h4 className="font-ibm-bold text-center text-xl leading-[42px] text-white md:text-[32px]">
              {t("usage_policy_cta_title")}
            </h4>

            <p className="font-ibm-medium text-center text-xs leading-7.5 text-[#EBEBEB] md:text-base">
              {t("usage_policy_cta_subtitle")}
            </p>

            <button
              type="submit"
              className="font-ibm-semiBold h-14 cursor-pointer rounded-2xl bg-[#00512E] px-8 text-lg text-white shadow-lg transition-all hover:bg-[#003D22] active:scale-[0.98]"
            >
              {t("usage_policy_cta_button")}
            </button>
          </div>
        </section>
      </main>
    </MainLayout>
  );
};
