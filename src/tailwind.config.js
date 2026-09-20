/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      keyframes: {
        "paciano-experiences-enter": {
          "0%": {
            opacity: "0",
            transform: "translate3d(0, 45px, 0) scale(.97)",
          },

          "60%": {
            opacity: "1",
            transform: "translate3d(0, -3px, 0) scale(1.005)",
          },

          "100%": {
            opacity: "1",
            transform: "translate3d(0, 0, 0) scale(1)",
          },
        },

        "paciano-image-cinema": {
          "0%": {
            transform: "scale(1.08)",
          },

          "100%": {
            transform: "scale(1)",
          },
        },

        "paciano-icon-arrive": {
          "0%": {
            opacity: "0",
            transform: "scale(.72) translateY(8px)",
          },

          "70%": {
            opacity: "1",
            transform: "scale(1.04) translateY(-1px)",
          },

          "100%": {
            opacity: "1",
            transform: "scale(1) translateY(0)",
          },
        },

        /* ADD THIS */
        "paciano-float": {
          "0%, 100%": {
            transform: "translateY(0px)",
          },

          "50%": {
            transform: "translateY(-4px)",
          },
        },

        /* =========================================================
          PREMIUM LOCATION ICON FLOAT
          ========================================================= */

        "locationIconFloat": {
          "0%, 100%": {
            transform: "translateY(0px) scale(1)",
          },

          "50%": {
            transform: "translateY(-2px) scale(1.015)",
          },
        },
        "locationLandscape": {
          "0%, 100%": {
            transform: "translateY(0px) scale(1)",
          },
        
          "50%": {
            transform: "translateY(-3px) scale(1.025)",
          },
        },
        
        "locationRoad": {
          "0%, 100%": {
            transform: "translateY(0px) rotate(0deg)",
          },
        
          "50%": {
            transform: "translateY(-2px) rotate(1deg)",
          },
        },
        
        "locationRiver": {
          "0%, 100%": {
            transform: "translateX(0px) translateY(0px)",
          },
        
          "50%": {
            transform: "translateX(2px) translateY(-1px)",
          },
        },
        
        "locationRetreat": {
          "0%, 100%": {
            transform: "translateY(0px) scale(1)",
          },
        
          "50%": {
            transform: "translateY(-2px) scale(1.018)",
          },
        },
        "locationCompassFloat": {
          "0%, 100%": {
            transform: "translateY(0px) rotate(0deg) scale(1)",
          },
        
          "50%": {
            transform: "translateY(-2px) rotate(2deg) scale(1.015)",
          },
        },
        
        "locationRiverFloat": {
          "0%, 100%": {
            transform: "translateY(0px) scaleX(1)",
          },
        
          "50%": {
            transform: "translateY(-1.5px) scaleX(1.025)",
          },
        },
        
        "locationTreeSway": {
          "0%, 100%": {
            transform: "translateY(0px) rotate(0deg)",
          },
        
          "50%": {
            transform: "translateY(-2px) rotate(1.2deg)",
          },
        },

        /* =========================================================
        VERY SLOW LANDSCAPE CAMERA MOVEMENT
        ========================================================= */
      
        "locationImageEnter": {
          "0%": {
            opacity: "0",
            transform: "scale(1.10) translate3d(0, 28px, 0)",
          },
        
          "35%": {
            opacity: "0.72",
            transform: "scale(1.065) translate3d(-0.15%, 14px, 0)",
          },
        
          "70%": {
            opacity: "0.94",
            transform: "scale(1.035) translate3d(-0.30%, 4px, 0)",
          },
        
          "100%": {
            opacity: "1",
            transform: "scale(1) translate3d(-0.42%, 0, 0)",
          },
        },

        "locationImageCinema": {
          "0%, 100%": {
            transform: "scale(1.015) translate3d(-0.42%, 0, 0)",
          },
        
          "25%": {
            transform: "scale(1.035) translate3d(-0.65%, -0.12%, 0)",
          },
        
          "50%": {
            transform: "scale(1.05) translate3d(-0.90%, -0.25%, 0)",
          },
        
          "75%": {
            transform: "scale(1.035) translate3d(-0.65%, -0.12%, 0)",
          },
        },

        "locationEyebrowEnter": {
          "0%": {
            opacity: "0",
            transform: "translate3d(0, 20px, 0)",
          },
        
          "100%": {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },
        
        "locationHeadingEnter": {
          "0%": {
            opacity: "0",
            transform: "translate3d(0, 42px, 0)",
          },
        
          "65%": {
            opacity: "1",
            transform: "translate3d(0, -3px, 0)",
          },
        
          "100%": {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },
        
        "locationDescriptionEnter": {
          "0%": {
            opacity: "0",
            transform: "translate3d(0, 25px, 0)",
          },
        
          "100%": {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },
        
        "locationFeaturesEnter": {
          "0%": {
            opacity: "0",
            transform: "translate3d(0, 25px, 0)",
          },
        
          "100%": {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },
        
        "locationCtaEnter": {
          "0%": {
            opacity: "0",
            transform: "translate3d(0, 25px, 0) scale(.94)",
          },
        
          "70%": {
            opacity: "1",
            transform: "translate3d(0, -2px, 0) scale(1.01)",
          },
        
          "100%": {
            opacity: "1",
            transform: "translate3d(0, 0, 0) scale(1)",
          },
        },
        
        "locationMapEnter": {
          "0%": {
            opacity: "0",
            transform: "translate3d(0, 55px, 0) scale(.965)",
          },
        
          "70%": {
            opacity: "1",
            transform: "translate3d(0, -3px, 0) scale(1.005)",
          },
        
          "100%": {
            opacity: "1",
            transform: "translate3d(0, 0, 0) scale(1)",
          },
        },

        "locationCtaShine": {
          "0%": {
            transform: "translateX(-180%) skewX(-18deg)",
          },
        
          "45%": {
            transform: "translateX(380%) skewX(-18deg)",
          },
        
          "100%": {
            transform: "translateX(380%) skewX(-18deg)",
          },
        },
        "locationAccessIcon": {
          "0%, 100%": {
            transform: "translate3d(0, 0, 0) rotate(0deg) scale(1)",
          },
        
          "50%": {
            transform: "translate3d(0, -2px, 0) rotate(1deg) scale(1.035)",
          },
        },

        /* =========================================================
            SUNLIGHT
            ========================================================= */
      
        sunGlow: {
          "0%, 100%": {
            opacity: "0.25",
            transform: "scale(1)",
          },
      
          "50%": {
            opacity: "0.45",
            transform: "scale(1.08)",
          },
        },
        /* =========================================================
     LEAF
     ========================================================= */

  locationLeaf: {
    "0%, 100%": {
      transform: "rotate(0deg)",
    },

    "50%": {
      transform: "rotate(1.2deg) translateY(3px)",
    },
  },

  /* =========================================================
     EYEBROW
     ========================================================= */

  locationEyebrow: {
    "0%": {
      opacity: "0",
      transform: "translateY(15px)",
    },

    "100%": {
      opacity: "1",
      transform: "translateY(0)",
    },
  },

  /* =========================================================
     HEADING
     ========================================================= */

  locationHeading: {
    "0%": {
      opacity: "0",
      transform: "translateY(30px)",
    },

    "100%": {
      opacity: "1",
      transform: "translateY(0)",
    },
  },

  /* =========================================================
     DESCRIPTION
     ========================================================= */

  locationDescription: {
    "0%": {
      opacity: "0",
      transform: "translateY(20px)",
    },

    "100%": {
      opacity: "1",
      transform: "translateY(0)",
    },
  },

  /* =========================================================
     BUTTON
     ========================================================= */

  locationButton: {
    "0%": {
      opacity: "0",
      transform: "translateY(18px)",
    },

    "100%": {
      opacity: "1",
      transform: "translateY(0)",
    },
  },

        /* =========================================================
          SCRIPT
          ========================================================= */

        locationScript: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px) rotate(-7deg)",
          },

          "100%": {
            opacity: "1",
            transform: "translateY(0) rotate(-3deg)",
          },
        },

        /* =========================================================
          RIGHT LABEL
          ========================================================= */

          locationSide: {
            "0%": {
              opacity: "0",
              transform: "translateX(20px)",
            },

            "100%": {
              opacity: "1",
              transform: "translateX(0)",
            },
          },
        },
   

      

        animation: {
          "paciano-experiences-enter":
            "paciano-experiences-enter 1.35s cubic-bezier(.22,1,.36,1) forwards",
        
          "paciano-image-cinema":
            "paciano-image-cinema 2.8s cubic-bezier(.22,1,.36,1) forwards",
        
          "paciano-icon-arrive":
            "paciano-icon-arrive 1s cubic-bezier(.22,1,.36,1) forwards",
        
          "paciano-float":
            "paciano-float 8s ease-in-out infinite",
        
          "location-icon-float":
            "locationIconFloat 5s ease-in-out infinite",
        
          "location-image":
            "locationImage 24s ease-in-out infinite",
        
          "sun-glow":
            "sunGlow 9s ease-in-out infinite",
        
          "location-leaf":
            "locationLeaf 8s ease-in-out infinite",
        
          "location-eyebrow":
            "locationEyebrow 1s cubic-bezier(0.22,1,0.36,1) 0.15s forwards",
        
          "location-heading":
            "locationHeading 1.15s cubic-bezier(0.22,1,0.36,1) 0.3s forwards",
        
          "location-description":
            "locationDescription 1s cubic-bezier(0.22,1,0.36,1) 0.6s forwards",
        
          "location-button":
            "locationButton 1s cubic-bezier(0.22,1,0.36,1) 0.8s forwards",
        
          "location-script":
            "locationScript 1.2s cubic-bezier(0.22,1,0.36,1) 0.9s forwards",
        
          "location-side":
            "locationSide 1s cubic-bezier(0.22,1,0.36,1) 1.1s forwards",

          "location-landscape":
            "locationLandscape 4.8s cubic-bezier(.45,.05,.55,.95) infinite",
          
          "location-road":
            "locationRoad 5.6s cubic-bezier(.45,.05,.55,.95) infinite",
          
          "location-river":
            "locationRiver 4.2s cubic-bezier(.45,.05,.55,.95) infinite",
          
          "location-retreat":
            "locationRetreat 6.4s cubic-bezier(.45,.05,.55,.95) infinite",

          "location-image-enter":
            "locationImageEnter 2.8s cubic-bezier(.22,1,.36,1) forwards",
          
          "location-image-cinema":
            "locationImageCinema 32s ease-in-out 2.8s infinite",
          
          "location-eyebrow-enter":
            "locationEyebrowEnter .9s cubic-bezier(.22,1,.36,1) .15s forwards",
          
          "location-heading-enter":
            "locationHeadingEnter 1.25s cubic-bezier(.22,1,.36,1) .28s forwards",
          
          "location-description-enter":
            "locationDescriptionEnter 1s cubic-bezier(.22,1,.36,1) .55s forwards",
          
          "location-features-enter":
            "locationFeaturesEnter 1s cubic-bezier(.22,1,.36,1) .78s forwards",
          
          "location-cta-enter":
            "locationCtaEnter 1.05s cubic-bezier(.22,1,.36,1) .95s forwards",
          
          "location-map-enter":
            "locationMapEnter 1.25s cubic-bezier(.22,1,.36,1) 1.15s forwards",
          
          "location-cta-shine":
            "locationCtaShine 6s ease-in-out infinite",
          
          "location-access-icon":
            "locationAccessIcon 5.5s ease-in-out infinite",
        },
    },
  },

  plugins: [],
};
