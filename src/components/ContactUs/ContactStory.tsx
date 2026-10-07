import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import storyImage from "@/images/contact/video-banner.png";

export default function ContactStory() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const storyVideo = "/videos/contact-video.MOV";

  const handlePlay = async () => {
    setIsPlaying(true);

    // Wait for the video element to appear
    requestAnimationFrame(async () => {
      try {
        await videoRef.current?.play();
      } catch (error) {
        console.error("Video could not autoplay:", error);
      }
    });
  };

  useEffect(() => {
    if (!isPlaying) return;

    const playVideo = async () => {
      try {
        const video = videoRef.current;

        if (!video) return;

        video.currentTime = 0;
        await video.play();
      } catch (error) {
        console.error("Video could not play:", error);
      }
    };

    const timer = window.setTimeout(playVideo, 100);

    return () => window.clearTimeout(timer);
  }, [isPlaying]);

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }

    setIsPlaying(false);
  };

  return (
    <section className="relative overflow-hidden bg-[#f3efe3]">
      {/* ─────────────────────────────
      CREAM INTRO AREA
  ───────────────────────────── */}

      {/* <div
        className="
    relative
    z-20
    flex
    min-h-[410px]
    flex-col
    items-center
    px-6
    pt-5
    text-center
    sm:min-h-[470px]
    sm:pt-24
    lg:min-h-[477px]
    
  " 
      >*/}
      <div
        className="
    relative
    z-20
    flex
    min-h-[390px]
    flex-col
    items-center
    px-6
    pt-6
    text-center
    sm:min-h-[420px]
    sm:pt-8
    lg:min-h-[435px]
    lg:pt-10
  "
      >
        {/* Leaf */}
        <svg
          viewBox="0 0 32 32"
          className="mb-3 h-[20px] w-[20px] text-[#71863d]"
          fill="none"
          aria-hidden="true"
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
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 1.4,
            delay: 0,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex items-center gap-4"
        >
          <span className="h-px w-10 bg-[#71863d]/30" />

          <span className="font-manrope text-[12px] font-semibold uppercase tracking-[0.32em] text-[#71803F]">
            Until We Meet
          </span>

          <span className="h-px w-10 bg-[#71863d]/30" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 1.5,
            delay: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="font-cormorant mt-5 max-w-4xl text-[43px] leading-[0.95] tracking-[-.025em] text-[#17251B] sm:text-[52px] lg:text-[60px]"
        >
          Carry a Piece of Paciano
          <br />
          <span className="italic text-[#71863d]">With You.</span>
        </motion.h2>
        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 1.25,
            delay: 1.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mx-auto
            mt-3
            max-w-lg
            font-manrope
            text-[0.88rem]
            leading-relaxed
            text-[#66645c]
            sm:text-[0.9rem]
            "
        >
          Some places don’t just stay in your photographs,
          <br className="hidden sm:block" />
          they stay in your heart.
        </motion.p>
        {/* Play */}
        <motion.button
          type="button"
          onClick={handlePlay}
          aria-label="Watch Our Story"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 1.45,
            delay: 1.75,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            group
            mt-5
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            border
            border-[#102d22]/20
            bg-white/80
            backdrop-blur-sm
            transition-all
            duration-500
            hover:scale-105
            hover:bg-white
          "
        >
          <svg viewBox="0 0 24 24" className="ml-1 h-5 w-5 fill-[#102d22]">
            <path d="M8 5v14l11-7z" />
          </svg>
        </motion.button>
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 1.3,
            delay: 2.05,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-4 text-[10px] font-medium uppercase tracking-[0.3em] text-white"
        >
          Watch Our Story
        </motion.span>
      </div>

      {/* ─────────────────────────────
      IMAGE — STARTS AFTER CREAM
  ───────────────────────────── */}
      <div
        className="
        relative
        -mt-[170px]
        h-[720px]
        sm:-mt-[185px]
        sm:h-[760px]
        lg:-mt-[248px]
        lg:h-[600px]
      "
      >
        <AnimatePresence mode="wait">
          {!isPlaying ? (
            /* ─────────────────────────
         DEFAULT IMAGE
      ───────────────────────── */
            <motion.img
              key="story-image"
              src={storyImage}
              alt="Paciano"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
        "
            />
          ) : (
            /* ─────────────────────────
         VIDEO — SAME SECTION
      ───────────────────────── */
            <motion.video
              key="story-video"
              ref={videoRef}
              src={storyVideo}
              autoPlay
              playsInline
              controls
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
        "
            />
          )}
        </AnimatePresence>

        {/* TOP BLEND INTO CREAM */}
        <div
          className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          z-10
          h-[260px]
          bg-gradient-to-b
          from-[#f3efe3]
          via-[#f3efe3]/70
          to-transparent
        "
        />

        {/* BOTTOM BLEND */}
        <div
          className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-10
          h-[330px]
          bg-gradient-to-t
          from-[#06251a]
          via-[#06251a]/75
          to-transparent
        "
        />

        {/* FEATURE CARDS */}
        <div
          className="
        absolute
        inset-x-0
        bottom-0
        z-20
        px-5
        pb-8
        sm:px-8
        sm:pb-10
        lg:px-16
        lg:pb-12
    "
        >
          <div
            className="
        mx-auto
        grid
        max-w-7xl
        grid-cols-1
        gap-7
        sm:gap-8
        md:grid-cols-3
        md:gap-0
        "
          >
            {/* ───────────── ITEM 1 ───────────── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 1.5,
                delay: 2.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                flex
                items-center
                gap-5
                md:border-r
                md:border-white/20
                md:pr-10
            "
            >
              {/* ICON */}
              <motion.div
                animate={{
                  y: [0, -7, 0, 6, 0],
                }}
                transition={{
                  duration: 2.75,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.08,
                }}
                className="
                group/icon
                relative
                flex
                h-[58px]
                w-[58px]
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#d9c37a]/90
                bg-[#06251a]/20
                backdrop-blur-[2px]
                transition-all
                duration-700
                hover:border-[#f0d98d]
                hover:bg-[#d9c37a]/10
                hover:shadow-[0_0_30px_rgba(217,195,122,0.18)]
              "
              >
                <svg
                  viewBox="0 0 48 48"
                  // className="h-7 w-7 text-[#e0c878]"
                  className="
                  h-7
                  w-7
                  text-[#e0c878]
                  transition-all
                  duration-700
                  group-hover/icon:scale-110
                  group-hover/icon:text-[#f1dda0]
                "
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 34L19 20L25 27L30 21L40 34H8Z" />
                  <path d="M16 34L22 27L28 34" />
                </svg>
              </motion.div>

              <div>
                <p
                  className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.24em]
                text-[#dcc77e]
                sm:text-[10px]
            "
                >
                  Breathtaking Surroundings
                </p>

                <p
                  className="
                    font-manrope                 
                    mt-2
                    text-[12px]
                    leading-5
                    text-[#F2EBDD]/[0.68]
                    sm:text-sm
                    font-light
                    leading-[1.85]
                    "
                >
                  Rivers, forests and endless horizons.
                </p>
              </div>
            </motion.div>
            {/* ───────────── ITEM 2 ───────────── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 1.5,
                delay: 2.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
            flex
            items-center
            gap-5
            md:border-r
            md:border-white/20
            md:px-10
        "
            >
              {/* ICON */}
              <motion.div
                animate={{
                  y: [0, 6, 0, -7, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: 2.3,
                  ease: "easeInOut",
                  delay: 0.6,
                }}
                whileHover={{
                  scale: 1.08,
                }}
                className="
                  group/icon
                  relative
                  flex
                  h-[58px]
                  w-[58px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#d9c37a]/90
                  bg-[#06251a]/20
                  backdrop-blur-[2px]
                  transition-all
                  duration-700
                  hover:border-[#f0d98d]
                  hover:bg-[#d9c37a]/10
                  hover:shadow-[0_0_30px_rgba(217,195,122,0.18)]
                "
              >
                <svg
                  viewBox="0 0 48 48"
                  className="h-7 w-7 text-[#e0c878]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13 35C21 31 27 24 31 13" />
                  <path d="M28 17C29 11 35 9 40 11C39 17 35 21 29 21" />
                  <path d="M25 25C19 24 15 20 15 15C21 15 26 19 27 24" />
                </svg>
              </motion.div>

              <div>
                <p
                  className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.24em]
                  text-[#dcc77e]
                  sm:text-[10px]
                 "
                >
                  Curated Experiences
                </p>

                <p
                  className="
                    font-manrope                 
                    mt-2
                    text-[12px]
                    leading-5
                    text-[#F2EBDD]/[0.68]
                    sm:text-sm
                    font-light
                    leading-[1.85]"
                >
                  Thoughtful moments, made for you.
                </p>
              </div>
            </motion.div>
            {/* ───────────── ITEM 3 ───────────── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 1.5,
                delay: 2.75,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
            flex
            items-center
            gap-5
            md:pl-10
        "
            >
              {/* ICON */}
              <motion.div
                animate={{
                  y: [0, -6, 0, 7, 0],
                }}
                transition={{
                  duration: 5.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.1,
                }}
                whileHover={{
                  scale: 1.08,
                }}
                className="
                  group/icon
                  relative
                  flex
                  h-[58px]
                  w-[58px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#d9c37a]/90
                  bg-[#06251a]/20
                  backdrop-blur-[2px]
                  transition-all
                  duration-700
                  hover:border-[#f0d98d]
                  hover:bg-[#d9c37a]/10
                  hover:shadow-[0_0_30px_rgba(217,195,122,0.18)]
                "
              >
                <svg
                  viewBox="0 0 48 48"
                  className="h-7 w-7 text-[#e0c878]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    d="
                M24 37
                C21 34 11 28 11 20
                C11 15 14 12 19 12
                C22 12 24 14 24 17
                C24 14 27 12 30 12
                C35 12 38 15 38 20
                C38 28 28 34 24 37Z
                "
                  />
                </svg>
              </motion.div>

              <div>
                <p
                  className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.24em]
                  text-[#dcc77e]
                  sm:text-[10px]
                 "
                >
                  A Place to Belong
                </p>

                <p
                  className="
                    font-manrope                 
                    mt-2
                    text-[12px]
                    leading-5
                    text-[#F2EBDD]/[0.68]
                    sm:text-sm
                    font-light
                    leading-[1.85]
                    "
                >
                  More than a stay, a connection.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
