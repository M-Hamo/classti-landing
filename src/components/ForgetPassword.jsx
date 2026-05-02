import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AuthLayout } from "./ui/AuthLayout";
import { PhoneNumberInput } from "./ui/PhoneNumberInput";
import { forgetPasswordAsync } from "../store/user";
import { countryFlags } from "../utils/constants";

export const ForgetPassword = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const userType = searchParams.get("userType");

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

  const onSubmit = (data) => {
    dispatch(forgetPasswordAsync(data))
      .unwrap()
      .then((res) => {
        if (res.isSuccess) {
          navigate(
            `/otp?userType=${userType}&phoneNumber=${data.phoneNumber}&countryCode=${data.countryCode}`
          );
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
      });
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
        <PhoneNumberInput
          register={register}
          errors={errors}
          watch={watch}
          setValue={setValue}
          label={t("mobile_number")}
        />

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
