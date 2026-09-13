import React, { useEffect, useRef, useState } from "react";

type Slide = {
  image: string;
  quote: string;
};

const slides: Slide[] = [
  {
    image: "/images/dining/dining-01.webp",
    quote: "“Good food brings people closer to what matters.”",
  },
  {
    image: "/images/dining/dining-02.webp",
    quote: "“Flavours become memories when shared slowly.”",
  },
  {
    image: "/images/dining/dining-03.webp",
    quote: "“From the land, thoughtfully prepared.”",
  },
  {
    image: "/images/dining/dining-04.webp",
    quote: "“A table is where moments begin.”",
  },
];

const features = [
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-9 w-9"
      >
        <path d="M24 42C24 42 24 27 24 16" />
        <path d="M24 27C17 27 12 23 11 16C18 15 23 19 24 27Z" />
        <path d="M24 34C31 34 36 30 37 23C30 22 25 26 24 34Z" />
        <path d="M24 20C29 20 33 16 34 10C28 10 24 14 24 20Z" />
      </svg>
    ),
    title: "Farm to Table",
  },
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-9 w-9"
      >
        <path d="M16 7H32L29 22C28 27 20 27 19 22L16 7Z" />
        <path d="M24 27V40" />
        <path d="M16 40H32" />
        <path d="M13 11H19" />
        <path d="M29 11H35" />
      </svg>
    ),
    title: "Curated Beverages",
  },
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-9 w-9"
      >
        <path d="M24 42C24 42 24 27 24 16" />
        <path d="M24 27C17 27 12 23 11 16C18 15 23 19 24 27Z" />
        <path d="M24 34C31 34 36 30 37 23C30 22 25 26 24 34Z" />
        <path d="M24 20C29 20 33 16 34 10C28 10 24 14 24 20Z" />
      </svg>
    ),
    title: "Seasonal Menus",
  },
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-9 w-9"
      >
        <circle cx="16" cy="17" r="4" />
        <circle cx="32" cy="17" r="4" />
        <circle cx="24" cy="14" r="4" />
        <path d="M9 35C9 29 12 25 16 25C20 25 23 29 23 35" />
        <path d="M25 35C25 29 28 25 32 25C36 25 39 29 39 35" />
        <path d="M16 35C16 28 19 23 24 23C29 23 32 28 32 35" />
      </svg>
    ),
    title: "Unforgettable Settings",
  },
];

