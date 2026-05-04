import { useState, useEffect, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AuthLayout } from "./ui/AuthLayout";
import { AppButton } from "./ui/AppButton";
import { useDispatch } from "react-redux";
import { forgetPasswordAsync, verifyForgetPassAsync } from "../store/user";

export const Otp = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const userType = searchParams.get("userType");
  const phoneNumber = searchParams.get("phoneNumber");
  const countryCode = (
    searchParams.get("countryCode")?.includes("+")
      ? searchParams.get("countryCode")
      : `+${searchParams.get("countryCode")}`
  ).replace(" ", "");

  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(40);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const handleChange = (index, value) => {
    setErrorMsg(false);
    const digit = value.replace(/[^0-9]/g, "");
    if (!digit && value !== "") return;

    const newOtp = [...otp];
    newOtp[index] = digit.substring(digit.length - 1);
    setOtp(newOtp);

    // Auto-focus next input
    if (digit && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleResend = () => {
    setOtp(["", "", "", ""]);
    setErrorMsg(false);

    dispatch(forgetPasswordAsync({ phoneNumber, countryCode })).then(() => {
      setTimeLeft(40);
      if (inputRefs[0].current) inputRefs[0].current.focus();
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpValue = otp.join("");
    if (otpValue.length === 4) {
      setLoading(true);
      setErrorMsg("");

      dispatch(verifyForgetPassAsync({ phoneNumber, countryCode, otp: otpValue }))
        .then((res) => res.payload)
        .then((res) => {
          if (res.isSuccess) {
            navigate(
              `/reset-password?userType=${userType}&userId=${res?.data?.userId}&resetToken=${res?.data?.resetToken}`
            );
          } else setErrorMsg(res?.message);
        })
        .catch(() => navigate(`/forget-password?userType=${userType}`))
        .finally(() => setLoading(false));
    }
  };

  return (
    <AuthLayout>
      <div className="flex flex-col items-stretch justify-start gap-3">
        <h2 className="font-ibm-bold text-start text-2xl text-[#0E1F1F]">
          {t("forget_password_title")}
        </h2>
        <p className="font-ibm-medium text-start text-sm text-[#5B6161]">
          {t("otp_subtitle")}{" "}
          <span className="font-ibm-bold text-[#00512E]" dir="ltr">
            {phoneNumber?.slice(0, -2).replace(/./g, "*") + phoneNumber?.slice(-2)}
          </span>
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-4 flex flex-col items-stretch justify-center gap-6 md:mt-6"
        >
          <div className="flex items-center justify-between gap-3 md:gap-4" dir="ltr">
            {otp.map((digit, idx) => (
              <input
                key={idx}
                ref={inputRefs[idx]}
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                value={digit}
                onChange={(e) => handleChange(idx, e.target.value)}
                onKeyDown={(e) => handleKeyDown(idx, e)}
                className={`font-ibm-medium h-[72px] w-full rounded-xl border bg-[#F9FAFB] text-center text-3xl text-[#0E1F1F] transition-all outline-none focus:border-[#009957] focus:bg-white focus:ring-1 focus:ring-[#009957] md:h-[90px] md:text-2xl ${
                  errorMsg ? "border-red-500 " : "border-[#DDE0E0] "
                }`}
              />
            ))}
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            {timeLeft !== 0 && !errorMsg && (
              <p className="font-ibm-medium self-end pe-2 text-base text-[#5B6161]">
                ({formatTime(timeLeft)})
              </p>
            )}

            {timeLeft === 0 && (
              <button
                type="button"
                onClick={handleResend}
                className={`font-ibm-bold cursor-pointer self-end pe-2 text-base text-[#00512E] underline underline-offset-2`}
              >
                {t("resend_code")}
              </button>
            )}

            {errorMsg && (
              <p className="font-ibm-regular w-full text-start text-sm text-[#DD0417]">
                {t(errorMsg || "otp_error")}
              </p>
            )}
          </div>

          <AppButton
            disabled={otp.some((d) => !d)}
            loading={loading}
            text={t("confirm")}
          />
        </form>
      </div>
    </AuthLayout>
  );
};
