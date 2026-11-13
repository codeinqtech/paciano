import { useEffect, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import eventBanner from "@/images/events/eventBanner.png";
import leafWhisper from "@/images/button-leaf.png";

function Wave({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={`section-wave ${flip ? "rotate-180" : ""}`}
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
    >
      <path
        d="M0 39C210 99 355 8 572 36C790 64 835 97 1044 44C1220 0 1338 18 1440 57V90H0V39Z"
        fill="#F7F3E9"
      />
    </svg>
  );
}

export default function EventsHero() {
  const reduceMotion = useReducedMotion();
  const instant = Boolean(reduceMotion);

  const reveal = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduceMotion ? 0 : 1.1,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <section
      className="
        hero
        relative
        isolate
        min-h-[780px]
        overflow-hidden
        bg-[#f2eee3]

        md:min-h-[720px]
        lg:min-h-[min(900px,100svh)]

        [@media(orientation:landscape)_and_(max-height:600px)]:min-h-[540px]
        [@media(orientation:landscape)_and_(max-height:600px)]:h-[100svh]
      "
      aria-labelledby="hero-title"
    >
      {/* BACKGROUND IMAGE */}
      <img
        src={eventBanner}
        alt="Luxury Paciano suite with a private balcony overlooking the valley"
        loading="eager"
        fetchPriority="high"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-[62%_center]

          [@media(orientation:portrait)]:object-[65%_center]
          [@media(orientation:landscape)_and_(max-height:600px)]:object-center
        "
      />
      {/* HERO CONTENT */}
      <div
        className="        
          page-container
          relative
          z-10
          box-border
          flex
          w-full
          min-h-[780px]
          items-end
          pb-36
          pt-32

          md:min-h-[720px]
          md:items-center
          md:pb-20
          md:pt-24

          lg:min-h-[min(900px,100svh)]

          /* MOBILE – ALL ORIENTATIONS */
          max-[639px]:!px-5

          /* TABLETS – ALL ORIENTATIONS */
          min-[640px]:max-[1199px]:!px-8

          /* LAPTOP */
          [@media(min-width:1200px)_and_(max-width:1599px)]:pl-[60px]
          [@media(min-width:1600px)]:!pl-[85px]

          /* MOBILE LANDSCAPE */
          [@media(orientation:landscape)_and_(max-height:600px)]:min-h-[540px]
          [@media(orientation:landscape)_and_(max-height:600px)]:py-20
        "
      >
        {/* LEFT CONTENT */}
        <div
          className="
            hero-copy
            relative
            isolate
            box-border
            w-full
            max-w-[580px]
            min-w-0

            min-[1200px]:translate-y-[28px]

            [@media(min-width:1200px)_and_(max-width:1599px)]:max-w-[640px]
            [@media(orientation:landscape)_and_(max-height:600px)]:max-w-[460px]
          "
        >
          {/* RESPONSIVE STAY HERO – LOCALIZED IVORY GLOW */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              z-0

              /* DESKTOP DEFAULT */
              -left-24
              -top-24
              h-[780px]
              w-[820px]
              blur-[20px]

              /* LAPTOP – 1200px TO 1599px */
              [@media(min-width:1200px)_and_(max-width:1599px)]:-left-[65px]
              [@media(min-width:1200px)_and_(max-width:1599px)]:-top-[30px]
              [@media(min-width:1200px)_and_(max-width:1599px)]:h-[540px]
              [@media(min-width:1200px)_and_(max-width:1599px)]:w-[680px]
              [@media(min-width:1200px)_and_(max-width:1599px)]:blur-[18px]

              /* MOBILE PORTRAIT */
              [@media(max-width:639px)_and_(orientation:portrait)]:-left-6
              [@media(max-width:639px)_and_(orientation:portrait)]:-top-7
              [@media(max-width:639px)_and_(orientation:portrait)]:h-[450px]
              [@media(max-width:639px)_and_(orientation:portrait)]:w-[430px]
              [@media(max-width:639px)_and_(orientation:portrait)]:blur-[16px]

              /* MOBILE LANDSCAPE */
              [@media(max-width:900px)_and_(max-height:600px)_and_(orientation:landscape)]:-left-12
              [@media(max-width:900px)_and_(max-height:600px)_and_(orientation:landscape)]:-top-7
              [@media(max-width:900px)_and_(max-height:600px)_and_(orientation:landscape)]:h-[410px]
              [@media(max-width:900px)_and_(max-height:600px)_and_(orientation:landscape)]:w-[620px]
              [@media(max-width:900px)_and_(max-height:600px)_and_(orientation:landscape)]:blur-[16px]
              [@media(max-width:900px)_and_(max-height:600px)_and_(orientation:landscape)]:hidden

              /* TABLET PORTRAIT */
             [@media(min-width:640px)_and_(max-width:1023px)_and_(orientation:portrait)]:-left-[45px]
             [@media(min-width:640px)_and_(max-width:1023px)_and_(orientation:portrait)]:-top-[25px]
             [@media(min-width:640px)_and_(max-width:1023px)_and_(orientation:portrait)]:h-[520px]
             [@media(min-width:640px)_and_(max-width:1023px)_and_(orientation:portrait)]:w-[590px]

              /* TABLET LANDSCAPE */
             [@media(min-width:640px)_and_(max-width:1199px)_and_(orientation:landscape)]:-left-[55px]
              [@media(min-width:640px)_and_(max-width:1199px)_and_(orientation:landscape)]:-top-[15px]
              [@media(min-width:640px)_and_(max-width:1199px)_and_(orientation:landscape)]:h-[480px]
              [@media(min-width:640px)_and_(max-width:1199px)_and_(orientation:landscape)]:w-[620px]
            "
            style={{
              background: `
                radial-gradient(
                  ellipse 75% 82% at 36% 48%,
                  rgba(250,248,242,0.94) 0%,
                  rgba(250,248,242,0.88) 38%,
                  rgba(250,248,242,0.72) 58%,
                  rgba(250,248,242,0.42) 76%,
                  rgba(250,248,242,0.14) 90%,
                  transparent 100%
                )
              `,
            }}
          />
          {/* MOBILE LANDSCAPE – COMPACT TEXT GLOW */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              z-0
              hidden

              [@media(max-width:900px)_and_(max-height:600px)_and_(orientation:landscape)]:block
              [@media(max-width:900px)_and_(max-height:600px)_and_(orientation:landscape)]:-left-12
              [@media(max-width:900px)_and_(max-height:600px)_and_(orientation:landscape)]:top-[-69px]
              [@media(max-width:900px)_and_(max-height:600px)_and_(orientation:landscape)]:h-[380px]
              [@media(max-width:900px)_and_(max-height:600px)_and_(orientation:landscape)]:w-[600px]
              [@media(max-width:900px)_and_(max-height:600px)_and_(orientation:landscape)]:blur-[12px]
            "
            style={{
              background: `
                radial-gradient(
                  ellipse 78% 62% at 38% 55%,
                  rgba(250,248,242,0.96) 0%,
                  rgba(250,248,242,0.88) 38%,
                  rgba(250,248,242,0.65) 58%,
                  rgba(250,248,242,0.28) 78%,
                  rgba(250,248,242,0.05) 94%,
                  transparent 100%
                )
              `,
            }}
          />
          <div className="relative z-10">
            {/* EYEBROW */}
            <motion.div
              {...reveal(0.15)}
              className="
              mb-5
              flex
              items-center
              gap-2.5
              md:mb-6
            "
            >
              <svg
                viewBox="0 0 32 32"
                className="h-[20px] w-[20px] text-[#71863D]"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M16 27C16 19 18 12 23 5"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <path
                  d="M17 19C10 17 7 12 8 7C14 8 18 13 18 18"
                  fill="currentColor"
                  opacity=".8"
                />
                <path
                  d="M19 14C20 8 25 5 29 7C27 12 24 15 19 16"
                  fill="currentColor"
                  opacity=".5"
                />
              </svg>

              <span
                className="
                font-manrope
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.31em]
                text-[#68753F]
                sm:text-[11px]
              "
              >
                Events at Paciano
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h2
              id="hero-title"
              {...reveal(0.35)}
              className="
              font-display              
              leading-[0.91]
              tracking-[-0.045em]
              text-[#1c2c21]
              font-['Cormorant_Garamond']
              max-[380px]:text-[2.85rem]              
              text-[44px]
              sm:text-[52px]
              md:text-[60px]
              lg:text-[68px]
              xl:text-[76px]
              [@media(min-width:1200px)_and_(max-width:1599px)]:text-[60px]
              max-w-[760px]

              
            "
            >
              <span className="block">Celebrate In</span>
              <em
                className="block font-normal italic
                text-[#4c6748]"
              >
                Nature's Embrace.
              </em>
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              {...reveal(0.65)}
              className="
              mt-6
              max-w-[405px]
              font-manrope
              text-[13px]
              leading-[1.8]
              text-[#39443a]

              sm:text-[14px]
              lg:mt-7
              lg:text-[15px]

              [@media(orientation:landscape)_and_(max-height:600px)]:mt-4
              [@media(orientation:landscape)_and_(max-height:600px)]:text-[12px]
            "
            >
              From elegant corporate gatherings to intimate celebrations and
              grand weddings, Paciano offers an enchanting setting for every
              occasion. Surrounded by breathtaking mountain views and lush
              landscapes, experience thoughtfully curated spaces, seamless
              hospitality, and memorable moments woven into nature.
            </motion.p>

            <motion.div
              initial={instant ? false : { opacity: 0, y: 28, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: instant ? 0 : 1.4,
                delay: instant ? 0 : 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-[35px] will-change-transform [@media(min-width:1200px)_and_(max-width:1599px)]:mt-[24px]"
            >
              <a
                href="#location-details"
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
                  Explore Events
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
        </div>
      </div>

      {/* BOTTOM WAVE */}
      <div className="absolute bottom-[-1px] left-0 z-20 w-full">
        <Wave />
      </div>
    </section>
  );
}
