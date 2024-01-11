import { RichTextContent } from "@graphcms/rich-text-types";
import { KnowTech, Project } from "./projects";

export type Social = {
  url: string;
  iconSvg: string;
};

export type HomePageInfo = {
  introduction: {
    raw: RichTextContent;
  };
  technologies: KnowTech[];
  profilePicture: {
    url: string;
  };
  socials: Social[];
  knowTechs: KnowTech[];

  highlightProjects: Project[];
};

export type ProjectPageData = {
  project: Project;
};

export type ProjectPageStaticData = {
  projects: {
    slug: string;
  }[];
};

export type ProjectsPageData = {
  projects: Project[];
};

export type HomePageData = {
  page: HomePageInfo;
};
