import SubSection from "../SubSection/SubSection.jsx";

function Skillsgrid() {
    const skills = [
        {id: 1, name: "React.Js", icon: ""},
        {id: 2, name: "JavaScript", icon: ""},
        {id: 3, name: "HTML", icon: ""},
        {id: 4, name: "CSS", icon: ""},
        {id: 5, name: "Tailwind CSS", icon: ""},
        {id: 6, name: "GitHub", icon: ""},
        {id: 7, name: "Figma", icon: ""},
        {id: 8, name: "SQL", icon: ""},
        {id: 9, name: "Python", icon: ""},
        {id: 10, name: "Java", icon: ""}
    ];

    return (
        <div className="grid grid-cols-5 gap-4 rounded-lg p-4">
            {skills.map((skill) =>
                <div key={skill.id} className="border border-gray-500 flex flex-col
                rounded-full shrink-0 w-[150px] text-white
                items-center justify-center p-2">
                    <img src={skill.icon}></img>
                    <p>{skill.name}</p>
                </div>
            )}
        </div>
    )
}

export default function Skillsbar() {
    return (
        <SubSection name={"Skills"}>
            <Skillsgrid />
        </SubSection>
    );
}