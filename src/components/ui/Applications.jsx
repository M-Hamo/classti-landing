import { useState, useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";

import heroBg from "../../assets/images/Hero Section.png";
import phoneIcon from "../../assets/icons/fi_1949710.svg";
import icon1 from "../../assets/icons/fi_5956879.svg";
import icon2 from "../../assets/icons/fi_10212239.svg";
import icon3 from "../../assets/icons/fi_2924665.svg";
import icon4 from "../../assets/icons/fi_1742953.svg";
import featureBox1 from "../../assets/images/FeatureBox1.svg";
import featureBox2 from "../../assets/images/FeatureBox2.svg";
import featureBox3 from "../../assets/images/FeatureBox3.svg";
import featureBox4 from "../../assets/images/FeatureBox4.svg";
import appStore from "../../assets/icons/app_store.svg";
import googlePlay from "../../assets/icons/google_play.svg";
import parentAppImg1 from "../../assets/images/app1.svg";
import parentAppImg2 from "../../assets/images/app2.svg";
import parentAppImg3 from "../../assets/images/app3.svg";
import parentAppImg4 from "../../assets/images/app4.svg";
import parentAppIcon1 from "../../assets/icons/fi_2073059.svg";
import parentAppIcon2 from "../../assets/icons/fi_4643839.svg";
import parentAppIcon3 from "../../assets/icons/fi_681443.svg";
import parentAppIcon4 from "../../assets/icons/fi_4860474.svg";

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

  const parentAppTabs = [
    {
      title: t("parent_feature_1_title"),
      desc: t("parent_feature_1_desc"),
      icon: parentAppIcon3,
      img: parentAppImg3,
    },
    {
      title: t("parent_feature_2_title"),
      desc: t("parent_feature_2_desc"),
      icon: parentAppIcon4,
      img: parentAppImg4,
    },
    {
      title: t("parent_feature_3_title"),
      desc: t("parent_feature_3_desc"),
      icon: parentAppIcon1,
      img: parentAppImg1,
    },
    {
      title: t("parent_feature_4_title"),
      desc: t("parent_feature_4_desc"),
      icon: parentAppIcon2,
      img: parentAppImg2,
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [parentSelectedIndex, setParentSelectedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) =>
        prevIndex === tabs.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [tabs.length, selectedIndex]);

  useEffect(() => {
    const parentInterval = setInterval(() => {
      setParentSelectedIndex((prevIndex) =>
        prevIndex === parentAppTabs.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(parentInterval);
  }, [parentAppTabs.length, parentSelectedIndex]);

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
              <h2 className="font-ibm-bold text-[24px] md:text-[32px]">
                <Trans
                  i18nKey="applications_title"
                  components={[
                    <span
                      key="0"
                      className="bg-linear-to-l from-[#026A3D] to-[#07C951] bg-clip-text text-transparent"
                    />,
                  ]}
                />
              </h2>

              <p className="font-ibm-medium text-center text-xs whitespace-pre-line text-[#5B6161] md:text-base">
                {t("applications_desc")}
              </p>
            </div>
          </div>

          <div className="mx-auto w-full md:w-[90%]">
            <div className="grid-col-1 grid w-full gap-4 px-4 md:grid-cols-2 md:gap-9.5">
              <div className="flex flex-col items-stretch justify-center gap-4 md:gap-6">
                {tabs[selectedIndex].img && (
                  <img
                    src={tabs[selectedIndex].img}
                    alt="feature"
                    className="h-auto w-full md:h-[662.53px]"
                  />
                )}
              </div>

              <div className="flex flex-col items-stretch justify-center gap-4 md:gap-6">
                {tabs.map((item, idx) => (
                  <button
                    key={idx}
                    className={`group flex min-h-[88px] cursor-pointer items-start justify-start gap-3 rounded-2xl border border-[#E6E6E6] p-3 transition-all duration-300 ease-in-out outline-none hover:border-[#009957] hover:bg-[#F7F7F7] hover:shadow-sm md:active:scale-105 ${idx === selectedIndex ? "border-[#009957]! bg-white! shadow-sm! md:scale-105!" : ""}`}
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

          <div className="MT-4 relative z-10 mt-8 flex flex-col items-center justify-center gap-4 px-4 md:gap-6">
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

              <p className="font-ibm-medium text-center text-xs whitespace-pre-line text-[#5B6161] md:text-base">
                {t("parent_app_desc")}
              </p>
            </div>
          </div>

          <div className="mx-auto w-full md:w-[90%]">
            <div className="grid-col-1 grid w-full gap-4 px-4 md:grid-cols-4 md:gap-9.5">
              <div className="hidden h-full flex-col items-stretch justify-around md:flex">
                <button
                  className={`group flex min-h-[88px] cursor-pointer items-start justify-start gap-3 rounded-2xl border border-[#E6E6E6] bg-white p-3 transition-all duration-300 ease-in-out outline-none hover:border-[#009957] hover:shadow-sm active:scale-105 ${parentSelectedIndex === 2 ? "scale-105! border-[#009957]! shadow-sm!" : ""}`}
                  onClick={() => setParentSelectedIndex(2)}
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg border group-hover:border-[#CCFFE9] group-hover:bg-[#E5FFF4] ${parentSelectedIndex === 2 ? "border-[#CCFFE9] bg-[#E5FFF4]" : "border-[#F4F4D1] bg-[#F9F9E9]"}`}
                  >
                    <img
                      src={parentAppTabs[2].icon}
                      alt="icon"
                      className={`h-5 w-5 ${parentSelectedIndex === 2 ? "icon-green" : "icon-gold group-hover:icon-green"}`}
                    />
                  </div>

                  <div className="flex flex-col items-start justify-center gap-1">
                    <h4
                      className={`font-ibm-medium group-hover:font-ibm-semiBold text-base leading-[27px] transition-all duration-300 ease-in group-hover:text-[#00512E] ${parentSelectedIndex === 2 ? "font-ibm-semiBold text-[#00512E]" : "text-[#0E1F1F]"}`}
                    >
                      {t(parentAppTabs[2].title)}
                    </h4>

                    <p className="font-ibm-regular text-start text-sm leading-[27px] text-[#5B6161]">
                      {t(parentAppTabs[2].desc)}
                    </p>
                  </div>
                </button>

                <button
                  className={`group flex min-h-[88px] cursor-pointer items-start justify-start gap-3 rounded-2xl border border-[#E6E6E6] bg-white p-3 transition-all duration-300 ease-in-out outline-none hover:border-[#009957] hover:shadow-sm active:scale-105 ${parentSelectedIndex === 3 ? "scale-105! border-[#009957]! shadow-sm!" : ""}`}
                  onClick={() => setParentSelectedIndex(3)}
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg border group-hover:border-[#CCFFE9] group-hover:bg-[#E5FFF4] ${parentSelectedIndex === 3 ? "border-[#CCFFE9] bg-[#E5FFF4]" : "border-[#F4F4D1] bg-[#F9F9E9]"}`}
                  >
                    <img
                      src={parentAppTabs[3].icon}
                      alt="icon"
                      className={`h-5 w-5 ${parentSelectedIndex === 3 ? "icon-green" : "icon-gold group-hover:icon-green"}`}
                    />
                  </div>

                  <div className="flex flex-col items-start justify-center gap-1">
                    <h4
                      className={`font-ibm-medium group-hover:font-ibm-semiBold text-base leading-[27px] transition-all duration-300 ease-in group-hover:text-[#00512E] ${parentSelectedIndex === 3 ? "font-ibm-semiBold text-[#00512E]" : "text-[#0E1F1F]"}`}
                    >
                      {t(parentAppTabs[3].title)}
                    </h4>

                    <p className="font-ibm-regular text-start text-sm leading-[27px] text-[#5B6161]">
                      {t(parentAppTabs[3].desc)}
                    </p>
                  </div>
                </button>
              </div>

              <div className="relative flex h-full items-center justify-center overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat md:col-span-2">
                {parentAppTabs[parentSelectedIndex].img && (
                  <img
                    src={parentAppTabs[parentSelectedIndex].img}
                    alt="feature"
                    className="h-auto w-full md:h-[662.53px]"
                  />
                )}
              </div>

              <div className="hidden h-full flex-col items-stretch justify-around md:flex">
                <button
                  className={`group flex min-h-[88px] cursor-pointer items-start justify-start gap-3 rounded-2xl border border-[#E6E6E6] bg-white p-3 transition-all duration-300 ease-in-out outline-none hover:border-[#009957] hover:shadow-sm active:scale-105 ${parentSelectedIndex === 0 ? "scale-105! border-[#009957]! shadow-sm!" : ""}`}
                  onClick={() => setParentSelectedIndex(0)}
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg border group-hover:border-[#CCFFE9] group-hover:bg-[#E5FFF4] ${parentSelectedIndex === 0 ? "border-[#CCFFE9] bg-[#E5FFF4]" : "border-[#F4F4D1] bg-[#F9F9E9]"}`}
                  >
                    <img
                      src={parentAppTabs[0].icon}
                      alt="icon"
                      className={`h-5 w-5 ${parentSelectedIndex === 0 ? "icon-green" : "icon-gold group-hover:icon-green"}`}
                    />
                  </div>

                  <div className="flex flex-col items-start justify-center gap-1">
                    <h4
                      className={`font-ibm-medium group-hover:font-ibm-semiBold text-base leading-[27px] transition-all duration-300 ease-in group-hover:text-[#00512E] ${parentSelectedIndex === 0 ? "font-ibm-semiBold text-[#00512E]" : "text-[#0E1F1F]"}`}
                    >
                      {t(parentAppTabs[0].title)}
                    </h4>

                    <p className="font-ibm-regular text-start text-sm leading-[27px] text-[#5B6161]">
                      {t(parentAppTabs[0].desc)}
                    </p>
                  </div>
                </button>

                <button
                  className={`group flex min-h-[88px] cursor-pointer items-start justify-start gap-3 rounded-2xl border border-[#E6E6E6] bg-white p-3 transition-all duration-300 ease-in-out outline-none hover:border-[#009957] hover:shadow-sm active:scale-105 ${parentSelectedIndex === 1 ? "scale-105! border-[#009957]! shadow-sm!" : ""}`}
                  onClick={() => setParentSelectedIndex(1)}
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg border group-hover:border-[#CCFFE9] group-hover:bg-[#E5FFF4] ${parentSelectedIndex === 1 ? "border-[#CCFFE9] bg-[#E5FFF4]" : "border-[#F4F4D1] bg-[#F9F9E9]"}`}
                  >
                    <img
                      src={parentAppTabs[1].icon}
                      alt="icon"
                      className={`h-5 w-5 ${parentSelectedIndex === 1 ? "icon-green" : "icon-gold group-hover:icon-green"}`}
                    />
                  </div>

                  <div className="flex flex-col items-start justify-center gap-1">
                    <h4
                      className={`font-ibm-medium group-hover:font-ibm-semiBold text-base leading-[27px] transition-all duration-300 ease-in group-hover:text-[#00512E] ${parentSelectedIndex === 1 ? "font-ibm-semiBold text-[#00512E]" : "text-[#0E1F1F]"}`}
                    >
                      {t(parentAppTabs[1].title)}
                    </h4>

                    <p className="font-ibm-regular text-start text-sm leading-[27px] text-[#5B6161]">
                      {t(parentAppTabs[1].desc)}
                    </p>
                  </div>
                </button>
              </div>

              <div className="flex flex-col items-stretch justify-center gap-4 md:hidden md:gap-6">
                {parentAppTabs.map((item, idx) => (
                  <button
                    key={idx}
                    className={`group flex min-h-[88px] cursor-pointer items-start justify-start gap-3 rounded-2xl border border-[#E6E6E6] bg-white p-3 transition-all duration-300 ease-in-out outline-none hover:border-[#009957] hover:bg-[#F7F7F7] hover:shadow-sm md:active:scale-105 ${idx === parentSelectedIndex ? "border-[#009957]! bg-white! shadow-sm! md:scale-105!" : ""}`}
                    onClick={() => setParentSelectedIndex(idx)}
                  >
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg border group-hover:border-[#CCFFE9] group-hover:bg-[#E5FFF4] ${idx === parentSelectedIndex ? "border-[#CCFFE9] bg-[#E5FFF4]" : "border-[#F4F4D1] bg-[#F9F9E9]"}`}
                    >
                      <img
                        src={item.icon}
                        alt="icon"
                        className={`h-5 w-5 ${idx === parentSelectedIndex ? "icon-green" : "icon-gold group-hover:icon-green"}`}
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
