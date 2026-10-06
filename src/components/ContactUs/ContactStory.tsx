import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import storyImage from "@/images/contact/video-banner.png";

export default function ContactStorySection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const storyVideo = "/videos/contact-video.mp4";

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

<div
  className="
    relative
    z-20
    flex
    min-h-[410px]
    flex-col
    items-center
    px-6
    pt-20
    text-center
    sm:min-h-[470px]
    sm:pt-24
    lg:min-h-[500px]
    lg:pt-28
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
    <div className="flex items-center gap-4">
      <span className="h-px w-10 bg-[#71863d]/30" />      
                  
      <span className="font-manrope text-[12px] font-semibold uppercase tracking-[0.32em] text-[#71803F]">
        Until We Meet
      </span>

      <span className="h-px w-10 bg-[#71863d]/30" />
    </div>

    {/* Heading */}
    <h2 className="font-cormorant mt-5 max-w-4xl font-serif text-[42px] leading-[0.95] text-[#102d22] sm:text-[54px] lg:text-[60px]">
      Carry a Piece of Paciano
      <br />

      <span className="italic text-[#71863d]">
        With You.
      </span>
    </h2>



    {/* Description */}
     <p
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
    </p>

    {/* Play */}
    <button
        type="button"
        onClick={handlePlay}
        aria-label="Watch Our Story"
        className="
            group
            mt-7
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
      <svg
        viewBox="0 0 24 24"
        className="ml-1 h-5 w-5 fill-[#102d22]"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    </button>

    <span className="mt-4 text-[10px] font-medium uppercase tracking-[0.3em] text-white">
      Watch Our Story
    </span>
  </div>


  {/* ─────────────────────────────
      IMAGE — STARTS AFTER CREAM
  ───────────────────────────── */}
  {/* <div className="relative -mt-[170px] h-[720px] sm:-mt-[190px] sm:h-[760px] lg:-mt-[210px] lg:h-[820px]"> */}
  <div className="relative -mt-[190px] h-[720px] sm:-mt-[210px] sm:h-[760px] lg:-mt-[230px] lg:h-[820px]">

    <img
      src={storyImage}
      alt="Paciano"
      className="
        absolute
        inset-0
        h-full
        w-full
        object-cover
        object-center
      "
    />
    <AnimatePresence>
  {isPlaying && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="
        absolute
        inset-0
        z-40
        flex
        items-center
        justify-center
        bg-[#061d15]/90
        p-4
        sm:p-8
        lg:p-12
      "
    >
      {/* VIDEO */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.5 }}
        className="
          relative
          h-full
          w-full
          max-w-6xl
          overflow-hidden
          rounded-sm
          bg-black
          shadow-2xl
        "
      >
        <video
          ref={videoRef}
          src={storyVideo}
          controls
          playsInline
          className="
            h-full
            w-full
            object-contain
          "
        />

        {/* CLOSE */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close video"
          className="
            absolute
            right-4
            top-4
            z-50
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/30
            bg-black/40
            text-white
            backdrop-blur-md
            transition
            duration-300
            hover:bg-black/70
          "
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              d="M6 6L18 18M18 6L6 18"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    
    {/* TOP BLEND INTO CREAM */}
  <div
    className="
      pointer-events-none
      absolute
      inset-x-0
      top-0
      z-[5]
      h-[260px]
      bg-gradient-to-b
      from-[#f3efe3]
      via-[#f3efe3]/70
      to-transparent
    "
  />


{/* BOTTOM FOOTER BLEND */}
    <div
    className="
    pointer-events-none
    absolute
    inset-x-0
    bottom-0
    z-[5]
    h-[330px]
    bg-gradient-to-t
    from-[#06251a]
    via-[#06251a]/75
    to-transparent
  "
/>
{/* SEAMLESS TRANSITION INTO FOOTER */}
<div
  className="
    absolute
    inset-x-0
    bottom-0
    h-[90px]
    translate-y-full
    bg-gradient-to-b
    from-[#06251a]
    to-[#06251a]
  "
/>

{/* BOTTOM DARK GRADIENT */}
<div
  className="
    absolute
    inset-x-0
    bottom-0
    h-[280px]
    bg-gradient-to-t
    from-[#06251a]
    via-[#06251a]/70
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
        <div
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
        <div
            className="
            flex
            h-[58px]
            w-[58px]
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-[#d9c37a]/90
            bg-black/5
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
            <path d="M8 34L19 20L25 27L30 21L40 34H8Z" />
            <path d="M16 34L22 27L28 34" />
            </svg>
        </div>

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
                mt-2
                text-[12px]
                leading-5
                text-white/85
                sm:text-sm
            "
            >
            Rivers, forests and endless horizons.
            </p>
        </div>
        </div>


        {/* ───────────── ITEM 2 ───────────── */}
        <div
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
        <div
            className="
            flex
            h-[58px]
            w-[58px]
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-[#d9c37a]/90
            bg-black/5
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
        </div>

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
                mt-2
                text-[12px]
                leading-5
                text-white/85
                sm:text-sm
            "
            >
            Thoughtful moments, made for you.
            </p>
        </div>
        </div>


        {/* ───────────── ITEM 3 ───────────── */}
        <div
        className="
            flex
            items-center
            gap-5
            md:pl-10
        "
        >
        {/* ICON */}
        <div
            className="
            flex
            h-[58px]
            w-[58px]
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-[#d9c37a]/90
            bg-black/5
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
        </div>

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
                mt-2
                text-[12px]
                leading-5
                text-white/85
                sm:text-sm
            "
            >
            More than a stay, a connection.
            </p>
        </div>
        </div>

    </div>
    </div>
  </div>

</section>
  );
}