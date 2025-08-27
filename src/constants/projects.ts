import {
  SiNextdotjs,
  SiReacthookform,
  SiRedux,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiZod,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

export const PROJECTS = [
  {
    name: "Bo-Po",
    thumbnail: "/bo-po.png",
    period: "2024.08 ~ 진행중 ",
    participant: "FE 1명(개인프로젝트)",
    skills: [
      { name: "Next.js", category: "framework", icon: SiNextdotjs },
      { name: "TypeScript", category: "language", icon: SiTypescript },
      { name: "Tailwind CSS", category: "styling", icon: SiTailwindcss },
    ],
    github: "https://github.com/osoon9295/portfolio",
    webLink: "https://bo-po.site/",
  },
  {
    name: "Placeholder",
    thumbnail: "/placeholder.png",
    period: "2024.11 ~ 2025.08",
    participant: "BE 1명, FE 3명",
    skills: [
      { name: "Next.js", category: "framework", icon: SiNextdotjs },
      { name: "TypeScript", category: "language", icon: SiTypescript },
      { name: "REST API", category: "tools", icon: TbApi },
      { name: "Redux", category: "framework", icon: SiRedux },
      { name: "TanStack Query", category: "framework" },
      { name: "Tailwind CSS", category: "styling", icon: SiTailwindcss },
      { name: "sonner", category: "tools" },
      { name: "zod", category: "tools", icon: SiZod },
      { name: "react-hook-form", category: "tools", icon: SiReacthookform },
    ],
    github: "https://github.com/PlaceholderProject",
    webLink: "https://www.place-holder.site",
  },
  {
    name: "Plantree",
    thumbnail: "/plantree.png",
    period: "2024.07 ~ 2024.08",
    participant: "DE 1명, FE 5명",
    skills: [
      { name: "Next.js", category: "framework", icon: SiNextdotjs },
      { name: "TypeScript", category: "language", icon: SiTypescript },
      { name: "Zustand", category: "framework" },
      { name: "TanStack Query", category: "framework" },
      { name: "Tailwind CSS", category: "styling", icon: SiTailwindcss },
      { name: "Supabase", category: "tools", icon: SiSupabase },
    ],
    github: "https://github.com/osoon9295/plantree",
    webLink: "https://www.plantreeforest.com/",
  },
];
