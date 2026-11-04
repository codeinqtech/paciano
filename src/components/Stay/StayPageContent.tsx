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
import { createPortal } from "react-dom";

import deluxeRoom from "@/images/river-side-room.png";
import deluxeBalcony from "@/images/river-side-room.png";
import deluxeDetail from "@/images/river-view.png";
import deluxeBathroom from "@/images/river-view.png";
import deluxeView from "@/images/river-view.png";

import familyRoom from "@/images/family-room.png";
import familyBalcony from "@/images/room1.png";
import familyDetail from "@/images/home-room-1.webp";
import familyBathroom from "@/images/home-room-1.webp";
import familyView from "@/images/home-room-1.webp";

import leafCta from "@/images/leaf-cta.png";
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
        fill="#f2eee3"
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
        bg-[#f2eee3]

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
type AmenityIconType = "bed" | "balcony" | "view" | "bath" | "wifi";
type Stay = {
  id: string;
  name: string;
  eyebrow: string;
  title: string;
  description: string;
  details: string; // ADD THIS

  images: string[];

  amenities: {
    label: string;
    icon: AmenityIconType;
  }[];
};

const stays: Stay[] = [
  {
    id: "deluxe",
    name: "Deluxe Rooms",
    eyebrow: "Deluxe Rooms",
    title: "Wake to Tranquility",
    description:
      "Wake to the gentle rhythm of the river, framed by the magnificent mountains beyond. The Deluxe Rooms offer a peaceful retreat where the beauty of the surrounding landscape becomes part of your stay, from mist-covered mornings to golden evenings overlooking the valley.",

    details:
      "Thoughtfully appointed with elegant interiors, warm natural textures and a private balcony, each room is designed for unhurried moments and effortless comfort. Enjoy the calming views of both the river and mountains, relax in your beautifully appointed bathroom, and experience a stay where understated luxury meets the simplicity of nature.",

    images: [
      deluxeRoom,
      deluxeBalcony,
      deluxeDetail,
      deluxeBathroom,
      deluxeView,
    ],

    amenities: [
      {
        label: "King Bed",
        icon: "bed",
      },
      {
        label: "Private Balcony",
        icon: "balcony",
      },
      {
        label: "River & Mountain View",
        icon: "view",
      },
      {
        label: "Luxury Bathroom",
        icon: "bath",
      },
      {
        label: "Complimentary Wi-Fi",
        icon: "wifi",
      },
    ],
  },

  {
    id: "family",
    name: "Family Sanctuary",
    eyebrow: "FAMILY SANCTUARY",
    title: "Space to Be Together",
    description:
      "Created for families who value space, comfort and meaningful time together, the Family Sanctuary offers a welcoming escape surrounded by the beauty of the natural landscape. Wake to the peaceful sight of the river and the majestic mountains, and enjoy a setting that brings everyone closer to nature.",

    details:
      "With generous interiors, comfortable sleeping arrangements and thoughtfully considered details, this retreat gives every member of the family room to relax and reconnect. Spend slow mornings taking in the river and mountain views, share unhurried conversations, and return to the comfort of a space designed to make every moment together memorable.",
    images: [
      familyRoom,
      familyBalcony,
      familyDetail,
      familyBathroom,
      familyView,
    ],

    amenities: [
      {
        label: "Two Comfortable Beds",
        icon: "bed",
      },
      {
        label: "Spacious Interior",
        icon: "balcony",
      },
      {
        label: "River & Mountain View",
        icon: "view",
      },
      {
        label: "Luxury Bathroom",
        icon: "bath",
      },
      {
        label: "Complimentary Wi-Fi",
        icon: "wifi",
      },
    ],
  },
];

function AmenityIcon({ type }: { type: AmenityIconType }) {
  const className = "w-[18px] h-[18px] stroke-[1.2]";

  if (type === "bed") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M3 18v-7.5c0-.83.67-1.5 1.5-1.5h15c.83 0 1.5.67 1.5 1.5V18"
          stroke="currentColor"
        />
        <path d="M3 14h18" stroke="currentColor" />
        <path
          d="M5 9V6.5A1.5 1.5 0 0 1 6.5 5h4A1.5 1.5 0 0 1 12 6.5V9"
          stroke="currentColor"
        />
        <path d="M3 18v2M21 18v2" stroke="currentColor" />
      </svg>
    );
  }

  if (type === "balcony") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M4 5h16M5 5v5h14V5M3 10h18" stroke="currentColor" />
        <path d="M6 10v8M10 10v8M14 10v8M18 10v8" stroke="currentColor" />
        <path d="M3 18h18" stroke="currentColor" />
      </svg>
    );
  }

  if (type === "view") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M3 19h18" stroke="currentColor" />
        <path d="M4 18l6-7 3 3 4-6 3 10" stroke="currentColor" />
      </svg>
    );
  }

  if (type === "bath") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M4 12h16v3.5A3.5 3.5 0 0 1 16.5 19h-9A3.5 3.5 0 0 1 4 15.5V12Z"
          stroke="currentColor"
        />
        <path d="M6 12V7a2 2 0 0 1 4 0v1" stroke="currentColor" />
        <path d="M10 8h5" stroke="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 10.5a10 10 0 0 1 16 0" stroke="currentColor" />
      <path d="M7 13.5a6.5 6.5 0 0 1 10 0" stroke="currentColor" />
      <path d="M10 16.5a3 3 0 0 1 4 0" stroke="currentColor" />
      <circle cx="12" cy="20" r="1" fill="currentColor" />
    </svg>
  );
}

