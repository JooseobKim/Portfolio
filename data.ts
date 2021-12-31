import { IProject, MySkillAndTool } from "./type";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import {
  SiJavascript,
  SiReact,
  SiNodeDotJs,
  SiMongodb,
  SiAmazonaws,
  SiPostman,
  SiGit,
  SiRedux,
} from "react-icons/si";

export const mySkillAndTool: MySkillAndTool[] = [
  {
    skill: "HTML",
    color: "e34f26",
    Icon: AiFillHtml5,
  },
  {
    skill: "CSS",
    color: "#2965f1",
    Icon: DiCss3,
  },
  {
    skill: "Javascript",
    color: "#f0db4f",
    Icon: SiJavascript,
  },
  {
    skill: "React.js",
    color: "#61dbfb",
    Icon: SiReact,
  },
  {
    skill: "Redux",
    color: "#764abc",
    Icon: SiRedux,
  },
  {
    skill: "Node.js",
    color: "#68a063",
    Icon: SiNodeDotJs,
  },
  {
    skill: "Mongoose ODM",
    color: "#4db33d",
    Icon: SiMongodb,
  },
  {
    skill: "Git",
    color: "#f1502f",
    Icon: SiGit,
  },
  {
    skill: "AWS EC2",
    color: "FF9900",
    Icon: SiAmazonaws,
  },
  {
    skill: "Postman",
    color: "#ef5b25",
    Icon: SiPostman,
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "Course Planet - TS",
    description:
      "MERN 스택 + Redux, TypeScript를 기반으로 만든 개인 프로젝트입니다. Cloudinary와 AWS EC2 서비스를 이용하였습니다. Course Planet은 간단한 인터넷 강의 리뷰 평점 사이트입니다.",
    image_path: "/images/course-planet.png",
    deployed_url: "https://www.courseplanet.site/",
    github_url: "https://github.com/JooseobKim/Course-Planet-TS",
    category: ["React", "Node", "MongoDB", "Typescript"],
    key_techs: [
      "React",
      "Redux",
      "TypeScript",
      "Node",
      "Express",
      "MongoDB",
      "Swiper.js",
      "Cloudinary",
      "AWS EC2",
      "Styled-Components",
    ],
    pdf: "course-planet-typescript.pdf",
  },
  {
    id: 2,
    name: "Portfolio",
    image_path: "/images/portfolio.png",
    deployed_url: "https://portfolio-jooseobkim.vercel.app/",
    github_url: "https://github.com/JooseobKim/Portfolio",
    category: ["React", "Next.js", "Typescript"],
    description:
      "Next.js와 Typescript 기술을 사용하여 만든 클론 코딩 포트폴리오입니다. Next.js와 Typescript 기술을 사용할 수 있어서 흥미로웠던 클론 코딩이였으며, 포트폴리오의 세부 내용은 저에게 맞게 약간의 수정을 거쳤습니다.",
    key_techs: [
      "React",
      "Next.js",
      "Typescript",
      "Framer Motion",
      "Tailwind.css",
    ],
    pdf: "resume.pdf",
  },
  {
    id: 3,
    name: "Course Planet",
    description:
      "MERN 스택 + Redux를 기반으로 만든 개인 프로젝트입니다. Cloudinary와 Heroku 서비스를 이용하였습니다. Course Planet은 간단한 인터넷 강의 리뷰 평점 사이트입니다.",
    image_path: "/images/course-planet.png",
    deployed_url: "https://course-planet.herokuapp.com/",
    github_url: "https://github.com/JooseobKim/Course-Planet",
    category: ["React", "Node", "MongoDB"],
    key_techs: [
      "React",
      "Redux",
      "Node",
      "Express",
      "MongoDB",
      "Swiper.js",
      "Cloudinary",
      "Heroku",
      "Styled-Components",
    ],
    pdf: "course-planet-project.pdf",
  },
];
