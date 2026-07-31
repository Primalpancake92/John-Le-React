import socials from "../../local_data/socials";
import navLinks from "../../local_data/navLinks";
import { Link } from "react-router";

function Socials({ socialsArr }) {
    return (
        <div className="relative flex-col justify-center items-center">
            {socialsArr?.map(({ name, Icon, link }) => (
                <div key={name} className="relative flex justify-start border
                border-white items-center gap-2">
                    {Icon && <Icon size={20}/>}
                    <a href={link}>{name}</a>
                </div>
            ))}
        </div>
    );
}

function QuickLinks({ links=navLinks }) {
    return (
        <div className="relative">
            {links.map((link) => (
                <div key={link.div}>
                    <Link to={link.path}>{link.linkName}</Link>
                </div>
            ))}
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
        <div className="relative flex w-full h-50 bg-[rgb(23,23,23)] p-7
        gap-20 text-white">
            <QuickLinks />
            <Socials socialsArr={socials}/>
        </div>
    );
}

export default Footer;