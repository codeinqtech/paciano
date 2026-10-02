import leafLeft from "@/images/location-left-leaves.png";
import leafAccent from "@/images/dining-leaf2.png";

/** Subtle leaf accents across the stay page (contact Connect with Us style) */
export default function StayBotanicalBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <img
        src={leafLeft}
        alt=""
        className="absolute -left-[10%] top-[18%] w-[min(48vw,400px)] opacity-[0.2] mix-blend-multiply sm:-left-[5%] sm:opacity-[0.24]"
      />
      <img
        src={leafAccent}
        alt=""
        className="absolute -right-[14%] top-[42%] w-[min(36vw,300px)] rotate-[14deg] opacity-[0.16] mix-blend-multiply sm:-right-[7%] sm:opacity-[0.2]"
      />
    </div>
  );
}
