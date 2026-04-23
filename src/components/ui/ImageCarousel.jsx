import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";

export const ImageCarousel = ({ images = [], duration = 3000, className = "" }) => {
  const { i18n } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const isRTL = i18n.language === "ar";
  const minSwipeDistance = 50;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!images || images.length === 0 || isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, duration);

    return () => clearInterval(interval);
  }, [images.length, duration, images, currentIndex, isPaused, nextSlide]);

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    setIsPaused(false);
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      isRTL ? prevSlide() : nextSlide();
    } else if (isRightSwipe) {
      isRTL ? nextSlide() : prevSlide();
    }
  };

  if (!images || images.length === 0) return null;

  return (
    <div
      className={`relative rounded-2xl ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <img
        src={images[0]}
        alt="placeholder"
        className="invisible block h-auto w-full object-cover"
      />

      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index + 1}`}
          className={`absolute top-0 left-0 h-full w-full rounded-2xl object-cover transition-opacity duration-700 ease-in-out ${
            currentIndex === index ? "z-10 opacity-100" : "z-0 opacity-0"
          }`}
        />
      ))}

      <div className="absolute -bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setIsPaused(false);
            }}
            className={`cursor-pointer rounded-full border-none transition-all duration-300 outline-none active:scale-[0.98] ${
              currentIndex === index
                ? "h-3 w-3 bg-[#00512E] shadow-sm"
                : "h-2 w-2 bg-[#00512E]/20 shadow-sm hover:bg-[#00512E]/30"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
