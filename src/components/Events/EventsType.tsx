import { motion, useReducedMotion } from "framer-motion";
import wedding from "@/images/events/wedding.png";
import corporate from "@/images/events/corporate.jpg";
import leafWhisper from "@/images/button-leaf.png";
import leafEvents from "@/images/events/events-leaf.png";
import contactLeafIcon from "@/images/contact/paciano-leaf-gold-transparent.png";
import {
  UsersRound,
  Monitor,
  Leaf,
  ConciergeBell,
  Heart,
  Utensils,
  Flower2,
  HandHeart,
  ArrowRight,
  Check,
} from "lucide-react";

type Feature = {
  icon: React.ElementType;
  label: string;
};

const corporateFeatures: Feature[] = [
  { icon: UsersRound, label: "Versatile Event Spaces" },
  { icon: Monitor, label: "Modern Amenities" },
  { icon: Leaf, label: "Tranquil Surroundings" },
  { icon: ConciergeBell, label: "Culinary Excellence" },
];

const weddingFeatures: Feature[] = [
  { icon: Heart, label: "Scenic Ceremony Spaces" },
  { icon: Utensils, label: "Curated Dining Experiences" },
  { icon: Flower2, label: "Tailored Wedding Services" },
  { icon: HandHeart, label: "Dedicated Event Team" },
];

