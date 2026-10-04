import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  motion,
  animate,
  useMotionValue,
  useTransform,
  useScroll,
  useInView,
  type Variants
} from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Sparkles,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import bannerImg from "@/images/contact/contact-banner.png";
import convImg1 from "@/images/contact/about-bigimg.png";
import convImg2 from "@/images/contact/teagarden.png";
 import convOverlap from "@/images/contact/teagarden.png";
import leafLeft from "@/images/location-left-leaves.png";
import leafAccent from "@/images/dining-leaf2.png";
import leafSoft from "@/images/dining-leaf3.png";
import leafCorner from "@/images/button-leaf.png";
// import contactInterlinkLeaf  from "@/images/contact/watercolorLeaf.png";
import contactLeafIcon from "@/images/contact/paciano-leaf-gold-transparent.png";
import contactMain from "@/images/contact/we-are-just-a-conversation-away2.png";
import contactDetail from "@/images/contact/we-are-just-a-conversation-away2.png";
import contactBottomLeaf from "@/images/contact/contact-bottom-leaf.png";

const FOREST = "#0E2D20";
const GOLD = "#C8A76A";
const PARCHMENT = "#eee9dc";

/** Compact organic join between image/dark and cream sections (shorter than home curves). */
function CreamJoinFromAbove() {
  return (
    <div
      className="pointer-events-none absolute bottom-0 left-0 z-20 h-[58px] w-full sm:h-[68px] lg:h-[76px]"
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 76"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <path
          d="
            M0,76
            L0,44
            C120,62 210,18 360,28
            C510,38 620,68 780,52
            C940,36 1080,14 1260,32
            C1380,44 1440,38 1440,48
            L1440,76
            Z
          "
          fill={PARCHMENT}
        />
      </svg>
    </div>
  );
}

