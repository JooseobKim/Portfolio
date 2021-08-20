import { IconType } from "react-icons";

export interface MySkillAndTool {
  skill: string;
  color: string;
  Icon: IconType;
}

export interface IProject {
  id: number;
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
  pdf: string;
}

export type Category = "React" | "Node" | "MongoDB" | "Typescript" | "Next.js";
