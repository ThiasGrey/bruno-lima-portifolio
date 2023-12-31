
type TechNameProps = {
    name: string;
}

export const TechBadge = ({ name }: TechNameProps) => {
    return (
        <span className="text-emereald-400 bg-emerald-900/80 text-sm py-1 px-3 rounded-lg">
            {name}
        </span>
    )
}