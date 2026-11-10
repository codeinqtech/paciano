import { useEffect, useMemo, useRef, useState } from "react";

import riversideRoom from "@/images/river-side-room.png";
import riversideBalcony from "@/images/river-side-room.png";
import riversideDetail from "@/images/river-view.png";

import gardenRoom from "@/images/garden-view.png";
import gardenView from "@/images/garden-room.png";
import gardenBalcony from "@/images/room2.png";

import familyRoom from "@/images/family-room.png";
import familyRoomTwo from "@/images/room1.png";
import familyView from "@/images/home-room-1.webp";
import mistMountains from "@/images/paciano-mist-mountains.png";
import leafCta from "@/images/leaf-cta.png";
import belowleafCta from "@/images/paciano-leaf-transparent.png";

// ============================================================
// TYPES
// ============================================================

type AmenityIconType = "bed" | "balcony" | "view" | "bath" | "wifi";

type Stay = {
  id: string;
  name: string;
  eyebrow: string;
  title: string;
  description: string;

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
    eyebrow: "RIVERSIDE SUITE",
    title: "Wake to Tranquility",
    description:
      "Wake to the gentle rhythm of the river, framed by mountains and softened by the quiet of nature.",

    images: [riversideRoom, riversideBalcony, riversideDetail],

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

  // {
  //   id: "garden",
  //   name: "Garden Residence",
  //   eyebrow: "GARDEN RESIDENCE",
  //   title: "Wake Among Greenery",
  //   description:
  //     "A peaceful retreat overlooking Paciano's gardens, where quiet mornings unfold beneath open skies and surrounding greenery.",

  //   images: [gardenRoom, gardenView, gardenBalcony],

  //   amenities: [
  //     {
  //       label: "King Bed",
  //       icon: "bed",
  //     },
  //     {
  //       label: "Garden Outlook",
  //       icon: "view",
  //     },
  //     {
  //       label: "Private Sitting Area",
  //       icon: "balcony",
  //     },
  //     {
  //       label: "Luxury Bathroom",
  //       icon: "bath",
  //     },
  //     {
  //       label: "Complimentary Wi-Fi",
  //       icon: "wifi",
  //     },
  //   ],
  // },

  // {
  //   id: "valley",
  //   name: "Valley Retreat",
  //   eyebrow: "VALLEY RETREAT",
  //   title: "Closer to the Wild",
  //   description:
  //     "A quiet escape where mountain views stretch beyond the room and every morning begins a little slower.",
  //   images: [riversideRoom, riversideDetail, riversideBalcony],
  //   amenities: [
  //     {
  //       label: "King Bed",
  //       icon: "bed",
  //     },
  //     {
  //       label: "Private Balcony",
  //       icon: "balcony",
  //     },
  //     {
  //       label: "Valley View",
  //       icon: "view",
  //     },
  //     {
  //       label: "Luxury Bathroom",
  //       icon: "bath",
  //     },
  //     {
  //       label: "Complimentary Wi-Fi",
  //       icon: "wifi",
  //     },
  //   ],
  // },

  {
    id: "family",
    name: "Family Sanctuary",
    eyebrow: "FAMILY SANCTUARY",
    title: "Space to Be Together",
    description:
      "Thoughtfully arranged for families, with generous space to slow down, reconnect and enjoy the landscape together.",

    images: [familyRoom, familyRoomTwo, familyView],

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
        label: "Nature View",
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

// ============================================================
// AMENITY ICON
// ============================================================

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

// ============================================================
// COMPONENT
// ============================================================

export default function Accommodation() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const landscapeRef = useRef<HTMLDivElement | null>(null);
  const landscapeLeafRef = useRef<HTMLImageElement | null>(null);
  const landscapeMountainsRef = useRef<HTMLImageElement | null>(null);
  const landscapeSignatureRef = useRef<HTMLDivElement | null>(null);

  // Current room
  const [activeStay, setActiveStay] = useState(0);

  // Current image inside room
  const [activeImage, setActiveImage] = useState(0);

  // Incoming room during cinematic transition
  const [incomingStay, setIncomingStay] = useState<number | null>(null);

  // Incoming image during image transition
  const [incomingImage, setIncomingImage] = useState<number | null>(null);

  // Section reveal
  const [visible, setVisible] = useState(false);

  const [signatureVisible, setSignatureVisible] = useState(false);

  // Prevent multiple clicks during transition
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const signature = landscapeSignatureRef.current;
    if (!signature) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setSignatureVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -12% 0px",
      },
    );

    observer.observe(signature);

    return () => observer.disconnect();
  }, []);

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
  // ============================================================
  // CINEMATIC LANDSCAPE SCROLL PARALLAX
  // ============================================================

  useEffect(() => {
    const section = sectionRef.current;
    const landscape = landscapeRef.current;

    if (!section || !landscape) return;

    let ticking = false;

    const updateLandscape = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      /*
      Progress:
      0 = section is entering viewport
      1 = section has moved through viewport
    */

      const progress = Math.max(
        0,
        Math.min(
          1,
          (viewportHeight - rect.top) / (viewportHeight + rect.height * 0.35),
        ),
      );

      /*
      Very restrained movement.

      The purpose is NOT to look like a parallax website.
      It should feel like the landscape is breathing.
    */

      const mountainY = -progress * 18;
      const mountainX = Math.sin(progress * Math.PI * 2) * 10;

      const leafY = progress * 24;
      const leafX = -progress * 12;

      const signatureY = progress * -8;

      landscape.style.setProperty("--mountain-y", `${mountainY}px`);

      landscape.style.setProperty("--mountain-x", `${mountainX}px`);

      landscape.style.setProperty("--leaf-y", `${leafY}px`);

      landscape.style.setProperty("--leaf-x", `${leafX}px`);

      landscape.style.setProperty("--signature-y", `${signatureY}px`);

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateLandscape);
        ticking = true;
      }
    };

    updateLandscape();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    window.addEventListener("resize", updateLandscape);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateLandscape);
    };
  }, []);
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

    /*
      Animation sequence:

      0ms
      Current image visible
      New image enlarged + invisible

      ~80ms
      New image starts appearing

      850ms
      New image becomes the official scene
    */

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
  // RENDER
  // ============================================================

  return (
    <section
      ref={sectionRef}
      id="stay"
      className={`relative overflow-hidden bg-[#f2eee3] px-5 py-15 sm:px-8 lg:px-14 xl:px-20 ${
        visible ? "paciano-about-visible" : ""
      }`}
    >
      {/* Organic botanical background */}
      <svg
        className="pointer-events-none absolute -right-20 top-8 h-[360px] w-[300px] opacity-[0.16]"
        viewBox="0 0 300 360"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M258 12C229 86 220 155 237 214C248 253 264 300 277 348"
          stroke="#74844a"
          strokeWidth="1"
        />
        <path
          d="M231 91C196 67 171 72 153 103C187 113 213 108 231 91Z"
          fill="#8b9865"
        />
        <path
          d="M226 145C260 116 284 121 297 150C271 165 247 164 226 145Z"
          fill="#8b9865"
        />
        <path
          d="M231 204C195 181 170 187 153 216C185 229 214 222 231 204Z"
          fill="#8b9865"
        />
      </svg>

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

        {/* <div
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
        > */}
        <div
          className={`
            paciano-stay-step
            paciano-stay-step-5
            relative
            mx-auto
            mt-8
            w-fit
            max-w-full
            transition-all
            duration-[1200ms]
            ease-[cubic-bezier(0.16,1,0.3,1)]
            ${
              visible
                ? "translate-y-0 opacity-100 blur-0"
                : "translate-y-6 opacity-0 blur-[2px]"
            }
          `}
        >
          {/* SINGLE COMPACT CAPSULE */}
          <div
            className="
              relative
              flex
              w-full
              flex-col
              overflow-visible
              rounded-[24px]
              border
              border-[#C9C8BC]/75
              bg-[#F7F3E9]/95
              shadow-[0_10px_32px_rgba(65,73,55,0.065)]
              backdrop-blur-[8px]
              sm:flex-row
              sm:items-center
              sm:rounded-full
              sm:px-3
              lg:px-5
            "
          >
            {/* INNER BORDER */}
            <div
              aria-hidden="true"
              className="
              pointer-events-none
              absolute
              inset-[1px]
              rounded-[23px]
              border
              border-white/50
              sm:rounded-full
            "
            />

            {/* TWO ACCOMMODATION OPTIONS */}
            <div
              className="
                relative
                z-10
                grid
                min-w-0
                flex-1
                grid-cols-2
                px-1
                py-2
                sm:py-0
              "
            >
              {stays.slice(0, 2).map((item, index) => {
                const active = index === activeStay;

                const descriptors = ["RIVER & MOUNTAINS", "RIVER & MOUNTAINS"];

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => changeStay(index)}
                    disabled={isTransitioning}
                    aria-label={`View ${item.name}`}
                    aria-pressed={active}
                    className="
              group
              relative
              flex
              min-w-0
              items-center
              justify-center
              gap-1.5
              rounded-full
              px-1
              py-2
              outline-none
              transition-all
              duration-700
              ease-[cubic-bezier(0.16,1,0.3,1)]
              focus-visible:ring-2
              focus-visible:ring-[#879368]
              focus-visible:ring-offset-2
              disabled:pointer-events-none
              disabled:opacity-60
              sm:min-h-[82px]
              sm:gap-2
              sm:px-2
              md:gap-3
              md:px-3
              lg:gap-3.5
              lg:px-4
            "
                  >
                    {/* ICON */}
                    <span
                      className={`
                relative
                flex
                h-[36px]
                w-[36px]
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                transition-all
                duration-700
                sm:h-[42px]
                sm:w-[42px]
                lg:h-[48px]
                lg:w-[48px]
                ${
                  active
                    ? "border-[#879368]/55 bg-[#879368] text-[#F8F5EA] shadow-[0_4px_16px_rgba(86,99,61,0.18)]"
                    : "border-[#C6C7BC]/80 bg-[#F8F5ED]/55 text-[#7E867A] group-hover:border-[#9DA77F]/80 group-hover:bg-[#E9EAD9] group-hover:text-[#657547]"
                }
              `}
                    >
                      <span
                        aria-hidden="true"
                        className={`
                  pointer-events-none
                  absolute
                  inset-[4px]
                  rounded-full
                  border
                  transition-colors
                  duration-500
                  ${active ? "border-white/20" : "border-[#B8BCAD]/30"}
                `}
                      />

                      {/* RIVERSIDE WATER ICON */}
                      {index === 0 && (
                        <svg
                          viewBox="0 0 44 34"
                          fill="none"
                          aria-hidden="true"
                          className="
                    relative
                    z-10
                    h-[21px]
                    w-[26px]
                    transition-transform
                    duration-700
                    group-hover:scale-110
                    sm:h-[23px]
                    sm:w-[29px]
                  "
                        >
                          <path
                            d="M3 10 C9 5 15 5 21 10 C27 15 33 15 41 9"
                            stroke="currentColor"
                            strokeWidth="1.15"
                          />
                          <path
                            d="M3 16 C9 11 15 11 21 16 C27 21 34 21 41 15"
                            stroke="currentColor"
                            strokeWidth="1"
                            opacity=".68"
                          />
                          <path
                            d="M7 23 C13 19 19 19 24 23 C29 27 35 27 39 24"
                            stroke="currentColor"
                            strokeWidth=".75"
                            opacity=".42"
                          />
                        </svg>
                      )}

                      {/* FAMILY BOTANICAL ICON */}
                      {index === 1 && (
                        <svg
                          viewBox="0 0 44 34"
                          fill="none"
                          aria-hidden="true"
                          className="
                    relative
                    z-10
                    h-[22px]
                    w-[25px]
                    origin-bottom
                    transition-transform
                    duration-700
                    group-hover:-rotate-3
                    sm:h-[24px]
                    sm:w-[27px]
                  "
                        >
                          <path
                            d="M21 29 C21 22 21 15 24 5"
                            stroke="currentColor"
                            strokeWidth="1.1"
                          />
                          <path
                            d="M22 20 C16 19 12 15 12 10 C18 10 22 13 22 20Z"
                            stroke="currentColor"
                            strokeWidth="1.1"
                          />
                          <path
                            d="M23 14 C24 9 28 6 33 7 C31 12 28 15 23 15Z"
                            stroke="currentColor"
                            strokeWidth="1.1"
                            opacity=".75"
                          />
                        </svg>
                      )}
                    </span>

                    {/* NAME + DESCRIPTOR */}
                    <span className="flex min-w-0 flex-col items-start justify-center text-left">
                      <span
                        className={`
                  whitespace-nowrap
                  font-cormorant
                  text-[14px]
                  font-medium
                  leading-none
                  transition-colors
                  duration-500
                  sm:text-[17px]
                  md:text-[19px]
                  lg:text-[21px]
                  ${
                    active
                      ? "text-[#1F3026]"
                      : "text-[#3A4840] group-hover:text-[#26382D]"
                  }
                `}
                      >
                        {item.name}
                      </span>

                      <span
                        className={`
                  mt-[5px]
                  whitespace-nowrap
                  font-manrope
                  text-[6px]
                  font-medium
                  uppercase
                  tracking-[0.10em]
                  transition-colors
                  duration-500
                  sm:text-[7px]
                  sm:tracking-[0.18em]
                  lg:text-[9px]
                  lg:tracking-[0.25em]
                  ${
                    active
                      ? "text-[#718043]"
                      : "text-[#657067] group-hover:text-[#78855F]"
                  }
                `}
                      >
                        {descriptors[index]}
                      </span>
                    </span>

                    {/* ACTIVE UNDERLINE */}
                    <span
                      aria-hidden="true"
                      className={`
                pointer-events-none
                absolute
                bottom-[2px]
                left-1/2
                h-px
                w-[75%]
                -translate-x-1/2
                origin-center
                bg-gradient-to-r
                from-transparent
                via-[#71833F]
                to-transparent
                transition-all
                duration-700
                sm:bottom-[10px]
                ${
                  active
                    ? "scale-x-100 opacity-100"
                    : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                }
              `}
                    >
                      <span
                        className={`
                  absolute
                  left-1/2
                  top-1/2
                  h-[4px]
                  w-[4px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#71833F]
                  transition-all
                  duration-500
                  ${active ? "scale-100 opacity-100" : "scale-0 opacity-0"}
                `}
                      />
                    </span>
                  </button>
                );
              })}
            </div>

            {/* VERTICAL DIVIDER */}
            <span
              aria-hidden="true"
              className="
        mx-5
        hidden
        h-[42px]
        w-px
        shrink-0
        bg-[#C2C5B9]/75
        sm:block
      "
            />

            {/* MOBILE DIVIDER */}
            <span
              aria-hidden="true"
              className="
        mx-5
        h-px
        bg-[#C2C5B9]/60
        sm:hidden
      "
            />

            {/* EXPLORE COLLECTION */}
            <button
              type="button"
              onClick={() => {
                document.getElementById("stays")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              aria-label="Explore the Paciano collection"
              // className="
              //   group
              //   relative
              //   z-10
              //   flex
              //   min-h-[62px]
              //   w-full
              //   shrink-0
              //   items-center
              //   justify-center
              //   overflow-visible
              //   outline-none
              //   transition-all
              //   duration-700
              //   sm:min-h-[82px]
              //   sm:w-[185px]
              //   md:w-[205px]
              //   lg:w-[225px]
              //   xl:w-[245px]
              // "
              className="
                group
                relative
                z-10
                mx-auto
                flex
                min-h-[62px]
                w-fit
                shrink-0
                items-center
                justify-center
                overflow-visible
                px-2
                outline-none
                transition-all
                duration-700
                sm:min-h-[82px]
                sm:mx-0
                sm:w-[185px]
                md:w-[205px]
                lg:w-[225px]
                xl:w-[245px]
              "
            >
              {/* LEAF ASSET — PRESERVED */}
              <img
                src={leafCta}
                alt=""
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  right-[-43px]
                  top-1/2
                  z-0
                  h-[65px]
                  w-auto
                  max-w-none
                  -translate-y-1/2
                  object-contain
                  opacity-65
                  transition-all
                  duration-700
                  group-hover:translate-x-[5px]
                  group-hover:rotate-[1.5deg]
                  group-hover:opacity-100
                  sm:right-[-28px]
                  sm:h-[78px]
                  lg:right-[-38px]
                  lg:h-[92px]
                "
              />

              <span
                className="
          relative
          z-10
          flex
          items-center
          gap-3
          pr-2
          sm:gap-3
          lg:gap-4
        "
              >
                <span className="flex flex-col items-start text-left">
                  <span
                    className="
              font-manrope
              text-[7px]
              font-semibold
              uppercase
              tracking-[0.32em]
              text-[#718043]
              transition-all
              duration-500
              group-hover:tracking-[0.38em]
              sm:text-[8px]
              lg:text-[9px]
            "
                  >
                    Explore the
                  </span>

                  <span
                    className="
              mt-[2px]
              font-cormorant
              text-[24px]
              leading-[.9]
              tracking-[-0.025em]
              text-[#25372C]
              sm:text-[26px]
              lg:text-[29px]
            "
                  >
                    Collection
                  </span>

                  <svg
                    viewBox="0 0 110 12"
                    fill="none"
                    className="
              mt-[6px]
              h-[8px]
              w-[68px]
              origin-left
              text-[#71833F]
              transition-transform
              duration-700
              group-hover:scale-x-[1.12]
            "
                  >
                    <path
                      d="M1 7 C25 2 51 2 76 6 C89 8 100 8 109 4"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                  </svg>
                </span>

                {/* ARROW */}
                <span
                  className="
            relative
            flex
            h-[40px]
            w-[40px]
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-[#A9AE9B]
            text-[#25372C]
            transition-all
            duration-700
            group-hover:border-[#71833F]
            group-hover:bg-[#71833F]
            group-hover:text-white
            group-hover:shadow-[0_8px_22px_rgba(88,103,57,0.16)]
            sm:h-[44px]
            sm:w-[44px]
            lg:h-[50px]
            lg:w-[50px]
          "
                >
                  <span
                    className="
              text-[17px]
              leading-none
              transition-transform
              duration-700
              group-hover:translate-x-1
            "
                  >
                    →
                  </span>
                </span>
              </span>
            </button>
          </div>
          {/* ======================================================
            CINEMATIC ROOM IMAGE
        ====================================================== */}

          <div
            className={`
              paciano-stay-step
              paciano-stay-step-6
            relative
            mt-8
            transition-all
            duration-[1500ms]
            ease-[cubic-bezier(0.16,1,0.3,1)]
            ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }
          `}
          >
            {/* ====================================================
              IMAGE FRAME
          ==================================================== */}

            <div
              className="
              relative
              overflow-hidden
              h-[470px]
                sm:h-[560px]
                lg:h-[680px]
                xl:h-[700px]
              rounded-[20px]
              sm:rounded-[26px]
              bg-[#303A32]
              shadow-[0_35px_100px_rgba(43,49,42,0.18)]
            "
            >
              {/* ==================================================
                CURRENT ROOM IMAGE
            ================================================== */}

              <div
                className={`
                absolute
                inset-0
                transition-all
                duration-[900ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${
                  incomingStay !== null
                    ? "opacity-0 scale-[0.965]"
                    : "opacity-100 scale-100"
                }
              `}
              >
                <img
                  src={stay.images[activeImage]}
                  alt={stay.name}
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    object-center
                    animate-[luxuryRoomDrift_18s_ease-in-out_infinite_alternate]
                    "
                />
              </div>

              {/* ==================================================
                INCOMING ROOM IMAGE
            ================================================== */}

              {incoming && (
                <div
                  className="
                  absolute
                  inset-0
                  opacity-100
                  scale-100
                  animate-[roomEnter_1200ms_cubic-bezier(0.16,1,0.3,1)]
                "
                >
                  <img
                    src={incoming.images[0]}
                    alt={incoming.name}
                    className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    object-center
                  "
                  />
                </div>
              )}

              {/* ==================================================
                SAME ROOM IMAGE TRANSITION
            ================================================== */}

              {incomingImage !== null && (
                <div
                  className="
                  absolute
                  inset-0
                  animate-[imageEnter_750ms_cubic-bezier(0.22,1,0.36,1)]
                "
                >
                  <img
                    src={stay.images[incomingImage]}
                    alt=""
                    className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    object-center
                  "
                  />
                </div>
              )}

              {/* ==================================================
                CINEMATIC DARK GRADIENT
            ================================================== */}

              <div
                className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/70
                via-black/15
                to-transparent
                pointer-events-none
              "
              />

              <div
                className="
                absolute
                inset-0
                bg-gradient-to-r
                from-black/35
                via-transparent
                to-transparent
                pointer-events-none
              "
              />

              {/* ==================================================
                SOFT LIGHT
            ================================================== */}

              <div
                className="
                absolute
                inset-0
                pointer-events-none
                bg-[radial-gradient(circle_at_62%_25%,rgba(255,244,214,0.16),transparent_38%)]
              "
              />

              {/* ==================================================
                ROOM INFORMATION
            ================================================== */}

              <div
                key={`${activeStay}-${activeImage}`}
                className="
                  absolute
                  left-7
                  sm:left-10
                  lg:left-14
                  bottom-9
                  sm:bottom-11
                  lg:bottom-14
                  max-w-[720px]
                  text-left
                  text-white
                  animate-[contentEnter_850ms_ease-out]
                "
              >
                <p
                  className="
                  text-[9px]
                  sm:text-[10px]
                  tracking-[0.4em]
                  uppercase
                  text-white/80
                "
                >
                  {stay.eyebrow}
                </p>

                <h3
                  className="
                  mt-2
                  font-serif
                  text-[35px]
                  sm:text-[44px]
                  lg:text-[52px]
                  leading-[0.98]
                  tracking-[-0.035em]
                "
                >
                  {stay.title}
                </h3>

                <p
                  className="
                  mt-4
                  font-manrope
                  max-w-[490px]
                  text-[13px]
                    sm:text-[14px]
                    lg:text-[15px]
                  leading-[1.75]
                  text-white/85
                "
                >
                  {stay.description}
                </p>

                <button
                  type="button"
                  className="
                    group
                    relative
                    mt-6
                    inline-flex
                    h-[46px]
                    items-center
                    gap-4
                    overflow-hidden
                    rounded-full
                    border
                    border-white/65
                    px-[7px]
                    pl-5
                    pr-[7px]
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.25em]
                    text-white
                    transition-all
                    duration-700
                    ease-[cubic-bezier(0.16,1,0.3,1)]
                    hover:border-white
                    hover:bg-white
                    hover:text-[#24382D]
                    hover:tracking-[0.29em]
                  "
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-[32%] -translate-x-[140%] skew-x-[-18deg] bg-white/20 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-[390%]"
                  />

                  <span className="relative z-10 whitespace-nowrap">
                    Explore This Room
                  </span>

                  <span className="relative z-10 flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full border border-white/55 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-[#24382D]/30 group-hover:bg-[#24382D] group-hover:text-white group-hover:scale-[1.04]">
                    <svg
                      viewBox="0 0 18 18"
                      fill="none"
                      aria-hidden="true"
                      className="h-[14px] w-[14px] transition-transform duration-700 group-hover:translate-x-0.5"
                    >
                      <path
                        d="M2.5 9H14.5M10 4.5L14.5 9L10 13.5"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                {/* ==================================================
                    ROOM AMENITIES — BELOW EXPLORE THIS ROOM
                    Dynamic for the selected stay
                ================================================== */}

                <div
                  className="
                    mt-5
                    flex
                    max-w-[700px]
                    flex-wrap
                    items-center
                    gap-x-5
                    gap-y-2
                    border-t
                    border-white/20
                    pt-4
                  "
                >
                  {stay.amenities.map((amenity, index) => (
                    <div
                      key={amenity.label}
                      className="
                        flex
                        items-center
                        gap-2
                        text-white/80
                        transition-colors
                        duration-500
                        hover:text-white
                      "
                    >
                      <span className="flex h-[19px] w-[19px] items-center justify-center [&_svg]:h-[16px] [&_svg]:w-[16px]">
                        <AmenityIcon type={amenity.icon} />
                      </span>

                      <span
                        className="
                          whitespace-nowrap
                          font-manrope
                          text-[9px]
                          font-medium
                          tracking-[0.035em]
                        "
                      >
                        {amenity.label}
                      </span>

                      {index < stay.amenities.length - 1 && (
                        <span
                          aria-hidden="true"
                          className="ml-1 h-3 w-px bg-white/20"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* ==================================================
                IMAGE COUNTER
            ================================================== */}

              <div
                className="
                absolute
                right-7
                sm:right-10
                bottom-9
                sm:bottom-11
                flex
                items-center
                gap-3
                text-white/80
              "
              >
                <span
                  className="
                  text-[10px]
                  tracking-[0.3em]
                "
                >
                  {String(activeImage + 1).padStart(2, "0")}
                </span>

                <span
                  className="
                  w-10
                  h-px
                  bg-white/40
                "
                />

                <span
                  className="
                  text-[10px]
                  tracking-[0.3em]
                "
                >
                  {String(stay.images.length).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* ====================================================
              PREVIOUS BUTTON — EDITORIAL ARROW
          ==================================================== */}

            <button
              type="button"
              onClick={previousStay}
              disabled={isTransitioning}
              aria-label="Previous stay"
              className="
                group
                absolute
                left-0
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                hidden
                lg:flex
                h-[54px]
                w-[54px]
                items-center
                justify-start
                rounded-full
                border
                border-[#C5C5B8]/80
                bg-[#F7F2E8]/96
                text-[#53604F]
                shadow-[0_10px_30px_rgba(44,52,43,0.12)]
                backdrop-blur-sm
                transition-all
                duration-500
                ease-[cubic-bezier(0.16,1,0.3,1)]
                hover:border-[#71833F]/70
                hover:bg-[#FBF8F0]
                hover:shadow-[0_14px_34px_rgba(44,52,43,0.16)]
                disabled:pointer-events-none
                disabled:opacity-40
              "
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-[4px] rounded-full border border-[#D5D4C9]/70 transition-all duration-500 group-hover:border-[#AAB58C]/70 group-hover:scale-[0.94]"
              />

              <svg
                viewBox="0 0 30 18"
                fill="none"
                aria-hidden="true"
                className="relative z-10 ml-[13px] h-[17px] w-[28px] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-1"
              >
                <path
                  d="M27 9H5"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                <path
                  d="M10 3.5L4.5 9L10 14.5"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span
                aria-hidden="true"
                className="absolute left-[9px] top-1/2 h-[3px] w-[3px] -translate-y-1/2 rounded-full bg-[#71833F] opacity-0 transition-all duration-500 group-hover:left-[7px] group-hover:opacity-80"
              />
            </button>

            {/* ====================================================
              NEXT BUTTON — EDITORIAL ARROW
          ==================================================== */}

            <button
              type="button"
              onClick={nextStay}
              disabled={isTransitioning}
              aria-label="Next stay"
              className="
                group
                absolute
                right-0
                top-1/2
                translate-x-1/2
                -translate-y-1/2
                hidden
                lg:flex
                h-[54px]
                w-[54px]
                items-center
                justify-center
                rounded-full
                border
                border-[#C5C5B8]/80
                bg-[#F7F2E8]/96
                text-[#53604F]
                shadow-[0_10px_30px_rgba(44,52,43,0.12)]
                backdrop-blur-sm
                transition-all
                duration-500
                ease-[cubic-bezier(0.16,1,0.3,1)]
                hover:border-[#71833F]/70
                hover:bg-[#FBF8F0]
                hover:shadow-[0_14px_34px_rgba(44,52,43,0.16)]
                disabled:pointer-events-none
                disabled:opacity-40
              "
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-[4px] rounded-full border border-[#D5D4C9]/70 transition-all duration-500 group-hover:border-[#AAB58C]/70 group-hover:scale-[0.94]"
              />

              <svg
                viewBox="0 0 30 18"
                fill="none"
                aria-hidden="true"
                className="relative z-10 h-[17px] w-[28px] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
              >
                <path
                  d="M3 9H25"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                <path
                  d="M20 3.5L25.5 9L20 14.5"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span
                aria-hidden="true"
                className="absolute right-[9px] top-1/2 h-[3px] w-[3px] -translate-y-1/2 rounded-full bg-[#71833F] opacity-0 transition-all duration-500 group-hover:right-[7px] group-hover:opacity-80"
              />
            </button>
          </div>

          {/* ======================================================
            CLOSING QUOTE
        ====================================================== */}

          {/* <div
            className={`
            mt-12
            text-center
            transition-all
            duration-[1500ms]
            delay-500
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
          >
            <span
              className="
              block
              mx-auto
              mb-4
              w-8
              h-px
              bg-[#899475]/50
            "
            />

            <p
              className="
              font-serif
              italic
              text-[18px]
              sm:text-[21px]
              leading-[1.45]
              text-[#53614F]
            "
            >
              “More than a stay,
              <br />a deeper connection.”
            </p>
          </div> */}
        </div>

        {/* ========================================================
    PACIANO LANDSCAPE — ROOM INTO THE MIST
======================================================== */}

        {/* <div
          className="
    relative
    left-1/2
    -translate-x-1/2

    mt-0
    w-screen

    h-[383px]
    sm:h-[330px]
    lg:h-[360px]

    overflow-x-hidden

    bg-[#F4EDE1]
  "
        > */}
        <div
          className="
    relative
    left-1/2
    -translate-x-1/2

    mt-0
    w-screen

    h-[250px]
    sm:h-[230px]
    lg:h-[245px]

    overflow-hidden

    bg-[#F4F0E7]
  "
        >
          {/* ------------------------------------------------------
      MIST MOUNTAINS
      Full width and clearly visible
  ------------------------------------------------------ */}

          {/* <img
            src={mistMountains}
            alt=""
            aria-hidden="true"
            className="
      absolute
      left-0
      bottom-0

      w-full
      h-auto

      min-h-[220px]

      object-cover
      object-bottom

      opacity-[0.72]

      mix-blend-multiply

      animate-[mistDrift_32s_ease-in-out_infinite_alternate]

      z-10
    "
          /> */}
          <img
            src={mistMountains}
            alt=""
            aria-hidden="true"
            //           className="
            //   absolute
            //   inset-0

            //   w-full
            //   h-full

            //   object-cover
            //   object-center

            //   opacity-[0.72]

            //   mix-blend-multiply

            //   animate-[mistDrift_32s_ease-in-out_infinite_alternate]

            //   z-10
            // "
            className="
      absolute
      inset-0
      w-full
      h-full
      object-cover
      object-center
      opacity-[1.42]
      mix-blend-multiply
      animate-[mistDrift_32s_ease-in-out_infinite_alternate]
      z-10
    "
          />

          {/* ------------------------------------------------------
      TOP SOFT TRANSITION
  ------------------------------------------------------ */}

          <div
            className="
      absolute
      inset-x-0
      top-0

   h-[105px]

      z-20

      bg-gradient-to-b
      from-[#F4EDE1]
      via-[#F4EDE1]/55
      to-transparent
    "
          />

          {/* ------------------------------------------------------
      BOTTOM MIST
  ------------------------------------------------------ */}

          {/* <div
            className="
      absolute
      inset-x-0
      bottom-0

      h-[75px]

      z-20

      bg-gradient-to-t
      from-[#F4EDE1]
      via-[#F4EDE1]/35
      to-transparent
    "
          /> */}
          <div
            //           className="
            //   pointer-events-none
            //   absolute
            //   inset-x-0
            //   bottom-[-1px]
            //   z-20
            //   h-[115px]
            //   bg-gradient-to-t
            //   from-[#F4EDE1]
            //   via-[#F4EDE1]/55
            //   to-transparent
            // "
            className="
      pointer-events-none
      absolute
      inset-x-0
      bottom-0
      z-20
      h-[100px]
      bg-gradient-to-t
      from-[#F4F0E7]
      via-[#F4F0E7]/75
      to-transparent
    "
          />

          {/* ------------------------------------------------------
      LEFT BOTANICAL LEAF
  ------------------------------------------------------ */}

          {/* <img
            src={belowleafCta}
            alt=""
            aria-hidden="true"
            className="
      absolute

      left-[-25px]
      sm:left-[-20px]
      lg:left-[-12px]

      top-[-95px]
      lg:top-[-120px]

      z-30

      h-[330px]
      sm:h-[350px]
      lg:h-[375px]

      w-auto

      opacity-[0.28]

      mix-blend-multiply

      pointer-events-none
    "
          /> */}

          {/* ------------------------------------------------------
      PACIANO SIGNATURE
  ------------------------------------------------------ */}

          <div
            ref={landscapeSignatureRef}
            className={`
              absolute
              left-1/2
             bottom-[125px]
              z-40
              -translate-x-1/2
              flex
              flex-col
              items-center
              text-center
            
              transition-all
              duration-[1400ms]
              ease-[cubic-bezier(0.16,1,0.3,1)]
            
              ${
                signatureVisible
                  ? "opacity-100 translate-y-0 scale-100 blur-0"
                  : "opacity-0 translate-y-8 scale-[0.94] blur-[4px]"
              }           
              
            `}
          >
            <div className="animate-[signatureFloat_7s_ease-in-out_infinite]">
              <div
                className="
    mb-3
    flex
    items-center
    justify-center
    text-[#71883F]
  "
              >
                <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
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

              <p
                className="
              font-cormorant
              text-[29px]
              sm:text-[25px]
              leading-none
              uppercase
              tracking-[0.40em]
              text-[#4F5E43]
              drop-shadow-[0_1px_2px_rgba(255,255,255,0.35)]
            "
              >
                PACIANO
              </p>

              <p
                className="
                mt-[8px]

                font-manrope

                text-[11px]
                sm:text-[10px]

                leading-none

                uppercase
                tracking-[0.42em]

                text-[#59664D] drop-shadow-[0_1px_2px_rgba(255,255,255,0.4)]
              "
              >
                STAY CLOSE TO NATURE
              </p>
            </div>
          </div>
        </div>

        {/* Close MAIN CONTENT wrapper opened near line 429 */}
      </div>

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


        `}
      </style>
    </section>
  );
}
