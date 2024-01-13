'use client';

import { cn } from "@/app/lib/utils";
import { motion } from "framer-motion";

type SectionTittleProps = {
  title: string;
  subtittle: string;
  className?: string;
};

export const SectionTittle = ({
  title,
  subtittle,
  className,
}: SectionTittleProps) => {

  const animProps = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  }

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <motion.span className="font-mono text-sm text-cyan-400"
         {...animProps}
         transition={{ duration: 0.5 }} 
      >
        {`../${subtittle}`}
      </motion.span>
      <motion.h3 className="text-3xl font-medium"
        {...animProps}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {title}
      </motion.h3>
    </div>
  );
};
