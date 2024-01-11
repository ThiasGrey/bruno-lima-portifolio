import { SectionTittle } from "@/app/components/section-tittle"
import { KnowTech } from "./know-tech"
import { KnowTech as IKnowTechs } from "@/app/types/projects"

type KnowTechProps = {
    techs: IKnowTechs[]
}

export const Knowtechs = ({ techs }: KnowTechProps) => {
    return (
        <section className="container py-16">
            <SectionTittle subtittle="Competências" title="Conhecimentos" />

            <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
                {
                    techs?.map((tech)=> (
                        <KnowTech key={tech.name} tech={tech}/>
                    ))
                }
            </div>
        </section>
    )
}