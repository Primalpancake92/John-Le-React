    import { useState } from "react";
    import experiences from "../../local_data/workExperience";

    function ExperienceTile() {
        return (
            <>
                {experiences.toReversed().map((experience) => (
                    <div key={experience.id}
                    className={`group text-[rgba(255,255,255,0.1)] rounded-2xl border
                    border-gray m-3 flex flex-col justify-center w-175 h-60 px-7
                    hover:-translate-y-1 hover:bg-[rgba(255,255,255,0.1)]
                    hover:border-(--secondary-color)
                    hover:text-[rgb(237,237,237)]
                    cursor-pointer transition-all ease-in-out duration-300`}>
                        <h1 className="text-3xl font-semibold transition-all duration-300
                        group-hover:text-(--secondary-color)">{experience.position}</h1>
                        <h2 className="text-xl italic">{experience.workplace}</h2>
                        <ul className="relative list-disc list-outside">
                            {experience.skills.map((skill, index) => (
                                <li className="text-md ml-8" key={index}>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </>
        );
    }

    export default ExperienceTile;