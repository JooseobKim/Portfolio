import { IProject, MySkillAndTool } from "./type";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import {
  SiJavascript,
  SiReact,
  SiNodeDotJs,
  SiMongodb,
  SiHeroku,
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
    skill: "MongoDB",
    color: "#4db33d",
    Icon: SiMongodb,
  },
  {
    skill: "Git",
    color: "#f1502f",
    Icon: SiGit,
  },
  {
    skill: "Heroku",
    color: "#6762a6",
    Icon: SiHeroku,
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
  {
    id: 2,
    name: "Portfolio",
    image_path: "/images/portfolio.png",
    deployed_url: "https://google.com",
    github_url: "https://github.com",
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
];
