// import { useEffect, useRef } from "react";
// import { Loader } from "@googlemaps/js-api-loader";

// const PACIANO = {
//   // Replace these with the exact Paciano property coordinates
//   lat: 26.552,
//   lng: 88.7351,
// };

// export default function PacianoCircleMap() {
//   const mapRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     let map: google.maps.Map | null = null;

//     const loader = new Loader({
//       apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
//       version: "weekly",
//     });

//     loader.load().then(() => {
//       if (!mapRef.current) return;

//       map = new google.maps.Map(mapRef.current, {
//         center: PACIANO,
//         zoom: 11,

//         mapTypeId: google.maps.MapTypeId.ROADMAP,

//         disableDefaultUI: true,
//         gestureHandling: "none",
//         keyboardShortcuts: false,
//         clickableIcons: false,

//         styles: [
//           {
//             elementType: "geometry",
//             stylers: [{ color: "#142619" }],
//           },

//           {
//             elementType: "labels.text.fill",
//             stylers: [{ color: "#f5f2e8" }],
//           },

//           {
//             elementType: "labels.text.stroke",
//             stylers: [{ color: "#142619" }],
//           },

//           {
//             featureType: "administrative",
//             elementType: "geometry.stroke",
//             stylers: [{ color: "#50624a" }],
//           },

//           {
//             featureType: "landscape",
//             elementType: "geometry",
//             stylers: [{ color: "#18301e" }],
//           },

//           {
//             featureType: "landscape.natural",
//             elementType: "geometry",
//             stylers: [{ color: "#17351f" }],
//           },

//           {
//             featureType: "poi",
//             elementType: "geometry",
//             stylers: [{ color: "#1d3a22" }],
//           },

//           {
//             featureType: "poi.park",
//             elementType: "geometry",
//             stylers: [{ color: "#204529" }],
//           },

//           {
//             featureType: "poi.park",
//             elementType: "labels.text.fill",
//             stylers: [{ color: "#e8edda" }],
//           },

//           {
//             featureType: "road",
//             elementType: "geometry",
//             stylers: [{ color: "#526247" }],
//           },

//           {
//             featureType: "road",
//             elementType: "geometry.stroke",
//             stylers: [{ color: "#243525" }],
//           },

//           {
//             featureType: "road",
//             elementType: "labels.text.fill",
//             stylers: [{ color: "#dce2cf" }],
//           },

//           {
//             featureType: "road.highway",
//             elementType: "geometry",
//             stylers: [{ color: "#788257" }],
//           },

//           {
//             featureType: "road.highway",
//             elementType: "geometry.stroke",
//             stylers: [{ color: "#35432e" }],
//           },

//           {
//             featureType: "transit",
//             stylers: [{ visibility: "off" }],
//           },

//           {
//             featureType: "poi.business",
//             stylers: [{ visibility: "off" }],
//           },

//           {
//             featureType: "water",
//             elementType: "geometry",
//             stylers: [{ color: "#142b27" }],
//           },

//           {
//             featureType: "water",
//             elementType: "labels.text.fill",
//             stylers: [{ color: "#9fb5a5" }],
//           },
//         ],
//       });
//     });

//     return () => {
//       map = null;
//     };
//   }, []);

//   return (
//     <div
//       className="
//         relative
//         h-[255px]
//         w-[255px]
//         overflow-hidden
//         rounded-full
//         border
//         border-white/90
//         shadow-[0_20px_55px_rgba(0,0,0,0.35)]
//       "
//     >
//       {/* GOOGLE MAP */}
//       <div
//         ref={mapRef}
//         className="absolute inset-0 h-full w-full"
//       />

//       {/* CINEMATIC GREEN WASH */}
//       <div
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           z-10
//           rounded-full
//           bg-[#17351f]/10
//           mix-blend-multiply
//         "
//       />

//       {/* PACIANO PIN */}
//       <div
//         className="
//           pointer-events-none
//           absolute
//           left-1/2
//           top-1/2
//           z-30
//           -translate-x-1/2
//           -translate-y-full
//         "
//       >
//         {/* glow */}
//         <div
//           className="
//             absolute
//             left-1/2
//             top-1/2
//             h-10
//             w-10
//             -translate-x-1/2
//             -translate-y-1/2
//             animate-ping
//             rounded-full
//             bg-[#d7e99b]/20
//           "
//         />

//         {/* pin */}
//         <svg
//           width="30"
//           height="42"
//           viewBox="0 0 30 42"
//           fill="none"
//         >
//           <path
//             d="
//               M15 0
//               C6.72 0 0 6.72 0 15
//               C0 26.25 15 42 15 42
//               C15 42 30 26.25 30 15
//               C30 6.72 23.28 0 15 0Z
//             "
//             fill="#D5E790"
//           />

//           <circle
//             cx="15"
//             cy="15"
//             r="5"
//             fill="#FFFFFF"
//           />
//         </svg>

//         {/* vertical line */}
//         <div
//           className="
//             absolute
//             left-1/2
//             top-[40px]
//             h-6
//             w-px
//             -translate-x-1/2
//             bg-white/80
//           "
//         />

//         {/* PACIANO */}
//         <span
//           className="
//             absolute
//             left-[40px]
//             top-[9px]
//             whitespace-nowrap
//             text-[11px]
//             font-medium
//             tracking-[0.22em]
//             text-white
//             drop-shadow-lg
//           "
//         >
//           PACIANO
//         </span>
//       </div>

//       {/* subtle inner border */}
//       <div
//         className="
//           pointer-events-none
//           absolute
//           inset-[2px]
//           z-40
//           rounded-full
//           border
//           border-white/20
//         "
//       />
//     </div>
//   );
// }