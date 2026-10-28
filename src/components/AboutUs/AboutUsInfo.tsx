import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";


import aboutNature from "@/images/home/about_left.webp";
import aboutHospitality from "@/images/home/about_centre.webp";
import aboutRight from "@/images/home/about_right.webp";

import dooarsLandscape from "@/images/about/dooars.png";
import leafWhisper from "@/images/button-leaf.png";

import riverside from "@/images/riverside-bliss.jpg";
// import teaGarden from "@/images/tea-garden-walks.jpg";
import teaGarden from "@/images/home/teaGarden.png";
// import culinary from "@/images/culinary-delights.jpg";
import culinary from "@/images/story.png";
import wellness from "@/images/wellness-spa.jpg";
import sustainable from "@/images/sustainable-stay.png";

const experiences = [
  {
    title: "Riverside Bliss",
    description: "Unwind by the serene river and feel the calm.",
    image: riverside,
  },
  {
    title: "Tea Garden Walks",
    description: "Stroll through lush tea gardens and breathe in freshness.",
    image: teaGarden,
  },
  {
    title: "Culinary Delights",
    description: "Savor flavors crafted from the finest local ingredients.",
    image: culinary,
  },
  {
    title: "Wellness & Spa",
    description: "Rejuvenate your mind, body and soul.",
    image: wellness,
  },
  {
    title: "Sustainable Stay",
    description: "Committed to nature and a better tomorrow.",
    image: sustainable,
  },
];

const pacianoValues = [
  {
    title: "Nature at the Heart",
    description: "Surrounded by rivers, forests and endless horizons.",
    icon: "nature",
  },
  {
    title: "Thoughtful Design",
    description: "Spaces that blend naturally with the landscape.",
    icon: "design",
  },
  {
    title: "Warm Hospitality",
    description: "Genuine care in every detail of your stay.",
    icon: "hospitality",
  },
  {
    title: "Meaningful Experiences",
    description: "Moments that help you slow down and reconnect.",
    icon: "experiences",
  },
] as const;

function ValueIcon({ type }: { type: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.15,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "paciano-emblem-drawing",
  };

  return (
    <svg
      {...common}
      viewBox="0 0 48 48"
      aria-hidden="true"
      className="paciano-emblem-drawing h-7 w-7 sm:h-8 sm:w-8"
    >
      {type === "nature" && (
        <>
          {/* Layered mountain landscape */}
          <path d="M5 31 L16 15 L22 23 L29 11 L43 31" />
          <path d="M11 23 L16 15 L20 21" />
          <path d="M25 18 L29 11 L35 20" />
          {/* Open river in the foreground */}
          <path d="M8 34 C14 30 19 38 25 34 S36 31 40 34" />
          <path d="M15 39 C20 36 26 41 33 38" />
          <path d="M34 11 L38 8" />
        </>
      )}

      {type === "design" && (
        <>
          {/* Contemporary resort architecture */}
          <path d="M6 21 L25 9 L42 18" />
          <path d="M11 21 V37 H37 V19" />
          <path d="M16 37 V25 L26 19 L33 23 V37" />
          <path d="M21 37 V29 H28 V37" />
          <path d="M8 41 H40" />
          <path d="M33 13 L37 15" />
        </>
      )}

      {type === "hospitality" && (
        <>
          {/* Open hands offering a heart */}
          <path d="M5 29 L12 24 L18 27 L23 31" />
          <path d="M43 29 L36 24 L30 27 L25 31" />
          <path d="M12 24 L9 19 L5 22" />
          <path d="M36 24 L39 19 L43 22" />
          <path d="M24 27 L18 21 C15 17 20 14 24 19 C28 14 33 17 30 21 Z" />
          <path d="M12 33 L20 39 H28 L36 33" />
          <path d="M17 42 H31" />
        </>
      )}

      {type === "experiences" && (
        <>
          {/* Organic botanical branch */}
          <path d="M13 41 C19 32 27 23 37 9" />
          <path d="M18 34 C10 34 7 28 9 23 C16 24 20 28 18 34 Z" />
          <path d="M24 27 C17 22 19 16 23 12 C29 17 29 22 24 27 Z" />
          <path d="M29 20 C29 13 35 10 41 12 C40 19 35 23 29 20 Z" />
          <path d="M14 40 H24" />
        </>
      )}
    </svg>
  );
}

