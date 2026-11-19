import { useEffect, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

import galleryBanner from "@/images/gallery/gallery-banner.png";
import contactLeafIcon from "@/images/contact/paciano-leaf-gold-transparent.png";

const PARCHMENT = "#eee9dc";
const FOREST = "#263b25";
const GOLD = "#b5a477";
const OLIVE = "#8faa42";

const contentSequence = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.3,
    },
  },
};

const textReveal = {
  hidden: {
    opacity: 0,
    y: 16,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.3,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};
function CreamJoinFromAbove() {
  return (
    <div
      className="
        pointer-events-none absolute bottom-0 left-0 z-20
        h-[58px] w-full
        sm:h-[68px]
        md:h-[76px]
      "
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 76"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <path
          d="
            M0,76
            L0,30
            C130,55 210,65 350,45
            C490,23 570,18 720,35
            C870,53 970,60 1100,38
            C1230,16 1340,15 1440,32
            L1440,76
            Z
          "
          fill={PARCHMENT}
        />
      </svg>
    </div>
  );
}

export default function GalleryHero() {
  const ref = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "4%"]);

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.07]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const instant = Boolean(reduceMotion);

  return (
    <section
      ref={ref}
      className="
        relative isolate flex
        h-[clamp(440px,68svh,590px)]
        w-full items-center justify-center
        overflow-hidden bg-[#d9dfd5]
        pt-12
        sm:h-[clamp(460px,65svh,600px)]
        md:h-[clamp(480px,68svh,630px)]
        lg:h-[clamp(520px,68svh,590px)]
        xl:h-[clamp(550px,72svh,690px)]
      "
      // sm:h-[clamp(390px,55svh,500px)]
      // lg:h-[clamp(390px,52svh,490px)]
    >
      {/* BACKGROUND IMAGE */}
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden"
        initial={instant ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: instant ? 0 : 1.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{
          y: reduceMotion ? 0 : imageY,
          scale: reduceMotion ? 1 : imageScale,
        }}
      >
        <img
          src={galleryBanner}
          alt="Paciano surrounded by the Dooars mountains and river landscape"
          fetchPriority="high"
          className="
            h-full w-full
            object-cover
            object-center
          "
          style={{
            filter: `
              brightness(0.82)
              saturate(1.02)
              contrast(1.08)
              sepia(0.06)
            `,
            objectPosition: "50% 45%",
          }}
        />
      </motion.div>

      {/* DEEP WARM CINEMATIC OVERLAY */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: `
            linear-gradient(
              180deg,
              rgba(19, 29, 23, 0.34) 0%,
              rgba(24, 34, 26, 0.20) 30%,
              rgba(22, 32, 23, 0.24) 60%,
              rgba(17, 29, 21, 0.40) 100%
            ),
            linear-gradient(
              90deg,
              rgba(23, 30, 23, 0.16) 0%,
              transparent 30%,
              transparent 70%,
              rgba(23, 30, 23, 0.16) 100%
            )
          `,
        }}
      />

      {/* PREMIUM DARK FOREST SPOTLIGHT */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-1/2 top-[39%]
          z-[15]
          h-[300px] w-[96%]
          max-w-[1150px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
        "
        style={{
          background: `
      radial-gradient(
        ellipse 60% 65% at 50% 50%,
        rgba(12, 24, 17, 0.72) 0%,
        rgba(16, 29, 20, 0.62) 30%,
        rgba(20, 33, 23, 0.43) 55%,
        rgba(25, 36, 25, 0.20) 75%,
        transparent 100%
      )
    `,
          filter: "blur(28px)",
        }}
      />

      {/* HERO CONTENT */}
      <motion.div
        variants={contentSequence}
        initial="hidden"
        animate="visible"
        className="
          relative z-20 mx-auto flex w-full
          max-w-[1100px] flex-col items-center
          px-5 text-center
          sm:px-8
          -translate-y-16
          sm:-translate-y-20
          md:-translate-y-24
        "
      >
        {/* GALLERY EYEBROW */}
        <motion.div
          variants={textReveal}
          className="mb-8 flex flex-col items-center sm:mb-2"
        >
          <svg
            viewBox="0 0 32 32"
            className="
                h-[21px]
                w-[21px]
                shrink-0               
                text-[#E5CB91]
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

          <div className="flex items-center gap-4">
            <span className="h-px w-8 bg-[#BDA36C]/80" />

            <span
              className="
                font-sans
                text-[11px] sm:text-xs
                font-semibold uppercase
                tracking-[0.48em]
                text-[#E9D29D]
              "
            >
              Gallery
            </span>

            <span className="h-px w-8 bg-[#BDA36C]/80" />
          </div>
        </motion.div>

        {/* MAIN HEADING */}
        <motion.h1
          variants={textReveal}
          className="
            font-['Cormorant_Garamond']
            text-[clamp(3.2rem,7vw,6rem)]
            font-medium italic
            leading-[0.98]
            tracking-[-0.035em]
            text-[#FFF9ED]
          "
          style={{
            textShadow: `
              0 2px 5px rgba(0,0,0,0.65),
              0 5px 18px rgba(0,0,0,0.55),
              0 10px 35px rgba(0,0,0,0.28)
            `,
          }}
        >
          Moments at Paciano
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          variants={textReveal}
          className="
            mt-4 sm:mt-5
            max-w-[1000px]
            px-3
            font-['Cormorant_Garamond']
            text-[clamp(1.3rem,3vw,2.15rem)]
            font-medium italic
            leading-[1.2]
            tracking-[-0.015em]
            text-[#EED29A]
          "
          style={{
            textShadow: `
              0 2px 5px rgba(0,0,0,0.75),
              0 4px 16px rgba(0,0,0,0.55)
            `,
          }}
        >
          A Visual Journey of Stays, Celebrations and Experiences.
        </motion.p>
      </motion.div>

      {/* CIRCULAR SCROLL INDICATOR */}
      <motion.div
        initial={instant ? false : { opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: instant ? 0 : 1.6,
          duration: 1,
        }}
        className="
          absolute bottom-[76px] left-1/2
          z-10 -translate-x-1/2
          sm:bottom-[88px]
        "
      >
        <motion.div
          animate={instant ? { y: 0 } : { y: [0, 5, 0] }}
          transition={{
            duration: 2.2,
            repeat: instant ? 0 : Infinity,
            ease: "easeInOut",
          }}
          className="
            flex h-9 w-9 items-center justify-center
            rounded-full border border-white/75
            bg-white/10 backdrop-blur-[2px]
            sm:h-10 sm:w-10
          "
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </motion.div>
      </motion.div>

      {/* CREAM BOTTOM WAVE */}
      <CreamJoinFromAbove />
    </section>
  );
}
