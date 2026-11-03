import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import {
  ArrowLeft,
  ArrowRight,
  Bath,
  BedDouble,
  CalendarDays,
  Check,
  Coffee,
  ConciergeBell,
  Leaf,
  Mountain,
  ParkingCircle,
  Play,
  Quote,
  Sparkles,
  Star,
  Sunrise,
  Users,
  UtensilsCrossed,
  Waves,
  Wifi,
  X,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import heroBanner from "@/images/stay/stay-banner.png";
import leafWhisper from "@/images/button-leaf.png";
import heroBannerAlt from "@/images/stay/hero-banner-alt.jpg";
import slowDaysMoments from "@/images/stay/slow-days-moments.jpg";
import bookingRiverSunrise from "@/images/stay/booking-river-sunrise.jpg";
import resortDeck from "@/images/stay/resort-deck.jpg";
import balcony from "@/images/stay/balcony.jpg";
import riverValley from "@/images/stay/river-valley.jpg";
import goldenRiver from "@/images/stay/golden-river.jpg";
import clientRoom1 from "@/images/stay/client-room-1.jpeg";
import clientRoom2 from "@/images/stay/client-room-2.jpeg";
import clientRoom3 from "@/images/stay/client-room-3.jpeg";
import clientRoom4 from "@/images/stay/client-room-4.jpeg";
import clientRoom5 from "@/images/stay/client-room-5.jpeg";
import clientRoom6 from "@/images/stay/client-room-6.jpeg";
import MistSectionBridge from "@/components/MistSectionBridge";
import StayPhotoBridge from "@/components/Stay/StayPhotoBridge";
import StayBotanicalBackdrop from "@/components/Stay/StayBotanicalBackdrop";
import Footer from "@/components/Footer";
const STAY_CREAM = "#F8F5EE";
const FOOTER_DARK = "#09160F";

type Room = {
  title: string;
  category: string;
  image: string;
  description: string;
  subtitle: string;
  details: string;
  price: string;
};

const rooms: Room[] = [
  {
    title: "Riverside Suite",
    category: "Riverside",
    image: clientRoom1,
    description:
      "Wake up to the gentle flow of the river and panoramic valley views.",
    subtitle: "Where Mornings Begin With a View.",
    details:
      "A spacious and elegant suite with a private balcony overlooking the river and mountains. Designed for those who seek tranquility with a touch of luxury.",
    price: "₹8,500",
  },
  {
    title: "Garden Residence",
    category: "Garden View",
    image: clientRoom2,
    description:
      "Surrounded by lush gardens and greenery, perfect for a peaceful retreat.",
    subtitle: "A Little Closer to the Green.",
    details:
      "An inviting residence with warm natural textures and a quiet private balcony, made for slowing down and settling in.",
    price: "₹7,200",
  },
  {
    title: "Valley Retreat",
    category: "Mountain View",
    image: clientRoom3,
    description:
      "Immerse yourself in the hills and the beauty of an endless horizon.",
    subtitle: "Room to Take It All In.",
    details:
      "Open the doors to sweeping mountain views, soft mornings, and a space thoughtfully considered for your comfort.",
    price: "₹9,200",
  },
  {
    title: "Family Sanctuary",
    category: "Family Stay",
    image: clientRoom4,
    description: "Space to gather, unwind and make memories together.",
    subtitle: "Together Is a Beautiful Place to Be.",
    details:
      "Generous spaces, comforting details, and nature just outside the door make this a wonderful home for the whole family.",
    price: "₹11,500",
  },
  {
    title: "Villa Escape",
    category: "Villas",
    image: clientRoom5,
    description: "An intimate hideaway with a world of nature all your own.",
    subtitle: "Your Own Corner of Paradise.",
    details:
      "A private retreat crafted for unhurried days, intimate evenings, and the simple pleasure of having it all to yourself.",
    price: "₹14,500",
  },
];

const categories = [
  "All Rooms",
  "Riverside",
  "Garden View",
  "Mountain View",
  "Family Stay",
  "Villas",
];

const amenities: { label: string; icon: LucideIcon }[] = [
  { label: "Complimentary Breakfast", icon: ConciergeBell },
  { label: "High-Speed WiFi", icon: Wifi },
  { label: "24/7 Room Service", icon: Sparkles },
  { label: "Tea & Coffee Station", icon: Coffee },
  { label: "Natural Toiletries", icon: Leaf },
  { label: "In-Room Dining", icon: UtensilsCrossed },
  { label: "Free Parking", icon: ParkingCircle },
  { label: "Nature View", icon: Mountain },
];

const moments = [
  { time: "06:00 AM", title: "Wake to mountain sunrise", image: riverValley },
  { time: "08:00 AM", title: "Breakfast by the river", image: resortDeck },
  {
    time: "04:00 PM",
    title: "Nature walk & local experiences",
    image: balcony,
  },
  {
    time: "07:00 PM",
    title: "Bonfire & dining under the stars",
    image: goldenRiver,
  },
];

const testimonials = [
  {
    quote:
      "The room opened directly towards the river. The sunrise was unforgettable.",
    name: "Aanya Sen",
    city: "Kolkata, India",
    initials: "AS",
    color: "#a2785f",
  },
  {
    quote:
      "Beautiful rooms, peaceful surroundings and the warmest hospitality. Truly special.",
    name: "Rohit Malik",
    city: "Delhi, India",
    initials: "RM",
    color: "#667963",
  },
  {
    quote: "A perfect blend of comfort and nature. We didn't want to leave!",
    name: "Priya Das",
    city: "Bangalore, India",
    initials: "PD",
    color: "#897464",
  },
];

function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p className={`eyebrow ${light ? "text-[#e9d7a7]" : "text-[#52694b]"}`}>
      <Sparkles
        aria-hidden="true"
        size={12}
        className="shrink-0 text-[#b89b5e]"
      />
      {children}
    </p>
  );
}

