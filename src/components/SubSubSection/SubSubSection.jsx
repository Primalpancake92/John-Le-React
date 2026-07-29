import SkillType from "../SkillType/SkillType";

export default function SubSubSection({ name }) {
    return (
        <div className="flex flex-col items-center border
        border-[rgba(255,255,255,0.1)] h-88 p-5 w-[457.5px]
        rounded-3xl">
            <div className="flex items-center justify-center text-2xl 
            text-(--font-color) mt-3">
                {name}
            </div>
            <div className="relative mt-5">
                <SkillType skillName={name} />
            </div> 
        </div>
    );
}