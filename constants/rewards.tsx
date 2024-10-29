import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiFramer,
  SiNextdotjs,
} from "react-icons/si";

export const REWARDS = [
  {
    category: "skills",
    info: [
      {
        title: "Web Development",
        description: "Specialized in modern web technologies.",
        icons: [
          FaHtml5,
          FaCss3,
          FaJs,
          FaReact,
          SiNextdotjs,
          SiFramer,
          FaWordpress,
        ],
        stage: "", // Empty as it's not relevant for skills
      },
      {
        title: "UI/UX Design",
        description: "Proficient in designing user-centric interfaces.",
        icons: [FaFigma, SiAdobexd, SiAdobephotoshop],
        stage: "",
      },
    ],
  },
  {
    category: "awards",
    info: [
      {
        title: "Webby Awards - Honoree",
        description:
          "Recognized for excellence in web design and functionality.",
        icons: [], // Empty for non-skill categories
        stage: "2011 - 2012",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        description: "Finalist in Adobe's prestigious design competition.",
        icons: [],
        stage: "2009 - 2010",
      },
    ],
  },
  {
    category: "experience",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        description:
          "Led the design team to create user-friendly digital products.",
        icons: [],
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        description: "Developed and maintained client websites.",
        icons: [],
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        description: "Gained experience in various IT support tasks.",
        icons: [],
        stage: "2008 - 2010",
      },
    ],
  },
  {
    category: "credentials",
    info: [
      {
        title: "Web Development - ABC University, LA, CA",
        description: "Studied web development and computer science principles.",
        icons: [],
        stage: "2011",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        description: "Completed a diploma in computer science fundamentals.",
        icons: [],
        stage: "2009",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        description: "Certified in graphic design techniques and tools.",
        icons: [],
        stage: "2006",
      },
    ],
  },
];
