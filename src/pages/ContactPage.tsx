import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import { Mail, MapPin, Phone, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import bannerImg from "@/images/contact/banner.png";
import convImg1 from "@/images/contact/we-are-just-a-conversation-away1.png";
import convImg2 from "@/images/contact/we-are-just-a-conversation-away2.png";
import convOverlap from "@/images/contact/nestled-in-the-heart-of-nature.png";
import leafLeft from "@/images/location-left-leaves.png";
import leafAccent from "@/images/dining-leaf2.png";
import leafSoft from "@/images/dining-leaf3.png";
import leafCorner from "@/images/button-leaf.png";
import mistMountains from "@/images/paciano-mist-mountains.png";

const FOREST = "#0E2D20";
const GOLD = "#C8A76A";
const PARCHMENT = "#F8F4EE";

/** Compact organic join between image/dark and cream sections (shorter than home curves). */
function CreamJoinFromAbove() {
  return (
    <div
      className="pointer-events-none absolute bottom-0 left-0 z-20 h-[58px] w-full sm:h-[68px] lg:h-[76px]"
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 76"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <path
          d="
            M0,76
            L0,44
            C120,62 210,18 360,28
            C510,38 620,68 780,52
            C940,36 1080,14 1260,32
            C1380,44 1440,38 1440,48
            L1440,76
            Z
          "
          fill={PARCHMENT}
        />
      </svg>
    </div>
  );
}

/** Soft feather from cream form into location panorama (no hard cut) */
function CreamToLocationBlend() {
  return (
    <div
      className="pointer-events-none relative z-30 w-full"
      style={{ height: "clamp(72px, 11vw, 128px)" }}
      aria-hidden
    >
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, ${PARCHMENT} 0%, ${PARCHMENT} 28%, rgba(248,244,238,0.92) 48%, rgba(248,244,238,0.55) 68%, rgba(248,244,238,0) 100%)`,
        }}
      />
      <svg
        viewBox="0 0 1440 128"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="contactCreamFeather" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={PARCHMENT} stopOpacity="1" />
            <stop offset="55%" stopColor={PARCHMENT} stopOpacity="0.85" />
            <stop offset="100%" stopColor={PARCHMENT} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="
            M0,0
            L1440,0
            L1440,52
            C1180,118 980,118 720,78
            C460,38 260,118 0,62
            Z
          "
          fill="url(#contactCreamFeather)"
        />
      </svg>
    </div>
  );
}

/** Home-style mist band — low height between cream sections */
function MistSectionBridge() {
  return (
    <div
      className="relative left-1/2 z-10 w-screen -translate-x-1/2 overflow-hidden bg-[#F8F4EE]"
      style={{ height: "clamp(108px, 14vw, 148px)" }}
      aria-hidden
    >
      <img
        src={mistMountains}
        alt=""
        className="animate-contact-mist-drift absolute inset-0 z-10 h-full w-full object-cover object-center opacity-[0.95] mix-blend-multiply"
      />
      <div className="absolute inset-x-0 top-0 z-20 h-[55%] bg-gradient-to-b from-[#F8F4EE] via-[#F8F4EE]/45 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-20 h-[55%] bg-gradient-to-t from-[#F8F4EE] via-[#F8F4EE]/50 to-transparent" />
    </div>
  );
}

function FormField({
  id,
  label,
  name,
  value,
  onChange,
  type = "text",
  required,
  autoComplete,
  placeholder,
  as = "input",
  className = "",
  inputClassName,
}: {
  id: string;
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
  as?: "input" | "textarea";
  className?: string;
  inputClassName?: string;
}) {
  const labelCls =
    "mb-2 block font-jost uppercase sm:mb-3 text-[0.62rem] tracking-[0.18em]";
  const inputCls =
    inputClassName ??
    `luxury-input${as === "textarea" ? " min-h-[100px] sm:min-h-[120px]" : ""}`;

  return (
    <div className={className}>
      <label htmlFor={id} className={labelCls} style={{ color: GOLD }}>
        {label}
      </label>
      {as === "textarea" ? (
        <textarea
          id={id}
          className={inputCls}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          aria-required={required}
        />
      ) : (
        <input
          id={id}
          className={inputCls}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          autoComplete={autoComplete}
          aria-required={required}
        />
      )}
    </div>
  );
}

function BotanicalBackdrop({ variant }: { variant: "info" | "form" }) {
  if (variant === "info") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <img
          src={leafLeft}
          alt=""
          className="absolute -left-[8%] -top-[6%] w-[min(52vw,420px)] opacity-[0.22] mix-blend-multiply sm:-left-[4%] sm:opacity-[0.26]"
        />
        <img
          src={leafAccent}
          alt=""
          className="absolute -right-[12%] top-[8%] w-[min(40vw,320px)] rotate-[12deg] opacity-[0.18] mix-blend-multiply sm:-right-[6%] sm:opacity-[0.22]"
        />
        <img
          src={leafSoft}
          alt=""
          className="absolute bottom-[6%] left-[2%] hidden w-[200px] rotate-[-18deg] opacity-[0.14] mix-blend-multiply sm:block"
        />
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <img
        src={leafCorner}
        alt=""
        className="absolute -left-[10%] top-[12%] w-[min(44vw,340px)] rotate-[-8deg] opacity-[0.2] mix-blend-multiply"
      />
      <img
        src={leafAccent}
        alt=""
        className="absolute -right-[14%] bottom-[10%] w-[min(38vw,300px)] rotate-[22deg] opacity-[0.17] mix-blend-multiply sm:-right-[8%]"
      />
      <img
        src={leafLeft}
        alt=""
        className="absolute -right-[20%] -top-[4%] hidden w-[280px] rotate-[165deg] opacity-[0.12] mix-blend-multiply lg:block"
      />
    </div>
  );
}

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p
      className="mb-4 font-jost text-[0.68rem] font-medium uppercase tracking-[0.2em] sm:mb-5 sm:text-[0.7rem]"
      style={{ color: GOLD }}
    >
      {children}
    </p>
  );
}

function ContactHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden"
    >
      <motion.div className="absolute inset-0 h-full w-full" style={{ y }}>
        <img
          src={bannerImg}
          alt="Paciano nature retreat"
          className="h-full w-full object-cover"
        />
      </motion.div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(14,45,32,0.6) 0%, rgba(14,45,32,0.35) 45%, rgba(14,45,32,0.75) 100%)",
        }}
      />

      <div className="relative z-10 px-5 pb-16 pt-28 text-center sm:px-6 sm:pt-32">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15 }}
          className="mb-5 font-jost text-[0.65rem] font-light uppercase tracking-[0.25em] sm:mb-7 sm:text-[0.72rem]"
          style={{ color: GOLD }}
        >
          Get in Touch
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.3 }}
          className="font-cormorant font-light leading-[1.05] text-white"
          style={{ fontSize: "clamp(2.25rem, 8vw, 6.5rem)" }}
        >
          Let Nature
          <br />
          Bring You Closer.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.5 }}
          className="mt-4 font-cormorant text-lg italic font-light text-white/80 sm:mt-6 sm:text-2xl"
        >
          We&apos;d love to hear from you.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.85 }}
        className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-[1.35rem] md:flex lg:right-10 xl:right-12"
      >
        {["RIVER", "FOREST", "PEOPLE", "A SLOWER YOU"].map((w) => (
          <span
            key={w}
            className="whitespace-nowrap font-jost text-[0.62rem] uppercase tracking-[0.24em] text-white/90 drop-shadow-[0_1px_8px_rgba(0,0,0,0.55)]"
            style={{ color: "rgba(248, 240, 228, 0.92)" }}
          >
            {w}
          </span>
        ))}
        <div
          className="mt-1 h-14 w-px shrink-0"
          style={{ background: "rgba(200,167,106,0.75)" }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 sm:bottom-10"
      >
        <span
          className="font-jost uppercase text-white/50"
          style={{ fontSize: "0.6rem", letterSpacing: "0.2em" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="h-10 w-px"
          style={{
            background:
              "linear-gradient(to bottom, rgba(200,167,106,0.85), transparent)",
          }}
        />
      </motion.div>

      <CreamJoinFromAbove />
    </section>
  );
}

function ContactInfoSection() {
  const contacts = [
    {
      label: "Reservation",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
      icon: <Phone className="h-[18px] w-[18px]" strokeWidth={1.5} />,
    },
    {
      label: "Experiences",
      value: "experiences@paciano.in",
      href: "mailto:experiences@paciano.in",
      icon: <Sparkles className="h-[17px] w-[17px]" strokeWidth={1.5} />,
    },
    {
      label: "General Enquiries",
      value: "hello@paciano.in",
      href: "mailto:hello@paciano.in",
      icon: <Mail className="h-[18px] w-[18px]" strokeWidth={1.5} />,
    },
  ];

  return (
    <section
      className="relative -mt-px overflow-hidden px-5 py-16 sm:px-6 sm:py-24 lg:py-32"
      style={{ background: PARCHMENT }}
    >
      <BotanicalBackdrop variant="info" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
        <div className="relative z-10 order-2 md:order-1">
          <FadeUp>
            <SectionLabel>Connect with Us</SectionLabel>
            <h2
              className="font-cormorant font-light leading-[1.12] text-[#0E2D20]"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              A Conversation
              <br />
              Before Your Stay
            </h2>
            <p className="mb-10 mt-6 max-w-md font-jost text-[0.92rem] leading-relaxed text-[#6B6B6B] sm:mb-14 sm:text-[0.95rem]">
              Whether you&apos;re planning a quiet retreat, a family escape, or a
              curated experience in the Dooars wilderness — we&apos;re here to
              help you begin. Reach out and let&apos;s craft your perfect time
              at Paciano.
            </p>
          </FadeUp>

          <div className="flex flex-col gap-7 sm:gap-8">
            {contacts.map((c, i) => (
              <FadeUp key={c.label} delay={0.08 * i}>
                <motion.a
                  href={c.href}
                  className="group flex items-center gap-4 sm:gap-6"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.25 }}
                >
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors duration-300 group-hover:bg-[#0E2D20] group-hover:text-[#C8A76A] sm:h-12 sm:w-12"
                    style={{ border: `1px solid ${GOLD}`, color: GOLD }}
                  >
                    {c.icon}
                  </div>
                  <div className="min-w-0">
                    <p
                      className="mb-0.5 font-jost uppercase"
                      style={{
                        fontSize: "0.62rem",
                        letterSpacing: "0.18em",
                        color: GOLD,
                      }}
                    >
                      {c.label}
                    </p>
                    <p className="truncate font-jost text-[0.9rem] text-[#0E2D20] transition-colors duration-300 group-hover:text-[#9a7b45] sm:text-[0.95rem]">
                      {c.value}
                    </p>
                  </div>
                </motion.a>
              </FadeUp>
            ))}
          </div>
        </div>

        <FadeUp delay={0.15} className="order-1 md:order-2">
          <div className="relative mx-auto flex max-w-[440px] justify-center pb-10 sm:pb-14 md:pb-16">
            <div
              className="relative z-10 w-full overflow-hidden shadow-2xl"
              style={{ borderRadius: "28px", aspectRatio: "3/4", maxWidth: 440 }}
            >
              <img
                src={convImg1}
                alt="A conversation at Paciano"
                className="h-full w-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(14,45,32,0.28), transparent)",
                }}
              />
            </div>
            <motion.div
              className="absolute z-20 overflow-hidden shadow-xl"
              style={{
                borderRadius: "18px",
                width: "min(52%, 220px)",
                bottom: "-8px",
                left: "0",
                aspectRatio: "4/3",
              }}
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <img
                src={convOverlap}
                alt="Nature at Paciano"
                className="h-full w-full object-cover"
              />
            </motion.div>
            <div
              className="absolute top-6 hidden h-20 w-px md:block lg:-right-2"
              style={{
                background: "linear-gradient(to bottom, #C8A76A, transparent)",
              }}
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function ContactFormSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    dates: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      className="relative overflow-hidden px-5 pb-0 pt-16 sm:px-6 sm:pt-24 lg:pt-32"
      style={{ background: PARCHMENT }}
    >
      <BotanicalBackdrop variant="form" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <FadeUp className="mb-12 text-center sm:mb-16">
          <SectionLabel>Send Us a Message</SectionLabel>
          <h2
            className="font-cormorant font-light text-[#0E2D20]"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}
          >
            Plan Your Time at Paciano
          </h2>
          <p className="mx-auto mt-3 max-w-lg font-jost text-[0.88rem] leading-relaxed text-[#6B6B6B] sm:text-[0.9rem]">
            Share a little about what you&apos;re looking for, and we&apos;ll be
            in touch to arrange something truly special.
          </p>
        </FadeUp>

        <FadeUp delay={0.12}>
          {submitted ? (
            <p
              className="text-center font-lora text-lg italic text-[#0E2D20]"
              role="status"
            >
              Thank you — we&apos;ll be in touch shortly.
            </p>
          ) : (
            <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-8 sm:gap-x-10 sm:gap-y-10 lg:grid-cols-3 lg:grid-rows-[auto_auto]">
                <FormField
                  id="contact-name"
                  label="Your Name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  className="lg:row-start-1"
                />

                <FormField
                  id="contact-email"
                  label="Email Address"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  className="lg:row-start-1"
                />

                <FormField
                  id="contact-phone"
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+91 00000 00000"
                  value={form.phone}
                  onChange={handleChange}
                  className="lg:row-start-1"
                />

                <FormField
                  id="contact-dates"
                  label="Preferred Dates"
                  name="dates"
                  placeholder="e.g. Nov 12–16, 2026"
                  value={form.dates}
                  onChange={handleChange}
                  className="lg:row-start-2 lg:self-end"
                />

                <FormField
                  id="contact-message"
                  label="How may we help?"
                  name="message"
                  as="textarea"
                  required
                  placeholder="Tell us about your ideal stay…"
                  value={form.message}
                  onChange={handleChange}
                  className="lg:col-span-2 lg:col-start-2 lg:row-start-2 lg:self-end"
                  inputClassName="luxury-input min-h-[100px] resize-y sm:min-h-[120px] lg:luxury-input-inline lg:min-h-[46px] lg:max-h-[46px] lg:resize-none lg:overflow-hidden"
                />
              </div>

              <div className="flex justify-center pt-2 sm:pt-4">
                <motion.button
                  type="submit"
                  className="flex w-full max-w-md items-center justify-center gap-3 px-6 py-3.5 font-jost text-[0.85rem] font-light tracking-wide text-white sm:w-auto sm:gap-4 sm:px-8 sm:py-4 sm:text-[0.9rem]"
                  style={{ background: FOREST, borderRadius: "999px" }}
                  whileHover={{ scale: 1.02, backgroundColor: "#1a4332" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Begin the Conversation
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-base sm:h-9 sm:w-9"
                    style={{ background: GOLD, color: FOREST }}
                  >
                    →
                  </span>
                </motion.button>
              </div>
            </form>
          )}
        </FadeUp>
      </div>

      <CreamToLocationBlend />
    </section>
  );
}

function ContactLocationSection() {
  const ref = useRef(null);

  const info = [
    {
      icon: <MapPin className="h-[22px] w-[22px]" strokeWidth={1.5} />,
      label: "Location",
      value: "Dooars, West Bengal",
    },
    {
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden
        >
          <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      label: "By Road",
      value: "Connected from Siliguri & Alipurduar",
    },
    {
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      label: "Nearest Airport",
      value: "Bagdogra (IXB)",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#09160F] pb-6 sm:pb-8"
      style={{ marginTop: "clamp(-96px, -11vw, -72px)" }}
    >
      <div className="relative w-full">
        <img
          src={convImg2}
          alt="Valley view at Paciano, Dooars"
          className="block h-auto w-full max-w-none object-contain"
          width={2400}
          height={800}
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-[11] h-[clamp(88px,14vw,160px)]"
          style={{
            background: `linear-gradient(to bottom, ${PARCHMENT} 0%, rgba(248,244,238,0.88) 22%, rgba(248,244,238,0.45) 50%, rgba(248,244,238,0.12) 75%, transparent 100%)`,
          }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(14,45,32,0.78) 0%, rgba(14,45,32,0.35) 42%, transparent 72%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[38%]"
          style={{
            background:
              "linear-gradient(to top, rgba(9,22,15,0.65) 0%, transparent 100%)",
          }}
        />

        <div className="absolute inset-0 z-10 flex flex-col justify-between px-5 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <div className="mx-auto w-full max-w-6xl">
            <FadeUp>
              <p
                className="mb-4 font-jost uppercase tracking-[0.22em]"
                style={{ color: GOLD, fontSize: "0.65rem" }}
              >
                Our Location
              </p>
              <h2
                className="font-cormorant font-light text-white"
                style={{ fontSize: "clamp(2.1rem, 6vw, 4.5rem)" }}
              >
                Find Your Way Here
              </h2>
              <p className="mt-2 font-cormorant text-lg italic font-light text-white/65 sm:text-2xl">
                Dooars, West Bengal, India
              </p>
              <p className="mb-8 mt-5 max-w-md font-jost text-[0.88rem] leading-relaxed text-white/70 sm:mb-10 sm:text-[0.9rem]">
                Tucked within the emerald foothills of the Eastern Himalayas,
                Paciano is accessible from Siliguri and Alipurduar — a journey
                as scenic as the destination itself.
              </p>
              <motion.a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-b pb-1 font-jost text-[0.8rem] uppercase tracking-[0.12em] text-white sm:gap-3 sm:text-[0.85rem]"
                style={{ borderColor: "rgba(200,167,106,0.6)" }}
                whileHover={{ gap: 14 }}
              >
                Open in Maps
                <span style={{ color: GOLD }}>→</span>
              </motion.a>
            </FadeUp>
          </div>

          <div className="relative z-20 mx-auto w-full max-w-6xl pb-2 pt-10 sm:pb-4 sm:pt-12">
            <div className="grid gap-8 sm:grid-cols-2 lg:flex lg:flex-row lg:gap-10">
              {info.map((item, i) => (
                <FadeUp key={item.label} delay={0.08 * i}>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="mt-0.5 shrink-0" style={{ color: GOLD }}>
                      {item.icon}
                    </div>
                    <div>
                      <p
                        className="mb-1 font-jost uppercase"
                        style={{
                          fontSize: "0.58rem",
                          letterSpacing: "0.2em",
                          color: "rgba(200,167,106,0.85)",
                        }}
                      >
                        {item.label}
                      </p>
                      <p className="font-jost text-[0.86rem] leading-snug text-white/85 sm:text-[0.88rem]">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar scrolled={scrolled} activeNav="contact" />
      <main style={{ background: PARCHMENT }}>
        <ContactHero />
        <ContactInfoSection />
        <MistSectionBridge />
        <ContactFormSection />
        <div className="relative isolate">
          <ContactLocationSection />
          <Footer contactOverlap />
        </div>
      </main>
    </>
  );
}
