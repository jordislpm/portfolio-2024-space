import PopUpAlertProjectLink from "@/components/PopUpAlertProjectLink";
import { typeProjectCard } from "@/types";

export const myProjects: typeProjectCard[] = [
  {
    company: "personal",
    src: "/projects/ecommerce-oli-store.png",
    title: "Oli Store E-commerce",
    repository_state: true,
    liveCode_state: true,
    description:
      "Custom e-commerce platform developed with a modern frontend in React/Next.js and a headless backend powered by Wix. Includes product catalog, shopping cart, checkout, and payment integration, designed with a clean and minimalistic UI for a professional online store experience.",
    repository: "https://github.com/jordislpm/oli_store",
    liveCode: "https://ecommerce-clone-template.vercel.app/",
    technologies: ["Next.js", "React", "TypeScript", "TailwindCSS", "Wix Headless API"],
    stackType: "frontend + headless backend",
  },
  {
    company: "personal",
    src: "/projects/real-estate-app.png",
    title: "Real Estate Platform",
    repository_state: true,
    liveCode_state: true,
    description:
      "Fullstack real estate application featuring property listings, user authentication, live chat via sockets, and post management. Built with React, Express, and MongoDB, tailored for real-world listings in Las Terrenas.",
    repository: "https://github.com/jordislpm/terrenas_realty",
    liveCode: "https://terrenas-realty.vercel.app/",
    technologies: ["React 19", "TypeScript", "Express", "MongoDB", "Socket.IO", "Prisma"],
    stackType: "fullstack",
  },
  {
    company: "personal",
    src: "/projects/geomatic-landing.png",
    title: "Surveying Landing Page",
    repository_state: true,
    liveCode_state: true,
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
    repository_state: true,
    liveCode_state: true,
    description:
      "A great personal project for renting cars, where you can choose the vehicle of your choice and rent it for a good price. Currently it is a frontend project that obtains data from a public API, it is a project that is still in development and my goal is to create my own backend and make it a complete fullstack project, with its own database of cars and users.",
    repository: "https://github.com/jordislpm/safe-rent-car",
    liveCode: "https://safe-rent-car.vercel.app/",
    technologies: ["HTML", "CSS", "TypeScript", "React", "Next 14", "Tailwind CSS"],
    stackType: "frontend",
  },
  {
    company: "personal",
    src: "/projects/pokeApp.png",
    title: "Pokemon App",
    repository_state: true,
    liveCode_state: true,
    description:
      "This is a simple project that I did when I was learning React. It is basic but serves to show my first experience consuming a REST API and using global state management.",
    repository: "https://github.com/jordislpm/PokeApp",
    liveCode: "https://poke-app-ebon-zeta.vercel.app/",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    stackType: "frontend",
  },
  {
    company: "Nevobit",
    src: "/projects/itaaj-realty.png",
    title: "Itaaj Realty: Real Estate Page",
    repository_state: false,
    liveCode_state: false,
    repositoryMessage: "This repository is private and cannot be accessed.",
    liveCodeMessage: "The live site is offline, but the project is included to showcase my real-world frontend experience.",
    description:
      "As part of my work at Nevobit in 2023, I developed a comprehensive front-end interface for a real estate platform, allowing users to buy, sell, and rent properties.",
    repository: "https://github.com/nevobit/itaaj-monorepo",
    liveCode: "https://www.itaajrealty.com/",
    technologies: ["HTML", "CSS", "TypeScript", "React", "Next 13", "Redux Toolkit"],
    stackType: "frontend",
  },
  {
    company: "Nevobit",
    src: "/projects/helebba.png",
    title: "Helebba: Business Administration",
    repository_state: false,
    liveCode_state: false,
    repositoryMessage: "The repository is private and cannot be shared, but it reflects my frontend contributions.",
    liveCodeMessage: "The live site is no longer online, but the project is kept to show my participation in a full real-world project.",
    description:
      "A software for managing invoicing, accounting, inventory, CRM, projects, and HR from a single platform. I contributed heavily to frontend development and assisted with some backend tasks.",
    repository: "https://github.com/nevobit/helebba-monorepo",
    liveCode: "https://www.helebba.com/",
    technologies: ["HTML", "CSS", "TypeScript", "React", "React Toolkit", "Next 13", "Node.js"],
    stackType: "frontend",
  },
];

