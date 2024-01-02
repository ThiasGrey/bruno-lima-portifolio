import { SectionTittle } from "@/app/components/section-tittle";
import { ExperienceItem } from "./experience-item";

export const WorkExperience = () => {
  return (
    <section className="container py-6 flex gap-10 md:gap-4 lg:gap-16 md:flex-row flex-col">
      <div className="max-w-[420px]">
        <SectionTittle
          subtittle="experiências"
          title="Experiência Profissional"
        />
        <p className="text-gray-400 mt-6">
          Estou sempre aberto a novos desafios e projetos emocionantes. Vamos
          trabalhar juntos para criar soluções incríveis para sua empresa!
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <ExperienceItem />
        <ExperienceItem />

      </div>
    </section>
  );
};
