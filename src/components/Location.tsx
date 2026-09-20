import React, {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import locationView from "@/images/locationVView.png";
import leafWhisper from "@/images/button-leaf.png";
import leftLeaf from"@/images/location-left-leaves.png"
import bottomLeaf from "@/images/location-bottom-leaf.png";
import locationMap from "@/images/map.png";

const LocationSection: React.FC = () => {

  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const heroImageRef = useRef<HTMLDivElement | null>(null);
  const atmosphereRef = useRef<HTMLDivElement | null>(null);

  const eyebrowRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);

  const featuresRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  const mapCardRef = useRef<HTMLDivElement | null>(null);
  const mapImageRef = useRef<HTMLImageElement | null>(null);

  // const scriptRef = useRef<HTMLDivElement | null>(null);
  // const sideRef = useRef<HTMLDivElement | null>(null);

  const featureIconRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const element = sectionRef.current;
  
    if (!element) return;
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
  
        if (!entry.isIntersecting) return;
  
        /* =====================================================
           MASTER CINEMATIC TIMELINE
           ===================================================== */
  
        const ease = "cubic-bezier(.22,1,.36,1)";
  
        /* -----------------------------------------------------
           01 — LANDSCAPE
           ----------------------------------------------------- */
  
          //  heroImageRef.current?.animate(
          //   [
          //     {
          //       opacity: 0,
          //       transform:
          //         "translate3d(0, 18px, 0) scale(1.09)",
          //     },
          
          //     {
          //       opacity: 0.72,
          //       transform:
          //         "translate3d(-0.10%, -35px, 0) scale(1.08)",
          //     },
          
          //     {
          //       opacity: 1,
          //       transform:
          //         "translate3d(-0.28%, -78px, 0) scale(1.075)",
          //     },
          //   ],
          //   {
          //     duration: 4800,
          //     easing: ease,
          //     fill: "forwards",
          //   }
          // );
  
        /* -----------------------------------------------------
           02 — SOFT ATMOSPHERIC GLOW
           ----------------------------------------------------- */
  
        atmosphereRef.current?.animate(
          [
            {
              opacity: 0,
              transform: "scale(.92)",
            },
            {
              opacity: 1,
              transform: "scale(1)",
            },
          ],
          {
            duration: 2600,
            delay: 350,
            easing: ease,
            fill: "forwards",
          }
        );
  
        /* -----------------------------------------------------
           03 — OUR LOCATION
           ----------------------------------------------------- */
  
        eyebrowRef.current?.animate(
          [
            {
              opacity: 0,
              transform: "translate3d(0, 18px, 0)",
            },
            {
              opacity: 1,
              transform: "translate3d(0, 0, 0)",
            },
          ],
          {
            duration: 1350,
            delay: 650,
            easing: ease,
            fill: "forwards",
          }
        );
  
        /* -----------------------------------------------------
          04 — HEADING
          ----------------------------------------------------- */

          headingRef.current?.animate(
          [
            {
              opacity: 0,
              transform: "translate3d(0, 34px, 0)",
            },
            {
              opacity: 0.8,
              transform: "translate3d(0, 5px, 0)",
            },
            {
              opacity: 1,
              transform: "translate3d(0, 0, 0)",
            },
          ],
          {
            duration: 1750,
            delay: 1050,
            easing: ease,
            fill: "forwards",
          }
        );
  
        /* -----------------------------------------------------
           05 — DESCRIPTION
           ----------------------------------------------------- */
  
        descriptionRef.current?.animate(
          [
            {
              opacity: 0,
              transform: "translate3d(0, 25px, 0)",
            },
            {
              opacity: 1,
              transform: "translate3d(0, 0, 0)",
            },
          ],
          {
            duration: 1450,
            delay: 1700,
            easing: ease,
            fill: "forwards",
          }
        );
  
        /* -----------------------------------------------------
           06 — FEATURES
           ----------------------------------------------------- */
  
           featuresRef.current?.animate(
            [
              {
                opacity: 0,
                transform: "translate3d(0, 24px, 0)",
              },
              {
                opacity: 0.85,
                transform: "translate3d(0, 5px, 0)",
              },
              {
                opacity: 1,
                transform: "translate3d(0, 0, 0)",
              },
            ],
            {
              duration: 1500,
              delay: 2200,
              easing: ease,
              fill: "forwards",
            }
          );
  
        /* -----------------------------------------------------
           07 — ICONS ONE BY ONE
           ----------------------------------------------------- */
  
          //  featureIconRefs.current.forEach((icon, index) => {
          //   if (!icon) return;
          
          //   icon.animate(
          //     [
          //       {
          //         opacity: 0,
          //         transform: "translate3d(0, 18px, 0) scale(.90)",
          //       },
          //       {
          //         opacity: 0.75,
          //         transform: "translate3d(0, 3px, 0) scale(1.015)",
          //       },
          //       {
          //         opacity: 1,
          //         transform: "translate3d(0, 0, 0) scale(1)",
          //       },
          //     ],
          //     {
          //       duration: 1450,
          //       delay: 2350 + index * 280,
          //       easing: ease,
          //       fill: "forwards",
          //     }
          //   );
          // });
        /* -----------------------------------------------------
           08 — CTA
           ----------------------------------------------------- */
  
          //  ctaRef.current?.animate(
          //   [
          //     {
          //       opacity: 0,
          //       transform: "translate3d(0, 28px, 0) scale(.97)",
          //     },
          //     {
          //       opacity: 0.85,
          //       transform: "translate3d(0, 4px, 0) scale(1.01)",
          //     },
          //     {
          //       opacity: 1,
          //       transform: "translate3d(0, 0, 0) scale(1)",
          //     },
          //   ],
          //   {
          //     duration: 1550,
          //     delay: 3900,
          //     easing: ease,
          //     fill: "forwards",
          //   }
          // );
  
        /* -----------------------------------------------------
           09 — MAP CARD
           ----------------------------------------------------- */
  
          //  mapCardRef.current?.animate(
          //   [
          //     {
          //       opacity: 0,
          //       transform:
          //         "translate3d(0, 70px, 0) scale(.965)",
          //     },
          //     {
          //       opacity: 0.75,
          //       transform:
          //         "translate3d(0, 10px, 0) scale(1.006)",
          //     },
          //     {
          //       opacity: 1,
          //       transform:
          //         "translate3d(0, 0, 0) scale(1)",
          //     },
          //   ],
          //   {
          //     duration: 1900,
          //     delay: 4700,
          //     easing: ease,
          //     fill: "forwards",
          //   }
          // );
  
        /* -----------------------------------------------------
           10 — MAP IMAGE
           ----------------------------------------------------- */
  
          //  mapImageRef.current?.animate(
          //   [
          //     {
          //       transform: "scale(1.045)",
          //     },
          //     {
          //       transform: "scale(1)",
          //     },
          //   ],
          //   {
          //     duration: 2400,
          //     delay: 5000,
          //     easing: ease,
          //     fill: "forwards",
          //   }
          // );
  
        /* -----------------------------------------------------
           11 — RIGHT SIDE LABEL
           ----------------------------------------------------- */
  
        // sideRef.current?.animate(
        //   [
        //     {
        //       opacity: 0,
        //       transform: "translate3d(20px, 0, 0)",
        //     },
        //     {
        //       opacity: 1,
        //       transform: "translate3d(0, 0, 0)",
        //     },
        //   ],
        //   {
        //     duration: 900,
        //     delay: 1750,
        //     easing: ease,
        //     fill: "forwards",
        //   }
        // );
  
        /* -----------------------------------------------------
           12 — HANDWRITTEN MESSAGE
           ----------------------------------------------------- */
  
        // scriptRef.current?.animate(
        //   [
        //     {
        //       opacity: 0,
        //       transform:
        //         "translate3d(0, 18px, 0) rotate(-7deg)",
        //     },
        //     {
        //       opacity: 1,
        //       transform:
        //         "translate3d(0, 0, 0) rotate(-3deg)",
        //     },
        //   ],
        //   {
        //     duration: 1100,
        //     delay: 1850,
        //     easing: ease,
        //     fill: "forwards",
        //   }
        // );
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px",
      }
    );
  
    observer.observe(element);
  
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
  
    const map = mapCardRef.current;
  
    if (!map) return;
  
    const animation = map.animate(
      [
        {
          transform: "translate3d(0, 0, 0)",
        },
        {
          transform: "translate3d(0, -6px, 0)",
        },
        {
          transform: "translate3d(0, 0, 0)",
        },
      ],
      {
        duration: 7000,
        easing: "ease-in-out",
        iterations: Infinity,
      }
    );
  
    return () => animation.cancel();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;
  
    const image = heroImageRef.current;
  
    if (!image) return;
  
    const animation = image.animate(
      [
        {
          transform:
            "translate3d(-0.28%, -78px, 0) scale(1.075)",
        },
    
        {
          transform:
            "translate3d(-0.55%, -88px, 0) scale(1.095)",
        },
    
        {
          transform:
            "translate3d(-0.28%, -78px, 0) scale(1.075)",
        },
      ],
      {
        duration: 28000,
        easing: "ease-in-out",
        iterations: Infinity,
      }
    );
  
    return () => animation.cancel();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;
  
    const animations = featureIconRefs.current
      .map((icon, index) => {
        if (!icon) return null;
  
        return icon.animate(
          [
            {
              transform: "translate3d(0, 0, 0) scale(1)",
            },
            {
              transform: "translate3d(0, -2px, 0) scale(1.025)",
            },
            {
              transform: "translate3d(0, 0, 0) scale(1)",
            },
          ],
          {
            duration: 4200 + index * 450,
            delay: index * 180,
            easing: "ease-in-out",
            iterations: Infinity,
          }
        );
      })
      .filter(Boolean);
  
    return () => {
      animations.forEach((animation) => animation?.cancel());
    };
  }, [isVisible]);

  return (
    <section
    ref={sectionRef}
    id="location"
    className={`
      relative
    
      w-full
      overflow-visible
      bg-[#F3EBDD]
      location-section
      ${isVisible ? "location-visible" : ""}
    `}
  >
   
      {/* =========================================================
          EXACT TEMPLATE IMAGE RATIO
          Template = 1024 x 700
      ========================================================== */}

      <div
        className="
          relative
          -mt-px
          h-[680px]
          w-full
          overflow-visible
          sm:h-[720px]
          lg:h-[760px]
          xl:h-[800px]
        "
      >         
        {/* =======================================================
          LANDSCAPE IMAGE — CINEMATIC
        ======================================================= */}

        {/* <div
          className="
            absolute
            inset-0
            z-0
            overflow-hidden
          "
        >
          <img
            ref={heroImageRef}
            src={locationView}
            alt="Paciano surrounded by mountains, river and the Paciano property"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-[50%_72%]
              will-change-transform
            "
          />

          {/* CINEMATIC ATMOSPHERE 

          <div
            ref={atmosphereRef}
            className="
              pointer-events-none
              absolute
              left-[5%]
              top-[3%]
              z-[5]
              h-[55%]
              w-[48%]
              rounded-full
              bg-[#FFF1D0]/10
              blur-[70px]
            "
          />
        </div>
     */}
{/* =======================================================
    MAIN LOCATION IMAGE
    Crossfades into the previous landscape
======================================================= */}

<div
  className="
    absolute
    inset-0
    z-[1]
    overflow-hidden
  "
>
    {/* =======================================================
      MAIN LOCATION LANDSCAPE
      PANORAMIC IMAGE
    ======================================================= */}


    <div
      ref={heroImageRef}
      className="
        absolute
        inset-0
        z-[1]
        overflow-hidden
        will-change-transform
      "
    >
    <img
    src={locationView}
    alt="Paciano surrounded by mountains, river and the Paciano property"
    className="
      absolute
      inset-0

      h-full
      w-full

      object-cover
      object-[50%_72%]

      will-change-transform
    "
    />
    </div>
</div>
{/* NEW CINEMATIC TRANSITION */}

<div
  className="
    pointer-events-none
    absolute
    left-0
    right-0
    -top-[82px]
    z-[8]
    h-[185px]
    bg-gradient-to-b
    from-[#F4EFE4]
    via-[#F4EFE4]/[0.92]
    via-[45%]
    via-[#F4EFE4]/[0.58]
    via-[72%]
    to-transparent
    blur-[4px]
  "
/>

<div
  className="
    pointer-events-none
    absolute
    left-[4%]
    right-[4%]
    -top-[35px]
    z-[9]
    h-[125px]
    rounded-[50%]
    bg-[#F4EFE4]/[0.28]
    blur-[28px]
  "
/>



{/* =======================================================
    VERY SOFT ATMOSPHERIC LIGHT
======================================================= */}

<div
  ref={atmosphereRef}
  className="
    pointer-events-none
    absolute
    left-[6%]
    top-[8%]
    z-[5]

    h-[38%]
    w-[34%]

    rounded-full

    bg-[#FFF1D0]/[0.08]

    blur-[75px]
  "
/>
        {/* =======================================================
            CREAM WRITE-UP GLOW
        ======================================================== */}
        <div
          className="
            pointer-events-none
            absolute
            left-[2%]
            top-[0%]
            z-[25]
            h-[65%]
            w-[56%]
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
        /> 
         {/* =======================================================
            LEFT IMAGE PROTECTION

            Keeps the extreme-left edge completely clean so
            the foliage remains part of the original photograph.
        ======================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-[10]
            h-full
            w-[7%]
            bg-transparent
          "
        />

         {/* =======================================================
              OUR LOCATION — PREMIUM WRITE-UP
          ======================================================= */}

          <div
            className="
              absolute
              left-[11.1%]
              top-[5.5%]
              z-40
              w-[43%]
              max-w-[500px]
            "
          >
      {/* -------------------------------------------------------
          EYEBROW
      -------------------------------------------------------- */}

      <div
  ref={eyebrowRef}
  className={`
    flex
    items-center
    gap-[10px]
    transform
    transition-all
    duration-[1350ms]
    ease-[cubic-bezier(0.22,1,0.36,1)]
    will-change-transform

    ${
      isVisible
        ? "translate-y-0 opacity-100"
        : "translate-y-12 opacity-0"
    }
  `}
  style={{
    transitionDelay: "250ms",
  }}
>
        {/* Leaf SVG */}
        <svg
          viewBox="0 0 32 32"
          className="
            h-[21px]
            w-[21px]
            shrink-0
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
            whitespace-nowrap
            text-[12px]
            font-medium
            uppercase
            tracking-[0.28em]
            text-[#555544]
          "
        >
          OUR LOCATION
        </span>
      </div>


  {/* -------------------------------------------------------
      HEADING
  -------------------------------------------------------- */}

<h2
  ref={headingRef}
  className={`
    mt-[20px]
    font-['Cormorant_Garamond',serif]
    text-[clamp(38px,4.15vw,61px)]
    leading-[0.94]
    tracking-[-0.045em]
    text-[#10120F]

    transform
    transition-all
    duration-[1550ms]
    ease-[cubic-bezier(0.22,1,0.36,1)]
    will-change-transform

    ${
      isVisible
        ? "translate-y-0 opacity-100"
        : "translate-y-12 opacity-0"
    }
  `}
  style={{
    transitionDelay: "480ms",
  }}
>
    <span className="block whitespace-nowrap">
      Paciano Means
    </span>

    <span
      className="
        block
        whitespace-nowrap
        font-['Cormorant_Garamond',serif]
        italic
        text-[#68704D]
      "
    >
      Peace.
    </span>
  </h2>


  {/* -------------------------------------------------------
      DESCRIPTION
  -------------------------------------------------------- */}

<p
  ref={descriptionRef}
  className={`
    mt-[21px]
    max-w-[390px]
    font-manrope
    text-[clamp(12px,0.95vw,15px)]
    leading-[1.55]
    text-[#50584F]

    transform
    transition-all
    duration-[1350ms]
    ease-[cubic-bezier(0.22,1,0.36,1)]
    will-change-transform

    ${
      isVisible
        ? "translate-y-0 opacity-100"
        : "translate-y-10 opacity-0"
    }
  `}
  style={{
    transitionDelay: "820ms",
  }}
>
    Nestled in Lataguri, Dooars, Paciano is surrounded by
    rivers, forests and misty mountains — a place where
    nature slows you down and life feels fuller.
  </p>


  {/* =======================================================
    LOCATION FEATURES — PREMIUM EDITORIAL ICONS
======================================================= */}

<div
  ref={featuresRef}
  className={`
    mt-[24px]
    grid
    grid-cols-4
    items-stretch

    transform
    transition-all
    duration-[1450ms]
    ease-[cubic-bezier(0.22,1,0.36,1)]
    will-change-transform

    ${
      isVisible
        ? "translate-y-0 opacity-100"
        : "translate-y-10 opacity-0"
    }
  `}
  style={{
    transitionDelay: "1100ms",
  }}

    >

      {/* =====================================================
          SCENIC SURROUNDINGS
      ====================================================== */}

      <div
        className="
          group
          flex
          flex-col
          items-center
          border-r
          border-[#5B6048]/30
          px-[10px]
          first:pl-0
          transition-all
          duration-700
        "
      >

<div
ref={(el) => {
  featureIconRefs.current[0] = el;
}}
className={`
  flex
  h-[42px]
  w-[42px]
  items-center
  justify-center
  text-[#596343]

  transform
  transition-all
  duration-[1200ms]
  ease-[cubic-bezier(0.22,1,0.36,1)]

  ${
    isVisible
      ? "translate-y-0 scale-100 opacity-100"
      : "translate-y-5 scale-[0.92] opacity-0"
  }
`}
style={{
  transitionDelay: "1250ms",
}}
>
      <svg
          viewBox="0 0 48 48"
          className="h-[39px] w-[39px]"
          fill="none"
          aria-hidden="true"
        >
          {/* sun */}
          <circle
            cx="34"
            cy="13"
            r="4"
            fill="#B7A875"
            opacity="0.28"
          />

          {/* distant ridge */}
          <path
            d="M5 31L15 21L20 26L27 17L42 31"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* foreground ridge */}
          <path
            d="M4 36L13 28L19 33L26 25L34 32L43 23"
            stroke="currentColor"
            strokeWidth="1.55"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* valley line */}
          <path
            d="M7 39C14 37 18 37 24 39C30 41 35 40 41 37"
            stroke="currentColor"
            strokeWidth="0.9"
            strokeLinecap="round"
            opacity="0.45"
          />

          {/* tiny sun rays */}
          <path
            d="M34 6V4M41 13H43M39 8L41 6"
            stroke="#A08F5C"
            strokeWidth="0.8"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>
      </div>

        <span
          className="
            mt-[8px]
            text-center
            text-[8px]
            font-medium
            uppercase
            leading-[1.35]
            tracking-[0.10em]
            text-[#34392B]
            transition-colors
            duration-500
            group-hover:text-[#20251C]
          "
        >
          Scenic
          <br />
          Surroundings
        </span>

      </div>


      {/* =====================================================
          EASY ACCESS
      ====================================================== */}

      <div
        className="
          group
          flex
          flex-col
          items-center
          border-r
          border-[#5B6048]/30
          px-[10px]
          transition-all
          duration-700
        "
      >

<div
  ref={(el) => {
    featureIconRefs.current[1] = el;
  }}
  className={`
    flex
    h-[42px]
    w-[42px]
    items-center
    justify-center
    text-[#596343]

    transform
    transition-all
    duration-[1200ms]
    ease-[cubic-bezier(0.22,1,0.36,1)]

    ${
      isVisible
        ? "translate-y-0 scale-100 opacity-100"
        : "translate-y-5 scale-[0.92] opacity-0"
    }
  `}
  style={{
    transitionDelay: "1450ms",
  }}
>
        <svg
          viewBox="0 0 48 48"
          className="
            h-[39px]
            w-[39px]
          "
          fill="none"
          aria-hidden="true"
        >
          {/* outer compass */}
          <circle
            cx="24"
            cy="24"
            r="15.5"
            stroke="currentColor"
            strokeWidth="1.15"
            opacity=".55"
          />

          {/* inner compass */}
          <circle
            cx="24"
            cy="24"
            r="10.5"
            stroke="currentColor"
            strokeWidth=".8"
            opacity=".28"
          />

          {/* destination route */}
          <path
            d="
              M15 31
              C18 28
              19 25
              21 22
              C23 19
              27 18
              29 15
              C30 13
              32 12
              34 13
            "
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* destination point */}
          <circle
            cx="34"
            cy="13"
            r="3"
            fill="#596343"
            fillOpacity=".14"
            stroke="#596343"
            strokeWidth="1"
          />

          <circle
            cx="34"
            cy="13"
            r="1.1"
            fill="#B7A875"
          />

          {/* compass north */}
          <path
            d="M24 7L26 13L24 12L22 13L24 7Z"
            fill="#B7A875"
            opacity=".8"
          />

          {/* tiny cardinal marks */}
          <path
            d="M24 4V6M24 42V40M4 24H6M42 24H40"
            stroke="currentColor"
            strokeWidth=".7"
            strokeLinecap="round"
            opacity=".4"
          />
        </svg>
      </div>

        <span
          className="
            mt-[8px]
            text-center
            text-[8px]
            font-medium
            uppercase
            leading-[1.35]
            tracking-[0.10em]
            text-[#34392B]
            transition-colors
            duration-500
            group-hover:text-[#20251C]
          "
        >
          Easy
          <br />
          Access
        </span>

      </div>


      {/* =====================================================
          BY THE RIVER
      ====================================================== */}

      <div
        className="
          group
          flex
          flex-col
          items-center
          border-r
          border-[#5B6048]/30
          px-[10px]
          transition-all
          duration-700
        "
      >

<div
  ref={(el) => {
    featureIconRefs.current[2] = el;
  }}
  className={`
    flex
    h-[42px]
    w-[42px]
    items-center
    justify-center
    text-[#596343]

    transform
    transition-all
    duration-[1200ms]
    ease-[cubic-bezier(0.22,1,0.36,1)]

    ${
      isVisible
        ? "translate-y-0 scale-100 opacity-100"
        : "translate-y-5 scale-[0.92] opacity-0"
    }
  `}
  style={{
    transitionDelay: "1650ms",
  }}
>
        <svg
          viewBox="0 0 48 48"
          className="h-[40px] w-[40px]"
          fill="none"
          aria-hidden="true"
        >
          {/* river */}
          <path
            d="
              M5 17
              C11 12 16 13 21 17
              C27 22 32 22 38 17
              C41 15 43 15 45 16
            "
            stroke="currentColor"
            strokeWidth="1.45"
            strokeLinecap="round"
          />

          <path
            d="
              M4 25
              C10 20 16 21 21 25
              C27 30 33 30 39 25
              C41 23 43 23 45 24
            "
            stroke="currentColor"
            strokeWidth="1.15"
            strokeLinecap="round"
            opacity="0.65"
          />

          <path
            d="
              M5 33
              C11 29 16 29 21 33
              C27 37 33 37 39 33
            "
            stroke="currentColor"
            strokeWidth="0.9"
            strokeLinecap="round"
            opacity="0.38"
          />

          {/* reed */}
          <path
            d="M12 38C12 32 12 27 10 23"
            stroke="#69764C"
            strokeWidth="1"
            strokeLinecap="round"
          />

          <path
            d="M12 30C15 27 16 24 16 21"
            stroke="#69764C"
            strokeWidth="0.9"
            strokeLinecap="round"
            opacity="0.7"
          />

          {/* warm highlight */}
          <path
            d="M27 11C31 9 35 9 39 11"
            stroke="#B7A875"
            strokeWidth="0.8"
            strokeLinecap="round"
            opacity="0.7"
          />
        </svg>
      </div>

        <span
          className="
            mt-[8px]
            text-center
            text-[8px]
            font-medium
            uppercase
            leading-[1.35]
            tracking-[0.08em]
            text-[#34392B]
            transition-colors
            duration-500
            group-hover:text-[#20251C]
          "
        >
          By the River,
          <br />
          Amidst Nature
        </span>

      </div>


      {/* =====================================================
          PEACEFUL GETAWAY
      ====================================================== */}

      <div
        className="
          group
          flex
          flex-col
          items-center
          px-[10px]
          last:pr-0
          transition-all
          duration-700
        "
      >

<div
  ref={(el) => {
    featureIconRefs.current[3] = el;
  }}
  className={`
    flex
    h-[42px]
    w-[42px]
    items-center
    justify-center
    text-[#596343]

    transform
    transition-all
    duration-[1200ms]
    ease-[cubic-bezier(0.22,1,0.36,1)]

    ${
      isVisible
        ? "translate-y-0 scale-100 opacity-100"
        : "translate-y-5 scale-[0.92] opacity-0"
    }
  `}
  style={{
    transitionDelay: "1850ms",
  }}
>
              <svg
          viewBox="0 0 48 48"
          className="h-[40px] w-[40px]"
          fill="none"
          aria-hidden="true"
        >
          {/* roof */}
          <path
            d="M8 24L24 11L40 24"
            stroke="currentColor"
            strokeWidth="1.45"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* secondary roof line */}
          <path
            d="M14 23L24 15L34 23"
            stroke="currentColor"
            strokeWidth="0.75"
            strokeLinecap="round"
            opacity="0.4"
          />

          {/* house */}
          <path
            d="M12 23V38H36V23"
            stroke="currentColor"
            strokeWidth="1.35"
            strokeLinejoin="round"
          />

          {/* doorway */}
          <path
            d="M21 38V29H27V38"
            stroke="currentColor"
            strokeWidth="1.1"
          />

          {/* window */}
          <rect
            x="16"
            y="27"
            width="4"
            height="4"
            rx="0.5"
            stroke="currentColor"
            strokeWidth="0.8"
          />

          <rect
            x="28"
            y="27"
            width="4"
            height="4"
            rx="0.5"
            stroke="currentColor"
            strokeWidth="0.8"
          />

          {/* ground */}
          <path
            d="M8 39H40"
            stroke="#A08F5C"
            strokeWidth="0.8"
            strokeLinecap="round"
            opacity="0.65"
          />

          {/* small surrounding tree */}
          <path
            d="M9 35C9 31 10 28 12 26"
            stroke="#69764C"
            strokeWidth="0.8"
            strokeLinecap="round"
          />
        </svg>
      </div>

        <span
          className="
            mt-[8px]
            text-center
            text-[8px]
            font-medium
            uppercase
            leading-[1.35]
            tracking-[0.08em]
            text-[#34392B]
            transition-colors
            duration-500
            group-hover:text-[#20251C]
          "
        >
          A Peaceful
          <br />
          Getaway
        </span>

      </div>

    </div>

    {/* -------------------------------------------------------
    GET DIRECTIONS — LEAF WHISPER
-------------------------------------------------------- */}

{/* -------------------------------------------------------
    GET DIRECTIONS — LEAF WHISPER / LUXURY FINISH
-------------------------------------------------------- */}

<div
ref={ctaRef}
className={`
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
            Explore Paciano
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
      </div>

  


    </div>

          {/* =======================================================
              LOCATION DETAILS — FLOATING MAP CARD

              Sits ON TOP of the landscape.
              Does not create additional vertical space.
          ======================================================= */}

<div
  ref={mapCardRef}
  className={`
    absolute
    left-[11.1%]
    bottom-[-55px]
    z-[100]
    w-[79%]
    h-[230px]

    overflow-hidden
    rounded-[24px]
    border
    border-[#C6B85F]/[0.72]
    bg-[#1B2515]

    shadow-[0_20px_50px_rgba(5,12,7,0.55),0_4px_18px_rgba(0,0,0,0.28)]

    transform
    transition-all
    duration-[1900ms]
    ease-[cubic-bezier(0.22,1,0.36,1)]
    will-change-transform

    ${
      isVisible
        ? "translate-y-0 scale-100 opacity-100"
        : "translate-y-20 scale-[0.97] opacity-0"
    }
  `}
  style={{
    transitionDelay: "2750ms",
  }}
>
          <div
            className="
              pointer-events-none
              absolute
              left-[34%]
              top-[-25%]
              z-[1]
              h-[170px]
              w-[420px]
              rounded-full
              bg-[#C8B866]/[0.075]

              blur-[55px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              inset-x-[8%]
              top-[1px]
              z-[4]

              h-px

              bg-gradient-to-r
              from-transparent
              via-[#E3D89E]/[0.42]
              to-transparent
            "
          />
          <div
          className="
            pointer-events-none
            absolute
            left-[10%]
            top-[10%]
            z-0
            h-[90px]
            w-[38%]
            rounded-full
            bg-white/[0.06]
            blur-[45px]
          "
          />
            {/* =====================================================
                MAP
            ====================================================== */}

            <div
              className="
                absolute
                left-[12px]
                top-[12px]
                bottom-[12px]
                w-[39%]
                overflow-hidden
                rounded-[15px]
                border
                border-[#E7DFC5]/[0.58]
                bg-[#DDE5D2]
                shadow-[0_8px_18px_rgba(20,28,18,0.16),inset_0_1px_0_rgba(255,255,255,0.20)]
              "
            >

          <img
          ref={mapImageRef}
          src={locationMap}
          alt="Paciano location map"
          className="
            h-full
            w-full
            object-cover
            will-change-transform
          "
          />

              {/* MAP PIN */}

              <div
                className="
                  absolute
                  left-[48%]
                  top-[49%]
                  -translate-x-1/2
                  -translate-y-1/2
                "
              >
                <div
                  className="
                    relative
                    flex
                    h-[24px]
                    w-[24px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#4B5234]
                    shadow-[0_4px_12px_rgba(0,0,0,0.25)]
                  "
                >
                  <span
                    className="
                      h-[7px]
                      w-[7px]
                      rounded-full
                      bg-[#F4EFE4]
                    "
                  />

                  <span
                    className="
                      absolute
                      -bottom-[5px]
                      left-1/2
                      h-[9px]
                      w-[9px]
                      -translate-x-1/2
                      rotate-45
                      bg-[#4B5234]
                    "
                  />
                </div>

                <span
                  className="
                    absolute
                    left-[30px]
                    top-[2px]
                    whitespace-nowrap
                    font-['Cormorant_Garamond',serif]
                    text-[15px]
                    font-medium
                    text-[#252A20]
                  "
                >
                  Paciano
                </span>
              </div>

              {/* NORTH INDICATOR */}

              <div
                className="
                  absolute
                  right-[12px]
                  top-[12px]
                  flex
                  h-[38px]
                  w-[38px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#69735D]/50
                  bg-[#F4EFE4]/65
                  backdrop-blur-sm
                "
              >
                <span
                  className="
                    text-[14px]
                    font-medium
                    text-[#252A20]
                  "
                >
                  N
                </span>

                <span
                  className="
                    absolute
                    bottom-[7px]
                    left-1/2
                    h-[1px]
                    w-[9px]
                    -translate-x-1/2
                    rotate-[-45deg]
                    bg-[#252A20]/60
                  "
                />
              </div>

            </div>


            {/* =====================================================
                DETAILS AREA
            ====================================================== */}

            <div
              className="
                absolute
                right-[24px]
                top-[20px]
                bottom-[18px]
                left-[41%]
                flex
                flex-col
              "
            >

              {/* TOP INFORMATION */}

              <div
                className="
                  flex
                  items-start
                  justify-between
                "
              >

                {/* LOCATION */}

                <div
                  className="
                    flex
                    items-start
                    gap-[13px]
                  "
                >

                  {/* PIN ICON */}

                  <svg
                    viewBox="0 0 24 24"
                    className="
                      mt-[1px]
                      h-[30px]
                      w-[30px]
                      shrink-0
                      text-[#F4EFE4]
                    "
                    fill="none"
                  >
                    <path
                      d="
                        M12 21
                        C12 21 19 14.6 19 9
                        C19 5.1 15.9 2 12 2
                        C8.1 2 5 5.1 5 9
                        C5 14.6 12 21 12 21Z
                      "
                      fill="currentColor"
                    />

                    <circle
                       cx="12"
                       cy="9"
                       r="3"
                       fill="#4B5234"
                    />
                  </svg>


                  <div>
                  <div
                    className="
                      font-['Cormorant_Garamond',serif]
                      text-[21px]
                      font-medium
                      leading-[1.05]
                      text-[#F8F1DD]
                      drop-shadow-[0_1px_3px_rgba(0,0,0,0.35)]
                    "
                  >
                    Lataguri, Dooars
                  </div>

                  <div
                    className="
                      mt-[3px]
                      font-['Cormorant_Garamond',serif]
                      text-[17px]
                      italic
                      leading-[1.05]
                      text-[#F7F1DE]
                      opacity-95
                    "
                  >
                    West Bengal, India
                  </div>
                </div>

                </div>


                {/* COORDINATES */}

                <div
                  className="
                    pr-[8px]
                    font-['Cormorant_Garamond',serif]
                    text-[17px]
                    leading-[1.25]
                    text-[#F7F1DE]
                    drop-shadow-[0_1px_3px_rgba(0,0,0,0.18)]
                  "
                >
                  <div>26.5520° N,</div>
                  <div>88.7350° E</div>
                </div>

              </div>


              {/* DESCRIPTION */}

              <p
              className="
                mt-[14px]
                max-w-[561px]
                font-manrope 
                text-[13px]
                leading-[1.35]
                text-[#F7F1DE]
                opacity-95
                drop-shadow-[0_1px_3px_rgba(0,0,0,0.16)]
              "
            >
              A serene location at the edge of the Himalayas, perfectly
              connected yet wonderfully secluded.
            </p>


              {/* DIVIDER */}

              <div
                className="
                  mt-[10px]
                  h-px
                  w-full
                  bg-[#E6DEC8]/30
                "
              />


              {/* =====================================================
                  DISTANCE INFORMATION
              ====================================================== */}

              <div
                className="
                  mt-[11px]
                  flex
                  items-center
                "
              >

                {/* GORUMARA */}

                <div
                  className="
                    flex
                    items-center
                    gap-[18px]
                    pr-[22px]
                  "
                >

                  <svg
                    viewBox="0 0 32 32"
                    className="
                      h-[30px]
                      w-[30px]
                      shrink-0
                      text-[#F4EFE4]
                    "
                    fill="none"
                  >
                    <path
                      d="
                        M6 20
                        H26
                        L24 14
                        H9
                        L6 20Z
                      "
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />

                    <path
                      d="
                        M10 14
                        L12 9
                        H21
                        L24 14
                      "
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />

                    <circle
                      cx="10"
                      cy="22"
                      r="2"
                      stroke="currentColor"
                      strokeWidth="1.3"
                    />

                    <circle
                      cx="22"
                      cy="22"
                      r="2"
                      stroke="currentColor"
                      strokeWidth="1.3"
                    />
                  </svg>

                  <div>
                    <div
                      className="
                        text-[15px]
                        font-semibold
                        leading-none
                        text-[#F4EFE4]
                      "
                    >
                      12 km
                    </div>

                    <div
                      className="
                        mt-[2px]
                        text-[13px]
                        leading-[1.15]
                        text-[#F4EFE4]/65
                      "
                    >
                      Gorumara National Park
                    </div>
                  </div>

                </div>


                {/* VERTICAL DIVIDER */}

                <div
                  className="
                    h-[42px]
                    w-px
                    bg-[#D9D4C3]/25
                  "
                />


                {/* RAILWAY */}

                <div
                  className="
                    flex
                    items-center
                    gap-[11px]
                    px-[28px]
                  "
                >

                  <svg
                    viewBox="0 0 32 32"
                    className="
                    h-[30px]
                    w-[30px]
                      shrink-0
                      text-[#F4EFE4]
                    "
                    fill="none"
                  >
                    <rect
                      x="8"
                      y="5"
                      width="16"
                      height="18"
                      rx="4"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />

                    <path
                      d="M8 16H24"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />

                    <circle
                      cx="12"
                      cy="20"
                      r="1.5"
                      fill="currentColor"
                    />

                    <circle
                      cx="20"
                      cy="20"
                      r="1.5"
                      fill="currentColor"
                    />

                    <path
                      d="M12 27L15 23"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />

                    <path
                      d="M20 27L17 23"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />
                  </svg>

                  <div>
                    <div
                      className="
                      text-[15px]
                      font-semibold
                      leading-none
                      text-[#F4EFE4]
                      "
                    >
                      3 km
                    </div>

                    <div
                      className="
                        mt-[2px]
                        text-[13px]
                        leading-[1.15]
                        text-[#F4EFE4]/65
                      "
                    >
                      Lataguri
                    
                      Railway Station
                    </div>
                  </div>

                </div>


                {/* VERTICAL DIVIDER */}

                <div
                  className="
                    h-[42px]
                    w-px
                    bg-[#D9D4C3]/25
                  "
                />


                {/* AIRPORT */}

                <div
                  className="
                    flex
                    items-center
                    gap-[11px]
                    px-[28px]
                  "
                >

                  <svg
                    viewBox="0 0 32 32"
                    className="
                      h-[30px]
                      w-[30px]
                      shrink-0
                      rotate-[-8deg]
                      text-[#F4EFE4]
                    "
                    fill="none"
                  >
                    <path
                      d="
                        M5 17
                        L27 10
                        L28 12
                        L18 18
                        L15 25
                        L12 24
                        L14 19
                        L7 20
                        Z
                      "
                      fill="currentColor"
                    />
                  </svg>

                  <div>
                    <div
                      className="
                        text-[15px]
                        font-semibold
                        text-[#F4EFE4]
                      "
                    >
                      70 km
                    </div>

                    <div
                      className="
                        mt-[2px]
                        text-[13px]
                        leading-[1.15]
                        text-[#F4EFE4]/65
                      "
                    >
                      Bagdogra Airport
                    </div>
                  </div>

                </div>


                {/* GOOGLE MAPS CTA */}

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Paciano+Lataguri+Dooars"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    ml-auto
                    flex
                    h-[52px]
                    min-w-[155px]
                    items-center
                    justify-between
                    gap-[18px]
                    rounded-full
                    border
                    border-[#F4EFE4]/60
                    px-[18px]
                    text-[#F4EFE4]
                    transition-all
                    duration-500
                    hover:border-[#F4EFE4]
                    hover:bg-[#F4EFE4]/10
                  "
                >

                  <span
                    className="
                      text-[11px]
                      leading-[1.15]
                      tracking-[0.02em]
                    "
                  >
                    View on
                    <br />
                    Google Maps
                  </span>

                  <span
                    className="
                      flex
                      h-[32px]
                      w-[32px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#F4EFE4]/35
                      transition-transform
                      duration-500
                      group-hover:translate-x-[3px]
                    "
                  >
                    <span
                      className="
                        text-[17px]
                        leading-none
                      "
                    >
                      →
                    </span>
                  </span>

                </a>

              </div>

            </div>

          </div>
      </div>
    </section>
  );
};

export default LocationSection;