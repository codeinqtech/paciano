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

// function CreamJoinFromAbove() {
//   return (
//     <div
//       className="pointer-events-none absolute bottom-0 left-0 z-20
//         h-12 w-full sm:h-16 md:h-[72px]"
//       aria-hidden="true"
//     >
//       <svg
//         viewBox="0 0 1440 76"
//         preserveAspectRatio="none"
//         className="h-full w-full"
//       >
//         <path
//           d="M0,76 L0,44 C120,62 210,18 360,28
//           C510,38 620,68 780,52
//           C940,36 1080,14 1260,32
//           C1380,44 1440,38 1440,48 L1440,76 Z"
//           fill={PARCHMENT}
//         />
//       </svg>
//     </div>
//   );
// }

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
        lg:h-[clamp(450px,52svh,460px)]
        xl:h-[clamp(450px,72svh,690px)]
        
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
          alt="The natural surroundings and architecture of Paciano"
          fetchPriority="high"
          className="
            h-full w-full object-cover
            object-[60%_70%]
            sm:object-center
          "
          // style={{
          //   filter: "brightness(1.06) saturate(1.05) contrast(1.02)",
          // }}
          style={{
            filter:
              "brightness(0.91) saturate(0.92) contrast(1.05) sepia(0.06)",
          }}
        />
      </motion.div>

      {/* PREMIUM IVORY SPOTLIGHT BEHIND HERO CONTENT */}

      {/* <div
        className="
            pointer-events-none absolute
            left-1/2 top-[43%]
            z-10
            h-[210px] w-[85%]
            max-w-[850px]
            -translate-x-1/2 -translate-y-1/2
            rounded-[50%]
          "
        style={{
          background: `
              radial-gradient(
                ellipse 51% 103% at 37% 40%,
                rgba(244,232,215,0.97) 0%,
                rgba(244,232,215,0.94) 22%,
                rgba(244,232,215,0.80) 38%,
                rgba(244,232,215,0.55) 52%,
                rgba(244,232,215,0.28) 66%,
                rgba(244,232,215,0.10) 79%,
                rgba(244,232,215,0.025) 89%,
                rgba(244,232,215,0) 97%
              )
            `,
        }}
      /> */}
      {/* CINEMATIC FOREST GREEN OVERLAY */}
      {/* <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: `
      linear-gradient(
        180deg,
        rgba(15, 32, 23, 0.48) 0%,
        rgba(20, 39, 27, 0.40) 35%,
        rgba(16, 34, 24, 0.58) 70%,
        rgba(13, 29, 21, 0.72) 100%
      )
    `,
        }}
      /> */}

      {/* SUBTLE CINEMATIC EDGE SHADING */}
      {/* <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: `
      linear-gradient(
        90deg,
        rgba(12, 27, 19, 0.22),
        transparent 35%,
        transparent 65%,
        rgba(12, 27, 19, 0.22)
      )
    `,
        }}
      /> */}
      {/* WARM PREMIUM FOREST OVERLAY */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: `
      linear-gradient(
        180deg,
        rgba(32, 43, 29, 0.24) 0%,
        rgba(48, 48, 32, 0.12) 45%,
        rgba(35, 45, 29, 0.25) 100%
      ),
      linear-gradient(
        90deg,
        rgba(65, 55, 36, 0.08),
        transparent 50%,
        rgba(65, 55, 36, 0.08)
      )
    `,
        }}
      />
      {/* PREMIUM SOFT DARK SPOTLIGHT BEHIND HERO CONTENT */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-1/2 top-[39%]
          z-[15]
          h-[210px] w-[94%]
          max-w-[900px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
        "
        style={{
          background: `
          radial-gradient(
            ellipse 55% 65% at 50% 50%,
            rgba(12, 25, 17, 0.65) 0%,
            rgba(17, 31, 21, 0.50) 38%,
            rgba(22, 36, 25, 0.30) 65%,
            rgba(25, 38, 27, 0.10) 85%,
            transparent 100%
          )
        `,
          filter: "blur(25px)",
        }}
      />

      {/* HERO CONTENT */}
      <motion.div
        variants={contentSequence}
        initial="hidden"
        animate="visible"
        className="
            relative z-20 mx-auto flex w-full
            max-w-[1000px] flex-col items-center
            px-5 text-center
            sm:px-8
            -translate-y-5
            sm:-translate-y-7
            "
      >
        {/* MAIN HEADING */}
        <motion.h1
          variants={textReveal}
          className="
            font-['Cormorant_Garamond']
            text-[clamp(2.5rem,6.2vw,4.1rem)]
            font-medium leading-[1]
            tracking-[-0.035em]
          "
          // style={{
          //   color: FOREST,
          //   textShadow: "0 2px 18px rgba(255,250,235,.3)",
          // }}
          style={{
            color: "#FFFCF2",
            textShadow: `
              0 2px 5px rgba(15, 28, 18, 0.45),
              0 4px 18px rgba(15, 28, 18, 0.35)
            `,
          }}
        >
          Moments at Paciano
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          variants={textReveal}
          className="
            mt-4
            font-['Cormorant_Garamond']
             text-[clamp(38px,4.15vw,61px)]        
            leading-tight           
            font-medium italic leading-[0.98]
            tracking-[-0.035em]
          "
          // style={{
          //   color: FOREST,
          //   textShadow: "0 4px 28px rgba(0,0,0,.35)",
          // }}
          style={{
            color: "#E5CB91",
            textShadow: `
              0 2px 5px rgba(15, 28, 18, 0.65),
              0 3px 14px rgba(15, 28, 18, 0.45)
            `,
          }}
        >
          Where Nature Becomes an Experience.
        </motion.p>

        {/* LEAF DIVIDER */}
        {/* PREMIUM GOLD LEAF DIVIDER */}
        <motion.div
          variants={textReveal}
          className="
            relative mt-6 flex w-full max-w-[210px]
            items-center justify-center gap-4
            sm:mt-7 sm:max-w-[250px]
          "
        >
          {/* LEFT GREEN LINE */}
          <span
            className="h-px flex-1"
            style={{
              background:
                "linear-gradient(90deg, transparent, #71875B 35%, #35543A 100%)",
            }}
          />

          {/* BOTANICAL GREEN LEAF */}
          <span
            className="
              relative flex h-10 w-10 shrink-0
              items-center justify-center rounded-full
            "
            style={{
              background:
                "radial-gradient(circle, rgba(238,233,220,0.95) 0%, rgba(238,233,220,0.5) 58%, transparent 78%)",
              boxShadow: "0 0 16px rgba(53,84,58,0.12)",
            }}
          >
            <motion.img
              src={contactLeafIcon}
              alt=""
              aria-hidden="true"
              className="h-8 w-8 object-contain"
              initial={
                instant ? false : { opacity: 0, scale: 0.7, rotate: -10 }
              }
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                duration: instant ? 0 : 1,
                delay: instant ? 0 : 1.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(27%) sepia(15%) saturate(1050%) hue-rotate(78deg) brightness(91%) contrast(90%) drop-shadow(0 2px 3px rgba(35,60,39,0.2))",
              }}
            />
          </span>

          {/* RIGHT GREEN LINE */}
          <span
            className="h-px flex-1"
            style={{
              background:
                "linear-gradient(90deg, #35543A 0%, #71875B 65%, transparent)",
            }}
          />
        </motion.div>
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
