import {
    Mail,
    Phone,
    Sparkles,
  } from "lucide-react";

import { motion } from "framer-motion";
import convImg1 from "@/images/contact/about-bigimg.png";
import convOverlap from "@/images/contact/teagarden.png";
import contactBottomLeaf from "@/images/contact/contact-bottom-leaf.png";

const FOREST = "#0E2D20";
const GOLD = "#C8A76A";
const PARCHMENT = "#eee9dc";

function ContactInfo() {    

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
  
    return (
      <section      
        className="
          relative
          overflow-hidden
          bg-[#eee9dc]
          text-[#10261b]
        "
      >   
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
        <div className="order-1 md:order-2">
            <div className="relative mx-auto w-full max-w-[610px]">
              {/* =====================================================
                  PREMIUM IMAGE COMPOSITION
              ====================================================== */}
  
              {/* <div className="relative h-[500px] sm:h-[580px] lg:h-[640px]"> */}
              <div
                className="
                    relative
                    h-[640px]
                    max-lg:h-[600px]
                    max-md:h-[560px]
                    max-sm:h-[520px]
                "
                >
  
                {/* subtle architectural gold line */}
                <div
                  className="
                    absolute
                    right-[2%]
                    top-[3%]
                    h-[86%]
                    w-[94%]
                    rounded-[45%_8%_8%_12%]
                    border
                    border-[#C8A76A]/35
                  "
                />
  
                {/* ===================================================
                    MAIN IMAGE
                =================================================== */}
  
                <motion.div
                //   className="
                //     absolute
                //     right-[3%]
                //     top-0
                //     z-15
                //     h-[88%]
                //     w-[78%]
                //     overflow-hidden
                //     rounded-[44%_9%_12%_30%]
                //     bg-[#DED7C8]
                //     shadow-[0_35px_80px_rgba(35,42,30,0.22)]
                //   "
                className="
                    absolute
                    right-[3%]
                    top-0
                    z-15
                    h-[88%]
                    w-[100%]
                    overflow-hidden
                    rounded-[44%_9%_12%_30%]
                    bg-[#DED7C8]
                    shadow-[0_35px_80px_rgba(35,42,30,0.22)]

                    max-md:right-[2%]
                    max-md:w-[82%]

                    max-sm:right-[1%]
                    max-sm:w-[84%]
                    "                
                initial={{
                  opacity: 0,
                  x: -90,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 1.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                >
                  <motion.img
                    src={convImg1}
                    alt="Paciano landscape"
                    className="
                      h-full
                      w-full
                      object-cover
                      object-center
                      will-change-transform
                    "
                    animate={{
                      scale: [1, 1.045, 1.02, 1],
                      x: [0, -7, -3, 0],
                      y: [0, -3, -6, 0],
                    }}
                    transition={{
                      duration: 24,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
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
                  whileInView={{
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
                    md:bottom-[-3%]
  
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
                  x: -35,
                  y: 20,
                  scale: 0.96,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 1.5,
                  delay: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {/* Subtle continuous movement after entrance */}               
                <div>
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
                        animate={{
                          scale: [1, 1.035, 1.015, 1],
                          x: [0, 2, -2, 0],
                          y: [0, -3, -1, 0],
                        }}
                        transition={{
                          duration: 18,
                          repeat: Infinity,
                          repeatType: "loop",
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
                  <div                    
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
                  </div>
                </div>
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
          </div>
  
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
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 1.2,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ willChange: "transform, opacity" }}
                className="mb-5 flex items-center gap-3"
              >
                          
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
                    text-[12px]
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
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 2.4,
                  delay: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ willChange: "transform, opacity" }}
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
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 1.8,
                delay: 1.0,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{ willChange: "transform, opacity" }}
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
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 1.8,
                  delay: 1.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ willChange: "transform, opacity" }}
                className="
                  mt-3
                  max-w-[430px]
                  font-manrope
                  text-[14px]
                  leading-[1.75]
                  text-[#66645c]
                ">
                            
                Reach out and let&apos;s create something meaningful together,
                surrounded by the forests, rivers and stories of Paciano.
              </motion.p>
            
            {/* =================================================
                CONTACT DETAILS
            ================================================== */}
            <div className="mt-10 space-y-6">
              {contacts.map((c, i) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 1.8,
                    delay: 1.8 + i * 0.45,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{ willChange: "transform, opacity" }}
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
            </div>
          </div>
  

  
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
  </section>
  );
}

export default ContactInfo;