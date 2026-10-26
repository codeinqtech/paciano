
import { useEffect, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

import bannerAboutImg from "@/images/about/MOJO8117.jpg"
import contactLeafIcon from "@/images/contact/paciano-leaf-gold-transparent.png";

const PARCHMENT = "#eee9dc";
const GOLD = "#D6BE84";
const OLIVE = "#8faa42";

const contentSequence = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.55,
      },
    },
  };

const textReveal = {
    hidden: {
      opacity: 0,
      y: 24,
      filter: "blur(7px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

function CreamJoinFromAbove() {
  return (
    <div
      className="pointer-events-none absolute bottom-0 left-0 z-20 h-10 w-full sm:h-14 md:h-[68px] lg:h-[76px]"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 76"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <path
          d="M0,76 L0,44 C120,62 210,18 360,28 C510,38 620,68 780,52 C940,36 1080,14 1260,32 C1380,44 1440,38 1440,48 L1440,76 Z"
          fill={PARCHMENT}
        />
      </svg>
    </div>
  );
}

export default function AboutUsHero() {
  const ref = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.04, 1.09]
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const instant = Boolean(reduceMotion);

  return (
    <section
      ref={ref}
      className="
        relative isolate flex min-h-[100svh] min-h-[100dvh]
        w-full items-center justify-center overflow-hidden
        bg-[#10271d]
        py-24 sm:py-28 md:py-24 lg:py-28
        [@media(orientation:landscape)_and_(max-height:500px)]:min-h-[560px]
        [@media(orientation:landscape)_and_(max-height:500px)]:py-16
      "
    >
      {/* CINEMATIC BACKGROUND */}
      <motion.div
        className="absolute inset-0 -z-10 overflow-hidden"
        initial={instant ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        // transition={{ duration: instant ? 0 : 1.4 }}
        transition={{
            duration: instant ? 0 : 2.2,
            ease: [0.16, 1, 0.3, 1],
          }}
        style={{
          y: reduceMotion ? 0 : imageY,
          scale: reduceMotion ? 1.02 : imageScale,
        }}
      >
        <img
          src={bannerAboutImg}
          alt="The natural surroundings and architecture of Paciano"
          fetchPriority="high"
        //   className="
        //     h-full w-full object-cover
        //     object-[58%_center]
        //     sm:object-[54%_center]
        //     lg:object-center
        //   "
        className="h-full w-full object-cover
            object-[60%_center]
            sm:object-[54%_center]
            lg:object-center"
          style={{
            filter: "brightness(0.91) saturate(1.06) contrast(1.03)",
          }}
        />
      </motion.div>

      {/* WARM CINEMATIC GRADING */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,24,19,.42) 0%, rgba(8,24,19,.12) 32%, rgba(5,20,15,.32) 72%, rgba(5,20,15,.56) 100%)",
        }}
      />

      {/* RESPONSIVE TEXT LEGIBILITY */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 45%, rgba(3,17,12,.55) 0%, rgba(3,17,12,.31) 38%, transparent 76%)",
        }}
      />

      {/* SYNCHRONIZED CONTENT SEQUENCE */}
      <motion.div
        variants={contentSequence}
        initial="hidden"
        animate="visible"
        className="
          relative z-10 mx-auto flex w-full max-w-[1120px]
          flex-col items-center px-5 text-center
          sm:px-8 md:px-10
          [@media(orientation:landscape)_and_(max-height:500px)]:py-2
        "
      >
        {/* EYEBROW */}
        <motion.div
          variants={textReveal}
          className="
            mb-5 flex max-w-full items-center justify-center
            gap-3 sm:mb-7 sm:gap-5 md:gap-7
          "
        >
          <span
            className="h-px w-7 shrink-0 sm:w-12 md:w-16"
            style={{
              background: `linear-gradient(90deg, transparent, ${GOLD})`,
            }}
          />

          <span
            className="
              font-jost text-[9px] font-medium uppercase
              tracking-[0.22em] sm:text-[10px]
              sm:tracking-[0.34em] md:text-[11px]
            "
            style={{ color: "#F5E2B5" }}
          >
            THE SOUL OF PACIANO
          </span>

          <span
            className="h-px w-7 shrink-0 sm:w-12 md:w-16"
            style={{
              background: `linear-gradient(90deg, ${GOLD}, transparent)`,
            }}
          />
        </motion.div>

        {/* FIRST HEADLINE LINE // text-[clamp(2.25rem,7.3vw,5.25rem)]*/}
        <motion.h1
          variants={textReveal}
          className="
            w-full max-w-[1000px]
            font-['Cormorant_Garamond']            
            text-[clamp(1.8rem,7.3vw,4.25rem)]
            font-medium leading-[0.98]
            tracking-[-0.035em] text-white
            [@media(orientation:landscape)_and_(max-height:500px)]:text-[clamp(2rem,5vw,3.5rem)]
          "
          style={{
            textShadow: "0 4px 30px rgba(0,0,0,.35)",
          }}
        >
          Where Nature Whispers,
        </motion.h1>

        {/* SECOND HEADLINE LINE   text-[clamp(2.3rem,7.5vw,5.35rem)]*/}
        <motion.p
          variants={textReveal}
          className="
            mt-1 w-full
            font-['Cormorant_Garamond']
            text-[clamp(1.9rem,7.5vw,5.35rem)]
            font-medium italic leading-[0.98]
            tracking-[-0.035em]
            [@media(orientation:landscape)_and_(max-height:500px)]:text-[clamp(2rem,5vw,3.6rem)]
          "
          style={{
            color: OLIVE,
            textShadow: "0 4px 28px rgba(0,0,0,.35)",
          }}
        >
          Luxury Lingers.
        </motion.p>

        {/* GOLD LEAF DIVIDER */}
        <motion.div
          variants={textReveal}
          className="
            my-6 flex w-full max-w-[300px]
            items-center justify-center gap-4
            sm:my-8 sm:max-w-[390px] sm:gap-6
            md:my-9
            [@media(orientation:landscape)_and_(max-height:500px)]:my-4
          "
        >
          <motion.span
            initial={instant ? false : { scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{
              duration: instant ? 0 : 0.9,
              delay: instant ? 0 : 1.5,
            }}
            className="h-px flex-1 origin-right"
            style={{
              background: `linear-gradient(90deg, transparent, ${GOLD})`,
            }}
          />

          <motion.img
            src={contactLeafIcon}
            alt=""
            aria-hidden="true"
            initial={instant ? false : { opacity: 0, scale: 0.75, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
                duration: instant ? 0 : 1.4,
                delay: instant ? 0 : 2.0,
                ease: [0.16, 1, 0.3, 1],
            }}
            className="
              h-7 w-7 shrink-0 object-contain
              sm:h-10 sm:w-10 md:h-12 md:w-12
            "
            style={{
              filter: "drop-shadow(0 2px 5px rgba(0,0,0,.3))",
            }}
          />

          <motion.span
            initial={instant ? false : { scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{
              duration: instant ? 0 : 0.9,
              delay: instant ? 0 : 1.5,
            }}
            className="h-px flex-1 origin-left"
            style={{
              background: `linear-gradient(90deg, ${GOLD}, transparent)`,
            }}
          />
        </motion.div>

        {/* DESCRIPTION — LAST TEXT ELEMENT */}
        <motion.p
          variants={textReveal}
          className="
            mx-auto w-full max-w-[580px] px-1
            font-cormorant text-[clamp(1.05rem,2.5vw,1.45rem)]
            font-light italic leading-[1.55]
            text-white/95
            sm:px-2
            [@media(orientation:landscape)_and_(max-height:500px)]:max-w-[650px]
            [@media(orientation:landscape)_and_(max-height:500px)]:text-base
          "
          style={{
            textShadow: "0 2px 14px rgba(0,0,0,.5)",
          }}
        >
          An intimate escape where refined comfort, natural beauty, and
          thoughtful hospitality come together in perfect harmony.
        </motion.p>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={instant ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: instant ? 0 : 2.5, duration: 0.9 }}
        className="
          absolute bottom-[max(2.5rem,env(safe-area-inset-bottom))]
          left-1/2 z-10 flex -translate-x-1/2
          flex-col items-center gap-2
          [@media(orientation:landscape)_and_(max-height:500px)]:hidden
        "
      >
        <span
          className="
            font-jost text-[9px] uppercase
            tracking-[0.28em] text-white/75
          "
        >
          Scroll
        </span>

        <motion.span
          animate={
            instant
              ? { opacity: 0.65 }
              : { scaleY: [0.45, 1, 0.45], opacity: [0.35, 1, 0.35] }
          }
          transition={{
            duration: 2,
            repeat: instant ? 0 : Infinity,
            ease: "easeInOut",
          }}
          className="h-7 w-px origin-top sm:h-9"
          style={{
            background: `linear-gradient(to bottom, ${GOLD}, transparent)`,
          }}
        />
      </motion.div>

      <CreamJoinFromAbove />
    </section>
  );
}
