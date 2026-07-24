const experience = [
    {
        id: 1, 
        workplace: "Westmead Hospital", 
        position: "Data Entry Assistant",
        skills: [
            {id: 1, info: "Collaborated with internal and external stakeholders"},
            {id: 2, info: ""},
            {id: 3, info: ""}
        ]
    },
    {
        id: 2, workplace: "UTS", position: "Casual Academic",
        skills: []
    },
    {
        id: 3, workplace: "Westpac", position: "Work Placement",
        skills: []
    }
];

function Experiences() {
    return (
        <div className="relative w-full h-full border border-white">
            {experience.map((experience) => (
                <div key={experience.id}>
                    <h1>{experience.position}</h1>
                    <h2>{experience.workplace}</h2>
                    <ul>
                        {experience.skills.map((skill) => (
                            <li key={skill.id}>
                                {skill.info}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default function Experience () {
    return (
        <div>
            <Experiences />
            <h1 className="text-white">This is the experience page</h1>
        </div>
    )
}