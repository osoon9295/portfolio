import { PROJECTS } from "@/constants/projects";
import Project from "./Project";

const ProjectArea = () => {
  return (
    <section
      aria-label="project"
      className="w-full h-fit flex flex-col items-center gap-10 p-20"
    >
      <h2 className="text-2xl font-semibold">Project</h2>
      <div className="flex flex-row gap-10">
        {PROJECTS.map((project) => {
          return <Project key={project.name} project={project} />;
        })}
      </div>
    </section>
  );
};

export default ProjectArea;
