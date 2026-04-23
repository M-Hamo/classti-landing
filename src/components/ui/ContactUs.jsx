import { useState } from "react";
import { useTranslation } from "react-i18next";
import phoneIcon from "../../assets/icons/fi_1949710.svg";
import starIcon from "../../assets/icons/star.svg";

export const ContactUs = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  const contactCards = [
    {
      label: t("contact_info_phone_label"),
      value: t("contact_info_phone"),
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="#00512E"/>
        </svg>
      ),
    },
    {
      label: t("contact_info_email_label"),
      value: t("contact_info_email"),
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#00512E"/>
        </svg>
      ),
    },
    {
      label: t("contact_info_whatsapp_label"),
      value: t("contact_info_phone"),
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12C2 13.89 2.525 15.66 3.438 17.168L2.049 21.951L6.952 20.589C8.42 21.467 10.148 21.97 12 21.97C17.523 21.97 22 17.494 22 11.971C22 6.448 17.523 2 12 2ZM9.083 7.616C9.288 7.616 9.499 7.618 9.684 7.626C9.891 7.636 10.115 7.649 10.328 8.13C10.578 8.694 11.11 10.054 11.178 10.195C11.247 10.337 11.293 10.503 11.202 10.688C11.11 10.874 11.065 10.988 10.924 11.153C10.782 11.319 10.627 11.523 10.499 11.649C10.358 11.791 10.21 11.944 10.373 12.227C10.535 12.51 11.102 13.439 11.944 14.191C13.028 15.161 13.944 15.454 14.227 15.596C14.509 15.737 14.673 15.714 14.837 15.525C15.001 15.337 15.545 14.698 15.732 14.416C15.918 14.134 16.105 14.181 16.363 14.274C16.621 14.368 17.976 15.032 18.258 15.173C18.541 15.314 18.727 15.384 18.797 15.502C18.866 15.619 18.866 16.183 18.633 16.842C18.399 17.5 17.272 18.129 16.74 18.176C16.208 18.223 15.708 18.412 13.27 17.454C10.33 16.317 8.446 13.339 8.305 13.151C8.163 12.963 7.17 11.645 7.17 10.28C7.17 8.916 7.878 8.248 8.138 7.964C8.397 7.681 8.702 7.616 8.912 7.616H9.083Z" fill="#00512E"/>
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="mt-6 flex flex-col items-stretch justify-start gap-6 md:mt-0 md:gap-10"
    >
      {/* Header */}
      <div className="flex flex-col items-center justify-center gap-4 md:gap-6">
        <div className="flex h-7.5 items-center justify-center gap-2 rounded-2xl border border-[#CCCCCC] bg-[#E5FFF4] px-3 py-1">
          <img src={phoneIcon} alt="contact" className="h-4 w-4" />
          <span className="font-ibm-semiBold text-sm text-[#00512E]">
            {t("contact_badge")}
          </span>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 md:gap-3">
          <h2 className="font-ibm-bold text-[24px] md:text-[32px]">
            {t("contact_title")}
          </h2>
          <p className="font-ibm-medium text-center text-xs text-[#5B6161] md:text-base">
            {t("contact_desc")}
          </p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-8">
        {/* Contact Info */}
        <div className="flex flex-col gap-4 lg:col-span-2">
          {contactCards.map((card, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 rounded-3xl border border-[#E6E6E6] bg-white p-5 shadow-sm shadow-[#E6E6E6] transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#CCFFE9] bg-[#E5FFF4]">
                {card.icon}
              </div>
              <div className="flex flex-col items-start gap-1">
                <span className="font-ibm-medium text-sm text-[#5B6161]">
                  {card.label}
                </span>
                <span className="font-ibm-semiBold text-base text-[#0E1F1F]" dir="ltr">
                  {card.value}
                </span>
              </div>
            </div>
          ))}

          {/* Star / Branding callout */}
          <div className="mt-2 flex items-start gap-4 rounded-3xl border border-[#CCFFE9] bg-[#E5FFF4] p-5">
            <img src={starIcon} alt="star" className="mt-1 h-5 w-5 shrink-0" />
            <div className="flex flex-col gap-1">
              <h4 className="font-ibm-bold text-base text-[#00512E]">
                Classti
              </h4>
              <p className="font-ibm-regular text-sm leading-relaxed text-[#5B6161]">
                {t("hero_description")}
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex flex-col gap-6 rounded-3xl border border-[#E6E6E6] bg-white p-6 shadow-sm shadow-[#E6E6E6] lg:col-span-3">
          {submitted && (
            <div className="flex items-center gap-3 rounded-2xl border border-[#99FFD3] bg-[#E5FFF4] px-4 py-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M21 12C21 16.971 16.971 21 12 21C7.029 21 3 16.971 3 12C3 7.029 7.029 3 12 3C16.971 3 21 7.029 21 12Z" stroke="#00512E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-ibm-semiBold text-sm text-[#00512E]">
                {t("contact_success")}
              </span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="font-ibm-medium text-sm text-[#0E1F1F]">
                  {t("contact_name")}
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t("contact_name_placeholder")}
                  required
                  className="font-ibm-regular h-12 w-full rounded-xl border border-[#E6E6E6] bg-[#F9FAFB] px-4 text-sm text-[#0E1F1F] outline-none placeholder:text-[#9CA3AF] transition-colors focus:border-[#00512E] focus:bg-white focus:ring-2 focus:ring-[#00512E]/10"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="font-ibm-medium text-sm text-[#0E1F1F]">
                  {t("contact_email")}
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={t("contact_email_placeholder")}
                  required
                  dir="ltr"
                  className="font-ibm-regular h-12 w-full rounded-xl border border-[#E6E6E6] bg-[#F9FAFB] px-4 text-sm text-[#0E1F1F] outline-none placeholder:text-[#9CA3AF] transition-colors focus:border-[#00512E] focus:bg-white focus:ring-2 focus:ring-[#00512E]/10"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label className="font-ibm-medium text-sm text-[#0E1F1F]">
                {t("contact_phone")}
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder={t("contact_phone_placeholder")}
                dir="ltr"
                className="font-ibm-regular h-12 w-full rounded-xl border border-[#E6E6E6] bg-[#F9FAFB] px-4 text-sm text-[#0E1F1F] outline-none placeholder:text-[#9CA3AF] transition-colors focus:border-[#00512E] focus:bg-white focus:ring-2 focus:ring-[#00512E]/10"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="font-ibm-medium text-sm text-[#0E1F1F]">
                {t("contact_message")}
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder={t("contact_message_placeholder")}
                required
                rows={5}
                className="font-ibm-regular w-full resize-none rounded-xl border border-[#E6E6E6] bg-[#F9FAFB] px-4 py-3 text-sm text-[#0E1F1F] outline-none placeholder:text-[#9CA3AF] transition-colors focus:border-[#00512E] focus:bg-white focus:ring-2 focus:ring-[#00512E]/10"
              />
            </div>

            <button
              type="submit"
              className="font-ibm-semiBold mt-1 h-12 w-full cursor-pointer rounded-xl bg-[#00512E] text-base text-white transition-all hover:bg-[#00512E]/90 active:scale-[0.98]"
            >
              {t("contact_submit")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
