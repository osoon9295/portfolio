import { SKILLS_CATEGORIES } from "@/constants/skills";
import { IconType } from "react-icons";

type CategoryId = (typeof SKILLS_CATEGORIES)[number]["id"];

export type Skill = {
  name: string;
  category: CategoryId;
  icon?: IconType;
};
