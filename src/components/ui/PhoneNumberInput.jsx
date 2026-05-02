import { useState, useRef, useEffect } from "react";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";
import { countryFlags } from "../../utils/constants";

export const PhoneNumberInput = ({
  id = "phoneNumber",
  name = "phoneNumber",
  countryCodeName = "countryCode",
  register,
  errors,
  watch,
  setValue,
  label,
}) => {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const selectedCodeValue = watch(countryCodeName);
  const selectedCountry =
    countryFlags.find((c) => c.code === selectedCodeValue) || countryFlags[1];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col items-stretch justify-start gap-2">
      <label htmlFor={id} className="font-ibm-medium text-sm text-[#0E1F1F]">
        {label || t("mobile_number")}
      </label>

      <div
        className={`flex h-12 items-center rounded-2xl border bg-transparent transition-all ${
          errors[name]
            ? "border-red-500"
            : "border-[#DDE0E0] focus-within:border-[#009957] focus-within:bg-white"
        }`}
      >
        <input
          type="tel"
          id={id}
          placeholder=""
          {...register(name, {
            required: t("required_field"),
            pattern: {
              value: selectedCountry?.regex,
              message: t("mobile_invalid"),
            },
          })}
          className="font-ibm-regular w-full rounded-2xl bg-transparent py-2 text-sm outline-none placeholder:text-[#878F8F]"
        />
        <span className="font-ibm-regular px-4 text-sm text-[#878F]">
          {selectedCountry?.code}
        </span>
        <div
          className={`relative flex h-full items-center justify-center gap-2 ${i18n.language === "en" ? "border-l" : "border-r"} border-[#DDE0E0] bg-transparent px-4`}
          ref={dropdownRef}
        >
          <div
            className="flex cursor-pointer items-center justify-center gap-2"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <ReactCountryFlag
              countryCode={selectedCountry?.iso}
              svg
              style={{ width: 20, height: 20 }}
            />
            <div className="pointer-events-none">
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
              >
                <path
                  d="M1 1L6 6L11 1"
                  stroke="#878F8F"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {isDropdownOpen && (
            <div
              className={`absolute top-full ${i18n.language === "en" ? "left-0" : "right-0"} z-50 mt-1 flex min-w-[120px] flex-col items-stretch justify-center gap-1.5 overflow-hidden rounded-xl border border-[#DDE0E0] bg-white p-2 shadow-xl`}
            >
              {countryFlags.map((c) => (
                <div
                  key={c.code}
                  className={`flex cursor-pointer items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
                    selectedCountry?.code === c.code ? "bg-gray-50" : ""
                  }`}
                  onClick={() => {
                    setValue(countryCodeName, c.code);
                    setIsDropdownOpen(false);
                  }}
                >
                  <ReactCountryFlag
                    countryCode={c.iso}
                    svg
                    style={{ width: 20, height: 20 }}
                  />
                  <span className="font-ibm-medium text-sm text-[#0E1F1F]">{c.code}</span>
                </div>
              ))}
            </div>
          )}
          {/* Hidden input for react-hook-form */}
          <input type="hidden" {...register(countryCodeName)} />
        </div>
      </div>
      <p className="font-ibm-medium -mt-1 text-xs text-red-500">
        {errors[name]?.message || "\u00A0"}
      </p>
    </div>
  );
};
