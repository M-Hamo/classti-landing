import { useEffect, useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { ToggleLang } from "./ToggleLang";

import logo from "../../assets/icons/logo.svg";
import logo2 from "../../assets/icons/logo2.svg";
import heroBg from "../../assets/images/Hero Section.png";
import tickIcon from "../../assets/icons/fi_1742953.svg";
import loginBg from "../../assets/images/login.png";
import { UserType } from "../../store/user";

export const AuthLayout = ({ children, description = "" }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const loginTypesList = useSelector((state) => state.user.loginTypesList);
  const searchParams = new URLSearchParams(location.search);
  const selectedLoginTypeValue = +searchParams.get("userType") || UserType.SchoolAdmin;

  const [isScrolled, setIsScrolled] = useState(false);

  const selectedLoginType = loginTypesList?.find(
    (t) => t.value === selectedLoginTypeValue
  );

  const benefits = [
    t("benefit_1"),
    t("benefit_2"),
    t("benefit_3"),
    t("benefit_4"),
    t("benefit_5"),
    t("benefit_6"),
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative flex min-h-full w-full flex-col items-stretch justify-start">
      <div
        className="pointer-events-none absolute inset-0 min-h-full w-auto overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>

      <header
        className={`fixed left-1/2 z-50 flex h-[72px] w-11/12 -translate-x-1/2 items-center justify-between rounded-3xl border-2 border-white/40 px-4 py-3 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 ${
          isScrolled ? "top-0 " : "top-5"
        }`}
      >
        <Link to="/" className="flex items-center justify-center">
          <img src={logo} alt="logo" className="h-6 w-20 md:h-8 md:w-28" />
        </Link>

        <div className="flex items-center gap-4 md:gap-6">
          <a
            href="#"
            className="font-ibm-medium text-sm text-[#0E1F1F] transition-opacity hover:text-[#00512E]"
          >
            {t("support")}
          </a>

          <ToggleLang />
        </div>
      </header>

      <div className="z-10 mx-auto mt-32 flex w-11/12 flex-col items-stretch justify-start gap-6 md:gap-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-col items-start justify-center gap-2 md:gap-3">
            <h1 className="font-ibm-bold text-2xl text-[#0E1F1F] md:text-4xl">
              <Trans
                i18nKey="main_login_title"
                components={[
                  <Link
                    key="0"
                    to="/"
                    className="font-ibm-bold text-2xl text-[#0E1F1F] md:text-4xl"
                  >
                    Class<span className="text-[#2CB669]">ti</span>
                  </Link>,
                ]}
              />
            </h1>

            <p className="font-ibm-medium text-sm text-[#5B6161]">
              {t("main_login_desc")}
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 border-s border-s-[#7A7A01] ps-3 md:ps-6">
            <h4 className="font-ibm-bold text-2xl text-[#0E1F1F]">+ {t("million")}</h4>

            <p className="font-ibm-medium text-base text-[#878F8F]">
              {t("active_student")}
            </p>
          </div>
        </div>

        <div className="grid min-h-full w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
          <div className="flex flex-col items-stretch justify-center rounded-3xl bg-white p-4 shadow-xl md:p-6">
            {children}
          </div>

          <div
            className="flex flex-col items-stretch justify-start gap-6 rounded-3xl px-8 py-6 shadow-xl md:gap-10 md:p-16 md:py-8"
            style={{
              backgroundImage: `url(${loginBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col items-center justify-center gap-2 md:gap-3">
              <Link to="/">
                <img src={logo2} alt="logo" className="h-12.5 w-40" />
              </Link>

              <p className="font-ibm-medium text-center text-base leading-[29px] text-[#E5E5E5] md:w-11/12">
                {t(description || selectedLoginType?.desc || "")}
              </p>
            </div>

            <div className="flex flex-col items-stretch justify-center gap-2">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex h-12 items-center justify-start gap-2 rounded-2xl border border-[#E6E6E6]/20 bg-white/4 p-3"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#F4F4D1] bg-[#F9F9E9]">
                    <img src={tickIcon} alt="tick icon" className="h-5 w-5" />
                  </div>

                  <span className="font-ibm-medium text-base text-[#EBEBEB]">
                    {benefit}
                  </span>
                </div>
              ))}

              {/* <div className="mt-4 grid grid-cols-3 gap-4">
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
              </div> */}
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-col items-center justify-center gap-2 border-t border-[#E8E8E8] py-4 md:mt-6 md:flex-row md:justify-between">
          <p className="font-ibm-regular text-[10px] text-[#5B6161]">
            <Trans
              i18nKey="footer_desc_1"
              components={[<span key="0" className="font-ibm-bold mx-1" />]}
            />
          </p>

          <ul className="flex flex-wrap items-center justify-end gap-3">
            <li>
              <Link
                to="/terms-conditions"
                className="font-ibm-medium text-[10px] text-[#5B6161] transition-colors hover:text-black hover:underline"
              >
                {t("terms_conditions")}
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="font-ibm-medium text-[10px] text-[#5B6161] transition-colors hover:text-black hover:underline"
              >
                {t("privacy_policy")}
              </Link>
            </li>
            <li>
              <Link
                to="/usage-policy"
                className="font-ibm-medium text-[10px] text-[#5B6161] transition-colors hover:text-black hover:underline"
              >
                {t("usage_policy")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
