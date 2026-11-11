import { useEffect, useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import carouselImg1 from "@/images/events/eventBanner.png";
import carouselImg2 from "@/images/events/wedding.png";
import carouselImg3 from "@/images/events/corporate.jpg";
import carouselImg4 from "@/images/events/dech-wedding.png";

import {
  Mountain,
  UsersRound,
  UtensilsCrossed,
  BedDouble,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Leaf,
} from "lucide-react";

import { motion, useReducedMotion } from "framer-motion";

interface AdvantageFeature {
  label: string;
  icon: LucideIcon;
}

interface AdvantageSlide {
  id: string;
  image: string;
  title: string;
  description?: string;
}

const defaultFeatures: AdvantageFeature[] = [
  { label: "Breathtaking Natural Backdrop", icon: Mountain },
  { label: "Versatile Event Spaces", icon: UsersRound },
  { label: "Curated Dining Experiences", icon: UtensilsCrossed },
  { label: "Comfortable Accommodations", icon: BedDouble },
  { label: "Personalised Event Support", icon: Sparkles },
];

export default function EventsCarousel() {
  const slides: AdvantageSlide[] = [
    {
      id: "garden",
      image: carouselImg1,
      title: "Nature's Embrace",
      description: "Celebrations surrounded by nature.",
    },
    {
      id: "corporate",
      image: carouselImg3,
      title: "Inspired Gatherings",
      description: "Spaces designed for meaningful connections.",
    },
    {
      id: "dining",
      image: carouselImg4,
      title: "Dining Experiences",
      description: "Thoughtfully curated culinary moments.",
    },
    {
      id: "wedding",
      image: carouselImg2,
      title: "Beautiful Celebrations",
      description: "A memorable setting for your special day.",
    },
    {
      id: "mountains",
      image: carouselImg2,
      title: "Mountain Serenity",
      description: "Unforgettable views and peaceful moments.",
    },
  ];
  const features = defaultFeatures;
  const reduceMotion = useReducedMotion();

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Automatically move the carousel
  useEffect(() => {
    if (isPaused || slides.length <= 1 || reduceMotion) return;

    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, [isPaused, slides.length, reduceMotion]);

  // Rotate the slides to create a sequential carousel movement
  const orderedSlides = useMemo(() => {
    if (!slides.length) return [];

    return [...slides.slice(activeIndex), ...slides.slice(0, activeIndex)];
  }, [slides, activeIndex]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (!slides.length) return null;

  const reveal = {
    hidden: {
      opacity: 0,
      y: 28,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.9,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };
  // Paciano Advantage heading scroll animation
  const headingReveal = {
    hidden: {
      opacity: 0,
      y: 35,
      filter: "blur(5px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      className="
        relative isolate
        w-full overflow-hidden
        bg-[#F7F3E9]
        pt-4
        pb-14
        sm:pt-6
        sm:pb-20
        lg:pt-2
        lg:pb-24   
        [@media(orientation:landscape)_and_(max-height:500px)]:pt-3     
      "
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setIsPaused(false);
        }
      }}
    >
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="
            absolute -left-40 top-0
            h-[350px] w-[350px]
            rounded-full
            bg-[#D8DCC0]/20
            blur-[100px]
          "
        />

        <div
          className="
            absolute -right-40 bottom-0
            h-[350px] w-[350px]
            rounded-full
            bg-[#D8C69F]/15
            blur-[100px]
          "
        />
      </div>

      <div
        className="
          mx-auto
          w-full
          max-w-[1500px]
          px-5
          sm:px-8
          lg:px-12
          xl:px-16
        "
      >
        {/* ==================================
            SECTION HEADING
        ================================== */}

        <div className="mx-auto max-w-[750px] text-center">
          {/* Eyebrow */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={headingReveal}
            transition={{ duration: 1.1, delay: 0.1 }}
            className="
                mb-3
                flex flex-col
                items-center
                justify-center
                gap-2
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
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#BBA77A]/70" />

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
                THE PACIANO ADVANTAGE
              </span>

              <span className="h-px w-8 bg-[#BBA77A]/70" />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={headingReveal}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="
              font-cormorant
              text-[32px]
              leading-[.95]
              tracking-[-.025em]
              text-[#17251B]
              sm:text-[40px]
              md:text-[46px]
              lg:text-[52px]
            "
          >
            A Scenic Setting
            <br />
            <span className="italic text-[#789541]">For Every Occasion.</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={headingReveal}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="
              mx-auto mt-3
              max-w-[480px]
              font-manrope
              text-[12px]
              leading-[1.8]
              text-[#657067]
              sm:text-[13px]
              lg:text-[14px]
            "
          >
            Thoughtfully designed spaces, warm hospitality and nature all around
            — for events that feel truly special.
          </motion.p>
        </div>

        {/* ==================================
            ADVANTAGE FEATURES
        ================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.15,
              },
            },
          }}
          className="
            mx-auto
            mt-9
            grid
            max-w-[1100px]
            grid-cols-2
            gap-x-3
            gap-y-7

            sm:grid-cols-3
            lg:grid-cols-5
            lg:gap-0
          "
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.label}
                variants={reveal}
                className="
                  relative
                  flex min-w-0
                  flex-col
                  items-center
                  justify-start
                  gap-2
                  px-2
                  text-center

                  lg:px-4

                  lg:after:absolute
                  lg:after:right-0
                  lg:after:top-1
                  lg:after:bottom-1
                  lg:after:w-px
                  lg:after:bg-[#C8B98F]/50

                  lg:last:after:hidden
                "
              >
                <Icon
                  strokeWidth={1.35}
                  className="
                    h-7 w-7
                    shrink-0
                    text-[#71814A]

                    sm:h-8 sm:w-8
                  "
                />

                <span
                  className="
                    flex min-h-[34px]
                    max-w-[125px]
                    items-center
                    justify-center

                    font-manrope
                    text-[9px]
                    leading-[1.5]
                    text-[#42483A]

                    sm:text-[10px]
                    lg:text-[11px]
                  "
                >
                  {feature.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ==================================
            IMAGE CAROUSEL
        ================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
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
            mt-10
            sm:mt-12
            lg:mt-14
          "
        >
          {/* CAROUSEL VIEWPORT */}
          <div className="overflow-hidden">
            <motion.div
              layout
              className="
                flex
                flex-nowrap
                items-stretch
                gap-3
                sm:gap-4
              "
              transition={{
                layout: {
                  duration: reduceMotion ? 0 : 1.1,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
            >
              {orderedSlides.map((slide, index) => (
                <motion.article
                  key={slide.id}
                  layout
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 22,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    layout: {
                      duration: reduceMotion ? 0 : 1.1,
                      ease: [0.22, 1, 0.36, 1],
                    },
                    opacity: {
                      duration: reduceMotion ? 0 : 0.8,
                    },
                    y: {
                      duration: reduceMotion ? 0 : 0.8,
                    },
                  }}
                  //   className="
                  //     group
                  //     relative
                  //     h-[155px]
                  //     w-[86%]
                  //     shrink-0
                  //     overflow-hidden
                  //     rounded-[16px]
                  //     border border-[#D7C9A9]/70
                  //     bg-[#E9E0D0]
                  //     shadow-[0_7px_22px_rgba(52,54,36,0.08)]

                  //     sm:h-[190px]
                  //     sm:w-[calc((100%-1rem)/2)]

                  //     lg:h-[235px]
                  //     lg:w-[calc((100%-2rem)/3)]

                  //     xl:h-[260px]
                  //   "
                  className="
                    group
                    relative
                    h-[190px]
                    w-[86%]
                    shrink-0
                    overflow-hidden
                    rounded-[16px]
                    border border-[#D7C9A9]/70
                    bg-[#E9E0D0]
                    shadow-[0_7px_22px_rgba(52,54,36,0.08)]

                    [@media(orientation:portrait)_and_(max-width:639px)]:!w-full

                    sm:h-[190px]
                    sm:w-[calc((100%-1rem)/2)]

                    lg:h-[235px]
                    lg:w-[calc((100%-2rem)/3)]

                    xl:h-[260px]
                    "
                >
                  {/* IMAGE */}
                  <img
                    src={slide.image}
                    alt={slide.title}
                    loading={index < 3 ? "eager" : "lazy"}
                    draggable={false}
                    className="
                      h-full
                      w-full
                      object-cover

                      transition-transform
                      duration-[1600ms]
                      ease-[cubic-bezier(.22,1,.36,1)]

                      group-hover:scale-[1.07]
                    "
                  />

                  {/* IMAGE OVERLAY */}
                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-t
                      from-[#18291D]/65
                      via-transparent
                      to-transparent
                      opacity-80
                      transition-opacity
                      duration-700
                      group-hover:opacity-100
                    "
                  />

                  {/* IMAGE TITLE */}
                  <div
                    className="
                      absolute inset-x-0 bottom-0
                      translate-y-2
                      px-4 pb-4
                      opacity-0
                      transition-all duration-700
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  >
                    <h3
                      className="
                        font-cormorant
                        text-[22px]
                        text-[#FFF9EA]
                        sm:text-[25px]
                      "
                    >
                      {slide.title}
                    </h3>

                    {slide.description && (
                      <p
                        className="
                          mt-1
                          font-manrope
                          text-[10px]
                          leading-relaxed
                          text-[#F5EFE1]/90
                        "
                      >
                        {slide.description}
                      </p>
                    )}
                  </div>

                  {/* SUBTLE GOLDEN EDGE */}
                  <div
                    className="
                      pointer-events-none
                      absolute inset-[1px]
                      rounded-[15px]
                      border border-white/15
                    "
                  />
                </motion.article>
              ))}
            </motion.div>
          </div>

          {/* ==================================
              NAVIGATION ARROWS
          ================================== */}
          {/* 
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous image"
            className="
              absolute
              -left-2
              top-1/2
              z-20
              flex
              h-8 w-8
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border border-[#D8CBAE]
              bg-[#FBF8F0]/95
              text-[#53613D]
              shadow-md
              transition-all duration-300
              hover:scale-110
              hover:bg-[#52633D]
              hover:text-white

              sm:-left-4
              sm:h-9 sm:w-9
              lg:-left-5
            "
          >
            <ChevronLeft size={17} strokeWidth={1.5} />
          </button> */}
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous image"
            className="
                absolute
                left-2
                top-1/2
                z-30
                flex
                h-9 w-9
                -translate-y-1/2
                items-center
                justify-center
                rounded-full

                border border-[#D8CBAE]
                bg-[#FBF8F0]
                text-[#53613D]

                shadow-[0_4px_14px_rgba(40,45,25,0.20)]

                transition-all duration-300
                hover:scale-110
                hover:bg-[#52633D]
                hover:text-white

                sm:left-2
                sm:h-9 sm:w-9
                lg:left-[-20px]
            "
          >
            <ChevronLeft size={19} strokeWidth={1.6} />
          </button>

          {/* <button
            type="button"
            onClick={nextSlide}
            aria-label="Next image"
            className="
              absolute
              -right-2
              top-1/2
              z-20
              flex
              h-8 w-8
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border border-[#D8CBAE]
              bg-[#FBF8F0]/95
              text-[#53613D]
              shadow-md
              transition-all duration-300
              hover:scale-110
              hover:bg-[#52633D]
              hover:text-white

              sm:-right-4
              sm:h-9 sm:w-9
              lg:-right-5
            "
          >
            <ChevronRight size={17} strokeWidth={1.5} />
          </button> */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next image"
            className="
            absolute
            right-2
            top-1/2
            z-30
            flex
            h-9 w-9
            -translate-y-1/2
            items-center
            justify-center
            rounded-full

            border border-[#D8CBAE]
            bg-[#FBF8F0]
            text-[#53613D]

            shadow-[0_4px_14px_rgba(40,45,25,0.20)]

            transition-all duration-300
            hover:scale-110
            hover:bg-[#52633D]
            hover:text-white

            sm:right-2
            sm:h-9 sm:w-9
            lg:right-[-20px]
        "
          >
            <ChevronRight size={19} strokeWidth={1.6} />
          </button>
        </motion.div>

        {/* ==================================
            PAGINATION
        ================================== */}

        <div className="mt-5 flex items-center justify-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={activeIndex === index ? "true" : undefined}
              onClick={() => setActiveIndex(index)}
              className={`
                h-[6px]
                rounded-full
                transition-all
                duration-500

                ${
                  activeIndex === index
                    ? "w-6 bg-[#78943F]"
                    : "w-[6px] bg-[#B9B99B]/70 hover:bg-[#78943F]/70"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
