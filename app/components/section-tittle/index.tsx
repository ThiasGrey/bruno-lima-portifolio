import { cn } from "@/app/lib/utils";

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
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <span className="font-mono text-sm text-emerald-400">
        {`../${subtittle}`}
      </span>
      <h3 className="text-3xl font-medium">
        {title}
      </h3>
    </div>
  );
};
