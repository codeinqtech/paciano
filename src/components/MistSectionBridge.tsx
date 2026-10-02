import mistMountains from "@/images/paciano-mist-mountains.png";

const PARCHMENT = "#F8F4EE";

/** Home/contact-style mist band between cream sections */
export default function MistSectionBridge() {
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

export { PARCHMENT };
