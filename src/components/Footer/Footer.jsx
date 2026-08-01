import socials from "../../local_data/socials";
import navLinks from "../../local_data/navLinks";
import Copyright from "../Footer/Copyright/Copyright";
import { Link } from "react-router";

function Socials({ socialsArr }) {
    return (
        <div className="relative flex-col justify-center items-center">
            {socialsArr?.map(({ name, Icon, link }) => (
                <div key={name} className="relative flex justify-start
                items-center gap-2 text-white">
                    {Icon && <Icon size={20}/>}
                    <a href={link}>{name}</a>
                </div>
            ))}
        </div>
    );
}

function QuickLinks({ links=navLinks }) {
    return (
        <div className="relative text-white">
            <h1 className="relative text-(--secondary-color)">Quick Links</h1>
            {links.map((link) => (
                <div key={link.div} className="flex items-center hover:underline">
                    <Link to={link.path}>{link.linkName}</Link>
                </div>
            ))}
        </div>
    );
}

function Copyright() {
    return (
        <div className="relative flex justify-center text-white">

        </div>
    );
}

function Footer() {
    {/*
        This function returns two components, which are the social media 
        array (on the right hand side) and the copyright information (on 
        the left).
    */}

    return (
        <div className="relative grid grid-cols-3 place-items-center
        w-full h-50 p-7 border-t border-[rgb(30,30,30)] mt-20
        gap-20">
            <QuickLinks />
            <Socials socialsArr={socials}/>
        </div>
    );
}

export default Footer;