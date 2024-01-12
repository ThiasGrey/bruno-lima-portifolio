'use client'

import { SectionTittle } from "@/app/components/section-tittle";
import { KnowTech } from "./know-tech";
import { KnowTech as IKnowTechs } from "@/app/types/projects";
import { motion } from "framer-motion";

type KnowTechProps = {
  techs: IKnowTechs[];
};

export const Knowtechs = ({ techs }: KnowTechProps) => {
  return (
    <section className="container py-16">
      <SectionTittle subtittle="Competências" title="Conhecimentos" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {techs?.map((tech, i) => (
          <motion.div key={tech.name}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.15, delay: i * 0.1 }}
          >
            <KnowTech  tech={tech} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
