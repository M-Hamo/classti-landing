import { useTranslation, Trans } from "react-i18next";

import starIcon from "../../assets/icons/star.svg";
import userIcon1 from "../../assets/images/user1.png";
import userIcon2 from "../../assets/images/user2.png";
import videoIcon from "../../assets/icons/video1.svg";
import dashboardBanner from "../../assets/images/Frame2000004325.png";
import dashboardBannerMobile from "../../assets/images/dashboard-mobile.png";

export const MainBanner = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="font-ibm-semiBold flex items-center gap-2 rounded-2xl border border-[#A7F1CA] bg-[#E5FFF4] px-3 py-[6px] text-[10px] text-[#00512E] md:text-sm">
        <img src={starIcon} alt="Star" className="h-4 w-4" />
        <span>{t("hero_badge")}</span>
      </div>

      <h1 className="font-ibm-bold max-w-4xl text-center text-2xl leading-relaxed whitespace-pre-line text-[#0E1F1F] sm:text-3xl md:mt-2 md:text-5xl">
        <Trans
          i18nKey="hero_title"
          components={[<span key="0" className="text-[#059456]" />]}
        />
      </h1>

      <p className="md:font-ibm-medium font-ibm-regular text-center text-xs text-[#5B6161] md:text-base">
        {t("hero_description")}
      </p>

      <section
        dir="ltr"
        className="flex flex-row-reverse items-center justify-center -space-x-3 rtl:space-x-reverse"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full text-2xl font-bold text-black md:mx-0">
          +
        </div>

        <div className="h-8 w-8 overflow-hidden rounded-full shadow-sm md:h-12 md:w-12">
          <img src={userIcon2} alt="User" className="h-full w-full object-cover" />
        </div>
        <div className="h-8 w-8 overflow-hidden rounded-full shadow-sm md:h-12 md:w-12">
          <img src={userIcon1} alt="User" className="h-full w-full object-cover" />
        </div>
        <div className="h-8 w-8 overflow-hidden rounded-full shadow-sm md:h-12 md:w-12">
          <img src={userIcon2} alt="User" className="h-full w-full object-cover" />
        </div>
        <div className="h-8 w-8 overflow-hidden rounded-full shadow-sm md:h-12 md:w-12">
          <img src={userIcon1} alt="User" className="h-full w-full object-cover" />
        </div>
      </section>

      <div className="mt-2 flex w-full flex-col items-stretch gap-3 md:mt-4 md:w-auto md:flex-row md:items-center md:gap-4">
        <button className="font-ibm-semiBold h-12 cursor-pointer rounded-xl bg-[#00512E] px-8 text-base text-white transition-transform hover:bg-[#00512E]/90 active:scale-[0.98]">
          {t("cta_trial")}
        </button>

        <button className="font-ibm-semiBold flex h-12 cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#E5FFF4] px-8 text-base text-[#00512E] transition-transform hover:bg-[#E5FFF4]/90 active:scale-[0.98]">
          <img src={videoIcon} alt="video" className="h-5 w-5" />
          <span>{t("cta_demo")}</span>
        </button>
      </div>

      <img
        src={dashboardBanner}
        alt="dashboard"
        className="hidden w-full md:-mt-4 md:block md:h-[804px] lg:w-10/12"
      />

      <img
        src={dashboardBannerMobile}
        alt="dashboard"
        className="w-full md:hidden md:h-[804px] md:w-10/12"
      />

      <section className="-mt-20 grid min-h-[118px] w-full grid-cols-2 gap-4 rounded-2xl bg-white px-4 py-4 shadow-sm shadow-[#E6E6E6] md:-mt-44 md:w-[78%] md:grid-cols-4 md:px-8">
        <div className="flex flex-col items-center justify-center gap-1 md:gap-2">
          <span className="font-ibm-bold text-[24px] text-[#00512E] md:text-[32px]">
            90%+
          </span>
          <span className="font-ibm-medium text-xs text-[#5B6161] md:text-xl">
            {t("speed")}
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 md:gap-2">
          <span className="font-ibm-bold text-[24px] text-[#00512E] md:text-[32px]">
            + {t("million")}
          </span>
          <span className="font-ibm-medium text-xs text-[#5B6161] md:text-xl">
            {t("student")}
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 md:gap-2">
          <span className="font-ibm-bold text-[24px] text-[#00512E] md:text-[32px]">
            +50K
          </span>
          <span className="font-ibm-medium text-xs text-[#5B6161] md:text-xl">
            {t("active_user")}
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 md:gap-2">
          <span className="font-ibm-bold text-[24px] text-[#00512E] md:text-[32px]">
            329+
          </span>
          <span className="font-ibm-medium text-xs text-[#5B6161] md:text-xl">
            {t("school_joined")}
          </span>
        </div>
      </section>
    </>
  );
};
