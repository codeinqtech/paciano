import React from "react";
import { motion } from "framer-motion";
import logo from "@/images/paciano-logo.png";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone
} from "lucide-react";

import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

import footerArchitecture from "@/images/footer-architecture.png";
import footerLeaf from "@/images/location-left-leaves.png";

const exploreLinks = [
  "Home",
  "Stay",
  "Experiences",
  "Dining",
  "Gallery",
  "Offers",
];

const aboutLinks = [
  "Our Story",
  "Sustainability",
  "Location",
  "Careers",
  "Blog",
  "Contact",
];

const experienceLinks = [
  "Jungle Safaris",
  "Nature Walks",
  "Tea Garden Visits",
  "Riverside Moments",
  "Local Culture",
  "Wellness & Relaxation",
];

function LuxurySocialButton({
  icon,
  label,
  delay = 0,
}: {
  icon: React.ReactNode;
  label: string;
  delay?: number;
}) {
  return (
    <motion.a
      href="#"
      aria-label={label}
      initial={{
        opacity: 0,
        y: 14,
        scale: 0.82,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.5,
      }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -5,
        scale: 1.08,
      }}
      whileTap={{
        scale: 0.93,
      }}
      className="
        group
        relative
        flex
        h-[46px]
        w-[46px]
        items-center
        justify-center
        rounded-full
        border
        border-[#C8BC82]/55
        bg-[#C8BC82]/[0.055]
        text-[#F4EFE4]/90
        shadow-[0_0_0_rgba(200,188,130,0)]
        backdrop-blur-sm
        transition-all
        duration-700
        hover:border-[#D8CB8D]
        hover:bg-[#C8BC82]/[0.12]
        hover:text-[#FFFDF5]
        hover:shadow-[0_8px_30px_rgba(200,188,130,0.14)]
      "
    >
      {/* ===============================================
          AUTOMATIC OUTER PULSE
      ================================================ */}

      <motion.span
        animate={{
          scale: [1, 1.22, 1],
          opacity: [0.35, 0, 0.35],
        }}
        transition={{
          duration: 3.8,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          inset-[-3px]
          rounded-full
          border
          border-[#C8BC82]/35
        "
      />

      {/* ===============================================
          SECONDARY RING
      ================================================ */}

      <motion.span
        animate={{
          scale: [0.92, 1.12, 0.92],
          opacity: [0, 0.18, 0],
        }}
        transition={{
          duration: 4.8,
          delay: delay + 0.7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          inset-[-7px]
          rounded-full
          border
          border-[#E8DDAA]/20
        "
      />

      {/* ===============================================
          ICON
      ================================================ */}

      <motion.span
        animate={{
          y: [0, -1.5, 0],
          scale: [1, 1.045, 1],
        }}
        transition={{
          duration: 3.2,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative
          z-10
          flex
          items-center
          justify-center
          text-[17px]
        "
      >
        {icon}
      </motion.span>

      {/* ===============================================
          BOTTOM GOLD/SAGE ACCENT
      ================================================ */}

      <motion.span
        animate={{
          width: ["0px", "12px", "0px"],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 3.6,
          delay: delay + 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          bottom-[5px]
          left-1/2
          h-px
          -translate-x-1/2
          bg-[#D8CB8D]
        "
      />

      {/* ===============================================
          HOVER LIGHT
      ================================================ */}

      <span
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-full
          bg-[#D8CB8D]/0
          blur-md
          transition-all
          duration-700
          group-hover:bg-[#D8CB8D]/10
        "
      />
    </motion.a>
  );
}


// function LuxurySocialButton({
//   icon,
//   label,
// }: {
//   icon: React.ReactNode;
//   label: string;
// }) {
//   return (
//     <motion.a
//       href="#"
//       aria-label={label}
//       initial="rest"
//       whileHover="hover"
//       whileTap={{
//         scale: 0.92,
//       }}
//       className="
//         group
//         relative
//         flex
//         h-[43px]
//         w-[43px]
//         items-center
//         justify-center
//         rounded-full
//         border
//         border-[#A5B08C]/30
//         bg-[#F2EBDD]/[0.025]
//         text-[#DDE2D1]/75
//         backdrop-blur-md
//       "
//     >
//       {/* Outer glow */}

//       <motion.span
//         variants={{
//           rest: {
//             scale: 0.7,
//             opacity: 0,
//           },
//           hover: {
//             scale: 1.35,
//             opacity: 1,
//           },
//         }}
//         transition={{
//           duration: 0.7,
//           ease: [0.22, 1, 0.36, 1],
//         }}
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           rounded-full
//           border
//           border-[#A5B08C]/20
//           bg-[#A5B08C]/[0.04]
//         "
//       />

//       {/* Icon */}

//       <motion.span
//         variants={{
//           rest: {
//             y: 0,
//             scale: 1,
//           },
//           hover: {
//             y: -1,
//             scale: 1.12,
//           },
//         }}
//         transition={{
//           duration: 0.5,
//           ease: [0.22, 1, 0.36, 1],
//         }}
//         className="
//           relative
//           z-10
//           flex
//           items-center
//           justify-center
//           text-[15px]
//           transition-colors
//           duration-500
//           group-hover:text-[#F4EFE4]
//         "
//       >
//         {icon}
//       </motion.span>

//       {/* Bottom light */}

//       <span
//         className="
//           pointer-events-none
//           absolute
//           bottom-[5px]
//           left-1/2
//           h-px
//           w-0
//           -translate-x-1/2
//           bg-[#C8D0A7]
//           transition-all
//           duration-700
//           group-hover:w-3
//         "
//       />
//     </motion.a>
//   );
// }

function FooterLink({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#"
      className="
        group
        relative
        inline-flex
        w-fit
        text-[12px]
        leading-[1.7]
        text-[#F1EBDD]/62
        transition-all
        duration-500
        ease-[cubic-bezier(.22,1,.36,1)]
        hover:translate-x-[4px]
        hover:text-[#F4EFE4]
      "
    >
      <span>{children}</span>

      <span
        className="
          pointer-events-none
          absolute
          bottom-[-2px]
          left-0
          h-px
          w-0
          bg-[#C8B976]
          transition-all
          duration-600
          ease-[cubic-bezier(.22,1,.36,1)]
          group-hover:w-full
        "
      />
    </a>
  );
}

export default function Footer() {
  
  return (
    <>
    <style>
      {`
        
        

        
      `}
    </style>
    <footer
      className="
        relative
        z-20
        -mt-[52px]
        overflow-hidden
        bg-[#09160F]
        text-[#F4EFE4]
      "
    >
      {/* ==========================================================
          ATMOSPHERIC BACKGROUND
      ========================================================== */}
{/* 
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          bg-[radial-gradient(circle_at_18%_12%,rgba(116,132,78,0.13),transparent_28%),radial-gradient(circle_at_78%_42%,rgba(76,94,53,0.12),transparent_32%),linear-gradient(180deg,#102116_0%,#09160F_52%,#07110C_100%)]
        "
      /> */}
      

      {/* ==========================================================
          TOP BOTANICAL LIGHT
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-8%]
          top-[6%]
          -z-10
          h-[360px]
          w-[360px]
          rounded-full
          bg-[#A7B07B]/[0.06]
          blur-[110px]
        "
      />

      {/* ==========================================================
          RIGHT ARCHITECTURAL IMAGE
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          bottom-0
          -z-[5]
          hidden
          w-[39%]
          overflow-hidden
          lg:block
        "
      >
        <img
          src={footerArchitecture}
          alt=""
          aria-hidden="true"
          className="
            h-full
            w-full
            object-cover
            object-[72%_center]
            opacity-[0.42]
            saturate-[0.72]
            contrast-[1.05]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#09160F]
            via-[#09160F]/75
            to-[#09160F]/20
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#07110C]
            via-transparent
            to-[#0A1811]/20
          "
        />
      </div>

      {/* ==========================================================
          LARGE BOTANICAL LEAF
      ========================================================== */}

      <img
        src={footerLeaf}
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[-55px]
          bottom-[65px]
          -z-[2]
          w-[300px]
          max-w-none
          rotate-[-8deg]
          opacity-[0.22]
          grayscale-[0.15]
          transition-transform
          duration-[1800ms]
          ease-[cubic-bezier(.22,1,.36,1)]
          hover:rotate-[-11deg]
        "
      />

      {/* ==========================================================
          MAIN FOOTER CONTENT
      ========================================================== */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1630px]
          px-6
          pb-7
          pt-[72px]
          sm:px-10
          lg:px-8
          xl:px-0
        "
      >
        {/* ========================================================
            TOP BRAND STATEMENT
        ========================================================= */}

        <div
          className="
            grid
            gap-14
            lg:grid-cols-[1.15fr_0.75fr_0.75fr_1fr]
            lg:gap-10
          "
        >
          {/* ======================================================
              BRAND
          ======================================================= */}
          {/* ======================================================
    BRAND — LUXURY SIGNATURE
======================================================= */}

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{
    once: true,
    amount: 0.25,
  }}
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.16,
      },
    },
  }}
  className="
  relative
  max-w-[420px]
  pt-0
  lg:pt-[2px]
"
>
  {/* ====================================================
      LOGO
  ===================================================== */}

{/* ==================================================
  PACIANO LOGO — PREMIUM
=================================================== */}

<motion.div
initial={{
  opacity: 1,
  scale: 0.96,
  y: 10,
}}
whileInView={{
  opacity: 1,
  scale: 1,
  y: 0,
}}
viewport={{
  once: true,
  amount: 0.2,
}}
transition={{
  duration: 1.2,
  ease: [0.22, 1, 0.36, 1],
}}
className="
  group
  relative
  w-fit
"
>
{/* -----------------------------------------------
    SOFT ATMOSPHERIC GLOW
------------------------------------------------ */}

<motion.div
  animate={{
    opacity: [0.12, 0.28, 0.12],
    scale: [0.94, 1.04, 0.94],
  }}
  transition={{
    duration: 5.5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
    pointer-events-none
    absolute
    left-1/2
    top-1/2
    h-[115px]
    w-[190px]
    -translate-x-1/2
    -translate-y-1/2
    rounded-full
    bg-[#A5B08C]/[0.10]
    blur-[45px]
  "
/>

{/* -----------------------------------------------
    LOGO
------------------------------------------------ */}

<motion.div
  animate={{
    y: [0, -2, 0],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  whileHover={{
    scale: 1.025,
  }}
  className="
    relative
    z-10
    overflow-hidden
  "
>
  <img
    src={logo}
    alt="Paciano"
    className="
      block
      h-auto
      w-[145px]
      max-w-full
      object-contain
      opacity-95
      transition-all
      duration-700
      ease-[cubic-bezier(.22,1,.36,1)]
      group-hover:opacity-100
    "
  />

  {/* ---------------------------------------------
      ONE-TIME LIGHT SWEEP
  ---------------------------------------------- */}

  <motion.span
    initial={{
      x: "-150%",
    }}
    whileInView={{
      x: "170%",
    }}
    viewport={{
      once: true,
      amount: 0.25,
    }}
    transition={{
      duration: 1.8,
      delay: 0.8,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="
      pointer-events-none
      absolute
      inset-y-0
      left-0
      z-20
      w-[30%]
      skew-x-[-18deg]
      bg-gradient-to-r
      from-transparent
      via-[#F7F1D5]/35
      to-transparent
      blur-[4px]
    "
  />
</motion.div>

{/* -----------------------------------------------
    SMALL BRAND ACCENT
---------------------------------------------- */}

<motion.span
  initial={{
    width: 0,
    opacity: 0,
  }}
  whileInView={{
    width: 32,
    opacity: 1,
  }}
  viewport={{
    once: true,
  }}
  transition={{
    duration: 0.8,
    delay: 0.9,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="
    mt-4
    block
    h-px
    bg-gradient-to-r
    from-[#C8BC82]/80
    to-transparent
  "
/>
</motion.div>

  
  {/* ====================================================
      TAGLINE
  ===================================================== */}

  <motion.div
    variants={{
      hidden: {
        opacity: 0,
        y: 12,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    }}
    className="
      mt-5
      font-serif
      text-[19px]
      italic
      tracking-[-0.01em]
      text-[#D9DEC9]
      sm:text-[21px]
    "
  >
    Where the forest
    <span className="text-[#A5B08C]">
      {" "}slows you down.
    </span>
  </motion.div>

  {/* ====================================================
      DESCRIPTION
  ===================================================== */}

  <motion.p
    variants={{
      hidden: {
        opacity: 0,
        y: 15,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    }}
    className="
      mt-5
      max-w-[390px]
      text-[13px]
      font-light
      leading-[1.9]
      tracking-[0.005em]
      text-[#F2EBDD]/[0.68]
    "
  >
    A quiet retreat in the heart of Dooars, shaped by
    forest mornings, riverside stillness and the timeless
    rhythm of nature. Come away from the ordinary and
    return to what matters.
  </motion.p>

  {/* ====================================================
      SOCIAL ICONS
  ===================================================== */}

  <motion.div
    variants={{
      hidden: {
        opacity: 0,
        y: 15,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    }}
    className="
      mt-8
      flex
      items-center
      gap-3
    "
  >
    <LuxurySocialButton
      label="Instagram"
      icon={<FaInstagram />}
      delay={0}
    />

    <LuxurySocialButton
      label="Facebook"
      icon={<FaFacebook />}
      delay={0.22}
    />

    <LuxurySocialButton
      label="YouTube"
      icon={<FaYoutube />}
      delay={0.44}
    />

    <LuxurySocialButton
      label="LinkedIn"
      icon={<FaLinkedinIn />}
      delay={0.66}
    />
  </motion.div>

  {/* ====================================================
      BRAND SIGNATURE
  ===================================================== */}

  <motion.div
    variants={{
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          duration: 1,
          delay: 0.15,
        },
      },
    }}
    className="
      mt-6
      flex
      items-center
      gap-3
    "
  >
    <span className="h-px w-5 bg-[#A5B08C]/35" />

    <span
      className="
        text-[8px]
        uppercase
        tracking-[0.38em]
        text-[#A5B08C]/65
      "
    >
      Live Slowly
    </span>

    <span className="h-px w-5 bg-[#A5B08C]/35" />
  </motion.div>
</motion.div>

          {/* ======================================================
              EXPLORE
          ======================================================= */}

          <div>
            <div
              className="
                mb-6
                text-[9px]
                font-medium
                uppercase
                tracking-[0.34em]
                text-[#C8BC82]
              "
            >
              Explore
            </div>

            <div className="flex flex-col items-start gap-[7px]">
              {exploreLinks.map((item) => (
                <FooterLink key={item}>{item}</FooterLink>
              ))}
            </div>
          </div>

          {/* ======================================================
              EXPERIENCES
          ======================================================= */}

          <div>
            <div
              className="
                mb-6
                text-[9px]
                font-medium
                uppercase
                tracking-[0.34em]
                text-[#C8BC82]
              "
            >
              Experiences
            </div>

            <div className="flex flex-col items-start gap-[7px]">
              {experienceLinks.map((item) => (
                <FooterLink key={item}>{item}</FooterLink>
              ))}
            </div>
          </div>

          {/* ======================================================
              CONTACT
          ======================================================= */}

          <div>
            <div
              className="
                mb-6
                text-[9px]
                font-medium
                uppercase
                tracking-[0.34em]
                text-[#C8BC82]
              "
            >
              Get in touch
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <MapPin
                  size={18}
                  strokeWidth={1.4}
                  className="mt-[2px] shrink-0 text-[#D7CB96]"
                />

                <div>
                  <div className="text-[13px] text-[#F4EFE4]/88">
                    Lataguri, Dooars
                  </div>

                  <div
                    className="
                      mt-[2px]
                      font-['Cormorant_Garamond',serif]
                      text-[15px]
                      italic
                      text-[#F4EFE4]/62
                    "
                  >
                    West Bengal, India
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone
                  size={17}
                  strokeWidth={1.4}
                  className="shrink-0 text-[#D7CB96]"
                />

                <span className="text-[12px] text-[#F4EFE4]/68">
                  +91 98765 43210
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Mail
                  size={17}
                  strokeWidth={1.4}
                  className="shrink-0 text-[#D7CB96]"
                />

                <span className="text-[12px] text-[#F4EFE4]/68">
                  hello@paciano.com
                </span>
              </div>
            </div>
          </div>
        </div>

       
       

        {/* ========================================================
            BOTTOM LEGAL BAR
        ========================================================= */}

        <div
          className="
            mt-14
            border-t
            border-[#D5CA9A]/18
            pt-5
          "
        >
          <div
            className="
              flex
              flex-col
              gap-4
              text-[9px]
              text-[#F1EBDD]/42
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <span>
              © 2025 Paciano. All rights reserved.
            </span>

            <span
              className="
                uppercase
                tracking-[0.30em]
                text-[#C8BC82]/60
              "
            >
              Nature • People • A brighter tomorrow
            </span>

            <div className="flex items-center gap-4">
              <a
                href="#"
                className="transition-colors duration-500 hover:text-[#F4EFE4]"
              >
                Privacy Policy
              </a>

              <span className="h-3 w-px bg-[#F4EFE4]/15" />

              <a
                href="#"
                className="transition-colors duration-500 hover:text-[#F4EFE4]"
              >
                Terms & Conditions
              </a>

              <span className="h-3 w-px bg-[#F4EFE4]/15" />

              <a
                href="#"
                className="transition-colors duration-500 hover:text-[#F4EFE4]"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================================
          BOTTOM DECORATIVE LINE
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[22px]
          left-[7%]
          right-[7%]
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#C9BD83]/20
          to-transparent
        "
      />
     </footer>
    </>
  );
}