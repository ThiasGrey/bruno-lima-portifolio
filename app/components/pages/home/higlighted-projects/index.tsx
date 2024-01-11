import { HorizontalDivider } from "@/app/components/divider/horizontal";
import { SectionTittle } from "@/app/components/section-tittle";
import { ProjectCard } from "./project-card";
import { Link } from "@/app/components/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Project } from "@/app/types/projects";

type HigliightedProjectsProps = {
  projects: Project[];
};

export const HigliightedProjects = ({ projects }: HigliightedProjectsProps) => {
  return (
    <section className="container py-16">
      <SectionTittle subtittle="destaques" title="Projetos em Destaque" />
      <HorizontalDivider className="mb-16" />
      <div>
        {projects?.map((project) => (
          <div key={project.slug}>
            <ProjectCard project={project} />
            <HorizontalDivider className="my-16" />
          </div>
        ))}

        <p className="flex items-center gap-1.5">
          <span className="text-gray-400"> Se interesou?</span>
          <Link href="/projects" className="inline-flex">
            Ver Todos
          </Link>
          <HiArrowNarrowRight />
        </p>
      </div>
    </section>
  );
};
