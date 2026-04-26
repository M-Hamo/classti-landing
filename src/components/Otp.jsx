import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { AuthBody } from "./ui/AuthBody";

export const Otp = () => {
  const { t } = useTranslation();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(60);
  const [hasError, setHasError] = useState(false);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const handleChange = (index, value) => {
    setHasError(false);
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
    setTimeLeft(60);
    setOtp(["", "", "", ""]);
    setHasError(false);
    if (inputRefs[0].current) inputRefs[0].current.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpValue = otp.join("");
    if (otpValue.length === 4) {
      console.log("OTP Submitted:", otpValue);
    }
  };

  return (
    <AuthBody hideBackButton={true}>
      <div className="flex flex-col items-stretch justify-start gap-3">
        <h2 className="font-ibm-bold text-start text-2xl text-[#0E1F1F]">
          {t("forget_password_title")}
        </h2>
        <p className="font-ibm-medium text-start text-sm text-[#5B6161]">
          {t("otp_subtitle")}{" "}
          <span className="font-ibm-bold text-[#00512E]" dir="ltr">
            45** **** *****
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
                  hasError ? "border-red-500 " : "border-[#DDE0E0] "
                }`}
              />
            ))}
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            {timeLeft !== 0 && !hasError && (
              <p className="font-ibm-medium text-base text-[#5B6161]">
                ({formatTime(timeLeft)})
              </p>
            )}

            {timeLeft === 0 && (
              <button
                type="button"
                onClick={handleResend}
                className={`font-ibm-bold cursor-pointer text-base text-[#00512E] underline underline-offset-2`}
              >
                {t("resend_code")}
              </button>
            )}

            {hasError && (
              <p className="font-ibm-regular w-full text-start text-sm text-[#DD0417]">
                {t("otp_error")}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={otp.some((d) => !d)}
            className="font-ibm-semiBold mt-2 h-14 w-full cursor-pointer rounded-2xl bg-[#00512E] text-lg text-white shadow-lg transition-all hover:bg-[#003D22] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40 md:mt-4"
          >
            {t("confirm")}
          </button>
        </form>
      </div>
    </AuthBody>
  );
};
