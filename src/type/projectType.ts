import { Skill } from "./skillType";

export interface ProjectProps {
  name: string;
  thumbnail: string;
  period: string;
  participant: string;
  skills: Skill[];
  github: string;
  webLink: string;
}
