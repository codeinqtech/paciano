import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

import policyBanner from "@/images/privacy/policy-hero.png";
const CREAM = "#F8F3E9";
const GOLD = "#D9B66E";
const LIGHT_GOLD = "#F8DFA5";

const sequence = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.22,
    },
  },
};

const reveal = {
  hidden: {
    opacity: 0,
    y: 22,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.15,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

/* ----------------------------------
   ANIMATED GOLDEN DIAMOND LOCK
----------------------------------- */

function PrivacyDiamond() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="
        relative flex items-center justify-center
        w-[155px] h-[155px]
        sm:w-[185px] sm:h-[185px]
        md:w-[225px] md:h-[225px]
        lg:w-[255px] lg:h-[255px]
      "
      animate={
        reduceMotion
          ? {}
          : {
              y: [0, -9, 0],
            }
      }
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* SOFT GOLDEN ATMOSPHERIC GLOW */}
      <motion.div
        className="absolute inset-[-25%] rounded-full"
        animate={
          reduceMotion
            ? {}
            : {
                opacity: [0.35, 0.7, 0.35],
                scale: [0.92, 1.08, 0.92],
              }
        }
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(242,190,91,.30) 0%, rgba(218,166,72,.13) 40%, transparent 72%)",
          filter: "blur(24px)",
        }}
      />

      {/* OUTER GOLDEN HALO */}
      {/* <motion.svg
        viewBox="0 0 340 340"
        className="absolute inset-[-20%] h-[140%] w-[140%]"
        fill="none"
        animate={
          reduceMotion
            ? {}
            : {
                rotate: [0, 360],
              }
        }
        transition={{
          duration: 65,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <circle
          cx="170"
          cy="170"
          r="157"
          stroke={GOLD}
          strokeWidth="1.1"
          opacity=".48"
          strokeDasharray="490 497"
          strokeLinecap="round"
        />

        <circle
          cx="170"
          cy="170"
          r="157"
          stroke={LIGHT_GOLD}
          strokeWidth="2"
          strokeDasharray="85 902"
          strokeLinecap="round"
          opacity=".9"
        />
      </motion.svg> */}

      {/* OUTER GOLDEN HALO - ROTATING */}
      <div
        className="
  pointer-events-none
  absolute inset-0
  z-0
  flex items-center justify-center
