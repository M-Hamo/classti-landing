import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { AuthBody } from "./ui/AuthBody";

export const ResetPassword = () => {
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
    console.log("Reset Password data:", data);
    // Add logic to reset password
  };

  return (
    <AuthBody hideBackButton={true}>
      <h2 className="font-ibm-bold text-start text-2xl text-[#0E1F1F]">
        {t("reset_password_title")}
      </h2>
      <p className="font-ibm-medium mt-1 text-start text-sm text-[#5B6161]">
        {t("reset_password_subtitle")}
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 flex flex-col items-stretch justify-start gap-1"
      >
        <div className="flex flex-col items-stretch justify-start gap-2 md:gap-3">
          <label htmlFor="password" className="font-ibm-medium text-sm text-[#0E1F1F]">
            {t("new_password")}
          </label>
          <div
            className={`flex h-12 items-center overflow-hidden rounded-2xl border bg-transparent transition-all ${
              errors.password
                ? "border-red-500"
                : "border-[#DDE0E0] focus-within:border-[#009957] focus-within:bg-white"
            }`}
          >
            <input
              type={showPassword ? "text" : "password"}
              id="password"
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
              className="flex h-full cursor-pointer items-center justify-center px-4 text-[#878F8F] transition-colors outline-none hover:text-[#565656]"
            >
              <svg
                width="20"
                height="20"
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
          <p className="font-ibm-medium -mt-2 text-xs text-red-500">
            {errors.password ? errors.password.message : "\u00A0"}
          </p>
        </div>

        <div className="flex flex-col items-stretch justify-start gap-2 md:gap-3">
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
              {...register("confirmPassword", {
                required: t("password_required"),
                validate: (value) => value === password || t("passwords_mismatch"),
              })}
              className="font-ibm-regular w-full bg-transparent px-4 py-2 text-sm outline-none placeholder:text-[#878F8F]"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="flex h-full cursor-pointer items-center justify-center px-4 text-[#878F8F] transition-colors outline-none hover:text-[#565656]"
            >
              <svg
                width="20"
                height="20"
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
          <p className="font-ibm-medium -mt-2 text-xs text-red-500">
            {errors.confirmPassword ? errors.confirmPassword.message : "\u00A0"}
          </p>
        </div>

        <button
          type="submit"
          className="font-ibm-semiBold mt-2 h-14 w-full cursor-pointer rounded-2xl bg-[#00512E] text-lg text-white shadow-lg transition-all hover:bg-[#003D22] active:scale-[0.98] md:mt-6"
        >
          {t("set_password")}
        </button>
      </form>
    </AuthBody>
  );
};