export default function DiningSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  /*
   * SCROLL REVEAL
   */
  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.18,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  /*
   * AUTO CAROUSEL
   */
  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const previousSlide = () => {
    setActiveSlide(
      (current) => (current - 1 + slides.length) % slides.length
    );
  };

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  const reveal = (
    delay: number,
    extra = ""
  ) =>
    `${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"} 
     transition-all duration-1000 ease-out ${extra}`
      .trim()
      .concat(` delay-[${delay}ms]`);

  return (
    <section
      ref={sectionRef}
      className="relative isolate w-full overflow-hidden bg-[#F4F0E7] text-[#243B35]"
    >
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Large fine arc */}
        <div className="absolute -left-[8%] top-[-20%] h-[650px] w-[650px] rounded-full border border-[#9C9A7B]/25" />

        {/* Top atmospheric texture */}
        <div className="absolute left-0 right-0 top-0 h-32 bg-gradient-to-b from-[#D8D6C8]/35 to-transparent" />

        {/* Bottom atmospheric texture */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#DDD9CC]/35 to-transparent" />
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}

      <div className="relative mx-auto max-w-[1780px] px-5 pb-0 pt-14 sm:px-8 sm:pt-16 lg:px-16 lg:pt-20 xl:px-[8.5%]">
        <div className="grid items-center gap-12 lg:grid-cols-[0.83fr_1.17fr] lg:gap-8 xl:grid-cols-[0.82fr_1.18fr]">
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <div className="relative z-20 max-w-[590px] lg:pb-12">
            {/* Eyebrow */}
            <div className={reveal(100, "flex items-center gap-4")}>
              <span className="h-px w-12 bg-[#85875C]" />

              <span className="font-sans text-[10px] font-medium tracking-[0.38em] text-[#85875C] sm:text-[11px]">
                DINING AT PACIANO
              </span>
            </div>

            {/* Heading */}
            <h2
              className={reveal(
                250,
                "mt-8 max-w-[540px] font-serif text-[48px] font-normal leading-[0.93] tracking-[-0.035em] text-[#243B35] sm:text-[60px] md:text-[68px] lg:mt-9 lg:text-[62px] xl:text-[70px]"
              )}
            >
              A Table Set
              <br />
              by Nature.
            </h2>

            {/* Sub heading */}
            <p
              className={reveal(
                400,
                "mt-5 font-serif text-[27px] italic leading-none tracking-[-0.02em] text-[#85875C] sm:text-[32px] lg:text-[30px] xl:text-[34px]"
              )}
            >
              Flavours, Slowly Savoured.
            </p>

            {/* Description */}
            <p
              className={reveal(
                550,
                "mt-7 max-w-[535px] font-sans text-[14px] leading-[1.75] text-[#65706A] sm:text-[15px]"
              )}
            >
              Seasonal ingredients, locally sourced. Thoughtfully prepared.
              At Paciano, dining is a celebration of the land — where the
              valley’s harvest, rivers and forests inspire meaningful flavours
              and unhurried moments.
            </p>

            {/* Button */}
            <div className={reveal(700, "mt-8")}>
              <button
                type="button"
                className="group flex h-[56px] w-[220px] items-center justify-between rounded-full border border-[#9B9A68] px-7 font-sans text-[10px] font-medium tracking-[0.25em] text-[#405048] transition-all duration-300 hover:bg-[#405048] hover:text-white sm:h-[58px] sm:w-[230px]"
              >
                <span>DISCOVER DINING</span>

                <span className="text-[22px] font-light leading-none transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>

            {/* FROM LAND TO TABLE */}
            <div
              className={reveal(
                850,
                "mt-10 flex items-center gap-4 sm:mt-12"
              )}
            >
              <span className="font-sans text-[9px] font-medium tracking-[0.27em] text-[#85875C] sm:text-[10px]">
                FROM THE LAND
              </span>

              <span className="text-[#85875C]">•</span>

              <span className="font-sans text-[9px] font-medium tracking-[0.27em] text-[#85875C] sm:text-[10px]">
                TO THE TABLE
              </span>

              <span className="hidden h-px w-28 bg-[#85875C]/60 sm:block" />
            </div>
          </div>

          {/* =====================================================
              RIGHT IMAGE / CAROUSEL
          ====================================================== */}

          <div
            className={reveal(
              350,
              "relative min-w-0 lg:-mr-[2%] xl:-mr-[5%]"
            )}
          >
            {/* Main image frame */}
            <div className="relative ml-auto aspect-[1.53/1] w-full max-w-[910px] overflow-visible">
              {/* Actual rounded image */}
              <div className="absolute inset-0 overflow-hidden rounded-[28px] sm:rounded-[30px] lg:rounded-[32px]">
                {slides.map((slide, index) => (
                  <div
                    key={slide.image}
                    className={`absolute inset-0 transition-all duration-[1200ms] ease-in-out ${
                      index === activeSlide
                        ? "translate-x-0 scale-100 opacity-100"
                        : index < activeSlide
                        ? "-translate-x-full scale-[1.03] opacity-0"
                        : "translate-x-full scale-[1.03] opacity-0"
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt="Dining at Paciano"
                      className="h-full w-full object-cover"
                    />

                    {/* Image warmth / cinematic overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/5" />

                    {/* Quote */}
                    <div className="absolute right-5 top-5 flex max-w-[190px] gap-4 sm:right-8 sm:top-7 sm:max-w-[220px] lg:right-10 lg:top-8">
                      <div className="h-[62px] w-px shrink-0 bg-white/45" />

                      <p className="font-serif text-[16px] italic leading-[1.3] text-white/90 sm:text-[18px] lg:text-[19px]">
                        {slide.quote}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Bottom gradient */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/45 to-transparent" />

                {/* Carousel controls */}
                <div className="absolute bottom-4 right-4 flex items-center gap-3 sm:bottom-5 sm:right-6 lg:bottom-6 lg:right-7">
                  {/* Counter */}
                  <div className="mr-1 flex items-center gap-3 font-sans text-[9px] tracking-[0.15em] text-white/85 sm:text-[10px]">
                    <span>
                      {String(activeSlide + 1).padStart(2, "0")}
                    </span>

                    <span className="h-px w-20 bg-white/80 sm:w-24 lg:w-28" />

                    <span>
                      {String(slides.length).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Previous */}
                  <button
                    type="button"
                    aria-label="Previous dining image"
                    onClick={previousSlide}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/75 text-white transition-all duration-300 hover:bg-white hover:text-[#243B35] sm:h-12 sm:w-12"
                  >
                    <span className="text-[21px] font-light">←</span>
                  </button>

                  {/* Next */}
                  <button
                    type="button"
                    aria-label="Next dining image"
                    onClick={nextSlide}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/75 text-white transition-all duration-300 hover:bg-white hover:text-[#243B35] sm:h-12 sm:w-12"
                  >
                    <span className="text-[21px] font-light">→</span>
                  </button>
                </div>
              </div>

              {/* =================================================
                  DISH IMAGE OVERLAP
              ================================================== */}

              <div
                className={`absolute -bottom-1 left-[-4%] z-30 aspect-[1.05/1] w-[32%] min-w-[185px] overflow-hidden rounded-[24px] border-[2px] border-[#F4F0E7] shadow-[0_18px_45px_rgba(40,45,35,0.18)] transition-all delay-[650ms] duration-1000 ease-out sm:rounded-[26px] lg:left-[-8%] lg:w-[33%] ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <img
                  src="/images/dining/dining-dish.webp"
                  alt="Paciano cuisine"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* =================================================
                  LEAF PNG
              ================================================== */}

              <img
                src="/images/paciano-leaves.png"
                alt=""
                aria-hidden="true"
                className={`pointer-events-none absolute bottom-[-105px] left-[-8%] z-40 w-[180px] origin-bottom-left transition-all delay-[900ms] duration-1000 ease-out sm:bottom-[-125px] sm:w-[220px] lg:bottom-[-155px] lg:left-[-15%] lg:w-[280px] ${
                  isVisible
                    ? "translate-y-0 rotate-0 opacity-70"
                    : "translate-y-10 -rotate-6 opacity-0"
                }`}
              />

              {/* Small caption beside leaf */}
              <div
                className={`absolute -bottom-[85px] left-[18%] z-40 hidden items-center gap-5 transition-all delay-[1050ms] duration-1000 ease-out sm:flex lg:left-[20%] ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
              >
                <span className="h-9 w-px bg-[#85875C]/60" />

                <p className="max-w-[135px] font-serif text-[14px] italic leading-[1.25] text-[#737667]">
                  Locally sourced,
                  <br />
                  thoughtfully prepared.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM FEATURE BAR
      ========================================================== */}

      <div
        className={`relative z-20 mt-[115px] border-t border-[#D9D5C8] bg-[#F1EDE3]/75 transition-all delay-[1100ms] duration-1000 ease-out ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }`}
      >
        <div className="mx-auto grid max-w-[1780px] grid-cols-2 lg:grid-cols-4 lg:px-[7%]">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex min-h-[105px] items-center justify-center gap-4 px-4 py-6 sm:min-h-[120px] ${
                index !== 0
                  ? "border-l border-[#D1CEC1]"
                  : ""
              }`}
            >
              <div className="shrink-0 text-[#53645C]">{feature.icon}</div>

              <span className="font-serif text-[14px] text-[#53615A] sm:text-[15px]">
                {feature.title}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom-right decorative leaf */}
        <img
          src="/images/paciano-leaf-small.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-35px] right-[3%] hidden w-[150px] opacity-35 lg:block"
        />

        <div className="absolute bottom-5 right-[4%] hidden text-right lg:block">
          <p className="font-sans text-[8px] leading-[1.5] tracking-[0.18em] text-[#8A8A78]">
            GOOD FOOD.
            <br />
            A DEEPER CONNECTION.
          </p>
        </div>
      </div>
    </section>
  );
}