import { useState, useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";

import heroBg from "../../assets/images/Hero Section.png";
import phoneIcon from "../../assets/icons/fi_1949710.svg";
import icon1 from "../../assets/icons/fi_5956879.svg";
import icon2 from "../../assets/icons/fi_10212239.svg";
import icon3 from "../../assets/icons/fi_2924665.svg";
import icon4 from "../../assets/icons/fi_1742953.svg";
import featureBox1 from "../../assets/images/FeatureBox1.png";
import featureBox2 from "../../assets/images/FeatureBox2.png";
import featureBox3 from "../../assets/images/FeatureBox3.png";
import featureBox4 from "../../assets/images/FeatureBox4.png";
import appStore from "../../assets/icons/app_store.svg";
import googlePlay from "../../assets/icons/google_play.svg";

export const Applications = () => {
  const { t } = useTranslation();

  const tabs = [
    {
      title: t("tab1_title"),
      desc: t("tab1_desc"),
      icon: icon1,
      img: featureBox1,
    },
    {
      title: t("tab2_title"),
      desc: t("tab2_desc"),
      icon: icon2,
      img: featureBox2,
    },
    {
      title: t("tab3_title"),
      desc: t("tab3_desc"),
      icon: icon3,
      img: featureBox3,
    },
    {
      title: t("tab4_title"),
      desc: t("tab4_desc"),
      icon: icon4,
      img: featureBox4,
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) =>
        prevIndex === tabs.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [tabs.length, selectedIndex]);

  return (
    <>
      <section
        id="applications"
        className="mt-6 flex flex-col items-stretch justify-start gap-3 md:mt-0 md:gap-4"
      >
        <div className="flex items-center justify-center">
          <div className="flex h-7.5 items-center justify-center gap-2 rounded-2xl border border-[#CCCCCC] bg-[#E5FFF4] px-3 py-1">
            <img src={phoneIcon} alt="about" className="h-4 w-4" />
            <span className="font-ibm-semiBold text-sm text-[#00512E]">
              {t("applications")}
            </span>
          </div>
        </div>

        <div className="relative mx-[-4%] flex flex-col items-stretch justify-start gap-6 py-3 md:mx-[-7%] md:gap-8 md:py-4">
          <div
            className="pointer-events-none absolute inset-0 z-0 h-[200px] w-full overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBg})` }}
          ></div>

          <div className="relative z-10 flex flex-col items-center justify-center gap-4 px-4 md:gap-6">
            <div className="flex flex-col items-center justify-center gap-2 md:gap-3">
              <h1 className="font-ibm-bold text-[24px] md:text-[32px]">
                <Trans
                  i18nKey="applications_title"
                  components={[
                    <span
                      key="0"
                      className="bg-linear-to-l from-[#026A3D] to-[#07C951] bg-clip-text text-transparent"
                    />,
                  ]}
                />
              </h1>

              <p className="font-ibm-medium text-center text-xs whitespace-pre-line text-[#5B6161] md:text-base">
                {t("applications_desc")}
              </p>
            </div>
          </div>

          <div className="mx-auto w-full md:w-[90%]">
            <div className="grid-col-2 grid gap-4 px-4 md:grid-cols-2 md:gap-9.5">
              <div className="flex flex-col items-stretch justify-center gap-4 md:gap-6">
                {tabs[selectedIndex].img && (
                  <img
                    src={tabs[selectedIndex].img}
                    alt="feature"
                    className="h-[546.98px] w-full md:h-[662.53px]"
                  />
                )}
              </div>
              <div className="flex flex-col items-stretch justify-center gap-4 md:gap-6">
                {tabs.map((item, idx) => (
                  <button
                    key={idx}
                    className={`group flex min-h-[88px] cursor-pointer items-start justify-start gap-3 rounded-2xl border border-[#E6E6E6] p-3 transition-all duration-300 ease-in-out outline-none hover:border-[#009957] hover:bg-[#F7F7F7] hover:shadow-sm active:scale-105 ${idx === selectedIndex ? "scale-105! border-[#009957]! bg-white! shadow-sm!" : ""}`}
                    onClick={() => setSelectedIndex(idx)}
                  >
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg border group-hover:border-[#CCFFE9] group-hover:bg-[#E5FFF4] ${idx === selectedIndex ? "border-[#CCFFE9] bg-[#E5FFF4]" : "border-[#F4F4D1] bg-[#F9F9E9]"}`}
                    >
                      <img
                        src={item.icon}
                        alt="icon"
                        className={`h-5 w-5 ${idx === selectedIndex ? "icon-green" : "icon-gold group-hover:icon-green"}`}
                      />
                    </div>

                    <div className="flex flex-col items-start justify-center gap-1">
                      <h4
                        className={`font-ibm-medium group-hover:font-ibm-semiBold text-base leading-[27px] transition-all duration-300 ease-in group-hover:text-[#00512E] ${idx === selectedIndex ? "font-ibm-semiBold text-[#00512E]" : "text-[#0E1F1F]"}`}
                      >
                        {t(item.title)}
                      </h4>

                      <p className="font-ibm-regular text-start text-sm leading-[27px] text-[#5B6161]">
                        {t(item.desc)}
                      </p>
                    </div>
                  </button>
                ))}

                <div className="flex items-center justify-start gap-3">
                  <button className="h-[39px] w-[134px] cursor-pointer rounded-lg border border-[#E6E6E6] outline-none active:scale-[0.98]">
                    <img
                      src={appStore}
                      alt="app store"
                      className="h-full w-full rounded-lg object-cover"
                    />
                  </button>
                  <button className="h-[39px] w-[134px] cursor-pointer overflow-hidden rounded-lg outline-none active:scale-[0.98]">
                    <img
                      src={googlePlay}
                      alt="google play"
                      className="h-full w-full object-cover"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-[-4%] flex flex-col items-stretch justify-start gap-6 py-3 md:mx-[-7%] md:gap-8 md:py-4">
          <div className="flex flex-col items-center justify-center gap-4 px-4 md:gap-6">
            <div className="flex flex-col items-center justify-center gap-2 md:gap-3">
              <h2 className="font-ibm-bold text-[24px] md:text-[32px]">
                <Trans
                  i18nKey="parent_app_title"
                  components={[
                    <span
                      key="0"
                      className="bg-linear-to-l from-[#026A3D] to-[#07C951] bg-clip-text text-transparent"
                    />,
                  ]}
                />
              </h2>
              <p className="font-ibm-medium max-w-[600px] text-xs whitespace-pre-line text-[#5B6161] md:text-base">
                {t("parent_app_desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARENT APP SHOWCASE */}
      <section className="relative mt-16 flex flex-col items-center justify-start gap-8 pb-16 md:mt-24 md:gap-12">
        <div className="flex flex-col items-center justify-center gap-2 px-4 text-center md:gap-3"></div>

        <div className="relative mx-auto mt-4 flex w-full max-w-[1200px] flex-col items-center justify-between gap-8 px-4 lg:mt-12 lg:flex-row lg:items-center lg:gap-4 lg:px-8">
          {/* Background Radial Glow */}
          <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E5FFF4] opacity-60 blur-[100px]"></div>

          {/* Right Cards (First in DOM for RTL) */}
          <div className="flex w-full flex-col gap-6 lg:w-1/3 lg:gap-16">
            {/* Card 3 (Green) */}
            <div className="flex items-center justify-start gap-4 rounded-3xl border-2 border-[#009957] bg-white p-4 shadow-sm shadow-[#E6E6E6]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#CCFFE9] bg-[#E5FFF4]">
                <img src={icon3} alt="icon" className="icon-green h-6 w-6" />
              </div>
              <div className="flex flex-grow flex-col items-start justify-center gap-1 md:gap-2">
                <h4 className="font-ibm-bold text-base text-[#0E1F1F]">
                  {t("parent_feature_3_title")}
                </h4>
                <p className="font-ibm-medium text-xs leading-[20px] text-[#5B6161]">
                  {t("parent_feature_3_desc")}
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex items-center justify-start gap-4 rounded-3xl border border-[#E6E6E6] bg-white p-4 shadow-sm shadow-[#E6E6E6]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#F4F4D1] bg-[#F9F9E9]">
                <img src={icon4} alt="icon" className="icon-gold h-6 w-6" />
              </div>
              <div className="flex flex-grow flex-col items-start justify-center gap-1 md:gap-2">
                <h4 className="font-ibm-bold text-base text-[#0E1F1F]">
                  {t("parent_feature_4_title")}
                </h4>
                <p className="font-ibm-medium text-xs leading-[20px] text-[#5B6161]">
                  {t("parent_feature_4_desc")}
                </p>
              </div>
            </div>
          </div>

          {/* Center Phone Mockup Placeholder */}
          <div className="z-10 my-8 flex w-full items-center justify-center lg:my-0 lg:w-1/3">
            <div className="relative flex h-[580px] w-[280px] items-center justify-center overflow-hidden rounded-[40px] border-[12px] border-[#1C1C1E] bg-white shadow-2xl">
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 z-20 h-[25px] w-[120px] -translate-x-1/2 rounded-b-[20px] bg-[#1C1C1E]"></div>

              {/* Placeholder Content */}
              <div className="flex flex-col items-center justify-center px-4 text-center">
                <svg
                  className="mb-3 h-10 w-10 text-[#CCCCCC]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="font-ibm-semiBold text-sm text-[#5B6161]">
                  Placeholder
                </span>
                <span className="font-ibm-medium mt-1 text-xs text-[#999999]">
                  Upload screenshot
                </span>
              </div>
            </div>
          </div>

          {/* Left Cards (Last in DOM for RTL) */}
          <div className="flex w-full flex-col gap-6 lg:w-1/3 lg:gap-16">
            {/* Card 1 */}
            <div className="flex items-center justify-start gap-4 rounded-3xl border border-[#E6E6E6] bg-white p-4 shadow-sm shadow-[#E6E6E6]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#F4F4D1] bg-[#F9F9E9]">
                <img src={icon1} alt="icon" className="icon-gold h-6 w-6" />
              </div>
              <div className="flex flex-grow flex-col items-start justify-center gap-1 md:gap-2">
                <h4 className="font-ibm-bold text-base text-[#0E1F1F]">
                  {t("parent_feature_1_title")}
                </h4>
                <p className="font-ibm-medium text-xs leading-[20px] text-[#5B6161]">
                  {t("parent_feature_1_desc")}
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-center justify-start gap-4 rounded-3xl border border-[#E6E6E6] bg-white p-4 shadow-sm shadow-[#E6E6E6]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#F4F4D1] bg-[#F9F9E9]">
                <img src={icon2} alt="icon" className="icon-gold h-6 w-6" />
              </div>
              <div className="flex flex-grow flex-col items-start justify-center gap-1 md:gap-2">
                <h4 className="font-ibm-bold text-base text-[#0E1F1F]">
                  {t("parent_feature_2_title")}
                </h4>
                <p className="font-ibm-medium text-xs leading-[20px] text-[#5B6161]">
                  {t("parent_feature_2_desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
