type StayPhotoBridgeProps = {
  src: string;
  topFade?: string;
  bottomFade?: string;
};

/** Full-width photo band between stay sections (contact-page style boundary) */
export default function StayPhotoBridge({
  src,
  topFade = "#F8F5EE",
  bottomFade = "#F8F5EE",
}: StayPhotoBridgeProps) {
  return (
    <div
      className="relative left-1/2 z-10 w-screen -translate-x-1/2 overflow-hidden"
      style={{ height: "clamp(132px, 20vw, 260px)" }}
      aria-hidden
    >
      <img
        src={src}
        alt=""
        className="h-full w-full object-cover object-center"
      />
      <div
        className="absolute inset-x-0 top-0 h-[48%]"
        style={{
          background: `linear-gradient(to bottom, ${topFade} 0%, ${topFade}88 35%, transparent 100%)`,
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-[48%]"
        style={{
          background: `linear-gradient(to top, ${bottomFade} 0%, ${bottomFade}88 35%, transparent 100%)`,
        }}
      />
    </div>
  );
}