"
      >
        <motion.svg
          viewBox="0 0 340 340"
          className="
      absolute
      w-[116%]
      h-[116%]
      max-w-none
    "
          fill="none"
          animate={reduceMotion ? {} : { rotate: 360 }}
          transition={{
            duration: 65,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* MAIN CIRCULAR ORBIT */}
          <circle
            cx="170"
            cy="170"
            r="157"
            stroke={GOLD}
            strokeWidth="1.1"
            opacity=".48"
            strokeDasharray="490 497"
            strokeLinecap="round"
          />

          {/* REVOLVING GOLDEN LIGHT */}
          <circle
            cx="170"
            cy="170"
            r="157"
            stroke={LIGHT_GOLD}
            strokeWidth="2"
            strokeDasharray="85 902"
            strokeLinecap="round"
            opacity=".95"
            filter="url(#policyDiamondGlow)"
          />
        </motion.svg>
      </div>

      {/* SECONDARY ORBIT */}
      <motion.div
        className="absolute inset-[5%] rounded-full border border-[#D9B66E]/20"
        animate={
          reduceMotion
            ? {}
            : {
                scale: [1, 1.045, 1],
                opacity: [0.3, 0.65, 0.3],
              }
        }
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* DIAMOND EMBLEM */}
      <motion.svg
        viewBox="0 0 220 220"
        className="relative z-10 h-full w-full overflow-visible"
        fill="none"
      >
        <defs>
          <filter
            id="policyDiamondGlow"
            x="-80%"
            y="-80%"
            width="260%"
            height="260%"
          >
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient
            id="policyDiamondGradient"
            x1="0"
            y1="0"
            x2="220"
            y2="220"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#FFF6D8" />
            <stop offset="35%" stopColor="#D6A64F" />
            <stop offset="65%" stopColor="#FFF1C3" />
            <stop offset="100%" stopColor="#C38D36" />
          </linearGradient>

          <radialGradient id="policyDiamondFill">
            <stop offset="0%" stopColor="#E9B957" stopOpacity=".24" />
            <stop offset="100%" stopColor="#E9B957" stopOpacity=".025" />
          </radialGradient>
        </defs>

        {/* DIAMOND LIGHT GLOW */}
        <motion.path
          d="M110 12 L208 110 L110 208 L12 110 Z"
          stroke="#F9CF78"
          strokeWidth="8"
          opacity=".5"
          filter="url(#policyDiamondGlow)"
          animate={
            reduceMotion
              ? {}
              : {
                  opacity: [0.3, 0.85, 0.3],
                }
          }
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* GLASS DIAMOND */}
        <path
          d="M110 12 L208 110 L110 208 L12 110 Z"
          fill="url(#policyDiamondFill)"
          stroke="url(#policyDiamondGradient)"
          strokeWidth="3"
          strokeLinejoin="round"
        />

        {/* INNER GLASS EDGE */}
        <path
          d="M110 21 L199 110 L110 199 L21 110 Z"
          stroke="#FFF1CD"
          strokeWidth="1"
          opacity=".75"
        />

        {/* INNER REFLECTION */}
        <path
          d="M110 12 L208 110 L110 208"
          stroke="#FFF5D9"
          strokeWidth="1.2"
          opacity=".65"
        />

        {/* LOCK SHACKLE */}
        <motion.path
          d="
            M91 108
            V83
            C91 61 129 61 129 83
            V108
          "
          stroke="#FFF0C8"
          strokeWidth="3.2"
          strokeLinecap="round"
          fill="none"
          initial={reduceMotion ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.8,
            ease: "easeInOut",
          }}
        />

        {/* LOCK BODY */}
        <motion.rect
          x="81"
          y="103"
          width="58"
          height="48"
          rx="7"
          fill="#D9B66E"
          fillOpacity=".12"
          stroke="#FFF0C8"
          strokeWidth="3"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: 1,
            ease: "easeOut",
          }}
          style={{
            transformOrigin: "110px 127px",
          }}
        />

        {/* KEYHOLE */}
        <motion.g
          animate={
            reduceMotion
              ? {}
              : {
                  opacity: [0.7, 1, 0.7],
                }
          }
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <circle cx="110" cy="121" r="5" fill="#FFF2D0" />
          <path d="M110 125 L106 136 H114 Z" fill="#FFF2D0" />
        </motion.g>
      </motion.svg>
    </motion.div>
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

/* ----------------------------------
   MAIN POLICY HERO
----------------------------------- */

