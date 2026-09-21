import React from "react";
import { motion } from "framer-motion";
import logo from "@/images/paciano-logo.png";
import ButtonLeaf from "@/images/footerbutton-leaf.png";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

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

const stayLinks = [
  "Plan Your Stay",
  "How to Reach",
  "Location",
  "FAQs",
  "Contact Us",
];

const experienceLinks = [
  "Jungle Safaris",
  "Nature Walks",
  "Riverside Moments",
  "Tea Garden Visits",
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

function FooterLink({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.a
      href="#"
      initial={{
        opacity: 0,
        y: 10,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.65,
      }}
      transition={{
        duration: 1,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        relative
        inline-flex
        w-fit
        items-center

        font-manrope
        text-[14px]
        font-light
        leading-[1.8]

        tracking-[-0.01em]
        text-[#F2EBDD]/[0.68]

        transition-all
        duration-[900ms]
        ease-[cubic-bezier(.22,1,.36,1)]

        hover:text-[#F7F2E7]
      "
    >
      <span
        className="
          relative
          transition-transform
          duration-[900ms]
          ease-[cubic-bezier(.22,1,.36,1)]
          group-hover:translate-x-[2px]
        "
      >
        {children}

        {/* Soft editorial underline */}

        <span
          className="
            pointer-events-none
            absolute
            bottom-[-5px]
            left-0
            h-px
            w-full
            origin-left
            scale-x-0
            bg-gradient-to-r
            from-[#C8BC82]/80
            via-[#C8BC82]/45
            to-transparent

            transition-transform
            duration-[900ms]
            ease-[cubic-bezier(.22,1,.36,1)]

            group-hover:scale-x-100
          "
        />
      </span>
    </motion.a>
  );
}

export default function Footer() {
  return (
    <>
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
    CINEMATIC FOOTER ATMOSPHERE
=========================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.08,
          }}
          transition={{
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
    pointer-events-none
    absolute
    inset-0
    z-0
    bg-[radial-gradient(circle_at_18%_35%,rgba(165,176,140,0.07),transparent_28%),radial-gradient(circle_at_82%_40%,rgba(200,188,130,0.055),transparent_30%)]
  "
        />
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
    RIGHT CINEMATIC IMAGE
=========================================================== */}

        {/* <motion.div
          initial={{
            opacity: 0,
            x: 45,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.12,
          }}
          transition={{
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
    pointer-events-none
    absolute
    right-0
    top-0
    bottom-0
    z-[1]
    hidden
    w-[30%]
    overflow-hidden
    lg:block
  "
        >
          <motion.img
            src={footerArchitecture}
            alt=""
            aria-hidden="true"
            animate={{
              scale: [1, 1.018, 1],
              x: [0, -3, 0],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
      absolute
      inset-0
      h-full
      w-full
      object-cover
      object-[72%_center]
      opacity-[0.96]
      saturate-[0.95]
      contrast-[1.02]
      brightness-[0.92]
    "
          />

        
          <div
            className="
      absolute
      inset-y-0
      left-0
      w-[14%]
      bg-gradient-to-r
      from-[#09160F]/[0.9]
      to-transparent
    "
          />

        
          <div
            className="
      absolute
      inset-x-0
      bottom-0
      h-[18%]
      bg-gradient-to-t
      from-[#09160F]/[0.55]
      to-transparent
    "
          />

        
          <div
            className="
      absolute
      inset-0
      bg-[linear-gradient(to_right,rgba(9,22,15,0.12),transparent_22%,transparent_88%,rgba(9,22,15,0.08))]
    "
          />
        </motion.div> */}

        {/* ==========================================================
    LEFT BOTANICAL LEAVES
=========================================================== */}

        <motion.img
          src={footerLeaf}
          alt=""
          aria-hidden="true"
          initial={{
            opacity: 0,
            x: -18,
          }}
          whileInView={{
            opacity: 0.52,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.12,
          }}
          animate={{
            y: [0, -4, 0],
            rotate: [-8, -8.7, -8],
          }}
          transition={{
            opacity: {
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
            },
            x: {
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
            },
            y: {
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="
    pointer-events-none
    absolute
    left-[-55px]
    bottom-[42px]
    z-[8]
    w-[300px]
    max-w-none
    rotate-[-8deg]
    brightness-[1.18]
    saturate-[0.82]
    grayscale-[0.05]
  "
        />

        {/* ==========================================================
          MAIN FOOTER CONTENT
      ========================================================== */}

        <div
          className="
          relative
          z-20
          mx-auto
          w-full
          max-w-[1630px]
          px-6
          pb-7
          pt-[92px]
          sm:px-10
          lg:px-8
          xl:px-0
        "
        >
          {/* ========================================================
            TOP BRAND STATEMENT
        ========================================================= */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.32,
            }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  delayChildren: 0.25,
                  staggerChildren: 0.22,
                },
              },
            }}
            className="
              grid
              gap-8

              lg:grid-cols-[400px_220px_220px_220px]
              lg:gap-[42px]

              xl:grid-cols-[420px_230px_230px_230px]
              xl:gap-[48px]
            "
          >
            {/* ======================================================
              BRAND
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
                lg:pl-12
              "
            >
              {/* ==================================================
                  PACIANO LOGO — PREMIUM
                =================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.94,
                  y: 18,
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
                  duration: 1.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  group
                  relative
                  mt-10
                  w-fit
              "
              >
                {/* Soft atmospheric glow */}

                <motion.div
                  animate={{
                    opacity: [0.08, 0.22, 0.08],
                    scale: [0.96, 1.03, 0.96],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    h-[90px]
                    w-[110px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-[#A5B08C]/[0.10]
                    blur-[50px]
                  "
                />

                {/* Logo */}

                <motion.div
                  animate={{
                    y: [0, -3, 0],
                    rotate: [0, 0.35, 0, -0.35, 0],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    scale: 1.04,
                  }}
                  className="
                    relative
                    z-10
                    overflow-hidden
                  "
                >
                  <motion.img
                    src={logo}
                    alt="Paciano"
                    animate={{
                      filter: [
                        "brightness(0.88)",
                        "brightness(1)",
                        "brightness(0.88)",
                      ],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      block
                      h-auto
                      w-[145px]
                      max-w-full
                      object-contain
                      opacity-95
                    "
                  />

                  {/* Premium highlight */}

                  <motion.span
                    initial={{
                      x: "-180%",
                      opacity: 0,
                    }}
                    animate={{
                      x: ["-180%", "300%"],
                      opacity: [0, 0.45, 0],
                    }}
                    transition={{
                      duration: 3.2,
                      delay: 1.2,
                      repeat: Infinity,
                      repeatDelay: 8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      pointer-events-none
                      absolute
                      inset-y-[-10%]
                      left-0
                      z-20
                      w-[38%]
                      skew-x-[-18deg]
                      bg-gradient-to-r
                      from-transparent
                      via-[#FFF7D8]/40
                      to-transparent
                      blur-[7px]
                    "
                  />
                </motion.div>
                <motion.span
                  initial={{
                    width: 0,
                    opacity: 0,
                  }}
                  whileInView={{
                    width: 64,
                    opacity: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.9,
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
                  mt-[13px]
                  max-w-[400px]

                  font-manrope
                  text-[10px]
                  font-light
                  leading-[1.85]

                  text-[#F2EBDD]/[0.68]

                  sm:text-[14px]
                "
              >
                A quiet retreat in the heart of Dooars, shaped by forest
                mornings, riverside stillness and the timeless rhythm of nature.
                Come away from the ordinary and return to what matters.
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
            </motion.div>
            {/* ======================================================
                  EXPLORE
              ======================================================= */}

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 24,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1.1,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              className="
                relative
                z-[60]
                pt-[48px]
                max-w-[220px]
              "
            >
              <div
                className="
                  mb-7
                  font-manrope
                  text-[11px]
                  font-medium
                  uppercase
                  tracking-[0.38em]
                  text-[#C8BC82]
                "
              >
                Explore
              </div>

              <div className="flex flex-col items-start gap-[7px]">
                {exploreLinks.map((item, index) => (
                  <FooterLink key={item} delay={0.15 + index * 0.11}>
                    {item}
                  </FooterLink>
                ))}
              </div>
            </motion.div>

            {/* ======================================================
                  EXPERIENCES
              ======================================================= */}

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 24,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1.1,
                    delay: 0.14,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              className="
                relative
                z-[60]
                pt-[48px]
                max-w-[230px]
              "
            >
              <div
                className="
                  mb-7
                  font-manrope
                  text-[11px]
                  font-medium
                  uppercase
                  tracking-[0.38em]
                  text-[#C8BC82]
                "
              >
                Experiences
              </div>

              <div className="flex flex-col items-start gap-[7px]">
                {experienceLinks.map((item, index) => (
                  <FooterLink key={item} delay={0.25 + index * 0.11}>
                    {item}
                  </FooterLink>
                ))}
              </div>
            </motion.div>

            {/* ======================================================
                  PLAN YOUR STAY
              ======================================================= */}

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 24,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1.1,
                    delay: 0.28,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              className="
                relative
                z-[60]
                pt-[48px]
                max-w-[220px]
              "
            >
              <div
                className="
                mb-7
                font-manrope
                text-[11px]
                font-medium
                uppercase
                tracking-[0.38em]
                text-[#C8BC82]
              "
              >
                Plan Your Stay
              </div>

              <div className="flex flex-col items-start gap-[7px]">
                {stayLinks.map(
                  (item, index) => (
                    //               item === "Book Your Stay" ? (
                    //                 <motion.a
                    //                   key={item}
                    //                   href="#"
                    //                   initial={{
                    //                     opacity: 0,
                    //                     y: 12,
                    //                   }}
                    //                   whileInView={{
                    //                     opacity: 1,
                    //                     y: 0,
                    //                   }}
                    //                   viewport={{
                    //                     once: true,
                    //                     amount: 0.65,
                    //                   }}
                    //                   transition={{
                    //                     duration: 0.9,
                    //                     delay: 0.24 + index * 0.08,
                    //                     ease: [0.22, 1, 0.36, 1],
                    //                   }}
                    //                   whileHover={{
                    //                     y: -3,
                    //                     scale: 1.025,
                    //                   }}
                    //                   whileTap={{
                    //                     scale: 0.97,
                    //                   }}
                    //                   className="
                    //                     group
                    //                     relative
                    //                     mt-2
                    //                     inline-flex
                    //                     h-[42px]
                    //                     items-center
                    //                     gap-3
                    //                     overflow-hidden
                    //                     rounded-full
                    //                     border
                    //                     border-[#C8BC82]/65
                    //                     bg-[#C8BC82]/[0.055]
                    //                     px-5
                    //                     font-manrope
                    //                     text-[11px]
                    //                     font-medium
                    //                     uppercase
                    //                     tracking-[0.16em]
                    //                     text-[#D8CB8D]
                    //                     backdrop-blur-sm
                    //                     shadow-[0_0_0_rgba(200,188,130,0)]
                    //                     transition-all
                    //                     duration-700
                    //                     ease-[cubic-bezier(.22,1,.36,1)]
                    //                     hover:border-[#E2D59B]
                    //                     hover:bg-[#C8BC82]/[0.12]
                    //                     hover:text-[#FFFDF5]
                    //                     hover:shadow-[0_10px_35px_rgba(200,188,130,0.13)]
                    //                   "
                    //                 >
                    //                   {/* =====================================================
                    //                         SOFT INNER GLOW
                    //                     ====================================================== */}

                    //                   <motion.span
                    //                     animate={{
                    //                       opacity: [0.08, 0.18, 0.08],
                    //                     }}
                    //                     transition={{
                    //                       duration: 4,
                    //                       repeat: Infinity,
                    //                       ease: "easeInOut",
                    //                     }}
                    //                     className="
                    //                       pointer-events-none
                    //                       absolute
                    //                       inset-0
                    //                       rounded-full
                    //                       bg-[#E8DDAA]/[0.08]
                    //                       blur-md
                    //                     "
                    //                   />

                    //                   {/* =====================================================
                    //                       MOVING LIGHT SWEEP
                    //                   ====================================================== */}

                    //                   <motion.span
                    //                     initial={{
                    //                       x: "-140%",
                    //                     }}
                    //                     animate={{
                    //                       x: ["-140%", "180%"],
                    //                     }}
                    //                     transition={{
                    //                       duration: 3.8,
                    //                       repeat: Infinity,
                    //                       repeatDelay: 5.5,
                    //                       ease: [0.22, 1, 0.36, 1],
                    //                     }}
                    //                     className="
                    //                         pointer-events-none
                    //                         absolute
                    //                         inset-y-[-40%]
                    //                         left-0
                    //                         w-[28%]
                    //                         rotate-[18deg]
                    //                         bg-gradient-to-r
                    //                         from-transparent
                    //                         via-[#FFF7D8]/25
                    //                         to-transparent
                    //                         blur-[6px]
                    //                       "
                    //                   />

                    //                   {/* =====================================================
                    //                         TEXT
                    //                     ====================================================== */}

                    //                   <span
                    //                     className="
                    //   relative
                    //   z-10
                    //   transition-transform
                    //   duration-700
                    //   ease-[cubic-bezier(.22,1,.36,1)]
                    //   group-hover:translate-x-[-1px]
                    // "
                    //                   >
                    //                     {item}
                    //                   </span>

                    //                   {/* =====================================================
                    //                       ARROW
                    //                   ====================================================== */}

                    //                   <motion.span
                    //                     animate={{
                    //                       x: [0, 2, 0],
                    //                       y: [0, -1, 0],
                    //                     }}
                    //                     transition={{
                    //                       duration: 2.8,
                    //                       repeat: Infinity,
                    //                       ease: "easeInOut",
                    //                     }}
                    //                     className="
                    //                     relative
                    //                     z-10
                    //                     flex
                    //                     h-[22px]
                    //                     w-[22px]
                    //                     items-center
                    //                     justify-center
                    //                     rounded-full
                    //                     border
                    //                     border-[#D8CB8D]/45
                    //                     bg-[#D8CB8D]/[0.06]
                    //                     transition-all
                    //                     duration-700
                    //                     group-hover:border-[#E8DDAA]/80
                    //                     group-hover:bg-[#D8CB8D]/[0.16]
                    //                   "
                    //                   >
                    //                     <ArrowUpRight
                    //                       size={12}
                    //                       strokeWidth={1.35}
                    //                       className="
                    //                         transition-transform
                    //                         duration-700
                    //                         ease-[cubic-bezier(.22,1,.36,1)]
                    //                         group-hover:translate-x-[2px]
                    //                         group-hover:-translate-y-[2px]
                    //                       "
                    //                     />
                    //                   </motion.span>

                    //                   {/* =====================================================
                    //                       BOTTOM GOLD LINE
                    //                   ====================================================== */}

                    //                   <motion.span
                    //                     initial={{
                    //                       scaleX: 0,
                    //                       opacity: 0,
                    //                     }}
                    //                     whileHover={{
                    //                       scaleX: 1,
                    //                       opacity: 1,
                    //                     }}
                    //                     transition={{
                    //                       duration: 0.7,
                    //                       ease: [0.22, 1, 0.36, 1],
                    //                     }}
                    //                     className="
                    //   pointer-events-none
                    //   absolute
                    //   bottom-0
                    //   left-[18%]
                    //   right-[18%]
                    //   h-px
                    //   origin-center
                    //   bg-gradient-to-r
                    //   from-transparent
                    //   via-[#E5D79A]
                    //   to-transparent
                    // "
                    //                   />

                    //                   {/* =====================================================
                    //                 OUTER HOVER RING
                    //             ====================================================== */}

                    //                   <span
                    //                     className="
                    //   pointer-events-none
                    //   absolute
                    //   inset-[-4px]
                    //   rounded-full
                    //   border
                    //   border-[#D8CB8D]/0
                    //   transition-all
                    //   duration-700
                    //   group-hover:border-[#D8CB8D]/20
                    //   group-hover:scale-[1.03]
                    // "
                    //                   />
                    //                 </motion.a>
                    //               ) : (
                    <FooterLink key={item} delay={0.35 + index * 0.11}>
                      {item}
                    </FooterLink>
                  ),
                  // ),
                )}
              </div>
            </motion.div>
          </motion.div>

          {/* ==========================================================
                RIGHT EDITORIAL QUOTE
            =========================================================== */}

          {/* <motion.div
            initial={{
              opacity: 0,
              x: 24,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 1.4,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
    pointer-events-none
    absolute
    right-[3%]
    top-[48%]
    z-30
    hidden
    max-w-[270px]
    -translate-y-1/2
    text-right
    text-[#C8BC82]
    lg:block
  "
          >
            <motion.div
              animate={{
                y: [0, -3, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                font-['Brittany_Signature',cursive]
                text-[22px]
                leading-[0.92]
                tracking-[0.01em]
              "
            >
              <span className="block">Slower Days.</span>

              <motion.span
                initial={{
                  opacity: 0,
                  x: 12,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1.1,
                  delay: 0.75,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  mt-4
                  block
                  pr-3
                "
              >
                Deeper Connections.
              </motion.span>
            </motion.div>
          </motion.div> */}

          {/* ==========================================================
    RIGHT EDITORIAL STATEMENT
=========================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 55,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.18,
            }}
            transition={{
              duration: 2.2,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
            pointer-events-auto
            absolute
            right-[1.5%]
            top-[25%]
            z-[30]
            hidden
            w-[21%]
            max-w-[350px]
            lg:block
          "
          >
            {/* ========================================================
              SOFT LEAF SHADOW BEHIND THE QUOTE
          ========================================================= */}

            <motion.img
              src={ButtonLeaf}
              alt=""
              aria-hidden="true"
              animate={{
                opacity: [0.06, 0.11, 0.06],
                x: [0, 4, 0],
                y: [0, -3, 0],
                rotate: [-7, -5, -7],
                scale: [1, 1.025, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                    pointer-events-none
                    absolute
                    -left-[18%]
                    top-[2%]
                    z-0
                    w-[230px]
                    max-w-none
                    opacity-[0.08]
                    blur-[1.5px]
                    brightness-[0.45]
                    saturate-[0.65]
                  "
            />

            {/* ========================================================
              EXTRA SOFT BOTANICAL SHADOW
          ========================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                -left-[12%]
                top-[8%]
                z-0
                h-[150px]
                w-[220px]
                rounded-full
                bg-[#A5B08C]/[0.07]
                blur-[55px]
              "
            />

            {/* ========================================================
              QUOTE
          ========================================================= */}

            <motion.div
              className="
                relative
                z-10
                font-['Brittany_Signature',cursive]
                text-[#D8CB8D]
                text-[32px]
                leading-[0.9]
                tracking-[0.01em]
                drop-shadow-[0_4px_18px_rgba(0,0,0,0.28)]
                xl:text-[32px]
              "
            >
              <motion.span
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1.4,
                  delay: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block"
              >
                Slower Days.
              </motion.span>

              <motion.span
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1.4,
                  delay: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                mt-5
                block
                pl-[8%]
              "
              >
                Deeper Connections.
              </motion.span>
            </motion.div>

            {/* ========================================================
              GOLD EDITORIAL LINE
          ========================================================= */}

            <motion.span
              initial={{
                opacity: 0,
                x: -12,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.2,
                delay: 0.95,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
              relative
              z-10
              mt-7
              block
              h-px
              bg-gradient-to-r
              from-[#E6D99B]
              via-[#C8BC82]
              to-transparent
            "
            />

            {/* ========================================================
              SUPPORTING COPY
          ========================================================= */}

            <motion.p
              initial={{
                opacity: 0,
                x: 18,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.35,
                delay: 1.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                relative
                z-10
                mt-5
                max-w-[300px]
                font-manrope
                text-[14px]
                font-light
                leading-[1.7]
                text-[#F2EBDD]/[0.68]
              "
            >
              Nature isn't just a destination,
              <br />
              it's a feeling. Come find yours.
            </motion.p>

            {/* ========================================================
      BOOK YOUR STAY BUTTON
  ========================================================= */}

            <motion.a
              href="#"
              initial={{
                opacity: 0,
                x: 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.45,
                delay: 1.28,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                scale: 1.025,
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
    group
    relative
    mt-7
    flex
    h-[50px]
    w-[245px]
    max-w-full
    items-center
    rounded-full
    border
    border-[#D8CB8D]/75
    bg-[#09160F]/[0.25]
    pl-[76px]
    pr-[10px]
    font-manrope
    text-[10px]
    font-medium
    uppercase
    tracking-[0.24em]
    text-[#E7DBA0]
    backdrop-blur-[3px]
    shadow-[0_0_25px_rgba(200,188,130,0.07)]
    transition-all
    duration-700
    hover:border-[#F0E3A8]
    hover:bg-[#C8BC82]/[0.08]
    hover:shadow-[0_0_35px_rgba(200,188,130,0.16)]
  "
            >
              {/* ======================================================
                  BUTTON GOLD GLOW
              ======================================================= */}

              <motion.span
                animate={{
                  opacity: [0.1, 0.24, 0.1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  pointer-events-none
                  absolute
                  inset-[-3px]
                  rounded-full
                  border
                  border-[#E8DDAA]/20
                  blur-[4px]
                "
              />

              {/* ======================================================
                    TRANSPARENT LEAF — OVERLAPS BUTTON
                ======================================================= */}

              <motion.img
                src={ButtonLeaf}
                alt=""
                aria-hidden="true"
                animate={{
                  y: [0, -2, 0],
                  rotate: [-4, -5, -4],
                }}
                transition={{
                  duration: 11,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
      pointer-events-none
      absolute
      -left-[48px]
      bottom-[-30px]
      z-20
      w-[145px]
      max-w-none
      rotate-[-4deg]
      brightness-[0.82]
      saturate-[0.88]
      drop-shadow-[0_10px_12px_rgba(0,0,0,0.35)]
    "
              />
              {/* ======================================================
                  LEAF SHADOW ON BUTTON
              ======================================================= */}

              <motion.span
                animate={{
                  opacity: [0.45, 0.58, 0.45],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
      pointer-events-none
      absolute
      -left-[18px]
      bottom-[-14px]
      z-[15]
      h-[70px]
      w-[105px]
      rounded-full
      bg-black/30
      blur-[14px]
    "
              />

              {/* ======================================================
                      BUTTON TEXT
                  ======================================================= */}

              <span
                className="
      relative
      z-30
      flex-1
      text-center
      whitespace-nowrap
      transition-transform
      duration-700
      ease-[cubic-bezier(.22,1,.36,1)]
      group-hover:-translate-x-[2px]
    "
              >
                Book Your Stay
              </span>

              {/* ======================================================
                    ARROW CIRCLE
                ======================================================= */}

              <motion.span
                animate={{
                  x: [0, 1.5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
      relative
      z-30
      flex
      h-[38px]
      w-[38px]
      shrink-0
      items-center
      justify-center
      rounded-full
      border
      border-[#D8CB8D]/70
      bg-[#09160F]/30
      transition-all
      duration-700
      group-hover:border-[#F0E3A8]
      group-hover:bg-[#D8CB8D]/[0.12]
    "
              >
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.25}
                  className="
        transition-transform
        duration-700
        ease-[cubic-bezier(.22,1,.36,1)]
        group-hover:translate-x-[3px]
        group-hover:-translate-y-[3px]
      "
                />
              </motion.span>
            </motion.a>
          </motion.div>

          {/* ========================================================
            BOTTOM LEGAL BAR
        ========================================================= */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1,
              delay: 0.6,
            }}
            className="
              mt-10
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
              text-[13px]
              text-[#F1EBDD]/42
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
            >
              <span>© 2025 Paciano. All rights reserved.</span>

              <span
                className="              
                text-[13px]
                text-[#F1EBDD]/42
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
              >
                {/* Nature • People • A brighter tomorrow */}
                Designed & Developed by CodeInQ
              </span>

              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="transition-colors duration-500 hover:text-[#F4EFE4]  text-[13px]"
                >
                  Privacy Policy
                </a>

                <span className="h-3 w-px bg-[#F4EFE4]/15" />

                <a
                  href="#"
                  className="transition-colors duration-500 hover:text-[#F4EFE4]  text-[13px]"
                >
                  Terms & Conditions
                </a>

                <span className="h-3 w-px bg-[#F4EFE4]/15" />

                <a
                  href="#"
                  className="transition-colors duration-500 hover:text-[#F4EFE4]  text-[13px]"
                >
                  Sitemap
                </a>
              </div>
            </div>
          </motion.div>
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
