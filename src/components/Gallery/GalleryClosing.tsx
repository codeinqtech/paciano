import { motion, useReducedMotion } from "framer-motion";
import contactLeafIcon from "@/images/contact/paciano-leaf-gold-transparent.png";

interface MomentsClosingSectionProps {
  image: string;
}

export default function GalleryClosing({ image }: MomentsClosingSectionProps) {
  const reduceMotion = useReducedMotion();

  // Match this with your actual footer background.
  const FOOTER_BG = "#17271c";
  const GALLERY_BG = "#eee9dc";

  return (
    <section
      className="
        relative isolate
        w-full overflow-hidden
      "
      style={{
        background: `
          linear-gradient(
            to bottom,
            ${GALLERY_BG} 0%,
            ${GALLERY_BG} 12%,
            ${FOOTER_BG} 100%
          )
        `,
      }}
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: reduceMotion ? 0 : 1.4,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          relative w-full
          h-[230px]
          sm:h-[280px]
          md:h-[330px]
          lg:h-[370px]
          xl:h-[410px]
        "
      >
        {/* ORIGINAL IMAGE */}
        <motion.img
          src={image}
          alt="Paciano surrounded by nature"
          loading="lazy"
          decoding="async"
          initial={reduceMotion ? false : { scale: 1.06 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 2.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            absolute inset-0
            h-full w-full
            object-cover
            object-[center_48%]
          "
          style={{
            filter: "brightness(0.72) saturate(0.88) contrast(1.08)",

            maskImage: `
              linear-gradient(
                to bottom,
                transparent 0%,
                black 19%,
                black 78%,
                transparent 100%
              )
            `,
            WebkitMaskImage: `
              linear-gradient(
                to bottom,
                transparent 0%,
                black 19%,
                black 78%,
                transparent 100%
              )
            `,
          }}
        />

        {/* CINEMATIC FOREST GREEN OVERLAY */}
        <div
          className="
            pointer-events-none
            absolute inset-0 z-[1]
          "
          style={{
            background: `
              linear-gradient(
                180deg,
                rgba(15,35,25,0.22) 0%,
                rgba(15,35,25,0.42) 45%,
                rgba(15,35,25,0.62) 100%
              )
            `,
            maskImage: `
              linear-gradient(
                to bottom,
                transparent 0%,
                black 19%,
                black 78%,
                transparent 100%
              )
            `,
            WebkitMaskImage: `
              linear-gradient(
                to bottom,
                transparent 0%,
                black 19%,
                black 78%,
                transparent 100%
              )
            `,
          }}
        />
        {/* <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background: `
            linear-gradient(
                90deg,
                rgba(13,29,21,0.34) 0%,
                rgba(13,29,21,0.18) 50%,
                rgba(13,29,21,0.34) 100%
            ),
            linear-gradient(
                180deg,
                rgba(13,29,21,0.12) 0%,
                rgba(13,29,21,0.40) 100%
            )
            `,
          }}
        /> */}

        {/* SOFT CENTER LIGHT FOR TEXT */}
        <div
          className="
            pointer-events-none
            absolute inset-0 z-[2]
          "
          style={{
            background: `
              radial-gradient(
                ellipse 65% 55% at 50% 50%,
                rgba(10,25,18,0.16) 0%,
                rgba(10,25,18,0.08) 55%,
                transparent 100%
              )
            `,
          }}
        />

        {/* CLOSING MESSAGE */}
        {/* <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 20,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 1.3,
            delay: reduceMotion ? 0 : 0.35,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            absolute inset-0 z-10
            flex items-center justify-center
            px-5 text-center
          "
        >
          <p
            className="
              max-w-[850px]
              font-['Cormorant_Garamond',serif]
              text-[clamp(1.4rem,3.5vw,2.8rem)]
              italic
              leading-[1.2]
              text-[#E5CB91]
              drop-shadow-[0_3px_12px_rgba(0,0,0,0.55)]
            "
            style={{
              textShadow: "0 2px 8px rgba(0, 0, 0, 0.65)",
            }}
          >
            Some places stay with you,
            <br className="hidden sm:block" />
            Long after you leave.
          </p>
        </motion.div> */}

        {/* CINEMATIC CLOSING MESSAGE */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: reduceMotion ? 0 : 1.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            absolute inset-0 z-10
            flex flex-col items-center justify-center
            px-5 sm:px-8
            text-center
        "
        >
          {/* EYEBROW */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="
                mb-4 sm:mb-5
                flex items-center justify-center gap-2.5
                "
          >
            <span className="h-px w-5 bg-[#BDA36C]/80" />

            <span
              className="
                font-manrope
                text-[11px] sm:text-[9px]
                font-semibold
                uppercase tracking-[0.32em]
                text-[#E2C991]
            "
            >
              A Place to Remember
            </span>

            <span className="h-px w-5 bg-[#BDA36C]/80" />
          </motion.div>

          {/* MAIN MESSAGE */}
          <div className="flex flex-col items-center">
            {/* <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.35 }}
              className="
                font-['Cormorant_Garamond']
                text-[clamp(1.65rem,4vw,3.3rem)]
                font-medium italic
                leading-[1.08]
                tracking-[-0.025em]
                text-[#F8F2E5]
                drop-shadow-[0_3px_12px_rgba(0,0,0,0.45)]
            "
            >
              Some places stay with you,
            </motion.p>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.55 }}
              className="
                mt-1.5
                font-['Cormorant_Garamond']
                text-[clamp(1.9rem,4.5vw,3.7rem)]
                font-medium italic
                leading-[1.05]
                tracking-[-0.025em]
                text-[#D9C18B]
                drop-shadow-[0_3px_14px_rgba(0,0,0,0.5)]
            "
            >
              long after you leave.
            </motion.p> */}
            {/* FIRST LINE */}
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.35 }}
              className="
                font-['Cormorant_Garamond']
                text-[clamp(1.65rem,4vw,3.3rem)]
                font-medium italic
                leading-[1.08]
                tracking-[-0.025em]
                text-[#F8F2E5]
                drop-shadow-[0_3px_12px_rgba(0,0,0,0.45)]
            "
            >
              Some places stay with you,
            </motion.p>

            {/* SECOND LINE */}
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="
                mt-1.5
                font-['Cormorant_Garamond']
                text-[clamp(1.9rem,4.5vw,3.7rem)]
                font-medium italic
                leading-[1.05]
                tracking-[-0.025em]
                text-[#D9C18B]
                drop-shadow-[0_3px_14px_rgba(0,0,0,0.5)]
            "
            >
              long after you leave.
            </motion.p>

            {/* CENTER LEAF DIVIDER */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scaleX: 0.5 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="
                    mt-6 mb-8 sm:mt-6
                    flex w-[125px] sm:w-[155px]
                    items-center justify-center gap-3
                "
            >
              <span
                className="
                    h-px flex-1
                    bg-gradient-to-r
                    from-transparent to-[#BDA36C]
                "
              />

              <img
                src={contactLeafIcon}
                alt=""
                aria-hidden="true"
                className="h-7 w-7 shrink-0 object-contain"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(76%) sepia(23%) saturate(570%) hue-rotate(5deg) brightness(95%)",
                }}
              />

              <span
                className="
                    h-px flex-1
                    bg-gradient-to-l
                    from-transparent to-[#BDA36C]
                "
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
