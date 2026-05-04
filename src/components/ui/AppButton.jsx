export const AppButton = ({
  children,
  text,
  type = "submit",
  disabled = false,
  loading = false,
  className = "",
  onClick,
  ...props
}) => {
  const isDisabled = loading || disabled;
  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      className={`font-ibm-semiBold mt-2 flex h-14 w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[#00512E] text-lg text-white shadow-lg transition-all hover:bg-[#003D22] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none disabled:hover:bg-[#00512E] disabled:active:scale-100 md:mt-6 ${className}`}
      {...props}
    >
      {loading && (
        <svg className="mr-3 size-5 animate-spin ..." viewBox="0 0 24 24">
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-14v8h4v-8h-4z"
            fill="currentColor"
          />
        </svg>
      )}

      {text || children}
    </button>
  );
};
