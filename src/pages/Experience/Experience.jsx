import experience from "../../local_data/workExperience";

function ExperienceTile() {
    return (
        <>
            {experience.toReversed().map((experience) => (
                <div key={experience.id}
                className={`text-[rgba(195,195,195,0.49)] rounded-2xl 
                border-grey border p-5 m-5 hover:-translate-y-1 
                hover:shadow-[0_0_15px_5px_var(--secondary-color)]
                hover:text-[rgb(237,237,237)]
                cursor-pointer transition-all ease-in-out duration-300`}>
                    <h1 className="text-3xl font-semibold">{experience.position}</h1>
                    <h2 className="text-xl italic">{experience.workplace}</h2>
                    <ul className="relative mb-3 mt-3 list-disc list-outside">
                        {experience.skills.map((skill, index) => (
                            <li className="text-md ml-8" key={index}>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            <hr className="h-1"></hr>
        </>
    );
}

function Experiences() {
    return (
        <div className="grid grid-rows-3 grid-cols-1 w-175">
            <ExperienceTile />
        </div>
    );
}

export default function ExperienceTimeline() {
    return (
        <div>
            
            <Experiences />
        </div>
    )
}