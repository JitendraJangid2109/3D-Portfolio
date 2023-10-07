import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Java Developer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "React.js Developer",
    icon: backend,
  },
  {
    title: "Data Structure and Algorithms",
    icon: creator,
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
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Oasis Infotech (Internship)",
    icon: shopify,
    iconBg: "#383E56",
    date: "Sep 2023 - present",
    points: [
      "Making the several projects using front-end technology like HTML , CSS , JavaScript and React.js.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Storing codebase in the github repository.",
    ],
  },
  {
    title: "3-d Portfolio",
    company_name: "Project",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Sep - 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Showing 3-D diagrams using three.js making the portfolio looking great.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Use of emil.js technology for contact section.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "To-do List , Project",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2023",
    points: [
      "Maintaining To-do List web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Search out your daily goals and delete the list items that are completed.",
    ],
  },

  {
    title: "Snake Game",
    company_name: "Project",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - March 2023",
    points: [
      "Developing and maintaining game applications using C-language and other related technologies.",
      "Collaborating with classmate teams  other developers to create high-quality game.",
      "Just a real game used to play when we were kids in keypad mobiles",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "3-D Portfolio",
    description:
      "Web-based portfolio with dynamic and responsive design , Using three.js and React.js as the tools .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "email.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Gymnasium Website",
    description:
      "Web application that enables users to see the gymnasium website and the registration in that gymnasium.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Snake Game",
    description:
      "A snake game design using pure C-language ,To look it dyanamic used Mathematics calculation . Just look like game of snake in keypad mobiles.",
    tags: [
      {
        name: "C",
        color: "blue-text-gradient",
      },

      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
