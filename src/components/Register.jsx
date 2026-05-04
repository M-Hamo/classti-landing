import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import ReactCountryFlag from "react-country-flag";

import { getAllCountriesAsync, registerUserAsync, UserType } from "../store/user";
import { AuthLayout } from "./ui/AuthLayout";
import { Toaster } from "./ui/Toaster";
import { PhoneNumberInput } from "./ui/PhoneNumberInput";
import { AppButton } from "./ui/AppButton";
import { countryFlags } from "../utils/constants";

export const Register = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { countriesList } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [showToaster, setShowToaster] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isMainCountryDropdownOpen, setIsMainCountryDropdownOpen] = useState(false);
  const countries = countriesList.filter(
    (c) => c.countryCode === "EGY" || c.countryCode === "KSA"
  );

  const mainCountryRef = useRef(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setError,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: { countryCode: countryFlags[1].code },
  });

  const password = watch("password");
  const lkCountryId = watch("lkCountryId");

  const selectedMainCountry = countries.find((c) => String(c.id) === String(lkCountryId));

  useEffect(() => {
    dispatch(getAllCountriesAsync());
  }, [dispatch]);

  useEffect(() => {
    if (countries.length > 0 && !lkCountryId) {
      const saudi = countries.find((c) => c.countryCode === "KSA");
      if (saudi) {
        setValue("lkCountryId", String(saudi.id));
      }
    }
  }, [countries, setValue, lkCountryId]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mainCountryRef.current && !mainCountryRef.current.contains(event.target)) {
        setIsMainCountryDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const onSubmit = (data) => {
    setLoading(true);
    dispatch(registerUserAsync(data))
      .then((res) => {
        if (res.isSuccess) {
          setShowToaster(true);
          setTimeout(() => navigate(`/login?userType=${UserType.SchoolOwner}`), 1500);
        } else {
          if (res.validationErrors) {
            const handledFields = new Set();
            res.validationErrors.forEach((err) => {
              let fieldName =
                err.propertyName.charAt(0).toLowerCase() + err.propertyName.slice(1);

              if (fieldName === "countryCode") fieldName = "phoneNumber";

              if (!handledFields.has(fieldName)) {
                setError(fieldName, { type: "server", message: err.errorMessage });
                handledFields.add(fieldName);
              }
            });
          }
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <AuthLayout description="footer_desc">
      <h2 className="font-ibm-bold text-start text-2xl text-[#0E1F1F]">
        {t("register_title")}
      </h2>
      <p className="font-ibm-medium mt-1 text-start text-sm text-[#5B6161]">
        {t("register_subtitle")}
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 flex flex-col items-stretch justify-start gap-1"
      >
        {/* Full Name */}
        <div className="flex flex-col items-stretch justify-start gap-2">
          <label htmlFor="fullName" className="font-ibm-medium text-sm text-[#0E1F1F]">
            {t("full_name")}
          </label>
          <div
            className={`flex h-12 items-center overflow-hidden rounded-2xl border bg-transparent transition-all ${
              errors.fullName
                ? "border-red-500"
                : "border-[#DDE0E0] focus-within:border-[#009957] focus-within:bg-white"
            }`}
          >
            <input
              type="text"
              id="fullName"
              placeholder={t("full_name_placeholder")}
              {...register("fullName", {
                required: t("required_field"),
              })}
              className="font-ibm-regular w-full bg-transparent px-4 py-2 text-sm outline-none placeholder:text-[#878F8F]"
            />
          </div>
          <p className="font-ibm-medium -mt-1 text-xs text-red-500">
            {errors.fullName?.message || "\u00A0"}
          </p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-stretch justify-start gap-2">
          <label htmlFor="email" className="font-ibm-medium text-sm text-[#0E1F1F]">
            {t("email")}
          </label>
          <div
            className={`flex h-12 items-center overflow-hidden rounded-2xl border bg-transparent transition-all ${
              errors.email
                ? "border-red-500"
                : "border-[#DDE0E0] focus-within:border-[#009957] focus-within:bg-white"
            }`}
          >
            <input
              type="email"
              id="email"
              placeholder={t("email_placeholder")}
              {...register("email", {
                required: t("required_field") || "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: t("email_invalid") || "Invalid email address",
                },
              })}
              className="font-ibm-regular w-full bg-transparent px-4 py-2 text-sm outline-none placeholder:text-[#878F8F]"
            />
          </div>
          <p className="font-ibm-medium -mt-1 text-xs text-red-500">
            {errors.email?.message || "\u00A0"}
          </p>
        </div>

        {/* Country */}
        <div
          className="flex flex-col items-stretch justify-start gap-2"
          ref={mainCountryRef}
        >
          <label htmlFor="lkCountryId" className="font-ibm-medium text-sm text-[#0E1F1F]">
            {t("country")}
          </label>
          <div
            className={`relative flex h-12 items-center rounded-2xl border bg-transparent transition-all ${
              errors.lkCountryId
                ? "border-red-500"
                : "border-[#DDE0E0] focus-within:border-[#009957] focus-within:bg-white"
            }`}
          >
            <div
              className="flex w-full cursor-pointer items-center justify-between ps-2 pe-4"
              onClick={() => setIsMainCountryDropdownOpen(!isMainCountryDropdownOpen)}
            >
              <div className="flex items-center gap-2">
                {selectedMainCountry && <span className="text-lg"></span>}
                <span className="font-ibm-regular text-sm text-[#0E1F1F]">
                  {selectedMainCountry
                    ? i18n.language === "ar"
                      ? selectedMainCountry.arabicName
                      : selectedMainCountry.englishName
                    : t("select_country")}
                </span>
              </div>
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-transform ${isMainCountryDropdownOpen ? "rotate-180" : ""}`}
              >
                <path
                  d="M1 1L6 6L11 1"
                  stroke="#878F8F"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {isMainCountryDropdownOpen && (
              <div className="absolute top-full right-0 left-0 z-50 mt-1 flex flex-col items-stretch justify-center gap-1.5 overflow-hidden rounded-xl border border-[#DDE0E0] bg-white p-2 shadow-xl">
                {countries.map((c) => (
                  <div
                    key={c.id}
                    className={`flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2.5 transition-colors hover:bg-gray-50 ${
                      selectedMainCountry?.id === c.id ? "bg-gray-50" : ""
                    }`}
                    onClick={() => {
                      setValue("lkCountryId", String(c.id), { shouldValidate: true });
                      setIsMainCountryDropdownOpen(false);
                    }}
                  >
                    <ReactCountryFlag
                      countryCode={
                        countryFlags.find((f) => f.countryCode === c.countryCode)?.iso
                      }
                      svg
                      style={{ width: 20, height: 20 }}
                    />
                    <span className="font-ibm-regular text-sm text-[#0E1F1F]">
                      {i18n.language === "ar" ? c.arabicName : c.englishName}
                    </span>
                  </div>
                ))}
              </div>
            )}
            <input
              type="hidden"
              {...register("lkCountryId", {
                required: t("required_field") || "Country is required",
              })}
            />
          </div>
          <p className="font-ibm-medium -mt-1 text-xs text-red-500">
            {errors.lkCountryId?.message || "\u00A0"}
          </p>
        </div>

        {/* Mobile Number */}
        <PhoneNumberInput
          register={register}
          errors={errors}
          watch={watch}
          setValue={setValue}
          label={t("mobile_number")}
        />

        <div className="grid grid-cols-2 gap-4">
          {/* Password */}
          <div className="flex flex-col items-stretch justify-start gap-2">
            <label htmlFor="password" className="font-ibm-medium text-sm text-[#0E1F1F]">
              {t("password")}
            </label>
            <div
              className={`flex h-12 items-center overflow-hidden rounded-2xl border bg-transparent transition-all ${
                errors.password ||
                (errors.confirmPassword && errors.confirmPassword.type === "validate")
                  ? "border-red-500"
                  : "border-[#DDE0E0] focus-within:border-[#009957] focus-within:bg-white"
              }`}
            >
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder={t("enter_password")}
                {...register("password", {
                  required: t("required_field"),
                  minLength: {
                    value: 6,
                    message: t("password_short"),
                  },
                })}
                className="font-ibm-regular w-full bg-transparent px-4 py-2 text-sm outline-none placeholder:text-[#878F8F]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="flex h-full cursor-pointer items-center justify-center px-3 text-[#878F8F] outline-none hover:text-[#565656]"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {showPassword ? (
                    <>
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </>
                  ) : (
                    <>
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </>
                  )}
                </svg>
              </button>
            </div>
            <p className="font-ibm-medium -mt-1 text-xs text-red-500">
              {errors.password?.message || "\u00A0"}
            </p>
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col items-stretch justify-start gap-2">
            <label
              htmlFor="confiremPassword"
              className="font-ibm-medium text-sm text-[#0E1F1F]"
            >
              {t("confirm_password")}
            </label>
            <div
              className={`flex h-12 items-center overflow-hidden rounded-2xl border bg-transparent transition-all ${
                errors.confiremPassword
                  ? "border-red-500"
                  : "border-[#DDE0E0] focus-within:border-[#009957] focus-within:bg-white"
              }`}
            >
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confiremPassword"
                placeholder={t("enter_confirm_password")}
                {...register("confiremPassword", {
                  required: t("required_field"),
                  validate: (val) => val === password || t("passwords_mismatch"),
                })}
                className="font-ibm-regular w-full bg-transparent px-4 py-2 text-sm outline-none placeholder:text-[#878F8F]"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="flex h-full cursor-pointer items-center justify-center px-3 text-[#878F8F] outline-none hover:text-[#565656]"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {showConfirmPassword ? (
                    <>
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </>
                  ) : (
                    <>
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </>
                  )}
                </svg>
              </button>
            </div>
            <p className="font-ibm-medium col-span-full -mt-1 text-xs text-red-500">
              {errors.confiremPassword?.message || "\u00A0"}
            </p>
          </div>
        </div>

        <AppButton text={t("create_account")} loading={loading} />
      </form>

      <div className="mt-4 text-center">
        <p className="font-ibm-regular text-base text-[#878F8F]">
          {t("already_have_account")}{" "}
          <Link
            to={`/login?userType=${UserType.SchoolOwner}`}
            className="font-ibm-regular ms-1 text-[#00512E] hover:underline"
          >
            {t("login_btn")}
          </Link>
        </p>
      </div>
      <Toaster
        show={showToaster}
        onClose={() => setShowToaster(false)}
        message={t("registered_successfully")}
      />
    </AuthLayout>
  );
};

export default Register;
