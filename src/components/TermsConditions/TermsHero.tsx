import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

import termsBanner from "@/images/termsconditions/terms-banner.png";
import termsEmblem from "@/images/termsconditions/terms-emblem.png";

const PARCHMENT = "#F8F3E9";
// const GOLD = "#D9AD55";

const CREAM = "#F8F3E9";
const GOLD = "#D9B66E";
const LIGHT_GOLD = "#F8DFA5";

const contentSequence = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.25,
    },
  },
};

const reveal = {
  hidden: {
    opacity: 0,
    y: 22,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

function TermsCreamWave() {
  return (
    <div
      className="
        pointer-events-none absolute
        bottom-[-1px] left-0 z-30
        h-[58px] w-full
        sm:h-[65px]
        md:h-[72px]
        lg:h-[78px]
      "
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        {/* FOREST GREEN UNDERLAYER */}
        <path
          d="
            M0 35
            C145 0 235 15 370 48
            C510 83 600 75 735 43
            C875 10 985 9 1110 40
            C1250 76 1350 70 1440 31
            L1440 140
            L0 140
            Z
          "
          fill="#102619"
        />

        {/* CREAM WAVE */}
        <path
          d="
            M0 43
            C145 8 235 23 370 56
            C510 91 600 83 735 51
            C875 18 985 17 1110 48
            C1250 84 1350 78 1440 39
            L1440 140
            L0 140
            Z
          "
          fill="#F8F3E9"
        />

        {/* GOLDEN EDGE */}
        <path
          d="
            M0 43
            C145 8 235 23 370 56
            C510 91 600 83 735 51
            C875 18 985 17 1110 48
            C1250 84 1350 78 1440 39
          "
          fill="none"
          stroke="#D9AD55"
          strokeWidth="2.2"
        />

        {/* SOFT GOLD HIGHLIGHT */}
        <path
          d="
            M0 47
            C145 12 235 27 370 60
            C510 95 600 87 735 55
            C875 22 985 21 1110 52
            C1250 88 1350 82 1440 43
          "
          fill="none"
          stroke="#FFF1CF"
          strokeWidth="1"
          opacity=".8"
        />
      </svg>
    </div>
  );
}

/* ----------------------------------
   GOLDEN BOTTOM WAVE
----------------------------------- */

function PolicyWave() {
  return (
    <motion.div
      className="
        pointer-events-none absolute
        bottom-0 left-0 z-30
        h-[48px] w-full
        sm:h-[56px]
        md:h-[65px]
        lg:h-[72px]
      "
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.5,
        delay: 0.5,
        ease: [0.16, 1, 0.3, 1],
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        {/* CREAM WAVE FILL */}
        <path
          d="
            M0 38
            C115 5 190 5 300 34
            C420 65 485 77 610 45
            C745 10 820 10 940 39
            C1065 70 1140 68 1250 35
            C1330 12 1390 17 1440 33
            L1440 90
            L0 90
            Z
          "
          fill={CREAM}
        />

        {/* GOLDEN OUTLINE */}
        <path
          d="
            M0 38
            C115 5 190 5 300 34
            C420 65 485 77 610 45
            C745 10 820 10 940 39
            C1065 70 1140 68 1250 35
            C1330 12 1390 17 1440 33
          "
          stroke={GOLD}
          strokeWidth="2.2"
          fill="none"
        />

        {/* SUBTLE DARK GREEN EDGE */}
        <path
          d="
            M0 43
            C115 10 190 10 300 39
            C420 70 485 82 610 50
            C745 15 820 15 940 44
            C1065 75 1140 73 1250 40
            C1330 17 1390 22 1440 38
          "
          stroke="#31442A"
          strokeWidth="1"
          opacity=".7"
          fill="none"
        />
      </svg>
    </motion.div>
  );
}

/* PACIANO — ANIMATED GOLDEN TERMS SCROLL */

function TermsDocumentEmblem({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div
      className="
        relative flex items-center justify-center
        h-[175px] w-[270px]
        sm:h-[190px] sm:w-[300px]
        md:h-[205px] md:w-[330px]
      "
    >
      {/* SOFT GOLDEN AMBIENT GLOW */}
      <div
        className="
          absolute inset-[12%]
          rounded-full
          bg-[#F9BC50]/15
          blur-[38px]
        "
      />

      {/* CIRCULAR GOLDEN HALO */}
      <motion.div
        className="
          absolute
          h-[145px] w-[145px]
          sm:h-[165px] sm:w-[165px]
          md:h-[180px] md:w-[180px]
          rounded-full
          border border-[#E8BC6C]/40
        "
        animate={reduceMotion ? {} : { rotate: 360 }}
        transition={{
          duration: 65,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <span
          className="
            absolute right-[13%] top-[15%]
            h-[5px] w-[5px]
            rounded-full bg-[#FFE8B0]
            shadow-[0_0_10px_3px_rgba(255,204,100,.7)]
          "
        />
      </motion.div>

      {/* DIAGONAL GOLDEN ORBIT */}
      <motion.div
        className="
          absolute
          h-[48px] w-[245px]
          sm:h-[55px] sm:w-[275px]
          md:h-[58px] md:w-[305px]
          rounded-[50%]
          border border-[#F4C66F]
        "
        initial={{ rotate: -12 }}
        animate={reduceMotion ? { rotate: -12 } : { rotate: 348 }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <span
          className="
            absolute right-[4%] top-[38%]
            h-[5px] w-[5px]
            rounded-full bg-[#FFE7AD]
            shadow-[0_0_10px_4px_rgba(255,198,91,.8)]
          "
        />
      </motion.div>

      {/* IMPORTED GOLDEN SCROLL EMBLEM */}
      <motion.img
        src={termsEmblem}
        alt="Terms and conditions emblem"
        className="
          relative z-10
          h-[112px] w-[115px]
          sm:h-[125px] sm:w-[130px]
          md:h-[145px] md:w-[155px]
          object-contain
        "
        initial={reduceMotion ? false : { opacity: 0, scale: 0.88, y: 10 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 1.4,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{
          filter: `
            drop-shadow(0 0 3px #FFF0BD)
            drop-shadow(0 0 8px rgba(255,195,91,.8))
            drop-shadow(0 0 17px rgba(255,173,54,.35))
          `,
        }}
      />
    </div>
  );
}

export default function TermsHero() {
  const ref = useRef<HTMLElement | null>(null);
  const reduceMotion = Boolean(useReducedMotion());

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "7%"]);

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.09]);

  return (
    <section
      ref={ref}
      className="
        relative isolate flex
        min-h-[410px]
        h-[clamp(430px,72svh,470px)]
        w-full items-center justify-center
        overflow-hidden
        bg-[#102619]
        pt-[45px]
        sm:h-[500px]
        sm:pt-[55px]
        md:h-[520px]
        lg:h-[540px]
        xl:h-[540px]
      "
    >
      {/* BACKGROUND IMAGE */}
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{
          y: reduceMotion ? 0 : imageY,
          scale: reduceMotion ? 1 : imageScale,
        }}
      >
        {/* <img
          src={termsBanner}
          alt="Golden sunset over the Paciano riverside"
          fetchPriority="high"
          className="
            relative isolate w-full overflow-hidden
            h-[375px]
            min-[390px]:h-[390px]
            sm:h-[425px]
            md:h-[445px]
            lg:h-[455px]
            xl:h-[475px]
            "
          style={{
            filter: `
              brightness(.79)
              saturate(1.08)
              contrast(1.08)
            `,
          }}
        /> */}

        <img
          src={termsBanner}
          alt="Golden sunset over the Paciano riverside"
          fetchPriority="high"
          className="
            absolute inset-0
            h-full w-full
            object-cover
            object-center
          "
          style={{
            filter: `
              brightness(.79)
              saturate(1.08)
              contrast(1.08)
            `,
          }}
        />
      </motion.div>
      {/* CINEMATIC FOREST OVERLAY */}
      <div
        className="pointer-events-none absolute inset-0 z-[5]"
        style={{
          background: `
            linear-gradient(
              180deg,
              rgba(9,24,16,.65) 0%,
              rgba(12,29,19,.24) 35%,
              rgba(11,27,18,.30) 68%,
              rgba(8,25,16,.62) 100%
            ),
            linear-gradient(
              90deg,
              rgba(9,25,17,.38) 0%,
              rgba(9,25,17,.12) 45%,
              rgba(9,25,17,.08) 100%
            )
          `,
        }}
      />
      {/* CENTER SPOTLIGHT */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-1/2 top-[43%]
          z-10
          h-[290px] w-[90%]
          max-w-[700px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
        "
        style={{
          background: `
            radial-gradient(
              ellipse at center,
              rgba(13,29,18,.55) 0%,
              rgba(13,29,18,.32) 45%,
              transparent 75%
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
          relative z-20
          mx-auto flex w-full
          max-w-[1100px]
          flex-col items-center
          px-5
          text-center
          pb-6
          sm:pb-8
          md:pb-10
        "
      >
        {/* DOCUMENT EMBLEM */}
        <motion.div variants={reveal}>
          <TermsDocumentEmblem reduceMotion={reduceMotion} />
        </motion.div>

        {/* HEADING */}
        <motion.h1
          variants={reveal}
          className="
            mt-1
            font-['Cormorant_Garamond']
            text-[clamp(2.45rem,6.5vw,5.4rem)]
            font-medium italic
            leading-[1.02]
            tracking-[-0.035em]
            text-[#FFF9ED]
          "
          style={{
            textShadow: `
              0 2px 5px rgba(0,0,0,.65),
              0 5px 18px rgba(0,0,0,.55),
              0 10px 30px rgba(0,0,0,.25)
            `,
          }}
        >
          Terms & Conditions
        </motion.h1>

        {/* GOLDEN DECORATIVE DIVIDER */}
        <motion.div
          variants={reveal}
          className="
            mt-6 sm:mt-7
            flex items-center
            justify-center gap-3
          "
        >
          <span
            className="
              h-px w-12 sm:w-16 md:w-20
              bg-gradient-to-r
              from-transparent to-[#D9AD55]
            "
          />

          <motion.span
            animate={reduceMotion ? {} : { rotate: [45, 225, 405] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              h-[9px] w-[9px]
              rotate-45
              border-2 border-[#F4CC78]
              shadow-[0_0_10px_rgba(255,194,80,.55)]
            "
          />

          <span
            className="
              h-px w-12 sm:w-16 md:w-20
              bg-gradient-to-l
              from-transparent to-[#D9AD55]
            "
          />
        </motion.div>
      </motion.div>
      {/* BOTTOM WAVE */}
      {/* <TermsCreamWave /> */}
      <PolicyWave />
    </section>
  );
}
