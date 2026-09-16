import React, { useEffect, useRef, useState } from "react";

import diningstory from "@/images/dining-story.png";
import diningOne from "@/images/dining-1.png";
import diningTwo from "@/images/dining-2.png";
import diningFour from "@/images/story.png";
import diningLeaf from "@/images/dining-leaf.png";
import diningLeaf2 from "@/images/dining-leaf2.png";
import diningLeaf3 from "@/images/dining-leaf3.png";
import smallDining from "@/images/small-dining1.png";

type Slide = {
  image: string;
  quote: string;
};

const slides: Slide[] = [
  {
    image: diningstory,
    quote: "“Good food brings people closer to what matters.”",
  },
  {
    image: diningOne,
    quote: "“Flavours become memories when shared slowly.”",
  },
  {
    image: diningTwo,
    quote: "“From the land, thoughtfully prepared.”",
  },
  {
    image: diningFour,
    quote: "“A table is where moments begin.”",
  },
];

export default function DiningSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  /* =========================================================
     REPEATING SCROLL REVEAL
  ========================================================= */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        /*
         * Reset when leaving viewport.
         * This is important because the animation should
         * replay when user scrolls back up.
         */
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -12% 0px",
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  /* =========================================================
     AUTO CAROUSEL
  ========================================================= */

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  const previousSlide = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  /*
   * Each element gets its own delay.
   */
  const reveal = (
    delay: number,
    hidden = "translate-y-8 opacity-0",
    visible = "translate-y-0 opacity-100",
  ) => ({
    className: `
    ${isVisible ? visible : hidden}
    transition-all
    duration-[1100ms]
    ease-[cubic-bezier(0.22,1,0.36,1)]
  `,
    style: {
      transitionDelay: `${delay}ms`,
    },
  });

  return (
    <section
      ref={sectionRef}
      className="relative isolate z-10 w-full overflow-hidden bg-[#F4F0E7] text-[#263C35]"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Soft bottom atmosphere */}
        <div className="absolute inset-x-0 bottom-0 h-[170px] bg-gradient-to-t from-[#E2DED1]/35 to-transparent" />
      </div>

      {/* =====================================================
          MAIN
      ====================================================== */}

      <div className="relative mx-auto max-w-[1780px] px-5 pb-0 pt-4 sm:px-8 sm:pt-5 lg:px-16 lg:pt-[22px] xl:px-[8.6%]">
        <div className="grid items-center lg:grid-cols-[0.82fr_1.18fr] lg:gap-10 xl:gap-14">
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="relative z-20 max-w-[575px] lg:pb-[55px]">
            {/* EYEBROW */}

            <div
              className={`flex items-center gap-4 ${
                reveal(
                  100,
                  "translate-y-5 opacity-0",
                  "translate-y-0 opacity-100",
                ).className
              }`}
              style={
                reveal(
                  100,
                  "translate-y-5 opacity-0",
                  "translate-y-0 opacity-100",
                ).style
              }
            >
              {/* <span className="h-px w-12 shrink-0 bg-[#85875C]" /> */}
              <div
                className=" 
            mb-[25px]

            flex
            items-center
            gap-[10px]
          "
              >
                <svg
                  viewBox="0 0 32 32"
                  className="
              h-[21px]
              w-[21px]
              text-[#71863D]
            "
                  fill="none"
                >
                  <path
                    d="M16 27C16 19 18 12 23 5"
                    stroke="currentColor"
                    strokeWidth="1"
                  />

                  <path
                    d="
                M17 19
                C10 17 7 12 8 7
                C14 8 18 13 18 18
              "
                    fill="currentColor"
                    opacity=".8"
                  />

                  <path
                    d="
                M19 14
                C20 8 25 5 29 7
                C27 12 24 15 19 16
              "
                    fill="currentColor"
                    opacity=".5"
                  />
                </svg>

                <span
                  className="
              font-manrope
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.31em]
              text-[#68753F]
            "
                >
                  DINING AT PACIANO
                </span>
              </div>
            </div>

            {/* =================================================
                MAIN HEADING
            ================================================= */}

            <h2
              className={`
                font-cormorant
                text-[45px]
                leading-[0.91]
                tracking-[-0.035em]
                text-[#17251B]
                sm:text-[65px]
                lg:text-[72px]
                xl:text-[67px]

                ${
                  reveal(
                    350,
                    "translate-y-10 opacity-0",
                    "translate-y-0 opacity-100",
                  ).className
                }
              `}
              style={
                reveal(
                  250,
                  "translate-y-8 opacity-0",
                  "translate-y-0 opacity-100",
                ).style
              }
            >
              <span className="block">Dining, Inspired By</span>

              <span className="block">Nature.</span>

              <span
                className="
              mt-[3px]
              block

              italic
              text-[51px] 
              font-normal

              text-[#78943F]
            "
              >
                Flavours, Slowly Savoured.
              </span>
            </h2>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p
              className={`
                mt-[32px]
                max-w-[400px]

                font-manrope
                text-[12px]
                leading-[1.85]

                text-[#50584F]

                sm:text-[15px]

                ${
                  reveal(
                    600,
                    "translate-y-7 opacity-0",
                    "translate-y-0 opacity-100",
                  ).className
                }
              `}
              style={
                reveal(
                  430,
                  "translate-y-6 opacity-0",
                  "translate-y-0 opacity-100",
                ).style
              }
            >
              Seasonal ingredients, locally sourced. Thoughtfully prepared. At
              Paciano, dining is a celebration of the land — where the valley’s
              harvest, rivers and forests inspire meaningful flavours and
              unhurried moments.
            </p>

            {/* =================================================
                BUTTON
            ================================================= */}

            <div
              className={`mt-[34px] ${
                reveal(
                  850,
                  "translate-y-7 opacity-0",
                  "translate-y-0 opacity-100",
                ).className
              }`}
              style={
                reveal(
                  850,
                  "translate-y-7 opacity-0",
                  "translate-y-0 opacity-100",
                ).style
              }
            >
              <button
                type="button"
                className="
                  group
                  relative
                  flex
                  h-[60px]
                  w-[245px]
                  items-center
                  justify-between
                  overflow-hidden
                  rounded-full

                  border
                  border-[#96976A]

                  bg-[#F4F0E7]

                  pl-[27px]
                  pr-[7px]

                  font-manrope
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]

                  text-[#34463E]

                  shadow-[0_8px_25px_rgba(57,65,50,0.04)]

                  transition-all
                  duration-700
                  ease-[cubic-bezier(0.22,1,0.36,1)]

                  hover:border-[#34463E]
                  hover:shadow-[0_18px_38px_rgba(45,58,48,0.13)]
                "
              >
                {/* DARK GREEN REVEAL */}

                <span
                  className="
                    absolute
                    inset-0
                    z-0

                    origin-left
                    scale-x-0

                    bg-[#30463D]

                    transition-transform
                    duration-[750ms]
                    ease-[cubic-bezier(0.22,1,0.36,1)]

                    group-hover:scale-x-100
                  "
                />

                {/* TEXT */}

                <span
                  className="
                    relative
                    z-10

                    transition-all
                    duration-500

                    group-hover:translate-x-[2px]
                    group-hover:text-[#F5F1E8]
                  "
                >
                  Discover Dining
                </span>

                {/* ARROW CIRCLE */}

                <span
                  className="
                    relative
                    z-10

                    flex
                    h-[46px]
                    w-[46px]
                    shrink-0
                    items-center
                    justify-center

                    rounded-full

                    border
                    border-[#96976A]

                    bg-[#F4F0E7]

                    text-[#34463E]

                    transition-all
                    duration-700
                    ease-[cubic-bezier(0.22,1,0.36,1)]

                    group-hover:border-[#F4F0E7]
                    group-hover:shadow-[0_4px_16px_rgba(0,0,0,0.10)]
                  "
                >
                  <span
                    className="
                      relative
                      text-[18px]
                      font-light
                      leading-none

                      transition-transform
                      duration-700
                      ease-[cubic-bezier(0.22,1,0.36,1)]

                      group-hover:translate-x-[4px]
                    "
                  >
                    →
                  </span>
                </span>

                {/* LITTLE UNDERLINE */}

                <span
                  className="
                    absolute
                    bottom-[7px]
                    left-[28px]
                    z-10

                    h-px
                    w-[20px]

                    bg-[#A3A36D]

                    opacity-80

                    transition-all
                    duration-500

                    group-hover:w-[30px]
                    group-hover:bg-[#D5C98B]
                  "
                />
              </button>
            </div>
          </div>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div
            className={`relative min-w-0 lg:-mr-[4%] xl:-mr-[7%] ${
              reveal(
                250,
                "translate-x-12 scale-[1.025] opacity-0",
                "translate-x-0 scale-100 opacity-100",
              ).className
            }
              duration-[1900ms]
            `}
            style={
              reveal(
                250,
                "translate-x-12 scale-[1.025] opacity-0",
                "translate-x-0 scale-100 opacity-100",
              ).style
            }
          >
            <div className="relative ml-auto aspect-[1.54/1] w-full max-w-[920px] overflow-visible">
              {/* =============================================
                  MAIN CAROUSEL
              ============================================== */}

              <div className="absolute inset-0 overflow-hidden rounded-[25px] sm:rounded-[30px] lg:rounded-[32px]">
                {slides.map((slide, index) => (
                  <div
                    key={slide.image}
                    className={`absolute inset-0 transition-all duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      index === activeSlide
                        ? "translate-x-0 scale-100 opacity-100"
                        : index < activeSlide
                          ? "-translate-x-[8%] scale-[1.035] opacity-0"
                          : "translate-x-[8%] scale-[1.035] opacity-0"
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt="Dining at Paciano"
                      className="h-full w-full object-cover"
                    />

                    {/* Luxury warm overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#3B3525]/10 via-transparent to-[#111B16]/30" />

                    {/* Bottom cinematic shade */}
                    <div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-[#111611]/55 to-transparent" />

                    {/* QUOTE */}

                    <div className="absolute right-5 top-5 flex max-w-[205px] gap-4 sm:right-8 sm:top-7 sm:max-w-[225px] lg:right-10 lg:top-8">
                      <span className="h-[66px] w-px shrink-0 bg-white/45" />

                      <p className="font-['Cormorant_Garamond'] text-[17px] italic leading-[1.28] text-white/90 sm:text-[19px]">
                        {slide.quote}
                      </p>
                    </div>
                  </div>
                ))}

                {/* ===========================================
                    CAROUSEL CONTROLS
                ============================================ */}

                <div className="absolute bottom-4 right-4 flex items-center gap-3 sm:bottom-5 sm:right-6 lg:bottom-6 lg:right-7">
                  <div className="mr-1 flex items-center gap-3 font-sans text-[9px] tracking-[0.16em] text-white/85 sm:text-[10px]">
                    <span>{String(activeSlide + 1).padStart(2, "0")}</span>

                    <span className="h-px w-[62px] bg-white/80 sm:w-[88px] lg:w-[105px]" />

                    <span>{String(slides.length).padStart(2, "0")}</span>
                  </div>

                  <button
                    type="button"
                    aria-label="Previous dining image"
                    onClick={previousSlide}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/75 text-white transition-all duration-400 hover:bg-white hover:text-[#243A34] sm:h-12 sm:w-12"
                  >
                    <span className="text-[20px] font-light">←</span>
                  </button>

                  <button
                    type="button"
                    aria-label="Next dining image"
                    onClick={nextSlide}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/75 text-white transition-all duration-400 hover:bg-white hover:text-[#243A34] sm:h-12 sm:w-12"
                  >
                    <span className="text-[20px] font-light">→</span>
                  </button>
                </div>
              </div>

              {/* =============================================
                  FLOATING FOOD IMAGE
              ============================================== */}

              <div
                className={`absolute -bottom-[2px] left-[-5%] z-30 aspect-[1.06/1] w-[33%] min-w-[170px] overflow-visible sm:left-[-6%] sm:min-w-[190px] lg:left-[-8%] lg:w-[32%] ${
                  isVisible
                    ? "translate-y-0 scale-100 opacity-100"
                    : "translate-y-14 scale-[0.96] opacity-0"
                }
                transition-all
                delay-[950ms]
                duration-[1700ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]`}
              >
                <div className="h-full w-full animate-paciano-float">
                  <div className="h-full w-full overflow-hidden rounded-[22px] border-[2px] border-[#F4F0E7] shadow-[0_20px_55px_rgba(45,48,38,0.20)] sm:rounded-[25px]">
                    <img
                      src={smallDining}
                      alt="Paciano cuisine"
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-[1400ms]
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        hover:scale-[1.025]
                      "
                    />
                  </div>
                </div>
              </div>

              {/* =============================================
                  LEAF CAPTION
              ============================================== */}

              <div
                className={`absolute -bottom-[78px] left-[17%] z-20 hidden items-center gap-5 sm:flex lg:left-[19%] ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                } transition-all delay-[1080ms] duration-[1000ms] ease-out`}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          PACIANO DINING SIGNATURE
      ========================================================== */}

      <div
        className={`
        relative
        z-20
        mt-[48px]
        mb-[34px]
        flex
        items-center
        justify-center
        gap-5

        transition-all
        duration-[1200ms]
        ease-[cubic-bezier(0.22,1,0.36,1)]

        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}
      `}
        style={{ transitionDelay: "1250ms" }}
      >
        {/* LEFT HAIRLINE */}

        <span
          className="
          h-px
          w-[55px]
          bg-[#9A9A70]/55

          sm:w-[80px]
          lg:w-[105px]
        "
        />

        {/* SIGNATURE */}

        <span
          className="
      font-manrope
      text-[9px]
      font-medium
      uppercase
      tracking-[0.38em]
      text-[#7B8052]

      sm:text-[10px]
    "
        >
          THE TASTE OF PACIANO
        </span>

        {/* RIGHT HAIRLINE */}

        <span
          className="
      h-px
      w-[55px]
      bg-[#9A9A70]/55

      sm:w-[80px]
      lg:w-[105px]
    "
        />
      </div>
    </section>
  );
}
