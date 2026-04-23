import { useTranslation } from "react-i18next";
import appStore from "../../assets/icons/app_store.svg";
import googlePlay from "../../assets/icons/google_play.svg";

export const Footer = () => {
  const { t } = useTranslation();

  const navLinks = [
    { name: t("nav_home"), href: "#main" },
    { name: t("nav_about"), href: "#about" },
    { name: t("nav_how_it_works"), href: "#howItWorks" },
    { name: t("nav_features"), href: "#applications" },
    { name: t("nav_contact"), href: "#contact" },
  ];

  const socialLinks = [
    {
      label: "Twitter / X",
      href: "#",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.84L2.25 2.25h7.17l4.254 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "#",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "#",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative w-full overflow-hidden">
      {/* Wave SVG Transition (from figma design) */}
      <div className="relative w-full leading-[0]">
        <svg
          viewBox="0 0 1364 303"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M1364 0H0V253H1364V0Z" fill="#00341E" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1364 272.114C827.23 280.488 493.885 244.658 287.159 198.83C128.24 163.602 44.1486 122.465 0 90.9614V302.094H1364V272.114Z"
            fill="url(#footer_paint0)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M287.159 198.831C493.885 244.658 827.23 280.488 1364 272.115V191.364C1334.61 194.533 1305.78 197.447 1277.51 200.122C638.371 260.608 287.159 198.831 287.159 198.831Z"
            fill="url(#footer_paint1)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M287.159 198.831C287.159 198.831 638.371 260.608 1277.51 200.122C1277.51 200.122 218.504 239.007 0 0.0146484V90.9616C44.1486 122.465 128.24 163.602 287.159 198.831Z"
            fill="url(#footer_paint2)"
          />
          <defs>
            <linearGradient
              id="footer_paint0"
              x1="686.056"
              y1="192.629"
              x2="648.48"
              y2="433.075"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00341E" />
              <stop offset="1" stopColor="#307256" />
            </linearGradient>
            <linearGradient
              id="footer_paint1"
              x1="287.159"
              y1="232.349"
              x2="1364"
              y2="232.349"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2A694E" />
              <stop offset="1" stopColor="#00341E" />
            </linearGradient>
            <linearGradient
              id="footer_paint2"
              x1="667.544"
              y1="52.9796"
              x2="651.082"
              y2="232.247"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00341E" />
              <stop offset="1" stopColor="#00512E" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Footer Content */}
      <div className="bg-[#00341E] px-4 pb-8 md:px-8 md:pb-12">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
          {/* Main Grid */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand Column */}
            <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
              <span className="font-ibm-bold text-3xl leading-8 text-white">
                Class<span className="text-[#1A9F58]">ti</span>
              </span>
              <p className="font-ibm-regular max-w-[260px] text-sm leading-relaxed text-white/60">
                {t("footer_tagline")}
              </p>

              {/* Social Links */}
              <div className="mt-2 flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all hover:border-[#1A9F58] hover:bg-[#1A9F58]/10 hover:text-[#1A9F58]"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-4">
              <h4 className="font-ibm-semiBold text-base text-white">
                {t("footer_nav_title")}
              </h4>
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="font-ibm-regular text-sm text-white/60 transition-colors hover:text-[#1A9F58]"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-4">
              <h4 className="font-ibm-semiBold text-base text-white">
                {t("footer_contact_title")}
              </h4>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                    <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="#1A9F58"/>
                  </svg>
                  <span className="font-ibm-regular text-sm text-white/60" dir="ltr">
                    {t("contact_info_phone")}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#1A9F58"/>
                  </svg>
                  <span className="font-ibm-regular text-sm text-white/60" dir="ltr">
                    {t("contact_info_email")}
                  </span>
                </div>
              </div>
            </div>

            {/* Download App */}
            <div className="flex flex-col gap-4">
              <h4 className="font-ibm-semiBold text-base text-white">
                {t("footer_download_title")}
              </h4>
              <div className="flex flex-col gap-3">
                <button className="h-[42px] w-[150px] cursor-pointer overflow-hidden rounded-lg border border-white/20 outline-none transition-opacity hover:opacity-80 active:scale-[0.98]">
                  <img
                    src={appStore}
                    alt="app store"
                    className="h-full w-full rounded-lg object-cover"
                  />
                </button>
                <button className="h-[42px] w-[150px] cursor-pointer overflow-hidden rounded-lg border border-white/20 outline-none transition-opacity hover:opacity-80 active:scale-[0.98]">
                  <img
                    src={googlePlay}
                    alt="google play"
                    className="h-full w-full object-cover"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
            <p className="font-ibm-regular text-sm text-white/40">
              {t("footer_rights")}
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="font-ibm-regular text-sm text-white/40 transition-colors hover:text-white/70"
              >
                {t("footer_privacy")}
              </a>
              <a
                href="#"
                className="font-ibm-regular text-sm text-white/40 transition-colors hover:text-white/70"
              >
                {t("footer_terms")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
