import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import { AuthLayout } from "./ui/AuthLayout";
import { ConnectDevicePopup } from "./ui/ConnectDevicePopup";
import { PhoneNumberInput } from "./ui/PhoneNumberInput";
import { AppButton } from "./ui/AppButton";
import { UserType, loginAsync, getLKAttachesAsync } from "../store/user";
import { countryFlags } from "../utils/constants";

export const Login = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const loginTypesList = useSelector((state) => state.user.loginTypesList);
  const attachmentsList = useSelector((state) => state.user.attachmentsList);

  const [showPassword, setShowPassword] = useState(false);
  const [showConnectDevicePopup, setShowConnectDevicePopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setError,
    formState: { errors },
  } = useForm({
    mode: "onBlur",

    defaultValues: {
      userType: +searchParams.get("userType") || UserType.SchoolAdmin,
      countryCode: countryFlags[1].code,
    },
  });

  const selectedType = watch("userType");
  const attachmentId = watch("attachmentId");
  const selectedLoginType = loginTypesList.find((t) => t.value === Number(selectedType));

  useEffect(() => {
    setSearchParams({ userType: selectedType }, { replace: true });

    if (+selectedType !== UserType.Parent) setValue("attachmentId", null);
  }, [selectedType, setSearchParams, setValue]);

  useEffect(() => {
    if (+selectedType === UserType.Parent) {
      dispatch(getLKAttachesAsync()).then((res) => {
        if (res?.payload?.length > 0 && !attachmentId) {
          setValue("attachmentId", res.payload[0].id);
        }
      });
    }
  }, [dispatch, attachmentId, setValue, selectedType]);

  const onSubmit = (data) => {
    setLoading(true);
    setErrorMsg("");
    dispatch(loginAsync(data))
      .then((res) => res.payload)
      .then((res) => {
        if (res.isSuccess) {
          console.log("🚀 ~ onSubmit ~ res:", res);
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

          setErrorMsg(res?.message);
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <AuthLayout description={selectedLoginType?.desc}>
      <h2 className="font-ibm-bold text-start text-2xl text-[#0E1F1F]">
        {t("login_title")}
      </h2>
      <p className="font-ibm-medium mt-1 text-start text-sm text-[#5B6161]">
        {t(selectedLoginType?.sub_desc || "")}
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 flex flex-col items-stretch justify-start gap-1"
      >
        <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {loginTypesList.map((type) => (
            <label
              key={type.value}
              className={`group relative flex cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border p-3 transition-all ${
                Number(selectedType) === type.value
                  ? "border-[#99FFD3] bg-[#E5FFF4]/54"
                  : "border-[#CCCCCC] bg-white hover:border-[#99FFD3] hover:bg-[#E5FFF4]/54"
              }`}
            >
              <input
                type="radio"
                value={type.value}
                {...register("userType")}
                className="sr-only"
              />

              <img
                src={type.icon}
                alt={t(type.label)}
                className={`h-6 w-6 ${Number(selectedType) === type.value ? "icon-green" : ""}`}
              />

              <span
                className={`font-ibm-regular text-center text-sm leading-7 transition-all group-hover:text-[#00512E] ${Number(selectedType) === type.value ? "text-[#00512E]" : "text-[#878F8F]"}`}
              >
                {t(type.label)}
              </span>
            </label>
          ))}
        </div>

        {+selectedType === UserType.Parent && (
          <div className="mb-4 flex flex-col items-stretch justify-start gap-2">
            <label htmlFor="fullName" className="font-ibm-medium text-sm text-[#0E1F1F]">
              {t("choose_your_photo")}
            </label>
            <div className="flex flex-wrap items-center justify-start gap-3 transition-all">
              {attachmentsList.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-[17.58px] outline-2 ${attachmentId === item.id ? "outline-[#00512E]" : "outline-white"}`}
                  onClick={() => setValue("attachmentId", item.id)}
                >
                  <img className="h-full w-full" src={item.url} alt="User icon" />
                </button>
              ))}
            </div>
          </div>
        )}

        <PhoneNumberInput
          register={register}
          errors={errors}
          watch={watch}
          setValue={setValue}
          label={t("mobile_number")}
        />

        <div className="flex flex-col items-stretch justify-start gap-2 md:gap-3">
          <label htmlFor="password" className="font-ibm-medium text-sm text-[#0E1F1F]">
            {t("password")}
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

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <label className="relative flex cursor-pointer items-center">
              <input
                type="checkbox"
                id="remember"
                className="peer h-6 w-6 cursor-pointer appearance-none rounded-lg border border-[#CCCCCC] transition-all outline-none checked:border-[#00512E] checked:bg-transparent"
              />
              <svg
                className="pointer-events-none absolute top-1/2 left-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 text-[#00512E] opacity-0 transition-opacity peer-checked:opacity-100"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </label>
            <label
              htmlFor="remember"
              className="font-ibm-regular cursor-pointer text-base text-[#5B6161]"
            >
              {t("remember_me")}
            </label>
          </div>
          <Link
            to={`/forget-password?userType=${selectedType}`}
            size="sm"
            className="font-ibm-regular text-base text-[#00512E] underline underline-offset-2"
          >
            {t("forgot_password")}
          </Link>
        </div>

        <p className="font-ibm-medium mt-2 text-start text-xs text-red-500">
          {t(errorMsg) || "\u00A0"}
        </p>

        <AppButton
          className="mt-2!"
          text={+selectedType === UserType.Parent ? t("start_your_day") : t("login_btn")}
          loading={loading}
        />
      </form>

      <div className="pt-3 text-center">
        {+selectedType === UserType.SchoolAdmin ? (
          <p className="font-ibm-regular text-base text-[#878F8F]">{"\u00A0"}</p>
        ) : +selectedType === UserType.SchoolOwner ? (
          <p className="font-ibm-regular text-base text-[#878F8F]">
            {t("no_account")}{" "}
            <Link
              to="/register"
              className="font-ibm-regular ms-1 text-[#00512E] hover:underline"
            >
              {t("create_account")}
            </Link>
          </p>
        ) : +selectedType === UserType.Parent ? (
          <button
            type="button"
            onClick={() => setShowConnectDevicePopup(true)}
            className="font-ibm-regular cursor-pointer bg-transparent text-base text-[#00512E] transition-all hover:scale-115 active:scale-[0.98]"
          >
            {t("link_the_app_to_the_device")}
          </button>
        ) : null}
      </div>

      <ConnectDevicePopup
        show={showConnectDevicePopup}
        onClose={() => setShowConnectDevicePopup(false)}
      />
    </AuthLayout>
  );
};