function ExperienceIcon({ type }: { type: number }) {
  const common =
    "h-[38px] w-[38px] text-[#5F7138] transition-all duration-[1800ms] ease-[cubic-bezier(.22,1,.36,1)]";

  /* ============================================================
     01 — RIVERSIDE
  ============================================================ */
  if (type === 0) {
    return (
      <svg viewBox="0 0 64 64" className={common} fill="none">
        {/* sun */}
        <circle
          cx="32"
          cy="16"
          r="4"
          stroke="currentColor"
          strokeWidth="1.25"
        />

        {/* horizon */}
        <path
          d="M13 28C20 25 25 25 32 28C39 31 45 31 51 28"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />

        {/* river */}
        <path
          d="M10 36C17 32 23 32 30 36C37 40 43 40 54 35"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />

        <path
          d="M13 44C20 41 26 41 33 44C40 47 46 47 51 44"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />

        {/* tiny shore */}
        <path
          d="M18 51C25 49 38 49 46 51"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  /* ============================================================
     02 — TEA GARDEN
  ============================================================ */
  if (type === 1) {
    return (
      <svg viewBox="0 0 64 64" className={common} fill="none">
        {/* elegant central stem */}
        <path
          d="M32 53C31 42 32 31 38 13"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />

        {/* left leaf */}
        <path
          d="
            M32 38
            C23 36 17 30 17 22
            C25 23 31 29 32 37
          "
          stroke="currentColor"
          strokeWidth="1.25"
        />

        {/* right leaf */}
        <path
          d="
            M35 29
            C36 21 42 16 49 17
            C47 24 42 29 35 30
          "
          stroke="currentColor"
          strokeWidth="1.25"
        />

        {/* small leaf */}
        <path
          d="
            M31 46
            C25 44 21 40 20 35
            C26 36 30 40 32 45
          "
          stroke="currentColor"
          strokeWidth="1"
        />

        {/* tiny bud */}
        <circle cx="40" cy="12" r="1.7" fill="currentColor" />
      </svg>
    );
  }

  /* ============================================================
     03 — CULINARY
  ============================================================ */
  if (type === 2) {
    return (
      <svg viewBox="0 0 64 64" className={common} fill="none">
        {/* plate */}
        <ellipse
          cx="32"
          cy="38"
          rx="20"
          ry="7"
          stroke="currentColor"
          strokeWidth="1.2"
        />

        <ellipse
          cx="32"
          cy="37"
          rx="14"
          ry="4"
          stroke="currentColor"
          strokeWidth="0.9"
        />

        {/* food / botanical garnish */}
        <path
          d="M26 35C27 29 31 26 36 24"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
        />

        <path
          d="
            M29 30
            C25 29 23 26 24 23
            C28 24 30 26 30 30
          "
          stroke="currentColor"
          strokeWidth="1"
        />

        <path
          d="
            M34 27
            C36 23 40 21 43 22
            C41 26 38 28 34 28
          "
          stroke="currentColor"
          strokeWidth="1"
        />

        {/* plate base */}
        <path
          d="M18 48C26 51 39 51 47 48"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  /* ============================================================
     04 — WELLNESS
  ============================================================ */
  if (type === 3) {
    return (
      <svg viewBox="0 0 64 64" className={common} fill="none">
        {/* water / breathing */}
        <path
          d="
            M15 25
            C21 19 27 19 32 25
            C37 31 43 31 49 25
          "
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
        />

        <path
          d="
            M15 34
            C21 28 27 28 32 34
            C37 40 43 40 49 34
          "
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
        />

        {/* lotus */}
        <path
          d="
            M32 48
            C27 43 25 38 28 34
            C31 37 32 41 32 45
          "
          stroke="currentColor"
          strokeWidth="1.1"
        />

        <path
          d="
            M32 48
            C37 43 39 38 36 34
            C33 37 32 41 32 45
          "
          stroke="currentColor"
          strokeWidth="1.1"
        />

        <path
          d="M23 48H41"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  /* ============================================================
     05 — SUSTAINABLE STAY
  ============================================================ */

  return (
    <svg viewBox="0 0 64 64" className={common} fill="none">
      {/* earth / home */}
      <path
        d="
          M16 34
          C19 24 26 18 36 17
          C44 16 50 21 52 28
          C46 27 41 29 37 34
          C31 41 24 43 17 41
        "
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
      />

      {/* leaf */}
      <path
        d="M31 49C31 40 34 31 42 24"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />

      <path
        d="
          M33 38
          C27 36 24 32 24 27
          C30 28 34 32 34 37
        "
        stroke="currentColor"
        strokeWidth="1"
      />

      <path
        d="
          M37 31
          C39 26 43 23 48 24
          C46 29 42 32 37 33
        "
        stroke="currentColor"
        strokeWidth="1"
      />

      {/* tiny seed */}
      <circle cx="22" cy="19" r="1.5" fill="currentColor" />
    </svg>
  );
}

/* ==========================================================================
   LARGE SHADOW OF LEAVES
   ========================================================================== */

function LeafShadow({
  className = "",
  rotate = 0,
}: {
  className?: string;
  rotate?: number;
}) {
  return (
    <div
      className={`pointer-events-none absolute ${className}`}
      style={{
        transform: `rotate(${rotate}deg)`,
      }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 420 420" className="h-full w-full" fill="none">
        <g fill="#66714f" opacity="0.055">
          <path d="M42 300C80 178 178 65 342 25C310 175 195 286 42 300Z" />

          <path d="M115 365C156 244 258 145 390 112C356 246 259 342 115 365Z" />

          <path d="M0 195C35 108 108 52 203 35C174 125 102 183 0 195Z" />
        </g>

        <g stroke="#78805e" strokeWidth="1" opacity="0.09">
          <path d="M45 298C122 236 205 140 337 28" />

          <path d="M116 363C184 296 264 202 388 114" />

          <path d="M3 193C55 147 117 90 201 37" />
        </g>
      </svg>
    </div>
  );
}

/* ==========================================================================
   ORGANIC BOTANICAL SPRIG
   ========================================================================== */

function ImageLeafSprig({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 180 300"
      className={`
        pointer-events-none
        absolute
        ${className}
      `}
      style={{
        transform: flip ? "scaleX(-1)" : undefined,
      }}
      fill="none"
      aria-hidden="true"
    >
      {/* main stem */}

      <path
        d="
          M18 292
          C40 240 58 190 72 142
          C86 95 108 48 153 8
        "
        stroke="#69794a"
        strokeWidth="1.25"
        opacity="0.72"
      />

      {/* left leaf */}

      <path
        d="
          M61 177
          C36 174 17 159 10 137
          C35 136 58 148 67 169
          C68 173 67 176 61 177Z
        "
        fill="#899665"
        opacity="0.48"
      />

      {/* right leaf */}

      <path
        d="
          M73 139
          C96 131 113 113 117 91
          C94 94 77 108 70 128
          C69 133 69 137 73 139Z
        "
        fill="#758552"
        opacity="0.42"
      />

      {/* left leaf */}

      <path
        d="
          M43 221
          C22 217 8 203 4 185
          C24 186 43 197 50 214
          C51 218 49 220 43 221Z
        "
        fill="#a0aa83"
        opacity="0.36"
      />

      {/* upper right leaf */}

      <path
        d="
          M102 94
          C124 86 141 68 146 48
          C123 52 106 65 98 84
          C97 88 98 92 102 94Z
        "
        fill="#6e804c"
        opacity="0.40"
      />

      {/* tiny top leaf */}

      <path
        d="
          M126 52
          C143 46 154 34 157 20
          C141 23 130 32 125 44
          C124 47 124 50 126 52Z
        "
        fill="#899665"
        opacity="0.34"
      />

      {/* veins */}

      <path
        d="M63 173C42 160 27 148 13 139"
        stroke="#69794a"
        strokeWidth="0.65"
        opacity="0.5"
      />

      <path
        d="M73 136C90 122 104 107 115 93"
        stroke="#69794a"
        strokeWidth="0.65"
        opacity="0.45"
      />

      <path
        d="M43 218C27 207 16 196 6 187"
        stroke="#69794a"
        strokeWidth="0.6"
        opacity="0.38"
      />

      <path
        d="M102 91C118 78 133 62 145 49"
        stroke="#69794a"
        strokeWidth="0.6"
        opacity="0.4"
      />
    </svg>
  );
}



/** DOOARS LANDSCAPE  */

type PacianoOurPlaceSectionProps = {
  image: string;
};

const placeHighlights = [
  {
    title: "Rivers",
    subtitle: "That Refresh",
    icon: "river",
  },
  {
    title: "Forests",
    subtitle: "That Surround",
    icon: "forest",
  },
  {
    title: "Tea Gardens",
    subtitle: "That Inspire",
    icon: "tea",
  },
  {
    title: "Wildlife",
    subtitle: "That Delights",
    icon: "wildlife",
  },
] as const;

function PlaceHighlightIcon({
  type,
}: {
  type: (typeof placeHighlights)[number]["icon"];
}) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.25,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className="h-8 w-8 sm:h-9 sm:w-9"
      {...common}
    >
      {type === "river" && (
        <>
          <path d="M8 14 L17 7 L24 15 L32 7 L40 14" />
          <path d="M7 22 C13 17 18 27 24 22 S35 18 41 22" />
          <path d="M8 29 C14 24 19 34 25 29 S35 25 40 29" />
          <path d="M15 37 H33" />
        </>
      )}

      {type === "forest" && (
        <>
          <path d="M13 24 L20 11 L27 24 H23 L30 34 H10 L17 24 Z" />
          <path d="M29 27 L35 16 L41 27 H37 L42 35 H28" />
          <path d="M20 34 V41 M35 35 V41" />
        </>
      )}

      {type === "tea" && (
        <>
          <path d="M24 41 C23 29 25 18 32 8" />
          <path d="M26 26 C14 27 10 19 11 13 C21 14 27 18 26 26 Z" />
          <path d="M29 18 C29 10 35 7 41 8 C40 16 35 20 29 18 Z" />
          <path d="M23 34 C15 35 11 30 11 25 C19 25 23 29 23 34 Z" />
        </>
      )}

      {type === "wildlife" && (
        <>
          <path d="M9 17 L15 11 L21 15 L27 11 L33 15 L39 17 L36 26 L31 30 L29 38 H19 L17 30 L12 26 Z" />
          <path d="M17 23 L20 25 M28 25 L31 23" />
          <path d="M20 31 L24 33 L28 31" />
          <path d="M16 15 L12 8 M32 15 L36 8" />
        </>
      )}
    </svg>
  );
}




function PacianoOurPlaceSection({
  image,
}: PacianoOurPlaceSectionProps) {
  const reduceMotion = useReducedMotion();
  const instant = Boolean(reduceMotion);  

  const reveal = {
    hidden: { opacity: 0, y: instant ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: instant ? 0 : 1.35,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      aria-labelledby="paciano-our-place-title"
      className="
        relative isolate left-1/2 w-screen -translate-x-1/2
        overflow-hidden bg-[#F2EBDD]
        text-[#FFF8EB]
      "
    >
      {/* LANDSCAPE — FULL BLEED, WITHOUT A VISIBLE BOX */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-30 overflow-hidden"
        initial={instant ? false : { scale: 1.06 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{
          duration: instant ? 0 : 3.2,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <img
          src={image}
          alt=""
          className="
            h-full w-full object-cover
            object-[54%_center]
            sm:object-center
          "
        />
        {/* SUBTLE CINEMATIC TINT — PRESERVES THE LANDSCAPE */}
        {/* <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "rgba(7, 24, 16, 0.14)",
          }}
        /> */}
        {/* WARM CINEMATIC GRADE — ENTIRE LANDSCAPE */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background: `
              linear-gradient(
                135deg,
                rgba(26, 34, 21, 0.30) 0%,
                rgba(21, 34, 23, 0.24) 45%,
                rgba(16, 31, 22, 0.30) 100%
              ),
              rgba(24, 32, 20, 0.10)
            `,
          }}
        />
      </motion.div>

      {/* BEIGE SKY BLEND — CONNECTS TO THE SECTION ABOVE */}
      {/* <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background: `
            linear-gradient(
              to bottom,
              #F2EBDD 0%,
              rgba(242,235,221,0.98) 5%,
              rgba(242,235,221,0.88) 12%,
              rgba(242,235,221,0.56) 20%,
              rgba(242,235,221,0.20) 29%,
              rgba(242,235,221,0.00) 39%,
              rgba(242,235,221,0.00) 58%,
              rgba(242,235,221,0.12) 70%,
              rgba(242,235,221,0.48) 81%,
              rgba(242,235,221,0.82) 91%,
              #F2EBDD 100%
            ),
            linear-gradient(
              90deg,
              rgba(6,24,17,0.82) 0%,
              rgba(6,24,17,0.65) 28%,
              rgba(6,24,17,0.25) 62%,
              rgba(6,24,17,0.04) 100%
            )
          `,
        }}
      /> */}
      {/* SOFT BEIGE TRANSITION — TOP AND BOTTOM ONLY */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background: `
            linear-gradient(
              to bottom,
              #F2EBDD 0%,
              rgba(242,235,221,0.90) 3%,
              rgba(242,235,221,0.48) 9%,
              rgba(242,235,221,0.12) 16%,
              transparent 23%,
              transparent 72%,
              rgba(242,235,221,0.10) 80%,
              rgba(242,235,221,0.40) 88%,
              rgba(242,235,221,0.78) 95%,
              #F2EBDD 100%
            )
          `,
        }}
      />

      {/* NATURAL CINEMATIC DEPTH */}
      {/* <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `
            linear-gradient(
              180deg,
              transparent 26%,
              rgba(7,24,16,0.10) 39%,
              rgba(5,20,13,0.40) 60%,
              rgba(5,20,13,0.76) 76%,
              rgba(242,235,221,0.06) 88%,
              transparent 100%
            )
          `,
        }}
      /> */}  

      {/* CONTENT */}
      <div
        className="
          relative mx-auto flex w-full max-w-[1600px]
          flex-col justify-between
          min-h-[850px]
          px-7 pb-28 pt-40
          sm:min-h-[820px] sm:px-12 sm:pb-32 sm:pt-48
          md:min-h-[800px] md:px-16 md:pt-52
          lg:min-h-[760px] lg:px-20 lg:pb-36 lg:pt-56
          xl:min-h-[820px] xl:px-24 xl:pt-60
          [@media(orientation:landscape)_and_(max-height:500px)]:min-h-[720px]
          [@media(orientation:landscape)_and_(max-height:500px)]:pt-40
        "
      >
        {/* STORY INTRODUCTION */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="
            relative z-10 max-w-[650px]
            lg:max-w-[610px]
            xl:max-w-[680px]
          "
          // className="
          //     relative z-10
          //     max-w-[650px]
          //     lg:max-w-[610px]
          //     xl:max-w-[680px]
          //     before:pointer-events-none
          //     before:absolute
          //     before:-inset-x-8
          //     before:-inset-y-10
          //     before:-z-10
          //     before:rounded-[50%]
          //     before:content-['']
          //     sm:before:-inset-x-12
          //     sm:before:-inset-y-14
          //   "
          //   style={{
          //     isolation: "isolate",
          //   }}
          >
            {/* SOFT ROUNDED GLOW BEHIND STORY TEXT */}
          {/* <div
            aria-hidden="true"
            className="
              pointer-events-none absolute
              -inset-x-8 -inset-y-10 -z-10
              rounded-[50%]
              sm:-inset-x-12 sm:-inset-y-14
            "
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(5,24,16,0.46) 0%, rgba(5,24,16,0.26) 48%, rgba(5,24,16,0.08) 72%, transparent 100%)",
            }}
          /> */}
         {/* SOFT, WIDE BLEND BEHIND THE ENTIRE STORY */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute
              -inset-x-12 -inset-y-12
              -z-10
              sm:-inset-x-20 sm:-inset-y-16
            "
            style={{
              background: `
                linear-gradient(
                  to right,
                  transparent 0%,
                  rgba(5, 24, 16, 0.10) 8%,
                  rgba(5, 24, 16, 0.28) 22%,
                  rgba(5, 24, 16, 0.40) 50%,
                  rgba(5, 24, 16, 0.28) 78%,
                  rgba(5, 24, 16, 0.10) 92%,
                  transparent 100%
                ),
                linear-gradient(
                  to bottom,
                  transparent 0%,
                  rgba(5, 24, 16, 0.10) 8%,
                  rgba(5, 24, 16, 0.28) 25%,
                  rgba(5, 24, 16, 0.38) 50%,
                  rgba(5, 24, 16, 0.26) 75%,
                  rgba(5, 24, 16, 0.09) 92%,
                  transparent 100%
                )
              `,
              filter: "blur(26px)",
              transform: "scale(1.05)",
            }}
          />

          
          <div className="mb-6 flex items-center gap-3 sm:mb-8">
            {/* <span className="h-px w-8 bg-[#9A8553] sm:w-10" /> */}
            {/* Leaf SVG */}
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
            <span
              className="
                whitespace-nowrap
                text-[12px]
                font-medium
                uppercase
                tracking-[0.28em]              
                text-[#E5CB91]
              "
            >
              OUR PLACE
            </span>           
          </div>

          <h2
            id="paciano-our-place-title"
            className="
              max-w-[650px]
              font-['Cormorant_Garamond',serif]
              text-[clamp(38px,4.15vw,61px)]
              font-normal leading-[0.83]              
              text-[#FFF9EE]
              leading-[0.94]
              tracking-[-0.045em]
              text-[#10120F]
              drop-shadow-[0_3px_22px_rgba(0,0,0,0.14)]
            "
            style={{
              textShadow: "0 2px 8px rgba(0, 0, 0, 0.65)",
            }}
          >
            The Enchanting
            <br />
            <span
              className="
                block
                whitespace-nowrap
                font-['Cormorant_Garamond',serif]
                italic
                text-[#E5CB91]
              "
            >
              Dooars.
            </span>          
          </h2>

          <p
            className="
              mt-6 max-w-[590px]
              font-['Cormorant_Garamond']
              text-[clamp(1.4rem,2.8vw,2.2rem)]
              italic leading-[1.08]
              text-[#E5CB91]
              sm:mt-8
            "
          >
            Rivers, Forests, and Endless Horizons.
          </p>

          <p
            className="
              mt-5 max-w-[430px]
              font-manrope
              text-[clamp(12px,0.95vw,15px)]              
              leading-[1.9] text-[#FFF9EE]/90
              sm:mt-6 sm:text-[13px]
              md:text-sm
            "
            style={{
              textShadow: "0 2px 8px rgba(0,0,0,0.8)",
            }}
          >
            Where rivers wind through ancient forests and mist
            settles over distant hills, the Dooars invites you
            to slow down and reconnect with the natural world.
            Here, every horizon holds a story waiting to unfold.
          </p>

          {/* <div
    ref={ctaRef}
    className={`
      mt-[35px]
      transform
      transition-all
      duration-[1450ms]
      ease-[cubic-bezier(0.22,1,0.36,1)]
      will-change-transform

      ${
        isVisible
          ? "translate-y-0 scale-100 opacity-100"
          : "translate-y-8 scale-[0.97] opacity-0"
      }
    `}
    style={{
      transitionDelay: "2250ms",
    }}
    > */}
    <motion.div
  initial={instant ? false : { opacity: 0, y: 28, scale: 0.98 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: true, amount: 0.35 }}
  transition={{
    duration: instant ? 0 : 1.4,
    delay: instant ? 0 : 0.45,
    ease: [0.16, 1, 0.3, 1],
  }}
  className="mt-[35px] will-change-transform"
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
            Enquire About Your Stay
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

        </motion.div>

        {/* FOUR HIGHLIGHTS — PART OF THE LANDSCAPE */}
        <motion.div
          initial={instant ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: instant ? 0 : 0.18,
                delayChildren: instant ? 0 : 0.2,
              },
            },
          }}
          className="
            relative z-10 mt-16 grid w-full
            grid-cols-2 gap-x-5 gap-y-8
            sm:gap-x-8 sm:gap-y-10
            lg:ml-auto lg:mt-[-105px] lg:w-[59%]
            lg:grid-cols-4 lg:gap-x-4
            xl:w-[57%] xl:gap-x-7
          "
        >
          {/* SOFT GLOW BEHIND LANDSCAPE HIGHLIGHTS */}
          {/* <div
            aria-hidden="true"
            className="
              pointer-events-none absolute
              -inset-x-8 -inset-y-5
              -z-10 rounded-[50%]
              sm:-inset-x-12 sm:-inset-y-8
            "
            style={{
              background: `
                radial-gradient(
                  ellipse at center,
                  rgba(8, 22, 14, 0.82) 0%,
                  rgba(8, 22, 14, 0.64) 35%,
                  rgba(8, 22, 14, 0.36) 60%,
                  rgba(8, 22, 14, 0.12) 80%,
                  transparent 100%
                )
              `,
            }}
          /> */}
          {/* SOFT, WIDE BLEND BEHIND LANDSCAPE HIGHLIGHTS */}
<div
  aria-hidden="true"
  className="
    pointer-events-none absolute
    -inset-x-12 -inset-y-8
    -z-10
    sm:-inset-x-20 sm:-inset-y-12
  "
  style={{
    background: `
      linear-gradient(
        to right,
        transparent 0%,
        rgba(8, 22, 14, 0.12) 8%,
        rgba(8, 22, 14, 0.42) 22%,
        rgba(8, 22, 14, 0.70) 50%,
        rgba(8, 22, 14, 0.42) 78%,
        rgba(8, 22, 14, 0.12) 92%,
        transparent 100%
      ),
      linear-gradient(
        to bottom,
        transparent 0%,
        rgba(8, 22, 14, 0.18) 12%,
        rgba(8, 22, 14, 0.48) 32%,
        rgba(8, 22, 14, 0.62) 50%,
        rgba(8, 22, 14, 0.42) 70%,
        rgba(8, 22, 14, 0.14) 90%,
        transparent 100%
      )
    `,
    filter: "blur(22px)",
    transform: "scale(1.05)",
  }}
/>
          {placeHighlights.map((item, index) => (
            <motion.div
              key={item.title}
              variants={{
                hidden: { opacity: 0, y: instant ? 0 : 18 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: instant ? 0 : 1.15,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
              className={`
                group flex min-w-0 flex-col items-center
                text-center
                ${
                  index > 0
                    ? "lg:border-l lg:border-[#D6BE84]/35 lg:pl-3"
                    : ""
                }
              `}
              style={{
                textShadow: "0 2px 8px rgba(0, 0, 0, 0.65)",
              }}
            >
              <div
                className="
                  flex h-11 w-11 items-center justify-center
                  text-[#E0C27F]
                  transition-transform duration-700
                  group-hover:-translate-y-1
                  sm:h-12 sm:w-12
                "
              >
                <PlaceHighlightIcon type={item.icon}/>
              </div>

              <span
                className="
                  mt-3 font-jost text-[9px] font-semibold
                  uppercase tracking-[0.15em] text-[#FFF8EB]
                  sm:text-[10px] sm:tracking-[0.2em]
                "
              >
                {item.title}
              </span>

              <span
                className="
                  mt-1.5 font-['Cormorant_Garamond']
                  text-[16px] italic leading-tight
                  text-[#E5CB91]
                  sm:text-lg lg:text-[19px]
                "
              >
                {item.subtitle}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}






/* ==========================================================================
   ABOUT US
   ========================================================================== */

export default function AboutUsInfo() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);

  const [visible, setVisible] = useState(false);
  const [experienceVisible, setExperienceVisible] = useState(false);

  const valuesRef = useRef<HTMLDivElement | null>(null);
  const [valuesVisible, setValuesVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -5% 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const element = experienceRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setExperienceVisible(entry.isIntersecting);
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -12% 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const element = valuesRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setValuesVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -5% 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`
      paciano-about
      relative
      overflow-hidden
      bg-[#F2EADD]
      text-[#17251B]

      ${visible ? "paciano-about-visible" : ""}
    `}
    >
      {/* ==========================================================
            BOTANICAL BACKGROUND
        ========================================================== */}

      <div
        className="
            pointer-events-none
            absolute
            inset-0
            z-0
            overflow-hidden
        "
        aria-hidden="true"
      >
        {/* LEFT — LARGE NATURAL BRANCH */}

        <ImageLeafSprig
          className="
            left-[-15px]
            top-[20px]
            h-[510px]
            w-[285px]
            opacity-[0.72]
            "
        />
        {/* LEFT LOWER — SMALLER BRANCH */}

        <ImageLeafSprig
          className="
      left-[270px]
      bottom-[180px]
      h-[210px]
      w-[125px]
      opacity-[0.28]
    "
          flip
        />
        {/* BETWEEN TEXT + IMAGE */}

        <ImageLeafSprig
          className="
      left-[29%]
      top-[285px]
      z-[25]
      h-[260px]
      w-[145px]
      opacity-[0.65]
    "
          flip
        />
        {/* ABOVE CENTRAL IMAGE */}

        <ImageLeafSprig
          className="
      left-[48%]
      top-[-35px]
      z-[30]
      h-[220px]
      w-[130px]
      opacity-[0.58]
    "
        />
        {/* RIGHT — LARGE BRANCH */}

        <ImageLeafSprig
          className="
      right-[-20px]
      top-[10px]
      z-[25]
      h-[500px]
      w-[280px]
      opacity-[0.70]
    "
          flip
        />
        {/* RIGHT LOWER */}

        <ImageLeafSprig
          className="
      right-[220px]
      bottom-[100px]
      h-[230px]
      w-[135px]
      opacity-[0.30]
    "
        />
        {/* ======================================================
      LEFT — HUGE SOFT LEAF SHADOW
  ====================================================== */}

        <LeafShadow
          className="
      left-[-145px]
      top-[30px]
      h-[620px]
      w-[520px]
    "
          rotate={-8}
        />

        {/* ======================================================
      RIGHT — HUGE SOFT LEAF SHADOW
  ====================================================== */}

        <LeafShadow
          className="
      right-[-155px]
      top-[90px]
      h-[600px]
      w-[510px]
    "
          rotate={8}
        />

        {/* ======================================================
      EXTRA FAINT LEAF SILHOUETTES
  ====================================================== */}

        <svg
          viewBox="0 0 500 700"
          className="
      absolute
      left-[-90px]
      top-[260px]
      h-[600px]
      w-[430px]
      opacity-[0.12]
    "
          fill="none"
        >
          <path
            d="
        M110 650
        C125 530 145 400 190 280
        C220 195 255 110 330 35
      "
            stroke="#78845F"
            strokeWidth="1.2"
          />

          <path
            d="
        M175 320
        C115 300 75 260 72 205
        C125 213 165 252 178 300
      "
            fill="#89936F"
            opacity=".38"
          />

          <path
            d="
        M195 255
        C255 235 300 190 315 135
        C260 148 215 190 194 238
      "
            fill="#89936F"
            opacity=".30"
          />

          <path
            d="
        M145 420
        C90 400 55 365 52 315
        C102 325 137 360 150 405
      "
            fill="#89936F"
            opacity=".28"
          />
        </svg>

        <svg
          viewBox="0 0 500 700"
          className="
      absolute
      right-[-110px]
      top-[210px]
      h-[600px]
      w-[430px]
      rotate-[4deg]
      opacity-[0.11]
    "
          fill="none"
        >
          <path
            d="
        M390 650
        C375 530 355 400 310 280
        C280 195 245 110 170 35
      "
            stroke="#78845F"
            strokeWidth="1.2"
          />

          <path
            d="
        M325 320
        C385 300 425 260 428 205
        C375 213 335 252 322 300
      "
            fill="#89936F"
            opacity=".38"
          />

          <path
            d="
        M305 255
        C245 235 200 190 185 135
        C240 148 285 190 306 238
      "
            fill="#89936F"
            opacity=".30"
          />

          <path
            d="
        M355 420
        C410 400 445 365 448 315
        C398 325 363 360 350 405
      "
            fill="#89936F"
            opacity=".28"
          />
        </svg>
      </div>

      {/* ==========================================================
          MAIN CONTENT
      ========================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1600px]

          px-7
          pt-[70px]
          pb-[70px]

          sm:px-10

          lg:px-[70px]
          lg:pt-[70px]
          lg:pb-[90px]

          xl:px-[90px]
        "
      >
        {/* ========================================================
          TOP STORY
        ======================================================== */}

        <div className="grid items-center lg:grid-cols-[34%_66%]">
          {/* ======================================================
                LEFT — TEXT
            ====================================================== */}

          <div
            className="
                relative
                z-30
                max-w-[550px]
                lg:pr-[35px]
                "
          >
            {/* ABOUT PACIANO */}

            <div
              className="
            paciano-reveal

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
                About Paciano
              </span>
            </div>

            {/* ====================================================
            EXACT HEADLINE STYLE
        ==================================================== */}

            <h2
              className="
            paciano-reveal
            paciano-delay-1

            font-cormorant

            text-[45px]
            leading-[0.91]

            tracking-[-0.035em]

            text-[#17251B]

            sm:text-[65px]
            lg:text-[72px]
            xl:text-[67px]
          "
            >
              <span className="block">Inspired By</span>

              <span className="block">Nature.</span>

              <span
                className="
              mt-[3px]
              block

              italic
              font-normal

              text-[#78943F]
            "
              >
                Created For You.
              </span>
            </h2>

            {/* ====================================================
            DESCRIPTION
        ==================================================== */}

            <p
              className="
            paciano-reveal
            paciano-delay-2

            mt-[32px]

            max-w-[400px]

            font-manrope
            text-[12px]
            leading-[1.85]

            text-[#50584F]

            sm:text-[15px]
          "
            >
              Paciano is more than a resort — it&apos;s a sanctuary where
              nature, comfort and genuine hospitality come together to create
              unforgettable moments.{" "}
            </p>
            <p
              className="
            paciano-reveal
            paciano-delay-2

            mt-[20px]

            max-w-[400px]

            font-manrope
            text-[12px]
            leading-[1.85]
              
            text-[#50584F]

            sm:text-[14px]
          "
            >
              Nestled in serene landscapes of Dooars, our retreat is
              thoughtfully designed for those who seek a deeper connection with
              nature, meaningful experiences and time that truly belongs to
              themselves.
            </p>
          </div>

          {/* ======================================================
                RIGHT — THE THREE PHOTOGRAPHIC PIECES
            ====================================================== */}       

          <div          
          className="
            relative
            mt-10
            h-[clamp(360px,105vw,500px)]
            w-full
            sm:mt-12
            sm:h-[530px]
            lg:mt-0
            lg:h-[585px]
            lg:translate-x-[3%]
            xl:translate-x-[4%]
          "
          
            // className="
            //   relative
            //   mt-[50px]
            //   h-[530px]
            //   lg:mt-0
            //   lg:h-[585px]
            //   lg:translate-x-[3%]
            //   xl:translate-x-[4%]
            // "
          >
            {/* ==========================================================
                SOFT ATMOSPHERIC GLOW
            ========================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                z-0
                h-[500px]
                w-[600px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#D7D9C5]/25
                blur-[90px]
              "
            />

            {/* ==========================================================
                LEFT — NATURE slightly behind center
            ========================================================== */}

            <div
              className="
                paciano-reveal
                paciano-delay-2
                paciano-photo
                paciano-photo-left
                group

                absolute
                left-[0%]
                top-[82px]
                z-20

                h-[365px]
                w-[31%]
                overflow-hidden
                rounded-[78px_78px_58px_58px]
                bg-[#E9E1D1]

                shadow-[0_32px_75px_rgba(45,48,35,.16)]
                sm:top-[82px]
                sm:h-[365px]
                sm:rounded-[60px_60px_42px_42px]
                lg:rounded-[78px_78px_58px_58px]
              "
              // className="
              //   paciano-reveal
              //   paciano-delay-2
              //   paciano-photo
              //   paciano-photo-left
              //   group
              //   absolute
              //   left-0
              //   top-[16%]
              //   z-20
              //   h-[70%]
              //   w-[31%]
              //   overflow-hidden
              //   rounded-[38px_38px_22px_22px]
              //   bg-[#E9E1D1]
              //   shadow-[0_20px_45px_rgba(45,48,35,.16)]
              //   sm:top-[82px]
              //   sm:h-[365px]
              //   sm:rounded-[60px_60px_42px_42px]
              //   lg:rounded-[78px_78px_58px_58px]
              // "
                          >
              {/* LUXURY DOUBLE RIM */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-[6px]
                  z-30
                  rounded-[72px_72px_52px_52px]
                  border
                  border-[#FFFDF6]/90
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-[10px]
                  z-30
                  rounded-[68px_68px_48px_48px]
                  border
                  border-[#F4EEDF]/55
                "
              />

              <img
                src={aboutNature}
                alt="Nature surrounding Paciano"
                className="
                  h-full
                  w-full
                  object-cover

                  transition-transform
                  duration-[5000ms]
                  ease-[cubic-bezier(.22,1,.36,1)]

                  group-hover:scale-[1.055]
                "
                style={{
                  objectPosition: "center center",
                }}
              />

              {/* cinematic warmth */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  z-10

                  bg-gradient-to-t
                  from-[#172319]/[0.13]
                  via-transparent
                  to-[#fff8e8]/[0.10]
                "
              />

              {/* soft sunlight */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-[10%]
                  top-[8%]
                  h-[150px]
                  w-[190px]
                  rounded-full
                  bg-[#FFF8E7]/[0.10]
                  blur-[50px]
                "
              />
            </div>

            {/* ==========================================================
              CENTER — HOSPITALITY             
              ========================================================== */}

            <div
              className="
                paciano-reveal
                paciano-delay-3
                paciano-photo
                paciano-photo-center
                group

                absolute
                left-[29%]
                top-[0px]

                z-30

                h-[475px]
                w-[43%]

                overflow-hidden

                rounded-[92px_92px_66px_66px]

                bg-[#E9E1D1]

                shadow-[0_42px_100px_rgba(40,42,30,.22)]
              "
            >
              {/* MAIN WHITE RIM */}

              <div
                className="
        pointer-events-none
        absolute
        inset-[6px]
        z-30
        rounded-[86px_86px_60px_60px]
        border
        border-[#FFFDF7]/95
      "
              />

              {/* SECOND INNER RIM */}

              <div
                className="
        pointer-events-none
        absolute
        inset-[10px]
        z-30
        rounded-[82px_82px_56px_56px]
        border
        border-[#F5EDDE]/65
      "
              />

              <img
                src={aboutHospitality}
                alt="Genuine hospitality at Paciano"
                className="
        h-full
        w-full
        object-cover

        transition-transform
        duration-[5500ms]
        ease-[cubic-bezier(.22,1,.36,1)]

        group-hover:scale-[1.055]
      "
                style={{
                  // objectPosition: "center center",
                  objectPosition: "62% center",
                }}
              />

              {/* cinematic grading */}

              <div
                className="
        pointer-events-none
        absolute
        inset-0
        z-10

        bg-gradient-to-t
        from-[#172319]/[0.16]
        via-transparent
        to-[#fff8e8]/[0.11]
      "
              />

              {/* warm sunlight */}

              <div
                className="
        pointer-events-none
        absolute
        left-[12%]
        top-[6%]
        h-[200px]
        w-[210px]
        rounded-full
        bg-[#FFF7DE]/[0.10]
        blur-[60px]
      "
              />

              {/* inner luxury shadow */}

              <div
                className="
        pointer-events-none
        absolute
        inset-0
        z-20
        rounded-[92px_92px_66px_66px]
        shadow-[inset_0_0_45px_rgba(30,40,25,.12)]
      "
              />
            </div>

            {/* ==========================================================
      RIGHT — CONSCIOUS LIVING
      overlaps CENTER
  ========================================================== */}

            <div
              className="
    paciano-reveal
    paciano-delay-4
    paciano-photo
    paciano-photo-right
    group

    absolute
    left-[72%]
    top-[82px]

    z-20

    h-[350px]
    w-[29%]

    overflow-hidden

    rounded-[78px_78px_54px_54px]

    bg-[#E9E1D1]

    shadow-[0_32px_75px_rgba(45,48,35,.16)]
  "
            >
              {/* ======================================================
        IMPORTANT:
        RIGHT IMAGE NOW HAS THE SAME WHITE LUXURY RIM
    ====================================================== */}

              <div
                className="
        pointer-events-none
        absolute
        inset-[6px]
        z-30
        rounded-[72px_72px_48px_48px]
        border
        border-[#FFFDF6]/95
      "
              />

              <div
                className="
        pointer-events-none
        absolute
        inset-[10px]
        z-30
        rounded-[68px_68px_44px_44px]
        border
        border-[#F4EEDF]/60
      "
              />

              <img
                src={aboutRight}
                alt="Conscious living and dining"
                className="
        h-full
        w-full
        object-cover

        transition-transform
        duration-[4500ms]
        ease-[cubic-bezier(.22,1,.36,1)]

        group-hover:scale-[1.06]
      "
                style={{
                  objectPosition: "center center",
                }}
              />

              <div
                className="
        pointer-events-none
        absolute
        inset-0
        z-10

        bg-gradient-to-t
        from-[#172319]/[0.12]
        via-transparent
        to-[#fff8e8]/[0.10]
      "
              />

              <div
                className="
        pointer-events-none
        absolute
        inset-0
        z-20
        rounded-[78px_78px_54px_54px]
        shadow-[inset_0_0_38px_rgba(30,40,25,.10)]
      "
              />
            </div>

            {/* ==========================================================
      BOTANICAL BRANCH — WRAPS THE IMAGE GROUP
  ========================================================== */}

            {/* ==========================================================
    BOTANICAL BRANCH — BENEATH LEFT IMAGE
    Dense luxury foliage exactly like the reference
========================================================== */}

            <svg
              viewBox="0 0 360 220"
              className="
    pointer-events-none
    absolute
    left-[0%]
    bottom-[-2px]
    z-[35]
    h-[190px]
    w-[360px]
    overflow-visible
    text-[#78865C]
    paciano-bottom-branch
  "
              fill="none"
              aria-hidden="true"
            >
              {/* MAIN DELICATE STEM */}

              <path
                d="
      M8 207
      C45 194 77 178 106 158
      C137 137 165 111 193 82
      C220 54 247 32 279 15
    "
                stroke="currentColor"
                strokeWidth="1.15"
                strokeLinecap="round"
                opacity="0.62"
              />

              {/* SECONDARY FINE STEM */}

              <path
                d="
      M64 184
      C94 164 119 144 139 119
      C158 96 173 72 181 45
    "
                stroke="currentColor"
                strokeWidth="0.7"
                strokeLinecap="round"
                opacity="0.34"
              />

              {/* ==========================================================
      DELICATE LEAVES
      Long / narrow / slightly translucent
  ========================================================== */}

              <g fill="currentColor">
                {/* leaf 1 */}
                <path
                  d="
        M48 190
        C29 186 17 174 13 157
        C32 160 46 170 53 184
        C54 187 52 189 48 190Z
      "
                  opacity="0.34"
                />

                {/* leaf 2 */}
                <path
                  d="
        M76 176
        C56 170 45 157 42 140
        C61 145 75 156 81 170
        C82 173 80 175 76 176Z
      "
                  opacity="0.27"
                />

                {/* leaf 3 */}
                <path
                  d="
        M104 158
        C84 153 73 141 70 124
        C89 129 103 140 109 153
        C110 156 108 158 104 158Z
      "
                  opacity="0.39"
                />

                {/* leaf 4 */}
                <path
                  d="
        M121 148
        C126 129 138 114 155 105
        C154 123 143 140 128 150
        C125 152 122 151 121 148Z
      "
                  opacity="0.31"
                />

                {/* leaf 5 */}
                <path
                  d="
        M151 122
        C132 116 121 104 118 88
        C137 92 151 103 157 116
        C158 119 156 121 151 122Z
      "
                  opacity="0.34"
                />

                {/* leaf 6 */}
                <path
                  d="
        M166 110
        C172 91 185 77 202 69
        C201 87 190 103 174 113
        C171 115 168 114 166 110Z
      "
                  opacity="0.38"
                />

                {/* leaf 7 */}
                <path
                  d="
        M197 82
        C181 75 172 64 170 50
        C187 54 199 63 204 76
        C205 79 202 82 197 82Z
      "
                  opacity="0.28"
                />

                {/* leaf 8 */}
                <path
                  d="
        M217 67
        C224 51 236 39 250 34
        C248 50 239 63 225 70
        C222 71 219 70 217 67Z
      "
                  opacity="0.36"
                />

                {/* leaf 9 */}
                <path
                  d="
        M246 43
        C232 38 224 29 222 17
        C237 20 247 28 251 38
        C252 41 250 43 246 43Z
      "
                  opacity="0.25"
                />

                {/* tiny top leaf */}
                <path
                  d="
        M268 28
        C274 17 283 10 293 8
        C290 19 283 27 273 31
        C270 32 268 31 268 28Z
      "
                  opacity="0.32"
                />
              </g>

              {/* ==========================================================
      FINE LEAF VEINS
  ========================================================== */}

              <g
                stroke="#65744D"
                strokeWidth="0.55"
                strokeLinecap="round"
                opacity="0.42"
              >
                <path d="M49 187C35 176 24 166 15 159" />
                <path d="M77 173C63 163 51 152 43 142" />
                <path d="M105 155C91 145 79 134 71 126" />
                <path d="M125 148C136 133 146 118 153 107" />
                <path d="M152 119C138 109 126 99 119 90" />
                <path d="M169 110C181 95 192 81 200 71" />
                <path d="M198 79C187 69 177 59 172 51" />
                <path d="M219 67C231 54 241 42 248 36" />
                <path d="M247 41C237 33 228 24 224 19" />
                <path d="M270 28C279 19 286 12 291 9" />
              </g>

              {/* ==========================================================
      TINY WARM BOTANICAL SEEDS
  ========================================================== */}

              <g fill="#B6A66E" opacity="0.48">
                <circle cx="91" cy="167" r="1.7" />
                <circle cx="133" cy="135" r="1.8" />
                <circle cx="184" cy="94" r="1.7" />
                <circle cx="229" cy="57" r="1.8" />
                <circle cx="258" cy="35" r="1.5" />
              </g>
            </svg>

            {/* ==========================================================
    BOTANICAL BRANCH — OUTSIDE RIGHT IMAGE
    Reference-style vertical trailing branch
========================================================== */}

            <svg
              viewBox="0 0 170 430"
              className="
    pointer-events-none
    absolute
    right-[-8px]
    top-[-8px]
    z-[12]
    h-[445px]
    w-[175px]
    overflow-visible
    text-[#78865C]
    paciano-right-branch
  "
              fill="none"
              aria-hidden="true"
            >
              {/* ==========================================================
      LONG CURVED STEM
  ========================================================== */}

              <path
                d="
      M155 426
      C143 373 133 325 128 281
      C122 232 116 190 105 151
      C94 110 78 70 50 35
      C43 26 36 18 28 10
    "
                stroke="currentColor"
                strokeWidth="1.15"
                strokeLinecap="round"
                opacity="0.62"
              />

              {/* delicate secondary stem */}

              <path
                d="
      M132 306
      C111 273 96 237 88 199
      C79 158 71 121 53 91
    "
                stroke="currentColor"
                strokeWidth="0.65"
                strokeLinecap="round"
                opacity="0.30"
              />

              {/* ==========================================================
      ELONGATED REFERENCE-STYLE LEAVES
  ========================================================== */}

              <g fill="currentColor">
                {/* lower right */}
                <path
                  d="
        M136 377
        C151 367 161 351 162 334
        C147 340 137 352 132 367
        C131 372 132 375 136 377Z
      "
                  opacity="0.32"
                />

                {/* lower left */}
                <path
                  d="
        M126 341
        C108 335 96 323 91 307
        C108 309 122 319 130 333
        C132 337 130 340 126 341Z
      "
                  opacity="0.27"
                />

                {/* right */}
                <path
                  d="
        M121 300
        C138 292 149 278 152 261
        C136 266 124 278 117 292
        C116 296 117 299 121 300Z
      "
                  opacity="0.37"
                />

                {/* left */}
                <path
                  d="
        M112 263
        C94 258 82 246 77 230
        C95 233 108 243 116 256
        C118 260 116 262 112 263Z
      "
                  opacity="0.25"
                />

                {/* right */}
                <path
                  d="
        M107 225
        C124 217 135 203 138 187
        C121 191 109 203 103 217
        C102 221 103 224 107 225Z
      "
                  opacity="0.35"
                />

                {/* left */}
                <path
                  d="
        M98 190
        C81 184 70 173 66 158
        C83 161 96 171 103 183
        C105 187 103 189 98 190Z
      "
                  opacity="0.25"
                />

                {/* right */}
                <path
                  d="
        M91 155
        C107 147 117 134 119 119
        C104 123 93 134 87 147
        C86 151 87 154 91 155Z
      "
                  opacity="0.36"
                />

                {/* left */}
                <path
                  d="
        M79 122
        C64 117 54 107 50 94
        C65 97 76 106 83 116
        C85 120 83 122 79 122Z
      "
                  opacity="0.24"
                />

                {/* right upper */}
                <path
                  d="
        M69 91
        C83 82 91 70 92 56
        C79 60 69 70 64 82
        C63 86 65 89 69 91Z
      "
                  opacity="0.34"
                />

                {/* left upper */}
                <path
                  d="
        M57 63
        C43 59 34 50 31 38
        C45 41 56 49 61 58
        C63 61 61 63 57 63Z
      "
                  opacity="0.22"
                />

                {/* very top */}
                <path
                  d="
        M43 38
        C49 26 58 17 68 13
        C66 25 58 35 48 40
        C45 41 43 40 43 38Z
      "
                  opacity="0.31"
                />
              </g>

              {/* ==========================================================
                  FINE VEINS
              ========================================================== */}

              <g
                stroke="#65744D"
                strokeWidth="0.52"
                strokeLinecap="round"
                opacity="0.38"
              >
                <path d="M136 373C147 359 156 347 161 336" />
                <path d="M127 337C113 328 101 317 93 309" />
                <path d="M120 296C133 283 144 270 151 263" />
                <path d="M112 260C98 249 86 239 79 232" />
                <path d="M106 221C120 208 132 196 137 189" />
                <path d="M98 187C84 176 73 166 67 160" />
                <path d="M90 152C103 140 113 128 118 121" />
                <path d="M79 119C67 109 57 100 51 96" />
                <path d="M68 88C79 76 87 64 91 58" />
                <path d="M56 60C45 52 36 44 32 40" />
                <path d="M45 36C54 26 62 18 67 14" />
              </g>

              {/* ==========================================================
                  TINY GOLDEN SEEDS
              ========================================================== */}

              <g fill="#B7A66C" opacity="0.46">
                <circle cx="119" cy="282" r="1.7" />
                <circle cx="104" cy="207" r="1.6" />
                <circle cx="86" cy="139" r="1.7" />
                <circle cx="63" cy="77" r="1.5" />
                <circle cx="47" cy="48" r="1.6" />
              </g>
            </svg>

            {/* ==========================================================
              SMALL FLOATING LEAF
          ========================================================== */}

            <div
              className="
                pointer-events-none
                absolute

                right-[25%]
                top-[8px]

                z-50

                flex
                h-[60px]
                w-[54px]

                items-center
                justify-center

                rounded-full

                bg-[#F2EADD]

                shadow-[0_12px_30px_rgba(55,55,40,.13)]

                paciano-leaf-orbit
              "
            >
              <svg
                viewBox="0 0 40 40"
                className="
        h-[25px]
        w-[25px]
        text-[#71883F]
      "
                fill="none"
              >
                <path
                  d="M20 34C20 25 21 17 27 8"
                  stroke="currentColor"
                  strokeWidth="1"
                />

                <path
                  d="
          M21 22
          C15 20 12 16 13 11
          C18 12 22 16 22 21
        "
                  fill="currentColor"
                  opacity=".7"
                />

                <path
                  d="
          M24 17
          C25 12 29 9 34 10
          C32 15 29 18 24 18
        "
                  fill="currentColor"
                  opacity=".45"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* ==========================================================
            PACIANO VALUES — ANIMATED ON SCROLL
        ========================================================== */}

        <div
          ref={valuesRef}
          className={`
            paciano-values
            relative z-10
            mx-auto
            mt-10 sm:mt-14 lg:mt-16 
            max-w-[1320px]
            px-1 sm:px-2
            ${valuesVisible ? "paciano-values-visible" : ""}
        `}
        >
          <div
            className="
            grid grid-cols-2
            gap-x-3 gap-y-8
            sm:gap-x-6 sm:gap-y-10
            lg:grid-cols-4 lg:gap-0
            "
          >
            {pacianoValues.map((value, index) => (
              <article
                key={value.title}
                className={`
                    paciano-value
                    relative flex flex-col items-center
                    px-2 text-center
                    ${valuesVisible ? "paciano-value-visible" : ""}
                    `}
                style={
                  {
                    "--value-delay": `${index * 350}ms`,
                  } as React.CSSProperties
                }
              >
                {/* Icon medallion */}
                <div
                  className="
                    paciano-value-icon
                    relative flex shrink-0
                    h-[58px] w-[58px]
                    sm:h-[66px] sm:w-[66px]
                    items-center justify-center
                    rounded-full
                    border border-[#788653]/35
                    bg-[#F5EEE1]/70
                    text-[#687944]
                    shadow-[0_3px_14px_rgba(67,72,47,0.05)]
                    transition-colors duration-700
                "
                >
                  <span
                    className="
                    pointer-events-none absolute inset-[4px]
                    rounded-full border border-[#788653]/20
                    "
                  />
                  <ValueIcon type={value.icon} />
                </div>

                {/* Value heading and description */}
                <h4
                  className="
                    paciano-value-title
                    mt-4 sm:mt-5
                    font-cormorant
                    text-[clamp(1.15rem,2vw,1.55rem)]
                    font-medium leading-tight
                    tracking-[-0.015em]
                    text-[#263326]
                "
                >
                  {value.title}
                </h4>

                <p
                  className="
                    paciano-value-description
                    mx-auto mt-2
                    max-w-[235px]
                    font-manrope
                    text-[11px] leading-[1.75]
                    text-[#626456]
                    sm:text-[12px]
                    md:text-[13px]
                "
                >
                  {value.description}
                </p>

                {/* Vertical separators on desktop */}
                {index !== 3 && (
                  <span
                    aria-hidden="true"
                    className="
                        pointer-events-none hidden
                        lg:block absolute
                        right-0 top-[42px]
                        h-[76px] w-px
                        bg-gradient-to-b
                        from-transparent via-[#B9B49D]/65 to-transparent
                        "
                  />
                )}
              </article>
            ))}
          </div>
        </div>

        {/* THE ENCHANTING DOOARS */}
        <PacianoOurPlaceSection image={dooarsLandscape} />

        {/* ==========================================================
                EXPERIENCES TITLE
            ========================================================== */}

        <div
          className="
            paciano-reveal
            relative
            mt-16
            sm:mt-20
            lg:mt-24
            xl:mt-30
            text-center
        "
        >
          <svg
            viewBox="0 0 40 40"
            className="
          mx-auto
          mb-[9px]

          h-[25px]
          w-[25px]

          text-[#71883F]
        "
            fill="none"
          >
            <path
              d="M20 34C20 25 21 17 27 8"
              stroke="currentColor"
              strokeWidth="1"
            />

            <path
              d="
            M21 22
            C15 20 12 16 13 11
            C18 12 22 16 22 21
          "
              fill="currentColor"
            />

            <path
              d="
            M24 17
            C25 12 29 9 34 10
            C32 15 29 18 24 18
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
          tracking-[0.3em]

          text-[#71803F]
        "
          >
            Experiences That Stay With You
          </span>

          <h3
            className="
          mt-[16px]

          font-cormorant

          text-[43px]
          leading-[.95]

          tracking-[-.025em]

          text-[#17251B]

          sm:text-[52px]
          lg:text-[60px]
        "
          >
            Moments Crafted by Nature,
            <br />
            <span className="italic text-[#789541]">Curated for You.</span>
          </h3>
        </div>

        {/* ==========================================================
    FIVE EXPERIENCES
========================================================== */}

        <div
          ref={experienceRef}
          className="
    paciano-experiences
    relative

    mt-[55px]

    grid
    grid-cols-2
    gap-x-[14px]
    gap-y-[35px]

    sm:grid-cols-3

    lg:grid-cols-5
    lg:gap-x-[18px]
    lg:gap-y-0

    xl:px-[10px]
  "
        >
          {experiences.map((experience, index) => (
            <article
              key={experience.title}
              className={`
  paciano-experience
  paciano-experience-${index + 1}

  group
  relative

  ${experienceVisible ? "paciano-experience-visible" : ""}
`}
              style={
                {
                  "--experience-delay": `${index * 450}ms`,
                  "--experience-y":
                    index === 1 || index === 3
                      ? "22px"
                      : index === 2
                        ? "35px"
                        : "0px",
                } as React.CSSProperties
              }
            >
              {/* =====================================================
            
          ICON
      ===================================================== */}

              <div
                className="
          paciano-experience-icon

          relative
          z-10

          mx-auto

          flex
          h-[72px]
          w-[72px]

          items-center
          justify-center

          rounded-full

          border
          border-[#71803F]/20

          bg-[#F5EEE1]/55

          backdrop-blur-[2px]

          transition-all
          duration-[1200ms]
          ease-[cubic-bezier(.22,1,.36,1)]
        "
              >
                <ExperienceIcon type={index} />

                {/* tiny orbit */}
                {/* <span
                  className="
                    pointer-events-none
                    absolute
                    inset-[-5px]

                    rounded-full

                    border
                    border-[#71803F]/0

                    transition-all
                    duration-[1200ms]
                    ease-[cubic-bezier(.22,1,.36,1)]

                    group-hover:inset-[-9px]
                    group-hover:border-[#71803F]/20
                  "
                /> */}
                <span
                  className="
                    paciano-icon-orbit
                    pointer-events-none
                    absolute
                    inset-[-6px]
                    rounded-full
                  "
                />
              </div>

              {/* =====================================================
          TEXT
      ===================================================== */}

              <div
                className="
          relative
          z-10

          mt-[18px]

          text-center
        "
              >
                <h4
                  className="
    paciano-experience-title
    font-cormorant
    text-[28px]
    font-medium
    leading-[1.05]
    tracking-[-0.015em]
    text-[#17251B]
    transition-all
    duration-[1000ms]
    ease-[cubic-bezier(.22,1,.36,1)]
    group-hover:text-[#617638]
  "
                >
                  {experience.title}
                </h4>

                <p
                  className="
                    paciano-experience-description
    mx-auto
    mt-[14px]
    max-w-[220px]
    font-manrope
    text-[13px]
    font-normal
    leading-[1.65]
    tracking-[0.005em]
    text-[#555C52]
    transition-all
    duration-[1000ms]
    ease-[cubic-bezier(.22,1,.36,1)]
                  "
                >
                  {experience.description}
                </p>
              </div>

              {/* =====================================================
          IMAGE FRAME
      ===================================================== */}

              <div
                className="
    paciano-experience-image
    group/image
    relative
    mt-[23px]

    h-[270px]
    sm:h-[275px]
    lg:h-[285px]
    xl:h-[295px]

    overflow-hidden

    rounded-[70px_70px_28px_28px]

    bg-[#E7DFCF]

    shadow-[0_24px_60px_rgba(45,48,35,.12)]

    animate-paciano-card-float

    transition-shadow
    duration-[1200ms]

    hover:shadow-[0_32px_75px_rgba(45,48,35,.17)]

    will-change-transform

    motion-reduce:animate-none
  "
              >
                {/* soft botanical border */}

                <div
                  className="
            pointer-events-none
            absolute
            inset-[5px]
            z-20

            rounded-[65px_65px_24px_24px]

            border
            border-[#FFFDF5]/75

            transition-all
            duration-[1200ms]

            group-hover:inset-[8px]
            group-hover:border-[#FFFDF5]
          "
                />

                {/* image */}

                <img
                  src={experience.image}
                  alt={experience.title}
                  className="
                      paciano-experience-img

                      h-full
                      w-full

                      object-cover

                      transition-transform
                      duration-[5000ms]
                      ease-[cubic-bezier(.22,1,.36,1)]

                      group-hover:scale-[1.075]
                    "
                />

                {/* warm cinematic overlay */}

                <div
                  className="
            pointer-events-none
            absolute
            inset-0
            z-10

            bg-gradient-to-t
            from-[#172319]/[0.18]
            via-transparent
            to-[#FFF8E8]/[0.10]

            opacity-[0.85]

            transition-opacity
            duration-[1200ms]

            group-hover:opacity-100
          "
                />

                {/* moving light */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    left-0
                    top-0
                    z-20

                    h-full
                    w-[35%]

                    bg-gradient-to-r
                    from-transparent
                    via-[#FFF8E8]/[0.16]
                    to-transparent

                    opacity-0

                    -translate-x-[180%]
                    rotate-[12deg]

                   animate-paciano-image-sweep
                  "
                />
              </div>

              {/* =====================================================
                    BOTANICAL LINE BELOW IMAGE
                ===================================================== */}

              <div
                className="
                  paciano-experience-botanical

                  relative

                  mx-auto
                  mt-[17px]

                  h-[18px]
                  w-[55px]
                "
              >
                <svg
                  viewBox="0 0 55 18"
                  className="
            h-full
            w-full

            overflow-visible

            text-[#71883F]
          "
                  fill="none"
                >
                  <path
                    d="M27 17C27 11 29 7 35 2"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />

                  <path
                    d="
              M28 11
              C22 10 18 7 18 3
              C23 4 27 7 28 11
            "
                    fill="currentColor"
                    opacity=".65"
                  />

                  <path
                    d="
              M33 7
              C37 4 41 3 45 4
              C42 8 38 9 33 8
            "
                    fill="currentColor"
                    opacity=".42"
                  />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ============================================================
      ANIMATION
  ============================================================ */}

      <style>
        {`
       /* ==========================================================
          ABOUT PACIANO SECTION
        ========================================================== */
          .paciano-reveal {
            opacity: 0;
            translate: 0 65px;

            transition:
              opacity 2.8s cubic-bezier(.16, 1, .3, 1),
              translate 2.8s cubic-bezier(.16, 1, .3, 1);
          }

          .paciano-about-visible .paciano-reveal {
            opacity: 1;
            translate: 0 0;
          }

          .paciano-delay-1 {
            transition-delay: 0.2s;
          }

          .paciano-delay-2 {
            transition-delay: 0.45s;
          }

          .paciano-delay-3 {
            transition-delay: 0.7s;
          }

          .paciano-delay-4 {
            transition-delay: 0.95s;
          }
      /* ==========================================================
        CINEMATIC PHOTO MOTION
      ========================================================== */

.paciano-photo {
  will-change: transform;
  transform-origin: center center;
}


/* LEFT PHOTO
   Slow vertical breathing + tiny rotation
---------------------------------------------------------- */

.paciano-about-visible .paciano-photo-left {
  animation:
    pacianoFloatLeft
    9s
    ease-in-out
    infinite
    1.4s;
}


/* CENTER PHOTO
   Almost imperceptible movement
---------------------------------------------------------- */

.paciano-about-visible .paciano-photo-center {
  animation:
    pacianoFloatCenter
    11s
    ease-in-out
    infinite
    1.7s;
}


/* RIGHT PHOTO
   Different rhythm so the three don't move together
---------------------------------------------------------- */

.paciano-about-visible .paciano-photo-right {
  animation:
    pacianoFloatRight
    10s
    ease-in-out
    infinite
    2s;
}


/* LEFT */

@keyframes pacianoFloatLeft {

  0% {
    transform:
      translate3d(0, 0, 0)
      rotate(0deg);
  }

  25% {
    transform:
      translate3d(-2px, -4px, 0)
      rotate(-0.15deg);
  }

  50% {
    transform:
      translate3d(2px, -7px, 0)
      rotate(0.15deg);
  }

  75% {
    transform:
      translate3d(1px, -3px, 0)
      rotate(0deg);
  }

  100% {
    transform:
      translate3d(0, 0, 0)
      rotate(0deg);
  }
}


/* CENTER */

@keyframes pacianoFloatCenter {

  0% {
    transform:
      translate3d(0, 0, 0)
      rotate(0deg);
  }

  25% {
    transform:
      translate3d(1px, -3px, 0)
      rotate(0.08deg);
  }

  50% {
    transform:
      translate3d(-1px, -6px, 0)
      rotate(-0.08deg);
  }

  75% {
    transform:
      translate3d(1px, -3px, 0)
      rotate(0.05deg);
  }

  100% {
    transform:
      translate3d(0, 0, 0)
      rotate(0deg);
  }
}


@keyframes pacianoFloatRight {

  0% {
    transform:
      translate3d(0, 0, 0)
      rotate(0deg);
  }

  25% {
    transform:
      translate3d(2px, -4px, 0)
      rotate(0.12deg);
  }

  50% {
    transform:
      translate3d(-1px, -7px, 0)
      rotate(-0.12deg);
  }

  75% {
    transform:
      translate3d(-1px, -3px, 0)
      rotate(-0.05deg);
  }

  100% {
    transform:
      translate3d(0, 0, 0)
      rotate(0deg);
  }
}

/* ==========================================================
   LEAF MOTION
========================================================== */

.paciano-floating-leaf {
  transform-origin: 50% 90%;
  animation:
    pacianoLeafSway
    7s
    ease-in-out
    infinite;
}

@keyframes pacianoLeafSway {

  0% {
    transform:
      rotate(8deg)
      translateY(0);
  }

  50% {
    transform:
      rotate(3deg)
      translateY(-8px);
  }

  100% {
    transform:
      rotate(8deg)
      translateY(0);
  }
}


/* ==========================================================
   SMALL LEAF CIRCLE
========================================================== */

.paciano-leaf-orbit {
  animation:
    pacianoLeafOrbit
    6s
    ease-in-out
    infinite;
}

@keyframes pacianoLeafOrbit {

  0% {
    transform:
      translateY(0)
      rotate(0deg);
  }

  50% {
    transform:
      translateY(-9px)
      rotate(5deg);
  }

  100% {
    transform:
      translateY(0)
      rotate(0deg);
  }
}


/* ==========================================================
   ACCESSIBILITY
========================================================== */

@media (prefers-reduced-motion: reduce) {

  .paciano-photo-left,
  .paciano-photo-center,
  .paciano-photo-right,
  .paciano-floating-leaf,
  .paciano-leaf-orbit {
    animation: none !important;
  }

}
    @media (prefers-reduced-motion: reduce) {

      .paciano-reveal {
        opacity: 1;
        transform: none;
        transition: none;
      }

    }
  /* ==========================================================
   PACIANO — CINEMATIC FIVE EXPERIENCE CARDS
   ========================================================== */

    .paciano-experience {
    transform: translateY(var(--experience-y, 0px));
      opacity: 0;
    }

    /* Start the cards only when they actually enter the viewport */
   .paciano-experience-visible {
  animation:
    pacianoExperienceReveal
    3.2s
    cubic-bezier(.22, 1, .36, 1)
    both;

  animation-delay: var(--experience-delay);
}


/* ----------------------------------------------------------
   CINEMATIC ENTRY
   IMPORTANT:
   No transform on the card itself.
   This keeps typography perfectly sharp.
   ---------------------------------------------------------- */

@keyframes pacianoExperienceReveal {
  0% {
    opacity: 0;
    transform:
      translateY(
        calc(var(--experience-y, 0px) + 18px)
      );
  }

  100% {
    opacity: 1;
    transform:
      translateY(var(--experience-y, 0px));
  }
}

/* ==========================================================
   ICON — SUBTLE ENTRY
   ========================================================== */

.paciano-experience-visible .paciano-experience-icon {
  animation:
    pacianoIconReveal
    1.2s
    cubic-bezier(.22, 1, .36, 1)
    both;

  animation-delay:
    calc(var(--experience-delay) + 250ms);
}

@keyframes pacianoIconReveal {
  0% {
    opacity: 0;
    transform: translateY(8px) scale(.96);
  }

  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}


/* ==========================================================
   TITLE
   CRISP — NO TRANSLATE / NO BLUR
   ========================================================== */

.paciano-experience-visible .paciano-experience-title {
  animation: pacianoTitleFade 900ms cubic-bezier(.22,1,.36,1) both;
  animation-delay: calc(var(--experience-delay) + 420ms);
}

@keyframes pacianoTitleFade {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes pacianoDescriptionFade {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
@keyframes pacianoTitleReveal {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}


/* ==========================================================
   DESCRIPTION
   CRISP — NO TRANSLATE / NO BLUR
   ========================================================== */

.paciano-experience-visible .paciano-experience-description {
  animation: pacianoDescriptionFade 900ms cubic-bezier(.22,1,.36,1) both;
  animation-delay: calc(var(--experience-delay) + 600ms);
}


@keyframes pacianoDescriptionReveal {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}


/* ==========================================================
   IMAGE — THIS IS WHERE THE CINEMATIC MOTION SHOULD LIVE
   ========================================================== */

.paciano-experience-visible .paciano-experience-img {
  animation:
    pacianoImagePush
    10s
    cubic-bezier(.22, 1, .36, 1)
    both;

  animation-delay:
    calc(var(--experience-delay) + 350ms);

  will-change: transform;
}

@keyframes pacianoImagePush {
  0% {
    transform: scale(1.075);
  }

  100% {
    transform: scale(1);
  }
}


/* ==========================================================
   LIGHT SWEEP
   ========================================================== */

.paciano-experience-visible .paciano-experience-image > div:last-child {
  animation:
    pacianoLightSweep
    3.2s
    cubic-bezier(.22, 1, .36, 1)
    both;

  animation-delay:
    calc(var(--experience-delay) + 900ms);
}


/* ==========================================================
   HOVER
   ========================================================== */

.paciano-experience:hover .paciano-experience-title {
  transform: translateY(-2px);
}

.paciano-experience:hover .paciano-experience-description {
  transform: translateY(-1px);
}

.paciano-experience:hover .paciano-experience-icon {
  transform: translateY(-3px);
}


/* ==========================================================
   REDUCED MOTION
   ========================================================== */

@media (prefers-reduced-motion: reduce) {
  .paciano-experience,
  .paciano-experience-icon,
  .paciano-experience-title,
  .paciano-experience-description,
  .paciano-experience-img,
  .paciano-experience-image > div:last-child {
    animation: none !important;
    transition: none !important;
  }

 
}




/* ==========================================================
   ICON — VERY SUBTLE LIFE
   ========================================================== */

@keyframes pacianoIconReveal {

  0% {
    opacity: 0;
    transform:
      translateY(12px)
      scale(.92)
      rotate(-3deg);
  }

  60% {
    opacity: 1;
  }

  100% {
    opacity: 1;
    transform:
      translateY(0)
      scale(1)
      rotate(0deg);
  }
}


/* ==========================================================
   DESCRIPTION — FOLLOWS TITLE
   ========================================================== */

.paciano-experience-visible .paciano-experience-description{
  animation:
    pacianoTextReveal
    1.2s
    cubic-bezier(.22,1,.36,1)
    both;

  animation-delay:
    calc(var(--experience-delay) + 650ms);
}


@keyframes pacianoTextReveal {

  0% {
    opacity: 0;
    transform: translateY(10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}


/* ==========================================================
   IMAGE — CINEMATIC SLOW PUSH
   ========================================================== */

.paciano-experience-visible .paciano-experience-img{
  animation:
    pacianoImagePush
    10s
    cubic-bezier(.22,1,.36,1)
    both;

  animation-delay:
    calc(var(--experience-delay) + 500ms);

  will-change: transform;
}


@keyframes pacianoImagePush {

  0% {
    transform: scale(1.075);
  }

  100% {
    transform: scale(1);
  }
}


/* ==========================================================
   MOVING LIGHT — ONE SLOW CINEMATIC SWEEP
   ========================================================== */

.paciano-experience-visible .paciano-experience-image > div:last-child {
  animation:
    pacianoLightSweep
    3.2s
    cubic-bezier(.22,1,.36,1)
    both;

  animation-delay:
    calc(var(--experience-delay) + 1.1s);
}


@keyframes pacianoLightSweep {

  0% {
    opacity: 0;
    transform:
      translateX(-180%)
      rotate(12deg);
  }

  20% {
    opacity: .7;
  }

  55% {
    opacity: .35;
  }

  100% {
    opacity: 0;
    transform:
      translateX(430%)
      rotate(12deg);
  }
}


/* ==========================================================
   HOVER — KEEP VERY REFINED
   ========================================================== */

.paciano-experience:hover .paciano-experience-title {
  transform: translateY(-2px);
}

.paciano-experience:hover .paciano-experience-description {
  transform: translateY(-1px);
}

.paciano-experience:hover .paciano-experience-icon {
  transform: translateY(-3px);
}


/* ==========================================================
   REDUCED MOTION
   ========================================================== */

@media (prefers-reduced-motion: reduce) {

  .paciano-experience,
  .paciano-experience-icon,
  .paciano-experience-title,
  .paciano-experience-description,
  .paciano-experience-img,
  .paciano-experience-image > div:last-child {
    animation: none !important;
  }

  .paciano-experience {
    opacity: 1;
    transform: none;
    filter: none;
  }
}

/* ==========================================================
   PACIANO — FIVE EXPERIENCE CARDS
   VERY SUBTLE LUXURY FLOAT
   ========================================================== */


 .paciano-experience-image {
  animation: pacianoCardFloat 9s ease-in-out infinite;
  will-change: transform;
}

.paciano-experience:nth-child(1) .paciano-experience-image {
  animation-delay: 0s;
}

.paciano-experience:nth-child(2) .paciano-experience-image {
  animation-delay: -2s;
}

.paciano-experience:nth-child(3) .paciano-experience-image {
  animation-delay: -4s;
}

.paciano-experience:nth-child(4) .paciano-experience-image {
  animation-delay: -6s;
}

.paciano-experience:nth-child(5) .paciano-experience-image {
  animation-delay: -8s;
}

@keyframes pacianoCardFloat {
  0% {
    transform: translate3d(0, 0, 0);
  }

  25% {
    transform: translate3d(0, -2px, 0);
  }

  50% {
    transform: translate3d(0, -4px, 0);
  }

  75% {
    transform: translate3d(0, -2px, 0);
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
}

.paciano-icon-orbit {
  border: 1px solid rgba(113, 128, 63, 0.18);
  border-top-color: rgba(113, 128, 63, 0.65);
  border-right-color: rgba(113, 128, 63, 0.32);

  animation:
    pacianoIconOrbit
    12s
    linear
    infinite;

  transform-origin: center;
}

@keyframes pacianoIconOrbit {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
  .paciano-experience:hover .paciano-icon-orbit {
  animation-duration: 7s;
  border-top-color: rgba(113, 128, 63, 0.85);
}
  /* ==========================================================
   PACIANO VALUES — SYNCHRONIZED SCROLL REVEAL
    ========================================================== */  
.paciano-value-icon {
  position: relative;
  isolation: isolate;
 overflow: visible;
  border-color: rgba(142, 143, 100, 0.42);
  background: rgba(248, 243, 232, 0.5);
  box-shadow: 0 4px 18px rgba(63, 65, 43, 0.035);
  transition:
    border-color 700ms ease,
    box-shadow 900ms ease,
    background 700ms ease;
}

.paciano-value-icon::before {
  content: "";
  position: absolute;
  inset: 4px;
  border: 1px solid rgba(142, 143, 100, 0.28);
  border-radius: 50%;
  pointer-events: none;
}

  
.paciano-value-visible .paciano-value-icon {
  animation: pacianoMedallionReveal 1.2s
    cubic-bezier(.16, 1, .3, 1) both;
  animation-delay: calc(var(--value-delay, 0ms) + 100ms);
}

.paciano-value-visible .paciano-value-title {
  animation: pacianoValueText 1s
    cubic-bezier(.16, 1, .3, 1) both;
  animation-delay: calc(var(--value-delay, 0ms) + 400ms);
}

.paciano-value-visible .paciano-value-description {
  animation: pacianoValueText 1s
    cubic-bezier(.16, 1, .3, 1) both;
  animation-delay: calc(var(--value-delay, 0ms) + 560ms);
}

@keyframes pacianoEmblemReveal {
  from {
    opacity: 0.55;
  }

  to {
    opacity: 1;
  }
}

@keyframes pacianoEmblemDraw {
  to { stroke-dashoffset: 0; }
}

@keyframes pacianoMedallionReveal {
  0% {
    opacity: 0;
    transform: translateY(8px) scale(.94);
    box-shadow: 0 0 0 rgba(142, 143, 100, 0);
  }
  65% {
    opacity: 1;
    transform: translateY(0) scale(1.015);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    box-shadow: 0 4px 18px rgba(63, 65, 43, .055);
  }
}

@keyframes pacianoValueText {
  from {
    opacity: 0;
    transform: translateY(7px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (hover: hover) and (prefers-reduced-motion: no-preference) {
  .paciano-value:hover .paciano-value-icon {
    border-color: rgba(116, 133, 72, .75);
    background: rgba(255, 252, 244, .8);
    box-shadow: 0 6px 24px rgba(63, 65, 43, .09);
  }
}

@media (prefers-reduced-motion: reduce) {
  .paciano-value-icon *,
  .paciano-emblem-drawing path,
  .paciano-emblem-drawing circle {
    animation: none !important;
    stroke-dasharray: none !important;
    stroke-dashoffset: 0 !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
  /* Paciano — slow, refined icon motion */
.paciano-value-icon {
  overflow: visible;
}

.paciano-emblem-drawing {
  overflow: visible;
  transform-origin: center;
  opacity: 1;
}

.paciano-value-visible .paciano-emblem-drawing {
  animation:
    pacianoIconReveal 1.8s cubic-bezier(.22, 1, .36, 1) both,
    pacianoIconFloat 6s ease-in-out 1.8s infinite;
  animation-delay:
    calc(var(--value-delay, 0ms) + 180ms),
    calc(var(--value-delay, 0ms) + 1.98s);
}

@keyframes pacianoIconReveal {
  from {
    opacity: 0;
    transform: translateY(5px) scale(.92);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes pacianoIconFloat {
  0%, 100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-2px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .paciano-emblem-drawing,
  .paciano-value-icon *,
  .paciano-value-title,
  .paciano-value-description {
    animation: none !important;
    transition: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}

  `}
      </style>
    </section>
  );
}
