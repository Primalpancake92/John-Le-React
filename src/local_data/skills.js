import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';

const skills = {
    Frontend: [
        { name: "React.JS", Icon: FaIcons.FaReact },
        { name: "JavaScript", Icon: FaIcons.FaJsSquare },
        { name: "HTML", Icon: FaIcons.FaHtml5 },
        { name: "CSS", Icon: FaIcons.FaCss3Alt },
        { name: "Tailwind CSS", Icon: SiIcons.SiTailwindcss },
    ],
    Core: [
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
        { name: "PostGRe", Icon: SiIcons.SiPostgresql },
        { name: "SQLite", Icon: SiIcons.SiSqlite },
        { name: "MySQL", Icon: SiIcons.SiMysql }
    ]
};

export default skills;