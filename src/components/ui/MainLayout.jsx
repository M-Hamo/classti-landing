import { Header } from "./Header";
import { Footer } from "./Footer";

import heroBg from "../../assets/images/Hero Section.png";

export const MainLayout = ({ children }) => {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-stretch justify-start pb-8 md:pb-12">
      <div
        className="pointer-events-none absolute inset-0 h-[755px] w-auto overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>

      <Header />

      {children}

      <Footer />
    </section>
  );
};
