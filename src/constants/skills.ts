import { Skill } from "@/type/skillType";
import { FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import {
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiStyledcomponents,
  SiEslint,
  SiPrettier,
  SiJira,
  SiSlack,
  SiNotion,
  SiVercel,
  SiFigma,
  SiSupabase,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

export const SKILLS_CATEGORIES = [
  { id: "all", text: "All" },
  { id: "language", text: "Language" },
  { id: "framework", text: "Framework/Library" },
  { id: "styling", text: "Styling" },
  { id: "tools", text: "Tools" },
  { id: "deployment", text: "Deployment" },
  { id: "design", text: "Design" },
];

export const SKILLS: Skill[] = [
  { name: "HTML5", category: "language", icon: FaHtml5 },
  { name: "CSS3", category: "language", icon: FaCss3Alt },
  { name: "JavaScript", category: "language", icon: SiJavascript },
  { name: "TypeScript", category: "language", icon: SiTypescript },
  { name: "React", category: "framework", icon: FaReact },
  { name: "Next.js", category: "framework", icon: SiNextdotjs },
  { name: "Redux", category: "framework", icon: SiRedux },
  { name: "Zustand", category: "framework" },
  { name: "TanStack Query", category: "framework" },
  { name: "Tailwind CSS", category: "styling", icon: SiTailwindcss },
  { name: "Styled-components", category: "styling", icon: SiStyledcomponents },
  { name: "GitHub", category: "tools", icon: FaGithub },
  { name: "ESLint", category: "tools", icon: SiEslint },
  { name: "Prettier", category: "tools", icon: SiPrettier },
  { name: "Jira", category: "tools", icon: SiJira },
  { name: "Slack", category: "tools", icon: SiSlack },
  { name: "Notion", category: "tools", icon: SiNotion },
  { name: "REST API", category: "tools", icon: TbApi },
  { name: "Supabase", category: "tools", icon: SiSupabase },
  { name: "Vercel", category: "deployment", icon: SiVercel },
  { name: "Figma", category: "design", icon: SiFigma },
];
