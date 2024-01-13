import { SectionTittle } from "@/app/components/section-tittle";
import { ExperienceItem } from "./experience-item";
import { WorkExperience as IWorkExperience } from "@/app/types/work-experience";

type workExperienceProps = {
  experiences: IWorkExperience[];
};

export const WorkExperience = ({ experiences }: workExperienceProps) => {
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
        {experiences?.map((experience) => (
          <ExperienceItem
            key={experience.companyName}
            experience={experience}
          />
        ))}

       
      </div>
    </section>
  );
};
