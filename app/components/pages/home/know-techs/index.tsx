import { SectionTittle } from "@/app/components/section-tittle"
import { KnowTech } from "./know-tech"
import { TbBrandNextjs } from "react-icons/tb"

export const Knowtechs = () => {
    return (
        <section className="container py-16">
            <SectionTittle subtittle="Competências" title="Conhecimentos" />

            <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
                {
                    Array.from({length: 8}).map((_, index)=> (
                        <KnowTech key={index} tech={{
                            icon: <TbBrandNextjs />,
                            name: 'NextJs',
                            startDate: '2021-01-01'
                        }}/>
                    ))
                }
            </div>
        </section>
    )
}