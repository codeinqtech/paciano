import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

import termsBanner from "@/images/termsconditions/terms-banner.png";

const PARCHMENT = "#F8F3E9";
const GOLD = "#D9AD55";

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

/* BOTTOM CREAM WAVE */
function TermsCreamWave() {
  return (
    <div
      className="
        pointer-events-none absolute
        bottom-0 left-0 z-30
        h-[48px] w-full
        sm:h-[58px]
        md:h-[68px]
        lg:h-[78px]
      "
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        {/* Cream wave */}
        <path
          d="
            M0 36
            C125 5 205 15 330 43
            C475 76 575 67 720 39
            C860 10 970 5 1100 35
            C1235 66 1340 63 1440 30
            L1440 90
            L0 90
            Z
          "
          fill={PARCHMENT}
        />

        {/* Fine golden edge */}
        <path
          d="
            M0 36
            C125 5 205 15 330 43
            C475 76 575 67 720 39
            C860 10 970 5 1100 35
            C1235 66 1340 63 1440 30
          "
          fill="none"
          stroke={GOLD}
          strokeWidth="2"
        />

        {/* Subtle inner highlight */}
        <path
          d="
            M0 40
            C125 9 205 19 330 47
            C475 80 575 71 720 43
            C860 14 970 9 1100 39
            C1235 70 1340 67 1440 34
          "
          fill="none"
          stroke="#FFF5DC"
          strokeWidth="1"
          opacity=".65"
        />
      </svg>
    </div>
  );
}

/* ANIMATED DOCUMENT EMBLEM */

function TermsDocumentEmblem({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div
      className="
        relative flex items-center justify-center
        h-[125px] w-[185px]
        sm:h-[145px] sm:w-[205px]
        md:h-[165px] md:w-[225px]
      "
    >
      {/* AMBIENT GOLDEN GLOW */}
      <div
        className="
          absolute inset-0
          rounded-full
          bg-[#F6B94E]/10
          blur-[32px]
        "
      />

      {/* OUTER CIRCULAR ORBIT */}
      <motion.div
        className="
          absolute
          h-[115px] w-[115px]
          sm:h-[135px] sm:w-[135px]
          md:h-[150px] md:w-[150px]
          rounded-full
          border border-[#E8B85F]/45
        "
        animate={reduceMotion ? {} : { rotate: 360 }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <span
          className="
            absolute right-[12%] top-[15%]
            h-[4px] w-[4px]
            rounded-full bg-[#FFE4A0]
            shadow-[0_0_9px_3px_rgba(255,204,100,.7)]
          "
        />
      </motion.div>

      {/* HORIZONTAL GOLDEN ORBIT */}
      <motion.svg
        viewBox="0 0 240 120"
        className="
          absolute
          h-[115px] w-[205px]
          sm:h-[135px] sm:w-[225px]
          overflow-visible
        "
        animate={reduceMotion ? {} : { rotate: 360 }}
        transition={{
          duration: 55,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <ellipse
          cx="120"
          cy="60"
          rx="111"
          ry="25"
          fill="none"
          stroke="#F4C56D"
          strokeWidth="1.5"
          opacity=".9"
        />

        <circle
          cx="230"
          cy="60"
          r="2.5"
          fill="#FFE8AD"
          style={{
            filter: "drop-shadow(0 0 5px #FFC75E)",
          }}
        />
      </motion.svg>

      {/* DOCUMENT SCROLL */}
      <motion.svg
        viewBox="0 0 140 145"
        className="
          relative z-10
          h-[100px] w-[91px]
          sm:h-[115px] sm:w-[105px]
          md:h-[125px] md:w-[115px]
        "
        fill="none"
        initial={reduceMotion ? false : { opacity: 0, y: 12, scale: 0.92 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 1.3,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{
          filter: `
            drop-shadow(0 0 3px #FFD47B)
            drop-shadow(0 0 9px rgba(255,181,62,.85))
            drop-shadow(0 0 19px rgba(255,167,42,.35))
          `,
        }}
      >
        {/* MAIN PARCHMENT BODY */}
        <path
          d="
            M29 13
            H105
            Q119 13 119 27
            V105
            Q119 118 106 118
            H23
            Q12 118 12 106
            V30
            Q12 13 29 13
            Z
          "
          stroke="#FFE6AD"
          strokeWidth="2.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* ROLLED TOP RIGHT EDGE */}
        <path
          d="
            M105 13
            C119 9 130 13 126 25
            C124 32 118 34 111 33
            C119 28 119 20 105 13
          "
          stroke="#FFE6AD"
          strokeWidth="2.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* DOCUMENT TEXT LINES */}
        <path
          d="
            M34 38 H100
            M34 51 H100
            M34 64 H100
            M34 77 H83
          "
          stroke="#FFE8B8"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* BOTTOM ROLLED SCROLL */}
        <path
          d="
            M12 105
            C5 112 9 126 22 126
            H104
            C116 126 122 119 119 106
            M22 118
            H100
          "
          stroke="#FFE6AD"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* APPROVAL SEAL */}
        <circle
          cx="94"
          cy="91"
          r="14"
          fill="#243A23"
          stroke="#FFE6AD"
          strokeWidth="2.5"
        />

        <path
          d="M87 91 L92 96 L101 86"
          stroke="#FFE8B5"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
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
        min-h-[420px]
        h-[clamp(440px,65svh,620px)]
        w-full items-center justify-center
        overflow-hidden
        bg-[#102619]
        pt-[65px]
        sm:h-[clamp(470px,67svh,640px)]
        sm:pt-[75px]
        md:h-[clamp(490px,68svh,660px)]
        lg:h-[clamp(520px,70svh,690px)]
        xl:h-[680px]
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
        <img
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
          pb-10
          sm:pb-12
          md:pb-14
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
            mt-3
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
      <TermsCreamWave />
    </section>
  );
}
