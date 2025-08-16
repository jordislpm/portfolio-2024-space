import PopUpAlertProjectLink from "@/components/PopUpAlertProjectLink";
import { typeProjectCard } from "@/types";

export const myProjects: typeProjectCard[] = [
  {
    company: "Nevobit",
    src: "/projects/itaaj-realty.png",
    title: "Itaaj realty: Real state page",
    description:
      "As part of my work at Nevobit in 2023, my initial assignment involved developing a comprehensive front-end interface. This website is designed for users to buy, sell, and rent real estate properties.",
    repository: "https://github.com/nevobit/itaaj-monorepo",
    liveCode: "https://www.itaajrealty.com/",
    technologies: [
      "HTML",
      "CSS",
      "TypeScript",
      "React",
      "Next 13",
      "Redux Toolkit",
    ],
    stackType: "frontend",
  },
  {
    company: "Nevobit",
    src: "/projects/helebba.png",
    title: "Helebba: Business administration",
    description:
      "A software for managing invoicing, accounting, inventory, CRM, projects, and HR from one platform. At Nevobit, I played a key role in implementing front-end and took on some basic back-end tasks.",
    repository: "https://github.com/nevobit/helebba-monorepo",
    liveCode: "https://www.helebba.com/",
    technologies: [
      "HTML",
      "CSS",
      "TypeScript",
      "React",
      "React Toolkit",
      "Next 13",
      "Node js",
    ],
    stackType: "frontend",
    alert: true,
  },
   {
  company: "personal",
  src: "/projects/ecommerce-oli-store.png",
  title: "Oli Store E-commerce",
  description:
    "Custom e-commerce platform developed with a modern frontend in React/Next.js and a headless backend powered by Wix. Includes product catalog, shopping cart, checkout, and payment integration, designed with a clean and minimalistic UI for a professional online store experience.",
  repository: "https://github.com/jordislpm/ecommerce-clone-template-spanish", 
  liveCode: "https://ecommerce-clone-template-spanish.vercel.app/", 
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "TailwindCSS",
    "Wix Headless API",
  ],
  stackType: "frontend + headless backend",
},
  {
    company: "personal",
    src: "/projects/real-estate-app.png",
    title: "Real Estate Platform",
    description:
      "Fullstack real estate application featuring property listings, user authentication, live chat via sockets, and post management. Built with React, Express, and MongoDB, tailored for real-world listings in Las Terrenas.",
    repository: "https://github.com/jordislpm/terrenas_realty", 
    liveCode: "https://terrenas-realty.vercel.app/", 
    technologies: [
      "React 19",
      "TypeScript",
      "Express",
      "MongoDB",
      "Socket.IO",
      "Prisma",
    ],
    stackType: "fullstack",
  },
  {
    company: "personal",
    src: "/projects/geomatic-landing.png",
    title: "Surveying Landing Page",
    description:
      "Landing page template for surveying businesses, showcasing services like land surveying, cartography, and georeferencing. Includes company info, team details, and contact information.",
    repository: "https://github.com/jordislpm/geomatic-d-pena",
    liveCode: "https://geomatic-d-pena.vercel.app/",
    technologies: ["HTML", "CSS", "TypeScript", "React", "Next 14"],
    stackType: "frontend",
  },
  {
    company: "personal",
    src: "/projects/safe-rent-car.png",
    title: "Safe Rent Car",
    description:
      "A great personal project for renting cars, where you can choose the vehicle of your choice and rent it for a good price. Currently it is a frontend project that obtains data from a public API, it is a project that is still in development and my goal is to create my own backend and make it a complete fullstack project, with its own database of cars and users.",
    repository: "https://github.com/jordislpm/safe-rent-car",
    liveCode: "https://safe-rent-car.vercel.app/",
    technologies: [
      "HTML",
      "CSS",
      "TypeScript",
      "React",
      "Next 14",
      "Tailwind CSS",
    ],
    stackType: "frontend",
  },
  {
    company: "personal",
    src: "/projects/pokeApp.png",
    title: "Pokemon app",
    description:
      "This is a simple project that I did when I was learning react, it is very basic to show in this portfolio, but it was my first project consuming a rest api, using global state, ect. That's why I'm nostalgic for it and I always like to share it.",
    repository: "https://github.com/jordislpm/PokeApp",
    liveCode: "https://poke-app-ebon-zeta.vercel.app/",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    stackType: "frontend",
  },
];
