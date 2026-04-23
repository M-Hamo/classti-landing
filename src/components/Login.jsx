// import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Login() {
  // const { t } = useTranslation();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0c] p-8 text-white">
      <div className="w-full max-w-md space-y-8 rounded-xl border border-neutral-800 bg-[#111114] p-8 shadow-2xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">Login to Classti</h2>
          <p className="mt-2 text-sm text-neutral-400">
            Welcome back! Please enter your details.
          </p>
        </div>

        <form className="mt-8 space-y-6">
          <div className="space-y-4 rounded-md">
            <div>
              <label
                htmlFor="email-address"
                className="block text-sm font-medium text-neutral-300"
              >
                Email Address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1 block w-full rounded-md border border-neutral-800 bg-[#0a0a0c] px-3 py-2 text-white placeholder-neutral-500 focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1] focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-neutral-300"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="mt-1 block w-full rounded-md border border-neutral-800 bg-[#0a0a0c] px-3 py-2 text-white placeholder-neutral-500 focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1] focus:outline-none"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="hover:bg-opacity-90 flex w-full justify-center rounded-md bg-[#6366f1] px-4 py-2 text-sm font-semibold text-white transition-all active:scale-95"
            >
              Sign in
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-sm text-neutral-400">
            Don't have an account?{" "}
            <Link to="/register" className="font-medium text-[#6366f1] hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