function CircleArrow({
  direction = "right",
  onClick,
  label,
  className = "",
}: {
  direction?: "left" | "right";
  onClick?: () => void;
  label: string;
  className?: string;
}) {
  const Icon = direction === "left" ? ArrowLeft : ArrowRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`circle-arrow ${className}`}
    >
      <Icon size={18} strokeWidth={1.5} />
    </button>
  );
}

function PillLink({
  children,
  href,
  outlined = false,
}: {
  children: ReactNode;
  href: string;
  outlined?: boolean;
}) {
  return (
    <a
      href={href}
      className={`pill-link ${outlined ? "pill-outline" : "pill-solid"}`}
    >
      <span>{children}</span>
      <span className="pill-icon">
        <ArrowRight size={16} strokeWidth={1.5} />
      </span>
    </a>
  );
}

function Wave({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={`section-wave ${flip ? "rotate-180" : ""}`}
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
    >
      <path
        d="M0 39C210 99 355 8 572 36C790 64 835 97 1044 44C1220 0 1338 18 1440 57V90H0V39Z"
        fill="#F8F5EE"
      />
    </svg>
  );
}

function Hero({ onExperience }: { onExperience: () => void }) {
  const reduceMotion = useReducedMotion();
  const instant = Boolean(reduceMotion);

  const reveal = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduceMotion ? 0 : 1.1,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <section
      className="
        hero
        relative
        isolate
        min-h-[780px]
        overflow-hidden
        bg-[#f8f5ee]

        md:min-h-[720px]
        lg:min-h-[min(900px,100svh)]

        [@media(orientation:landscape)_and_(max-height:600px)]:min-h-[540px]
        [@media(orientation:landscape)_and_(max-height:600px)]:h-[100svh]
      "
      aria-labelledby="hero-title"
    >
      {/* BACKGROUND IMAGE */}
      <img
        src={heroBanner}
        alt="Luxury Paciano suite with a private balcony overlooking the valley"
        loading="eager"
        fetchPriority="high"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-[62%_center]

          [@media(orientation:portrait)]:object-[65%_center]
          [@media(orientation:landscape)_and_(max-height:600px)]:object-center
        "
      />

      {/* CINEMATIC IVORY OVERLAY */}
      {/* <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background: `
            linear-gradient(
              90deg,
              rgba(250, 248, 242, 0.96) 0%,
              rgba(250, 248, 242, 0.93) 15%,
              rgba(250, 248, 242, 0.85) 28%,
              rgba(250, 248, 242, 0.68) 40%,
              rgba(250, 248, 242, 0.40) 52%,
              rgba(250, 248, 242, 0.16) 65%,
              rgba(250, 248, 242, 0.03) 78%,
              rgba(250, 248, 242, 0) 88%
            )
          `,
        }}
      />  */}

      {/* SUBTLE TOP SHADING FOR NAVBAR */}
      {/* <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          z-[3]
          h-28
          bg-gradient-to-b
          from-black/35
          to-transparent
        "
      /> */}
      {/* SOFT TOP BANNER OVERLAY */}
      {/* <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          z-[4]
          h-[150px]
        "
        style={{
          background: `
            linear-gradient(
              180deg,
              rgba(250,248,242,0.30) 0%,
              rgba(250,248,242,0.18) 35%,
              rgba(250,248,242,0.07) 70%,
              transparent 100%
            )
          `,
        }}
      /> */}

      {/* HERO CONTENT */}
      <div
        className="
          page-container
          relative
          z-10
          flex
          min-h-[780px]
          items-end
          pb-36
          pt-32

          md:min-h-[720px]
          md:items-center
          md:pb-20
          md:pt-24

          lg:min-h-[min(900px,100svh)]

          [@media(orientation:landscape)_and_(max-height:600px)]:min-h-[540px]
          [@media(orientation:landscape)_and_(max-height:600px)]:py-20
        "
      >
        {/* LEFT CONTENT */}
        <div
          className="
            hero-copy
            relative
            isolate
            w-full
            max-w-[580px]
            min-w-0
            [@media(orientation:landscape)_and_(max-height:600px)]:max-w-[460px]
          "
        >
          {/* SOFT IVORY GLOW - BEHIND TEXT ONLY */}
          {/* <div
            aria-hidden="true"
            className="
            pointer-events-none
            absolute
            -left-24
            -top-24
            z-0
            h-[780px]
            w-[820px]
            max-w-[110vw]
            "
            style={{
              background: `
              radial-gradient(
                ellipse 75% 85% at 36% 48%,
                rgba(250,248,242,0.94) 0%,
                rgba(250,248,242,0.88) 38%,
                rgba(250,248,242,0.72) 58%,
                rgba(250,248,242,0.42) 76%,
                rgba(250,248,242,0.14) 90%,
                transparent 100%
              )
            `,
              filter: "blur(20px)",
            }}
          /> */}
          {/* RESPONSIVE STAY HERO – LOCALIZED IVORY GLOW */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              z-0

              /* DESKTOP DEFAULT */
              -left-24
              -top-24
              h-[780px]
              w-[820px]
              blur-[20px]

              /* LAPTOP – 1200px TO 1599px */
              [@media(min-width:1200px)_and_(max-width:1599px)]:-left-[65px]
              [@media(min-width:1200px)_and_(max-width:1599px)]:-top-[30px]
              [@media(min-width:1200px)_and_(max-width:1599px)]:h-[540px]
              [@media(min-width:1200px)_and_(max-width:1599px)]:w-[680px]
              [@media(min-width:1200px)_and_(max-width:1599px)]:blur-[18px]

              /* MOBILE PORTRAIT */
              [@media(max-width:639px)_and_(orientation:portrait)]:-left-6
              [@media(max-width:639px)_and_(orientation:portrait)]:-top-7
              [@media(max-width:639px)_and_(orientation:portrait)]:h-[450px]
              [@media(max-width:639px)_and_(orientation:portrait)]:w-[430px]
              [@media(max-width:639px)_and_(orientation:portrait)]:blur-[16px]

              /* MOBILE LANDSCAPE */
              [@media(max-width:900px)_and_(max-height:600px)_and_(orientation:landscape)]:-left-12
              [@media(max-width:900px)_and_(max-height:600px)_and_(orientation:landscape)]:-top-7
              [@media(max-width:900px)_and_(max-height:600px)_and_(orientation:landscape)]:h-[410px]
              [@media(max-width:900px)_and_(max-height:600px)_and_(orientation:landscape)]:w-[620px]
              [@media(max-width:900px)_and_(max-height:600px)_and_(orientation:landscape)]:blur-[16px]
              [@media(max-width:900px)_and_(max-height:600px)_and_(orientation:landscape)]:hidden

              /* TABLET PORTRAIT */
             [@media(min-width:640px)_and_(max-width:1023px)_and_(orientation:portrait)]:-left-[45px]
             [@media(min-width:640px)_and_(max-width:1023px)_and_(orientation:portrait)]:-top-[25px]
             [@media(min-width:640px)_and_(max-width:1023px)_and_(orientation:portrait)]:h-[520px]
             [@media(min-width:640px)_and_(max-width:1023px)_and_(orientation:portrait)]:w-[590px]

              /* TABLET LANDSCAPE */
             [@media(min-width:640px)_and_(max-width:1199px)_and_(orientation:landscape)]:-left-[55px]
              [@media(min-width:640px)_and_(max-width:1199px)_and_(orientation:landscape)]:-top-[15px]
              [@media(min-width:640px)_and_(max-width:1199px)_and_(orientation:landscape)]:h-[480px]
              [@media(min-width:640px)_and_(max-width:1199px)_and_(orientation:landscape)]:w-[620px]
            "
            style={{
              background: `
                radial-gradient(
                  ellipse 75% 82% at 36% 48%,
                  rgba(250,248,242,0.94) 0%,
                  rgba(250,248,242,0.88) 38%,
                  rgba(250,248,242,0.72) 58%,
                  rgba(250,248,242,0.42) 76%,
                  rgba(250,248,242,0.14) 90%,
                  transparent 100%
                )
              `,
            }}
          />
          {/* MOBILE LANDSCAPE – COMPACT TEXT GLOW */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              z-0
              hidden

              [@media(max-width:900px)_and_(max-height:600px)_and_(orientation:landscape)]:block
              [@media(max-width:900px)_and_(max-height:600px)_and_(orientation:landscape)]:-left-12
              [@media(max-width:900px)_and_(max-height:600px)_and_(orientation:landscape)]:top-[-69px]
              [@media(max-width:900px)_and_(max-height:600px)_and_(orientation:landscape)]:h-[380px]
              [@media(max-width:900px)_and_(max-height:600px)_and_(orientation:landscape)]:w-[600px]
              [@media(max-width:900px)_and_(max-height:600px)_and_(orientation:landscape)]:blur-[12px]
            "
            style={{
              background: `
                radial-gradient(
                  ellipse 78% 62% at 38% 55%,
                  rgba(250,248,242,0.96) 0%,
                  rgba(250,248,242,0.88) 38%,
                  rgba(250,248,242,0.65) 58%,
                  rgba(250,248,242,0.28) 78%,
                  rgba(250,248,242,0.05) 94%,
                  transparent 100%
                )
              `,
            }}
          />
          <div className="relative z-10">
            {/* EYEBROW */}
            <motion.div
              {...reveal(0.15)}
              className="
              mb-5
              flex
              items-center
              gap-2.5
              md:mb-6
            "
            >
              <svg
                viewBox="0 0 32 32"
                className="h-[20px] w-[20px] text-[#71863D]"
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

              <span
                className="
                font-manrope
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.31em]
                text-[#68753F]
                sm:text-[11px]
              "
              >
                Stay at Paciano
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h1
              id="hero-title"
              {...reveal(0.35)}
              className="
              font-display              
              leading-[0.91]
              tracking-[-0.045em]
              text-[#1c2c21]

              max-[380px]:text-[2.85rem]
              
              text-[44px]
              sm:text-[52px]
              md:text-[60px]
              lg:text-[68px]
              xl:text-[76px]
              max-w-[760px]

              
            "
            >
              <span className="block">Where Every Stay</span>
              <em
                className="block font-normal italic
                text-[#4c6748]"
              >
                Feels Like a Story.
              </em>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              {...reveal(0.65)}
              className="
              mt-6
              max-w-[405px]
              font-manrope
              text-[13px]
              leading-[1.8]
              text-[#39443a]

              sm:text-[14px]
              lg:mt-7
              lg:text-[15px]

              [@media(orientation:landscape)_and_(max-height:600px)]:mt-4
              [@media(orientation:landscape)_and_(max-height:600px)]:text-[12px]
            "
            >
              Spacious rooms, timeless views and thoughtful details — designed
              for your comfort, surrounded by nature’s beauty.
            </motion.p>

            {/* CTA BUTTONS */}
            {/* <motion.div
              {...reveal(0.9)}
              className="
              mt-7
              flex
              flex-wrap
              items-center
              gap-3

              sm:mt-8

              [@media(orientation:landscape)_and_(max-height:600px)]:mt-5
            "
            >
              <PillLink href="#rooms">Explore Rooms</PillLink>

              <PillLink href="#booking" outlined>
                Check Availability
              </PillLink>
            </motion.div> */}
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
          </div>
        </div>
      </div>

      {/* BOTTOM WAVE */}
      <div className="absolute bottom-[-1px] left-0 z-20 w-full">
        <Wave />
      </div>
    </section>
  );
}

// function Hero({ onExperience }: { onExperience: () => void }) {
//   return (
//     <section
//       className="hero relative isolate overflow-hidden"
//       aria-labelledby="hero-title"
//     >
//       <img
//         src={heroBanner}
//         alt="Luxury suite with a private balcony overlooking the valley"
//         className="absolute inset-0 h-full w-full object-cover object-center"
//       />
//       <div className="hero-shade absolute inset-0" />

//       <div className="page-container relative z-10 flex min-h-[660px] items-center py-20 lg:min-h-[730px]">
//         <div className="hero-copy max-w-[560px] pt-4">
//           {/* <Eyebrow>STAY AT PACIANO</Eyebrow> */}
//           <div
//               className="
//               paciano-reveal
//               mb-[25px]
//               flex
//               items-center
//               gap-[10px]
//               [@media(orientation:landscape)_and_(pointer:coarse)]:justify-center
//             "
//             >
//               <svg
//                 viewBox="0 0 32 32"
//                 className="
//                   h-[21px]
//                   w-[21px]
//                   text-[#71863D]
//                 "
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
//                STAY AT PACIANO
//               </span>
//             </div>
//           <h1
//             id="hero-title"
//             className="font-display mt-6 text-[clamp(4rem,6.15vw,6.25rem)] leading-[0.91] tracking-[-0.045em] text-[#1c2c21]"
//           >
//             Where Every
//             <br />
//             Stay Feels Like
//             <br />
//             <em className="font-normal text-[#4c6748]">a Story.</em>
//           </h1>
//           <p className="mt-8 max-w-[405px] text-[16px] leading-[1.75] text-[#39443a]">
//             Spacious rooms, timeless views and thoughtful details — designed for
//             your comfort, surrounded by nature’s beauty.
//           </p>
//           <div className="mt-8 flex flex-wrap gap-3">
//             <PillLink href="#rooms">Explore Rooms</PillLink>
//             <PillLink href="#booking" outlined>
//               Check Availability
//             </PillLink>
//           </div>
//         </div>
//         {/* <p className="hero-vertical absolute right-7 top-[27%] hidden text-center text-[10px] font-semibold uppercase leading-[2.1] tracking-[0.3em] text-[#f8f2df] xl:block">
//           A Room
//           <br />A View
//           <br />A Better You
//         </p> */}
//         <button
//           type="button"
//           onClick={onExperience}
//           className="experience-button absolute bottom-34 right-10 hidden flex-col items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-white md:flex"
//           aria-label="See the Paciano experience"
//         >
//           <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/70 bg-white/10 backdrop-blur-sm transition-transform hover:scale-110">
//             <Play size={19} fill="currentColor" />
//           </span>
//           <span>See the experience</span>
//         </button>
//       </div>
//       <Wave />
//     </section>
//   )
// }

// function RoomCard({ room, onSelect }: { room: Room onSelect: () => void }) {
function RoomCard({ room, onSelect }: { room: Room; onSelect: () => void }) {
  return (
    <article className="room-card group relative h-[385px] w-[280px] shrink-0 snap-start overflow-hidden rounded-[22px] sm:w-[300px] lg:h-[420px] lg:w-[318px]">
      <img
        src={room.image}
        alt={`${room.title} accommodation at Paciano`}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b14]/95 via-[#0d1b14]/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex min-h-[156px] items-end justify-between gap-3 p-6 text-white transition-colors duration-300 group-hover:bg-white/10 group-hover:backdrop-blur-[5px]">
        <div>
          <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.23em] text-[#e2d1a5]">
            {room.category}
          </p>
          <h3 className="font-display text-[30px] leading-none">
            {room.title}
          </h3>
          <p className="mt-3 max-w-[210px] text-xs leading-relaxed text-white/80">
            {room.description}
          </p>
        </div>
        <CircleArrow
          onClick={onSelect}
          label={`Explore ${room.title}`}
          className="shrink-0 border-0 bg-[#f8f5ee] text-[#263e2c]"
        />
      </div>
    </article>
  );
}

function RoomCollection({ onSelect }: { onSelect: (room: Room) => void }) {
  const [category, setCategory] = useState("All Rooms");
  const scroller = useRef<HTMLDivElement>(null);
  const visibleRooms =
    category === "All Rooms"
      ? rooms
      : rooms.filter((room) => room.category === category);
  const scroll = (direction: number) =>
    scroller.current?.scrollBy({ left: direction * 340, behavior: "smooth" });
  return (
    <section
      id="rooms"
      className="relative overflow-hidden bg-[#F8F5EE] py-20 lg:py-28"
      aria-labelledby="rooms-title"
    >
      <Leaf
        aria-hidden="true"
        className="pointer-events-none absolute -left-14 bottom-3 h-44 w-44 rotate-[-32deg] text-[#73856d]/15"
        strokeWidth={0.65}
      />
      <div className="page-container grid gap-12 lg:grid-cols-[310px_minmax(0,1fr)] lg:gap-12">
        <div className="lg:pt-6">
          <Eyebrow>OUR STAY COLLECTION</Eyebrow>
          <h2 id="rooms-title" className="font-display section-title mt-5">
            A Space for
            <br />
            Every Kind
            <br />
            of <em>Escape.</em>
          </h2>
          <p className="mt-6 max-w-[285px] text-sm leading-[1.8] text-[#5d6259]">
            From riverside suites to private villas, each stay at Paciano is
            thoughtfully designed to help you unwind, reconnect and create
            unforgettable memories in the lap of nature.
          </p>
          <a
            href="#room-showcase"
            onClick={() => setCategory("All Rooms")}
            className="mt-8 inline-flex items-center gap-6 rounded-full border border-[#b8bcae] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.17em] transition-colors hover:bg-[#eaece2]"
          >
            View All Rooms <ArrowRight size={16} />
          </a>
        </div>
        <div className="min-w-0">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
            <div
              role="tablist"
              aria-label="Room categories"
              className="flex max-w-full gap-1.5 overflow-x-auto pb-1 scrollbar-hide"
            >
              {categories.map((item) => (
                <button
                  key={item}
                  role="tab"
                  aria-selected={category === item}
                  type="button"
                  onClick={() => {
                    setCategory(item);
                    scroller.current?.scrollTo({ left: 0, behavior: "smooth" });
                  }}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-[11px] transition-colors ${
                    category === item
                      ? "bg-[#3f5b3f] text-white"
                      : "text-[#536052] hover:bg-[#e9e9df]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="hidden gap-2 xl:flex">
              <CircleArrow
                direction="left"
                onClick={() => scroll(-1)}
                label="Previous rooms"
              />
              <CircleArrow onClick={() => scroll(1)} label="Next rooms" />
            </div>
          </div>
          <div
            ref={scroller}
            className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3"
          >
            {visibleRooms.map((room) => (
              <RoomCard
                key={room.title}
                room={room}
                onSelect={() => onSelect(room)}
              />
            ))}
          </div>
          <p className="mt-4 text-[10px] uppercase tracking-[0.24em] text-[#8a907f]">
            Discover your kind of somewhere
          </p>
        </div>
      </div>
    </section>
  );
}

function FeaturedRoom({ room }: { room: Room }) {
  const gallery = [room.image, clientRoom6, heroBannerAlt, riverValley];
  const [active, setActive] = useState(0);
  const shownImage = gallery[active];
  const change = (step: number) =>
    setActive((current) => (current + step + gallery.length) % gallery.length);
  return (
    <section
      id="room-showcase"
      className="relative bg-[#f2efe6] py-20 lg:py-24"
      aria-labelledby="featured-title"
    >
      <div className="page-container grid items-center gap-12 lg:grid-cols-[minmax(0,1.18fr)_minmax(390px,0.82fr)] lg:gap-16">
        <div className="relative">
          <div className="relative h-[390px] overflow-hidden rounded-[28px] shadow-[0_22px_50px_rgba(39,50,34,0.12)] sm:h-[500px]">
            <img
              src={shownImage}
              alt={`${room.title} gallery view ${active + 1}`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute bottom-5 right-5 flex gap-2">
              <CircleArrow
                direction="left"
                onClick={() => change(-1)}
                label="Previous gallery image"
                className="border-white/70 bg-[#f8f5ee]"
              />
              <CircleArrow
                onClick={() => change(1)}
                label="Next gallery image"
                className="border-white/70 bg-[#f8f5ee]"
              />
            </div>
          </div>
          <div className="relative z-10 ml-4 -mt-12 flex w-fit max-w-[calc(100%-2rem)] gap-2 rounded-[18px] bg-[#f8f5ee] p-2 shadow-[0_12px_32px_rgba(38,45,32,0.15)] sm:ml-8 sm:gap-3">
            {gallery.map((image, index) => (
              <button
                type="button"
                key={`${room.title}-${index}`}
                onClick={() => setActive(index)}
                aria-label={`Show gallery image ${index + 1}`}
                aria-pressed={active === index}
                className={`h-[64px] w-[68px] overflow-hidden rounded-xl transition-all sm:h-[77px] sm:w-[100px] ${
                  active === index
                    ? "ring-2 ring-[#b89b5e] ring-offset-2"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={image}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
        <div className="rounded-[30px] border border-[#e5e0d4] bg-[#fbf9f3]/80 p-7 shadow-[0_18px_55px_rgba(56,62,44,0.07)] sm:p-10 lg:py-12">
          <Eyebrow>FEATURED STAY</Eyebrow>
          <h2
            id="featured-title"
            className="font-display mt-5 text-[clamp(3.3rem,4.5vw,5.5rem)] leading-[0.95] tracking-[-0.045em]"
          >
            {room.title}
          </h2>
          <p className="font-display mt-3 text-[25px] italic text-[#63705b]">
            {room.subtitle}
          </p>
          <p className="mt-6 max-w-[480px] text-sm leading-[1.85] text-[#62675e]">
            {room.details}
          </p>
          <div className="mt-8 grid grid-cols-4 border-y border-[#deddd1] py-5">
            {(
              [
                { icon: Waves, label: "River View" },
                { icon: BedDouble, label: "King Size Bed" },
                { icon: Sunrise, label: "Private Balcony" },
                { icon: Bath, label: "Spacious Bathroom" },
              ] as const
            ).map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2 border-r border-[#deddd1] px-1 text-center last:border-0"
              >
                <Icon size={22} strokeWidth={1.35} />
                <span className="text-[9px] leading-tight text-[#4e564d] sm:text-[10px]">
                  {label}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-5">
            <p className="text-sm">
              From{" "}
              <strong className="font-display text-[28px] font-semibold">
                {room.price}
              </strong>
              <span className="text-[#6e746a]"> / night</span>
            </p>
            <PillLink href="#booking">Check Availability</PillLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function StayFeatures() {
  return (
    <section
      aria-label="Included stay amenities"
      className="bg-[#F8F5EE] py-14 lg:py-18"
    >
      <div className="page-container grid grid-cols-2 gap-y-9 sm:grid-cols-4 lg:grid-cols-8">
        {amenities.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className="flex min-h-[100px] flex-col items-center justify-center gap-4 border-r border-[#e5e1d6] px-3 text-center last:border-0 [&:nth-child(2n)]:max-sm:border-0 [&:nth-child(4n)]:max-lg:border-0"
          >
            <Icon size={27} strokeWidth={1.25} className="text-[#3f5b3f]" />
            <span className="max-w-[105px] text-[11px] leading-[1.45] text-[#334136]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function DayAtPaciano() {
  const [active, setActive] = useState(0);
  const move = (step: number) =>
    setActive((current) => (current + step + moments.length) % moments.length);
  return (
    <section
      className="relative overflow-hidden bg-[#eeeee5]"
      aria-labelledby="day-title"
    >
      <div className="grid min-h-[525px] lg:grid-cols-[40%_32%_28%]">
        <div className="relative min-h-[390px] overflow-hidden lg:min-h-full">
          <img
            src={active === 0 ? slowDaysMoments : moments[active].image}
            alt="Guest enjoying a quiet morning overlooking the mountains"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#eeeee5]/10" />
        </div>
        <div className="flex flex-col justify-center px-8 py-16 lg:px-12 xl:px-16">
          <Eyebrow>A DAY AT PACIANO</Eyebrow>
          <h2 id="day-title" className="font-display section-title mt-6">
            Slow Days.
            <br />
            Meaningful
            <br />
            <em>Moments.</em>
          </h2>
          <p className="mt-6 max-w-[360px] text-sm leading-[1.85] text-[#62685e]">
            From peaceful mornings by the river to warm nights under the stars —
            every moment at Paciano is designed to help you slow down and feel
            more.
          </p>
          <div className="mt-8 flex gap-2">
            <CircleArrow
              direction="left"
              onClick={() => move(-1)}
              label="Previous moment"
              className="bg-[#f8f5ee]"
            />
            <CircleArrow
              onClick={() => move(1)}
              label="Next moment"
              className="bg-[#f8f5ee]"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center px-8 pb-16 lg:px-4 lg:py-12 xl:pl-10">
          <ol className="relative border-l border-[#b5bba7] pl-7">
            {moments.map((moment, index) => (
              <li key={moment.time} className="relative py-3">
                <span
                  className={`absolute -left-[33px] top-9 h-[11px] w-[11px] rounded-full border-2 border-[#eeeee5] ${
                    active === index ? "bg-[#b89b5e]" : "bg-[#60775a]"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setActive(index)}
                  aria-current={active === index ? "step" : undefined}
                  className={`flex w-full items-center gap-4 rounded-2xl p-2 text-left transition-colors hover:bg-white/50 ${
                    active === index ? "bg-white/60" : ""
                  }`}
                >
                  <img
                    src={moment.image}
                    alt=""
                    className="h-14 w-14 shrink-0 rounded-full object-cover"
                  />
                  <span>
                    <span className="block text-[10px] font-bold tracking-[0.14em] text-[#3c4f3c]">
                      {moment.time}
                    </span>
                    <span className="mt-1 block max-w-[175px] text-[12px] leading-[1.45] text-[#596055]">
                      {moment.title}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function GuestStories() {
  return (
    <section
      className="relative z-[1] bg-[#F8F5EE] py-20 pb-16 lg:py-26 lg:pb-20"
      aria-labelledby="stories-title"
    >
      <div className="page-container grid gap-10 lg:grid-cols-[280px_1fr] lg:items-center lg:gap-10">
        <div>
          <Eyebrow>GUEST MOMENTS</Eyebrow>
          <h2 id="stories-title" className="font-display section-title mt-5">
            Stories
            <br />
            From Our
            <br />
            <em>Guests.</em>
          </h2>
          <p className="mt-5 text-sm leading-[1.75] text-[#697065]">
            Real people. Real experiences. Moments that stay long after they
            leave.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((person) => (
            <article
              key={person.name}
              className="flex min-h-[255px] flex-col justify-between rounded-[22px] border border-[#ebe7dc] bg-[#fffdf8] p-6 shadow-[0_14px_35px_rgba(51,57,42,0.07)]"
            >
              <div>
                <Quote
                  size={24}
                  fill="#b89b5e"
                  strokeWidth={0}
                  className="text-[#b89b5e]"
                />
                <blockquote className="mt-4 text-[13px] leading-[1.75] text-[#3e463c]">
                  “{person.quote}”
                </blockquote>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-medium text-white"
                  style={{ backgroundColor: person.color }}
                >
                  {person.initials}
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold">
                    {person.name}
                  </span>
                  <span className="block text-[10px] text-[#8a8f80]">
                    {person.city}
                  </span>
                  <span
                    className="mt-1 flex gap-0.5 text-[#b89b5e]"
                    aria-label="5 out of 5 stars"
                  >
                    {Array.from({ length: 5 }, (_, index) => (
                      <Star
                        key={index}
                        size={11}
                        fill="currentColor"
                        strokeWidth={0}
                        aria-hidden="true"
                      />
                    ))}
                  </span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookingCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const today = new Date().toISOString().slice(0, 10);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };
  return (
    <section
      id="booking"
      className="relative min-h-[clamp(560px,78vh,920px)] overflow-hidden bg-[#09160F] pb-8 pt-8 sm:pb-10 sm:pt-10 lg:pt-12"
      aria-labelledby="booking-title"
    >
      <img
        src={bookingRiverSunrise}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-[6]"
        style={{ height: "clamp(160px, 26vw, 320px)" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom,
              ${STAY_CREAM} 0%,
              ${STAY_CREAM} 8%,
              rgba(248, 245, 238, 0.94) 22%,
              rgba(248, 245, 238, 0.72) 38%,
              rgba(248, 245, 238, 0.38) 52%,
              rgba(248, 245, 238, 0.12) 66%,
              rgba(16, 41, 29, 0.08) 78%,
              transparent 100%)`,
          }}
        />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[5]"
        style={{
          background:
            "linear-gradient(to right, rgba(14,45,32,0.78) 0%, rgba(14,45,32,0.35) 42%, transparent 72%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[6] h-[min(62%,560px)]"
        style={{
          background: `linear-gradient(to top,
            ${FOOTER_DARK} 0%,
            rgba(9, 22, 15, 0.92) 12%,
            rgba(9, 22, 15, 0.65) 32%,
            rgba(9, 22, 15, 0.28) 58%,
            transparent 100%)`,
        }}
      />
      <div className="page-container relative z-[7] grid items-center gap-10 py-16 pb-[clamp(72px,10vw,120px)] lg:grid-cols-[1fr_1.15fr] lg:gap-16 lg:py-24 lg:pb-[clamp(88px,11vw,140px)]">
        <div>
          <Eyebrow light>YOUR ESCAPE AWAITS</Eyebrow>
          <h2
            id="booking-title"
            className="font-display mt-6 max-w-[600px] text-[clamp(3.6rem,5vw,5.7rem)] leading-[0.95] tracking-[-0.04em] text-white"
          >
            Ready to Stay Closer
            <br />
            to <em>Nature?</em>
          </h2>
          <p className="mt-6 max-w-[395px] text-sm leading-[1.8] text-white/80">
            A quieter rhythm, a beautiful view, and a stay made just for you.
            Your perfect getaway at Paciano begins here.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="rounded-[28px] border border-white/50 bg-[#f8f5ee]/95 p-5 shadow-[0_22px_60px_rgba(0,0,0,0.2)] backdrop-blur-lg sm:p-7"
        >
          <div className="grid gap-4 sm:grid-cols-3">
            <label className="booking-field">
              <span className="flex items-center gap-2 text-[11px] font-semibold text-[#334537]">
                <CalendarDays size={17} strokeWidth={1.5} />
                Check In
              </span>
              <input
                aria-label="Check in date"
                type="date"
                min={today}
                value={checkIn}
                onChange={(event) => {
                  setCheckIn(event.target.value);
                  setSubmitted(false);
                }}
                required
                className="booking-input"
              />
            </label>
            <label className="booking-field">
              <span className="flex items-center gap-2 text-[11px] font-semibold text-[#334537]">
                <CalendarDays size={17} strokeWidth={1.5} />
                Check Out
              </span>
              <input
                aria-label="Check out date"
                type="date"
                min={checkIn || today}
                value={checkOut}
                onChange={(event) => {
                  setCheckOut(event.target.value);
                  setSubmitted(false);
                }}
                required
                className="booking-input"
              />
            </label>
            <label className="booking-field">
              <span className="flex items-center gap-2 text-[11px] font-semibold text-[#334537]">
                <Users size={17} strokeWidth={1.5} />
                Guests
              </span>
              <select
                aria-label="Number of guests"
                defaultValue="2"
                className="booking-input"
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5+ Guests</option>
              </select>
            </label>
          </div>
          <button
            type="submit"
            className="mt-5 flex w-full items-center justify-center gap-4 rounded-full bg-[#3f5b3f] px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#29442f]"
          >
            Check Availability <ArrowRight size={17} />
          </button>
          {submitted && (
            <p
              role="status"
              className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-[#3f5b3f]"
            >
              <Check size={17} className="shrink-0" />
              Availability lookup is not connected yet. Your dates are selected;
              please contact the resort to confirm your stay.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default function StayPageContent() {
  const [featuredRoom, setFeaturedRoom] = useState(rooms[0]);
  const [experienceOpen, setExperienceOpen] = useState(false);
  useEffect(() => {
    if (!experienceOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setExperienceOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [experienceOpen]);
  const selectRoom = (room: Room) => {
    setFeaturedRoom(room);
    document
      .getElementById("room-showcase")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="stay-page relative overflow-hidden bg-[#F8F5EE] text-[#203025]">
      <StayBotanicalBackdrop />
      <div className="relative z-[1]">
        <Hero onExperience={() => setExperienceOpen(true)} />
        <RoomCollection onSelect={selectRoom} />
        <StayPhotoBridge src={heroBannerAlt} bottomFade="#f2efe6" />
        <FeaturedRoom key={featuredRoom.title} room={featuredRoom} />
        <MistSectionBridge />
        <StayFeatures />
        <DayAtPaciano />
        <StayPhotoBridge src={slowDaysMoments} topFade="#eeeee5" />
        <GuestStories />
      </div>
      <div className="relative isolate">
        <BookingCTA />
        <Footer contactOverlap />
      </div>
      {experienceOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d1b14]/80 p-5 backdrop-blur-md"
          role="presentation"
          onMouseDown={() => setExperienceOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="experience-title"
            className="relative w-full max-w-3xl overflow-hidden rounded-[28px] bg-[#f8f5ee] shadow-2xl"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              autoFocus
              onClick={() => setExperienceOpen(false)}
              aria-label="Close experience preview"
              className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#f8f5ee] text-[#263e2c]"
            >
              <X size={20} />
            </button>
            <img
              src={heroBannerAlt}
              alt="A private suite above the valley"
              className="h-[330px] w-full object-cover sm:h-[430px]"
            />
            <div className="p-7 sm:p-9">
              <Eyebrow>A MOMENT AT PACIANO</Eyebrow>
              <h2 id="experience-title" className="font-display mt-3 text-4xl">
                Stay a little longer.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#646b60]">
                Imagine a morning with nothing on your itinerary but the
                mountains, the river, and the view.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
