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
  News_App,
  Inotebookk,
  iam,
  sre,
  wipro,
  nptel,
  associate,
  fundamentals,
  drive,
  driv,
  linkedin,
  github,
  LeetCode,

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
export const navLink = [
  {
    id: "https://leetcode.com/ng404",
    image: LeetCode,
    title: "Leetcode",
  },
  {
    id: "https://github.com/ng-geeks",
    image: github,
    title: "Github",
  },
  {
    id: "https://www.linkedin.com/in/nilesh-geeks",
    image: linkedin,
    title: "Linkedin",
  },
  {
    id: "https://drive.google.com/file/d/1lUE0zbxrGiKqPGF1dEBsb0Kd2aCOTGqD/view?usp=sharing",
    image: driv,
    title: "Download CV",
  },

];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Fronted Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
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
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "BlackHawks pvt. ltd.",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2023 - Jun 2023",
    points: [
      "Developing and maintaining web applications using React.js other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Optimizing the with SEO Rules and ensuring it rank on Google."
    ],
  },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  {
    name: "Associate Cloud Developer",
    description: "Google Associate Cloud Certification Program",
    image: associate,
    company: "https://drive.google.com/file/d/1IwGobDRMXTHz-yg0o6VwC2BXyaSh2YRh/view?usp=sharing",
  },
  {
    name: "Google Developing SRE Culture",
    description: "Google Developing SRE Culture is a course for developing a friendly environment and work culture while maintaining professionalism.",
    image: sre,
    company: "https://drive.google.com/file/d/1dqwkx2bAGAZ8SF31_mJvN2qRJPsQM_FK/view?usp=drive_link",
  },
  {
    name: "Google Cloud IAM & AWS Professional",
    description: "Google Cloud IAM & AWS Professional is the course of Google Cloud IAM hierarchy and assigning roles and responbilities to the company staffs.",
    image: iam,
    company: "https://drive.google.com/file/d/1Usuf0ksZamCAwANV-6atxsJMMtmPZ4_V/view?usp=drive_link",
  },
  {
    name: "Google Cloud Fundamentals",
    description: "Google Cloud fundamentals is a course regarding the Google Cloud working and with basics knowledge of it's important thing.",
    image: fundamentals,
    company: "https://drive.google.com/file/d/1rGahUiJceNKH4i43YcHVFExYhPpLlxe1/view?usp=drive_link",
  },
  {
    name: "Blockchain ans its Architecture",
    description: "Block chain and its architecture is a a course by Nptel which focuses toward shifting the bussiness to follow blockchain and improving their bussiness with high transparency.",
    image: nptel,
    company: "https://drive.google.com/file/d/1yCTUxQ-KVfEtlm72LpX6wGGMksE5NFGh/view?usp=drive_link",
  },
  {
    name: "Wipro - Java Full Stack",
    description: "Wipro Training of Java Full Stack with core java ,frameworks , and backend.",
    image: wipro,
    company: "https://drive.google.com/file/d/1QqHxT6vPqDDYjlxxeXilJ4iGqLFIrMCt/view?usp=drive_link",
  },

];

const projects = [
  {
    name: "News App",
    description:
      "News-App for displaying the news on the website for the different sections like Tech, Entertainment, Sports, Education , etc.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: News_App,
    source_code_link: "https://github.com/ng-geeks/News-App",
  },
  {
    name: "Inotebook",
    description:
      "This is an Notebook for saving notes. Where user can Create ,View, Update and Delete Note. ",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: Inotebookk,
    source_code_link: "https://github.com/ng-geeks/Inotebook",
  },
  // {
  //   name: "Full Stack Food Website",
  //   description:
  //     "A Food Website where you can buy food , and pay the price , track the food on the way and much more",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "react.js",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Cloud Storage",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
