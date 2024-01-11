import { RichTextContent } from "@graphcms/rich-text-types";

export type KnowTech = {
    iconSvg: string,
    name: string,
    startDate: string
}

export type ProjectSection= {
    title: string
    image: {
        url:string
    }  
}

export type Technology = {
    name: string
  }

export type Project = {
    slug: string
    thumbnail: {
      url: string
    }
    title: string
    shortDescription: string
    technologies: Technology[]
    pageThumbnail: {
      url: string
    }
    sections: ProjectSection[]
    description: {
      raw: RichTextContent
      text: string
    }
    liveProjectUrl?: string
    githubUrl?: string
  }