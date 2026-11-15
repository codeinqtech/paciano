import weddingBanner from "@/images/events/wedding-banner.png";

import weddingAdvantage1 from "@/images/events/wedding-adv1.png";
import weddingAdvantage2 from "@/images/events/dech-wedding.png";
import weddingAdvantage3 from "@/images/events/wedding-adv2.png";
import weddingAdvantage4 from "@/images/events/wedding-banner.png";

export const weddingEventConfig = {
  hero: {
    eventType: "Weddings & Celebrations",
    titleLine1: "Beautiful Moments,",
    titleLine2: "Timeless Celebrations",
    description:
      "Celebrate love and togetherness in a setting touched by nature and timeless charm. From intimate ceremonies to grand wedding celebrations, let Paciano turn your special moments into memories to cherish forever.",
    image: weddingBanner,
    imageAlt: "Wedding celebration at Paciano",
    ctaText: "Plan Your Wedding",
    ctaHref: "/contact",
  },

  highlights: {
    eyebrow: "WEDDING EXPERIENCES",
    title: "Every Celebration Has Its Own Story",
    description:
      "From intimate ceremonies to joyful celebrations, let every moment unfold in a setting as beautiful as your story.",
    items: [
      {
        title: "Wedding Ceremonies",
        description:
          "Exchange your vows in a beautiful setting surrounded by nature.",
        image: "/images/events/wedding-ceremony.jpg",
      },
      {
        title: "Wedding Receptions",
        description:
          "Celebrate your new beginning with family, friends and unforgettable moments.",
        image: "/images/events/wedding-reception.jpg",
      },
      {
        title: "Pre-Wedding Celebrations",
        description:
          "Make every celebration leading up to your special day memorable.",
        image: "/images/events/wedding-precelebration.jpg",
      },
      {
        title: "Intimate Gatherings",
        description:
          "Create meaningful memories with the people closest to your heart.",
        image: "/images/events/wedding-intimate.jpg",
      },
    ],
  },

  advantage: {
    eyebrow: "THE PACIANO EXPERIENCE",
    titleLine1: "Love, Laughter &",
    titleLine2: "Lasting Memories",
    // title: "A Beautiful Beginning, Thoughtfully Celebrated",
    description:
      "A naturally beautiful setting, warm hospitality and thoughtful details create the perfect backdrop for your special celebration.",
    features: [
      {
        title: "Wedding Ceremonies",
        description:
          "Beautiful settings for exchanging vows and beginning forever.",
        icon: "heart",
      },
      {
        title: "Wedding Receptions",
        description: "Elegant spaces for celebrating with family and friends.",
        icon: "flower",
      },
      {
        title: "Family Celebrations",
        description:
          "Meaningful moments shared with the people closest to you.",
        icon: "users-round",
      },
      {
        title: "Special Moments",
        description:
          "Thoughtfully curated experiences for every wedding occasion.",
        icon: "sparkles",
      },
    ],

    images: [
      {
        src: weddingAdvantage1,
        alt: "Bengali wedding venue at Paciano",
      },
      {
        src: weddingAdvantage2,
        alt: "Wedding mandap decoration at Paciano",
      },
      {
        src: weddingAdvantage3,
        alt: "Wedding banquet lawn at Paciano",
      },
      {
        src: weddingAdvantage4,
        alt: "Wedding dining arrangement at Paciano",
      },
    ],
  },

  venues: {
    eyebrow: "CELEBRATION SPACES",
    title1: "A Setting For",
    title2: "Your Forever",
    description:
      "Find the perfect setting for every chapter of your wedding celebration, from intimate ceremonies to grand receptions.",
    items: [
      {
        title: "Dech Spaces",
        description:
          "Celebrate beneath the open sky in a naturally beautiful setting.",
        image: weddingAdvantage2,
        capacity: "Up to 150 Guests",
        setup: "Open-air Setting",
      },
      {
        title: "Elegant Indoor Spaces",
        description:
          "Beautifully arranged spaces for intimate celebrations and receptions.",
        image: weddingAdvantage4,
        capacity: "Up to 150 Guests",
        setup: "Open-air Setting",
      },
      {
        title: "Outdoor Lawn Spaces",
        description:
          "Beautifully arranged spaces for intimate celebrations and receptions.",
        image: weddingAdvantage4,
        capacity: "Up to 150 Guests",
        setup: "Open-air Setting",
      },
      {
        title: "Elegant Hall Spaces",
        description:
          "Beautifully arranged spaces for intimate celebrations and receptions.",
        image: weddingAdvantage4,
        capacity: "Up to 150 Guests",
        setup: "Open-air Setting",
      },
    ],
  },

  dining: {
    eyebrow: "WEDDING DINING",
    title: "A Feast to Celebrate Together",
    description:
      "Bring your loved ones together over delightful food and thoughtfully curated dining experiences.",
    image: "/images/events/wedding-dining.jpg",
    items: [
      {
        title: "Wedding Celebrations",
        description:
          "Memorable dining experiences to complement your special day.",
      },
      {
        title: "Intimate Dining",
        description:
          "Thoughtfully arranged dining for smaller gatherings and special moments.",
      },
    ],
  },
};
