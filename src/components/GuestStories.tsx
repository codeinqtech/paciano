import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import testimonialLeaf from "@/images/testimonial-leaf.png";
import guestStoriesLandscape from "@/images/paciano-guest-stories-landscape.webp";
type CarouselHandle = {
  next: () => void;
  previous: () => void;
};

type RevealItemProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

const RevealItem = ({
  children,
  delay = 0,
  className = "",
}: RevealItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        ${className}
        mt-6
        transform
        transition-all
        duration-[1700ms]
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}
      `}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

const testimonials = [
  {
    quote:
      "Paciano gave us the time and space to reconnect as a family. The views, the food, the warmth — everything felt just right.",
    name: "AMAR BANERJEE",
    country: "SILIGURI",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
  },
  {
    quote:
      "A place to truly breathe. The river, the mountains, the kindness of the people — Paciano stays in your heart.",
    name: "SHRUTI ",
    country: "UNITED STATES",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
  },
  {
    quote:
      "It’s not just a place to stay, it’s a place to feel alive again. Simple, beautiful, and deeply meaningful.",
    name: "ISABEL RAMIREZ",
    country: "SPAIN",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=300&q=80",
  },
];

type CarouselProps = {
  children: React.ReactNode[];
  className?: string;
  gap?: number;
  autoPlay?: boolean;
  interval?: number;
  pauseOnHover?: boolean;
  showControls?: boolean;
  desktopCards?: number;
  tabletCards?: number;
};

const Carousel = forwardRef<CarouselHandle, CarouselProps>(
  (
    {
      children,
      className = "",
      gap = 20,
      autoPlay = true,
      interval = 5000,
      pauseOnHover = true,
      showControls = false,
      desktopCards = 3,
      tabletCards = 2,
    },
    ref,
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardWidth, setCardWidth] = useState(0);
    const [visibleCards, setVisibleCards] = useState(1);
    const [paused, setPaused] = useState(false);

    const totalCards = children.length;

    /*
     * Clone the complete set once.
     * This gives us a seamless one-card-at-a-time loop.
     */
    const clonedChildren = [...children, ...children];

    /*
     * Responsive number of visible cards.
     *
     * Desktop:
     *   Testimonials = 3
     *   Stories      = 4
     *
     * Tablet = 2
     * Mobile = 1
     */
    const updateDimensions = () => {
      if (!containerRef.current) return;

      const width = containerRef.current.offsetWidth;

      let visible = 1;

      if (width >= 1024) {
        visible = Math.min(desktopCards, totalCards);
      } else if (width >= 640) {
        visible = Math.min(tabletCards, totalCards);
      }

      setVisibleCards(visible);

      const calculatedWidth = (width - gap * (visible - 1)) / visible;

      setCardWidth(Math.max(calculatedWidth, 0));
    };

    useEffect(() => {
      updateDimensions();

      const resizeObserver = new ResizeObserver(() => {
        updateDimensions();
      });

      if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
      }

      return () => {
        resizeObserver.disconnect();
      };
    }, [gap, desktopCards, tabletCards, totalCards]);

    /*
     * Automatic one-card movement.
     *
     * IMPORTANT:
     * The carousel must still move when all cards fit in the viewport.
     * The cloned set is what makes that possible.
     */
    useEffect(() => {
      if (!autoPlay || paused || totalCards <= 1 || cardWidth <= 0) {
        return;
      }

      const timer = setInterval(() => {
        setCurrentIndex((previous) => previous + 1);
      }, interval);

      return () => clearInterval(timer);
    }, [autoPlay, paused, interval, totalCards, visibleCards, cardWidth]);

    /*
     * Seamless infinite-loop reset.
     *
     * Example:
     *
     * Original:
     *   1 2 3 4
     *
     * Clone:
     *   1 2 3 4
     *
     * After reaching the clone, instantly move back
     * to the original first position without the user
     * seeing the reset.
     */
    useEffect(() => {
      if (currentIndex < totalCards) return;

      const timer = window.setTimeout(() => {
        const track = trackRef.current;

        if (!track) return;

        // Instantly return to the real first set after the clone set.
        track.style.transition = "none";
        setCurrentIndex(0);

        // Restore the premium transition for the next movement.
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (!trackRef.current) return;

            trackRef.current.style.transition =
              "transform 1100ms cubic-bezier(0.22,1,0.36,1)";
          });
        });
      }, 1100);

      return () => window.clearTimeout(timer);
    }, [currentIndex, totalCards]);

    const translateX = currentIndex * (cardWidth + gap);

    const next = () => {
      if (totalCards <= 1 || cardWidth <= 0) return;

      setCurrentIndex((previous) => previous + 1);
    };

    const previous = () => {
      if (totalCards <= 1 || cardWidth <= 0) return;

      if (currentIndex === 0) {
        if (!trackRef.current) return;

        /*
         * Move instantly to the cloned ending position.
         */
        trackRef.current.style.transition = "none";
        setCurrentIndex(totalCards);

        /*
         * Then animate one card backwards.
         */
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (!trackRef.current) return;

            trackRef.current.style.transition =
              "transform 1100ms cubic-bezier(0.22,1,0.36,1)";

            setCurrentIndex(totalCards - 1);
          });
        });

        return;
      }

      setCurrentIndex((previous) => previous - 1);
    };

    /*
     * Expose next/previous to the parent.
     */
    useImperativeHandle(
      ref,
      () => ({
        next,
        previous,
      }),
      [currentIndex, visibleCards, totalCards],
    );

    return (
      <div
        ref={containerRef}
        className={`relative ${className}`}
        onMouseEnter={() => {
          if (pauseOnHover) {
            setPaused(true);
          }
        }}
        onMouseLeave={() => {
          if (pauseOnHover) {
            setPaused(false);
          }
        }}
      >
        {/* VIEWPORT */}

        <div className="overflow-hidden py-5 -my-5">
          {/* TRACK */}

          <div
            ref={trackRef}
            className="flex"
            style={{
              gap: `${gap}px`,
              transform: `translate3d(-${translateX}px, 0, 0)`,
              transition: "transform 1100ms cubic-bezier(0.22,1,0.36,1)",
              willChange: "transform",
            }}
          >
            {clonedChildren.map((child, index) => (
              <div
                key={index}
                className="shrink-0"
                style={{
                  width: `${cardWidth}px`,
                }}
              >
                {child}
              </div>
            ))}
          </div>
        </div>

        {/* OPTIONAL INTERNAL CONTROLS */}

        {showControls && (
          <div className="mt-7 flex justify-center gap-3">
            <button
              type="button"
              onClick={previous}
              className="
                group
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-[#948b6a]
                text-[#202c2d]
                transition-all
                duration-500
                hover:bg-[#817b5d]
                hover:text-white
                hover:shadow-[0_12px_30px_rgba(70,65,40,0.15)]
              "
            >
              <span className="text-[20px] transition-transform duration-500 group-hover:-translate-x-1">
                ←
              </span>
            </button>

            <button
              type="button"
              onClick={next}
              className="
                group
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-[#948b6a]
                text-[#202c2d]
                transition-all
                duration-500
                hover:bg-[#817b5d]
                hover:text-white
                hover:shadow-[0_12px_30px_rgba(70,65,40,0.15)]
              "
            >
              <span className="text-[20px] transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        )}
      </div>
    );
  },
);

Carousel.displayName = "Carousel";

/* =========================================================
   TESTIMONIAL LEAF MOTION
   Subtle, slow movement using the browser animation API.
   No extra CSS file / keyframes required.
========================================================= */

type FloatingLeafProps = {
  src: string;
  className?: string;
  delay?: number;
  duration?: number;
  innerClassName?: string;
};

const FloatingLeaf = ({
  src,
  className = "",
  delay = 0,
  duration = 12000,
  innerClassName = "",
}: FloatingLeafProps) => {
  const motionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = motionRef.current;

    if (!element) return;

    const animation = element.animate(
      [
        {
          transform: "translate3d(0, 0, 0) rotate(0deg)",
        },
        {
          transform: "translate3d(4px, -5px, 0) rotate(1deg)",
        },
        {
          transform: "translate3d(1px, -2px, 0) rotate(-0.5deg)",
        },
        {
          transform: "translate3d(0, 0, 0) rotate(0deg)",
        },
      ],
      {
        duration,
        delay,
        iterations: Infinity,
        easing: "ease-in-out",
      },
    );

    return () => animation.cancel();
  }, [delay, duration]);

  return (
    <div
      ref={motionRef}
      className={`pointer-events-none absolute z-[20] hidden lg:block ${className}`}
      aria-hidden="true"
    >
      <div className={innerClassName}>
        <img
          src={src}
          alt=""
          className="block h-auto w-full object-contain"
          draggable={false}
        />
      </div>
    </div>
  );
};

const stories = [
  {
    title: "A Family’s Escape",
    duration: "03:12",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Finding Stillness",
    duration: "02:48",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "A Second Home",
    duration: "02:05",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "More Than a Stay",
    duration: "01:56",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=85",
  },
];

const GuestStories = () => {
  const testimonialCarouselRef = useRef<CarouselHandle>(null);

  return (
    <section className="relative isolate overflow-hidden bg-[#f4efe4] text-[#1d2828]">
      {/* =========================================================
          SOFT ATMOSPHERIC BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.9),transparent_48%)]" />

        <div className="absolute -left-32 top-16 h-[420px] w-[420px] rounded-full bg-[#d9d5bc]/20 blur-[100px]" />

        <div className="absolute -right-32 top-[28%] h-[450px] w-[450px] rounded-full bg-[#d9d5bc]/20 blur-[120px]" />
      </div>

      {/* =========================================================
          TESTIMONIAL LEAVES
          Positioned to reproduce the edge framing of the reference.
          The original transparent PNG is kept untouched.
      ========================================================= */}

      {/* LEFT — upper botanical cluster */}
      <FloatingLeaf
        src={testimonialLeaf}
        duration={14000}
        className="-left-[42px] -top-[18px] w-[360px]"
      />

      {/* LEFT — lower botanical cluster */}
      <FloatingLeaf
        src={testimonialLeaf}
        duration={16500}
        delay={1200}
        className="-left-[112px] top-[150px] w-[340px]"
        innerClassName="-rotate-[7deg]"
      />

      {/* RIGHT — mirrored botanical cluster */}
      <FloatingLeaf
        src={testimonialLeaf}
        duration={15000}
        delay={700}
        className="-right-[112px] top-[190px] w-[340px]"
        innerClassName="rotate-[7deg] -scale-x-100"
      />

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24 xl:px-16">
        {/* =======================================================
              CENTERED TESTIMONIAL EYEBROW
          ======================================================= */}

        <RevealItem delay={0}>
          <div className="flex flex-col items-center justify-center">
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
              aria-hidden="true"
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

            <div className="flex w-full items-center justify-center gap-5">
              <span className="hidden h-px w-16 bg-[#aaa17f] sm:block" />

              <span className="font-[Mona_Sans,sans-serif] text-[10px] font-medium tracking-[0.42em] text-[#817a60] sm:text-[11px]">
                REAL PEOPLE. REAL MOMENTS
              </span>

              <span className="hidden h-px w-16 bg-[#aaa17f] sm:block" />
            </div>
          </div>
        </RevealItem>

        {/* =======================================================
              HEADER
          ======================================================= */}

        <div className="mt-8 grid items-end gap-10 lg:grid-cols-[1.1fr_0.85fr_auto] lg:gap-8">
          {/* HEADING */}
          <RevealItem delay={120}>
            <h2 className="max-w-[650px] font-['Cormorant_Garamond',serif] text-[48px] font-medium leading-[0.88] tracking-[-0.045em] text-[#172224] sm:text-[58px] md:text-[68px] lg:text-[72px]">
              What Our Guests Say
              <span className="block font-['Cormorant_Garamond',serif] text-[#817b5d] italic">
                About Paciano.
              </span>
            </h2>
          </RevealItem>
          {/* DESCRIPTION */}
          <RevealItem delay={180}>
            <div className="border-l border-[#bdb59a] pl-7 lg:mb-2">
              <p className="max-w-[430px]  font-manrope text-[15px] font-light leading-[1.85] text-[#565b59] sm:text-[15px]">
                From meaningful experiences to unforgettable moments, our guests
                share what makes Paciano truly special.
              </p>
            </div>
          </RevealItem>

          {/* ARROWS */}
          <RevealItem delay={300}>
            <div className="flex items-center gap-3 border-l border-[#bdb59a] pl-7 lg:mb-2">
              <button
                type="button"
                aria-label="Previous guest testimonial"
                onClick={() => testimonialCarouselRef.current?.previous()}
                className="
                  group
                  relative
                  flex
                  h-[62px]
                  w-[62px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#a99f80]
                  bg-[#f9f5ec]/45
                  text-[#283131]
                  shadow-[0_8px_24px_rgba(74,67,45,0.06)]
                  backdrop-blur-[5px]
                  transition-all
                  duration-700
                  hover:-translate-y-0.5
                  hover:border-[#7f775d]
                  hover:bg-[#817b5d]/10
                  hover:shadow-[0_14px_32px_rgba(74,67,45,0.11)]
                  focus:outline-none
                "
              >
                <span className="pointer-events-none absolute inset-[5px] rounded-full border border-[#bdb59a]/55" />
                <svg
                  viewBox="0 0 32 32"
                  className="
                    relative
                    z-10
                    h-[24px]
                    w-[24px]
                    transition-transform
                    duration-700
                    group-hover:-translate-x-1
                  "
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M25 16H7"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M13 10L7 16L13 22"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                type="button"
                aria-label="Next guest testimonial"
                onClick={() => testimonialCarouselRef.current?.next()}
                className="
                  group
                  relative
                  flex
                  h-[62px]
                  w-[62px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#a99f80]
                  bg-[#f9f5ec]/45
                  text-[#283131]
                  shadow-[0_8px_24px_rgba(74,67,45,0.06)]
                  backdrop-blur-[5px]
                  transition-all
                  duration-700
                  hover:-translate-y-0.5
                  hover:border-[#7f775d]
                  hover:bg-[#817b5d]/10
                  hover:shadow-[0_14px_32px_rgba(74,67,45,0.11)]
                  focus:outline-none
                "
              >
                <span className="pointer-events-none absolute inset-[5px] rounded-full border border-[#bdb59a]/55" />
                <svg
                  viewBox="0 0 32 32"
                  className="
                    relative
                    z-10
                    h-[24px]
                    w-[24px]
                    transition-transform
                    duration-700
                    group-hover:translate-x-1
                  "
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M7 16H25"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M19 10L25 16L19 22"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </RevealItem>
        </div>
        {/* =======================================================
            TESTIMONIAL CAROUSEL
        ======================================================= */}

        <RevealItem delay={420}>
          <Carousel
            ref={testimonialCarouselRef}
            gap={20}
            interval={5200}
            autoPlay={true}
            pauseOnHover={true}
            desktopCards={3}
            tabletCards={2}
          >
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="
          group
          relative
          min-h-[300px]
          overflow-hidden
          rounded-[18px]
          border
          border-[#ddd6c5]
          bg-[#f9f5ec]/80
          p-7
          shadow-[0_8px_35px_rgba(84,76,50,0.045)]
          backdrop-blur-[4px]
          transition-all
          duration-700
          hover:-translate-y-2
          hover:shadow-[0_20px_50px_rgba(84,76,50,0.10)]
          sm:p-9
        "
              >
                {/* QUOTATION MARK */}

                <div
                  className="
            absolute
            left-6
            top-4
            font-['Cormorant_Garamond',serif]
            text-[82px]
            leading-none
            text-[#b9b39b]/80
          "
                >
                  “
                </div>

                {/* QUOTE */}

                <p
                  className="
            relative
            z-10
            max-w-[400px]
            pl-10
            pt-2
            font-['Cormorant_Garamond',serif]
            text-[23px]
            font-medium
            leading-[1.15]
            tracking-[-0.015em]
            text-[#3b4140]
            italic
            sm:text-[24px]
          "
                >
                  “{item.quote}”
                </p>

                {/* DIVIDER */}

                <div className="my-6 ml-10 h-px w-[55px] bg-[#8d8569]" />

                {/* GUEST */}

                <div className="ml-10 flex items-center gap-5">
                  <div
                    className="
              h-[68px]
              w-[68px]
              shrink-0
              overflow-hidden
              rounded-full
              bg-[#ddd7c7]
            "
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="
                h-full
                w-full
                object-cover
                grayscale-[15%]
                transition-transform
                duration-700
                group-hover:scale-110
              "
                    />
                  </div>

                  <div>
                    <div
                      className="
                font-[Mona_Sans,sans-serif]
                text-[12px]
                font-medium
                tracking-[0.34em]
                text-[#202829]
              "
                    >
                      {item.name}
                    </div>

                    <div
                      className="
                mt-2
                font-[Mona_Sans,sans-serif]
                text-[11px]
                font-light
                tracking-[0.32em]
                text-[#696d69]
              "
                    >
                      {item.country}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </Carousel>
        </RevealItem>

        {/* =======================================================
            STORIES DIVIDER
        ======================================================= */}

        <RevealItem delay={0}>
          <div className="mt-14 flex flex-col items-center justify-center">
            {/* SMALL BOTANICAL MARK */}
            <svg
              viewBox="0 0 40 40"
              className="mb-[8px] h-[30px] w-[30px] text-[#71883F]"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M20 34C20 25 21 17 27 8"
                stroke="currentColor"
                strokeWidth="1"
              />

              <path
                d="M21 22 C15 20 12 16 13 11 C18 12 22 16 22 21"
                fill="currentColor"
              />

              <path
                d="M24 17 C25 12 29 9 34 10 C32 15 29 18 24 18"
                fill="currentColor"
                opacity=".5"
              />
            </svg>

            {/* ELEGANT CENTERED RULE + LABEL */}
            <div className="flex w-full items-center justify-center gap-5 sm:gap-7">
              <span className="h-px w-12 bg-[#a69e82] sm:w-16" />

              <span className="whitespace-nowrap font-[Mona_Sans,sans-serif] text-[12px] font-medium tracking-[0.38em] text-[#77715c] sm:text-[10px] sm:tracking-[0.4em]">
                MEMORIES MADE AT PACIANO
              </span>

              <span className="h-px w-12 bg-[#a69e82] sm:w-16" />
            </div>
          </div>
        </RevealItem>

        {/* =======================================================
            VIDEO STORIES CAROUSEL
        ======================================================= */}

        <RevealItem delay={180}>
          <Carousel
            gap={20}
            interval={4600}
            autoPlay={true}
            pauseOnHover={true}
            desktopCards={4}
            tabletCards={2}
            showControls={false}
          >
            {stories.map((story) => (
              <article key={story.title} className="group">
                {/* IMAGE */}

                <div
                  className="
            relative
            aspect-[1.45/1]
            overflow-hidden
            rounded-[12px]
            bg-[#d6d0bf]
          "
                >
                  <img
                    src={story.image}
                    alt={story.title}
                    className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-[1400ms]
              ease-out
              group-hover:scale-105
            "
                  />

                  {/* OVERLAY */}

                  <div
                    className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/20
              via-transparent
              to-black/5
            "
                  />

                  {/* PLAY */}

                  <button
                    type="button"
                    aria-label={`Play ${story.title}`}
                    className="
              absolute
              left-1/2
              top-1/2
              flex
              h-[56px]
              w-[56px]
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/90
              bg-black/5
              text-white
              backdrop-blur-[2px]
              transition-all
              duration-500
              group-hover:scale-110
              group-hover:bg-white/15
            "
                  >
                    <span className="ml-1 text-[22px]">▶</span>
                  </button>
                </div>

                {/* TITLE */}

                <h3
                  className="
            mt-4
            font-['Cormorant_Garamond',serif]
            text-[22px]
            font-medium
            leading-none
            text-[#252d2d]
            italic
            sm:text-[23px]
          "
                >
                  {story.title}
                </h3>

                {/* DURATION */}

                <div
                  className="
            mt-3
            font-[Mona_Sans,sans-serif]
            text-[10px]
            font-light
            tracking-[0.38em]
            text-[#696b67]
          "
                >
                  {story.duration}
                </div>
              </article>
            ))}
          </Carousel>
        </RevealItem>
      </div>

      {/* =========================================================
          REFERENCE LANDSCAPE BELOW GUEST STORIES
          Pulled upward to visually meet the video stories, matching
          the reference composition.
      ========================================================= */}

      <div
        className="
          relative
          z-0
          -mt-[55px]
          h-[245px]
          overflow-hidden
          sm:-mt-[65px]
          sm:h-[255px]
          lg:-mt-[78px]
          lg:h-[265px]
        "
      >
        <img
          src={guestStoriesLandscape}
          alt=""
          aria-hidden="true"
          className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
              transition-transform
              duration-[5000ms]
              ease-out
              hover:scale-[1.015]
            "
          draggable={false}
        />

        {/* Keep the upper edge softly blended into the existing section */}
        <div
          className="
              absolute
              inset-x-0
              top-0
              h-[48px]
              bg-gradient-to-b
              from-[#f4efe4]/90
              via-[#f4efe4]/35
              to-transparent
            "
        />

        {/* Fine atmospheric fade at the bottom */}
        <div
          className="
              absolute
              inset-x-0
              bottom-0
              h-[80px]
              bg-gradient-to-t
              from-[#f4efe4]/10
              to-transparent
            "
        />

        {/* Bottom-right Paciano signature */}
        <div
          className="
              absolute
              bottom-10
              right-5
              z-10
              flex
              items-center
              gap-6
              sm:bottom-14
              sm:right-10
              lg:right-16
            "
        >
          <div className="h-[110px] w-px bg-[#4b5047]/60" />

          <div
            className="
                max-w-[230px]
                font-brittany
                text-[43px]
                font-normal
                leading-[1]
                tracking-[0]
                text-[#202828]
              "
          >
            More
            <br />
            than a stay.
            <br />
            <span className="ml-6">A feeling.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestStories;
