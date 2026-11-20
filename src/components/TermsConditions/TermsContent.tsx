import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import TermsClosingEmblem from "@/images/termsconditions/terms-closing-emblem.png";

import {
  BedDouble,
  CreditCard,
  CalendarX,
  UsersRound,
  ShieldCheck,
  Sprout,
  FileText,
  CalendarDays,
} from "lucide-react";

// Optional landscape image at the bottom.
// Import your existing mist mountain image and pass it as a prop.

const GOLD = "#D9AD55";
const FOREST = "#183522";
const PARCHMENT = "#F8F3E9";

type TermsItem = {
  number: string;
  title: string;
  description: string;
  Icon: React.ElementType;
};

const policies: TermsItem[] = [
  {
    number: "01",
    title: "Bookings & Reservations",
    description:
      "All bookings are subject to availability and confirmation. We reserve the right to modify or cancel a reservation in case of unforeseen circumstances.",
    Icon: BedDouble,
  },
  {
    number: "02",
    title: "Payments",
    description:
      "Payments must be made through the approved modes available on our website or as communicated by our team. For certain bookings, an advance payment may be required.",
    Icon: CreditCard,
  },
  {
    number: "03",
    title: "Cancellation & Refunds",
    description:
      "Cancellations are governed by our cancellation policy, which may vary based on the type of booking, season, and applicable offers.",
    Icon: CalendarX,
  },
  {
    number: "04",
    title: "Guest Conduct",
    description:
      "We expect all guests to maintain decorum and respect the property, staff, and other guests. Any activity that causes damage, disturbance, or violation of local laws may lead to termination of your stay.",
    Icon: UsersRound,
  },
  {
    number: "05",
    title: "Property Use",
    description:
      "The facilities and amenities at Paciano are for the exclusive use of registered guests. Commercial use, unauthorized events, or activities are not permitted without prior written consent.",
    Icon: ShieldCheck,
  },
  {
    number: "06",
    title: "Liability",
    description:
      "While we take due care to ensure a safe and pleasant stay, Paciano shall not be liable for any loss, injury, or damage to personal belongings during your stay.",
    Icon: Sprout,
  },
  {
    number: "07",
    title: "Changes to Terms",
    description:
      "We may update these Terms & Conditions from time to time. The updated version will be available on this page with the revised date.",
    Icon: FileText,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

function TermsIcon({
  Icon,
  index,
  reduceMotion,
}: {
  Icon: React.ElementType;
  index: number;
  reduceMotion: boolean;
}) {
  return (
    <motion.div
      whileHover={
        reduceMotion
          ? {}
          : {
              y: -5,
              rotate: -3,
              scale: 1.06,
            }
      }
      transition={{
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        group relative
        flex h-[52px] w-[52px]
        shrink-0 items-center justify-center
        sm:h-[60px] sm:w-[60px]
        md:h-[68px] md:w-[68px]
      "
    >
      {/* DIAMOND BACKGROUND */}
      <div
        className="
          absolute inset-[5px]
          rotate-45
          rounded-[11px]
          border border-[#E9D7AE]/80
          bg-gradient-to-br
          from-[#FFF9EA]
          via-[#F8E9CD]
          to-[#EFD7AC]
          shadow-[0_5px_12px_rgba(118,83,32,0.14)]
          transition-all duration-500
          group-hover:shadow-[0_8px_20px_rgba(174,125,43,0.23)]
        "
      />

      {/* INNER ICON */}
      <motion.div
        animate={
          reduceMotion
            ? {}
            : {
                y: [0, -2, 0],
              }
        }
        transition={{
          duration: 3.5 + index * 0.25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.15,
        }}
        className="relative z-10"
      >
        <Icon
          strokeWidth={1.65}
          className="
            h-[20px] w-[20px]
            text-[#435A28]
            sm:h-[23px] sm:w-[23px]
            md:h-[25px] md:w-[25px]
          "
        />
      </motion.div>
    </motion.div>
  );
}

function PolicyRow({
  item,
  index,
  reduceMotion,
}: {
  item: TermsItem;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = item.Icon;

  return (
    <motion.article
      variants={itemVariants}
      className="
        group relative
        grid grid-cols-[55px_minmax(0,1fr)]
        items-start gap-x-3
        py-3
        sm:grid-cols-[68px_minmax(0,1fr)]
        sm:gap-x-5
        sm:py-4
        md:grid-cols-[78px_minmax(0,1fr)]
        md:gap-x-6
        md:py-[17px]
      "
    >
      {/* GOLDEN TIMELINE MARKER */}
      <div
        className="
          absolute left-[25px] top-1/2
          z-20
          h-[8px] w-[8px]
          -translate-x-1/2 -translate-y-1/2
          rotate-45
          border-[1.5px] border-[#C58B26]
          bg-[#FFF9EB]
          shadow-[0_0_5px_rgba(201,151,58,.25)]
          sm:left-[33px]
          md:left-[38px]
        "
      />

      {/* ICON */}
      <div className="relative z-10 flex justify-center">
        <TermsIcon Icon={Icon} index={index} reduceMotion={reduceMotion} />
      </div>

      {/* TEXT CONTENT */}
      <div
        className="
          min-w-0
          border-b border-[#C8AE7C]/25
          pb-3
          sm:pb-4
          md:pb-[17px]
        "
      >
        <div className="mb-1 flex flex-wrap items-baseline gap-x-3">
          {/* <span
            className="
              font-['Cormorant_Garamond']
              text-[10px] tracking-[0.16em]
              text-[#B18A43]/75
              sm:text-[11px]
            "
          >
            {item.number}
          </span> */}

          <h3
            className="
              font-['Cormorant_Garamond']
              text-[19px] leading-tight
              font-semibold italic
              text-[#183522]
              sm:text-[22px]
              md:text-[25px]
            "
          >
            {item.title}
          </h3>
        </div>

        <p
          className="
            max-w-[850px]
            font-manrope
            text-[13px]
            leading-[1.8]
            text-[#50584F]            
            sm:text-[12px]
            md:text-[13px]
            md:leading-[1.8]
          "
        >
          {item.description}
        </p>
      </div>
    </motion.article>
  );
}

function TermsUpdateCard({ lastUpdated }: { lastUpdated: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={itemVariants}
      className="
        relative isolate overflow-hidden
        mt-8 sm:mt-10 md:mt-12
        mb-7 sm:mb-9
        rounded-[20px]
        sm:rounded-[26px]
        border border-[#DCCFAE]/70
        bg-gradient-to-br
        from-[#F3F0DF]
        via-[#F8F4E8]
        to-[#EDEBD8]
        shadow-[0_12px_35px_rgba(71,72,43,0.07)]
      "
    >
      {/* SUBTLE DECORATIVE BACKGROUND */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          right-0 top-0
          h-full w-[45%]
          opacity-40
        "
        style={{
          background:
            "radial-gradient(ellipse at 100% 50%, rgba(181,164,119,.20), transparent 70%)",
        }}
      />

      {/* CONTENT GRID */}
      <div
        className="
          relative z-10
          grid grid-cols-1
          sm:grid-cols-[34%_1fr]
          items-center
          min-h-[150px]
          sm:min-h-[155px]
          md:min-h-[170px]
        "
      >
        {/* DOCUMENT EMBLEM */}
        <div
          className="
            relative flex items-center justify-center
            min-h-[125px]
            sm:min-h-[155px]
            md:min-h-[170px]
            overflow-hidden
          "
        >
          {/* GOLDEN AMBIENT GLOW */}
          <div
            className="
              absolute
              h-[115px] w-[115px]
              sm:h-[145px] sm:w-[145px]
              rounded-full
              bg-[#D9C58B]/25
              blur-2xl
            "
          />

          {/* DOCUMENT IMAGE */}
          <motion.img
            src={TermsClosingEmblem}
            alt="Golden Terms and Conditions document emblem"
            className="
              relative z-10
              w-[190px]
              h-[125px]
              sm:w-[225px]
              sm:h-[145px]
              md:w-[250px]
              md:h-[160px]
              object-contain
              drop-shadow-[0_8px_12px_rgba(48,65,31,0.12)]
            "
            initial={reduceMotion ? false : { opacity: 0, x: -18, scale: 0.94 }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 1.4,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        </div>

        {/* GOLDEN VERTICAL DIVIDER */}
        <div
          className="
            hidden sm:block
            absolute
            left-[34%]
            top-[22%]
            bottom-[22%]
            w-px
            bg-gradient-to-b
            from-transparent
            via-[#B7A16A]
            to-transparent
          "
        />

        {/* INFORMATION */}
        <div
          className="
            relative
            px-5
            pt-1 pb-6
            sm:py-7
            md:px-9
            lg:px-11
          "
        >
          {/* EYEBROW */}
          <div className="mb-3 flex items-center gap-3">
            <span
              className="
                font-['Cormorant_Garamond']
                text-[9px] sm:text-[10px]
                uppercase
                tracking-[.24em]
                text-[#988653]
              "
            >
              Terms & Conditions
            </span>

            <span className="h-px w-7 bg-[#B7A16A]/60" />
          </div>

          {/* DATE */}
          <p
            className="
              font-['Cormorant_Garamond']
              text-[19px]
              sm:text-[21px]
              md:text-[23px]
              leading-tight
              text-[#253C28]
            "
          >
            <span className="font-semibold">Last Updated</span>

            <span className="mx-2 text-[#B5A477]">|</span>

            <span className="font-medium">{lastUpdated}</span>
          </p>

          {/* DESCRIPTION */}
          <p
            className="
              mt-3
              max-w-[560px]
              font-manrope
              text-[11px]
              sm:text-[12px]
              md:text-[13px]
              leading-[1.8]
              text-[#56564B]
            "
          >
            For any questions or clarification regarding our bookings, payments,
            cancellations, or terms of stay, our team will be happy to assist
            you.
          </p>

          {/* EMAIL */}
          <a
            href="mailto:info@paciano.in"
            className="
              group mt-2 inline-flex
              items-center gap-2
              font-['Parkinsans']
              text-[12px]
              sm:text-[13px]
              font-semibold
              tracking-[.015em]
              text-[#29472D]
              transition-colors duration-300
              hover:text-[#8C7847]
            "
          >
            info@paciano.in
            <span
              className="
                h-px w-0
                bg-[#A68D54]
                transition-all duration-300
                group-hover:w-6
              "
            />
          </a>
        </div>
      </div>

      {/* BOTTOM GOLDEN HAIRLINE */}
      <div
        className="
          absolute bottom-0 left-[8%] right-[8%]
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#BDA36C]/45
          to-transparent
        "
      />
    </motion.div>
  );
}

type TermsContentProps = {
  landscapeSrc?: string;
  lastUpdated?: string;
};

export default function TermsContent({
  landscapeSrc,
  lastUpdated = "19 November 2026",
}: TermsContentProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = Boolean(useReducedMotion());

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.08,
  });

  return (
    <section
      ref={sectionRef}
      className="
        relative isolate
        w-full overflow-hidden
        bg-[#F8F3E9]
        pt-5
        sm:pt-7
        md:pt-9
        lg:pt-10
      "
    >
      {/* SUBTLE PARCHMENT TEXTURE */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.23]"
        style={{
          backgroundImage:
            "radial-gradient(#C9B98E 0.65px, transparent 0.65px)",
          backgroundSize: "13px 13px",
        }}
      />

      {/* SOFT CENTER LIGHT */}
      <div
        className="
          pointer-events-none absolute
          left-1/2 top-[12%]
          -z-10 h-[450px] w-[90%]
          -translate-x-1/2
          rounded-full
          bg-[#FFFDF5]/70
          blur-[90px]
        "
      />

      {/* MAIN CONTENT */}
      <div
        className="
          relative mx-auto
          w-full max-w-[1050px]
          px-5
          sm:px-8
          md:px-10
          lg:px-12
        "
      >
        {/* INTRODUCTION */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mx-auto mb-6
            max-w-[760px]
            text-center
            sm:mb-8
            md:mb-10
          "
        >
          <p
            className="              
                mx-auto
                mb-0 md:mb-10
                max-w-[760px]
                px-2
                text-center
                font-['Cormorant_Garamond']
                text-[16px]
                sm:text-[17px]
                md:text-[19px]
                font-medium italic
                leading-[1.45]
                tracking-[0.005em]
                text-[#171B16]
      
            "
          >
            By using our website, services, or making a booking at Paciano, you
            agree to the following terms and conditions.
          </p>

          {/* GOLDEN DIVIDER */}
          <div className="mt-4 flex items-center justify-center gap-3 sm:mt-5">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#D9AD55]" />

            <motion.span
              animate={reduceMotion ? {} : { rotate: [45, 225, 405] }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                h-[8px] w-[8px]
                rotate-45
                border border-[#C58B26]
              "
            />

            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#D9AD55]" />
          </div>
        </motion.div>

        {/* POLICY TIMELINE */}
        <div className="relative mx-auto max-w-[900px]">
          {/* VERTICAL GOLDEN LINE */}
          <motion.div
            initial={reduceMotion ? false : { scaleY: 0, opacity: 0 }}
            animate={isInView ? { scaleY: 1, opacity: 1 } : {}}
            transition={{
              duration: 2,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.2,
            }}
            className="
              pointer-events-none absolute
              left-[25px] top-0 bottom-0
              w-px origin-top
              bg-gradient-to-b
              from-[#D9AD55]/35
              via-[#C58B26]/80
              to-[#D9AD55]/35
              sm:left-[33px]
              md:left-[38px]
            "
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {policies.map((item, index) => (
              <PolicyRow
                key={item.number}
                item={item}
                index={index}
                reduceMotion={reduceMotion}
              />
            ))}
          </motion.div>
        </div>
        {/* TERMS & CONDITIONS UPDATE CARD */}
        <TermsUpdateCard lastUpdated={lastUpdated} />
      </div>

      {/* MISTY MOUNTAIN TRANSITION */}
      {landscapeSrc && (
        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="
      relative isolate
      h-[145px] w-full
      overflow-hidden
      bg-[#102619]
      sm:h-[175px]
      md:h-[205px]
      lg:h-[230px]
    "
        >
          {/* ZOOMED MOUNTAIN IMAGE */}
          <motion.img
            src={landscapeSrc}
            alt=""
            aria-hidden="true"
            initial={reduceMotion ? false : { scale: 1.04 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="
        absolute
        -bottom-[5%]
        left-0
        h-[175%]
        w-full
        max-w-none
        object-cover
        object-center
        sm:h-[165%]
        md:h-[150%]
      "
            style={{
              objectPosition: "50% 85%",
            }}
          />

          {/* SOFT TOP BLENDING */}
          <div
            className="
        pointer-events-none absolute
        inset-x-0 top-0
        h-[15%]
        z-10
      "
            style={{
              background: "linear-gradient(to bottom, #F8F3E9, transparent)",
            }}
          />

          {/* NATURAL ATMOSPHERIC BLENDING */}
          <div
            className="
        pointer-events-none absolute
        inset-0 z-10
      "
            style={{
              background:
                "linear-gradient(to bottom, transparent 55%, rgba(16,38,25,.12) 78%, #102619 100%)",
            }}
          />
        </motion.div>
      )}
    </section>
  );
}
