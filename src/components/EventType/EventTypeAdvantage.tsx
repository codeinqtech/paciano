import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Users,
  UsersRound,
  Heart,
  Flower2,
  Sparkles,
  CalendarDays,
  Landmark,
  Handshake,
  ChartNoAxesCombined,
  ChartNoAxesColumnIncreasing,
  Presentation,
  X,
} from "lucide-react";
import testimonialLeaf from "@/images/testimonial-leaf.png";
import contactLeafIcon from "@/images/contact/paciano-leaf-gold-transparent.png";

interface AdvantageFeature {
  title: string;
  description: string;
  icon: string;
}

interface AdvantageImage {
  src: string;
  alt: string;
}

interface EventAdvantageProps {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  features: AdvantageFeature[];
  images: AdvantageImage[];
}

const iconMap = {
  users: Users,
  "users-round": UsersRound,
  presentation: Presentation,
  chart: ChartNoAxesCombined,
  calendar: CalendarDays,
  heart: Heart,
  handshake: Handshake,
  flower: Flower2,
  sparkles: Sparkles,
  landmark: Landmark,
} as const;

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

export default function EventTypeAdvantage({
  eyebrow,
  titleLine1,
  titleLine2,
  description,
  features,
  images,
}: EventAdvantageProps) {
  const [activeImage, setActiveImage] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.15,
  });

  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsLightboxOpen(false);
      }

      if (event.key === "ArrowRight") {
        goToImage(activeImage + 1);
      }

      if (event.key === "ArrowLeft") {
        goToImage(activeImage - 1);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen, activeImage]);

  const reduceMotion = useReducedMotion();

  const reveal = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
          transition: {
            duration: 0.8,
            delay,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        };

  const galleryImages = images.slice(0, 4);

  const goToImage = (index: number) => {
    if (!galleryImages.length) return;

    setActiveImage((index + galleryImages.length) % galleryImages.length);
  };

  const currentImage = galleryImages[activeImage];

  // Automatically change gallery image
  useEffect(() => {
    if (isLightboxOpen || galleryImages.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % galleryImages.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, [isLightboxOpen, galleryImages.length]);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        isolate
        overflow-hidden
        bg-[#F7F3E9]
        px-5
        pt-7
        pb-14
        sm:px-8
        sm:pt-9
        sm:pb-16
        lg:px-12
        lg:pt-12
        lg:pb-20
        xl:px-20
        "
    >
      <FloatingLeaf
        src={testimonialLeaf}
        duration={14000}
        className="-left-[42px] -top-[18px] w-[262px]"
      />
      <div className="mx-auto max-w-[1400px]">
        {/* TOP FEATURE STRIP */}

        <motion.div
          {...reveal(0.05)}
          className="
            relative
            z-10
            mb-8
            grid
            grid-cols-2
            gap-x-5
            gap-y-7          
          
            pb-8

            sm:grid-cols-3
            md:grid-cols-2

            lg:mb-10
            lg:grid-cols-4
            lg:gap-8

            [@media(orientation:landscape)_and_(min-width:600px)_and_(max-height:500px)]:grid-cols-4
            [@media(orientation:landscape)_and_(min-width:600px)_and_(max-height:500px)]:gap-x-3
            [@media(orientation:landscape)_and_(min-width:600px)_and_(max-height:500px)]:gap-y-0
            [@media(orientation:landscape)_and_(min-width:600px)_and_(max-height:500px)]:mb-6
            [@media(orientation:landscape)_and_(min-width:600px)_and_(max-height:500px)]:pb-5
        "
        >
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap] || Users;

            return (
              <motion.div
                key={feature.title}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }
                }
                transition={{
                  duration: reduceMotion ? 0 : 0.75,
                  delay: reduceMotion ? 0 : 0.12 + index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                    relative
                    z-10
                    flex
                    min-w-0
                    flex-col
                    items-center
                    justify-center
                    text-center

                    lg:border-r
                    lg:border-[#DED8C9]
                    lg:last:border-r-0
                    "
              >
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.8 }}
                  animate={
                    reduceMotion
                      ? { opacity: 1, scale: 1 }
                      : {
                          opacity: 1,
                          scale: [1, 1.08, 1],
                          y: [0, -4, 0],
                        }
                  }
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : {
                          opacity: {
                            duration: 0.7,
                            delay: index * 0.15,
                          },
                          scale: {
                            duration: 3.2,
                            repeat: Infinity,
                            repeatDelay: 0.4,
                            ease: "easeInOut",
                            delay: index * 0.3,
                          },
                          y: {
                            duration: 3.2,
                            repeat: Infinity,
                            repeatDelay: 0.4,
                            ease: "easeInOut",
                            delay: index * 0.3,
                          },
                        }
                  }
                >
                  <Icon
                    size={23}
                    strokeWidth={1.3}
                    className="mb-3 text-[#68753F]"
                  />
                </motion.div>

                <span
                  className="
                    max-w-[150px]
                    font-manrope
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.13em]
                    leading-[1.5]
                    text-[#354332]
                    sm:text-[10px]
                    [@media(orientation:landscape)_and_(max-height:500px)]:text-[8px]
                    [@media(orientation:landscape)_and_(max-height:500px)]:tracking-[0.08em]
                "
                >
                  {feature.title}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ==========================================
            DIVIDER
        ========================================== */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scaleX: 0.7 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="
            mt-4 mb-10 flex items-center gap-5
            sm:mt-5 sm:mb-12
            lg:mt-6 lg:mb-14
            [@media(orientation:landscape)_and_(max-height:500px)]:mt-3
            [@media(orientation:landscape)_and_(max-height:500px)]:mb-8
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

        {/* MAIN CONTENT */}
        <div
          className="
          grid
          grid-cols-1
          items-stretch
          gap-10
          lg:grid-cols-[0.78fr_1.22fr]
          lg:gap-14
          xl:gap-20
          [@media(orientation:landscape)_and_(min-width:700px)_and_(max-width:1023px)]:grid-cols-1
          [@media(orientation:landscape)_and_(min-width:700px)_and_(max-width:1023px)]:gap-7
        "
        >
          {/* LEFT CONTENT */}

          <motion.div
            {...reveal(0.15)}
            className="order-2 min-w-0 lg:order-1 
            [@media(orientation:landscape)_and_(min-width:700px)_and_(max-width:1023px)]:w-full
            [@media(orientation:landscape)_and_(min-width:700px)_and_(max-width:1023px)]:max-w-none"
          >
            {/* EYEBROW WITH LEAF */}
            <div className="mb-4 flex items-center gap-2">
              <svg
                viewBox="0 0 32 32"
                className="h-[22px] w-[22px] shrink-0 text-[#71863D]"
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
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.28em]
                  text-[#68753F]
                  sm:text-[10px]
                "
              >
                {eyebrow}
              </span>
            </div>
            {/* HEADING */}
            <motion.h2
              id="advantage-title"
              {...reveal(0.25)}
              className="
                mb-5
                max-w-[760px]
                font-display
                leading-[0.91]
                tracking-[-0.045em]
                text-[#1c2c21]
                font-['Cormorant_Garamond']

                max-[380px]:text-[2.85rem]
                text-[44px]
                sm:text-[52px]
                md:text-[50px]
                lg:text-[44px]
                xl:text-[76px]
                [@media(min-width:1200px)_and_(max-width:1599px)]:text-[60px]
              "
            >
              <span className="block">{titleLine1}</span>

              <em className="block font-normal italic text-[#78943F]">
                {titleLine2}
              </em>
            </motion.h2>
            {/* DESCRIPTION */}
            <p
              className="
                mb-7
                max-w-[500px]
                font-manrope
                text-[13px]
                leading-[1.8]
                text-[#50584F]

                sm:text-[14px]
                lg:mt-7
                lg:text-[13px]
              "
            >
              {description}
            </p>
            {/* FEATURES */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  {...reveal(0.35 + index * 0.12)}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={16}
                    strokeWidth={1.5}
                    className="mt-[2px] shrink-0 text-[#71863D]"
                  />

                  <div>
                    <h3
                      className="
                        font-manrope
                        text-[11px]
                        font-semibold
                        text-[#50584F]
                        sm:text-[12px]
                      "
                    >
                      {feature.title}
                    </h3>

                    <p
                      className="
                        mt-1
                        font-manrope
                        text-[10px]
                        leading-[1.7]
                        text-[#77796F]  
                        sm:text-[12px]
                      "
                    >
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE GALLERY */}
          <motion.div
            {...reveal(0.3)}
            className="
              order-1
              flex
              min-w-0
              flex-col
              lg:order-2
              lg:h-full
              [@media(orientation:landscape)_and_(min-width:700px)_and_(max-width:1023px)]:w-full
            "
          >
            {currentImage && (
              <>
                {/* MAIN IMAGE */}
                <div
                  className="
                    group
                    relative
                    aspect-[4/3]
                    min-h-0
                    overflow-hidden
                    rounded-[18px]
                    bg-[#E8E2D5]
                    shadow-[0_15px_45px_rgba(44,48,34,0.12)]
                    sm:aspect-[1.45/1]
                    lg:flex-1
                    lg:aspect-auto
                    lg:min-h-[320px]
                    [@media(orientation:landscape)_and_(min-width:700px)_and_(max-width:1023px)]:aspect-[1.8/1]
                    [@media(orientation:landscape)_and_(min-width:700px)_and_(max-width:1023px)]:flex-none
                    [@media(orientation:landscape)_and_(min-width:700px)_and_(max-width:1023px)]:min-h-0
                  "
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      onClick={() => setIsLightboxOpen(true)}
                      key={currentImage.src}
                      src={currentImage.src}
                      alt={currentImage.alt}
                      initial={
                        reduceMotion ? false : { opacity: 0, scale: 1.035 }
                      }
                      animate={{ opacity: 1, scale: 1.09 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.7, ease: "easeInOut" }}
                      className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        cursor-zoom-in
                        object-cover
                        [@media(orientation:landscape)_and_(max-height:600px)]:aspect-[1.5/1]
                      "
                    />
                  </AnimatePresence>

                  {/* PREVIOUS */}
                  <button
                    type="button"
                    onClick={() => goToImage(activeImage - 1)}
                    aria-label="Previous image"
                    className="
                      absolute
                      left-4
                      top-1/2
                      z-10
                      flex
                      h-9
                      w-9
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-full
                      bg-[#F7F3E9]/95
                      text-[#354332]
                      shadow-md
                      transition
                      hover:bg-white
                      sm:h-11
                      sm:w-11
                    "
                  >
                    <ArrowLeft size={17} />
                  </button>

                  {/* NEXT */}
                  <button
                    type="button"
                    onClick={() => goToImage(activeImage + 1)}
                    aria-label="Next image"
                    className="
                      absolute
                      right-4
                      top-1/2
                      z-10
                      flex
                      h-9
                      w-9
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-full
                      bg-[#F7F3E9]/95
                      text-[#354332]
                      shadow-md
                      transition
                      hover:bg-white
                      sm:h-11
                      sm:w-11
                    "
                  >
                    <ArrowRight size={17} />
                  </button>
                </div>

                {/* THUMBNAIL CAROUSEL */}
                <div
                  className="
                  mt-4
                  flex
                  items-center
                  gap-2
                  sm:gap-3
                "
                >
                  <button
                    type="button"
                    onClick={() => goToImage(activeImage - 1)}
                    aria-label="Previous thumbnails"
                    className="
                      hidden
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#D8D3C7]
                      text-[#68753F]
                      transition
                      hover:bg-white
                      sm:flex
                    "
                  >
                    <ArrowLeft size={15} />
                  </button>

                  <div
                    className="
                    flex
                    min-w-0
                    flex-1
                    gap-2
                    overflow-x-auto
                    pb-2
                    [scrollbar-width:none]
                    [&::-webkit-scrollbar]:hidden
                    sm:gap-3
                  "
                  >
                    {galleryImages.map((image, index) => (
                      <button
                        key={image.src}
                        type="button"
                        onClick={() => setActiveImage(index)}
                        aria-label={`View image ${index + 1}`}
                        aria-pressed={activeImage === index}
                        // className={`
                        //   relative
                        //   h-[68px]
                        //   w-[88px]
                        //   shrink-0
                        //   overflow-hidden
                        //   rounded-[9px]
                        //   border-[2px]
                        //   transition-all
                        //   duration-300
                        //   sm:h-[78px]
                        //   sm:w-[100px]
                        //   md:h-[88px]
                        //   md:w-[112px]
                        //   ${
                        //     activeImage === index
                        //       ? "border-[#71863D] opacity-100 shadow-md"
                        //       : "border-[#D8D3C7] opacity-75 hover:opacity-100"
                        //   }
                        // `}
                        className={`
                          relative
                          h-[68px]
                          min-w-0
                          flex-1
                          overflow-hidden
                          rounded-[9px]
                          border-[2px]
                          transition-all
                          duration-300
                          sm:h-[78px]
                          md:h-[88px]
                          ${
                            activeImage === index
                              ? "border-[#71863D] opacity-100 shadow-md"
                              : "border-[#D8D3C7] opacity-75 hover:opacity-100"
                          }
                        `}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="h-full w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => goToImage(activeImage + 1)}
                    aria-label="Next thumbnails"
                    className="
                      hidden
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#D8D3C7]
                      text-[#68753F]
                      transition
                      hover:bg-white
                      sm:flex
                    "
                  >
                    <ArrowRight size={15} />
                  </button>
                </div>
              </>
            )}
          </motion.div>

          {/* FULLSCREEN IMAGE VIEWER */}
          {isLightboxOpen &&
            currentImage &&
            createPortal(
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="
                      fixed
                      inset-0
                      z-[10000]
                      flex
                      flex-col
                      bg-[#111810]/[0.99]
                      px-4
                      py-5
                      sm:px-8
                      sm:py-6
                    "
                >
                  {/* TOP BAR */}
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-manrope text-[9px] font-semibold uppercase tracking-[0.28em] text-white/45">
                        PACIANO EXPERIENCES
                      </p>

                      <p className="mt-1 font-['Cormorant_Garamond'] text-xl text-white sm:text-2xl">
                        {currentImage.alt}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsLightboxOpen(false)}
                      aria-label="Close fullscreen gallery"
                      className="
                        flex h-10 w-10 items-center justify-center
                        rounded-full border border-white/25
                        text-white/80 transition hover:bg-white/10
                      "
                    >
                      <X size={20} strokeWidth={1.2} />
                    </button>
                  </div>

                  {/* MAIN IMAGE AREA */}
                  <div className="relative flex min-h-0 flex-1 items-center justify-center py-5">
                    {/* PREVIOUS */}
                    <button
                      type="button"
                      onClick={() => goToImage(activeImage - 1)}
                      aria-label="Previous image"
                      className="
                        absolute left-0 z-20
                        flex h-11 w-11 items-center justify-center
                        rounded-full border border-white/25
                        text-white transition hover:bg-white/10
                        sm:left-1
                      "
                    >
                      <ArrowLeft size={19} strokeWidth={1.3} />
                    </button>

                    {/* SELECTED IMAGE */}
                    <div
                      className="
                        relative
                        flex
                        h-full
                        w-full
                        items-center
                        justify-center
                        px-12
                        sm:px-16
                      "
                    >
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={currentImage.src}
                          src={currentImage.src}
                          alt={currentImage.alt}
                          initial={{ opacity: 0, scale: 0.94 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.97 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="
                            max-h-full
                            max-w-full
                            rounded-[18px]
                            object-contain
                            shadow-[0_20px_80px_rgba(0,0,0,0.35)]
                          "
                        />
                      </AnimatePresence>
                    </div>

                    {/* NEXT */}
                    <button
                      type="button"
                      onClick={() => goToImage(activeImage + 1)}
                      aria-label="Next image"
                      className="
                        absolute right-0 z-20
                        flex h-11 w-11 items-center justify-center
                        rounded-full border border-white/25
                        text-white transition hover:bg-white/10
                        sm:right-1
                      "
                    >
                      <ArrowRight size={19} strokeWidth={1.3} />
                    </button>
                  </div>

                  {/* THUMBNAILS */}
                  <div className="flex shrink-0 justify-center gap-2 overflow-x-auto pb-1 sm:gap-3">
                    {galleryImages.map((image, index) => (
                      <button
                        key={`${image.src}-${index}`}
                        type="button"
                        onClick={() => setActiveImage(index)}
                        aria-label={`View image ${index + 1}`}
                        aria-pressed={activeImage === index}
                        className={`
                          h-[58px]
                          w-[76px]
                          shrink-0
                          overflow-hidden
                          rounded-[5px]
                          border-2
                          transition-all
                          duration-300
                          sm:h-[78px]
                          sm:w-[96px]
                          ${
                            activeImage === index
                              ? "border-[#A9B875] opacity-100"
                              : "border-white/10 opacity-45 hover:opacity-90"
                          }
                        `}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="h-full w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>,
              document.body,
            )}
        </div>
      </div>
    </section>
  );
}
