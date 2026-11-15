import corporateBanner from "@/images/events/corporate-banner.png";

import corporateAdvantage1 from "@/images/events/corporate.jpg";
import corporateAdvantage2 from "@/images/events/corporate-adv1.png";
import corporateAdvantage3 from "@/images/events/corporate.jpg";
import corporateAdvantage4 from "@/images/events/corporate-banner.png";

export const corporateEventConfig = {
  hero: {
    eventType: "Corporate Gatherings",
    titleLine1: "Where Ideas Meet",
    titleLine2: "Inspiring Spaces",
    description:
      "Bring people together in a setting where fresh ideas flourish. From meaningful meetings and team retreats to corporate celebrations, experience thoughtful hospitality and inspiring surroundings at Paciano.",
    image: corporateBanner,
    imageAlt: "Corporate event at Paciano",
    ctaText: "Enquire Now",
    ctaHref: "/contact",
  },

  highlights: {
    eyebrow: "CORPORATE EXPERIENCES",
    title: "Designed for Meaningful Connections",
    description:
      "From focused meetings to grand celebrations, discover spaces that bring people together and make every gathering memorable.",
    items: [
      {
        title: "Corporate Meetings",
        description:
          "Thoughtfully designed spaces for productive discussions and important decisions.",
        image: "/images/events/corporate-meeting.jpg",
      },
      {
        title: "Conferences & Seminars",
        description:
          "An inspiring setting for sharing knowledge, ideas and perspectives.",
        image: "/images/events/corporate-conference.jpg",
      },
      {
        title: "Team Retreats",
        description:
          "Step away from routine and reconnect with your team in nature.",
        image: "/images/events/corporate-retreat.jpg",
      },
      {
        title: "Corporate Celebrations",
        description:
          "Celebrate milestones and achievements with memorable experiences.",
        image: "/images/events/corporate-celebration.jpg",
      },
    ],
  },

  advantage: {
    eyebrow: "THE PACIANO EXPERIENCE",
    titleLine1: "Inspired by Nature",
    titleLine2: "Designed for Connection",
    // title: "A Refreshing Perspective on Business Gatherings",
    description:
      "A natural setting, attentive hospitality and thoughtfully curated experiences come together to make every corporate gathering exceptional.",
    features: [
      {
        title: "Conferences & Meetings",
        description:
          "Purposeful spaces for productive discussions and presentations.",
        icon: "presentation",
      },
      {
        title: "Executive Retreats",
        description:
          "Step away from the everyday and bring leadership teams together in a refreshing natural setting.",
        icon: "chart",
      },
      {
        title: "Corporate Networking",
        description:
          "Create valuable connections and meaningful professional relationships.",
        icon: "handshake",
      },
      {
        title: "Leadership Summits",
        description:
          "An inspiring setting for executive dialogue, vision and strategic decisions.",
        icon: "landmark",
      },
    ],

    images: [
      {
        src: corporateAdvantage1,
        alt: "Corporate conference setup at Paciano",
      },
      {
        src: corporateAdvantage2,
        alt: "Corporate gathering at Paciano",
      },
      {
        src: corporateAdvantage3,
        alt: "Outdoor corporate networking at Paciano",
      },
      {
        src: corporateAdvantage4,
        alt: "Corporate dining experience at Paciano",
      },
    ],
  },

  venues: {
    eyebrow: "OUR VENUES",
    title1: "The Perfect Setting",
    title2: "For Every Gathering",
    description:
      "Discover versatile settings designed to host everything from intimate meetings to larger corporate gatherings.",
    items: [
      {
        title: "The Deck – Event Spaces",
        description:
          "An open-air setting with scenic surroundings, perfect for corporate gatherings, networking sessions and memorable team experiences.",
        image: corporateAdvantage2,
        capacity: "Up to 150 Guests",
        setup: "Open-air Setting",
      },
      {
        title: "Conference Room",
        description:
          "Open-air settings surrounded by nature for engaging gatherings.",
        image: corporateAdvantage1,
        capacity: "Up to 150 Guests",
        setup: "Open-air Setting",
      },
      {
        title: "Outdoor Lawn Spaces",
        description:
          "Open-air settings surrounded by nature for relaxed and engaging gatherings.",
        image: corporateBanner,
        capacity: "Up to 150 Guests",
        setup: "Open-air Setting",
      },
      {
        title: "Outdoor Gathering Spaces",
        description:
          "Open-air settings surrounded by nature for relaxed and engaging gatherings.",
        image: corporateAdvantage3,
        capacity: "Up to 150 Guests",
        setup: "Open-air Setting",
      },
    ],
  },

  dining: {
    eyebrow: "DINING EXPERIENCES",
    title: "Good Food. Better Conversations.",
    description:
      "Bring people together over thoughtfully prepared meals and memorable dining experiences.",
    image: "/images/events/corporate-dining.jpg",
    items: [
      {
        title: "Curated Group Dining",
        description:
          "Dining experiences thoughtfully arranged for your team and guests.",
      },
      {
        title: "Refreshments & Coffee Breaks",
        description:
          "Perfectly timed refreshments to keep conversations flowing.",
      },
    ],
  },
};
