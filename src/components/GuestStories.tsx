import { useEffect, useRef, useState } from "react";

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
        transform
        transition-all
        duration-[1100ms]
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
    name: "SOPHIA LEE",
    country: "SINGAPORE",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
  },
  {
    quote:
      "A place to truly breathe. The river, the mountains, the kindness of the people — Paciano stays in your heart.",
    name: "DANIEL KIM",
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
          DECORATIVE LEAVES
      ========================================================= */}

      <div className="pointer-events-none absolute left-0 top-0 hidden w-[150px] opacity-70 lg:block">
        <img
          src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=500&q=70"
          alt=""
          className="h-[250px] w-full object-cover object-right opacity-60 mix-blend-multiply"
        />
      </div>

      <div className="pointer-events-none absolute right-0 top-[180px] hidden w-[120px] opacity-60 lg:block">
        <img
          src="https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=500&q=70"
          alt=""
          className="h-[300px] w-full object-cover object-left opacity-60 mix-blend-multiply"
        />
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24 xl:px-16">
        {/* =======================================================
            HEADER
        ======================================================= */}

        <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.85fr_auto] lg:gap-8">
          {/* EYEBROW + HEADING */}

          <RevealItem delay={0}>
            <div className="flex items-center gap-5">
              <span className="hidden h-px w-16 bg-[#aaa17f] sm:block" />

              <span className="font-[Mona_Sans,sans-serif] text-[10px] font-medium tracking-[0.42em] text-[#817a60] sm:text-[11px]">
                REAL PEOPLE. REAL MOMENTS
              </span>

              <span className="hidden h-px w-16 bg-[#aaa17f] sm:block" />
            </div>

            <h2 className="mt-7 max-w-[650px] font-['Cormorant_Garamond',serif] text-[48px] font-medium leading-[0.88] tracking-[-0.045em] text-[#172224] sm:text-[58px] md:text-[68px] lg:text-[72px]">
              What Our Guests Say
              <span className="block font-['Cormorant_Garamond',serif] text-[#817b5d] italic">
                About Paciano.
              </span>
            </h2>
          </RevealItem>

          {/* DESCRIPTION */}

          <RevealItem delay={180}>
            <div className="border-l border-[#bdb59a] pl-7 lg:mb-2">
              <p className="max-w-[430px] font-[Mona_Sans,sans-serif] text-[15px] font-light leading-[1.75] text-[#565b59] sm:text-[16px]">
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
                className="
                  group
                  flex h-[68px] w-[68px]
                  items-center justify-center
                  rounded-full
                  border border-[#948b6a]
                  text-[#202c2d]
                  transition-all
                  duration-500
                  hover:bg-[#817b5d]
                  hover:text-white
                  hover:shadow-[0_12px_30px_rgba(70,65,40,0.15)]
                "
              >
                <span className="text-[25px] font-light transition-transform duration-500 group-hover:-translate-x-1">
                  ←
                </span>
              </button>

              <button
                type="button"
                className="
                  group
                  flex h-[68px] w-[68px]
                  items-center justify-center
                  rounded-full
                  border border-[#948b6a]
                  text-[#202c2d]
                  transition-all
                  duration-500
                  hover:bg-[#817b5d]
                  hover:text-white
                  hover:shadow-[0_12px_30px_rgba(70,65,40,0.15)]
                "
              >
                <span className="text-[25px] font-light transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </RevealItem>
        </div>

        {/* =======================================================
            TESTIMONIAL CARDS
        ======================================================= */}

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <RevealItem key={item.name} delay={420 + index * 180}>
              <article
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
                {/* quotation mark */}

                <div className="absolute left-6 top-4 font-['Cormorant_Garamond',serif] text-[82px] leading-none text-[#b9b39b]/80">
                  “
                </div>

                {/* quote */}

                <p className="relative z-10 max-w-[400px] pl-10 pt-2 font-['Cormorant_Garamond',serif] text-[23px] font-medium leading-[1.15] tracking-[-0.015em] text-[#3b4140] italic sm:text-[24px]">
                  “{item.quote}”
                </p>

                {/* divider */}

                <div className="my-6 ml-10 h-px w-[55px] bg-[#8d8569]" />

                {/* guest */}

                <div className="ml-10 flex items-center gap-5">
                  <div className="h-[68px] w-[68px] shrink-0 overflow-hidden rounded-full bg-[#ddd7c7]">
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
                    <div className="font-[Mona_Sans,sans-serif] text-[12px] font-medium tracking-[0.34em] text-[#202829]">
                      {item.name}
                    </div>

                    <div className="mt-2 font-[Mona_Sans,sans-serif] text-[11px] font-light tracking-[0.32em] text-[#696d69]">
                      {item.country}
                    </div>
                  </div>
                </div>
              </article>
            </RevealItem>
          ))}
        </div>

        {/* =======================================================
            STORIES DIVIDER
        ======================================================= */}

        <RevealItem delay={300}>
          <div className="mt-14 flex items-center justify-center gap-5">
            <span className="h-px w-16 bg-[#a69e82]" />

            <div className="flex flex-col items-center">
              <span className="mb-2 text-[23px] leading-none text-[#777653]">
                ❧
              </span>

              <span className="font-[Mona_Sans,sans-serif] text-[10px] font-medium tracking-[0.4em] text-[#77715c] sm:text-[11px]">
                STORIES FROM AROUND THE WORLD
              </span>
            </div>

            <span className="h-px w-16 bg-[#a69e82]" />
          </div>
        </RevealItem>

        {/* =======================================================
            VIDEO STORIES
        ======================================================= */}

        <div className="mt-7 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {stories.map((story, index) => (
            <RevealItem key={story.title} delay={650 + index * 180}>
              <article className="group">
                {/* image */}

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

                  {/* image overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/5" />

                  {/* play button */}

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

                {/* title */}

                <h3 className="mt-4 font-['Cormorant_Garamond',serif] text-[22px] font-medium leading-none text-[#252d2d] italic sm:text-[23px]">
                  {story.title}
                </h3>

                {/* duration */}

                <div className="mt-3 font-[Mona_Sans,sans-serif] text-[10px] font-light tracking-[0.38em] text-[#696b67]">
                  {story.duration}
                </div>
              </article>
            </RevealItem>
          ))}
        </div>
      </div>

      {/* =========================================================
          BOTTOM LANDSCAPE
      ========================================================= */}

      <RevealItem delay={500}>
        <div className="relative mt-2 h-[350px] overflow-hidden sm:h-[420px] lg:h-[500px]">
          <img
            src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2200&q=90"
            alt=""
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
              transition-transform
              duration-[4000ms]
              ease-out
              hover:scale-[1.025]
            "
          />

          {/* atmospheric overlay */}

          <div className="absolute inset-0 bg-gradient-to-b from-[#f4efe4]/80 via-transparent to-[#4b4b3a]/15" />

          {/* bottom-right tagline */}

          <div className="absolute bottom-10 right-5 flex items-center gap-6 sm:bottom-14 sm:right-10 lg:right-16">
            <div className="h-[110px] w-px bg-[#4b5047]/60" />

            <div className="max-w-[220px] font-['Cormorant_Garamond',serif] text-[35px] font-medium leading-[0.92] text-[#202828] italic sm:text-[40px]">
              More
              <br />
              than a stay.
              <br />
              <span className="ml-5">A feeling.</span>
            </div>
          </div>
        </div>
      </RevealItem>
    </section>
  );
};

export default GuestStories;
