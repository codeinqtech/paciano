import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  UsersRound,
  Laptop,
  ShieldCheck,
  Share2,
  Cookie,
  FilePenLine,
  RefreshCw,
} from "lucide-react";

import pacianoBotanical from "@/images/privacy/privacy-leaf.png";
import policyMountains from "@/images/privacy/privacy-mountain.png";

const FOREST = "#244329";
const GOLD = "#BDA36C";
const CREAM = "#F8F3E9";

const policyItems = [
  {
    title: "Information We Collect",
    description:
      "We may collect personal details such as your name, email address, phone number, booking details and any other information you share with us through forms, inquiries or bookings.",
    icon: UsersRound,
  },
  {
    title: "How We Use Your Information",
    description:
      "Your information helps us process bookings, respond to your inquiries, provide a better experience, share important updates and improve our services.",
    icon: Laptop,
  },
  {
    title: "Data Protection",
    description:
      "We take appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure or misuse.",
    icon: ShieldCheck,
  },
  {
    title: "Sharing of Information",
    description:
      "We do not sell or rent your personal data. We may share relevant information with trusted service providers (e.g., payment gateways, booking partners) only to the extent necessary to deliver our services.",
    icon: Share2,
  },
  {
    title: "Cookies",
    description:
      "Our website uses cookies to enhance your browsing experience, understand website usage and improve performance. You can choose to disable cookies through your browser settings.",
    icon: Cookie,
  },
  {
    title: "Your Choices",
    description:
      "You may contact us at any time to update, correct or request the deletion of your personal information stored with us.",
    icon: FilePenLine,
  },
  {
    title: "Policy Updates",
    description:
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised “Last Updated” date.",
    icon: RefreshCw,
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
    y: 22,
    filter: "blur(4px)",
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

/* ----------------------------------
   DIAMOND ICON
----------------------------------- */

function PolicyIcon({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.06,
        rotate: 45,
      }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
      className="
        relative flex
        h-[48px] w-[48px]
        sm:h-[56px] sm:w-[56px]
        md:h-[66px] md:w-[66px]
        items-center justify-center
        rounded-[15px]
        bg-[#F0EBD8]
        border border-[#E9DFC1]/80
        shadow-[0_5px_16px_rgba(74,78,42,0.04)]
      "
      style={{
        rotate: "45deg",
      }}
    >
      <Icon
        className="
          h-[23px] w-[23px]
          sm:h-[27px] sm:w-[27px]
          md:h-[30px] md:w-[30px]
          text-[#405A26]
          stroke-[1.65]
        "
        style={{
          transform: "rotate(-45deg)",
        }}
      />
    </motion.div>
  );
}

/* ----------------------------------
   INTRODUCTION
----------------------------------- */

function PolicyIntroduction() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = Boolean(useReducedMotion());

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.08,
  });
  return (
    <motion.p
      variants={itemVariants}
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
      At Paciano Hospitality, we are committed to protecting your personal
      information and respecting your privacy. This Privacy Policy explains how
      we collect, use and safeguard your data when you visit our website.
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
    </motion.p>
  );
}

/* ----------------------------------
   POLICY ROW
----------------------------------- */

function PolicyRow({
  item,
  index,
}: {
  item: (typeof policyItems)[number];
  index: number;
}) {
  const Icon = item.icon;

  return (
    <motion.div
      variants={itemVariants}
      className="
        group grid
        grid-cols-[58px_minmax(0,1fr)]
        sm:grid-cols-[76px_minmax(0,1fr)]
        md:grid-cols-[100px_minmax(0,1fr)]
        gap-x-3
        sm:gap-x-5
        md:gap-x-7
        items-center
      "
    >
      {/* LEFT ICON */}
      <div
        className="
          flex items-center justify-center
          py-2
          sm:py-3
        "
      >
        <PolicyIcon icon={Icon} />
      </div>

      {/* RIGHT CONTENT */}
      <div
        className={`
          min-w-0 py-3
          sm:py-3.5
          md:py-4
          ${
            index !== policyItems.length - 1
              ? "border-b border-[#D9CBAE]/65"
              : ""
          }
        `}
      >
        <h3
          className="
            mb-0.5
            font-['Cormorant_Garamond']
            text-[19px]
            sm:text-[21px]
            md:text-[23px]
            font-bold italic
            leading-[1.1]
            tracking-[-0.01em]
            text-[#21452A]
            transition-colors duration-500
            group-hover:text-[#637D42]
          "
        >
          {item.title}
        </h3>

        <p
          className="
            font-manrope
            text-[13px]
            leading-[1.8]
            text-[#50584F]  
            min-[390px]:text-[12px]
            sm:text-[13px]
            md:text-[13px]
            font-normal           
            tracking-[-0.01em]            
          "
        >
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

/* ----------------------------------
   LAST UPDATED CARD
----------------------------------- */

function PolicyUpdateCard() {
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
        {/* BOTANICAL ILLUSTRATION */}
        <div
          className="
            relative flex items-center justify-center
            min-h-[105px]
            sm:min-h-[155px]
            md:min-h-[170px]
            overflow-hidden
          "
        >
          {/* Soft circular glow */}
          <div
            className="
              absolute
              h-[115px] w-[115px]
              sm:h-[145px] sm:w-[145px]
              rounded-full
              bg-[#D6D6B5]/30
              blur-2xl
            "
          />

          <motion.img
            src={pacianoBotanical}
            alt="Paciano botanical emblem"
            className="
                relative z-10
                w-[200px]
                h-[120px]
                sm:w-[230px]
                sm:h-[140px]
                md:w-[255px]
                md:h-[155px]
                object-contain
                drop-shadow-[0_8px_12px_rgba(48,65,31,0.12)]
            "
            initial={reduceMotion ? false : { opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.3,
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
          {/* SMALL EYEBROW */}
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
              Privacy & Data Protection
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

            <span className="font-medium">17 November 2026</span>
          </p>

          {/* DESCRIPTION */}
          <p
            className="
              mt-3
              max-w-[540px]
              font-manrope
              text-[11px]
              sm:text-[12px]
              md:text-[12px]
              leading-[1.8]
              text-[#56564B]
            "
          >
            For any questions or concerns regarding your privacy, we are always
            here to assist you.
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

      {/* BOTTOM HAIRLINE */}
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

/* ----------------------------------
   MISTY MOUNTAIN FOOTER TRANSITION
----------------------------------- */

function PolicyLandscape() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1],
      }}
      //   className="
      //     relative isolate
      //     w-full overflow-hidden
      //     h-[150px]
      //     min-[390px]:h-[165px]
      //     sm:h-[180px]
      //     md:h-[205px]
      //     lg:h-[230px]
      //     xl:h-[250px]
      //     bg-[#0B2116]
      //   "
      className="
        relative isolate
        w-full overflow-hidden
        h-[190px]
        min-[390px]:h-[200px]
        sm:h-[200px]
        md:h-[220px]
        lg:h-[240px]
        xl:h-[260px]
        bg-[#0B2116]
        "
    >
      {/* MOUNTAIN IMAGE */}
      <motion.img
        src={policyMountains}
        alt="Misty mountain landscape surrounding Paciano"
        className="
    absolute
    left-0 bottom-0
    h-[135%] w-full
    object-cover
    object-bottom
  "
        initial={reduceMotion ? false : { scale: 1.04 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 2,
          ease: "easeOut",
        }}
      />

      {/* TOP CREAM BLENDING */}
      <div
        className="
          pointer-events-none
          absolute inset-x-0 top-0
          h-[12%] z-10
          sm:h-[18%]
        "
        style={{
          background: `
            linear-gradient(
              180deg,
              #F8F3E9 0%,
              rgba(248,243,233,.94) 12%,
              rgba(248,243,233,.70) 30%,
              rgba(248,243,233,.30) 62%,
              transparent 100%
            )
          `,
        }}
      />

      {/* BOTTOM FOREST GREEN BLENDING */}
      <div
        className="
          pointer-events-none
          absolute inset-x-0 bottom-0
          h-[48%] z-10
        "
        style={{
          background: `
            linear-gradient(
              0deg,
              #0B2116 0%,
              rgba(11,33,22,.92) 15%,
              rgba(11,33,22,.62) 38%,
              rgba(11,33,22,.25) 68%,
              transparent 100%
            )
          `,
        }}
      />

      {/* GOLDEN CURVED FOOTER TRANSITION */}
      {/* <div
        className="
          pointer-events-none
          absolute bottom-0 left-0
          z-20
          h-[48px] w-full
          sm:h-[55px]
          md:h-[65px]
          lg:h-[75px]
        "
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          {/* FOREST GREEN FOOTER SHAPE */}
      {/*<path
            d="
              M0 43
              C145 3 240 13 365 42
              C505 74 600 76 735 42
              C865 8 975 10 1100 40
              C1220 70 1330 65 1440 32
              L1440 90
              L0 90
              Z
            "
            fill="#0B2116"
          />

          {/* GOLDEN EDGE */}
      {/*<path
            d="
              M0 43
              C145 3 240 13 365 42
              C505 74 600 76 735 42
              C865 8 975 10 1100 40
              C1220 70 1330 65 1440 32
            "
            fill="none"
            stroke="#BDA36C"
            strokeWidth="2"
          />
        </svg>
      </div> */}
    </motion.div>
  );
}

/* ----------------------------------
   MAIN POLICY CONTENT
----------------------------------- */

export default function PolicyContent() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="
        relative isolate
        w-full
        overflow-hidden
        bg-[#F8F3E9]
      "
      style={{
        background: `
          radial-gradient(
            ellipse at 50% 35%,
            rgba(255,255,255,.65) 0%,
            transparent 72%
          ),
          ${CREAM}
        `,
      }}
    >
      {/* SUBTLE BACKGROUND TEXTURE */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          opacity-[0.12]
        "
        style={{
          backgroundImage: "radial-gradient(#B7A77E 0.5px, transparent 0.5px)",
          backgroundSize: "12px 12px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 18%, black 85%, transparent)",
        }}
      />
      {/* MAIN CONTENT */}
      <div
        className="
          relative z-10
          mx-auto
          w-full
          max-w-[1160px]
          px-5
          min-[390px]:px-6
          sm:px-9
          md:px-12
          lg:px-16
          pt-4
          sm:pt-9
          md:pt-11
          lg:pt-12
          pb-0
          
        "
      >
        {/* INTRO + POLICY ROWS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          className="w-full"
        >
          <PolicyIntroduction />

          <div
            className="
            mx-auto
            max-w-[1000px]
            w-full
          "
          >
            {policyItems.map((item, index) => (
              <PolicyRow key={item.title} item={item} index={index} />
            ))}
          </div>

          {/* LAST UPDATED */}
          <div className="mx-auto max-w-[1080px]">
            <PolicyUpdateCard />
          </div>
        </motion.div>
      </div>
      <PolicyLandscape />
    </section>
  );
}
