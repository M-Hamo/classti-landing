import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, Link } from "react-router-dom";
import { ToggleLang } from "./ToggleLang";

import logo from "../../assets/icons/logo.svg";
import fi_1077063 from "../../assets/icons/fi_1077063.svg";
import menuIcon from "../../assets/icons/menu-01.svg";

export const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const activeHash = location.hash || "#";
  const isRTL = i18n.language === "ar";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  useEffect(() => {
    if (location.hash && location.pathname === "/") {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.hash, location.pathname]);

  const headerLinks = [
    { name: t("nav_home"), href: "#main" },
    { name: t("nav_about"), href: "#about" },
    { name: t("nav_how_it_works"), href: "#howItWorks" },
    { name: t("nav_features"), href: "#applications" },
    { name: t("nav_contact"), href: "#contactUs" },
  ];

  return (
    <>
      <header
        className={`sticky z-50 mx-auto flex h-[72px] w-11/12 items-center justify-between rounded-3xl border-2 border-white/40 px-4 py-3 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 ${
          isScrolled ? "top-0 " : "top-5"
        }`}
      >
        <img src={logo} alt="logo" className="hidden h-8 w-28 lg:block" />

        <nav className="hidden items-center gap-6 lg:flex">
          {headerLinks.map((link) => (
            <Link
              key={link.name}
              to={"/" + link.href}
              className={`${
                activeHash === link.href ? "text-[#00512E]" : "text-[#0E1F1F]"
              } font-ibm-medium text-sm transition-opacity hover:text-[#00512E]`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-center gap-2 lg:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex h-10 w-10 cursor-pointer items-center justify-center border-none outline-none"
          >
            <img src={menuIcon} alt="menu" className="h-6 w-6" />
          </button>

          <img src={logo} alt="logo" className="block h-6 w-20" />
        </div>

        <div className="flex items-center gap-3">
          <ToggleLang className="hidden lg:flex" />

          <Link
            to="/login"
            className="font-ibm-semiBold hidden h-12 cursor-pointer items-center justify-center rounded-xl bg-[#00512E] px-8 text-base text-white transition-transform hover:bg-[#00512E]/90 active:scale-[0.98] lg:flex"
          >
            {t("login_btn")}
          </Link>

          <Link
            to="/login"
            className="font-ibm-semiBold flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl bg-[#00512E] text-base text-white transition-transform hover:bg-[#00512E]/90 active:scale-[0.98] lg:hidden"
          >
            <img src={fi_1077063} alt="logo" className="block h-4 w-4" />
          </Link>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-100 transition-opacity duration-300 lg:hidden ${
          isMenuOpen
            ? "pointer-events-auto backdrop-opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        ></div>

        <div
          className={`absolute top-0 h-full w-[50dvw] bg-white p-4 shadow-2xl transition-transform duration-300 ease-in-out ${
            isRTL
              ? `right-0 rounded-l-[25px] ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`
              : `left-0 rounded-r-[25px] ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`
          }`}
        >
          <div className="flex h-full flex-col items-stretch justify-start gap-5">
            <nav className="flex flex-col items-stretch justify-start gap-3">
              {headerLinks.map((link) => (
                <Link
                  key={link.name}
                  to={"/" + link.href}
                  className={`${
                    activeHash === link.href ? "text-[#00512E]" : "text-[#0E1F1F]"
                  } font-ibm-medium flex h-7 items-center text-sm transition-colors hover:text-[#00512E]`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <ToggleLang
              text="toggle_lang_long"
              className="h-8! gap-1.5"
              onToggle={() => setIsMenuOpen(false)}
            />
          </div>
        </div>
      </div>
    </>
  );
};