function RoomCollection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  // Section reveal
  const [visible, setVisible] = useState(false);
  // Current room
  const [activeStay, setActiveStay] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  // Incoming room during cinematic transition
  const [incomingStay, setIncomingStay] = useState<number | null>(null);
  // Current image inside room
  const [activeImage, setActiveImage] = useState(0);

  // Incoming image during image transition
  const [incomingImage, setIncomingImage] = useState<number | null>(null);
  // ============================================================
  // CHANGE ROOM — CINEMATIC TRANSITION
  // ============================================================

  const changeStay = (nextIndex: number) => {
    if (nextIndex === activeStay || isTransitioning) {
      return;
    }

    setIsTransitioning(true);

    // Put new scene behind the current scene
    setIncomingStay(nextIndex);

    window.setTimeout(() => {
      setActiveStay(nextIndex);

      setActiveImage(0);

      setIncomingStay(null);

      setIsTransitioning(false);
    }, 900);
  };

  // ============================================================
  // CHANGE IMAGE INSIDE SAME ROOM
  // ============================================================

  const changeImage = (nextIndex: number) => {
    if (nextIndex === activeImage || isTransitioning) {
      return;
    }

    setIsTransitioning(true);

    setIncomingImage(nextIndex);

    window.setTimeout(() => {
      setActiveImage(nextIndex);

      setIncomingImage(null);

      setIsTransitioning(false);
    }, 750);
  };

  // ============================================================
  // NEXT / PREVIOUS
  // ============================================================

  const nextStay = () => {
    const next = (activeStay + 1) % stays.length;

    changeStay(next);
  };

  const previousStay = () => {
    const previous = (activeStay - 1 + stays.length) % stays.length;

    changeStay(previous);
  };

  const stay = stays[activeStay];

  const incoming = incomingStay !== null ? stays[incomingStay] : null;

  // ============================================================
  // SECTION INTERSECTION OBSERVER
  // ============================================================

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -12% 0px",
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="stay"
      className={`
        relative
        z-10
        isolate
        overflow-hidden
        bg-[#f2eee3]
        px-5
        pt-5
        pb-12
        sm:px-8
        sm:pt-7
        sm:pb-14
        lg:px-8
        lg:pt-8
        lg:pb-16
        xl:px-12        
        2xl:px-16
        ${visible ? "paciano-about-visible" : ""}
      `}
    >
      {/* Intro */}
      <div className="relative z-10 mx-auto max-w-[1180px] text-center">
        <div>
          {/* Small botanical sprout above OUR STAYS */}
          <div className="paciano-stay-step paciano-stay-step-1 mb-3 flex justify-center">
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
          </div>

          {/* OUR STAYS */}

          <div
            className="
              paciano-stay-step
              paciano-stay-step-3
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <span
              className="
              w-10
              h-px
              bg-[#899475]/45
            "
            />

            <span
              className="
                font-manrope
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.38em]
                text-[#71803F]
              "
            >
              Our Stays
            </span>

            <span
              className="
                w-10
                h-px
                bg-[#899475]/45
              "
            />
          </div>

          {/* MAIN HEADING */}

          <h2
            className="
            paciano-reveal
            paciano-delay-2
            mx-auto
            mt-[16px]
            max-w-[950px]
            text-center
            font-cormorant
            text-[43px]
            leading-[.95]
            tracking-[-.025em]
            text-[#17251B]
            sm:text-[52px]
            lg:text-[60px]
          "
          >
            Where Every Stay,
            <br />
            <span className="italic text-[#789541]">
              Feels Like Home in Nature.
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              paciano-stay-step
              paciano-stay-step-4
              mx-auto
              mt-5
              max-w-[700px]
              px-4
              text-center
              font-manrope
              text-[12px]
              leading-[1.8]
              text-[#657067]
              sm:text-[13px]
              lg:text-[14px]
            "
          >
            Wake to misty mountains, unwind beside the river, and let nature set
            the pace. Our stays are crafted for quiet comfort, generous space
            and a deeper sense of belonging.
          </p>
        </div>
        {/* ======================================================
                PACIANO STAY NAVIGATION
                REFERENCE-MATCHED HORIZONTAL CAPSULE
            ====================================================== */}

        <div
          className={`
              paciano-stay-step
              paciano-stay-step-5
              relative
              mt-10
              sm:mt-11
              lg:mt-12
              w-full
              transition-all
              duration-[1400ms]
              ease-[cubic-bezier(0.16,1,0.3,1)]
              ${
                visible
                  ? "opacity-100 translate-y-0 blur-0"
                  : "opacity-0 translate-y-8"
              }
            `}
        >
          {/* ======================================================
                PACIANO STAYS — TWO SEPARATE EDITORIAL CAPSULES
            ====================================================== */}

          <div
            className={`
              paciano-stay-step
              paciano-stay-step-5
              relative
              mt-10
              sm:mt-11
              lg:mt-12
              w-full
              transition-all
              duration-[1400ms]
              ease-[cubic-bezier(0.16,1,0.3,1)]
              ${
                visible
                  ? "translate-y-0 opacity-100 blur-0"
                  : "translate-y-8 opacity-0 blur-[2px]"
              }
            `}
          >
            <div
              className="
                relative z-20 mx-auto
                flex w-full
                flex-wrap
                items-center
                justify-center
                gap-3
                sm:gap-4
                lg:gap-5
              "
            >
              {[
                {
                  id: "deluxe",
                  name: "Deluxe Rooms",
                  descriptor: "RIVER & MOUNTAINS",
                  icon: "water",
                },
                {
                  id: "family",
                  name: "Family Sanctuary",
                  descriptor: "TOGETHER IN NATURE",
                  icon: "leaf",
                },
              ].map((item, index) => {
                const active = index === activeStay;

                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => {
                      changeStay(index);

                      const target = document.getElementById(
                        `room-section-${item.id}`,
                      );

                      if (target) {
                        const top =
                          target.getBoundingClientRect().top +
                          window.scrollY -
                          110;

                        window.scrollTo({
                          top,
                          behavior: "smooth",
                        });
                      }
                    }}
                    disabled={isTransitioning}
                    aria-pressed={active}
                    style={{
                      transitionDelay: visible
                        ? `${180 + index * 140}ms`
                        : "0ms",
                    }}
                    className={`
                      group
                      relative
                      flex
                      h-[76px]
                      w-full
                      max-w-[310px]
                      sm:w-[275px]
                      sm:max-w-none
                      lg:w-[300px]
                      xl:w-[315px]
                      shrink-0
                      items-center
                      gap-3
                      sm:gap-3.5
                      rounded-full
                      border
                      px-3
                      sm:px-4
                      text-left
                      outline-none
                      transition-all
                      duration-[800ms]
                      ease-[cubic-bezier(0.16,1,0.3,1)]
                      focus-visible:ring-2
                      focus-visible:ring-[#879368]/50
                      disabled:pointer-events-none
                      disabled:opacity-60
                      ${
                        active
                          ? "border-[#586B3B] bg-[#586B3B] text-[#FFFDF4] shadow-[0_8px_24px_rgba(65,83,43,0.22)]"
                          : "border-[#D8D5C9]/80 bg-[#F7F4EB] text-[#344238] hover:border-[#9DA77F] hover:bg-[#EEEFE4] hover:shadow-[0_8px_24px_rgba(65,73,55,0.08)]"
                      }
                    `}
                  >
                    {/* ==========================================
                      CIRCULAR ICON
                      ${
                      active
                        ? "border-[#586B3B] bg-[#586B3B] text-[#FFFDF4] shadow-[0_8px_24px_rgba(65,83,43,0.22)]"
                        : "border-[#D8D5C9]/80 bg-[#F7F4EB] text-[#344238] hover:border-[#9DA77F] hover:bg-[#EEEFE4] hover:shadow-[0_8px_24px_rgba(65,73,55,0.08)]"
                    }
                  ========================================== */}

                    <span
                      className={`
                        relative
                        flex
                        h-[54px]
                        w-[54px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        transition-all
                        duration-[800ms]
                        ease-[cubic-bezier(0.16,1,0.3,1)]

                        ${
                          active
                            ? // ? "border-[#879368]/60 bg-[#879368] text-[#F8F5EA] shadow-[0_0_0_4px_rgba(139,150,107,0.07),0_5px_18px_rgba(86,99,61,0.20)]"
                              // : "border-[#C6C7BC]/80 bg-[#F8F5ED]/70 text-[#7E867A] group-hover:border-[#9DA77F] group-hover:bg-[#E9EAD9] group-hover:text-[#657547]"
                              "border-white/35 bg-[#71864F] text-[#FFFDF4] shadow-[0_0_0_3px_rgba(255,255,255,0.10),0_5px_18px_rgba(0,0,0,0.12)]"
                            : "border-[#C6C7BC]/80 bg-[#F8F5ED]/70 text-[#7E867A] group-hover:border-[#9DA77F] group-hover:bg-[#E9EAD9] group-hover:text-[#657547]"
                        }
                      `}
                    >
                      {/* Double border */}

                      <span
                        className={`
                          pointer-events-none
                          absolute
                          inset-[5px]
                          rounded-full
                          border
                          transition-all
                          duration-700
                          ${
                            active
                              ? "scale-100 border-white/25"
                              : "scale-100 border-[#B8BCAD]/35 group-hover:scale-[0.90] group-hover:border-[#9BA77A]/55"
                          }
                        `}
                      />

                      {/* Water / Nature icon */}

                      <span
                        className={`
                          relative
                          z-10
                          flex
                          items-center
                          justify-center
                          transition-transform
                          duration-700
                          ease-[cubic-bezier(0.16,1,0.3,1)]
                          ${
                            active
                              ? "scale-100"
                              : "scale-95 group-hover:scale-110 group-hover:-translate-y-0.5"
                          }
                        `}
                      >
                        {item.icon === "water" ? (
                          <svg
                            viewBox="0 0 32 32"
                            fill="none"
                            className="h-[25px] w-[25px]"
                            aria-hidden="true"
                          >
                            <path
                              d="M3 11.5C7 7.5 11 7.5 16 11.5C21 15.5 25 15.5 29 11.5"
                              stroke="currentColor"
                              strokeWidth="1.1"
                              strokeLinecap="round"
                            />
                            <path
                              d="M3 17C7 13 11 13 16 17C21 21 25 21 29 17"
                              stroke="currentColor"
                              strokeWidth="1.1"
                              strokeLinecap="round"
                            />
                            <path
                              d="M3 22.5C7 18.5 11 18.5 16 22.5C21 26.5 25 26.5 29 22.5"
                              stroke="currentColor"
                              strokeWidth="1.1"
                              strokeLinecap="round"
                            />
                          </svg>
                        ) : (
                          <svg
                            viewBox="0 0 32 32"
                            fill="none"
                            className="h-[25px] w-[25px]"
                            aria-hidden="true"
                          >
                            <path
                              d="M16 27V12"
                              stroke="currentColor"
                              strokeWidth="1.1"
                              strokeLinecap="round"
                            />
                            <path
                              d="M16 19C10 19 7 15 8 9C13 10 17 13 16 19Z"
                              stroke="currentColor"
                              strokeWidth="1.1"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M16 15C16 9 20 5 26 6C25 12 22 16 16 15Z"
                              stroke="currentColor"
                              strokeWidth="1.1"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 27H20"
                              stroke="currentColor"
                              strokeWidth="1"
                              strokeLinecap="round"
                              opacity=".6"
                            />
                          </svg>
                        )}
                      </span>

                      {/* Soft inner glow */}

                      <span
                        className={`
                          pointer-events-none
                          absolute
                          inset-0
                          rounded-full
                          transition-opacity
                          duration-700
                          ${
                            active
                              ? "opacity-100 shadow-[inset_0_0_12px_rgba(255,255,255,0.12)]"
                              : "opacity-0"
                          }
                        `}
                      />
                    </span>

                    {/* ==========================================
                          ROOM NAME + DESCRIPTOR
                      ========================================== */}

                    <span className="relative flex min-w-0 flex-1 flex-col justify-center gap-[5px]">
                      <span
                        className={`
                          whitespace-nowrap
                          font-cormorant
                          text-[19px]
                          sm:text-[19px]
                          lg:text-[20px]
                          leading-none
                          tracking-[-0.015em]
                          transition-colors
                          duration-700
                          ${
                            active
                              ? // ? "text-[#344238]"
                                // : "text-[#536054] group-hover:text-[#344238]"

                                "text-[#FFFDF4]"
                              : "text-[#536054] group-hover:text-[#344238]"
                          }
                        `}
                      >
                        {item.name}
                      </span>

                      <span
                        className={`
                          whitespace-nowrap
                          font-manrope
                          text-[8px]
                          sm:text-[8px]
                          lg:text-[8.5px]
                          font-semibold
                          uppercase
                          tracking-[0.24em]
                          transition-colors
                          duration-700
                          ${
                            active
                              ? // ? "text-[#84915C]"
                                // : "text-[#81877B] group-hover:text-[#84915C]"
                                "text-[#E0E8CF]"
                              : "text-[#81877B] group-hover:text-[#84915C]"
                          }
                        `}
                      >
                        {item.descriptor}
                      </span>

                      {/* Animated underline */}

                      <span
                        className={`
                          absolute
                          -bottom-[11px]
                          left-0
                          h-[1px]
                          rounded-full
                          bg-[#879368]
                          transition-all
                          duration-[800ms]
                          ease-[cubic-bezier(0.16,1,0.3,1)]
                          ${active ? "w-[38px] opacity-100" : "w-0 opacity-0"}
                        `}
                      />
                    </span>

                    {/* Hover highlight */}

                    <span
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        rounded-full
                        opacity-0
                        transition-opacity
                        duration-700
                        group-hover:opacity-100
                        bg-[linear-gradient(110deg,transparent_20%,rgba(255,255,255,0.35)_50%,transparent_80%)]
                      "
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <RoomDescriptions />
      {/* ========================================================
          ANIMATIONS
          Kept INSIDE component — no separate CSS file.
      ======================================================== */}
      <style>
        {`

                @keyframes roomEnter {

                0% {
                  opacity: 0;
                  transform: scale(1.075);
                  filter: brightness(0.72) saturate(0.88);
                }

                18% {
                  opacity: 0.35;
                }

                55% {
                  opacity: 0.82;
                }

                100% {
                  opacity: 1;
                  transform: scale(1);
                  filter: brightness(1) saturate(1);
                }

              }

                    @keyframes imageEnter {

                0% {
                  opacity: 0;
                  transform: scale(1.065);
                  filter: brightness(0.82);
                }

                35% {
                  opacity: 0.7;
                }

                100% {
                  opacity: 1;
                  transform: scale(1);
                  filter: brightness(1);
                }

              }

                  @keyframes contentEnter {

                0% {
                  opacity: 0;
                  transform: translateY(25px);
                  filter: blur(4px);
                }

                45% {
                  opacity: 0.5;
                  filter: blur(1px);
                }

                100% {
                  opacity: 1;
                  transform: translateY(0);
                  filter: blur(0);
                }

              }
                @keyframes mistReveal {

                0% {
                  opacity: 0;
                  transform: translateY(25px) scale(1.04);
                }

                100% {
                  opacity: 1;
                  transform: translateY(0) scale(1);
                }

              }

                @media (prefers-reduced-motion: reduce) {

                *,
                *::before,
                *::after {
                  animation-duration: 0.01ms !important;
                  animation-iteration-count: 1 !important;
                  transition-duration: 0.01ms !important;
                }

              }

              @keyframes mistDrift {
                0% {
                  transform: scale(1.04) translate3d(-12px, 0, 0);
                }

                50% {
                  transform: scale(1.06) translate3d(0, -3px, 0);
                }

                100% {
                  transform: scale(1.04) translate3d(12px, 0, 0);
                }
              }

              @keyframes signatureFloat {

              0%,
              100% {
                  transform: translateY(0);
              }

              50% {
                  transform: translateY(-5px);
              }

              }

              @keyframes luxuryRoomDrift {

              0% {
                  transform: scale(1);
              }

              100% {
                  transform: scale(1.035);
              }

              }

              @keyframes stayIconFloat {
              0%,
              100% {
                  transform: translateY(0) rotate(0deg);
              }

              50% {
                  transform: translateY(-3px) rotate(1deg);
              }
              }

              @keyframes exploreBreath {
              0%,
              100% {
                  transform: translateY(0);
              }

              50% {
                  transform: translateY(-3px);
              }
              }

              @keyframes collectionFrame {

              0%,
              100% {
                transform: translateY(0);
              }

              50% {
                transform: translateY(-2px);
              }

            }

          /* =====================================================
            UNDERLINE — SLOW BREATHING
          ===================================================== */

          @keyframes collectionLine {

            0%,
            100% {
              width: 52px;
              opacity: 0.55;
            }

            50% {
              width: 72px;
              opacity: 0.9;
            }

          }

          /* =====================================================
            CTA GLINT — VERY SUBTLE
          ===================================================== */

          @keyframes ctaGlint {

            0% {
              transform: translateX(0);
              opacity: 0;
            }

            35% {
              opacity: 0.8;
            }

            100% {
              transform: translateX(26px);
              opacity: 0;
            }

          }

          .paciano-stay-step {
            opacity: 0;
            transform: translateY(42px);
            filter: blur(2px);

            transition:
              opacity 1.35s cubic-bezier(0.16, 1, 0.3, 1),
              transform 1.35s cubic-bezier(0.16, 1, 0.3, 1),
              filter 1.35s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .paciano-about-visible .paciano-stay-step {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }

          /* ------------------------------------------------------------
            STEP TIMING
            ------------------------------------------------------------ */

          .paciano-stay-step-1 {
            transition-delay: 0ms;
          }

          .paciano-stay-step-2 {
            transition-delay: 220ms;
          }

          .paciano-stay-step-3 {
            transition-delay: 460ms;
          }

          .paciano-stay-step-4 {
            transition-delay: 760ms;
          }

          .paciano-stay-step-5 {
            transition-delay: 1250ms;
          }

          .paciano-stay-step-6 {
            transition-delay: 2050ms;
          }

          /* ------------------------------------------------------------
            REDUCED MOTION
            ------------------------------------------------------------ */

          @media (prefers-reduced-motion: reduce) {
            .paciano-stay-step {
              opacity: 1;
              transform: none;
              filter: none;
              transition: none;
            }
          }

          @keyframes roomGalleryEnter {
            from {
              opacity: 0.65;
              transform: scale(1.045);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes lightboxFade {
            from {
              opacity: 0;
              backdrop-filter: blur(0);
            }
            to {
              opacity: 1;
              backdrop-filter: blur(12px);
            }
          }

        `}
      </style>
    </section>
  );
}

{
  /* =========================================================
    PACIANO — ROOM DESCRIPTIONS & PHOTO GALLERIES
========================================================= */
}

function RoomDescriptions() {
  const [galleryIndexes, setGalleryIndexes] = useState<Record<string, number>>(
    {},
  );
  const [lightbox, setLightbox] = useState<{
    stayIndex: number;
    imageIndex: number;
  } | null>(null);

  const [isZoomed, setIsZoomed] = useState(false);

  const getImageIndex = (room: Stay) => galleryIndexes[room.id] ?? 0;

  const changeGalleryImage = (room: Stay, nextIndex: number) => {
    const total = room.images.length;
    if (!total) return;

    setGalleryIndexes((prev) => ({
      ...prev,
      [room.id]: (nextIndex + total) % total,
    }));
  };

  const openLightbox = (stayIndex: number, imageIndex: number) => {
    setIsZoomed(false);
    setLightbox({ stayIndex, imageIndex });
  };

  const closeLightbox = () => {
    setLightbox(null);
    setIsZoomed(false);
  };

  const changeLightboxImage = (direction: number) => {
    setIsZoomed(false);

    setLightbox((prev) => {
      if (!prev) return null;

      const room = stays[prev.stayIndex];

      return {
        ...prev,
        imageIndex:
          (prev.imageIndex + direction + room.images.length) %
          room.images.length,
      };
    });
  };

  const lightboxRoom = lightbox !== null ? stays[lightbox.stayIndex] : null;

  useEffect(() => {
    if (!lightbox) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowRight") {
        setIsZoomed(false);
        setLightbox((prev) => {
          if (!prev) return null;
          const room = stays[prev.stayIndex];

          return {
            ...prev,
            imageIndex: (prev.imageIndex + 1) % room.images.length,
          };
        });
      }

      if (event.key === "ArrowLeft") {
        setIsZoomed(false);
        setLightbox((prev) => {
          if (!prev) return null;
          const room = stays[prev.stayIndex];

          return {
            ...prev,
            imageIndex:
              (prev.imageIndex - 1 + room.images.length) % room.images.length,
          };
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  const thumbnailTrackRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const scrollThumbnails = (roomId: string, direction: number) => {
    const track = thumbnailTrackRefs.current[roomId];

    track?.scrollBy({
      left: direction * track.clientWidth * 0.75,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section
        className="
          relative
          mx-auto
          mt-8
          w-full
          max-w-[1500px]
          sm:mt-10
          lg:mt-12
        "
      >
        <div className="flex flex-col gap-10 sm:gap-14 lg:gap-[76px]">
          {stays.map((room, roomIndex) => {
            const imageIndex = getImageIndex(room);
            const currentImage = room.images[imageIndex];
            const isFirst = roomIndex === 0;

            return (
              <article
                key={room.id}
                id={`room-section-${room.id}`}
                // className="
                //   grid
                //   grid-cols-1
                //   items-center
                //   gap-7
                //   sm:gap-9
                //   lg:grid-cols-2
                //   lg:gap-8
                //   xl:gap-12
                //   [@media(orientation:landscape)_and_(max-height:500px)]:grid-cols-[1.05fr_0.95fr]
                //   [@media(orientation:landscape)_and_(max-height:500px)]:gap-5
                // "
                className={`
                  scroll-mt-24
                  sm:scroll-mt-28
                  lg:scroll-mt-32
                  grid
                  grid-cols-1
                  items-start
                  gap-7
                  sm:gap-9
                  lg:gap-9
                  xl:gap-12

                  ${
                    isFirst
                      ? "lg:grid-cols-[1.12fr_0.88fr]"
                      : "lg:grid-cols-[0.88fr_1.12fr]"
                  }

                  [@media(orientation:landscape)_and_(max-height:500px)]:gap-5
                `}
              >
                {/* =========================================
                    ROOM PHOTO GALLERY
                ========================================= */}

                <div
                  // className={`
                  //   relative
                  //   min-w-0
                  //   w-full
                  //   lg:-ml-2
                  //   xl:-ml-4
                  //   2xl:-ml-5
                  //   ${isFirst ? "order-1" : "order-1 lg:order-2"}
                  // `}
                  className={`
                    relative
                    min-w-0
                    w-full
                    ${
                      isFirst
                        ? "lg:-ml-8 xl:-ml-12 2xl:-ml-16 lg:w-[calc(100%+2rem)] xl:w-[calc(100%+3rem)] 2xl:w-[calc(100%+4rem)]"
                        : "lg:ml-0"
                    }
                    ${isFirst ? "order-1" : "order-1 lg:order-2"}
                  `}
                >
                  {/* Main photograph */}

                  <div
                    className="
                      group
                      relative
                      aspect-[1.48/1]
                      w-full
                      overflow-hidden
                      rounded-[15px]
                      sm:rounded-[19px]
                      lg:rounded-[16px]
                      xl:rounded-[19px]
                      bg-[#DED8C9]
                      shadow-[0_14px_40px_rgba(54,57,44,0.10)]
                    "
                  >
                    <button
                      type="button"
                      onClick={() => openLightbox(roomIndex, imageIndex)}
                      aria-label={`Enlarge ${room.name} photograph`}
                      className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        cursor-zoom-in
                        overflow-hidden
                        outline-none
                      "
                    >
                      <img
                        key={currentImage}
                        src={currentImage}
                        alt={`${room.name} - photograph ${imageIndex + 1}`}
                        className="
                          h-full
                          w-full
                          object-cover
                          object-center
                          transition-transform
                          duration-[1100ms]
                          ease-[cubic-bezier(0.16,1,0.3,1)]
                          group-hover:scale-[1.045]
                          animate-[roomGalleryEnter_800ms_ease-out]
                        "
                      />

                      {/* Subtle image overlay */}

                      <span
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-black/20
                          via-transparent
                          to-black/5
                          opacity-70
                          transition-opacity
                          duration-700
                          group-hover:opacity-100
                        "
                      />

                      {/* Zoom hint */}

                      <span
                        className="
                          absolute
                          right-4
                          top-4
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/50
                          bg-black/20
                          text-white
                          opacity-0
                          backdrop-blur-sm
                          transition-all
                          duration-500
                          group-hover:opacity-100
                        "
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.4"
                        >
                          <circle cx="10.5" cy="10.5" r="6.5" />
                          <path d="M16 16l5 5M10.5 7v7M7 10.5h7" />
                        </svg>
                      </span>
                    </button>

                    {/* Previous photo */}

                    <button
                      type="button"
                      onClick={() => changeGalleryImage(room, imageIndex - 1)}
                      aria-label="Previous photograph"
                      className="
                        absolute
                        left-3
                        top-1/2
                        z-10
                        flex
                        h-9
                        w-9
                        -translate-y-1/2
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#F5F1E8]/70
                        bg-[#F8F5ED]/90
                        text-[#344238]
                        shadow-md
                        backdrop-blur-sm
                        transition-all
                        duration-500
                        hover:scale-110
                        hover:bg-white
                      "
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                    </button>

                    {/* Next photo */}

                    <button
                      type="button"
                      onClick={() => changeGalleryImage(room, imageIndex + 1)}
                      aria-label="Next photograph"
                      className="
                        absolute
                        right-3
                        top-1/2
                        z-10
                        flex
                        h-9
                        w-9
                        -translate-y-1/2
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#F5F1E8]/70
                        bg-[#F8F5ED]/90
                        text-[#344238]
                        shadow-md
                        backdrop-blur-sm
                        transition-all
                        duration-500
                        hover:scale-110
                        hover:bg-white
                      "
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </button>
                  </div>

                  {/* =====================================
                      THUMBNAIL STRIP
                  ===================================== */}

                  {/* <div
                    className="
                      relative
                      z-10
                      -mt-4
                      flex
                      items-center
                      justify-center
                      gap-2
                      px-3
                      sm:justify-start
                      sm:pl-5
                    "
                  >
                    {room.images.map((image, photoIndex) => {
                      const selected = photoIndex === imageIndex;

                      return (
                        <button
                          key={`${room.id}-${photoIndex}`}
                          type="button"
                          onClick={() => changeGalleryImage(room, photoIndex)}
                          aria-label={`View photograph ${photoIndex + 1}`}
                          aria-pressed={selected}
                          className={`
                            relative
                            h-[48px]
                            w-[64px]
                            shrink-0
                            overflow-hidden
                            rounded-[8px]
                            border-[2px]
                            bg-[#F5F0E5]
                            shadow-[0_4px_12px_rgba(35,40,30,0.15)]
                            transition-all
                            duration-500
                            sm:h-[57px]
                            sm:w-[76px]
                            lg:h-[53px]
                            lg:w-[70px]
                            xl:h-[58px]
                            xl:w-[80px]
                            ${
                              selected
                                ? "border-[#879368] -translate-y-1"
                                : "border-[#F7F3E9] opacity-80 hover:opacity-100 hover:-translate-y-1"
                            }
                          `}
                        >
                          <img
                            src={image}
                            alt=""
                            className="
                              h-full
                              w-full
                              object-cover
                              transition-transform
                              duration-700
                              hover:scale-110
                            "
                          />
                        </button>
                      );
                    })}
                  </div> */}

                  {/* =====================================
                          ROOM THUMBNAIL CAROUSEL
                      ===================================== */}

                  <div className="relative z-10 -mt-4 flex min-w-0 items-center gap-2 px-1 sm:gap-3 sm:pl-3">
                    {/* Previous thumbnails */}
                    <button
                      type="button"
                      onClick={() => scrollThumbnails(room.id, -1)}
                      aria-label="Previous thumbnails"
                      className="
                        flex h-8 w-8 shrink-0 items-center justify-center
                        rounded-full border border-[#D9D5C8]
                        bg-[#F8F5ED] text-[#53604F]
                        transition-all duration-500
                        hover:bg-[#71864F] hover:text-white
                        sm:h-9 sm:w-9
                      "
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                    </button>

                    {/* Scrollable thumbnail track */}
                    <div
                      ref={(element) => {
                        thumbnailTrackRefs.current[room.id] = element;
                      }}
                      className="
                        flex min-w-0 flex-1 items-center
                        gap-2
                        overflow-x-auto
                        scroll-smooth
                        snap-x snap-mandatory
                        py-2
                        [scrollbar-width:none]
                        [&::-webkit-scrollbar]:hidden
                      "
                    >
                      {room.images.map((image, photoIndex) => {
                        const selected = photoIndex === imageIndex;

                        return (
                          <button
                            key={`${room.id}-${photoIndex}`}
                            type="button"
                            onClick={() => changeGalleryImage(room, photoIndex)}
                            aria-label={`View photograph ${photoIndex + 1}`}
                            aria-pressed={selected}
                            style={{
                              flex: "0 0 calc((100% - 32px) / 5)",
                            }}
                            className={`
                              relative
                              min-w-0
                              h-[62px]
                              shrink-0
                              snap-start
                              overflow-hidden
                              rounded-[9px]
                              border-2
                              bg-[#F5F0E5]
                              shadow-[0_4px_12px_rgba(35,40,30,0.15)]
                              transition-all
                              duration-500

                              sm:h-[68px]
                              md:h-[72px]
                              lg:h-[76px]
                              xl:h-[80px]

                              ${
                                selected
                                  ? "border-[#879368] -translate-y-1 opacity-100"
                                  : "border-[#F7F3E9] opacity-90 hover:opacity-100 hover:-translate-y-1"
                              }
                            `}
                          >
                            <img
                              src={image}
                              alt={`${room.name} thumbnail ${photoIndex + 1}`}
                              className="
                                h-full w-full object-cover
                                transition-transform duration-700
                                hover:scale-110
                              "
                            />
                          </button>
                        );
                      })}
                    </div>

                    {/* Next thumbnails */}
                    <button
                      type="button"
                      onClick={() => scrollThumbnails(room.id, 1)}
                      aria-label="Next thumbnails"
                      className="
      flex h-8 w-8 shrink-0 items-center justify-center
      rounded-full border border-[#D9D5C8]
      bg-[#F8F5ED] text-[#53604F]
      transition-all duration-500
      hover:bg-[#71864F] hover:text-white
      sm:h-9 sm:w-9
    "
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </button>
                  </div>

                  {/* Image count */}

                  <div
                    className="
                      mt-3
                      flex
                      items-center
                      justify-center
                      gap-2
                      text-[9px]
                      tracking-[0.22em]
                      text-[#79816E]
                      sm:justify-end
                    "
                  >
                    <span>{String(imageIndex + 1).padStart(2, "0")}</span>

                    <span className="h-px w-7 bg-[#A8AD98]" />

                    <span>{String(room.images.length).padStart(2, "0")}</span>
                  </div>
                </div>

                {/* =========================================
                    ROOM DESCRIPTION
                ========================================= */}

                {/* =========================================
    ROOM DESCRIPTION — LUXURY EDITORIAL PANEL
========================================= */}

                <div
                  key={room.id}
                  className={`
    flex
    min-w-0
    flex-col
    justify-center
    ${
      isFirst
        ? "order-2 lg:order-2 lg:pl-2 xl:pl-5"
        : "order-2 lg:order-1 lg:pr-2 xl:pr-5"
    }
  `}
                >
                  {/* COLLECTION LABEL */}
                  {/* <div className="paciano-stay-step paciano-stay-step-1 mb-3 flex items-center gap-3">
                    <span
                      className="
                      font-manrope
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.30em]
                      text-[#75834D]
                      sm:text-[10px]
                    "
                    >
                      {isFirst ? "Riverside Collection" : "Family Collection"}
                    </span>

                    <span className="h-px w-12 bg-[#AEB69B]" />
                  </div> */}

                  {/* ROOM NAME */}
                  <h3
                    className="
                      paciano-stay-step
                      paciano-stay-step-2
                      font-cormorant
                      text-[38px]
                      leading-[1]
                      tracking-[-0.025em]
                      text-[#1D2B22]
                      sm:text-[45px]
                      lg:text-[clamp(36px,3vw,44px)]
                      xl:text-[46px]
                      2xl:text-[50px]
                    "
                  >
                    {room.name}
                  </h3>

                  {/* ROOM TAGLINE */}
                  <p
                    className="
                      paciano-stay-step
                      paciano-stay-step-3
                      mt-2
                      font-cormorant
                      text-[21px]
                      italic
                      leading-snug
                      text-[#789541]
                      sm:text-[24px]
                      lg:text-[21px]
                      xl:text-[25px]
                    "
                  >
                    {room.title}
                  </p>

                  {/* DESCRIPTION */}
                  <div
                    className="
                    paciano-stay-step
                    paciano-stay-step-4
                    mt-5
                    space-y-3
                    font-manrope
                    text-[12px]
                    leading-[1.85]
                    text-[#626B61]
                    sm:mt-6
                    sm:text-[13px]
                    lg:mt-5
                    lg:text-[11px]
                    xl:text-[12px]
                    2xl:text-[15px]
                    [@media(orientation:landscape)_and_(max-height:500px)]:mt-3
                    [@media(orientation:landscape)_and_(max-height:500px)]:space-y-2
                  "
                  >
                    <p>{room.description}</p>

                    <p>{room.details}</p>
                  </div>

                  {/* AMENITIES */}
                  <div
                    className="
      paciano-stay-step
      paciano-stay-step-5
      mt-6
      border-y
      border-[#D9D5C8]
      py-3
      sm:mt-7
      lg:mt-5
      xl:mt-6
      [@media(orientation:landscape)_and_(max-height:500px)]:mt-3
      [@media(orientation:landscape)_and_(max-height:500px)]:py-2
    "
                  >
                    <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5">
                      {room.amenities.map((amenity, index) => (
                        <div
                          key={amenity.label}
                          className={`
            flex
            min-w-0
            flex-col
            items-center
            justify-center
            gap-2
            px-2
            py-3
            text-center
            transition-colors
            duration-500
            hover:text-[#71864F]

            ${index % 2 === 0 ? "border-r border-[#D9D5C8]" : ""}

            ${index < 4 ? "border-b border-[#D9D5C8] sm:border-b-0" : ""}

            sm:border-r
            sm:last:border-r-0
            xl:border-b-0
            xl:border-r
            xl:last:border-r-0
          `}
                        >
                          <span className="flex h-5 items-center justify-center text-[#71864F]">
                            <AmenityIcon type={amenity.icon} />
                          </span>

                          <span
                            className="
              max-w-[105px]
              font-manrope
              text-[9px]
              leading-[1.5]
              text-[#596456]
              sm:text-[10px]
              lg:text-[9px]
              xl:text-[9px]
              2xl:text-[10px]
            "
                          >
                            {amenity.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CLOSING EDITORIAL STATEMENT */}
                  <div
                    className="
      paciano-stay-step
      paciano-stay-step-6
      mt-5
      flex
      items-center
      gap-3
      sm:mt-6
      lg:mt-5
      xl:mt-6
      [@media(orientation:landscape)_and_(max-height:500px)]:mt-3
    "
                  >
                    <svg
                      viewBox="0 0 40 48"
                      fill="none"
                      className="h-10 w-8 shrink-0 text-[#82916B]"
                    >
                      <path
                        d="M20 44C20 29 17 15 7 4"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M19 29C8 28 4 21 5 14C14 15 19 21 19 29Z"
                        stroke="currentColor"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M19 20C20 11 26 5 35 6C34 15 28 20 19 20Z"
                        stroke="currentColor"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M20 43C23 32 29 27 37 26C37 36 30 42 20 43Z"
                        stroke="currentColor"
                        strokeWidth="1.2"
                      />
                    </svg>

                    <div className="min-w-0 border-l border-[#D9D5C8] pl-4">
                      <p
                        className="
          font-manrope
          text-[8px]
          font-semibold
          uppercase
          tracking-[0.22em]
          text-[#7C875B]
          sm:text-[9px]
        "
                      >
                        {isFirst
                          ? "A retreat beside the river"
                          : "Together, surrounded by nature"}
                      </p>

                      <p
                        className="
          mt-1
          font-cormorant
          text-[18px]
          italic
          leading-snug
          text-[#465747]
          sm:text-[20px]
          lg:text-[17px]
          xl:text-[20px]
        "
                      >
                        {isFirst
                          ? "Where river views meet mountain serenity."
                          : "More space to share, more moments to remember."}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          FULL-SCREEN IMAGE VIEWER
      ===================================================== */}

      {lightbox &&
        lightboxRoom &&
        createPortal(
          <div
            className="
        fixed
        inset-0
        z-[9999]
        flex
        h-[100dvh]
        w-screen
        items-center
        justify-center
        overflow-hidden
        bg-[#111710]/95
        p-3
        backdrop-blur-md
        animate-[lightboxFade_350ms_ease-out]
        sm:p-6
      "
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={`${lightboxRoom.name} photo gallery`}
          >
            {/* Close button */}

            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close image viewer"
              className="
              absolute
              right-4
              top-4
              z-30
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/30
              text-white
              transition-all
              duration-500
              hover:rotate-90
              hover:bg-white/15
              sm:right-7
              sm:top-7
            "
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Room name */}

            <div
              className="
              absolute
              left-5
              top-5
              text-white
              sm:left-8
              sm:top-8
            "
            >
              <p className="font-manrope text-[9px] uppercase tracking-[0.3em] text-white/55">
                PACIANO STAYS
              </p>

              <p className="mt-1 font-cormorant text-xl sm:text-2xl">
                {lightboxRoom.name}
              </p>
            </div>

            {/* Main enlarged photograph */}

            <div
              className="
                relative
                flex
                h-full
                min-h-0
                w-full
                max-w-[1500px]
                items-center
                justify-center
                overflow-hidden
                px-1
                pt-16
                pb-20
                sm:px-10
                sm:pt-20
                sm:pb-24
                [@media(orientation:landscape)_and_(max-height:500px)]:pt-10
                [@media(orientation:landscape)_and_(max-height:500px)]:pb-14
              "
              onClick={(event) => event.stopPropagation()}
            >
              <img
                key={`${lightbox.stayIndex}-${lightbox.imageIndex}`}
                src={lightboxRoom.images[lightbox.imageIndex]}
                alt={`${lightboxRoom.name} enlarged view`}
                onClick={() => setIsZoomed((prev) => !prev)}
                className={`
                  h-auto
                  w-auto
                  max-h-full
                  max-w-full
                  object-contain
                  cursor-zoom-in
                  transition-transform
                  duration-700
                  ease-[cubic-bezier(0.16,1,0.3,1)]
                  rounded-[22px]
                  ${isZoomed ? "scale-[1.7] cursor-zoom-out" : "scale-100"}
                `}
              />

              {/* Previous */}

              <button
                type="button"
                aria-label="Previous enlarged photograph"
                onClick={() => {
                  setIsZoomed(false);
                  changeLightboxImage(-1);
                }}
                className="
                absolute
                left-0
                top-1/2
                flex
                h-10
                w-10
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-white/35
                bg-black/20
                text-white
                backdrop-blur-sm
                transition-all
                hover:bg-white/20
                sm:left-3
                sm:h-12
                sm:w-12
              "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              {/* Next */}

              <button
                type="button"
                aria-label="Next enlarged photograph"
                onClick={() => {
                  setIsZoomed(false);
                  changeLightboxImage(1);
                }}
                className="
                absolute
                right-0
                top-1/2
                flex
                h-10
                w-10
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-white/35
                bg-black/20
                text-white
                backdrop-blur-sm
                transition-all
                hover:bg-white/20
                sm:right-3
                sm:h-12
                sm:w-12
              "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>

            {/* Image thumbnails + count */}

            <div
              className="
              absolute
              bottom-4
              left-1/2
              flex
              -translate-x-1/2
              items-center
              gap-2
              sm:bottom-6
            "
              onClick={(event) => event.stopPropagation()}
            >
              {lightboxRoom.images.map((image, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => {
                    setIsZoomed(false);
                    setLightbox((prev) =>
                      prev ? { ...prev, imageIndex: index } : null,
                    );
                  }}
                  className={`
                  h-9
                  w-12
                  overflow-hidden
                  rounded
                  border-2
                  transition-all
                  duration-500
                  sm:h-12
                  sm:w-16
                  ${
                    index === lightbox.imageIndex
                      ? "border-[#C1D09A] opacity-100"
                      : "border-white/20 opacity-50 hover:opacity-100"
                  }
                `}
                >
                  <img
                    src={image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>,
          document.body,
        )}
    </>
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
        <RoomCollection />
        {/* onSelect={selectRoom}<StayPhotoBridge src={heroBannerAlt} bottomFade="#f2efe6" /> */}
        {/* <FeaturedRoom key={featuredRoom.title} room={featuredRoom} /> */}
        {/* <MistSectionBridge /> */}
        {/* <StayFeatures /> */}
        {/* <DayAtPaciano /> */}
        {/* <StayPhotoBridge src={slowDaysMoments} topFade="#eeeee5" /> */}
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
