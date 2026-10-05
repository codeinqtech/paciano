/** Soft feather from cream form into location panorama (no hard cut) */
import { Children, useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import leafLeft from "@/images/location-left-leaves.png";
import leafAccent from "@/images/dining-leaf2.png";
import leafSoft from "@/images/dining-leaf3.png";
import leafCorner from "@/images/contact/btn-contact-leaf.png";
const FOREST = "#0E2D20";
const GOLD = "#C8A76A";
const PARCHMENT = "#eee9dc";

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
      "mb-2 block font-manrope uppercase sm:mb-3 text-[0.75rem] tracking-[0.18em]";
    const inputCls =
      inputClassName ??
      `luxury-input${as === "textarea" ? " min-h-[100px] sm:min-h-[120px]" : ""}`;
  
    return (
      <div className={className}>
        <label htmlFor={id} className={labelCls} style={{ color: '#71803F '}}>
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


function ContactForm() {
     
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
        className="
        relative
        overflow-hidden
        px-5
        pb-0
        pt-16
        sm:px-6
        sm:pt-24
        lg:px-8
        lg:pt-32
      "
        style={{ background: PARCHMENT }}
      >
        <BotanicalBackdrop variant="form" />
  
        <div className="relative z-10 mx-auto max-w-5xl">
          {/* <FadeUp className="mb-12 text-center sm:mb-16"> */}
          <div className="mb-12 text-center sm:mb-16">

            {/* 01 — SEND US A MESSAGE */}            
            <div
              className="
                paciano-reveal
                relative
                mt-[-70px]
                text-center
                sm:mt-[-95px]
                lg:mt-[-128px]
                flex
                flex-col
                items-center
                text-center
              "
            >
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 1.4,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col items-center"
              >
                {/* LEAF SVG — CENTERED */}
                <svg
                  viewBox="0 0 32 32"
                  className="
                    h-[20px]
                    w-[20px]
                    text-[#71863d]
                  "
                  fill="none"
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

                <span
                  className="
                    mt-4
                    font-manrope
                    text-[12px]
                    font-semibold
                    uppercase
                    tracking-[0.3em]
                    text-[#71803F]
                  "
                >
                  Send Us a Message
                </span>
              </motion.div>
            </div>
          

            {/* 02 — MAIN HEADING */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 1.8,
                delay: 1.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
            <h3
                className="
                mt-[10px]
                font-cormorant
                text-[43px]
                leading-[.95]
                tracking-[-.025em]
                text-[#17251B]
                sm:text-[52px]
                lg:text-[60px]
                "
            >
                Plan Your Time,
                <br />
                <span className="italic text-[#789541]">
                At Paciano.
                </span>
            </h3>
            </motion.div>

            {/* 03 — DESCRIPTION */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 1.8,
                delay: 1.9,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
                      
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
                Share a little about what you're looking for, and we'll be
                in touch to arrange something truly special.
            </p>
            </motion.div>

        </div>
  
          {/* <FadeUp delay={0.12}> */}
          <div>  
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
                <motion.div
                     initial={{ opacity: 0, y: 12 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, amount: 0.2 }}
                     transition={{
                       duration: 1.8,
                       delay: 2.5,
                       ease: [0.16, 1, 0.3, 1],
                     }}
                    className="lg:row-start-1"
                    >
                    <FormField
                        id="contact-name"
                        label="Your Name"
                        name="name"
                        required
                        // autoComplete="name"
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        className="lg:row-start-1"
                    />
                    </motion.div>
                    <motion.div
                         initial={{ opacity: 0, y: 12 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true, amount: 0.2 }}
                         transition={{
                           duration: 1.8,
                           delay: 2.9,
                           ease: [0.16, 1, 0.3, 1],
                         }}
                        className="lg:row-start-1"
                        >
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
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 2.1,
                      delay: 3.3,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="lg:row-start-1"
                    >
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
                </motion.div>

                <motion.div
                     initial={{ opacity: 0, y: 12 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, amount: 0.2 }}
                     transition={{
                       duration: 1.8,
                       delay: 3.7,
                       ease: [0.16, 1, 0.3, 1],
                     }}
                    >
                    
                  <FormField
                    id="contact-dates"
                    label="Preferred Dates"
                    name="dates"
                    placeholder="e.g. Nov 12–16, 2026"
                    value={form.dates}
                    onChange={handleChange}
                    className="lg:row-start-2 lg:self-start"
                  />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 1.8,
                      delay: 4.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="lg:col-span-2 lg:col-start-2 lg:row-start-2 lg:self-start"
                    >
                                        
                  <FormField
                    id="contact-message"
                    label="How may we help?"
                    name="message"
                    as="textarea"
                    required
                    placeholder="Tell us about your ideal stay…"
                    value={form.message}
                    onChange={handleChange}
                    className="lg:col-span-2 lg:col-start-2 lg:row-start-2 lg:self-start"
                    inputClassName="
                    luxury-input
                    min-h-[100px]
                    resize-y
                    sm:min-h-[120px]
                    lg:!h-[46px]
                    lg:!min-h-0
                    lg:!max-h-[46px]
                    lg:!resize-none
                    lg:!overflow-hidden
                  "
                    />
                </motion.div>
                  
               
                </div>
  
                
                <motion.div
                     initial={{ opacity: 0, y: 12 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, amount: 0.2 }}
                     transition={{
                      duration: 1.8,
                      delay: 4.8,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="flex justify-center pt-2 sm:pt-4"
                    >
                <motion.button
                    type="submit"
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                    variants={{
                    rest: {
                        scale: 1,
                        y: 0,
                    },
                    hover: {
                        scale: 1.015,
                        y: -1,
                    },
                    tap: {
                        scale: 0.985,
                        y: 0,
                    },
                    }}
                    transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                    group
                    relative
                    flex
                    h-[58px]
                    w-full
                    max-w-[360px]
                    items-center
                    justify-center
                    overflow-visible
                    rounded-full
                    px-5
                    sm:h-[60px]
                    sm:max-w-[292px]
                    sm:px-6
                    "
                    style={{
                    background:
                        "linear-gradient(135deg, #163B2B 0%, #0E2D20 55%, #092319 100%)",
                    border: `1px solid ${GOLD}`,
                    boxShadow: "0 10px 28px rgba(14,45,32,0.13)",
                    }}
                >
                    {/* Elegant moving highlight */}
                    <motion.span
                    className="
                        pointer-events-none
                        absolute
                        inset-y-0
                        left-[-45%]
                        z-0
                        w-[28%]
                        skew-x-[-22deg]
                        bg-gradient-to-r
                        from-transparent
                        via-white/10
                        to-transparent
                    "
                    variants={{
                        rest: {
                        x: "0%",
                        opacity: 0,
                        },
                        hover: {
                        x: "500%",
                        opacity: 1,
                        },
                    }}
                    transition={{
                        duration: 1.05,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    />

                    {/* Botanical leaf */}
                    <motion.img
                    src={leafCorner}
                    alt=""
                    aria-hidden="true"
                    className="
                        pointer-events-none
                        absolute
                        left-[-30px]
                        top-1/2
                        z-30
                        w-[82px]
                        -translate-y-1/2
                        object-contain
                        sm:left-[-36px]
                        sm:w-[94px]
                    "
                    variants={{
                        rest: {
                        x: 0,
                        y: 0,
                        rotate: 0,
                        scale: 1,
                        },
                        hover: {
                        x: -2,
                        y: -2,
                        rotate: -3,
                        scale: 1.035,
                        },
                    }}
                    transition={{
                        duration: 0.65,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    />

                    {/* Text */}
                    <span
                    className="
                    relative
                    z-10
                    translate-x-[8px]
                    -translate-y-[1px]
                    whitespace-nowrap
                    font-jost
                    text-[20px]
                    font-coromant                    
                    leading-none
                    tracking-[0.035em]
                    sm:text-[17px]
                    "
                    style={{
                        color: "#E7DBA0",
                    }}
                    >
                    Begin the Conversation
                    </span>

                    {/* Arrow */}
                    <motion.span
                    className="
                        relative
                        z-20
                        ml-7
                        flex
                        h-[38px]
                        w-[38px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        sm:ml-8
                        sm:h-[40px]
                        sm:w-[40px]
                    "
                    style={{
                        background: GOLD,
                        color: FOREST,
                    }}
                    variants={{
                        rest: {
                        x: 0,
                        scale: 1,
                        },
                        hover: {
                        x: 4,
                        scale: 1.04,
                        },
                    }}
                    transition={{
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    >
                    <motion.span
                        className="
                        block
                        font-manrope
                        text-[16px]
                        font-medium
                        leading-none
                        "
                        variants={{
                        rest: {
                            x: 0,
                        },
                        hover: {
                            x: 2,
                        },
                        }}
                        transition={{
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        →
                    </motion.span>
                    </motion.span>

                    {/* Very subtle gold glow on hover */}
                    <motion.span
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        rounded-full
                    "
                    variants={{
                        rest: {
                        boxShadow: "0 0 0 rgba(200,167,106,0)",
                        },
                        hover: {
                        boxShadow: "0 8px 30px rgba(200,167,106,0.12)",
                        },
                    }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                    }}
                    />
                </motion.button>
                </motion.div>
              </form>
            )}
          {/* </FadeUp> */}
          </div>
        </div>
  
        <CreamToLocationBlend />
      </section>
    );
}

export default ContactForm;