export default function PolicyHero() {
  const ref = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.09]);

  return (
    <section
      ref={ref}
      className="
        relative isolate w-full overflow-hidden
        h-[340px]
        min-[390px]:h-[360px]
        sm:h-[390px]
        md:h-[410px]
        lg:h-[420px]
        xl:h-[440px]
      "
    >
      {/* BACKGROUND IMAGE */}
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden"
        initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
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
          src={policyBanner}
          alt=""
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
        />
      </motion.div>

      {/* CINEMATIC OVERLAY */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: `
            linear-gradient(
              90deg,
              rgba(9,23,13,.46) 0%,
              rgba(9,23,13,.30) 42%,
              rgba(9,23,13,.08) 100%
            ),
            linear-gradient(
              180deg,
              rgba(9,20,12,.12) 0%,
              transparent 45%,
              rgba(9,20,12,.22) 100%
            )
          `,
        }}
      />

      {/* HERO CONTENT */}
      <div
        className="
          relative z-20 mx-auto
          flex h-full w-full max-w-[1440px]
          items-center justify-between
          px-6
          sm:px-10
          md:px-14
          lg:px-[10%]
          xl:px-[11%]
          pb-9
        "
      >
        {/* LEFT CONTENT */}
        <motion.div
          variants={sequence}
          initial="hidden"
          animate="visible"
          className="
            relative z-20 flex
            w-[78%] max-w-[580px]
            sm:w-[65%]
            md:w-[60%]
            lg:w-[58%]
            flex-col items-start
            text-left

            mt-8
            min-[390px]:mt-6
            sm:mt-0

            md:w-[60%]
            lg:w-[58%]
            "
        >
          {/* EYEBROW */}
          <motion.div
            variants={reveal}
            className="
              mb-3 sm:mb-4
              flex items-center gap-3
            "
          >
            <span
              className="
                whitespace-nowrap
                font-['Cormorant_Garamond']
                text-[9px]
                min-[390px]:text-[10px]
                sm:text-[11px]
                md:text-xs
                uppercase
                tracking-[.16em]
                sm:tracking-[.22em]
                text-[#F5E5BC]
              "
            >
              Privacy & Data Protection
            </span>

            <span className="h-px w-8 sm:w-12 md:w-16 bg-[#D9B66E]" />
          </motion.div>

          {/* HEADING */}
          <motion.h1
            variants={reveal}
            className="
              font-['Cormorant_Garamond']
              text-[clamp(2.65rem,6.2vw,4.6rem)]
              font-medium italic
              leading-[.95]
              tracking-[-.035em]
              text-[#FFF8E9]
            "
            style={{
              textShadow: "0 3px 16px rgba(0,0,0,.48)",
            }}
          >
            Privacy Policy
          </motion.h1>

          {/* SUBTITLE */}
          <motion.p
            variants={reveal}
            className="
              mt-3 sm:mt-4
              font-['Cormorant_Garamond']
              text-[clamp(1rem,4.2vw,1.85rem)]
              sm:text-[clamp(1.15rem,2.5vw,1.85rem)]
              font-medium italic
              leading-tight
              text-[#F6E9CF]
              whitespace-nowrap
            "
            style={{
              textShadow: "0 2px 12px rgba(0,0,0,.55)",
            }}
          >
            Your privacy matters to us.
          </motion.p>

          {/* DECORATIVE LEAF DIVIDER */}
          <motion.div
            variants={reveal}
            className="mt-5 flex items-center gap-3"
          >
            <span className="h-px w-8 sm:w-12 bg-[#D9B66E]/90" />

            <svg
              viewBox="0 0 32 32"
              className="h-5 w-5 text-[#F2E4C4]"
              fill="none"
            >
              <path d="M16 28V12" stroke="currentColor" strokeWidth="1.3" />
              <path
                d="M15 19C7 19 5 13 6 7C13 8 16 13 16 19Z"
                fill="currentColor"
              />
              <path
                d="M17 16C18 8 23 4 29 5C29 13 24 18 17 18Z"
                fill="currentColor"
                opacity=".85"
              />
            </svg>

            <span className="h-px w-8 sm:w-12 bg-[#D9B66E]/90" />
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE - ANIMATED LOCK */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  x: 35,
                  scale: 0.85,
                  filter: "blur(8px)",
                }
          }
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1.7,
            delay: 0.65,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            absolute
            right-[2%]
            top-[48%]
            -translate-y-1/2
            flex items-center justify-center
            w-[38%]
            sm:right-[5%]
            sm:w-[35%]
            md:right-[7%]
            md:w-[33%]
            lg:right-[10%]
            lg:w-[30%]
            xl:right-[12%]
          "
        >
          <PrivacyDiamond />
        </motion.div>
      </div>

      {/* BOTTOM WAVE */}
      <PolicyWave />
    </section>
  );
}
