import {
  javascript,
  html,
  css,
  reactjs,
  gsap,
  tailwind,
  nodejs,
  mongodb,
  git,
  ochi,
  linktree,
  threejs,
  ecom,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Works",
  },
  {
    id: "contact",
    title: "Contact",
  },
];



const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "gsap",
    icon: gsap,
  },

];


const projects = [
  {
    name: "Loosely Fit",
    description:
      "A Full Stack e-commerce website developed using React.js, Stripe for payments, Node.js, MongoDB, and Redis for optimized performance and scalability.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ecom,
    source_code_link: "https://mern-ecommerce-n35r.onrender.com",
  },
  {
    name: "Linktree",
    description:
      "I designed Linktree-style landing page using React, incorporating smooth scrolling animations powered by Lenis and Locomotive Scroll. to achieve a visually appealing, with fluid transitions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "locomotive",
        color: "green-text-gradient",
      },
      {
        name: "gsap",
        color: "pink-text-gradient",
      },
    ],
    image: linktree,
    source_code_link: "https://rohitsr0202.github.io/Linktree/",
  },
  {
    name: "Ochi Design",
    description:
      "I designed and developed the Ochi-Design website landing page, leveraging React for a dynamic user interface and Lenis for smooth, ensuring an engaging and seamless user experience.",
    tags: [
      {
        name: "lenis",
        color: "blue-text-gradient",
      },
      {
        name: "gsap",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: ochi,
    source_code_link: "https://rohitsr0202.github.io/Ochi-Design/",
  },
];

export { technologies, projects };
