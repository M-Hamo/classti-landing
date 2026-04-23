import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0c] p-8 text-white">
      <h1 className="text-9xl font-extrabold tracking-widest text-[#6366f1]">404</h1>
      <div className="absolute rotate-12 rounded bg-neutral-800 px-2 text-sm text-white">
        Page Not Found
      </div>
      <button className="mt-5">
        <Link
          to="/"
          className="group relative inline-block text-sm font-medium text-[#6366f1] focus:outline-none focus:ring active:text-[#4f46e5]"
        >
          <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-[#6366f1] transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="relative block border border-current bg-[#0a0a0c] px-8 py-3">
            Go Home
          </span>
        </Link>
      </button>
    </div>
  );
}

export default NotFound;
