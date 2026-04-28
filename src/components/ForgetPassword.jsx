import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { AuthLayout } from "./ui/AuthLayout";

export const ForgetPassword = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    console.log("Forget Password data:", data);
    // Add logic to send reset code
  };

  return (
    <AuthLayout>
      <h2 className="font-ibm-bold text-start text-2xl text-[#0E1F1F]">
        {t("forget_password_title")}
      </h2>
      <p className="font-ibm-medium mt-1 text-start text-sm text-[#5B6161]">
        {t("forget_password_subtitle")}
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 flex flex-col items-stretch justify-start gap-4 md:mt-8"
      >
        <div className="flex flex-col items-stretch justify-start gap-2 md:gap-3">
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
              placeholder="5x xxx xxxx"
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
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="#0E1F1F"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <p className="font-ibm-medium -mt-2 text-xs text-red-500">
            {errors.mobile ? errors.mobile.message : "\u00A0"}
          </p>
        </div>

        <button
          type="submit"
          className="font-ibm-semiBold mt-2 h-14 w-full cursor-pointer rounded-2xl bg-[#00512E] text-lg text-white shadow-lg transition-all hover:bg-[#003D22] active:scale-[0.98] md:mt-4"
        >
          {t("send_code")}
        </button>
      </form>
    </AuthLayout>
  );
};
