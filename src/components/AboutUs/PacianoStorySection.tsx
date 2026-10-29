import { useReducedMotion } from "framer-motion";
import { motion } from "framer-motion";

import storyImage from "@/images/about/paciano-story.png";
import storyLeafTop from "@/images/about/about-leaf.png";
import leafWhisper from "@/images/button-leaf.png";

interface PacianoStorySectionProps {
  storyTargetId?: string;
  image?: string;
}

export default function PacianoStorySection({
  storyTargetId = "paciano-philosophy",
  image,
}: PacianoStorySectionProps) {
  const reduceMotion = useReducedMotion();
  const instant = Boolean(reduceMotion);

  const reveal = {
    hidden: {
      opacity: 0,
      y: instant ? 0 : 28,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: instant ? 0 : 1.25,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      aria-labelledby="paciano-story-heading"
      className="
        relative isolate w-full overflow-hidden
        bg-[#F5EFE3] text-[#183329]
      "
    >
      {/* Subtle warm background texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(
              ellipse at 80% 35%,
              rgba(220, 211, 185, 0.24),
              transparent 55%
            ),
            linear-gradient(
              135deg,
              #F8F2E8 0%,
              #F2EADB 55%,
              #F8F2E8 100%
            )
          `,
        }}
      />

      {/* RESPONSIVE BOTANICAL ACCENTS */}

      {/* Upper-right leaf */}
      <motion.div
        aria-hidden="true"
        initial={instant ? false : { opacity: 0, x: 38, y: -12, rotate: 8 }}
        whileInView={{
          opacity: 0.78,
          x: 0,
          y: 0,
          rotate: 0,
        }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{
          duration: instant ? 0 : 1.8,
          delay: instant ? 0 : 0.2,
          ease: [0.16, 1, 0.3, 1],
        }}
        // className="
        //   pointer-events-none absolute
        //   -right-8 -top-5 z-20
        //   w-[110px]
        //   sm:-right-10 sm:top-0 sm:w-[150px]
        //   md:-right-12 md:w-[190px]
        //   lg:-right-10 lg:top-0 lg:w-[210px]
        //   xl:w-[250px]
        // "
        className="
            pointer-events-none absolute
            right-2 -top-3 z-20
            w-[145px]
            sm:right-3 sm:top-0 sm:w-[185px]
            md:right-5 md:w-[225px]
            lg:right-[3%] lg:top-0 lg:w-[255px]
            xl:right-[4%] xl:w-[290px]
            2xl:right-[0%] 2xl:w-[400px]
            "
      >
        <motion.img
          src={storyLeafTop}
          alt=""
          draggable={false}
          className="h-auto w-full object-contain"
          animate={instant ? undefined : { y: [0, -4, 0], rotate: [0, 1.2, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Lower-right leaf */}
      <motion.div
        aria-hidden="true"
        initial={instant ? false : { opacity: 0, x: 42, y: 25, rotate: -7 }}
        whileInView={{
          opacity: 0.9,
          x: 0,
          y: 0,
          rotate: 0,
        }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: instant ? 0 : 2,
          delay: instant ? 0 : 0.45,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          pointer-events-none absolute
          -right-12 bottom-[-25px] z-20
          w-[145px]
          sm:-right-12 sm:bottom-[-28px] sm:w-[190px]
          md:-right-16 md:w-[240px]
          lg:-right-12 lg:bottom-[-35px] lg:w-[255px]
          xl:w-[310px]
        "
      ></motion.div>

      {/* MAIN STORY CONTENT */}
      <div
        className="
          relative mx-auto w-full max-w-[1720px]
          px-5 py-16
          sm:px-8 sm:py-20
          md:px-10 md:py-24
          lg:px-0 lg:py-24
          xl:py-28
        "
      >
        <div
          className="
            grid grid-cols-1 items-start
            gap-8
            sm:gap-10
            lg:grid-cols-2 lg:gap-0
            "
        >
          {/* LEFT: CINEMATIC IMAGE */}
          <motion.div
            initial={instant ? false : { opacity: 0, x: -35, scale: 0.985 }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{
              duration: instant ? 0 : 1.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              relative z-10 w-full min-w-0
              lg:-ml-0
            "
          >
            <div
              //   className="
              //     group relative aspect-[4/3]
              //     w-full overflow-hidden
              //     bg-[#D8CEBB]
              //     sm:aspect-[1.45/1]
              //     lg:aspect-[1.12/1]
              //     xl:aspect-[1.28/1]
              //     2xl:aspect-[1.38/1]
              //   "
              className="
                group relative w-full min-w-0
                aspect-[4/3]
                sm:aspect-[1.45/1]
                lg:aspect-[1.38/1]
                overflow-hidden bg-transparent
                "
            >
              <motion.img
                src={image || storyImage}
                alt="A peaceful Paciano resort retreat surrounded by nature"
                initial={instant ? false : { scale: 1.08 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: instant ? 0 : 2.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  absolute inset-0 h-full w-full
                  object-cover object-center
                  transition-transform duration-[1400ms]
                  ease-[cubic-bezier(0.16,1,0.3,1)]
                  group-hover:scale-[1.035]
                "
              />

              {/* SEAMLESS IMAGE-TO-BACKGROUND BLEND */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-[1]"
                // style={{
                //   background: `
                //     linear-gradient(
                //         to right,
                //         rgba(245,239,227,0.12) 0%,
                //         transparent 7%,
                //         transparent 57%,
                //         rgba(245,239,227,0.10) 68%,
                //         rgba(245,239,227,0.38) 79%,
                //         rgba(245,239,227,0.72) 90%,
                //         #F5EFE3 100%
                //     ),
                //     linear-gradient(
                //         to bottom,
                //         #F5EFE3 0%,
                //         rgba(245,239,227,0.72) 2%,
                //         rgba(245,239,227,0.18) 8%,
                //         transparent 17%,
                //         transparent 78%,
                //         rgba(245,239,227,0.22) 87%,
                //         rgba(245,239,227,0.68) 96%,
                //         #F5EFE3 100%
                //     )
                //     `,
                // }}

                style={{
                  background: `
                    linear-gradient(
                    to right,
                    #F2EBDD 0%,
                    rgba(242,235,221,0.35) 1.5%,
                    rgba(242,235,221,0.10) 5%,
                    transparent 12%
                    ),
                    linear-gradient(
                    to left,
                    #F2EBDD 0%,
                    rgba(242,235,221,0.78) 5%,
                    rgba(242,235,221,0.40) 12%,
                    rgba(242,235,221,0.12) 23%,
                    transparent 36%
                    ),
                    linear-gradient(
                    to bottom,
                    #F2EBDD 0%,
                    rgba(242,235,221,0.45) 3%,
                    rgba(242,235,221,0.12) 9%,
                    transparent 17%
                    ),
                    linear-gradient(
                    to top,
                    #F2EBDD 0%,
                    rgba(242,235,221,0.52) 4%,
                    rgba(242,235,221,0.20) 10%,
                    transparent 20%
                    )
                `,
                }}
              />

              {/* SUBTLE WARM PHOTOGRAPHIC GRADE */}
              <div
                aria-hidden="true"
                className="
                    pointer-events-none absolute inset-0 z-[2]
                    bg-[#8E7952]/[0.015]
                    mix-blend-multiply
                "
              />
              <div
                className="
                  pointer-events-none absolute
                  bottom-5 left-5
                  font-manrope text-[9px]
                  font-medium uppercase
                  tracking-[0.25em] text-white
                  drop-shadow-md
                  sm:bottom-7 sm:left-7 sm:text-[10px]
                "
              >
                A place in nature
              </div>
            </div>
          </motion.div>

          {/* RIGHT: STORY COPY */}
          <div
            className="
                relative z-10 min-w-0
                px-1
                sm:px-2
                lg:pl-[6%] lg:pr-[8%]
                xl:pl-[8%] xl:pr-[10%]
                2xl:pl-[9%] 2xl:pr-[11%]
                "
          >
            {/* Eyebrow */}
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
                The Paciano Story
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h3
              id="paciano-story-heading"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: instant ? 0 : 1.3,
                delay: instant ? 0 : 0.18,
              }}
              className="
                max-w-[680px]
                
                font-cormorant
                text-[43px]
                leading-[.95]

                tracking-[-.025em]

                text-[#17251B]
                sm:text-[52px]
                lg:text-[60px]
              
                
              "
            >
              Where Moments Linger
              <br />
              <span className="italic text-[#789541]">
                Where Nature Embraces You.
              </span>
            </motion.h3>

            {/* Description */}
            <motion.p
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: instant ? 0 : 1.25,
                delay: instant ? 0 : 0.32,
              }}
              className="
                mt-6 max-w-[570px]
                font-manrope text-[12px]
                leading-[1.9] text-[#5F6258]
                sm:mt-7 sm:text-[14px]
                lg:text-[13px]
                xl:mt-8 xl:text-[14px]
                2xl:text-[15px]
              "
            >
              Paciano was created for moments that bring you closer to nature,
              to the people you travel with, and to yourself. From quiet
              mornings shaped by the landscape to evenings made memorable by
              thoughtful hospitality, every stay invites you to slow down and
              discover what truly matters.
              <br />
              <br />
              Discover a quieter kind of luxury, where thoughtful details and
              genuine warmth make every moment feel personal. Let the beauty of
              the surroundings inspire unhurried days, meaningful conversations,
              and moments of pure tranquillity. Here, every experience is
              crafted to feel effortless, every welcome feels heartfelt, and
              every memory becomes a part of your story.
            </motion.p>

            {/* STORY CTA */}
            {/* <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: instant ? 0 : 1.2,
                delay: instant ? 0 : 0.48,
              }}
              className="mt-7 sm:mt-8 xl:mt-9"
            >
              <a
                href={`#${storyTargetId}`}
                className="
                  group inline-flex min-h-[48px]
                  max-w-full items-center gap-5
                  rounded-full border border-[#9AA17A]/80
                  px-5 py-2.5
                  text-[#26382C]
                  transition-all duration-700
                  ease-[cubic-bezier(0.16,1,0.3,1)]
                  hover:-translate-y-0.5
                  hover:border-[#67774E]
                  hover:bg-[#E9E5D6]
                  hover:shadow-[0_8px_25px_rgba(48,57,36,0.08)]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#829066]
                  focus-visible:ring-offset-4
                  focus-visible:ring-offset-[#F5EFE3]
                  sm:gap-7 sm:px-6
                "
              >
                <span
                  className="
                    font-manrope text-[9px]
                    font-semibold uppercase
                    tracking-[0.23em]
                    sm:text-[10px] sm:tracking-[0.26em]
                  "
                >
                  Discover Paciano
                </span>

                <span
                  aria-hidden="true"
                  className="
                    flex h-7 w-7 shrink-0 items-center
                    justify-center rounded-full
                    border border-[#A5A78A]/80
                    transition-all duration-700
                    group-hover:translate-x-1
                    group-hover:border-[#68764E]
                    group-hover:bg-[#68764E]
                    group-hover:text-[#FFF9EF]
                  "
                >
                  <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
                    <path
                      d="M5 12h14m-6-6 6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </motion.div> */}
            <motion.div
              initial={instant ? false : { opacity: 0, y: 28, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: instant ? 0 : 1.4,
                delay: instant ? 0 : 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-7 sm:mt-8 xl:mt-9"
            >
              <a
                href="#about-paciano"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("about-paciano")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
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
                  Discover Paciano
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
    </section>
  );
}
