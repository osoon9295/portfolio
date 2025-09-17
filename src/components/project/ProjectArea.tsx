import { PROJECTS } from "@/constants/projects";
import Project from "./Project";

interface ProjectAreaProps {
  id?: string;
}

const ProjectArea = ({ id }: ProjectAreaProps) => {
  return (
    <section
      id={id}
      aria-label="project"
      className="w-full flex flex-col justify-center items-center gap-10 h-screen snap-start"
    >
      <h2 className="text-2xl font-semibold">Project</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {PROJECTS.map((project) => {
          return <Project key={project.name} project={project} />;
        })}
      </div>
    </section>
  );
};

export default ProjectArea;
