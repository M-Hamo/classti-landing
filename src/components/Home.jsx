import { MainBanner } from "./ui/MainBanner";
import { AboutUs } from "./ui/AboutUs";
import { ImageCarousel } from "./ui/ImageCarousel";
import { Features } from "./ui/Features";
import { Applications } from "./ui/Applications";
import { ContactUs } from "./ui/ContactUs";
import { MainLayout } from "./ui/MainLayout";

import banner1 from "../assets/images/banner-1.jpeg";
import banner2 from "../assets/images/banner-2.jpeg";
import banner3 from "../assets/images/banner-3.jpeg";

export const Home = () => {
  const bannerImages = [banner1, banner2, banner3];

  return (
    <MainLayout>
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
    </MainLayout>
  );
};
