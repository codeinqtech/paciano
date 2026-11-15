import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Users, Sparkles } from "lucide-react";

interface AdvantageSlide {
  id: string;
  image: string;
  title: string;
  description: string;
  capacity?: string;
  setup?: string;
}

interface EventsTypeVenuesProps {
  eyebrow: string;
  title1: string;
  title2: string;
  description: string;
  items: {
    title: string;
    description: string;
    image: string;
    capacity?: string;
    setup?: string;
  }[];
}

export default function EventsTypeVenues({
  eyebrow,
  title1,
  title2,
  description,
  items,
}: EventsTypeVenuesProps) {
  const slides: AdvantageSlide[] = useMemo(
    () =>
      items.map((item, index) => ({
        id: `${index}-${item.title}`,
        image: item.image,
        title: item.title,
        description: item.description,
        capacity: item.capacity,
        setup: item.setup,
      })),
    [items],
  );
  const reduceMotion = useReducedMotion();

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Reset carousel when changing between event categories
  useEffect(() => {
    setActiveIndex(0);
  }, [items]);

  // Automatically move the carousel
  useEffect(() => {
    if (isPaused || slides.length <= 1 || reduceMotion) return;

    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5500);

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
                {eyebrow}
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
            {title1}
            <br />
            <span className="italic text-[#789541]">{title2}</span>
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
              text-[#50584F]
              sm:text-[13px]
              lg:text-[14px]
            "
          >
            {description}
          </motion.p>
        </div>

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
                  layout="position"
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    layout: {
                      duration: reduceMotion ? 0 : 0.75,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }}
                  className="
                    group
                    flex
                    min-w-0
                    w-[86%]
                    shrink-0
                    [@media(orientation:portrait)_and_(max-width:767px)]:w-full
                    flex-col
                    overflow-hidden
                    rounded-[15px]
                    border border-[#D7C9A9]/70
                    bg-[#FBF8F0]
                    shadow-[0_7px_22px_rgba(52,54,36,0.08)]
                    sm:w-[calc((100%-1rem)/2)]
                    lg:w-[calc((100%-2rem)/3)]
                    "
                >
                  {/* VENUE IMAGE */}
                  <div className="relative h-[145px] shrink-0 overflow-hidden sm:h-[165px] lg:h-[175px]">
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
                        duration-[1200ms]
                        ease-[cubic-bezier(.22,1,.36,1)]
                        group-hover:scale-105
                        "
                    />
                  </div>

                  {/* VENUE INFORMATION CARD */}
                  <div className="flex min-h-[112px] flex-1 flex-col px-4 py-3 sm:px-5">
                    <h3
                      className="
                        font-cormorant
                        text-[19px]
                        leading-tight
                        text-[#50584F]
                        sm:text-[21px]
                        font-semibold
                        
                    "
                    >
                      {slide.title}
                    </h3>

                    <p
                      className="
                        mt-1
                        min-h-[30px]
                        font-manrope
                        text-[10px]
                        leading-[1.6]
                        text-[#50584F]
                        sm:text-[13px]
                    "
                    >
                      {slide.description}
                    </p>

                    {/* VENUE DETAILS */}
                    {(slide.capacity || slide.setup) && (
                      <div
                        className="
                            mt-3
                            flex
                            flex-wrap
                            items-center
                            gap-x-4
                            gap-y-2
                            border-t
                            border-[#DDD5C3]
                            pt-2
                            "
                      >
                        {slide.capacity && (
                          <div className="flex items-center gap-1.5">
                            <Users
                              size={13}
                              strokeWidth={1.5}
                              className="shrink-0 text-[#71863D]"
                            />
                            <span className="font-manrope text-[9px] text-[#59604E]">
                              {slide.capacity}
                            </span>
                          </div>
                        )}

                        {slide.setup && (
                          <div className="flex items-center gap-1.5">
                            <Sparkles
                              size={13}
                              strokeWidth={1.5}
                              className="shrink-0 text-[#71863D]"
                            />
                            <span className="font-manrope text-[9px] text-[#59604E]">
                              {slide.setup}
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>

          {/* ==================================
              NAVIGATION ARROWS
          ================================== */}
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