// Scroll animation variants

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const imageReveal = {
  hidden: {
    opacity: 0,
    scale: 0.94,
    y: 35,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1.3,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const featureVariants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

// function BotanicalDecoration({ className = "" }: { className?: string }) {
//   return (
//     <div
//       className={`
//         pointer-events-none
//         absolute
//         z-30

//         left-[-42px]
//         bottom-[-12px]

//         h-[120px]
//         w-[145px]

//         sm:left-[-46px]
//         sm:bottom-[-14px]
//         sm:h-[135px]
//         sm:w-[160px]

//         lg:left-[-42px]
//         lg:bottom-[-37px]
//         lg:h-[130px]
//         lg:w-[150px]

//         ${className}
//       `}
//     >
//       <img
//         src={leafEvents}
//         alt=""
//         aria-hidden="true"
//         className="
//           h-full
//           w-full
//           object-contain
//           object-left-bottom
//           brightness-[0.96]
//           saturate-[0.90]
//           drop-shadow-[0_4px_7px_rgba(40,45,25,0.12)]
//         "
//       />
//     </div>
//   );
// }
function BotanicalDecoration({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, rotate: -5 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      animate={{
        y: [0, -4, 0],
        rotate: [0, 2, 0, -2, 0],
      }}
      className={`
        pointer-events-none
        absolute
        z-30

        left-[-42px]
        bottom-[-12px]

        h-[120px]
        w-[145px]

        sm:left-[-46px]
        sm:bottom-[-14px]
        sm:h-[135px]
        sm:w-[160px]

        lg:left-[-42px]
        lg:bottom-[-37px]
        lg:h-[130px]
        lg:w-[150px]

        ${className}
      `}
    >
      <motion.img
        src={leafEvents}
        alt=""
        aria-hidden="true"
        animate={{
          rotate: [0, 2.5, 0, -2.5, 0],
          scale: [1, 1.015, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          transformOrigin: "20% 85%",
        }}
        className="
          h-full
          w-full
          object-contain
          object-left-bottom

          brightness-[0.96]
          saturate-[0.90]

          drop-shadow-[0_4px_7px_rgba(40,45,25,0.12)]
        "
      />
    </motion.div>
  );
}

function EventFeatures({ features }: { features: Feature[] }) {
  return (
    <motion.div
      variants={containerVariants}
      className="
      mt-7
      grid
      w-full
      grid-cols-2
      gap-y-6
      sm:grid-cols-4
      sm:gap-y-0
    "
    >
      {features.map((feature, index) => {
        const Icon = feature.icon;

        return (
          <motion.div
            key={feature.label}
            variants={fadeUp}
            className={`
              relative
              flex
              min-w-0
              flex-col
              items-center
              justify-start
              gap-2.5
              px-2
              sm:px-3
              lg:px-4
              xl:px-5

              ${
                index !== 0
                  ? "sm:before:absolute sm:before:left-0 sm:before:top-1 sm:before:bottom-1 sm:before:w-px sm:before:bg-[#C8B98F]/60"
                  : ""
              }
            `}
          >
            {/* ICON */}
            <div
              className="
              flex
              h-9
              w-full
              shrink-0
              items-center
              justify-center
            "
            >
              <Icon
                strokeWidth={1.35}
                className="
                  h-7 w-7
                  shrink-0
                  text-[#657344]
                  sm:h-8 sm:w-8
                "
              />
            </div>

            {/* EQUAL HEIGHT LABEL AREA */}
            <div
              className="
              flex
              h-[54px]
              w-full
              items-center
              justify-center
            "
            >
              <span
                className="
                w-full
                max-w-[110px]
                text-center
                font-manrope
                text-[10px]
                leading-[1.5]
                text-[#42483A]
                sm:text-[10px]
                lg:text-[11px]
              "
              >
                {feature.label}
              </span>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

function EventImage({
  src,
  alt,
  position = "left",
}: {
  src: string;
  alt: string;
  position?: "left" | "right";
}) {
  return (
    <motion.div
      variants={imageReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.22,
      }}
      className="relative isolate mx-auto w-full max-w-[680px]"
    >
      {/* Delicate outer gold frame */}
      <div
        className={`
          absolute -inset-[7px] -z-10
          rounded-[42px]
          border border-[#C59A56]/75
          ${position === "left" ? "rotate-[1deg]" : "-rotate-[1deg]"}
        `}
      />

      {/* Main image */}
      <div
        className={`
          relative aspect-[1.38/1]
          overflow-hidden
          rounded-[34px]
          border border-[#E4D8BC]
          bg-[#E9E0D0]
          shadow-[0_15px_45px_rgba(66,57,37,0.10)]
          sm:aspect-[1.55/1]
          lg:aspect-[1.38/1]
        `}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="
            h-full w-full object-cover
            transition-transform duration-[1800ms]
            ease-[cubic-bezier(.22,1,.36,1)]
            hover:scale-[1.045]
          "
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17251B]/10 via-transparent to-white/5" />
      </div>

      {/* Botanical decoration */}
      <BotanicalDecoration
        className={`
          -bottom-9 h-28 w-24
          ${position === "left" ? "-left-8" : "-right-8"}
          sm:h-32 sm:w-28
        `}
      />
    </motion.div>
  );
}

function EventContent({
  eyebrow,
  title,
  description,
  features,
  buttonText,
  href,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  features: Feature[];
  buttonText: string;
  href: string;
}) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      className="flex w-full flex-col justify-center"
    >
      {/* Eyebrow */}
      <motion.div variants={fadeUp} className="mb-5 flex items-center gap-4">
        <span className="inline-flex items-center gap-2 font-manrope text-[10px] font-semibold uppercase tracking-[0.30em] text-[#687747] sm:text-[11px]">
          <svg
            viewBox="0 0 32 32"
            className="h-[20px] w-[20px] shrink-0 text-[#71863D]"
            fill="none"
            aria-hidden="true"
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

          {eyebrow}
        </span>

        <span className="h-px w-16 shrink-0 bg-[#B69A63]" />
      </motion.div>

      {/* Heading */}
      <motion.h2
        variants={fadeUp}
        className="
            font-display              
            leading-[0.91]
            tracking-[-0.045em]
            text-[#1c2c21]
            font-cormorant
            max-[380px]:text-[2.85rem]            
            text-[38px]
            sm:text-[52px]
            md:text-[55px]
            lg:text-[68px]
            xl:text-[76px]            
            [@media(min-width:1200px)_and_(max-width:1599px)]:text-[55px]
            max-w-[760px]"
      >
        {title}
      </motion.h2>

      {/* Description */}
      <motion.p
        variants={fadeUp}
        className="
          mt-5 max-w-[510px]
          font-manrope
          text-[13px]
          leading-[1.85]
          text-[#52564B]
          sm:text-[14px]
          lg:text-[15px]
        "
      >
        {description}
      </motion.p>

      {/* Features */}
      <EventFeatures features={features} />

      {/* CTA */}
      <motion.div variants={fadeUp} className="mt-8 w-full">
        <a
          href={href}
          className="
            group relative box-border
            inline-flex
            h-[52px]
            w-fit
            max-w-full
            min-w-[235px]
            items-center justify-between
            overflow-visible
            rounded-full
            border border-[#B8B98B]/75
            bg-gradient-to-b
            from-[#5A6440]
            via-[#4D5736]
            to-[#414A2F]
            px-[9px]
            pl-[64px]
            text-[#F4EFE4]
            shadow-[0_8px_24px_rgba(39,46,26,0.22),inset_0_1px_0_rgba(255,255,255,0.16)]
            transition-all
            duration-700
            ease-[cubic-bezier(.22,1,.36,1)]
            hover:-translate-y-[3px]
            hover:scale-[1.015]
            hover:border-[#D0C89B]
            hover:shadow-[0_16px_36px_rgba(39,46,26,0.30),inset_0_1px_0_rgba(255,255,255,0.20)]

            max-[380px]:pl-[54px]
            max-[380px]:min-w-[220px]
            sm:min-w-[250px]
            "
        >
          {/* INNER GLOW */}
          <span
            className="
                pointer-events-none absolute inset-[1px]
                rounded-full
                bg-gradient-to-b
                from-[#D8D3A8]/[0.10]
                via-transparent
                to-[#1F2818]/[0.16]
                "
          />

          {/* LUXURY SHINE */}
          <span
            className="
            pointer-events-none absolute
            left-[24%] top-[3px]
            h-[46px] w-[42%]
            rotate-[7deg] rounded-full
            bg-gradient-to-r
            from-transparent
            via-[#F8F2DD]/[0.10]
            to-transparent
            blur-[5px]
            opacity-80
            transition-all duration-[1200ms]
            ease-[cubic-bezier(.22,1,.36,1)]
            group-hover:left-[48%]
            group-hover:opacity-100
            "
          />

          {/* LOWER GOLDEN LIGHT */}
          <span
            className="
                pointer-events-none absolute
                inset-x-[18%] bottom-[3px]
                h-px
                bg-gradient-to-r
                from-transparent
                via-[#D7CF9B]/70
                to-transparent
                opacity-70
                transition-opacity duration-700
                group-hover:opacity-100
                "
          />

          {/* LEAF */}
          <span
            className="
                pointer-events-none absolute
                left-[-8px] bottom-[-10px]
                z-20
                h-[78px] w-[82px]
                origin-bottom-left
                transition-all duration-[900ms]
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
                h-full w-auto max-w-none
                object-contain
                brightness-[0.92]
                contrast-[1.08]
                saturate-[0.92]
                drop-shadow-[0_5px_8px_rgba(22,28,16,0.18)]
                transition-all duration-[900ms]
                ease-[cubic-bezier(.22,1,.36,1)]
                group-hover:brightness-[1.03]
                group-hover:contrast-[1.04]
                "
            />
          </span>

          {/* LEAF LIGHT */}
          <span
            className="
                pointer-events-none absolute
                left-[11px] bottom-[7px]
                z-[5]
                h-[46px] w-[46px]
                rounded-full
                bg-[#D8CF9C]/[0.10]
                blur-[15px]
                transition-all duration-1000
                group-hover:bg-[#E2D9A8]/[0.18]
                "
          />

          {/* CTA TEXT — SAME TYPOGRAPHY AS ENQUIRE ABOUT YOUR STAY */}
          <span
            className="
            relative z-30
            mr-auto
            whitespace-nowrap
            font-manrope
            text-[9px]
            font-medium
            uppercase
            tracking-[0.30em]
            text-[#F4EFE4]
            drop-shadow-[0_1px_2px_rgba(31,37,23,0.20)]
            transition-all duration-700
            ease-[cubic-bezier(.22,1,.36,1)]
            group-hover:translate-x-[3px]
            group-hover:tracking-[0.36em]

            max-[380px]:text-[8px]
            max-[380px]:tracking-[0.18em]
            max-[380px]:group-hover:tracking-[0.22em]
            "
          >
            {buttonText}
          </span>

          {/* SEPARATOR */}
          <span
            className="
                relative z-30
                mx-[13px]
                h-[22px] w-px shrink-0
                bg-[#F4EFE4]/35
                transition-all duration-700
                ease-[cubic-bezier(.22,1,.36,1)]
                group-hover:h-[27px]
                group-hover:bg-[#E5DDBA]/65

                max-[380px]:mx-[8px]
                "
          />

          {/* ARROW MEDALLION */}
          <span
            className="
            relative z-30
            flex h-[32px] w-[32px] shrink-0
            items-center justify-center
            rounded-full
            border border-[#E4DEC1]/55
            bg-gradient-to-b
            from-[#F0E9D3]/[0.12]
            to-[#B7AF88]/[0.05]
            shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]
            transition-all duration-700
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
                transition-all duration-700
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
  );
}

export default function EventsType() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="
        relative isolate overflow-hidden
        bg-[#F7F3E9]
        py-20
        sm:py-24
        lg:py-32
        [@media(orientation:landscape)_and_(max-height:500px)]:pt-12
        [@media(orientation:landscape)_and_(max-height:500px)]:pb-24
      "
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-[12%] h-[400px] w-[400px] rounded-full bg-[#D8DCC0]/20 blur-[100px]" />

        <div className="absolute -right-40 bottom-[10%] h-[400px] w-[400px] rounded-full bg-[#D8C69F]/15 blur-[100px]" />
      </div>

      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* ==========================================
            CORPORATE EVENTS
        ========================================== */}
        <div
          className="
            grid
            grid-cols-1
            min-w-0
            items-center
            gap-10

            xl:grid-cols-[1.08fr_0.92fr]
            xl:gap-14

            2xl:gap-20
            "
        >
          {/* Image */}
          <EventImage
            src={corporate}
            alt="Elegant Paciano corporate meeting and conference space"
            position="left"
          />

          {/* Content */}
          <EventContent
            eyebrow="Corporate Events"
            title={
              <>
                Inspiring Gatherings
                <br />
                <em className="font-normal italic text-[#526C4E]">
                  for Lasting Impact
                </em>
              </>
            }
            description="Host corporate retreats, strategy meetings and team celebrations in a serene, nature-rich setting designed for focus, connection and growth."
            features={corporateFeatures}
            buttonText="EXPLORE CORPORATE EVENTS"
            href="/events/corporate"
          />
        </div>

        {/* ==========================================
            DIVIDER
        ========================================== */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scaleX: 0.7 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="
            my-20 flex items-center gap-5
            sm:my-24 lg:my-28
            [@media(orientation:landscape)_and_(max-height:500px)]:my-12
        "
        >
          {/* LEFT DIVIDER */}
          <div
            className="
            h-px flex-1
            bg-gradient-to-r
            from-transparent
            via-[#78943F]/65
            to-[#526B32]/75
            "
          />

          {/* OLIVE GREEN LEAF */}
          <motion.span
            initial={
              reduceMotion ? false : { opacity: 0, scale: 0.7, rotate: -15 }
            }
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="
            relative flex h-9 w-9 shrink-0
            items-center justify-center
            sm:h-11 sm:w-11
            "
          >
            <span
              className="
                absolute inset-1
                rounded-full
                bg-[#78943F]/15
                blur-md
            "
            />

            <img
              src={contactLeafIcon}
              alt=""
              aria-hidden="true"
              className="
                relative z-10
                h-7 w-7
                object-contain
                sm:h-9 sm:w-9
            "
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(52%) sepia(20%) saturate(1050%) hue-rotate(43deg) brightness(91%) contrast(88%)",
              }}
            />
          </motion.span>

          {/* RIGHT DIVIDER */}
          <div
            className="
                h-px flex-1
                bg-gradient-to-l
                from-transparent
                via-[#78943F]/65
                to-[#526B32]/75
                "
          />
        </motion.div>

        {/* ==========================================
            WEDDINGS
        ========================================== */}
        <div
          className="
            grid
            grid-cols-1
            min-w-0
            items-center
            gap-10

            xl:grid-cols-[0.92fr_1.08fr]
            xl:gap-14
            2xl:gap-20
            
            "
        >
          {/* IMAGE - FIRST ON MOBILE AND TABLET */}
          <div
            className="
                order-1
                min-w-0
                xl:order-2
                "
          >
            <EventImage
              src={wedding}
              alt="Romantic outdoor wedding ceremony at Paciano overlooking the mountains"
              position="right"
            />
          </div>
          {/* Content */}
          <div
            className="
                order-2
                min-w-0
                xl:order-1
                "
          >
            <EventContent
              eyebrow="Weddings"
              title={
                <>
                  A Naturally Enchanting
                  <br />
                  <em className="font-normal italic text-[#526C4E]">
                    Wedding Destination
                  </em>
                </>
              }
              description="Celebrate your love amidst breathtaking mountain views, lush greenery and the warm, personalized hospitality of Paciano."
              features={weddingFeatures}
              buttonText="EXPLORE WEDDINGS"
              href="/events/weddings"
            />
          </div>

          {/* Image */}
          {/* <div
            className=" order-2
            lg:order-1  
             [@media(orientation:portrait)_and_(max-width:1024px)]:!order-1          
            "
          >
            <EventImage
              src={wedding}
              alt="Romantic outdoor wedding ceremony at Paciano overlooking the mountains"
              position="right"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}
