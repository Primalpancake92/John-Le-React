import skills from "../../local_data/skills";

export default function SkillType({ skillName }) {
    const skillList = skills[skillName] || [];

    return (
        <div className="relative grid grid-cols-3
        gap-5 transition-color duration-300 place-items-center
        ease-in-out">
            {skillList.map(({name, Icon}) => (
                <div key={name} className="group relative text-(--font-color) border
                flex flex-col items-center justify-center gap-2 rounded-lg
                border-(--font-color) py-3 w-25
                hover:border-(--secondary-color) transition-color duration-300
                ease-in-out hover:bg-[rgba(255,255,255,0.1)] shrink-0
                hover:scale-110 hover:-translate-y-1">
                    <div className="group-hover:text-(--secondary-color)
                    transition-all duration-300 ease-in-out">
                        {Icon && <Icon size={50} />}
                    </div>
                    <div className="text-xs">
                        {name}
                    </div>
                </div>
            ))}
        </div>
    );
}