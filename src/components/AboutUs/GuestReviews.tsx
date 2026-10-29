import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, ExternalLink, Star } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

import botanicalLeaves from "@/images/about/about-guest-leaf.png";
import leafWhisper from "@/images/button-leaf.png";

type GuestReview = {
  name: string;
  date: string;
  text: string;
};

// Replace these sample entries with actual, approved guest reviews.
const reviews: GuestReview[] = [
  {
    name: "Guest Review",
    date: "Recent stay",
    text: "A wonderful setting surrounded by nature, with warm hospitality and thoughtful details that made our stay memorable.",
  },
  {
    name: "Guest Review",
    date: "Recent stay",
    text: "Beautiful surroundings, peaceful views and a lovely atmosphere. A perfect place to slow down and reconnect.",
  },
  {
    name: "Guest Review",
    date: "Recent stay",
    text: "A relaxing experience with scenic landscapes and welcoming service. We would love to return for another getaway.",
  },
  {
    name: "Guest Review",
    date: "Recent stay",
    text: "A charming retreat with lovely views and a calm atmosphere. A refreshing escape from everyday routines.",
  },
  {
    name: "Guest Review",
    date: "Recent stay",
    text: "Thoughtful hospitality and beautiful surroundings made this a stay worth remembering.",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function GuestReviews() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const instant = Boolean(reduceMotion);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      const isMobileLandscape = width > height && height <= 500 && width <= 950;

      if (isMobileLandscape) {
        setVisibleCount(1);
      } else {
        setVisibleCount(width < 640 ? 1 : width < 1024 ? 2 : 3);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => {
      window.removeEventListener("resize", updateVisibleCount);
    };
  }, []);

  const maxIndex = Math.max(0, reviews.length - visibleCount);

  const goNext = () => {
    setCurrentIndex((index) => (index >= maxIndex ? 0 : index + 1));
  };

  const goPrevious = () => {
    setCurrentIndex((index) => (index <= 0 ? maxIndex : index - 1));
  };

  const visibleReviews = reviews.slice(
    currentIndex,
    currentIndex + visibleCount,
  );

  const totalPages = maxIndex + 1;

  return (
    <section
      id="guest-reviews"
      aria-labelledby="guest-reviews-heading"
      className="
        relative isolate w-full overflow-hidden
        bg-[#F2EBDD] text-[#20382C]
        py-20 sm:py-24 lg:py-28
      "
    >
      {/* Warm background texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(
              ellipse at 50% 45%,
              rgba(255,255,255,0.40) 0%,
              transparent 68%
            ),
            linear-gradient(
              135deg,
              #F2EBDD 0%,
              #EFE5D3 52%,
              #F2EBDD 100%
            )
          `,
        }}
      />

      {/* Upper-left botanical cutout */}
      <motion.img
        src={botanicalLeaves}
        alt=""
        aria-hidden="true"
        draggable={false}
        initial={reduceMotion ? false : { opacity: 0, x: -35, rotate: -8 }}
        whileInView={{
          opacity: 0.9,
          x: 0,
          rotate: 0,
        }}
        viewport={{ once: true, amount: 0.15 }}
        animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
        transition={{
          opacity: { duration: 1.2 },
          x: { duration: 1.2, ease: "easeOut" },
          rotate: { duration: 1.2 },
          y: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="
          pointer-events-none absolute
          -left-16 -top-8 z-0
          w-44 opacity-80
          sm:-left-20 sm:-top-10 sm:w-60
          md:-left-24 md:w-72
          lg:-left-28 lg:w-80
        "
      />

      {/* Lower-right botanical cutout — grounded in the corner */}
      <motion.img
        src={botanicalLeaves}
        alt=""
        aria-hidden="true"
        draggable={false}
        initial={reduceMotion ? false : { opacity: 0, x: 30, rotate: 10 }}
        whileInView={{
          opacity: 0.72,
          x: 0,
          rotate: 0,
        }}
        viewport={{ once: true, amount: 0.12 }}
        animate={reduceMotion ? undefined : { y: [0, -3, 0] }}
        transition={{
          opacity: { duration: 1.5, delay: 0.15 },
          x: { duration: 1.5, delay: 0.15, ease: "easeOut" },
          rotate: { duration: 1.5, ease: "easeOut" },
          y: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="
        pointer-events-none
        absolute
        -right-20 bottom-[-35px]
        z-0
        w-52
        -scale-x-100
        rotate-[18deg]
        opacity-70

        sm:-right-24 sm:bottom-[-40px] sm:w-64
        md:-right-28 md:w-80
        lg:-right-32 lg:bottom-[-45px] lg:w-[360px]
        "
      />

      <div
        className="
          relative z-10 mx-auto w-full max-w-[1440px]
          px-5 sm:px-8 md:px-12 lg:px-16
        "
      >
        {/* Header */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="
            mb-10 flex flex-col gap-7
            md:mb-14 md:flex-row md:items-end
            md:justify-between
          "
        >
          <div className="max-w-3xl">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: instant ? 0 : 1.1,
                delay: instant ? 0 : 0.1,
              }}
              className="
                mb-5 flex items-center gap-3
                sm:mb-6
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
                Words That Stay With You
              </span>
            </motion.div>

            <h2
              id="guest-reviews-heading"
              className="
                font-cormorant text-[36px]
                font-medium leading-[1.02]
                tracking-[-0.035em]
                sm:text-[46px]
                md:text-[52px]
                lg:text-[60px]
              "
            >
              Loved by Our Guests.
              <span className="mt-1 block italic text-[#87966D]">
                Real Stories, Lasting Memories.
              </span>
            </h2>
          </div>

          {/* Google rating summary */}
          <motion.div
            variants={reveal}
            className="
              flex w-fit items-center gap-3
              rounded-2xl border border-[#D8CEB8]/70
              bg-white/35 px-4 py-3
              backdrop-blur-sm sm:px-5
            "
          >
            <div
              className="
                flex h-12 w-12 shrink-0 items-center
                justify-center rounded-full bg-white
                shadow-[0_4px_18px_rgba(74,62,42,0.07)]
              "
              aria-hidden="true"
            >
              <span className="font-sans text-[30px] font-bold">
                <FcGoogle size={32} aria-label="Google" role="img" />
              </span>
            </div>

            <div>
              <p className="text-sm font-semibold text-[#24372C]">
                Google Reviews
              </p>

              {/* Replace with the verified live rating and count */}
              <div className="mt-1 flex items-center gap-2">
                <span className="text-sm font-semibold">View our reviews</span>

                <span className="flex items-center gap-0.5 text-[#D9A441]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={11}
                      fill="currentColor"
                      strokeWidth={1}
                    />
                  ))}
                </span>
              </div>

              <p className="mt-1 text-[10px] text-[#777466]">
                Guest experiences, shared honestly
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Review cards */}
        <div className="relative">
          <div
            aria-live="polite"
            aria-atomic="true"
            className="
              grid grid-cols-1 items-stretch
              gap-4 sm:grid-cols-2
              lg:grid-cols-3 lg:gap-5
              [@media(orientation:landscape)_and_(max-height:500px)_and_(max-width:950px)]:grid-cols-1
            "
          >
            {visibleReviews.map((review, index) => (
              <motion.article
                key={`${currentIndex}-${review.text}`}
                initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.7,
                  delay: reduceMotion ? 0 : index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  group relative flex min-h-[250px]
                  flex-col justify-between
                  overflow-hidden rounded-[24px]
                  border border-[#DED4C0]/80
                  bg-[#FBF7EF]/80 p-5
                  shadow-[0_8px_24px_rgba(72,59,37,0.055)]
                  transition-[background-color,border-color,box-shadow]
                  duration-500
                  hover:border-[#B6BE98]
                  hover:bg-white/70
                  hover:shadow-[0_14px_32px_rgba(72,59,37,0.09)]
                  sm:p-6 md:min-h-[275px] md:p-7
                "
              >
                <div>
                  <span
                    aria-hidden="true"
                    className="
                        mb-2 block
                        font-cormorant
                        text-[54px]
                        leading-[0.7]
                        text-[#87966D]
                        transition-transform
                        duration-500
                        group-hover:-translate-y-1
                    "
                  >
                    “
                  </span>

                  <p
                    className="
                    text-[14px] leading-[1.85]
                    text-[#625F53]
                    sm:text-[14px]
                    md:text-[15px]
                  "
                  >
                    {review.text}
                  </p>
                </div>

                <div
                  className="
                  mt-7 flex items-center
                  justify-between gap-3
                  border-t border-[#E7DECE]
                  pt-4
                "
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div
                      className="
                        flex h-10 w-10 shrink-0
                        items-center justify-center
                        rounded-full border border-[#E5DDCE]
                        bg-white
                        shadow-[0_2px_8px_rgba(72,59,37,0.06)]
                    "
                      aria-label="Google reviewer"
                    >
                      <FcGoogle size={25} />
                    </div>

                    <div className="min-w-0">
                      <p
                        className="
                        truncate text-[12px]
                        font-semibold text-[#29392E]
                      "
                      >
                        {review.name}
                      </p>

                      <p
                        className="
                        mt-1 text-[10px]
                        text-[#898475]
                      "
                      >
                        {review.date}
                      </p>
                    </div>
                  </div>

                  <span
                    aria-label="Google review"
                    className="
                      shrink-0 font-sans
                      text-xl font-bold
                      text-[#4285F4]
                    "
                  >
                    <FcGoogle
                      size={22}
                      aria-label="Google review"
                      role="img"
                      className="shrink-0"
                    />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Carousel controls */}
          <div
            className="
            mt-7 flex items-center
            justify-center gap-5 sm:gap-7
          "
          >
            <button
              type="button"
              onClick={goPrevious}
              aria-label="Previous guest reviews"
              className="
                flex h-10 w-10 shrink-0
                items-center justify-center
                rounded-full border border-[#C8CDAF]
                text-[#45563A]
                transition-all duration-300
                hover:border-[#738355]
                hover:bg-[#E5E7D7]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#87966D]
              "
            >
              <ArrowLeft size={17} />
            </button>

            <div
              className="flex items-center gap-1.5"
              aria-label={`Review page ${currentIndex + 1} of ${totalPages}`}
            >
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Show review page ${index + 1}`}
                  aria-current={currentIndex === index ? "true" : undefined}
                  onClick={() => setCurrentIndex(index)}
                  className={`
                    h-[4px] rounded-full
                    transition-all duration-500
                    ${
                      currentIndex === index
                        ? "w-10 bg-[#405638]"
                        : "w-5 bg-[#D6D4BD] hover:bg-[#A8B08B]"
                    }
                  `}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next guest reviews"
              className="
                flex h-10 w-10 shrink-0
                items-center justify-center
                rounded-full border border-[#C8CDAF]
                text-[#45563A]
                transition-all duration-300
                hover:border-[#738355]
                hover:bg-[#E5E7D7]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#87966D]
              "
            >
              <ArrowRight size={17} />
            </button>
          </div>
        </div>

        {/* Google reviews CTA */}

        <motion.div
          initial={instant ? false : { opacity: 0, y: 28, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: instant ? 0 : 1.4,
            delay: instant ? 0 : 0.45,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-9 flex justify-center sm:mt-11"
        >
          <a
            href="https://www.google.com/search?q=Paciano+Hospitality+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="
                group
                relative

                inline-flex
                h-[52px]
                min-w-[235px]

                items-center
                justify-between

                overflow-visible
                rounded-full

                border
                border-[#B8B98B]/75

                bg-gradient-to-b
                from-[#5A6440]
                via-[#4D5736]
                to-[#414A2F]

                px-[10px]
                pl-[64px]
                pr-[9px]

                text-[#F4EFE4]

                shadow-[0_8px_24px_rgba(39,46,26,0.22),inset_0_1px_0_rgba(255,255,255,0.16)]

                transition-all
                duration-700
                ease-[cubic-bezier(.22,1,.36,1)]

                hover:-translate-y-[3px]
                hover:scale-[1.015]
                hover:border-[#D0C89B]
                hover:shadow-[0_16px_36px_rgba(39,46,26,0.30),inset_0_1px_0_rgba(255,255,255,0.20)]
              "
          >
            {/* ===================================================
                  SOFT GOLDEN INNER GLOW
              ==================================================== */}

            <span
              className="
                  pointer-events-none
                  absolute
                  inset-[1px]
                  rounded-full

                  bg-gradient-to-b
                  from-[#D8D3A8]/[0.10]
                  via-transparent
                  to-[#1F2818]/[0.16]

                  opacity-100
                "
            />

            {/* ===================================================
                  LUXURY SHINE BAND
                  Visible by default + stronger on hover
              ==================================================== */}

            <span
              className="
        pointer-events-none
        absolute
        left-[24%]
        top-[3px]

        h-[46px]
        w-[42%]

        rotate-[7deg]

        rounded-full

        bg-gradient-to-r
        from-transparent
        via-[#F8F2DD]/[0.10]
        to-transparent

        blur-[5px]

        opacity-80

        transition-all
        duration-[1200ms]
        ease-[cubic-bezier(.22,1,.36,1)]

        group-hover:left-[48%]
        group-hover:opacity-100
      "
            />

            {/* ===================================================
        THIN WARM LIGHT ALONG LOWER EDGE
    ==================================================== */}

            <span
              className="
        pointer-events-none
        absolute
        inset-x-[18%]
        bottom-[3px]

        h-px

        bg-gradient-to-r
        from-transparent
        via-[#D7CF9B]/70
        to-transparent

        opacity-70

        transition-opacity
        duration-700

        group-hover:opacity-100
      "
            />

            {/* ===================================================
        LEAF
    ==================================================== */}

            <span
              className="
        pointer-events-none
        absolute
        left-[-8px]
        bottom-[-10px]

        z-20

        h-[78px]
        w-[82px]

        origin-bottom-left

        transition-all
        duration-[900ms]
        ease-[cubic-bezier(.22,1,.36,1)]

        group-hover:translate-x-[3px]
        group-hover:translate-y-[-2px]
        group-hover:rotate-[-4deg]
        group-hover:scale-[1.05]
      "
            >
              <img
                src={leafWhisper}
                alt=""
                aria-hidden="true"
                className="
          h-full
          w-auto
          max-w-none

          object-contain

          brightness-[0.92]
          contrast-[1.08]
          saturate-[0.92]

          drop-shadow-[0_5px_8px_rgba(22,28,16,0.18)]

          transition-all
          duration-[900ms]
          ease-[cubic-bezier(.22,1,.36,1)]

          group-hover:brightness-[1.03]
          group-hover:contrast-[1.04]
        "
              />
            </span>

            {/* ===================================================
              VERY SOFT LEAF LIGHT
          ==================================================== */}

            <span
              className="
              pointer-events-none
              absolute
              left-[11px]
              bottom-[7px]

              z-[5]

              h-[46px]
              w-[46px]

              rounded-full

              bg-[#D8CF9C]/[0.10]

              blur-[15px]

              transition-all
              duration-1000

              group-hover:bg-[#E2D9A8]/[0.18]
            "
            />

            {/* ===================================================
              TEXT
          ==================================================== */}

            <span
              className="
              relative
              z-30

              mr-auto

              whitespace-nowrap

              text-[9px]
              font-medium
              uppercase

              tracking-[0.30em]

              text-[#F4EFE4]

              drop-shadow-[0_1px_2px_rgba(31,37,23,0.20)]

              transition-all
              duration-700
              ease-[cubic-bezier(.22,1,.36,1)]

              group-hover:translate-x-[3px]
              group-hover:tracking-[0.36em]
            "
            >
              READ MORE REVIEWS ON GOOGLE
            </span>

            {/* ===================================================
              SEPARATOR
          ==================================================== */}

            <span
              className="
              relative
              z-30

              mx-[13px]

              h-[22px]
              w-px

              bg-[#F4EFE4]/35

              transition-all
              duration-700
              ease-[cubic-bezier(.22,1,.36,1)]

              group-hover:h-[27px]
              group-hover:bg-[#E5DDBA]/65
            "
            />

            {/* ===================================================
              ARROW MEDALLION
          ==================================================== */}

            <span
              className="
              relative
              z-30

              flex
              h-[32px]
              w-[32px]
              shrink-0

              items-center
              justify-center

              rounded-full

              border
              border-[#E4DEC1]/55

              bg-gradient-to-b
              from-[#F0E9D3]/[0.12]
              to-[#B7AF88]/[0.05]

              shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]

              transition-all
              duration-700
              ease-[cubic-bezier(.22,1,.36,1)]

              group-hover:translate-x-[4px]
              group-hover:scale-[1.08]
              group-hover:border-[#F0E9D3]/85
              group-hover:bg-[#F4EFE4]/[0.14]
            "
            >
              <span
                className="
                text-[15px]
                leading-none

                text-[#F4EFE4]

                transition-all
                duration-700
                ease-[cubic-bezier(.22,1,.36,1)]

                group-hover:translate-x-[2px]
              "
              >
                →
              </span>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
