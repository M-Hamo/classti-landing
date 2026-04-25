// import { useTranslation, Trans } from "react-i18next";
import { Header } from "./ui/Header";
import { MainBanner } from "./ui/MainBanner";
import { AboutUs } from "./ui/AboutUs";
import { ImageCarousel } from "./ui/ImageCarousel";
import { Features } from "./ui/Features";
import { Applications } from "./ui/Applications";
import { ContactUs } from "./ui/ContactUs";
import { Footer } from "./ui/Footer";

import heroBg from "../assets/images/Hero Section.png";
import banner1 from "../assets/images/banner-1.jpeg";
import banner2 from "../assets/images/banner-2.jpeg";
import banner3 from "../assets/images/banner-3.jpeg";

export const Home = () => {
  // const { t } = useTranslation();
  const bannerImages = [banner1, banner2, banner3];

  return (
    <section className="relative flex min-h-screen w-full flex-col items-stretch justify-start pb-8 md:pb-12">
      <div
        className="pointer-events-none absolute inset-0 h-[755px] w-auto overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>

      <Header />

      <main
        id="main"
        className="relative z-10 flex flex-1 flex-col items-center gap-4 px-4 pt-11 md:pt-16"
      >
        <MainBanner />

        <section className="mt-2 flex w-full flex-col items-stretch justify-start gap-6 md:mt-11 md:w-[90%] md:gap-15">
          <AboutUs />
          <ImageCarousel
            images={bannerImages}
            className="mt-4 h-[200px] shadow-sm shadow-[#E6E6E6] md:mt-0 md:h-auto"
          />
          <Features />
          <Applications />
          <ContactUs />
        </section>
      </main>

      <Footer />
    </section>
  );
};
