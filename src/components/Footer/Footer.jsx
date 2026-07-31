import socials from "../../local_data/socials";
import { Link } from "react-router-dom";

function Socials({ socialsArr }) {
    return (
        <div className="relative flex-col justify-center">
            {socialsArr.map(({ name, Icon, link }) => (
                <div key={name}
                className="relative flex items-center justify-center">
                    <div className="relative text-white">
                        <div className="relative flex justify-center 
                        items-center">
                            {Icon && <Icon size={10}/>}
                        </div>
                        <a href={link}>{name}</a>
                    </div>
                </div>
            ))}
        </div>
    );
}

function QuickLinks() {
    return (
        <div className="relative">
            <p>This is a placeholder</p>
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
        <div className="relative w-full h-50 bg-[rgb(23,23,23)]">
            <Socials socialsArr={socials}/>
            <QuickLinks />
        </div>
    );
}

export default Footer;