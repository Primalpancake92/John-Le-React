import SubSection from "../SubSection/SubSection.jsx";
import * as FaIcons from 'react-icons/fa';
import { SiTailwindcss, SiPostgresql } from 'react-icons/si';

const skills = [
        {id: 1, name: "React.JS", icon: FaIcons.FaReact, colour: "text-[#61DAFB]"},
        {id: 2, name: "JavaScript", icon: FaIcons.FaJsSquare, colour: "text-[yellow]"},
        {id: 3, name: "HTML", icon: FaIcons.FaHtml5, colour: "text-orange-500"},
        {id: 4, name: "CSS", icon: FaIcons.FaCss3Alt, colour: "text-blue-500"},
        {id: 5, name: "Tailwind CSS", icon: SiTailwindcss, colour: "text-cyan-500"},
        {id: 6, name: "GitHub", icon: FaIcons.FaGithub},
        {id: 7, name: "Figma", icon: FaIcons.FaFigma},
        {id: 8, name: "SQL", icon: FaIcons.FaDatabase, colour: "text-green-500"},
        {id: 9, name: "Python", icon: FaIcons.FaPython, colour: "text-[rgb(25,90,130)]"},
        {id: 10, name: "Java", icon: FaIcons.FaJava, colour: "text-red-500"}
    ];

function SkillIcon() {

    return (
        <div className="grid grid-cols-5 gap-12 rounded-lg">
            {skills.map((skill) => {
                const ComponentIcon = skill.icon;

                return (
                    <div key={skill.id} className="border border-gray-500 flex 
                    flex-col rounded-2xl shrink-0 w-37 h-auto text-white
                    items-center justify-center pt-5 pb-5 hover:color-[var(--secondary-colour)] 
                    pointer: cursor">
                        {ComponentIcon && <ComponentIcon size={50}/>}
                        <p className="mt-5">{skill.name}</p>
                </div>)
            })}
        </div>
    );
}

function Skillsgrid() {
    return (
        <div>
            <SkillIcon/>
        </div>
    )
}

export default function Skillsbar() {
    return (
        <SubSection name={"Tech Stack"}>
            <Skillsgrid />
        </SubSection>
    );
}