/** Soft feather from cream form into location panorama (no hard cut) */
function CreamToLocationBlend() {
  return (
    <div
      className="pointer-events-none relative z-30 w-full"
      style={{ height: "clamp(72px, 11vw, 128px)" }}
      aria-hidden
    >
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, ${PARCHMENT} 0%, ${PARCHMENT} 28%, rgba(248,244,238,0.92) 48%, rgba(248,244,238,0.55) 68%, rgba(248,244,238,0) 100%)`,
        }}
      />
      <svg
        viewBox="0 0 1440 128"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="contactCreamFeather" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={PARCHMENT} stopOpacity="1" />
            <stop offset="55%" stopColor={PARCHMENT} stopOpacity="0.85" />
            <stop offset="100%" stopColor={PARCHMENT} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="
            M0,0
            L1440,0
            L1440,52
            C1180,118 980,118 720,78
            C460,38 260,118 0,62
            Z
          "
          fill="url(#contactCreamFeather)"
        />
      </svg>
    </div>
  );
}

/** Home-style mist band — low height between cream sections */
// function MistSectionBridge() {
//   return (
//     <div
//       className="relative left-1/2 z-10 w-screen -translate-x-1/2 overflow-hidden bg-[#F8F4EE]"
//       style={{ height: "clamp(108px, 14vw, 148px)" }}
//       aria-hidden
//     >
//       <img
//         src={mistMountains}
//         alt=""
//         className="animate-contact-mist-drift absolute inset-0 z-10 h-full w-full object-cover object-center opacity-[0.95] mix-blend-multiply"
//       />
//       <div className="absolute inset-x-0 top-0 z-20 h-[55%] bg-gradient-to-b from-[#F8F4EE] via-[#F8F4EE]/45 to-transparent" />
//       <div className="absolute inset-x-0 bottom-0 z-20 h-[55%] bg-gradient-to-t from-[#F8F4EE] via-[#F8F4EE]/50 to-transparent" />
//     </div>
//   );
// }

function FormField({
  id,
  label,
  name,
  value,
  onChange,
  type = "text",
  required,
  autoComplete,
  placeholder,
  as = "input",
  className = "",
  inputClassName,
}: {
  id: string;
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
  as?: "input" | "textarea";
  className?: string;
  inputClassName?: string;
}) {
  const labelCls =
    "mb-2 block font-manrope uppercase sm:mb-3 text-[0.75rem] tracking-[0.18em]";
  const inputCls =
    inputClassName ??
    `luxury-input${as === "textarea" ? " min-h-[100px] sm:min-h-[120px]" : ""}`;

  return (
    <div className={className}>
      <label htmlFor={id} className={labelCls} style={{ color: '#71803F '}}>
        {label}
      </label>
      {as === "textarea" ? (
        <textarea
        id={id}
        className={inputCls}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        aria-required={required}
        />
      ) : (
        <input
          id={id}
          className={inputCls}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          autoComplete={autoComplete}
          aria-required={required}
        />
      )}
    </div>
  );
}

function BotanicalBackdrop({ variant }: { variant: "info" | "form" }) {
  if (variant === "info") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <img
          src={leafLeft}
          alt=""
          className="absolute -left-[8%] -top-[6%] w-[min(52vw,420px)] opacity-[0.22] mix-blend-multiply sm:-left-[4%] sm:opacity-[0.26]"
        />
        <img
          src={leafAccent}
          alt=""
          className="absolute -right-[12%] top-[8%] w-[min(40vw,320px)] rotate-[12deg] opacity-[0.18] mix-blend-multiply sm:-right-[6%] sm:opacity-[0.22]"
        />
        <img
          src={leafSoft}
          alt=""
          className="absolute bottom-[6%] left-[2%] hidden w-[200px] rotate-[-18deg] opacity-[0.14] mix-blend-multiply sm:block"
        />
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <img
        src={leafCorner}
        alt=""
        className="absolute -left-[10%] top-[12%] w-[min(44vw,340px)] rotate-[-8deg] opacity-[0.2] mix-blend-multiply"
      />
      <img
        src={leafAccent}
        alt=""
        className="absolute -right-[14%] bottom-[10%] w-[min(38vw,300px)] rotate-[22deg] opacity-[0.17] mix-blend-multiply sm:-right-[8%]"
      />
      <img
        src={leafLeft}
        alt=""
        className="absolute -right-[20%] -top-[4%] hidden w-[280px] rotate-[165deg] opacity-[0.12] mix-blend-multiply lg:block"
      />
    </div>
  );
}

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p
      className="mb-4 font-jost text-[0.68rem] font-medium uppercase tracking-[0.2em] sm:mb-5 sm:text-[0.7rem]"
      style={{ color: GOLD }}
    >
      {children}
    </p>
  );
}

function ContactItem({
  icon,
  label,
  value,
  description,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  description: string;
}) {
  return (
    <div className="group">

      <div className="
        mb-4
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        border
        border-[#C9A45C]/60
        text-[#C9A45C]
        transition-all
        duration-500
        group-hover:bg-[#C9A45C]
        group-hover:text-[#172018]
      ">
        {icon}
      </div>

      <p className="mb-1 text-[9px] uppercase tracking-[0.3em] text-[#C9A45C]">
        {label}
      </p>

      <p className="font-serif text-sm text-white">
        {value}
      </p>

      <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-white/40">
        {description}
      </p>

    </div>
  );
}

function ContactHero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "8%"]
  );
  
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.03, 1.06]
  )

  const cinematicX = useMotionValue(0);
  const cinematicY = useMotionValue(0);
  const cinematicScale = useMotionValue(1.03);
  
  useEffect(() => {
    const controls = animate(
      cinematicX,
      [0, -18, -8, 0],
      {
        duration: 40,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      }
    );
  
    const yControls = animate(
      cinematicY,
      [0, -6, -3, 0],
      {
        duration: 40,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      }
    );
  
    const scaleControls = animate(
      cinematicScale,
      [1.03, 1.055, 1.045, 1.03],
      {
        duration: 40,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      }
    );
  
    return () => {
      controls.stop();
      yControls.stop();
      scaleControls.stop();
    };
  }, []);

  return (
    <section
      ref={ref}
      className="
        relative
        flex
        min-h-[100svh]
        w-full
        items-center
        justify-center
        overflow-hidden
      "
    >

      {/* =====================================================
          HERO IMAGE
      ====================================================== */}

      <motion.div
        className="absolute inset-0 h-full w-full"
        style={{
          x: cinematicX,
          y: cinematicY,
          scale: cinematicScale,
        }}
      >
        <img
          src={bannerImg}
          alt="Paciano Dooars"
          className="
            h-full
            w-full
            object-cover
            object-[50%_50%]
            sm:object-[50%_50%]
            lg:object-center
          "
          style={{
            filter:
              "brightness(1.05) saturate(1.08) contrast(1.04)",
          }}
        />
      </motion.div>


      {/* =====================================================
          LEFT FOREGROUND LEAVES
          transparent PNG
      ====================================================== */}

      <motion.img
        src="/assets/contact-leaves.png"
        alt=""
        aria-hidden="true"
        initial={{
          opacity: 0,
          x: -35,
          y: -20,
        }}
        animate={{
          opacity: 0.96,
          x: 0,
          y: 0,
        }}
        transition={{
          duration: 1.6,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          pointer-events-none
          absolute
          left-[-35px]
          top-[-25px]
          z-[8]
          w-[330px]
          max-w-none
          select-none
          sm:left-[-45px]
          sm:top-[-35px]
          sm:w-[390px]
          md:w-[430px]
          lg:left-[-55px]
          lg:top-[-45px]
          lg:w-[470px]
          xl:w-[520px]
        "
      />


      {/* =====================================================
          TOP CINEMATIC GRADE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[2]
        "
        style={{
          background:
            "linear-gradient(180deg, rgba(8,24,19,0.40) 0%, rgba(8,24,19,0.04) 24%, rgba(8,24,19,0.02) 55%, rgba(5,20,15,0.48) 100%)",
        }}
      />


      {/* =====================================================
          WARM GOLDEN ATMOSPHERE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[3]
        "
        style={{
          background:
            "radial-gradient(circle at 17% 30%, rgba(255,196,86,0.18) 0%, rgba(255,178,72,0.08) 18%, transparent 42%)",
        }}
      />


      {/* =====================================================
          CENTER CINEMATIC COPY SHADOW

          IMPORTANT:
          This is NOT a black box.

          It softly darkens only the area behind
          the typography.
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[4]
        "
        style={{
          background:
            "radial-gradient(ellipse 43% 32% at 50% 51%, rgba(4,17,13,0.58) 0%, rgba(4,17,13,0.42) 30%, rgba(4,17,13,0.20) 55%, transparent 78%)",
        }}
      />


      {/* =====================================================
          SUBTLE CENTER LOWER SHADOW

          Gives the text the same cinematic depth
          as the reference.
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[42%]
          z-[4]
          h-[360px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          blur-[80px]
        "
        style={{
          background:
            "rgba(3,17,12,0.18)",
        }}
      />


      {/* =====================================================
          RIGHT EDGE VIGNETTE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[4]
        "
        style={{
          background:
            "linear-gradient(90deg, rgba(5,20,15,0.08) 0%, transparent 25%, transparent 72%, rgba(5,20,15,0.28) 100%)",
        }}
      />


      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-[10]
          flex
          w-full
          max-w-[1400px]
          flex-col
          items-center
          px-6
          pb-16
          pt-28
          text-center
          sm:px-10
          sm:pb-20
          sm:pt-32
          lg:pb-24
        "
      >
        {/* SOFT CINEMATIC SHADOW BEHIND COPY */}
        <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -z-10
          h-[420px]
          w-[820px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
        "
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.58) 0%, rgba(0,0,0,0.40) 32%, rgba(0,0,0,0.20) 58%, transparent 82%)",
          filter: "blur(32px)",
        }}
      />

        {/* =================================================
            EYEBROW
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 22,
            filter: "blur(5px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1.8,
            delay: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mb-6
            flex
            items-center
            justify-center
            gap-5
            font-jost
            text-[0.58rem]
            font-medium
            uppercase
            sm:mb-7
            sm:gap-7
            sm:text-[0.65rem]
          "
          style={{
            color: "rgba(245,226,181,0.96)",
          }}
        >

          {/* LEFT EYEBROW LINE */}

          <span
            className="
              h-px
              w-12
              sm:w-16
            "
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(218,190,132,0.9))",
            }}
          />

          <span
            className="
              font-jost
              font-medium
              uppercase
              tracking-[0.34em]
            "
            style={{
              fontSize: "0.70rem",
            }}
          >
            Get In Touch
          </span>

          {/* RIGHT EYEBROW LINE */}

          <span
            className="
              h-px
              w-12
              sm:w-16
            "
            style={{
              background:
                "linear-gradient(90deg, rgba(218,190,132,0.9), transparent)",
            }}
          />

        </motion.div>


        {/* =================================================
            MAIN HEADING
        ================================================= */}

        <motion.h1
           initial={{
            opacity: 0,
            y: 42,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 2.4,
            delay: 1.25,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            relative            
            leading-[0.88]
            tracking-[-0.025em]
            text-white
            text-center
            font-['Cormorant_Garamond']
            font-medium
            text-[44px]
            sm:text-[52px]
            md:text-[60px]
            lg:text-[68px]
            xl:text-[76px]

            max-w-[760px]
            mx-auto
          "
          style={{           
            textShadow:
              "0 4px 30px rgba(0,0,0,0.30), 0 1px 8px rgba(0,0,0,0.18)",
          }}
        >

          Let’s Begin

          <br />

          <motion.div
            initial={{
              opacity: 0,
              y: 28,
              filter: "blur(6px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 3.2,
              delay: 2.25,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
          <span
            className="italic 
            text-[44px]
            sm:text-[52px]
            md:text-[60px]
            lg:text-[68px]
            xl:text-[76px]
            max-w-[760px]"
            style={{
              color: "#8faa42",
              textShadow:
                "0 4px 30px rgba(0,0,0,0.35)",
            }}
          >
            Your Paciano Story.
          </span>
          </motion.div>

        </motion.h1>


       

          {/* =====================================================
              LOWER DIVIDER + GOLD LEAF
          ====================================================== */}
          <div className="my-7 flex items-center justify-center gap-7 sm:my-8 sm:gap-8">

            {/* Left line */}
            <motion.div
              initial={{
                opacity: 0,
                scaleX: 0,
              }}
              animate={{
                opacity: 1,
                scaleX: 1,
              }}
              transition={{
                duration: 2.8,
                delay: 4.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="h-px w-16 origin-right sm:w-28 lg:w-36"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(211,177,108,0.9))",
              }}
            />

            {/* GOLD LEAF */}
            <motion.img
              src={contactLeafIcon}
              alt=""
              aria-hidden="true"
              initial={{
                opacity: 0,
                scale: 0.7,
                rotate: -8,
                y: 5,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
                y: 0,
              }}
              transition={{
                duration: 2.9,
                delay: 4.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                h-[30px]
                w-[30px]
                shrink-0
                object-contain
                sm:h-[48px]
                sm:w-[48px]
              "
              style={{
                filter:
                  "drop-shadow(0 2px 5px rgba(0,0,0,0.25))",
              }}
            />

            {/* Right line */}
            <motion.div
                initial={{
                  opacity: 0,
                  scaleX: 0,
                }}
                animate={{
                  opacity: 1,
                  scaleX: 1,
                }}
                transition={{
                  duration: 2.8,
                  delay: 4.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
              className="h-px w-16 origin-left sm:w-28 lg:w-36"
              style={{
                background:
                  "linear-gradient(90deg, rgba(211,177,108,0.9), transparent)",
              }}
            />

          </div>


        {/* =================================================
            SUPPORTING COPY
        ================================================= */}

        <motion.p
         initial={{
          opacity: 0,
          y: 20,
          filter: "blur(5px)",
        }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 2.2,
          delay: 5.4,
          ease: [0.16, 1, 0.3, 1],
        }}
          className="
            mt-3
            max-w-[570px]
            font-cormorant
            text-[1.15rem]
            font-light
            italic
            leading-relaxed
            text-white/90
            sm:mt-4
            sm:text-[19px]
          "
        >
          Tell us how you imagine your time at Paciano.
          <br />
          We&apos;re here to make it truly yours.
        </motion.p>

      </div>
      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.4,
          duration: 1,
        }}
        className="
          absolute
          bottom-7
          left-1/2
          z-[10]
          flex
          -translate-x-1/2
          flex-col
          items-center
          sm:bottom-9
        "
      >

        <span
          className="
            mb-3
            font-jost
            text-[0.55rem]
            font-light
            uppercase
            tracking-[0.3em]
          "
          style={{
            color: "rgba(248,240,228,0.65)",
          }}
        >
          Scroll
        </span>

        <motion.div
          animate={{
            height: ["0px", "42px", "0px"],
            opacity: [0.35, 1, 0.35],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.2,
            ease: "easeInOut",
          }}
          className="w-px"
          style={{
            background:
              "linear-gradient(to bottom, rgba(214,183,117,0.95), transparent)",
          }}
        />

      </motion.div>


      <CreamJoinFromAbove />

    </section>
  );
}


// function ContactInfoSection() {
//   const contacts = [
//     {
//       label: "Reservation",
//       value: "+91 98765 43210",
//       href: "tel:+919876543210",
//       icon: <Phone className="h-[18px] w-[18px]" strokeWidth={1.5} />,
//     },
//     {
//       label: "Experiences",
//       value: "experiences@paciano.in",
//       href: "mailto:experiences@paciano.in",
//       icon: <Sparkles className="h-[17px] w-[17px]" strokeWidth={1.5} />,
//     },
//     {
//       label: "General Enquiries",
//       value: "hello@paciano.in",
//       href: "mailto:hello@paciano.in",
//       icon: <Mail className="h-[18px] w-[18px]" strokeWidth={1.5} />,
//     },
//   ];

//   return (
//     <section
//       className="relative -mt-px overflow-hidden px-5 py-16 sm:px-6 sm:py-24 lg:py-32"
//       style={{ background: "#eee9dc" }}
//     >
//       <BotanicalBackdrop variant="info" />

//       <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
//         <div className="relative z-10 order-2 md:order-1 md:-translate-y-10 lg:-translate-y-14">
//           <FadeUp>
//              <div
//               className="
//                 paciano-reveal

//                 mb-[25px]

//                 flex
//                 items-center
//                 gap-[10px]
//               "
//             >
//               <svg
//                 viewBox="0 0 32 32"
//                 className="
//               h-[21px]
//               w-[21px]
//               text-[#71863D]
//             "
//                 fill="none"
//               >
//                 <path
//                   d="M16 27C16 19 18 12 23 5"
//                   stroke="currentColor"
//                   strokeWidth="1"
//                 />

//                 <path
//                   d="
//                 M17 19
//                 C10 17 7 12 8 7
//                 C14 8 18 13 18 18
//               "
//                   fill="currentColor"
//                   opacity=".8"
//                 />

//                 <path
//                   d="
//                 M19 14
//                 C20 8 25 5 29 7
//                 C27 12 24 15 19 16
//               "
//                   fill="currentColor"
//                   opacity=".5"
//                 />
//               </svg>

//               <span
//                 className="
//               font-manrope
//               text-[12px]
//               font-semibold
//               uppercase
//               tracking-[0.31em]
//               text-[#68753F]
//             "
//               >
//                 Connect With Us
//               </span>
//             </div>
//             <h2
//               className="font-cormorant

//               text-[45px]
//               leading-[0.91]
  
//               tracking-[-0.035em]
  
//               text-[#17251B]
  
//               sm:text-[65px]
//               lg:text-[72px]
//               xl:text-[67px]"
             
//             >
//               A Conversation
//               <br />
//               <span
//                 className="
//               mt-[3px]
//               block

//               italic
//               font-normal

//               text-[#78943F]
//             "
//               > Before Your Stay</span>
             
//             </h2>
//             <p className="mb-10 mt-6 max-w-md font-jost text-[0.92rem] leading-relaxed text-[#6B6B6B] sm:mb-14 sm:text-[0.95rem]">
//               Whether you&apos;re planning a quiet retreat, a family celebration, a corporate banquet, or a
//               curated experience in the Dooars wilderness — we&apos;re here to
//               craft an experience around what matters to you. Reach out and let&apos;s craft your perfect time
//               at Paciano.
//             </p>
//           </FadeUp>

//           <div className="flex flex-col gap-7 sm:gap-8">
//             {contacts.map((c, i) => (
//               <FadeUp key={c.label} delay={0.08 * i}>
//                 <motion.a
//                   href={c.href}
//                   className="group flex items-center gap-4 sm:gap-6"
//                   whileHover={{ x: 4 }}
//                   transition={{ duration: 0.25 }}
//                 >
//                   <div
//                     className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors duration-300 group-hover:bg-[#0E2D20] group-hover:text-[#C8A76A] sm:h-12 sm:w-12"
//                     style={{ border: `1px solid ${GOLD}`, color: GOLD }}
//                   >
//                     {c.icon}
//                   </div>
//                   <div className="min-w-0">
//                     <p
//                       className="mb-0.5 font-jost uppercase"
//                       style={{
//                         fontSize: "0.62rem",
//                         letterSpacing: "0.18em",
//                         color: GOLD,
//                       }}
//                     >
//                       {c.label}
//                     </p>
//                     <p className="truncate font-jost text-[0.9rem] text-[#0E2D20] transition-colors duration-300 group-hover:text-[#9a7b45] sm:text-[0.95rem]">
//                       {c.value}
//                     </p>
//                   </div>
//                 </motion.a>
//               </FadeUp>
//             ))}
//           </div>
//         </div>

//         <FadeUp delay={0.15} className="order-1 md:order-2">
//         <div className="relative mx-auto w-full max-w-[700px]">

//           {/* =========================================================
//               MAIN CINEMATIC IMAGE
//               The image itself is dynamic: convImg1
//           ========================================================== */}

//           <div className="relative h-[520px] w-full sm:h-[620px] lg:h-[700px]">

//             {/* Soft cinematic glow */}
//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 right-[5%]
//                 top-[8%]
//                 z-0
//                 h-[80%]
//                 w-[70%]
//                 rounded-full
//                 bg-[#C8A76A]/10
//                 blur-[70px]
//               "
//             />

//             {/* Main organic image */}
//             <div className="absolute right-0 top-0 z-10 h-full w-[78%]">

//               <svg
//                 viewBox="0 0 600 760"
//                 className="h-full w-full"
//                 preserveAspectRatio="none"
//               >
//                 <defs>

//                   {/* Main organic image shape */}
//                   <clipPath id="pacianoMainImageClip">
//                     <path
//                       d="
//                         M 150 0
//                         C 105 8, 70 38, 55 88
//                         C 38 145, 48 190, 72 235
//                         C 95 278, 86 330, 70 370
//                         C 51 418, 45 470, 62 530
//                         C 78 586, 105 625, 92 680
//                         C 82 720, 110 748, 158 758

//                         L 510 758

//                         C 555 758, 585 730, 585 684
//                         L 585 92

//                         C 585 38, 548 0, 500 0

//                         Z
//                       "
//                     />
//                   </clipPath>

//                   {/* Fine outline follows the main shape */}
//                   <filter
//                     id="pacianoImageShadow"
//                     x="-30%"
//                     y="-30%"
//                     width="160%"
//                     height="160%"
//                   >
//                     <feDropShadow
//                       dx="0"
//                       dy="24"
//                       stdDeviation="22"
//                       floodColor="#23352A"
//                       floodOpacity="0.18"
//                     />
//                   </filter>

//                 </defs>

//                 {/* Shadow */}
//                 <path
//                   d="
//                     M 150 0
//                     C 105 8, 70 38, 55 88
//                     C 38 145, 48 190, 72 235
//                     C 95 278, 86 330, 70 370
//                     C 51 418, 45 470, 62 530
//                     C 78 586, 105 625, 92 680
//                     C 82 720, 110 748, 158 758
//                     L 510 758
//                     C 555 758, 585 730, 585 684
//                     L 585 92
//                     C 585 38, 548 0, 500 0
//                     Z
//                   "
//                   fill="#23352A"
//                   opacity="0.14"
//                   filter="url(#pacianoImageShadow)"
//                 />

//                 {/* Dynamic image */}
//                 <image
//                   href={convImg1}
//                   x="0"
//                   y="0"
//                   width="600"
//                   height="760"
//                   preserveAspectRatio="xMidYMid slice"
//                   clipPath="url(#pacianoMainImageClip)"
//                 />

//                 {/* Cinematic darkening */}
//                 <path
//                   d="
//                     M 150 0
//                     C 105 8, 70 38, 55 88
//                     C 38 145, 48 190, 72 235
//                     C 95 278, 86 330, 70 370
//                     C 51 418, 45 470, 62 530
//                     C 78 586, 105 625, 92 680
//                     C 82 720, 110 748, 158 758
//                     L 510 758
//                     C 555 758, 585 730, 585 684
//                     L 585 92
//                     C 585 38, 548 0, 500 0
//                     Z
//                   "
//                   fill="url(#pacianoImageOverlay)"
//                   clipPath="url(#pacianoMainImageClip)"
//                 />

//                 <defs>
//                   <linearGradient
//                     id="pacianoImageOverlay"
//                     x1="0"
//                     y1="0"
//                     x2="0"
//                     y2="1"
//                   >
//                     <stop
//                       offset="0%"
//                       stopColor="#FFFFFF"
//                       stopOpacity="0.03"
//                     />
//                     <stop
//                       offset="60%"
//                       stopColor="#0E2D20"
//                       stopOpacity="0.04"
//                     />
//                     <stop
//                       offset="100%"
//                       stopColor="#0E2D20"
//                       stopOpacity="0.30"
//                     />
//                   </linearGradient>
//                 </defs>

//                 {/* Gold contour */}
//                 <path
//                   d="
//                     M 150 4
//                     C 105 12, 70 42, 55 92
//                     C 38 149, 48 194, 72 239
//                     C 95 282, 86 334, 70 374
//                     C 51 422, 45 474, 62 534
//                     C 78 590, 105 629, 92 684
//                     C 82 724, 110 752, 158 762
//                     L 510 762
//                     C 555 762, 589 734, 589 684
//                     L 589 92
//                     C 589 38, 552 4, 500 4
//                     Z
//                   "
//                   fill="none"
//                   stroke="#C8A76A"
//                   strokeWidth="1.2"
//                   opacity="0.75"
//                 />

//               </svg>


//               {/* =====================================================
//                   VERTICAL EDITORIAL TEXT
//               ====================================================== */}

//               <div
//                 className="
//                   absolute
//                   right-[-38px]
//                   top-[25%]
//                   z-30
//                   hidden
//                   items-center
//                   gap-3
//                   lg:flex
//                 "
//               >
//                 <div className="h-16 w-px bg-[#C8A76A]/60" />

//                 <span
//                   className="
//                     font-jost
//                     text-[8px]
//                     uppercase
//                     tracking-[0.32em]
//                     text-[#68753F]
//                   "
//                   style={{
//                     writingMode: "vertical-rl",
//                   }}
//                 >
//                   Nature · Stay · Stories
//                 </span>
//               </div>

//             </div>


//             {/* =========================================================
//                 SECONDARY IMAGE
//                 Dynamic: convOverlap
//             ========================================================== */}

//             <motion.div
//               className="
//                 absolute
//                 bottom-[8%]
//                 left-[2%]
//                 z-30
//                 w-[42%]
//                 sm:left-[4%]
//                 sm:w-[39%]
//               "
//               initial={{
//                 opacity: 0,
//                 x: -25,
//                 y: 20,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 x: 0,
//                 y: 0,
//               }}
//               viewport={{
//                 once: true,
//                 amount: 0.3,
//               }}
//               transition={{
//                 duration: 0.9,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//             >

//               <div className="relative aspect-[0.82] w-full">

//                 {/* Cream frame */}
//                 <div
//                   className="
//                     absolute
//                     inset-[-7px]
//                     rounded-[24px]
//                     bg-[#eee9dc]
//                     shadow-[0_22px_50px_rgba(28,43,31,0.20)]
//                     sm:inset-[-9px]
//                     sm:rounded-[28px]
//                   "
//                 />

//                 {/* Organic secondary image */}
//                 <svg
//                   viewBox="0 0 360 440"
//                   className="
//                     relative
//                     z-10
//                     h-full
//                     w-full
//                   "
//                   preserveAspectRatio="none"
//                 >

//                   <defs>

//                     <clipPath id="pacianoOverlapClip">
//                       <path
//                         d="
//                           M 72 0
//                           C 35 4, 10 25, 8 65
//                           L 8 360
//                           C 8 410, 35 435, 78 438

//                           L 292 438

//                           C 330 438, 352 415, 352 375
//                           L 352 65

//                           C 352 25, 328 0, 288 0

//                           Z
//                         "
//                       />
//                     </clipPath>

//                     <linearGradient
//                       id="pacianoOverlapGradient"
//                       x1="0"
//                       y1="0"
//                       x2="0"
//                       y2="1"
//                     >
//                       <stop
//                         offset="0%"
//                         stopColor="#FFFFFF"
//                         stopOpacity="0"
//                       />
//                       <stop
//                         offset="100%"
//                         stopColor="#0E2D20"
//                         stopOpacity="0.22"
//                       />
//                     </linearGradient>

//                   </defs>

//                   <image
//                     href={convOverlap}
//                     x="0"
//                     y="0"
//                     width="360"
//                     height="440"
//                     preserveAspectRatio="xMidYMid slice"
//                     clipPath="url(#pacianoOverlapClip)"
//                   />

//                   <path
//                     d="
//                       M 72 0
//                       C 35 4, 10 25, 8 65
//                       L 8 360
//                       C 8 410, 35 435, 78 438
//                       L 292 438
//                       C 330 438, 352 415, 352 375
//                       L 352 65
//                       C 352 25, 328 0, 288 0
//                       Z
//                     "
//                     fill="url(#pacianoOverlapGradient)"
//                     clipPath="url(#pacianoOverlapClip)"
//                   />

//                   {/* Gold contour around small image */}
//                   <path
//                     d="
//                       M 72 3
//                       C 35 7, 13 28, 11 65
//                       L 11 358
//                       C 11 406, 37 432, 78 435
//                       L 292 435
//                       C 327 435, 349 412, 349 375
//                       L 349 65
//                       C 349 28, 325 3, 288 3
//                       Z
//                     "
//                     fill="none"
//                     stroke="#C8A76A"
//                     strokeWidth="1"
//                     opacity="0.7"
//                   />

//                 </svg>

//               </div>

//             </motion.div>


//             {/* =========================================================
//                 GOLD CIRCLE + VERTICAL LINE
//             ========================================================== */}

//             <div
//               className="
//                 absolute
//                 bottom-[1%]
//                 right-[15%]
//                 z-20
//                 h-[78px]
//                 w-[78px]
//                 rounded-full
//                 border
//                 border-[#C8A76A]/60
//                 sm:h-[88px]
//                 sm:w-[88px]
//               "
//             />

//             <div
//               className="
//                 absolute
//                 bottom-[calc(1%+38px)]
//                 right-[calc(15%+38px)]
//                 z-40
//                 h-[7px]
//                 w-[7px]
//                 rounded-full
//                 bg-[#C8A76A]
//               "
//             />

//             <div
//               className="
//                 absolute
//                 bottom-[-2%]
//                 right-[calc(15%+39px)]
//                 z-20
//                 h-[48px]
//                 w-px
//                 bg-[#C8A76A]/55
//               "
//             />


//             {/* =========================================================
//                 BOTANICAL ACCENT
//                 This is subtle so it doesn't compete with the images.
//             ========================================================== */}

//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 bottom-[2%]
//                 left-[30%]
//                 z-40
//                 hidden
//                 md:block
//               "
//             >
//               <svg
//                 viewBox="0 0 120 120"
//                 className="h-[105px] w-[105px] text-[#71863D]/70"
//                 fill="none"
//               >
//                 <path
//                   d="M45 112C47 80 58 48 84 15"
//                   stroke="currentColor"
//                   strokeWidth="1"
//                 />

//                 <path
//                   d="
//                     M50 78
//                     C32 73 22 62 24 48
//                     C40 49 51 59 53 72
//                   "
//                   fill="currentColor"
//                   opacity=".55"
//                 />

//                 <path
//                   d="
//                     M61 58
//                     C63 41 76 29 91 32
//                     C87 47 77 57 62 62
//                   "
//                   fill="currentColor"
//                   opacity=".38"
//                 />

//                 <path
//                   d="
//                     M43 92
//                     C29 88 18 79 16 67
//                     C30 68 41 75 46 87
//                   "
//                   fill="currentColor"
//                   opacity=".3"
//                 />
//               </svg>
//             </div>

//           </div>
//         </div>
//       </FadeUp>
//       </div>
//     </section>
//   );
// }

function ContactInfoSection() {
  const contacts = [
    {
      label: "Reservation",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
      icon: <Phone className="h-[18px] w-[18px]" strokeWidth={1.4} />,
      // note: "STAYS, AVAILABILITY & BOOKINGS",
    },
    {
      label: "Experiences",
      value: "experiences@paciano.in",
      href: "mailto:experiences@paciano.in",
      icon: <Sparkles className="h-[17px] w-[17px]" strokeWidth={1.4} />,
      // note: "CURATED EXPERIENCES & ACTIVITIES",
    },
    {
      label: "General Enquiries",
      value: "hello@paciano.in",
      href: "mailto:hello@paciano.in",
      icon: <Mail className="h-[18px] w-[18px]" strokeWidth={1.4} />,
      // note: "PARTNERSHIPS, MEDIA & OTHER QUERIES",
    },
  ];

  const cinematicImageStyle = `
    @keyframes pacianoCinematicDrift {
      0% {
        transform: scale(1.06) translate3d(0px, 0px, 0);
      }

      25% {
        transform: scale(1.075) translate3d(-8px, -3px, 0);
      }

      50% {
        transform: scale(1.09) translate3d(-16px, -6px, 0);
      }

      75% {
        transform: scale(1.075) translate3d(-8px, -3px, 0);
      }

      100% {
        transform: scale(1.06) translate3d(0px, 0px, 0);
      }
    }
`;

  const overlapRef = useRef<HTMLDivElement>(null);

  const overlapInView = useInView(overlapRef, {
    once: true,
    amount: 0.18,
  });


  const mobileStoryRef = useRef<HTMLDivElement>(null);

  const mobileStoryInView = useInView(mobileStoryRef, {
    once: true,
    amount: 0.18,
  });

  const mobileStoryContainer = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.15,
        staggerChildren: 0.55,
      },
    },
  };

  const mobileStoryItem = {
    hidden: {
      opacity: 0,
      y: 35,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 1.45,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const mobileImageItem = {
    hidden: {
      opacity: 0,
      y: 45,
      scale: 0.975,
    },

    visible: {
      opacity: 1,
      y: 0,
      scale: 1,

      transition: {
        duration: 1.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const mobileSmallImageItem = {
    hidden: {
      opacity: 0,
      x: -70,
    },

    visible: {
      opacity: 1,
      x: 0,

      transition: {
        duration: 1.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const mobileOrbitItem = {
    hidden: {
      opacity: 0,
      scale: 0.7,
    },

    visible: {
      opacity: 1,
      scale: 1,

      transition: {
        duration: 1.25,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const contactStoryVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.15,
        staggerChildren: 0.55,
      },
    },
  };
  
  const contactItemVariants = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.25,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };
  
  const contactTextVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.45,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#eee9dc]
        text-[#10261b]
      "
    >
      <style>{cinematicImageStyle}</style>
      {/* =========================================================
          BACKGROUND BOTANICAL DETAILS
      ========================================================== */}
     
      {/* subtle warm light */}
      {/* <div
        className="
          pointer-events-none
          absolute
          left-[-15%]
          top-[-20%]
          z-0
          h-[650px]
          w-[650px]
          rounded-full
          bg-[#d8c9a5]/20
          blur-[120px]
        "
      /> */}

      {/* =========================================================
          DESKTOP / TABLET CINEMATIC COMPOSITION
      ========================================================== */}

      <div
        className="
          relative
          z-10
          hidden
          min-h-[760px]
          lg:block
          overflow-hidden
        "
      >

      {/* =========================================================
          EXTREME RIGHT — ATMOSPHERIC LANDSCAPE
      ========================================================= */}

      <motion.div
        className="
          pointer-events-none
          absolute
          right-[-4%]
          top-[6%]
          z-0
          hidden
          h-[88%]
          w-[38%]
          overflow-hidden
          lg:block
        "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 2,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <motion.img
          src={convImg1}
          alt=""
          className="
            h-full
            w-full
            object-cover
            object-center
          "
          animate={{
            scale: [1.04, 1.08, 1.04],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        {/* Heavy parchment fade — makes it feel atmospheric */}
        <div
          className="
            absolute
            inset-0
          "
          style={{
            background: `
              linear-gradient(
                90deg,
                #eee9dc 0%,
                rgba(238,233,220,0.88) 18%,
                rgba(238,233,220,0.48) 48%,
                rgba(238,233,220,0.18) 78%,
                rgba(238,233,220,0.04) 100%
              )
            `,
          }}
        />

        {/* Top fade */}
        <div
          className="absolute inset-x-0 top-0 h-[28%]"
          style={{
            background:
              "linear-gradient(to bottom, #eee9dc, transparent)",
          }}
        />

        {/* Bottom fade */}
        <div
          className="absolute inset-x-0 bottom-0 h-[32%]"
          style={{
            background:
              "linear-gradient(to top, #eee9dc, transparent)",
          }}
        />
      </motion.div>

      {/* =====================================================
          FULL-BLEED MAIN IMAGE
          Dynamic image = convImg1
      ====================================================== */}
        <FadeUp delay={0.15} className="order-1 md:order-2">
          <div className="relative mx-auto w-full max-w-[610px]">
            {/* =====================================================
                PREMIUM IMAGE COMPOSITION
            ====================================================== */}

            <div className="relative h-[500px] sm:h-[580px] lg:h-[640px]">

              {/* subtle architectural gold line */}
              <div
                className="
                  absolute
                  right-[2%]
                  top-[4%]
                  h-[86%]
                  w-[72%]
                  rounded-[45%_8%_8%_12%]
                  border
                  border-[#C8A76A]/35
                "
              />

              {/* ===================================================
                  MAIN IMAGE
              =================================================== */}

              <motion.div
                className="
                  absolute
                  right-[3%]
                  top-0
                  z-15
                  h-[88%]
                  w-[78%]
                  overflow-hidden
                  rounded-[44%_9%_12%_30%]
                  bg-[#DED7C8]
                  shadow-[0_35px_80px_rgba(35,42,30,0.22)]
                "
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                animate={{
                  opacity: overlapInView ? 1 : 0,
                  x: overlapInView ? 0 : -90,
                }}                
                transition={{
                  duration: 1.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <img
                  src={convImg1}
                  alt="Paciano landscape"
                  className="
                    h-full
                    w-full
                    object-cover
                    object-center
                    will-change-transform
                  "
                  style={{
                    animation: "pacianoCinematicDrift 18s ease-in-out infinite",
                  }}
                />

                {/* cinematic grading */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#102719]/25
                    via-transparent
                    to-[#FFF8E9]/5
                  "
                />

                {/* soft edge highlight */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-[44%_9%_12%_30%]
                    ring-1
                    ring-inset
                    ring-[#E7C98E]/35
                  "
                />
              </motion.div>          

              {/* =====================================================
                  PACIANO — BOTTOM BOTANICAL DETAIL
                  Interlinks naturally with the large image
              ===================================================== */}

              <motion.img
                src={contactBottomLeaf}
                alt=""
                aria-hidden="true"                
                initial={{
                  opacity: 0,
                  clipPath: "inset(0 0 100% 0)",
                }}
                animate={{
                  opacity: 0.72,
                  clipPath: "inset(0 0 0% 0)",
                }}
                transition={{
                  duration: 2.6,
                  delay: 1.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                
                className="
                  pointer-events-none
                  absolute
                  z-[10]
                  max-w-none
                  select-none

                  /* Large desktop */
                  w-[390px]
                  right-[20%]
                  bottom-[8%]

                  /* Tablet */
                  md:w-[330px]
                  md:right-[-22%]
                  md:bottom-[-5%]

                  /* Mobile */
                  max-md:w-[240px]
                  max-md:right-[-2%]
                  max-md:bottom-[5%]
                "
              />


              {/* ===================================================
                  SECONDARY PHOTOGRAPH
              =================================================== */}
          
            <motion.div
              ref={overlapRef}
              className="
                absolute
                bottom-[7%]
                left-[3%]
                z-30
                w-[38%]
                max-w-[210px]
                will-change-transform
              "
              initial={{
                opacity: 0,
                x: -70,
                y: 35,
                scale: 0.94,
                filter: "blur(5px)",
              }}
              animate={
                overlapInView
                  ? {
                      opacity: 1,
                      x: 0,
                      y: 0,
                      scale: 1,
                      filter: "blur(0px)",
                    }
                  : {
                      opacity: 0,
                      x: -70,
                      y: 35,
                      scale: 0.94,
                      filter: "blur(5px)",
                    }
              }
              transition={{
                duration: 1.7,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Subtle continuous movement after entrance */}
              <motion.div
                animate={
                  overlapInView
                    ? {
                        y: [0, -5, 0],
                        rotate: [0, 0.35, 0],
                      }
                    : {}
                }
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
              >
                {/* Luxury photographic mount */}
                <div
                  className="
                    group
                    relative
                    rounded-[24px]
                    bg-[#F4EFE4]
                    p-[8px]
                    shadow-[0_25px_55px_rgba(40,34,25,0.24)]
                  "
                >
                  {/* Gold perimeter */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -inset-[5px]
                      rounded-[28px]
                      border
                      border-[#C8A76A]/50
                    "
                  />

                  {/* Photograph */}
                  <div
                    className="
                      relative
                      aspect-[4/5]
                      overflow-hidden
                      rounded-[18px]
                    "
                  >
                    <motion.img
                      src={convOverlap}
                      alt="Nature surrounding Paciano"
                      className="
                        h-full
                        w-full
                        object-cover
                        object-center
                      "
                      animate={
                        overlapInView
                          ? {
                              scale: [1.02, 1.055, 1.02],
                            }
                          : { scale: 1.02 }
                      }
                      transition={{
                        duration: 18,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                      }}
                    />

                    {/* Cinematic image grading */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#13271C]/20
                        via-transparent
                        to-[#FFF8E9]/10
                      "
                    />

                    {/* Soft inner highlight */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        rounded-[18px]
                        ring-1
                        ring-inset
                        ring-white/20
                      "
                    />
                  </div>
                </div>

                {/* Caption */}
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={
                    overlapInView
                      ? {
                          opacity: 1,
                          y: 0,
                        }
                      : {
                          opacity: 0,
                          y: 5,
                        }
                  }
                  transition={{
                    duration: 1.2,
                    delay: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="
                    absolute
                    -bottom-7
                    left-2
                    font-manrope
                    text-[7px]
                    uppercase
                    tracking-[0.3em]
                    text-[#68753F]
                  "
                >
                  A moment in nature
                </motion.div>
              </motion.div>
            </motion.div>

              {/* ===================================================
                  VERTICAL EDITORIAL TEXT
              =================================================== */}

              <div
                className="
                  absolute
                  right-[-4%]
                  top-[31%]
                  z-30
                  hidden
                  items-center
                  gap-3
                  lg:flex
                "
              >
                <span
                  className="
                    h-14
                    w-px
                    bg-gradient-to-b
                    from-transparent
                    via-[#C8A76A]
                    to-transparent
                  "
                />

                <span
                  className="
                    [writing-mode:vertical-rl]
                    rotate-180
                    font-manrope
                    text-[7px]
                    uppercase
                    tracking-[0.35em]
                    text-[#68753F]
                  "
                >
                  Nature · Stay · Stories
                </span>
              </div>           
             
            </div>
          </div>
        </FadeUp>

        {/* =====================================================
            ORGANIC CREAM PANEL
            THIS creates the large curved boundary from reference
        ====================================================== */}

        <svg
          className="
            pointer-events-none
            absolute
            inset-0
            z-20
            h-full
            w-full
          "
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
        >
          <defs>
            <filter
              id="contactCreamShadow"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
            >
              <feDropShadow
                dx="12"
                dy="10"
                stdDeviation="18"
                floodColor="#66583f"
                floodOpacity="0.12"
              />
            </filter>
          </defs>

          {/* MAIN CREAM SHAPE */}

          <path
            d="
              M0 0
              H700

              C660 50 622 92 615 150
              C607 210 640 258 628 315
              C617 370 570 408 555 458
              C538 515 561 565 602 608
              C638 646 661 686 644 800

              H0
              Z
            "
            fill="#eee9dc"
            filter="url(#contactCreamShadow)"
          />

          {/* fine gold contour following curve */}

          <path
            d="
              M700 0
              C660 50 622 92 615 150
              C607 210 640 258 628 315
              C617 370 570 408 555 458
              C538 515 561 565 602 608
              C638 646 661 686 644 800
            "
            fill="none"
            stroke="#c8a76a"
            strokeWidth="1"
            opacity="0.65"
          />

          {/* second extremely subtle contour */}

          <path
            d="
              M680 0
              C642 56 607 98 602 153
              C595 210 626 259 614 318
              C603 375 557 414 542 462
            "
            fill="none"
            stroke="#c8a76a"
            strokeWidth="0.7"
            opacity="0.25"
          />
        </svg>

        {/* =====================================================
            LEFT CONTENT
        ====================================================== */}

        <div
          className="
            absolute
            left-[7%]
            top-1/2
            z-40
            w-[39%]
            max-w-[570px]
            -translate-y-1/2
          "
        >
          <div>
            {/* eyebrow */}

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.35,
              }}
              transition={{
                duration: 1.1,
                delay: 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mb-5
                flex
                items-center
                gap-3
              "
            >
            {/* <div
              className="
                mb-5
                flex
                items-center
                gap-3
              "
            > */}
              <svg
                viewBox="0 0 32 32"
                className="
                  h-[20px]
                  w-[20px]
                  text-[#71863d]
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
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.34em]
                  text-[#68753f]
                "
              >
                Connect With Us
              </span>

              <span
                className="
                  h-px
                  w-10
                  bg-[#c8a76a]/70
                "
              />
            </motion.div>

            {/* heading */}

            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.35,
              }}
              transition={{
                duration: 1.25,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                font-cormorant
                text-[62px]
                font-normal
                leading-[0.88]
                tracking-[-0.04em]
                text-[#10261b]
                xl:text-[72px]
              "
            >
              A Conversation

              <br />

              <span
                className="
                  italic
                  text-[#78943f]
                "
              >
                Before Your Stay
              </span>
            </motion.h2>

            {/* copy */}

            <motion.p
  initial={{
    opacity: 0,
    y: 28,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{
    once: true,
    amount: 0.25,
  }}
  transition={{
    duration: 1.3,
    delay: 0.18,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="
    mt-7
    max-w-[470px]
    font-manrope
    text-[14px]
    leading-[1.75]
    text-[#657067]
  "
>
             Whether you&apos;re planning a quiet retreat, a family celebration, a corporate banquet, or a
             curated experience — we&apos;re here to
               craft an experience around what matters to you. 
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{
                once: true,
                amount: 0.35,
              }}
              transition={{
                duration: 1.6,
                delay: 0.15,
                ease: "easeOut",
              }}
              className="
                mt-3
                max-w-[430px]
                font-manrope
                text-[14px]
                leading-[1.75]
                text-[#66645c]
              "
            >
                          
              Reach out and let&apos;s create something meaningful together,
              surrounded by the forests, rivers and stories of Paciano.
              </motion.p>
          </div>
          {/* =================================================
              CONTACT DETAILS
          ================================================== */}
        <div className="mt-10 space-y-6">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              initial={{
                opacity: 0,
                x: -35,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.35,
              }}
              transition={{
                duration: 1.4,
                delay: i * 1.2,
                ease: "easeOut",
              }}
              className="group flex items-center gap-5"
            >
              <div
                className="
                  flex h-[54px] w-[54px] shrink-0
                  items-center justify-center
                  rounded-full
                  border border-[#c8a76a]/80
                  bg-[#eee9dc]
                  text-[#a47c35]
                  transition-all duration-300
                  group-hover:bg-[#0e2d20]
                  group-hover:text-[#c8a76a]
                "
              >
                {c.icon}
              </div>

              <div>
                <p
                  className="
                    font-jost text-[11px]
                    uppercase tracking-[0.25em]
                    text-[#718043]
                  "
                >
                  {c.label}
                </p>

                <p
                  className="
                    mt-1
                    font-cormorant
                    text-[21px]
                    leading-none
                    text-[#173025]
                  "
                >
                  {c.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
                  

          {/* =================================================
              EDITORIAL SIGNATURE
          ================================================== */}

          {/* <FadeUp delay={0.35}>
            <div
              className="
                mt-9
                flex
                items-start
                gap-4
              "
            >
              <div
                className="
                  mt-1
                  h-[55px]
                  w-px
                  bg-[#c8a76a]
                "
              />

              <p
                className="
                  font-cormorant
                  text-[27px]
                  italic
                  leading-[0.95]
                  text-[#b28b4c]
                "
              >
                Same Rivers.
                <br />
                Different Stories.
              </p>
            </div>
          </FadeUp> */}
        </div>

        {/* =====================================================
            SECONDARY IMAGE
            Dynamic image = convOverlap
        ====================================================== */}

        <motion.div
          className="
            absolute
            left-[47%]
            top-[48%]
            z-50
            w-[220px]
            -translate-x-1/2
            -translate-y-1/2
            xl:w-[250px]
          "
          initial={{
            opacity: 0,
            x: -35,
            y: 20,
          }}         
          
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* gold halo */}

          <div
            className="
              absolute
              -inset-3
              rounded-[30px]
              border
              border-[#c8a76a]/60
            "
          />

          {/* cream frame */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[26px]
              border-[7px]
              border-[#eee9dc]
              bg-[#eee9dc]
              shadow-[0_25px_55px_rgba(25,42,32,0.22)]
            "
          >
            <img
              src={convOverlap}
              alt="Nature at Paciano"
              className="
                aspect-[0.82]
                w-full
                object-cover
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-[#0e2d20]/20
                to-transparent
              "
            />
          </div>
        </motion.div>      

        {/* =====================================================
            BOTTOM ORGANIC TRANSITION
        ====================================================== */}

        <svg
          className="
            absolute
            bottom-[-1px]
            left-0
            z-[60]
            h-[115px]
            w-full
          "
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
        >
          <path
            d="
              M0 75
              C150 115 250 125 390 103
              C535 80 615 42 760 62
              C900 82 1000 122 1150 101
              C1280 82 1360 55 1440 74
              L1440 140
              L0 140
              Z
            "
            fill="#eee9dc"
          />

          <path
            d="
              M0 75
              C150 115 250 125 390 103
              C535 80 615 42 760 62
              C900 82 1000 122 1150 101
              C1280 82 1360 55 1440 74
            "
            fill="none"
            stroke="#c8a76a"
            strokeWidth="0.8"
            opacity="0.35"
          />
        </svg>
      </div>

      {/* =========================================================
        MOBILE / TABLET ONLY
        Desktop is completely untouched
      ========================================================= */}

        <div
        className="
        relative
        z-10
        lg:hidden
        px-5
        pb-20
        pt-14
        sm:px-8
        sm:pb-24
        sm:pt-18
        md:px-10
        md:pb-28
        md:pt-20
        "
        >
        <div className="mx-auto w-full max-w-[680px]">

        {/* =====================================================
          01 — EYEBROW
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        className="
          flex
          items-center
          gap-3
        "
        >
        <svg
          viewBox="0 0 32 32"
          className="h-5 w-5 text-[#71863d]"
          fill="none"
        >
          <path
            d="M16 27C16 19 18 12 23 5"
            stroke="currentColor"
            strokeWidth="1"
          />

          <path
            d="M17 19C10 17 7 12 8 7C14 8 18 13 18 18"
            fill="currentColor"
            opacity=".8"
          />

          <path
            d="M19 14C20 8 25 5 29 7C27 12 24 15 19 16"
            fill="currentColor"
            opacity=".5"
          />
        </svg>

        <span
          className="
            font-manrope
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.3em]
            text-[#68753f]
            sm:text-[10px]
          "
        >
          Connect With Us
        </span>

        <span className="h-px w-8 bg-[#c8a76a]/70" />
        </motion.div>


        {/* =====================================================
          02 — HEADING
        ===================================================== */}

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{
            duration: 1,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        className="
          mt-5
          font-cormorant
          text-[45px]
          font-normal
          leading-[0.91]
          tracking-[-0.04em]
          text-[#10261b]
          min-[390px]:text-[48px]
          sm:text-[57px]
          md:text-[64px]
        "
        >
        A Conversation
        <br />

        <span className="italic text-[#78943f]">
          Before Your Stay
        </span>
        </motion.h2>



        {/* =====================================================
              03 — INTRO COPY
          ===================================================== */}

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-7
              max-w-[620px]
              font-manrope
              text-[14px]
              leading-[1.75]
              text-[#657067]   
              sm:mt-8
              sm:text-[14px]
            "
          >      
            Whether you&apos;re planning a quiet retreat, a family celebration, a corporate banquet, or a
            curated experience in the Dooars wilderness — we&apos;re here to
            craft an experience around what matters to you. Reach out and let&apos;s craft your perfect time
            at Paciano.
          </motion.p>



          {/* =====================================================
              04 — IMAGE STORY
              MOBILE / TABLET
              Same organic image geometry as desktop
          ===================================================== */}
          {/* =====================================================
              GOLD ORGANIC SVG CONTOUR
              Same visual language as desktop
          ===================================================== */}

          <svg
            className="
              pointer-events-none
              absolute
              inset-0
              z-0
              h-full
              w-full
              overflow-visible
            "
            viewBox="0 0 700 800"
            preserveAspectRatio="none"
            fill="none"
          >
            {/* main gold contour */}

            <path
            d="
              M700 0
              C660 50 622 92 615 150
              C607 210 640 258 628 315
              C617 370 570 408 555 458
              C538 515 561 565 602 608
              C638 646 661 686 644 800
            "
            fill="none"
            stroke="#c8a76a"
            strokeWidth="1"
            opacity="0.65"
          />

          <path
            d="
              M680 0
              C642 56 607 98 602 153
              C595 210 626 259 614 318
              C603 375 557 414 542 462
            "
            fill="none"
            stroke="#c8a76a"
            strokeWidth="0.7"
            opacity="0.25"
          />
          </svg>

          <div className="relative mx-auto w-full max-w-[610px]">
              <div className="relative h-[500px] sm:h-[580px] lg:h-[640px]">

                {/* subtle architectural gold line */}
                <div
                  className="
                    absolute
                    right-[2%]
                    top-[4%]
                    h-[86%]
                    w-[72%]
                    rounded-[45%_8%_8%_12%]
                    border
                    border-[#C8A76A]/35
                  "
                />
                <motion.div
                  className="
                    absolute
                    right-[3%]
                    top-0
                    z-15
                    h-[88%]
                    w-[78%]
                    overflow-hidden
                    rounded-[44%_9%_12%_30%]
                    bg-[#DED7C8]
                    shadow-[0_35px_80px_rgba(35,42,30,0.22)]
                  "
                  initial={{
                    opacity: 0,
                    y: 18,
                  }}
                  animate={{
                    opacity: overlapInView ? 1 : 0,
                    x: overlapInView ? 0 : -90,
                  }}                
                  transition={{
                    duration: 1.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                ></motion.div>
          </div>
          </div>

    



            {/* =====================================================
                05 — CONTACT DETAILS
                They come AFTER the image story.
            ===================================================== */}

            <div
              className="
                mt-2
                space-y-6
                sm:mt-4
                sm:space-y-7
                md:mt-6
              "
            >
              {contacts.map((c, i) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.35,
                  }}
                  transition={{
                    duration: 0.75,
                    delay: i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    group
                    flex
                    items-center
                    gap-4
                    sm:gap-5
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#c8a76a]
                      bg-[#eee9dc]
                      text-[#a47c35]
                      transition-all
                      duration-300
                      group-hover:bg-[#0e2d20]
                      group-hover:text-[#c8a76a]
                      sm:h-12
                      sm:w-12
                    "
                  >
                    {c.icon}
                  </div>

                  <div className="min-w-0">
                    <p
                      className="
                        font-jost
                        text-[8px]
                        uppercase
                        tracking-[0.22em]
                        text-[#b08b4b]
                        sm:text-[9px]
                      "
                    >
                      {c.label}
                    </p>

                    <p
                      className="
                        mt-1
                        break-all
                        font-cormorant
                        text-[19px]
                        leading-[1.05]
                        text-[#173025]
                        sm:text-[21px]
                      "
                    >
                      {c.value}
                    </p>

                    {/* <p
                      className="
                        mt-1.5
                        font-jost
                        text-[7px]
                        uppercase
                        tracking-[0.16em]
                        text-[#77736a]
                        sm:text-[8px]
                      "
                    >
                      {c.note}
                    </p> */}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
</section>
);
}

function ContactFormSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    dates: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      className="relative overflow-hidden px-5 pb-0 pt-16 sm:px-6 sm:pt-24 lg:pt-32"
      style={{ background: PARCHMENT }}
    >
      <BotanicalBackdrop variant="form" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <FadeUp className="mb-12 text-center sm:mb-16">
        <div
          className="
            paciano-reveal
            relative
            mt-[-128px]
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
           Send Us a Message
          </span>

          <h3
            className="
              mt-[10px]
              font-cormorant
              text-[43px]
              leading-[.95]
              tracking-[-.025em]
              text-[#17251B]
              sm:text-[52px]
              lg:text-[60px]
            "
          >
            Plan Your Time,
            <br />
            <span className="italic text-[#789541]">At Paciano.</span>
          </h3>
        </div>          
          <p className="mx-auto mt-3 max-w-lg  font-manrope text-[0.88rem] leading-relaxed  text-[#66645c] sm:text-[0.9rem]">
            Share a little about what you&apos;re looking for, and we&apos;ll be
            in touch to arrange something truly special.
          </p>
        </FadeUp>

        <FadeUp delay={0.12}>
          {submitted ? (
            <p
              className="text-center font-lora text-lg italic text-[#0E2D20]"
              role="status"
            >
              Thank you — we&apos;ll be in touch shortly.
            </p>
          ) : (
            <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-8 sm:gap-x-10 sm:gap-y-10 lg:grid-cols-3 lg:grid-rows-[auto_auto]">
                <FormField
                  id="contact-name"
                  label="Your Name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  className="lg:row-start-1"
                />

                <FormField
                  id="contact-email"
                  label="Email Address"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  className="lg:row-start-1"
                />

                <FormField
                  id="contact-phone"
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+91 00000 00000"
                  value={form.phone}
                  onChange={handleChange}
                  className="lg:row-start-1"
                />

                <FormField
                  id="contact-dates"
                  label="Preferred Dates"
                  name="dates"
                  placeholder="e.g. Nov 12–16, 2026"
                  value={form.dates}
                  onChange={handleChange}
                  className="lg:row-start-2 lg:self-start"
                />

                <FormField
                  id="contact-message"
                  label="How may we help?"
                  name="message"
                  as="textarea"
                  required
                  placeholder="Tell us about your ideal stay…"
                  value={form.message}
                  onChange={handleChange}
                  className="lg:col-span-2 lg:col-start-2 lg:row-start-2 lg:self-start"
                  inputClassName="
                  luxury-input
                  min-h-[100px]
                  resize-y
                  sm:min-h-[120px]
                  lg:!h-[46px]
                  lg:!min-h-0
                  lg:!max-h-[46px]
                  lg:!resize-none
                  lg:!overflow-hidden
                "
                              />
                
             
              </div>

              <div className="flex justify-center pt-2 sm:pt-4">
                <motion.button
                  type="submit"
                  className="flex w-full max-w-md items-center justify-center gap-3 px-6 py-3.5 font-jost text-[0.85rem] font-light tracking-wide text-white sm:w-auto sm:gap-4 sm:px-8 sm:py-4 sm:text-[0.9rem]"
                  style={{ background: FOREST, borderRadius: "999px" }}
                  whileHover={{ scale: 1.02, backgroundColor: "#1a4332" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Begin the Conversation
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-base sm:h-9 sm:w-9"
                    style={{ background: GOLD, color: FOREST }}
                  >
                    →
                  </span>
                </motion.button>
              </div>
            </form>
          )}
        </FadeUp>
      </div>

      <CreamToLocationBlend />
    </section>
  );
}

function ContactLocationSection() {
  const ref = useRef(null);

  const info = [
    {
      icon: <MapPin className="h-[22px] w-[22px]" strokeWidth={1.5} />,
      label: "Location",
      value: "Dooars, West Bengal",
    },
    {
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden
        >
          <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      label: "By Road",
      value: "Connected from Siliguri & Alipurduar",
    },
    {
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      label: "Nearest Airport",
      value: "Bagdogra (IXB)",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#09160F] pb-6 sm:pb-8"
      style={{ marginTop: "clamp(-96px, -11vw, -72px)" }}
    >
      <div className="relative w-full">
        <img
          src={convImg2}
          alt="Valley view at Paciano, Dooars"
          className="block h-auto w-full max-w-none object-contain"
          width={2400}
          height={800}
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-[11] h-[clamp(88px,14vw,160px)]"
          style={{
            background: `linear-gradient(to bottom, ${PARCHMENT} 0%, rgba(248,244,238,0.88) 22%, rgba(248,244,238,0.45) 50%, rgba(248,244,238,0.12) 75%, transparent 100%)`,
          }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(14,45,32,0.78) 0%, rgba(14,45,32,0.35) 42%, transparent 72%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[38%]"
          style={{
            background:
              "linear-gradient(to top, rgba(9,22,15,0.65) 0%, transparent 100%)",
          }}
        />

        <div className="absolute inset-0 z-10 flex flex-col justify-between px-5 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <div className="mx-auto w-full max-w-6xl">
            <FadeUp>
              <p
                className="mb-4 font-jost uppercase tracking-[0.22em]"
                style={{ color: GOLD, fontSize: "0.65rem" }}
              >
                Our Location
              </p>
              <h2
                className="font-cormorant font-light text-white"
                style={{ fontSize: "clamp(2.1rem, 6vw, 4.5rem)" }}
              >
                Find Your Way Here
              </h2>
              <p className="mt-2 font-cormorant text-lg italic font-light text-white/65 sm:text-2xl">
                Dooars, West Bengal, India
              </p>
              <p className="mb-8 mt-5 max-w-md font-jost text-[0.88rem] leading-relaxed text-white/70 sm:mb-10 sm:text-[0.9rem]">
                Tucked within the emerald foothills of the Eastern Himalayas,
                Paciano is accessible from Siliguri and Alipurduar — a journey
                as scenic as the destination itself.
              </p>
              <motion.a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-b pb-1 font-jost text-[0.8rem] uppercase tracking-[0.12em] text-white sm:gap-3 sm:text-[0.85rem]"
                style={{ borderColor: "rgba(200,167,106,0.6)" }}
                whileHover={{ gap: 14 }}
              >
                Open in Maps
                <span style={{ color: GOLD }}>→</span>
              </motion.a>
            </FadeUp>
          </div>

          <div className="relative z-20 mx-auto w-full max-w-6xl pb-2 pt-10 sm:pb-4 sm:pt-12">
            <div className="grid gap-8 sm:grid-cols-2 lg:flex lg:flex-row lg:gap-10">
              {info.map((item, i) => (
                <FadeUp key={item.label} delay={0.08 * i}>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="mt-0.5 shrink-0" style={{ color: GOLD }}>
                      {item.icon}
                    </div>
                    <div>
                      <p
                        className="mb-1 font-jost uppercase"
                        style={{
                          fontSize: "0.58rem",
                          letterSpacing: "0.2em",
                          color: "rgba(200,167,106,0.85)",
                        }}
                      >
                        {item.label}
                      </p>
                      <p className="font-jost text-[0.86rem] leading-snug text-white/85 sm:text-[0.88rem]">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar scrolled={scrolled} activeNav="contact" />
      <main style={{ background: PARCHMENT }}>
        <ContactHero />
        <ContactInfoSection />
        {/* <MistSectionBridge /> */}
        <ContactFormSection />
        <div className="relative isolate">
          <ContactLocationSection />
          <Footer contactOverlap />
        </div>
      </main>
    </>
  );
}
