import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { AuthLayout } from "./ui/AuthLayout";

export const Register = () => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const password = watch("password");

  const onSubmit = (data) => {
    console.log("Registration data:", data);
    // Add registration logic here
  };

  const countries = [
    { value: "SA", label: t("saudi_arabia") },
    { value: "EG", label: t("egypt") },
    { value: "AE", label: t("uae") },
  ];

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
                required: t("full_name_required"),
              })}
              className="font-ibm-regular w-full bg-transparent px-4 py-2 text-sm outline-none placeholder:text-[#878F8F]"
            />
          </div>
          {errors.fullName && (
            <p className="font-ibm-medium -mt-1 text-xs text-red-500">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="mt-2 flex flex-col items-stretch justify-start gap-2">
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
                required: t("email_required") || "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: t("email_invalid") || "Invalid email address",
                },
              })}
              className="font-ibm-regular w-full bg-transparent px-4 py-2 text-sm outline-none placeholder:text-[#878F8F]"
            />
          </div>
          {errors.email && (
            <p className="font-ibm-medium -mt-1 text-xs text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Country */}
        <div className="mt-2 flex flex-col items-stretch justify-start gap-2">
          <label htmlFor="country" className="font-ibm-medium text-sm text-[#0E1F1F]">
            {t("country")}
          </label>
          <div
            className={`flex h-12 items-center overflow-hidden rounded-2xl border bg-transparent transition-all ${
              errors.country
                ? "border-red-500"
                : "border-[#DDE0E0] focus-within:border-[#009957] focus-within:bg-white"
            }`}
          >
            <select
              id="country"
              {...register("country", {
                required: t("country_required") || "Country is required",
              })}
              className="font-ibm-regular w-full appearance-none bg-transparent px-4 py-2 text-sm outline-none"
              defaultValue=""
            >
              <option value="" disabled>
                {t("select_country")}
              </option>
              {countries.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none px-4">
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
          {errors.country && (
            <p className="font-ibm-medium -mt-1 text-xs text-red-500">
              {errors.country.message}
            </p>
          )}
        </div>

        {/* Mobile Number */}
        <div className="mt-2 flex flex-col items-stretch justify-start gap-2">
          <label htmlFor="mobile" className="font-ibm-medium text-sm text-[#0E1F1F]">
            {t("mobile_number")}
          </label>

          <div
            className={`flex h-12 items-center overflow-hidden rounded-2xl border bg-transparent transition-all ${
              errors.mobile
                ? "border-red-500"
                : "border-[#DDE0E0] focus-within:border-[#009957] focus-within:bg-white"
            }`}
          >
            <input
              type="tel"
              id="mobile"
              placeholder=""
              {...register("mobile", {
                required: t("mobile_required"),
                pattern: {
                  value: /^[5]\d{8}$/,
                  message: t("mobile_invalid"),
                },
              })}
              className="font-ibm-regular w-full bg-transparent px-4 py-2 text-sm outline-none placeholder:text-[#878F8F]"
            />
            <div className="flex items-center gap-2 border-r border-[#DDE0E0] bg-transparent px-4 py-2">
              <span className="font-ibm-bold text-sm text-[#0E1F1F]">966+</span>
            </div>
          </div>
          {errors.mobile && (
            <p className="font-ibm-medium -mt-1 text-xs text-red-500">
              {errors.mobile.message}
            </p>
          )}
        </div>

        <div className="mt-2 grid grid-cols-2 gap-4">
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
                  required: t("password_required"),
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
            {errors.password && (
              <p className="font-ibm-medium -mt-1 text-xs text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col items-stretch justify-start gap-2">
            <label
              htmlFor="confirmPassword"
              className="font-ibm-medium text-sm text-[#0E1F1F]"
            >
              {t("confirm_password")}
            </label>
            <div
              className={`flex h-12 items-center overflow-hidden rounded-2xl border bg-transparent transition-all ${
                errors.confirmPassword
                  ? "border-red-500"
                  : "border-[#DDE0E0] focus-within:border-[#009957] focus-within:bg-white"
              }`}
            >
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                placeholder={t("enter_confirm_password")}
                {...register("confirmPassword", {
                  required: t("password_required"),
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
          </div>
          {errors.confirmPassword && (
            <p className="font-ibm-medium col-span-full -mt-1 text-xs text-red-500">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="font-ibm-semiBold mt-6 h-14 w-full cursor-pointer rounded-2xl bg-[#00512E] text-lg text-white shadow-lg transition-all hover:bg-[#003D22] active:scale-[0.98]"
        >
          {t("create_account")}
        </button>
      </form>

      <div className="mt-4 text-center">
        <p className="font-ibm-regular text-base text-[#878F8F]">
          {t("already_have_account")}{" "}
          <Link
            to="/login"
            className="font-ibm-regular ms-1 text-[#00512E] hover:underline"
          >
            {t("login_btn")}
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Register;
