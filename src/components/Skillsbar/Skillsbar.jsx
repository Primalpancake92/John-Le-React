import SubSection from "../SubSection/SubSection.jsx";
import SubSubSection from "../SubSubSection/SubSubSection.jsx";
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';

// const skills = [
//         {id: 1, name: "React.JS", Icon: FaIcons.FaReact },
//         {id: 2, name: "JavaScript", Icon: FaIcons.FaJsSquare },
//         {id: 3, name: "HTML", Icon: FaIcons.FaHtml5 },
//         {id: 4, name: "CSS", Icon: FaIcons.FaCss3Alt },
//         {id: 5, name: "Tailwind CSS", Icon: SiTailwindcss },
//         {id: 6, name: "GitHub", Icon: FaIcons.FaGithub},
//         {id: 7, name: "Figma", Icon: FaIcons.FaFigma},
//         {id: 8, name: "SQL", Icon: FaIcons.FaDatabase},
//         {id: 9, name: "Python", Icon: FaIcons.FaPython},
//         {id: 10, name: "Java", Icon: FaIcons.FaJava, }
//     ];

const skills = {
    Frontend: [
        { name: "React.JS", Icon: FaIcons.FaReact },
        { name: "JavaScript", Icon: FaIcons.FaJsSquare },
        { name: "HTML", Icon: FaIcons.FaHtml5 },
        { name: "CSS", Icon: FaIcons.FaCss3Alt },
        { name: "Tailwind CSS", Icon: SiTailwindcss },
    ],
    "Programming Languages": [
        { name: "JavaScript", Icon: FaIcons.FaJsSquare },
        { name: "Java", Icon: FaIcons.FaJava },
        { name: "Python", Icon: FaIcons.FaPython }
    ],
    Tools: [
        { name: "Github", Icon: FaIcons.FaGithub },
        { name: "Postman", Icon: SiIcons.SiPostman },
        { name: "Jira", Icon: SiIcons.SiJira },
        { name: "Confluence", Icon: SiIcons.SiConfluence },
        { name: "Figma", Icon: SiIcons.SiFigma }
    ], 
    Database: [
        { name: "SQL", Icon: SiIcons.SiPostgresql },
        { name: "SQLite", Icon: SiIcons.Sqlite }
    ]
};

function SkillIcon() {
    return (
        <div className="grid grid-cols-5 gap-12 rounded-lg">
            {skills.map((skill) => (
                <div key={skill.id} className="group border border-gray-500 flex 
                    flex-col rounded-2xl shrink-0 w-37 h-37 text-white
                    items-center justify-center pt-5 pb-5 
                    hover:border-(--secondary-color) hover:-translate-y-2
                    transition-all duration-300 ease-in-out
                    hover:bg-[rgba(255,255,255,0.05)]">
                        {skill.Icon && <skill.Icon size="50" className={`
                            group-hover:text-(--secondary-color) transition-all duration-300
                            ease-in-out
                        `}/>}
                        <p className="mt-5">{skill.name}</p>
                </div>
            ))}
        </div>
    );
}

function Skillsgrid() {
    return (
        <div>
            <SkillIcon/>
        </div>
    );
}

export default function Skillsbar() {
    return (
        <SubSection name={"< Tech Stack />"}>
            <SubSubSection name={"Frontend"} />
            <SubSection name={"Programming"} />
            <SubSection name={"Tools"} />
            <SubSection name={"Database"} />
        </SubSection>
    );
}