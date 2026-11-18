import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import GalleryClosing from "@/components/Gallery/GalleryClosing";
import closingLandscape from "@/images/gallery/moments-closing.png";

export type GalleryCategory =
  | "Stays"
  | "Dining"
  | "Celebrations"
  | "Experiences"
  | "Property";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  title?: string;
}

interface MomentsGalleryProps {
  images: GalleryImage[];
}

const filters = [
  "All Moments",
  "Stays",
  "Dining",
  "Celebrations",
  "Experiences",
  "Property",
] as const;

type FilterType = (typeof filters)[number];

const cardLayout = (index: number) => {
  if (index === 0) {
    return `
      col-span-2 row-span-2
      sm:col-span-4 sm:row-span-2
      lg:col-span-7 lg:row-span-2
    `;
  }

  if (index === 1 || index === 2) {
    return `
      col-span-1 row-span-1
      sm:col-span-2
      lg:col-span-5
    `;
  }

  return `
    col-span-1 row-span-1
    sm:col-span-2
    lg:col-span-4
  `;
};

export default function GalleryMoments({ images }: MomentsGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All Moments");

  const reduceMotion = useReducedMotion();

  const filteredImages = useMemo(() => {
    if (activeFilter === "All Moments") {
      return images;
    }

    return images.filter((image) => image.category === activeFilter);
  }, [images, activeFilter]);

  return (
    <section
      //   className="
      //     relative w-full overflow-hidden
      //     bg-[#eee9dc]
      //     px-4 py-12
      //     sm:px-6 sm:py-16
      //     md:px-8 md:py-20
      //     lg:px-12 lg:py-24
      //     xl:px-16
      //   "
      className="
        relative w-full overflow-hidden
        bg-[#eee9dc]
        px-0
        pt-12 pb-0
        sm:pt-16
        md:pt-20
        lg:pt-24
    "
    >
      {/* <div className="mx-auto w-full max-w-[1500px]"> */}
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-12">
        {/* SECTION HEADING */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 1.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          //   className="
          //       mb-7 flex flex-col items-center
          //       sm:mb-9 md:mb-11
          //     "
          className="
                mb-10
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
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <span className="h-px w-8 bg-[#b9b29e] sm:w-12" />

            <span
              className="
                font-manrope text-[12px] font-semibold
                uppercase tracking-[0.25em]
                text-[#485b3a]
                sm:text-[10px] sm:tracking-[0.3em]
              "
            >
              Explore Our Moments
            </span>

            <span className="h-px w-8 bg-[#b9b29e] sm:w-12" />
          </div>
        </motion.div>

        {/* CATEGORY FILTERS */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.15,
          }}
          className="
            mb-8 mt-2
            flex w-full min-w-0
            justify-center
            sm:mb-9 md:mb-11
        "
        >
          <div
            className="
                grid w-full max-w-[360px]
                grid-cols-3
                place-items-center
                gap-x-2 gap-y-3

                sm:flex sm:max-w-none
                sm:flex-wrap sm:items-center
                sm:justify-center sm:gap-2

                lg:gap-3
                "
          >
            {filters.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={isActive}
                  className={`
                    flex min-w-0 w-full
                    items-center justify-center
                    whitespace-nowrap
                    rounded-full border
                    px-2 py-2
                    font-manrope text-[12px]
                    font-semibold tracking-wide

                    transition-[background-color,border-color,box-shadow]
                    duration-300 ease-out

                    sm:w-auto
                    sm:px-3.5 sm:py-2.5
                    sm:text-[10px]

                    lg:px-4 lg:text-[11px]

                        ${
                          isActive
                            ? "border-[#50643b] bg-[#50643b] text-[#fffdf6] shadow-[0_4px_12px_rgba(50,65,38,0.12)]"
                            : "border-[#d8d0bc] bg-white/25 text-[#586047] hover:border-[#71805c] hover:bg-white/60"
                        }
                    `}
                >
                  {filter === "All Moments" && <span className="mr-1">✧</span>}

                  {filter === "Stays" && <span className="mr-1">⌂</span>}

                  {filter === "Dining" && <span className="mr-1">♧</span>}

                  {filter === "Celebrations" && <span className="mr-1">◇</span>}

                  {filter === "Experiences" && <span className="mr-1">⌁</span>}

                  {filter === "Property" && <span className="mr-1">♧</span>}

                  {filter}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* EDITORIAL IMAGE GRID */}
        <motion.div
          layout
          className="
            grid w-full min-w-0
            grid-cols-2
            auto-rows-[112px]
            gap-2

            sm:grid-cols-6
            sm:auto-rows-[145px]
            sm:gap-3

            md:auto-rows-[165px]
            md:gap-4

            lg:grid-cols-12
            lg:auto-rows-[150px]
            lg:gap-4

            xl:auto-rows-[175px]
            xl:gap-5

            [@media(orientation:landscape)_and_(max-height:500px)]:auto-rows-[100px]
        "
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.article
                key={image.id}
                layout
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 28,
                        scale: 0.97,
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={
                  reduceMotion
                    ? { opacity: 0 }
                    : {
                        opacity: 0,
                        scale: 0.96,
                        y: 12,
                      }
                }
                transition={{
                  duration: reduceMotion ? 0.15 : 0.85,
                  delay: reduceMotion ? 0 : index * 0.055,
                  ease: [0.16, 1, 0.3, 1],
                  layout: {
                    duration: 0.65,
                    ease: [0.16, 1, 0.3, 1],
                  },
                }}
                className={`
                    ${cardLayout(index)}
                    group relative min-w-0 min-h-0
                    overflow-hidden rounded-lg
                    bg-[#ded8c9]
                    shadow-[0_3px_12px_rgba(40,45,30,0.08)]
                    sm:rounded-xl
                    `}
              >
                {/* IMAGE */}
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  className="
                    absolute inset-0 h-full w-full
                    object-cover
                    transition-transform
                    duration-[1200ms]
                    ease-[cubic-bezier(0.16,1,0.3,1)]
                    group-hover:scale-[1.055]
                  "
                />

                {/* SUBTLE IMAGE OVERLAY */}
                <div
                  className="
                    pointer-events-none absolute inset-0
                    bg-gradient-to-t
                    from-[#17271c]/20
                    via-transparent to-transparent
                    opacity-50
                    transition-opacity duration-700
                    group-hover:opacity-100
                  "
                />

                {/* OPTIONAL IMAGE TITLE */}
                {image.title && (
                  <div
                    className="
                      absolute inset-x-0 bottom-0
                      translate-y-2 px-4 py-3
                      opacity-0
                      transition-all duration-500
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  >
                    <p
                      className="
                        font-['Cormorant_Garamond']
                        text-lg italic text-white
                        drop-shadow-md
                        sm:text-xl
                      "
                    >
                      {image.title}
                    </p>
                  </div>
                )}
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* EMPTY STATE */}
        {filteredImages.length === 0 && (
          <div className="py-20 text-center">
            <p
              className="
              font-['Cormorant_Garamond']
              text-2xl italic text-[#506044]
            "
            >
              Moments are being curated.
            </p>
          </div>
        )}
      </div>
      <GalleryClosing image={closingLandscape} />
    </section>
  );
}
